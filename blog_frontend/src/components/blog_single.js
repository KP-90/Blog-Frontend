import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import Header from "./header"

const Blog_single = (props) => {
    const location = useLocation()
    const id = useParams()

    let data = location.state.blog
    let [comments, setComments] = useState(undefined)
    
    // Get all comments for this post
    useEffect(() => {
        //Using process.env variable breaks this for some reason
        fetch(`${process.env.REACT_APP_API_URL}/comments/${id.id}`, {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setComments(data.comments)
        })
    }, [id])

    const HandleSubmit = (e) => {
        e.preventDefault()
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
            window.location.reload()
        })
        
    }


    return(
        <div >
            <Header />
            <div className='content'>
                <h1>BLOG SINGLE PAGE</h1>
                {data ? (
                    <Card style={{ width: '95vw' }}>
                        <Card.Header>Posted {data.timstamp_formatted}</Card.Header>
                        <Card.Body dangerouslySetInnerHTML={{__html:data.text}}></Card.Body>
                    </Card>
                ) : (
                    <p>Loading....</p>
                )}
                <Form id="comment_form" onSubmit={HandleSubmit} >
                    <textarea cols={45} rows={5} id="comment_box" placeholder="Comment..." required></textarea>
                    <Form.Control type="text" id="commentor" placeholder="Your Name" required/>
                    <Button variant="primary" sz="sm" type="submit">Post Comment</Button>
                </Form>

                <div id="commentSection">
                    <h3>Comments:</h3>
                    { comments && (comments.length > 0) ? (
                    comments.map((comment, i) => {
                        return <p key={i}>"{comment.text}" - {comment.author}</p>
                    })
                    ) : (<p>No comments yet.</p>)
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Blog_single