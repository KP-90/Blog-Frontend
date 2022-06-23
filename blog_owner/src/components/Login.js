import { useNavigate } from 'react-router'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import Header from './header'

const Login = () => {
    let [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log("requrhrqr")
        
        let uname = document.querySelector("#formBasicUsername").value
        let user_pass = document.querySelector("#formBasicPassword").value
        fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: uname,
                password: user_pass
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.length > 0) {
                setErrors(data)
                console.log(data)
            }
            else {
                console.log("Logged in")
                navigate('/')
            }
        })
        
    }

    return(
        <div>
            <Header />
            <Form id='signup-form' onSubmit={HandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {errors && (errors.length > 0) ? 
                    (errors.map(function(error, i) { 
                        return <p key={i}>{error.msg}</p>
                    })
                ) : (
                    <></>
                )}
            </Form>
        </div>
    )
}

export default Login