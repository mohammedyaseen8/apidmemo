import React, { useState } from 'react';

const PutForm = () => {
    const [putData, setPutData] = useState({ id: 1, title: '', body: '', userId: 1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(putData),
            });
            const data = await response.json();
            console.log('PUT Request Successful:', data);
            // Reset the form or update state as needed
        } catch (error) {
            console.error('PUT Request Failed:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPutData({ ...putData, [name]: value });
    };

    return (
        <div>
            <h2>PUT Request</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={putData.title} onChange={handleChange} />
                <br />
                <textarea name="body" placeholder="Body" value={putData.body} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PutForm;
