const App = () => {
  const course = 'Half Stack application development'
  const part =[{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
const Header=(course)=>{
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}
const Content=(parts)=>{
  return(
    <> 
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </>
  )
}
const Total=(props)=>{
  return(
    <>
      <p>Number of exercises {props.part1.exercises+props.part2.exercises+props.part3.exercises}</p>
    </>
  )
}
const Part=(props)=>{
  
  return(
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )
}
export default App