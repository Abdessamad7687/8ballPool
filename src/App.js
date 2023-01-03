import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState, useEffect } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

export default function App() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${score} fois`;
  })

  return (
    <>
      <div className="buttons">
        <AwesomeButton type="primary" ripple onPress={() => setScore(score + 5000)}>+5K </AwesomeButton> 
        <AwesomeButton  onPress={() => setScore(score + 20000)}>+20K</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 50000)}>+50K</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 100000)}>+100K</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 200000)}>+200K</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 250000)}>+250K</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 1000000)}>+1M</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 2000000)}>+2M</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 5000000)}>+5M</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 10000000)}>+10M</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 20000000)}>+20M</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 30)}>+30M</AwesomeButton>
        <AwesomeButton  onPress={() => setScore(score + 50)}>+50M</AwesomeButton>
      </div>
      <AwesomeButton type="danger" onPress={() => setScore(0)}>Reset</AwesomeButton>
      <span className="Score">{score + 'M'}</span>

    </>
  );
}

