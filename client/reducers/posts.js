//reducer takes two thingds

//1.The action ( info about what happened)
//2.copy of current state

function posts(state = [], action) {
    console.log(state, action);
    console.log('this will change');
    return state;
}

export default posts;