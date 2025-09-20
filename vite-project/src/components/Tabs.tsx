export default function Tabs() {
  return (
    <div className='flex bg-white p-1.5 rounded-full shadow-md font-semibold'>
      <button className='rounded-full py-1.5 text-black text-center flex-1 cursor-pointer active:bg-green active:text-white'>
        Open PR's
      </button>
      <button className='rounded-full py-1.5 text-black text-center flex-1 cursor-pointer active:bg-green active:text-white'>
        Closed PR's
      </button>
    </div>
  );
}
