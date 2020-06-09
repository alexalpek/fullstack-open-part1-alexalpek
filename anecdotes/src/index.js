import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const VoteButton = (props) => {

  const {selected, vote, setVote} = props

  const handleEvent = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)   
  }

  return (
    <button onClick={handleEvent}>vote</button>
  )
}

const Button = (props) => { 

  return(
      <button onClick={()=>props.setter(Math.floor(Math.random() * props.limit))}>
      next anecdote
      </button>
  )
}

const Title = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const MostUpvotedAnecdote = ({vote, anecdotes}) => {
  let maxIndex = getMaxIndexOfArray(vote);
    
  return(
    <div>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {vote[maxIndex]} votes.</div>
    </div>
  )
}

const getMaxIndexOfArray = (array) => {
  let max = array[0];
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++){
    if (array[i] > max){
      maxIndex = i;
      max=array[i]; 
    }
  }
  return maxIndex;
}


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0,0,0,0,0,0])   

  return (
    <div>
      <Title text="Anecdote of the day"/>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {vote[selected]} votes.
      </div>
      <VoteButton selected={selected} vote={vote} setVote={setVote}/>
      <Button limit={props.anecdotes.length} setter={setSelected}/>
      <div>
        <Title text="Anecdote with most votes"/>
      </div>
      <div>
        <MostUpvotedAnecdote vote={vote} anecdotes={anecdotes}/>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)