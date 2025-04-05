// Users;.jsx
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api'

const Users = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
    keepPreviousData: true, // ⬅️ Enables smooth pagination and caching
    staleTime: 5 * 60 * 1000 // ⏰ Optional: cache remains fresh for 5 mins
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Paginated Users - Page {page}</h2>
      <ul>
        {data.data.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span style={{ margin: '0 10px' }}>{page}</span>
        <button
          onClick={() => setPage(old => (!data.total_pages || page >= data.total_pages ? old : old + 1))}
          disabled={page >= data.total_pages}
        >
          Next
        </button>
      </div>

      {isFetching && <p>Fetching...</p>}
    </div>
  )
}

export default Users;
