import React, { useEffect, useRef } from 'react'

export default function Popup({ news, onClose }) {
    const popupRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-7  rounded-lg shadow-lg relative" ref={popupRef}>
                <h1 className="text-xl font-semibold mb-2 w-[500px]">{news.title}</h1>
                <img src={news.urlToImage === null ? "no-image.jpg" : news.urlToImage} className='w-[570px] h-[400px] object-cover' alt='no image' />
                <p className='w-[700px] mt-3'>{news.content}</p>
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 mt-4 block absolute bottom-4 right-3 hover:border-b-2">
                    Go to website
                </a>
                
                <p>Author:<span className='font-bold'>{news.author}</span></p>
                <p>Publishet at:<span className='font-bold'>{news.publishedAt}</span></p>

                <img onClick={onClose} src="icon-x.png" className='w-[20px] absolute top-3 right-4 cursor-pointer hover:bg-white' />
            </div>
        </div>
    )
}
