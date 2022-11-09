import './App.css';
import {useEffect, useState} from "react";
import InputForm from "./components/input/InputForm";
import axios from "axios";
import PostService from "./components/PostService";

function App() {

    const [value, setValue] = useState('')

    const [post, setPost] = useState([
        {id: 1, name: '', amount: 0, department: '', priceOfSelling: 1.1, created: new Date(),  modified: new Date(), needCancel: false, removed: false}

    ])

    async function fetchPosts() {
        const posts = await PostService.getAll()
        console.log(posts)
        setPost(posts)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <div>
            <InputForm post={post} setPost={setPost} value={value} setValue={setValue} />
        </div>
    );
}

export default App;
