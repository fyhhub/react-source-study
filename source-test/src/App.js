import './App.css';
import { useState, useEffect } from 'react';


function App() {
  debugger
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count)
    return () => {
      console.log('销毁函数');
    }
  }, [count])

  return (
    <div className="parent">
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App;
