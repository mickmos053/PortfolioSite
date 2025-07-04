import {useEffect, useState} from 'react';

export function Playground()
{
    const [globalLikes, setGlobalLikes] = useState(0);
  const [playersName, setPlayersName] = useState("pikachu");
  const [pokemonPlayer, setPokemonPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() =>
  {
    fetch(`https://pokeapi.co/api/v2/pokemon/${playersName}`)
    .then((res) => res.json())
    .then((data) => {
      setPokemonPlayer(data);
      setLoading(false);
    })
    .catch((err) => {
      alert(err.message);
      setLoading(false);
    });
  }, [playersName]);

  return (
    <div className = "page-container">
     <h1>Welcome to this page {playersName}, now fuck off</h1> 
     <h1>Your fucking pokemon is: {!loading ? pokemonPlayer.name : "loading..."} </h1> 
      <input className ="myInput" title = "myInputFuckOff"></input>
    <MyButton buttonText ="Pipsak" buttonType="main" onClick = {displayCoolThing} />
    <MyButton buttonText ="sss" buttonType='secondary' />
    <MyButton buttonText ="tamb" buttonType='other' />
    <MyList items= {["This website rips", "This website rocks", "This website slams"]}></MyList>
    <Likes globalLikes = {globalLikes} setGlobalLikes={setGlobalLikes}></Likes>
    <Likes globalLikes = {globalLikes} setGlobalLikes={setGlobalLikes}></Likes>
    <Likes globalLikes = {globalLikes} setGlobalLikes={setGlobalLikes}></Likes>
    <GlobalLikesDisplay globalLikes = {globalLikes}></GlobalLikesDisplay>
    <ControlledComponent playersName= {playersName} setPlayersName={setPlayersName}/>
    </ div>
  )
}

function displayCoolThing()
{
  alert("cool thing");
}

interface ButtonProps
{
  buttonText : string;
  buttonType: "main" | "secondary" | "other";
  onClick?: () => void;
}
function MyButton(props : ButtonProps)
{
  const className = 
  props.buttonType === "main" ? "button-main" : 
  props.buttonType === "secondary" ? "button-secondary" : 
  "button-other";
  return (
    <button 
    className = {`button ${className}`}
    onClick = {props.onClick}> 
    {props.buttonText}</button>
  )
}

function MyList(props : {items: string[]})
{
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key = {index}> 
        {item}
        </li>
      ))}
    </ul>
  )
}


interface LikesProps
{
  globalLikes: number;
  setGlobalLikes: (value: number) => void;
}
function Likes(props: LikesProps)
{
  const [likes, setLikes] = useState(0);

  const addLike = () =>
  {
    setLikes(likes + 1);
    props.setGlobalLikes(props.globalLikes + 1);

  }
  return (
    <>
    <div>Likes: {likes} </div>
    <MyButton buttonText = "Click for likes" buttonType = "main" onClick={addLike} /> 
    </>
  )
}

function GlobalLikesDisplay(props: {globalLikes: number})
{
  return(
    <div className = "globalLikes-diplay">Global Likes: {props.globalLikes}</div>
  )
}

function ControlledComponent(props: {playersName: string, setPlayersName: (name: string) => void})
{

  return(
  <input  value = {props.playersName}
  onChange = {(e) => props.setPlayersName(e.target.value.toUpperCase())}
  title='controlledComponentTextbox'>
  </input>
  )
}

interface Pokemon
{
  id: number
  name: string
  height: number
}

export default Playground