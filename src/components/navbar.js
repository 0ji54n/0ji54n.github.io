import { Grid, Box, GridItem, IconButton, Flex, Tooltip, SimpleGrid, chakra, shouldForwardProp} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Avt from "./avt"
import {RealMusicTerminal} from "./musicterminal"
import { BiHomeCircle, BiUser, BiFolderOpen, BiImage } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";
import Clock from "./Cock";
import { MusicMinimize } from "./musicterminal";
import { FaRedditAlien, FaPinterest } from 'react-icons/fa';
import { motion, isValidMotionProp } from "framer-motion";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Inner1 = () =>{
    return(
        <Grid
        h = '40px'
        templateColumns='repeat(12, 1fr)'
        gap={8}
        >
            <GridItem bgColor="#2C3038" borderRadius="md"
            gridColumn={{
                base: "span 12",
                sm: "span 12",//1x1
                md: "span 13",//2x2
                lg: "span 12",//3x3
                xl: "span 4"//3x3
            }}>
                 <Flex justifyContent="center">
                    <SimpleGrid columns={5} gap={3}>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{y:12,
                    opacity:0}}>
                    <ColorModeSwitcher/>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="Home"
                    borderRadius="full">
                      <Link to="/">
                        <IconButton variant="ghost" icon={<BiHomeCircle/>}
                        _hover={{
                          bgColor : 'rgba(52, 52, 52, 0.2)'
                        }}
                        colorScheme='rgba(52, 52, 52, 0.2)'
                        color="#FFFF00"/>
                      </Link>
                    </Tooltip>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="About me"
                    borderRadius="full">
                    <Link to="about">
                      <IconButton variant="ghost" icon={<BiUser/>}
                      _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                      color="#F69C9C"/>
                    </Link>
                    </Tooltip>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="CTF"
                    borderRadius="full">
                    <Link to="works">
                      <IconButton variant="ghost" icon={<BiFolderOpen/>}
                      _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                      color="#DEEBF7"/>
                    </Link>
                    </Tooltip>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <Tooltip label="..."
                    borderRadius="full">
                    <Link to="gallery">
                      <IconButton variant="ghost" icon={<BiImage/>}
                      _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                      color="#C5E0B4"/>
                    </Link>
                    </Tooltip>
                    </ChakraBox>
                    </SimpleGrid>
                </Flex>
                  
            </GridItem>
            <GridItem colStart={5} colEnd={9} bgColor="#2C3038" borderRadius="md"
            display={{
                base:"none",
                sm:"none",
                md:"none",
                lg:"none",
                xl:"block",
            }}>
                <Flex justifyContent="center">
                    <SimpleGrid columns={5} gap={2}>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <IconButton
                    color="orange.600"
                    variant="ghost"
                    icon={<FaRedditAlien/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.location.href = "https://www.reddit.com/user/lenghia143"
                    }}/>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <IconButton
                    color="blue.200"
                    variant="ghost"
                    icon={<FiTwitter/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.location.href = "https://twitter.com/0ji54n"
                    }}/>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <IconButton
                    color="white"
                    variant="ghost"
                    icon={<FiGithub/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.location.href = "https://github.com/0ji54n/"
                    }}/>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <IconButton
                    color="blue.500"
                    variant="ghost"
                    icon={<FiFacebook/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.location.href = "https://www.facebook.com/q8.LeNghia/"
                    }}/>
                    </ChakraBox>
                    <ChakraBox
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}>
                    <IconButton
                    color="red.600"
                    variant="ghost"
                    icon={<FaPinterest/>}
                    _hover={{
                        bgColor : 'rgba(52, 52, 52, 0.2)'
                      }}
                      colorScheme='rgba(52, 52, 52, 0.2)'
                    onClick={()=>{
                        window.location.href = "https://www.pinterest.jp/lexuannghia143/"
                    }}/>
                    </ChakraBox>
                    </SimpleGrid>
                </Flex>           
            </GridItem>
            <GridItem colStart={10} colEnd={13} bgColor="#2C3038" borderRadius="md"
            display={{
                base: "none",
                sm:"none",
                md: "none",
                lg: "none",
                xl: "block"
            }}>
                <Flex justifyContent="center" fontFamily="Hack" marginTop="2">
                    <Clock/>
                </Flex>
            </GridItem>
        </Grid>
    )
}
export const VeryBottom = () =>{
    return (
        <Grid>
              <Box h="40px" bgColor="#1E222A"
              marginTop="5"
              borderRadius="md"
              boxShadow="dark-lg"
              justifySelf="center"
              w={{
                  base: "50%%",
                  sm:"50%%",
                  md: "60%",
                  lg: "50%",
                  xl: "50%"
              }}>
                  <Inner1/>
              </Box>
        </Grid>
    );
};


export class NavigationBar extends React.Component {
    render(){
        return [<VeryBottom key="0"/>,<Avt key="1"/>,<MusicMinimize key="2"/>,<RealMusicTerminal key="3"/>]
    }
}