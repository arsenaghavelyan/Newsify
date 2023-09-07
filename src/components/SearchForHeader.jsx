import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleSearch } from '../store/slices/searchSlice';

export default function SearchForHeader() {
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="p-1 rounded-md"
        placeholder="Search something"
      />
      <Link to={"search"}>
        <button
          onClick={() => {
            dispatch(handleSearch({ search: inputVal }));
            setInputVal('');
          }}
          className="bg-gray-400 ml-2 p-1 rounded-md text-white"
        >
          Search
        </button>
      </Link>
    </div>
  );
}
