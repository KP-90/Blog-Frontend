import { Link } from "react-router-dom"
import { useEffect } from "react"

const Header = (props) => {

    return(
        <div className="banner container-fluid">
            <Link to={'/'}>
                <h1>Blog</h1>
            </Link>            
        </div>
    )
}

export default Header