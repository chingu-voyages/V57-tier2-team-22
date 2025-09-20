import Button from './Button';
import { HiOutlineRefresh } from 'react-icons/hi';
import { MdOutlineSaveAlt } from 'react-icons/md';
import Filters from './Filters';

// TODO: create toast component

export default function SectionHeader() {
  return (
    <div className='bg-white rounded-2xl flex flex-col p-5 md:p-7 gap-3 border-b border-grey-secondary'>
      <h1 className='font-bold text-xl mb-3.5 md:text-3xl '>Open PRs</h1>
      <div className='flex gap-5'>
        <div>
          <Button
            variant='secondary'
            onClick={() => {
              alert('saved');
            }}
          >
            <MdOutlineSaveAlt />
            SAVE JSON
          </Button>
        </div>
        <div>
          <Button
            variant='tertiary'
            onClick={() => {
              alert('refreshed');
            }}
          >
            <HiOutlineRefresh />
            refresh
          </Button>
        </div>
      </div>

      <Filters />
    </div>
  );
}
