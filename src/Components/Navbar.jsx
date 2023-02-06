import React from 'react'
import Save from "../Components/Save"
function Navbar() {
  return (
    <div className='code'><h1>
    Code-Editor
    </h1>
    <div className="button">
    <button>{<Save/>}</button>
    <button>Setting</button>
    <button>Sign Up</button>
    <button>Log In</button>

    </div></div>
  )
}

export default Navbar