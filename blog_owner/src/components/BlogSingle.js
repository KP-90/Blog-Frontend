import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Header from "./header"
const Blog_single = (props) => {
    const location = useLocation()
    const id = useParams()

    const data = location.state.blog
    let [comments, setComments] = useState(undefined)
    
    // Get all comments for this post
    useEffect(() => {
        //Using process.env variable breaks this for some reason
        fetch(`${process.env.REACT_APP_API_URL}/comments/${id.id}`, {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setComments(data)
        })
    }, [])

    const HandleSubmit = (e) => {
        let comm_text = document.querySelector("#comment_box").value
        let commentor = document.querySelector("#commentor").value
        fetch(`${process.env.REACT_APP_API_URL}/comments`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                post_id: data.id,
                text: comm_text,
                author: commentor
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        
    }

    return(
        <div >
            <Header />
            <div>
                <h1>BLOG SINGLE PAGE</h1>
                {data ? (
                    <Card style={{ width: '95vw' }}>
                        <Card.Header>Post #{props.i} - {data.timestamp_formatted}</Card.Header>
                        <Card.Body dangerouslySetInnerHTML={{__html:data.text}}></Card.Body>
                    </Card>
                ) : (
                    <p>Loading....</p>
                )}
                <form onSubmit={HandleSubmit}>
                    <textarea cols={45} rows={5} id="comment_box" placeholder="Comment..."></textarea>
                    <input type="text" id="commentor" placeholder="Your name"></input>
                    <button type="submit">Post Comment</button>
                </form>
                <div>
                    { comments && (comments.length > 0) ? 
                        (<p>{comments[0].text}</p>) : (<p>No comments yet.</p>)
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Blog_single