import { useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Header from "./header"
const Blog_single = (props) => {
    let [data, setData] = useState('')
    let id = useParams()
    fetch(`http://localhost:4000/blog/${id.id}`)
    .then(response => response.json())
    .then(data => {
        setData(data)
    })
    return(
        <div >
            <Header />
            <div>
                <h1>BLOG SINGLE PAGE</h1>
                {data ? (
                    <Card style={{ width: '95vw' }}>
                        <Card.Header>Post #{props.i} - {props.item.timestamp}</Card.Header>
                        <Card.Body>{props.item.text}</Card.Body>
                    </Card>
                ) : (
                    <p>Loading....</p>
                )}
                
            </div>
        </div>
    )
}

export default Blog_single