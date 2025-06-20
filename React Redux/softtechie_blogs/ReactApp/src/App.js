// App.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from './Actions';
import './App.css';

function App({ posts, addPost }) {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postTitle.trim() && postContent.trim()) {
      addPost(postTitle.trim(), postContent.trim());
      setPostTitle('');
      setPostContent('');
    }
  };

  return (
    <div className="wrapper">
      <h3 style={{ textAlign: 'center', backgroundColor: 'gray', padding: '20px' }}>
        Soft Techie - Blogs
      </h3>
      <div style={{ marginLeft: '230px' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label><br />
          <input
            id="title"
            type="text"
            value={postTitle}
            placeholder="Enter blog title"
            onChange={(e) => setPostTitle(e.target.value)}
          /><br /><br />

          <label htmlFor="content">Content:</label><br />
          <textarea
            id="content"
            rows="5"
            value={postContent}
            placeholder="Enter blog content"
            onChange={(e) => setPostContent(e.target.value)}
          /><br /><br />

          <button type="submit">Add Post</button>
        </form>

        <div style={{ marginTop: '30px' }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid gray',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <a href="#">READ MORE...</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = {
  addPost
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;