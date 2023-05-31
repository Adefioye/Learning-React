import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUETOADD_TO_COUNT = "add-valuetoadd-to-count";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUETOADD_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  function handleValueToAddChange(event) {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  }

  function handleValueToAddSubmit(event) {
    event.preventDefault();

    dispatch({ type: ADD_VALUETOADD_TO_COUNT });

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }

  return (
    <Panel className="p-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleValueToAddSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleValueToAddChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-500"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
