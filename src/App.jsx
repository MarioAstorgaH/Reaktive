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
      <Content part={part}/>
      <Total part={part}/>
    </div>
  )
}
const Header=(props)=>{
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Content=({part})=>{
  return(
    <> 
      <Part part={part[0]}/>
      <Part part={part[1]}/>
      <Part part={part[2]}/>
    </>
  )
}
const Total=({part})=>{
  return(
    <>
      <p>Number of exercises {part[0].exercises+part[1].exercises+part[2].exercises}</p>
    </>
  )
}
const Part=({part})=>{
  
  return(
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )
}
export default App