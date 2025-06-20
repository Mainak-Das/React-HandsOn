// Create App component and render the BlogPost component
import React, { useRef } from 'react';

export default function BlogPost() {
  // Initialize useRef to store like count
  const likeCountRef = useRef(0);

  // Function to increment like count and log it in the console
  const addLike = () => {
    likeCountRef.current += 1;
    console.log(`Updated Like Count: ${likeCountRef.current}`);
  };

  return (
    <div>
      <h2>A Guide to React</h2>
      <p><i>React provides efficient rendering techniques to improve performance.</i></p>
      <p>Likes (Check console): {likeCountRef.current}</p>
      <button onClick={addLike}>Like 👍</button>
    </div>
  );
}