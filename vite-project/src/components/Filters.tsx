import DropdownMenu from './DropdownMenu';
import Button from './Button';
import { useState } from 'react';

export default function Filters() {
  const [author, setAuthor] = useState('');
  const [reviewer, setReviewer] = useState('');

  return (
    <div className='flex flex-col gap-2 md:flex-row md:gap-5'>
      <DropdownMenu
        label='Author'
        options={['jazz', 'matthew', 'kevin', 'viral', 'thais']}
        onSelect={setAuthor}
      />
      <DropdownMenu
        label='Reviewer'
        options={['jazz', 'matthew', 'kevin', 'viral', 'thais']}
        onSelect={setReviewer}
      />
      <div className='mt-3 md:mt-0'>
        <Button onClick={() => alert('searching....')}>Search</Button>
      </div>
      {/* TODO: for debugging display, remove later */}
      <div className='text-sm text-error self-center flex-1'>
        Active → Author: {author || 'All'}, Reviewer: {reviewer || 'All'}
      </div>
    </div>
  );
}
