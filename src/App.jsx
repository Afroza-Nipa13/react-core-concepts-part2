import Counter  from './counter';
import Batsman from './batsman';
import Users from './users';
import './App.css'

function App() {
  
  function handleClick(){
    alert('I am Clicked.')
  }

  const handleClick3 =() =>{
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Users></Users>
      <Batsman></Batsman>
      <Counter></Counter>



      {/* <button onClick='handleClick()'>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me2</button>
      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={()=> alert('clicked 4')}>Click Me 4</button>
      <button onClick={()=> handleAdd5(10)}>Click Me 5</button>
    </>
  )
}

export default App
