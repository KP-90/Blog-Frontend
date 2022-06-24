import { Link, useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

const CustomCard = (props) => {
    const data = props.item.text
    const navigate = useNavigate()
    const navigation = useNavigate()
    let [count, setCount] = useState(0)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/comments/${props.item.id}`, {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setCount(data.count)
        })
    }, [])

    const handleDelete = (e) => {
        if(window.confirm("Are you sure you want to delete this post?")) {
            fetch(`${process.env.REACT_APP_API_URL}/blog/${props.item.id}/delete`, {
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
            fetch(`${process.env.REACT_APP_API_URL}/blog/${props.item.id}/edit`, {
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
                <Link to={`/blog/${props.item._id}`} state={{ blog: props.item}}>Post #{props.i}</Link>
                 - {props.item.timstamp_formatted}</Card.Header>
            <Card.Body dangerouslySetInnerHTML={{__html: data}}></Card.Body>
            <Card.Footer>
                Published: {props.item.published.toString()}
                <button id="publishBtn" onClick={handlePublish}>Publish</button>
                <Link to={`/blog/${props.item._id}/edit`} state={{item:props.item}}><button id="editBtn">Edit</button></Link>
                <button id="deleteBtn" onClick={handleDelete}>Delete</button>
                <p>{count} comments.</p>
            </Card.Footer>
        </Card>
        
    )
}

export default CustomCard