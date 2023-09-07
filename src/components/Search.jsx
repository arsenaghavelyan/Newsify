import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectSearch } from '../store/slices/searchSlice';
import { API_KEY, SearchAPI_URL } from '../lib/data';
import SearchNewsForm from './SearchNewsForm';

export default function Search() {

    const [searchResult, setSearchResult] = useState([])

    const search = useSelector(selectSearch)

    const [page, setPage] = useState(1)
    const [pageSearchCount, setPageSearchCount] = useState(0)

    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`${SearchAPI_URL}?q=${search}&pageSize=20&page=${page}&apiKey=${API_KEY}`).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        }).then((res) => {
            setSearchResult(res.articles)
            setPageSearchCount(res.totalResults)
        }).catch((err) => {
            setError(err.message);
        });
    }, [search, page])


    function handlePageChange(newPage) {
        setPage(newPage)
    }
    
    return (
        <div className='flex flex-col'>
            {error ? (
                <div>
                    An error occurred: {error}
                </div>
            ) : (
                <>
                    {searchResult.length === 0 ? (
                        <div className='bg-gray-600'>
                            Your search was not found
                        </div>
                    ) : (
                        <div className='flex flex-wrap bg-gray-600 gap-[20px] justify-center items-center '>
                            {searchResult.map((el) => (
                                <div key={Math.random()}>
                                    <SearchNewsForm info={el} />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className='bg-gray-600 flex gap-4 p-5 justify-center'>
                        <button
                            className={`${page > 1 ? "w-[35px] h-[35px] bg-white border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5" : "opacity-50 pointer-events-none w-[35px] h-[35px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5"} `}
                            onClick={() => handlePageChange(page - 1)}
                        >
                            &lt;
                        </button>

                        <button
                            className={`${page * 20 < pageSearchCount && page * 20 < 100 ? "w-[35px] h-[35px] bg-white border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5" : "opacity-50 pointer-events-none w-[35px] h-[35px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5"} `}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            &gt;
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
