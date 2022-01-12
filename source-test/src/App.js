import './App.css';
import { createContext, useContext, useReducer, useState } from 'react';
const initialData = {
  count: 1
}
const Context = createContext(initialData)

function Parent() {
  return (
    <div className="parent">
      parent
      <Child/>
    </div>
  )
}
function Child() {
  const { count, dispatch } = useContext(Context)
  debugger
  const [num, setNum] = useState(0)
  return (
    <div className="parent">
      <button onClick={() => setNum(num + 1)}>num {num}</button>
      <button onClick={() => dispatch({ type: 'add' })}>{count}</button>
      child{count}
    </div>
  )
}
function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
    case 'reduce':
      return {
        count: state.count - 1
      }
    default:
      break
  }
}
// function App() {
//   const [state, dispatch] = useReducer(reducer, initialData)
//   return (
//     <Context.Provider value={{...state, dispatch}}>
//       <div className="App">
//         <Parent/>
//       </div>
//     </Context.Provider>
//   );
// }

function App() {
  // 第一个hook
  const [num1, setNum1] = useState(0)
  let state

  // 第二个hook
  if (num1 > 1) {
    // @eslint-disabled;
    state = useState(0) // eslint-disable-line
  }

  // 第三个hook
  const [num2, setNum2] = useState(0)
  return (
    <div className="parent">
      <button onClick={() => setNum1(2)}>{num1}{num2}</button>
    </div>
  )
}

export default App;
