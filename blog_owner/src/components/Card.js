import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
const customCard = (props) => {
    let data = props.item.text
    return(
        <Card style={{ width: '50rem' }}>
            <Card.Header>
                <Link to={`/blog/${props.item._id}`}>Post #{props.i}</Link>
                 - {props.item.timstamp_formatted}</Card.Header>
            <Card.Body dangerouslySetInnerHTML={{__html: data}}></Card.Body>
            <Card.Footer>{props.item.published}</Card.Footer>
        </Card>
        
    )
}

export default customCard