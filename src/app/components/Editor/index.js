import React, {useEffect} from 'react';
import './index.scss';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Editor = () => {
    hljs.configure({   // optionally configure hljs
        languages: ['javascript', 'ruby', 'python']
    });
    useEffect(()=>{
        hljs.initHighlightingOnLoad();
    },[])
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block', 'image'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];
    const modules = {
        syntax: true,
        toolbar: toolbarOptions
    }
    return (
        <div className="blog-editor-wrapper">
            <ReactQuill
                modules={modules}
                style={{ height: "100%" }}
            />
        </div>
    )
}

export default Editor
