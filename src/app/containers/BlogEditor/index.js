import React from 'react';
import './index.scss';
import Editor from '../../components/Editor'
import Header from '../../components/RightContainer/Header';
import BlogPostForm from '../../components/BlogPostForm';

const BlogEditor = () => {
    return (
        <div className="blog-editor-container">
            <Header
                routeName="BLOG EDITOR"
                pageIcon="https://img.icons8.com/cotton/64/000000/spiral-bound-booklet--v1.png"
            />
            <div className="blog-editor-content">
                <Editor />
                <BlogPostForm/>
            </div>
        </div>
    )
}

export default BlogEditor;
