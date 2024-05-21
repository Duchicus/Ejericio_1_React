import "./Person.css"

export const Person = (props) => {
  return (
    <div>Holaaa {props.name} {props.surname} con {props.age} años</div>
  )
}

export default Person