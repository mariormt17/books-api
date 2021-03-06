import React from 'react'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/client'
import {withProvider} from '../graphqlProvider'

const booksQuery = gql`
  query allBooks {
    books {
      title
    }
  }
`

const loading = false
const Book: React.FunctionComponent = ({title}) => {
  return <li>{title}</li>
}

const Books = () => {
  const {data, loading, error} = useQuery(booksQuery)
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

export default withProvider(Books)