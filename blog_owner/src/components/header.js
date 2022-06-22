import { Link } from "react-router-dom"

const Header = (props) => {

    return(
        <div className="banner container-fluid">
            <Link to={'/'}>
                <h1>Blog HQ</h1>
            </Link>
            <Link to={'/new'}><h2>Start</h2></Link> 
            <Link to={'/user/signup'}>Signup</Link>     
        </div>
        
    )
}

export default Header