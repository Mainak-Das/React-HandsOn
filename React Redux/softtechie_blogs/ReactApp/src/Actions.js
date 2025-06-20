export const ADD_POST = 'ADD_POST';

export const addPost = (title, content) => ({
  type: ADD_POST,
  title,
  content
});