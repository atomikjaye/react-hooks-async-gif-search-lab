const GifList = ({ gifList }) => {
  console.log(gifList)
  const displayGifs = gifList.map((gif) => {
    return (
      <li>
        <img src={gif} key={gif} />
      </li>
    )
  })
  return (
    <ul>
      {displayGifs}
    </ul>
  )
}

export default GifList