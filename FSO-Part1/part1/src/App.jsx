const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = ({ course }) =>{
  console.log('El nombre del curso se carga mediante el componente Header')
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  console.log('Los contenidos del curso se cargan mediante el componente Content')
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Total = ({ parts }) => {
  console.log('El total de ejercicios se carga mediante el componente Total')
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const Part = ({parts}) => {
  return (
    <div>
      <p>{parts.part} {parts.exercises}</p>
    </div>
  )
}
export default App