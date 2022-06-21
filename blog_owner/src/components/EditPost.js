import { useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from "react-bootstrap";
import Header from "./header"
const Edit_Post = (props) => {
    let [data, setData] = useState('')
    let id = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/blog/${id.id}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
          return editorRef.current.getContent();
        };
    }
    
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log("submit acheived")
        fetch(`http://localhost:4000/blog/${data.id}/edit`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({text: log()}),
          })
          .then(response => response.json())
          .then(text => {
            console.log("Succeess:", text)
            navigate("/")
          })
          .catch((error) => {console.log("ERROR:", error)}) 
        }
    
    return(
        
        <div>
            <Header/>
            <h2>Edit Post</h2>
            { data ? (
            <form onSubmit={HandleSubmit} id="editForm">
            <Editor
                id="editTextArea"
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={data.text}
                init={{
                    selector: "editTextArea",
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                      'anchor', 'save', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help' + 'save',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    save_enablewhendirty : true,
                }}
            />
            <button onClick={log}>Save Post</button>
            </form>
            ) : (<p>loading...</p>)}
        </div>
    )
}

export default Edit_Post