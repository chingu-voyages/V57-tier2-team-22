import React from "react";
import { useState, useEffect } from "react";
import prData from "../data/mockData.json";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { formatDate } from "../utils/formatDate";

interface Props {
  date: string;
}

const PRDashboard: React.FC = () => {
  const items: Item[] = prData;

  console.log(items);

  const [prs, setPrs] = useState(items);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const totalPages = Math.ceil(prs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = prs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center bg-[#f5f5f4]">
      <div style={{ width: "70vw" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "solid 1px lightgray",
          }}
        >
          <thead>
            <tr>
              <th style={thStyleId}>#</th>
              <th style={thStyleTitle}>TITLE</th>
              <th style={thStyleAuthor}>AUTHOR</th>
              <th style={thStyleCreated}>CREATED</th>
              <th style={thStyleReviewers}>REVIEWERS</th>
              <th style={thStyleDate}>LAST ACTION DATE</th>
              <th style={thStyleArrow}></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((pr) => (
              <tr key={pr.number} style={trStyle}>
                <td style={tdStyleId}>{pr.number}</td>
                <td style={tdStyleTitle}>
                  <a href={pr.url}>{pr.title}</a>
                </td>
                <td style={tdStyleAuthor}>
                  <div className="flex items-center">
                    <img src={pr.author.avatar} className="h-10 rounded-4xl" />
                    <p className="ml-2">{pr.author.username}</p>
                  </div>
                </td>
                <td style={tdStyleCreated}>{formatDate(pr.createdAt)}</td>
                <td style={tdStyleReviewers}>
                  {pr.reviewers.map((i) => (
                    <div className="flex items-center p-2">
                      <img src={i.avatar} className="h-10 rounded-4xl" />
                      <p className="ml-2">{i.username}</p>
                    </div>
                  ))}
                </td>
                <td style={tdStyleDate}>{formatDate(pr.lastActionDate)}</td>
                <td style={tdStyleArrow}>
                  <ChevronRightIcon className="hover:cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6 mb-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`px-4 py-2 rounded hover:cursor-pointer ${
                page === currentPage
                  ? "bg-green text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const thStyleId: React.CSSProperties = {
  textAlign: "left",
  height: "50px",
  width: "5vw",
  paddingLeft: "30px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};
const thStyleTitle: React.CSSProperties = {
  textAlign: "left",
  height: "50px",
  width: "14vw",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};
const thStyleAuthor: React.CSSProperties = {
  display: "flex",
  textAlign: "left",
  height: "50px",
  width: "12vw",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};
const thStyleCreated: React.CSSProperties = {
  textAlign: "left",
  height: "50px",
  width: "10vw",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};
const thStyleReviewers: React.CSSProperties = {
  textAlign: "left",
  height: "50px",
  width: "15vw",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};
const thStyleDate: React.CSSProperties = {
  textAlign: "left",
  height: "50px",
  width: "13vw",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};

const thStyleArrow: React.CSSProperties = {
  textAlign: "left",
  height: "50px",
  width: "2vw",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  color: "#7B818E",
  fontWeight: "600",
  backgroundColor: "#F9FAFB",
};

const tdStyleId: React.CSSProperties = {
  height: "70px",
  width: "5vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#121827",
  paddingLeft: "30px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const tdStyleTitle: React.CSSProperties = {
  height: "70px",
  width: "14vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#121827",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const tdStyleAuthor: React.CSSProperties = {
  height: "70px",
  width: "12vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#121827",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const tdStyleCreated: React.CSSProperties = {
  height: "50px",
  width: "10vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#7F8491",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const tdStyleReviewers: React.CSSProperties = {
  height: "50px",
  width: "15vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#4E5665",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const tdStyleDate: React.CSSProperties = {
  height: "50px",
  width: "13vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#7F8491",
  padding: "10px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const tdStyleArrow: React.CSSProperties = {
  height: "50px",
  width: "2vw",
  textAlign: "left",
  borderBottom: "2px solid #eee",
  color: "#7F8491",
  paddingRight: "30px",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: "600",
};

const trStyle: React.CSSProperties = {
  height: "",
  backgroundColor: "white",
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
};

export default PRDashboard;
