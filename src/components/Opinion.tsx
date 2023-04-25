import React from 'react'

interface Opinion {
    name: string,
    rating: 1 | 2 | 3 | 4 | 5,
    description: string
}

const Opinion = () => {
  return (
    <div>Opinion</div>
  )
}

export default Opinion