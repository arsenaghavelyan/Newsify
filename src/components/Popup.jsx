import React, { useEffect, useRef } from 'react';

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
            <div className="bg-white p-4 md:p-7 rounded-lg shadow-lg relative" ref={popupRef}>
                <h1 className="text-xl md:text-2xl font-semibold mb-2 w-full md:w-[500px]">
                    {news.title}
                </h1>
                <img
                    src={news.urlToImage === null ? 'no-image.jpg' : news.urlToImage}
                    className="w-full md:w-[570px] h-[250px] md:h-[400px] object-cover"
                    alt="no image"
                />
                <p className="w-full md:w-[700px] mt-3">{news.content}</p>
                <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 mt-4 block absolute bottom-4 right-3 hover:border-b-2"
                >
                    Go to website
                </a>

                <p>
                    Author:<span className="font-bold">{news.author}</span>
                </p>
                <p>
                    Published at:<span className="font-bold">{news.publishedAt}</span>
                </p>

                <img
                    onClick={onClose}
                    src="icon-x.png"
                    className="w-6 h-6 md:w-8 md:h-8 absolute top-3 right-4 cursor-pointer hover:bg-white"
                    alt="Close"
                />
            </div>
        </div>
    );
}
