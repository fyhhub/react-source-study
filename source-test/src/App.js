import './App.css';
import { createContext, useContext, useReducer, useState } from './react.development.js';
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
  return (
    <div className="parent">
      <button>button</button>
      <span>123</span>
    </div>
  )
}

export default App;
