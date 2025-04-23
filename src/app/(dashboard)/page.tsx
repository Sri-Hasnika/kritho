'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = async () => {
  const [currentUser, setCurrentUser] = useState({})

  const handleUser = async () => {
    const res = await axios.get('/api/user')
    setCurrentUser(res.data)
  }

  useEffect(() => {
    handleUser()
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  )
}

export default page
