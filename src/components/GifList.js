const GifList = ({ gifList }) => {
  console.log(gifList)

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    padding: "0.2em"
  }

  const listStyle = {
    padding: "1em",
    // width: "30px"
  }

  const displayGifs = gifList.map((gif) => {
    return (
      <li style={listStyle}>
        <img src={gif.images.original.url} style={{ width: '320px' }} key={gif} />
      </li>
    )
  })
  return (
    <ul style={ulStyle}>
      {displayGifs}
    </ul>
  )
}

export default GifList