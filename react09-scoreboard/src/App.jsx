import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Player from './components/Player';

function App() {
  const [playerData, setPlayerData] = useState([
    {idx: 1, name: '홍길동', score: 10},
    {idx: 2, name: '손오공', score: 20},
    {idx: 3, name: '유비', score: 30},
    {idx: 4, name: '달타냥', score: 40},
  ]);
  const [nextVal, setNextVal] = useState(5);

  const addPlayerProcess = (pName) => {
    console.log('onAddPlayer', pName);
    let addPlayer = {idx: nextVal, name: pName, score : 0};

    let copyPlayers = [...playerData];
    copyPlayers.push(addPlayer);
    setPlayerData(copyPlayers);

    // playerData.push(addPlayer);
    // setPlayerData(players);
    // console.log(players);

    setNextVal(nextVal+1);
  }

  const scoreChangeProcess = (flag, playerIdx) => {
    console.log('idx', playerIdx, 'flag', flag);
    let copyPlayers = [...playerData];
    copyPlayers.forEach((row)=>{
      // console.log(row.idx, row.name);
      if (row.idx === playerIdx) {
        // console.log(row.name);
        if(flag === '+')
          row.score += 5;
        else
          row.score -= 5;

        if (row.score<0) {
          alert("최소점수는 0점입니다.");
          row.score = 0;
        }
      }
    });
    setPlayerData(copyPlayers);
  }

  const deletePlayerProcess = (playerIdx) => {
    console.log('삭제idx', playerIdx);

    let newPlayerData = playerData.reduce((prev, curr) => {
      if(curr.idx !== playerIdx) {
        prev.push(curr);
      }
      return prev;
    }, []);
    setPlayerData(newPlayerData);
  }


  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playersData={playerData}/>
      {
        playerData.map((playerRow) => (
          <Player playerData={playerRow}
            onChangeScore={scoreChangeProcess}
            onDeletePlayer={deletePlayerProcess} />
        ))  
      }
      <AddPlayerForm onAddPlayer={addPlayerProcess}></AddPlayerForm>

    </div>
  );
}

export default App;
