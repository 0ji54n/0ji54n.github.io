import {FaPlay, FaPause, FaRedoAlt, FaStepForward, FaStepBackward} from 'react-icons/fa';
import React, {useState, useEffect, useRef} from 'react';
import { IconButton, Flex, Progress, Text, Grid, GridItem, Img} from '@chakra-ui/react';
import sound from "../media/sound.mp3"
import thumbnail from "../media/thumbnail.jpg";

var SongList = ["l u v t e a","m.christmas mr. lawrence","how romantic","the day i met you","claire de lune"]
var song = new Audio(sound);
let intervalID;
let Nameindex;
function settimeLine(){}

export const MusicTimeLine = () =>{
  let [timeLine, settimeLine] = useState(0);
  Nameindex = useRef(0);
  if(timeLine > 137 && timeLine < 418){
    Nameindex.current = 1;
  }
  else if(timeLine > 418 && timeLine < 609){
    Nameindex.current = 2;  
  }
  else if(timeLine > 609 && timeLine < 854){
    Nameindex.current = 3;
  }
  else if(timeLine > 854){
    Nameindex.current = 4;
  }
  else{
    Nameindex.current = 0;
  }
  useEffect(()=>{
      intervalID =  setInterval(()=>{
      settimeLine(song.currentTime);
    }, 1000)
    return ()=> clearInterval(intervalID)
  },[])
  return(
    <Grid h={150} bgColor="#333F50"
    w={{
        base:"70%",
        sm:"70%",
        md: "50%",
        lg: "30%",
        xl: "20%"  
    }}
    marginLeft={{
        base:"none",
        sm:"none",
        md: "none",
        lg: "200",
        xl: "200"
    }}
    marginTop={{
        base:"50",
        sm:"50",
        md: "50",
        lg: "-140",
        xl: "-140"
    }}
    border="1px"
    templateColumns="repeat(24, 1fr)"
    templateRows="repeat(24, 1fr)">
        <GridItem rowStart="8" rowEnd="20" colStart="2" 
        colEnd="10">
            <Img src={thumbnail} alt="thumbnail"/>
        </GridItem>
        <GridItem rowStart="4" rowEnd="11" colStart="11"
        colEnd="23">
            <Text fontFamily="Hack" >NOW PLAYING</Text>
            <Text fontFamily="Hack">---------------</Text>
        </GridItem>
        <GridItem rowStart="11" rowEnd="14"
        colStart="11" colEnd="24">
            <Text fontFamily="Hack" fontSize="13">{SongList[Nameindex.current]}</Text>
        </GridItem>
        <GridItem
        rowStart="14" rowEnd="21"
        colStart="11" colEnd="24">
            <Flex justifyContent="center" marginTop="5">
               <Progress bgColor="gray.500" value={timeLine} h={1} w="90%" max={1140}/>
            </Flex>
        </GridItem>
        <GridItem rowStart="21" rowEnd="24"
        colStart="11" colEnd="24">
            <Flex justifyContent="center">
                <Toggle/>
            </Flex>
        </GridItem>
    </Grid>

  )
}

const Player = () => {

 
  let [Play, setPlay] = useState(0);

  
  const StopButton = () => {
    return (
      <IconButton
      borderRadius="full"
      boxSize="4"
      variant="ghost"
      icon={<FaPause size="10"/>}
      onClick={()=>{
        HandlePlayer()
        song.pause()
        clearInterval(intervalID)
      }}/>
    )
  }

  function HandlePlayer() {
    setPlay(Play+1);
    return ()=>{
      <MusicTimeLine/>
      (Play % 2 === 0) ? <PlayButton/> : <StopButton/>
    }
  }
  
  const PlayButton = () => {
    return (
      <IconButton
      boxSize="4"
      borderRadius="full"
      variant="ghost"
      icon={<FaPlay size="10"/>}
      onClick={()=>{
        HandlePlayer()
        song.play()
        intervalID =  setInterval(()=>{
          settimeLine(song.currentTime);
        }, 1000)
        
      }}/>
    )
  }
  return(
    (Play % 2 === 0) ? <PlayButton/> : <StopButton/>
  )
}
const ResetButton = () => {
  return(
    <IconButton
    borderRadius="full"
    boxSize="4"
    variant="ghost"
    icon={<FaRedoAlt size="10"/>}
    onClick={()=>{
      song.currentTime = 0;
      if(song.pause){
        clearInterval(intervalID)
      }
    }}/>
  )
}

const NextButton = () =>{
  return (
    <IconButton
    borderRadius="full"
    boxSize="4"
    variant="ghost"
    icon={<FaStepForward size="10"/>}
    onClick={()=>{
      if(song.currentTime > 137 && song.currentTime < 418){
        song.currentTime = 418;
      }
      else if(song.currentTime > 418 && song.currentTime < 609){
        song.currentTime = 609;
      }
      else if(song.currentTime > 609 && song.currentTime < 854){
        song.currentTime = 854;
      }
      else if(song.currentTime > 854){}
      else{
        song.currentTime = 137;
      }
    }}/>
  )
}

const PrevButton = () =>{
  return (
    <IconButton
    borderRadius="full"
    boxSize="4"
    variant="ghost"
    icon={<FaStepBackward size="10"/>}
    onClick={()=>{
      if(song.currentTime > 137 && song.currentTime < 418){
        song.currentTime = 0;
      }
      else if(song.currentTime > 418 && song.currentTime < 609){
        song.currentTime = 137;
      }
      else if(song.currentTime > 609 && song.currentTime < 854){
        song.currentTime = 418;
      }
      else if(song.currentTime > 854){
        song.currentTime = 609
      }
      else{}
    }}/>
  )
}

class Toggle extends React.Component {
  render(){
    return (
      <Flex>
        <PrevButton/>
        <Player/>
        <ResetButton/>
        <NextButton/>
      </Flex>
    )
  }
}
export default Toggle