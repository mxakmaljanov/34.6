import React, { useState } from 'react';
import '../index.css';

function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    return (
        <div className="container2">
            <h2>Add Post</h2>
            <form>
                <input
                    type="text"
                    placeholder="Post nomini kiriting...!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Post matnini kiriting...!"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button type="submit">Qoshish</button>
            </form>
        </div>
    );
}

export default AddPost;
