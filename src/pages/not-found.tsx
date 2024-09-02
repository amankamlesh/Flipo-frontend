import React from 'react'
import { TbError404Off } from "react-icons/tb";
const NotFound = () => {
  return (
    <div className="container not-found">

   <TbError404Off/>
  <h1> Page Not Found</h1>

   {/* <Link> Go to Home</Link> */}
    </div>
  )
}

export default NotFound