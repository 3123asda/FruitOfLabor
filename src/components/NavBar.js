import React from 'react'
import { Link } from "react-router-dom";


function NavBars() {
  return (
    <div>
      Second Page:<Link to="/blog">Second Page</Link>
      First Page: <a href='/'>First Page</a>
      {/* Third Page: <a href='ThirdPage'>Third Page</a> */}
      Third Page: <Link to="/ThirdPage">Third Page</Link>
    </div>
    
  )
}

export default NavBars