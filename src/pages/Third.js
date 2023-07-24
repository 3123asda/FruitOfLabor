import React from 'react'
import { Link } from 'react-router-dom'

function Third() {
  return (
    <div>
        First Page: <Link to="/">First Page</Link><br/>
        Second Page: <Link to="/blog">Second Page</Link><br/>
        Third Page: <Link to="/ThirdPage">Third Page</Link>
    </div>
    )
}

export default Third