import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header'
import Main from './components/Main'

const App = () => {
  const [blogposts, setBlogs] = useState('')
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`, {mode: "cors"})
    .then(response => { 
      return response.json()
    })
    .then(data => {
      setBlogs(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Main data={blogposts}/>
    </div>
  );
}

export default App;