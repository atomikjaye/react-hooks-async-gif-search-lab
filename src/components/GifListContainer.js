import { useEffect, useState } from "react";
import GifList from "./GifList";

const GifListContainer = () => {
  const [gifList, setGifList] = useState([])

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=e3zH1C2XdCygrfGA34d3y734qEPkG355&rating=g&limit=3`)
      .then(r => r.json())
      .then(gifData => {
        console.log(gifData)
        // console.log(data.data[0].images.original.url)
        let gifArr = []
        gifData.data.map((gif) => {
          // console.log("GIF:", gif.images.original.url)
          // console.log(gifList)
          console.log(gifArr)
          return gifArr.push(gif.images.original.url)
        })

        setGifList(gifArr)
        console.log(gifList) // Why does this show as empty?
      }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <ul>
        <GifList gifList={gifList} />
      </ul>
    </div>
  )
}

export default GifListContainer