import React from "react";

export default function Stats(props) {
  let playersCount = props.playerData.length;
  let totalPoint = props.playerData.reduce((prev, curr)=>{
    console.log(curr.name+'점수', curr.score);
    prev += curr.score;
    return prev;
  })
  return (<>
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{0}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{0}</td>
      </tr>
      </tbody>
    </table>    
  </>);
}