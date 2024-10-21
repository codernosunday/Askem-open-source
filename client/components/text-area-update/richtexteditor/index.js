import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const RichTextEditor = ({ value, setValue }) => {
    const handleContentChange = (value) => {
        setValue(value)
    }
    const modules = {
        toolbar: [
            [{ 'font': [] }, { 'size': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'clean']
        ]
    };
    return (
        <div>
            <ReactQuill
                value={value}
                onChange={handleContentChange}
                modules={modules}
                placeholder="Type your text here..."
            />
        </div>
    );
};

export default RichTextEditor;
