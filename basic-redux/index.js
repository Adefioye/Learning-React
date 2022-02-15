// Actions are objects that are used to represent events needed to change the
// of the app.
{
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false
  }
}

{
  type: "REMOVE_TODO",
  id: 0,
}

{
  type: "TOGGLE_TODO",
  id: 0
}

{
  type: "ADD_GOAL",
  goal: {
    id: 0,
    name: "Run a Marathon"
  }
}

{
  type: "REMOVE_GOAL",
  id: 0
}

function todos (state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.todo])
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id )
    case "TOGGLE_TODO":
      return state.map(todo => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}))
    default:
      return state
  }
}

function createStore(reducer) {
  // There store should have 4 parts
  // 1. The entire state
  // 2. To get the state (getState)
  // 3. To listen to the state (subscribe)
  // 4. To update the state (dispatch)

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    // call todos function 
    state = reducer(state, action)
    // Loop over listeners and invoke them 
    listeners.forEach((listener) => listener())

  }

  return {
    getState,
    subscribe,
    dispatch
  };
}
