import React from 'react'
import { Link } from 'react-router-dom'
import SearchForHeader from './SearchForHeader'

export default function Header() {
    return (
        <div>
            <div className='flex justify-around items-center bg-slate-500 p-[15px] '>
                <div>
                    <Link to={""}>
                        <img src="logo.png" alt="Newsify" className='w-[150px] object-cover' />
                    </Link>
                </div>
                <div>
                    <SearchForHeader />
                </div>
                <div className='w-[63px]'>
                    <Link to={"basket"} >
                        <img src="save-icon.png" />
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    )
}
