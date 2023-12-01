import { useState } from "react";
import { useQuill } from "react-quilljs";
import 'quill/dist/quill.snow.css';
import './text-create.css';
import toolbar from './toolbar';

function TextCreate() {
    const [title, setTitle] = useState('');
    const {quill, quillRef} = useQuill({
        modules: {
            toolbar: toolbar,
        }
    });

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: title,
            content: JSON.stringify(quill.getContents())
        }

        console.log(data);
    }
    return (
        <>
            <h1>Text Quill</h1>
            <form onSubmit={handleSubmit}>
                <label>Ttile:</label>
                <input type="text" placeholder="title" id="value" value={title} onChange={handleChange} />
                <div className="editor">
                    <div ref={quillRef}></div>
                </div>
                <button>Send</button>
            </form>
        </>
    )
}

export default TextCreate

// npm i quill react-quilljs