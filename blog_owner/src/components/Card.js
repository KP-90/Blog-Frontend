import { Link, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";

const CustomCard = (props) => {
    const data = props.item.text
    const navigate = useNavigate()
    const navigation = useNavigate()

    const handleDelete = (e) => {
        if(window.confirm("Are you sure you want to delete this post?")) {
            fetch(`http://localhost:4000/blog/${props.item.id}/delete`, {
                method: 'POST',
                mode: 'cors'
            })
            .then(response => {
                response.json()
                e.target.parentNode.parentNode.remove()
            })
        }
        else {
            console.log("Denied")
        }
    }

    const handlePublish = (e) => {
        let status = props.item.published
        if(window.confirm("This item is NOT published. Are you sure you want publish it?")) {
            fetch(`http://localhost:4000/blog/${props.item.id}/edit`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({
                    published: true
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }



    return(
        <Card style={{ width: '50rem' }}>
            <Card.Header>
                <Link to={`/blog/${props.item._id}`}>Post #{props.i}</Link>
                 - {props.item.timstamp_formatted}</Card.Header>
            <Card.Body dangerouslySetInnerHTML={{__html: data}}></Card.Body>
            <Card.Footer>
                Published: {props.item.published.toString()}
                <button id="publishBtn" onClick={handlePublish}>Publish</button>
                <Link to={`/blog/${props.item._id}/edit`}><button id="editBtn">Edit</button></Link>
                <button id="deleteBtn" onClick={handleDelete}>Delete</button>
            </Card.Footer>
        </Card>
        
    )
}

export default CustomCard