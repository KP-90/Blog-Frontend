import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
const customCard = (props) => {
    return(
        <Card style={{ width: '50rem' }}>
            <Card.Header>
                <Link to={`/blog/${props.item._id}`}>Post #{props.i}</Link>
                 - {props.item.timestamp}</Card.Header>
            <Card.Body>{props.item.text}</Card.Body>
        </Card>
        
    )
}

export default customCard