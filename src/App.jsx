import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CategoryCountry from './components/CategoryCountry'
import { API_KEY, NewsAPI_URL } from './lib/data'
import { handleNews, selectNews } from './store/slices/newsSlice'
import { selectCountry } from './store/slices/countrySlice'
import { selectCategory } from './store/slices/categorySlice'
import Home from './components/Home'
import { useEffect, useState } from 'react'

function App() {
  const dispatch = useDispatch()

  const category = useSelector(selectCategory)
  const country = useSelector(selectCountry)

  const news = useSelector(selectNews)
  // console.log(news);

  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  useEffect(() => {
    fetch(`${NewsAPI_URL}?country=${country}&category=${category}&pageSize=10&page=${page}&apiKey=${API_KEY}`).then((response) => {
      return response.json()
    }).then((res) => {
      dispatch(handleNews({
        res: res.articles
      }))
      setPageCount(res.totalResults)
    })
  }, [category, country, page])

  function handlePageChange(newPage) {
    setPage(newPage)
}
  return (
    <>
      <div className='bg-gray-600'>
        <CategoryCountry />
        <div className='flex flex-wrap gap-[25px] justify-center items-center mt-[50px]  '>
          {
            news.map((el) => {
              return (
                <Home info={el} key={Math.random()} />
              )
            })
          }
        </div>
        <div className='bg-gray-600 flex gap-4 p-5 justify-center'>
          <button
            className={`${page > 1 ? "w-[35px] h-[35px] bg-white border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5" : "opacity-50 pointer-events-none w-[35px] h-[35px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5"} `}
            onClick={() => handlePageChange(page - 1)}
          >
            &lt;
          </button>
          
          <button
            className={`${page * 10 < pageCount  ? "w-[35px] h-[35px] bg-white border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5" : "opacity-50 pointer-events-none w-[35px] h-[35px]  border-white border-[1px] rounded-[50%]  flex justify-center items-center p-2 cursor-pointer mt-5"} `}
            onClick={() => handlePageChange(page + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  )
}

export default App
