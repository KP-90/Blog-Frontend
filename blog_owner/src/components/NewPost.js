import { useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import Header from "./header"
const New_post = (props) => {
    const navigate = useNavigate();
    const HandleSumbit = (e) => {
        e.preventDefault()
        console.log("submit acheived")
        navigate("/")

    }   
    
    return(
        <div>
            <Header/>
            <h2>New Post</h2>
            <form onSubmit={HandleSumbit}>
                <textarea></textarea>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default New_post