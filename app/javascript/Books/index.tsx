import React from 'react'

const data = {
  books: [
    {
      id: '1',
      title: 'The Rails Way 5',
    },
  ],
}

const loading = false
const Book: React.FunctionComponent = ({title}) => {
  return <li>{title}</li>
}

const Books = () => {
  if (loading) {
    return <span>"Loading..."</span>
  }
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.books.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </ul>
    </div>
  )
}

export default Books