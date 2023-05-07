import React from 'react'
import { Link } from 'react-router-dom'

const Routes = () => {
    return(
        <div>
          {/* Link to the "Secondpage" component */}
          <Link to="/Components/Secondpage"><li>SecondPage</li></Link>
          {/* Link to the "Description" component */}
          <Link to="/Components/Description"><li>Description</li></Link>
        </div>
    )
}
export default Routes
