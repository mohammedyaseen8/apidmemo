import React, { useState } from 'react';

const PostForm = () => {
    const [postData, setPostData] = useState({ title: '', body: '', userId: 1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            const data = await response.json();
            console.log('POST Request Successful:', data);
            // Reset the form or update state as needed
        } catch (error) {
            console.error('POST Request Failed:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    return (
        <div>
            <h2>POST Request</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={postData.title} onChange={handleChange} />
                <br />
                <textarea name="body" placeholder="Body" value={postData.body} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
