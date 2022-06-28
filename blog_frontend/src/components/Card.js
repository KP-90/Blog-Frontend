import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

const CustomCard = (props) => {
    const data = props.item.text
    let [count, setCount] = useState(0)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/comments/${props.item.id}`, {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setCount(data.count)
        })
    }, [props.item.id])

    return(
        <Card style={{ width: '50rem' }}>
            <Card.Header>
                <Link to={`/blog/${props.item._id}`} state={{ blog: props.item}}>Post #{props.i}</Link>
                 - {props.item.timstamp_formatted}</Card.Header>
            <Card.Body dangerouslySetInnerHTML={{__html: data}}></Card.Body>
            <Card.Footer>
                <p>{count} comments.</p>
            </Card.Footer>
        </Card>
        
    )
}

export default CustomCard