import React from 'react'

export default function Share({ info }) {
    // function share() {
    //     if (navigator.share) {
    //         navigator.share({
    //             title:info.title,
    //             text:info.content,
    //             url:info.url
    //         })
    //     }
    // }
    return (
        <div>
            <img src="share-icon.png"  className='h-[35px]' />
        </div>
    )
}
