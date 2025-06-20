import { ADD_POST } from './Actions';

const initialState = {
  posts: []
};

function posts(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        title: action.title,
        content: action.content
      };
      return {
        posts: [...state.posts, newPost]
      };
    default:
      return state;
  }
}

export default posts;