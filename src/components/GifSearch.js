import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const GifSearch = ({ onSearchSubmit }) => {
  const [gifSearch, setGifSearch] = useState('')

  function handleSearchChange(e) {
    setGifSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // send search term to on SearchSubmit

    onSearchSubmit(gifSearch)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={gifSearch}
            onChange={handleSearchChange}
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </form>
    </div>
  )
}

export default GifSearch;