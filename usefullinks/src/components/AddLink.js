import React, { useState, useEffect } from "react";
import axios from "axios";

const AddLink = () => {
    const [link, setLink] = useState({
        url: "",
        tags: []
    });
    // useEffect(()=>{
    //     axios.get(
    //     `https://cors-anywhere.herokuapp.com/http://api.linkpreview.net/?key=5e169da4dde79c4f7a7b77002abf6be113990538502c5&q=${url}`
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
    // }, [url])

    const handleChange = (e) => {
        e.preventDefault();
        setLink({...link, [e.target.name]: e.target.value});
        console.log(link);
    }

    return (
        <div>
        <form>
            <input id= "urlInput" name="urlInput" placeholder="enter a url" onChange={handleChange}/>
            <input name="tagInput" placeholder="add tags separated by a space" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </div>
    );
    };

export default AddLink;
