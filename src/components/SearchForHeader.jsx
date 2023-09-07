import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSearch } from '../store/slices/searchSlice'

export default function SearchForHeader() {
    const [inputVal, setInputVal] = useState("")
    const dispatch = useDispatch()  

    return (
        <div>
            <input type="text" value={inputVal} onChange={(e) => { setInputVal(e.target.value) }} className='p-1 rounded-[4px]' placeholder='Search something'/>
            <Link to={"search"}>
                <button onClick={() => {
                    dispatch(handleSearch({
                        search: inputVal
                    }))
                    setInputVal("")
                }
                } className='bg-gray-400 ml-2 p-1 rounded-[4px] text-white'>Search</button>
            </Link>
        </div>
    )
}
