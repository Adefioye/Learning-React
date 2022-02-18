// Actions are objects that are used to represent events needed to change the
// of the app.

// Generate uniqueid

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// APP CODE

// Action type constant
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";
const RECEIVE_DATA = "RECEIVE_DATA";

// Action creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  };
}

function receiveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}

// For separating data fetching logic from UI logic

function handleAddTodo(name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodoAction(todo));
        cb();
      })
      .catch(() => alert("An error occured, Try again"));
  };
}

function handleToggleTodo(id) {
  return (dispatch) => {
    dispatch(toggleTodoAction(id));

    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodoAction(id));
      alert("An error occured, Try again!");
    });
  };
}

function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodoAction(todo));
      alert("An error occured, Try again");
    });
  };
}

function handleAddGoal(name, cb) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoalAction(goal));
        cb();
      })
      .catch(() => alert("An error occured, Try again"));
  };
}

function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id));

    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoalAction(goal));
      alert("An error occured, Try again!");
    });
  };
}

function handleInitialData() {
  return (dispatch) => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(receiveDataAction(todos, goals));
      }
    );
  };
}

// Middleware hack

// function checkAndDispatch(store, action) {
//   if (
//     action.type === ADD_TODO &&
//     action.todo.name.toLowerCase().indexOf("bitcoin") !== -1
//   ) {
//     return alert("No! That's a bad idea");
//   }

//   if (
//     action.type === ADD_GOAL &&
//     action.goal.name.toLowerCase().indexOf("bitcoin") !== -1
//   ) {
//     return alert("No! That's a bad idea");
//   }

//   return store.dispatch(action);
// }

const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().indexOf("bitcoin") !== -1
  ) {
    return alert("No! That's a bad idea");
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().indexOf("bitcoin") !== -1
  ) {
    return alert("No! That's a bad idea");
  }

  return next(action);
};

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }

  return next(action);
};

// Reducers
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    case RECEIVE_DATA:
      return action.todos;
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    case RECEIVE_DATA:
      return action.goals;
    default:
      return state;
  }
}

function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

// function app(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     goals: goals(state.goals, action),
//   };
// }

const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals,
    loading,
  }),
  Redux.applyMiddleware(thunk, checker, logger)
);

// store.subscribe(() => {
//   const { todos, goals } = store.getState();

//   document.querySelector("#todos").innerHTML = "";
//   document.querySelector("#goals").innerHTML = "";

//   todos.forEach(addTodoToDOM);
//   goals.forEach(addGoalToDOM);
// });

// DOM CODE

// function createRemoveBtn(onClick) {
//   const removeBtn = document.createElement("button");
//   removeBtn.innerHTML = "X";

//   removeBtn.addEventListener("click", onClick);

//   return removeBtn;
// }
// function addTodoToDOM(todo) {
//   const node = document.createElement("li");
//   const text = document.createTextNode(todo.name);
//   const removeBtn = createRemoveBtn(() => {
//     store.dispatch(removeTodoAction(todo.id));
//   });
//   node.appendChild(text);
//   node.appendChild(removeBtn);

//   node.style.textDecoration = todo.complete ? "line-through" : "none";
//   node.addEventListener("click", () => {
//     store.dispatch(toggleTodoAction(todo.id));
//   });

//   document.querySelector("#todos").appendChild(node);
// }

// function addGoalToDOM(goal) {
//   const node = document.createElement("li");
//   const text = document.createTextNode(goal.name);
//   const removeBtn = createRemoveBtn(() => {
//     store.dispatch(removeGoalAction(goal.id));
//   });
//   node.appendChild(text);
//   node.appendChild(removeBtn);

//   document.querySelector("#goals").appendChild(node);
// }

// function addTodo() {
//   const input = document.getElementById("todo");
//   const name = input.value;
//   input.value = "";

//   store.dispatch(
//     addTodoAction({
//       id: generateId(),
//       name,
//       complete: false,
//     })
//   );
// }

// function addGoal() {
//   const input = document.getElementById("goal");
//   const name = input.value;
//   input.value = "";

//   store.dispatch(
//     addGoalAction({
//       id: generateId(),
//       name,
//     })
//   );
// }

// document.querySelector("#todoBtn").addEventListener("click", addTodo);

// document.querySelector("#goalBtn").addEventListener("click", addGoal);

// LIBRARY CODE

// function createStore(reducer) {
//   // There store should have 4 parts
//   // 1. The entire state
//   // 2. To get the state (getState)
//   // 3. To listen to the state (subscribe)
//   // 4. To update the state (dispatch)

//   let state;
//   let listeners = [];

//   const getState = () => state;

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter((l) => l !== listener);
//     };
//   };

//   const dispatch = (action) => {
//     // call todos function
//     state = reducer(state, action);
//     // Loop over listeners and invoke them
//     listeners.forEach((listener) => listener());
//   };

//   return {
//     getState,
//     subscribe,
//     dispatch,
//   };
// }
