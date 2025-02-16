import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../services/axiosInstance.js";
import '../index.css';

function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) {
            alert("hammasini to'ldirmadizu Bos!");
            return;
        }

        axios.post("/posts", { title, body })
            .then(() => {
                alert("Postingiz muvaffaqiyatli qoshildi Bos!");
                navigate("/");
            })
            .catch(() => alert("qandaydir hatolik bor shekilli Bos!"));
    };

    return (
        <div className="container2">
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Post nomini kiriting iltimos...!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Post matnini kiriting iltimos...!"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button type="submit">Qoshish</button>
            </form>
        </div>
    );
}

export default AddPost;
