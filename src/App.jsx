import './App.css'
import Person from "./components/Person/Person"

function App() {
  return (
    <div>
      <span><Person name={"Manel"} surname={"Piernas"} age={22}/></span>
      <span><Person name={"Lucas"} surname={"Lopez"} age={38}/></span>
      <span><Person name={"Marco"} surname={"Jimenez"} age={19}/></span>
    </div>
  )
}

export default App
