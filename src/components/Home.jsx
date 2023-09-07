import React, { useState } from 'react'
import Popup from './Popup';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectSaves } from '../store/slices/saveSlice';
import Share from './Share';

export default function Home({ info }) {

  const [isSave, setIsSave] = useState(false)
  const saves = useSelector(selectSaves)

  const dispatch = useDispatch()
  function handleSave() {
    setIsSave(prev => !prev)
    const filterSaves = isSave ? saves.filter(save => save.url !== info.url) : [...saves, info]

    dispatch(addToBasket({ saveNews: filterSaves }))
  }
  const [selectedNews, setSelectedNews] = useState(null)
  return (
    <>
      <div key={Math.random()} className='p-[10px] h-[550px] w-[420px]  bg-white shadow-[0_0px_10px_rgba(255,255,255,0.5)] rounded-[4px] mb-3 cursor-pointer'  >
        <div onClick={() => setSelectedNews(info)}>
          <div>
            <img src={info.urlToImage === null ? "no-image.jpg" : info.urlToImage} className='w-[470px] h-[300px] object-cover' alt='no image' />
          </div>
          <div className='flex flex-col justify-around items-end'>
            <div className='font-extrabold'>
              <h1>{info.title}</h1>
            </div>
            <hr />
            <div className='mt-2 text-[14px]'>
              <h2>{info.description}</h2>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end mt-[4px] '>
          <span className='border-b hover:border-black'>Save & Share - </span>
          <img src={isSave ? "black-save-icon.png" : "save-icon.png"} onClick={handleSave} className='h-[30px]' />
          <Share  info={info}/>
        </div>
      </div>
      {selectedNews && (
        <Popup news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </>
  )
}
