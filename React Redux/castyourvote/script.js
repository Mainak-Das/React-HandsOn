// Define the action creator function
const voteAction = () => {
    return {
        type: "VOTE"
    };
};

// Initial state for Redux store
const initialState = { count: 0, liked: false };

// Reducer function to handle state updates
const voteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VOTE":
            return { count: state.count + 1, liked: true };
        default:
            return state;
    }
};

// Create the Redux store
const store = Redux.createStore(voteReducer);

// Rendering function to update the button appearance dynamically
const render = () => {
    const state = store.getState();
    const voteButton = document.getElementById("voteButton");

    if (state.liked) {
        voteButton.textContent = "Vote registered!";
        voteButton.style.color = "black";  // Change text color to black
        voteButton.style.backgroundColor = "#00008b";  // Set background color to dark blue
        voteButton.style.padding = "0";  // Remove all padding
        voteButton.style.width = "auto"; // Ensure proper button sizing
        voteButton.style.height = "auto"; // Ensure button doesn't shrink
        voteButton.style.border = "none"; // Remove border if necessary
        voteButton.style.fontWeight = "bold"; // Make text bold
    }
};

// Subscribe to store updates for dynamic button styling
store.subscribe(render);

// Function triggered when the vote button is clicked
const like = () => {
    store.dispatch(voteAction());
};

// Initial rendering setup
render();