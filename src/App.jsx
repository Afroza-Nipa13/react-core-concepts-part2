import Batsman from './batsman';
import Counter from './counter'
import './App.css'


function App() {
  
function handleClick(){
  alert('Clicked')
}


const handleClick3=()=>{
  alert('Clicked3')
}

function handleClick5(num){
 const newNum = num + 5;
 alert(newNum)
}
  return (
    <>
      
      <h3>Vite + React</h3>
    <Batsman></Batsman>
    <Counter></Counter>



      {/* <button onClick="handleClick()">Click Me</button> */}
   
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('I am button 2')
      }}>Click Me2</button>
      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={()=>{alert('clicked4')}}>Click Me4</button>
      <button onClick={()=>handleClick5(7)}>Click Me5</button>
      </>
  )
}

export default App
