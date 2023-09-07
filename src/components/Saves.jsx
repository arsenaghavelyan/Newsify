import React from 'react'
import { useSelector } from 'react-redux'
import { selectSaves } from '../store/slices/saveSlice'
import SavesForm from './SavesForm'

export default function Saves() {
  const saves = useSelector(selectSaves)
  return (
    <div className='flex flex-wrap bg-gray-600 gap-[20px] justify-center items-center '>
      {
        saves.length == 0 ? 
        <div className='p-[40px]'>
          <span className='text-white'>Nothing saved</span>
        </div> : ""
      }
      {
        saves.map((el) => {
          return (
            <div key={Math.random()} className='flex flex-wrap gap-[25px] justify-center items-center mt-[50px]'>
              <SavesForm info={el} />
            </div>
          )
        })
      }
    </div>
  )
}
