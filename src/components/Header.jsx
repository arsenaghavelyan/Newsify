import React from 'react';
import { Link } from 'react-router-dom';
import SearchForHeader from './SearchForHeader';

export default function Header() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-slate-500 p-2 md:p-4">
                <div className="mb-2 md:mb-0">
                    <Link to={""}>
                        <img src="logo.png" alt="Newsify" className="w-32 md:w-48" />
                    </Link>
                </div>
                <div>
                    <SearchForHeader />
                </div>
                <div className="w-12 md:w-16">
                    <Link to={"basket"}>
                        <img src="save-icon.png" alt="Basket" />
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    );
}
