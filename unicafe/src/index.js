import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => <h2>{text}</h2>

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const Statistic = (props) => {
  const {text, value} = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) => {

  const all = good+bad+neutral;
  const average = (good*1 + neutral*0 + bad*-1) / all
  const percentageOfPositiveFeedback = good/all*100 + " %"

  if (all === 0 ) return "No feedback given"

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={all}/>
        <Statistic text="average" value={average}/>
        <Statistic text="positive" value={percentageOfPositiveFeedback}/>
      </tbody>
    </table>
  )
}

const Buttons = ({setGood, setBad, setNeutral, good, bad, neutral}) => {
  return(
    <div>
      <Button handler={()=>setGood(good+1)} text="good"/>
      <Button handler={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button handler={()=>{setBad(bad+1)}} text="bad"/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="give feedback"/>
      <Buttons setGood={setGood} setBad={setBad} setNeutral={setNeutral} neutral={neutral} bad={bad} good={good}/>
      <Title text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)