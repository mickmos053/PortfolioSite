interface DiceProps
{
    minNum: number;
    maxNum: number;
    rollPlayer: number;
    rollEnemy: number;

    setRollPlayer: (value:number) => void
    setRollEnemy: (value: number) => void
}

export function Dice(props: DiceProps)
{
  const handleClick = () =>
  {
    rollDice("player");
  }

  const rollDice = (playerOrEnemy:string) =>
  {
    if(playerOrEnemy === "enemy")
    {
        props.setRollEnemy(Math.floor(Math.random() * (props.maxNum - props.minNum + 1) + props.minNum));
    }
    else
    {
        props.setRollPlayer(Math.floor(Math.random() * (props.maxNum - props.minNum + 1) + props.minNum));
    }
  }

  return (
    <div className = "dice-container"
    onClick = {handleClick}>
        <div className ="dice">
            {props.rollPlayer}
        </div>
    </div>    
  );
}
