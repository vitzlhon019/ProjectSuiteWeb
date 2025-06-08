
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/User/GetAllUsers') 
      .then((res) => {
        if (!res.ok) {
          throw new Error('API response was not ok')
        }
        
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching users:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.userId}>
              {user.employeeName} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
