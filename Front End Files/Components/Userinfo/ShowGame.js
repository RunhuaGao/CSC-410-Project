import React from "react";
function ShowSingleGame(props){
    return (
        <tr id = {props.game.id}> 
            <td>{props.game.player1}</td>
            <td>{props.game.player2}</td>
            <td>{props.game.score1}</td>
            <td>{props.game.score2}</td>
            <td>{props.game.result}</td>
        </tr>
    );
}

function ShowGame(props){
    // console.log(props)
    if(props.games.length > 0){
        const games = props.games.map(game=><ShowSingleGame game ={game}/>)
        return (
            <div className = {props.username}>
            <h2 style={{color:"Black"}}> Game History </h2>
            <table style={{width:"200px",border:"1px solid black"}} align="center">
            <tr>
                <th> Player1 </th>
                <th> Player2 </th>
                <th> Score1 </th>
                <th> Score2 </th>
                <th> Result </th>
            </tr>
            {games}
            </table>
            </div>
        );
    }else{
        return(
            <div>
                No game history
            </div>
        )
    }
}
export default ShowGame;
