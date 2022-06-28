import { Link } from "react-router-dom"

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