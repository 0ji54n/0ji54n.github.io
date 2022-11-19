import React, {useState} from "react";
import {Flex,Grid,GridItem,SimpleGrid,Img, Text, Highlight,Input, IconButton,Box} from "@chakra-ui/react"
import terminalbar from "../media/terminalbarsharp.png"
import { AiFillFolder } from "react-icons/ai";
import { Link } from "react-router-dom";

const FolderName = [
    {
        "name" : "FlareOn9",
        "link" : "./flareon9"
    },
    {
        "name" : "New Folder",
        "link" : "./newfolder"
    }
]



const DolphinTer = () => {
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={50} border="1px"
            w={{
                base:"70%",
                sm:"60%",
                md:"40%",
                lg:"30%",
                xl:"20%"
            }}
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(24, 1fr)'>
                <GridItem colStart="2" colEnd="13"
                rowStart="2" rowEnd="4">
                    <Img src={terminalbar} alt="terminalbar" />
                </GridItem>
                <GridItem colStart="14" colEnd="24"
                rowStart="2" rowEnd="4">
                    <Text fontFamily="Hack" fontSize="14" color="blue.400">
                        <Highlight query="dolphin" styles={{color:"green.500"}}>
                            dolphin works
                        </Highlight>
                    </Text>
                </GridItem>
            </Grid>
        </Flex>
    )
}
const Dolphin = (props) => {  
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={550} border="1px"
            w={{
                base:"90%",
                sm:"90%",
                md:"80%",
                lg:"70%",
                xl:"40%"
            }}
            templateColumns="repeat(24, 1fr)"
            templateRows="repeat(24, 1fr)">
                <GridItem
                colStart="3" colEnd="23"
                rowStart="2" rowEnd="4">
                    <Input placeholder="Search..."
                    inputMode="search"
                    focusBorderColor="gray.900"
                    bgColor="gray.800" 
                    fontFamily="Hack"
                    onChange={inputHandler}/>
                </GridItem>
                <GridItem
                colStart="2" colEnd="24"
                rowStart="5" rowEnd="24"
                bgColor="gray.800">
                    <SimpleGrid columns={{
                        base:2,
                        sm:2,
                        md:2,
                        lg:3,
                        xl:3,
                    }}>
                        {
                        FolderName.filter(item =>{
                            if (inputText === ""){
                                return item;
                            }
                            else if (item.name.toLowerCase().includes(inputText.toLowerCase())){
                                return item;
                            }    
                        }).map((item, index) => (
                            <Box margin="10" key={index}>
                            <Link to={item.link}>
                                <IconButton
                                boxSize="20"
                                variant="ghost"
                                icon={<AiFillFolder size="80"/>}/>
                            </Link>
                            <Text fontFamily="Hack">{item.name}</Text>
                            </Box>
                        ))
                        }
                    </SimpleGrid>
                </GridItem> 
            </Grid>
        </Flex>
    )
}

export class Works extends React.Component {
    render(){
        return [<DolphinTer key="WorkDolphinTerminal"/>,<Dolphin key="WorkDolphin"/>]
    };
};