import React from "react";
import {Flex,Grid,GridItem,Img, Text, Highlight,Box,chakra, shouldForwardProp} from "@chakra-ui/react"
import terminalbar from "../media/terminalbarsharp.png"
import { motion, isValidMotionProp } from "framer-motion";
import GoToTop from "../components/gototop";
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const DolphinTer = () => {
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={50} border="1px"
            w={{
                base:"80%",
                sm:"60%",
                md:"40%",
                lg:"30%",
                xl:"30%"
            }}
            templateRows='repeat(8, 1fr)'
            templateColumns='repeat(24, 1fr)'>
                <GridItem colStart="4" colEnd="13"
                rowStart="5" rowEnd="5">
                    <Img src={terminalbar} alt="terminalbar"
                    h="80%" w="100%" />
                </GridItem>
                <GridItem colStart="14" colEnd="24"
                rowStart="5" rowEnd="5">
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
const Dolphin = () => {
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={{
                base:1000,
                sm:700,
                md:500,
                lg:500,
                xl:550
            }} border="1px"
            w={{
                base:"90%",
                sm:"90%",
                md:"80%",
                lg:"70%",
                xl:"40%"
            }}>
                <Box margin="10">
                    <Text fontFamily="Hack" fontSize="13" as="i">
                    “The Front Line Advanced Research and Expertise (FLARE) team is an elite technical group of malware analysts, researchers, and hackers. We are looking to hire smart individuals interested in reverse engineering. We have created this series of binary challenges to test your skills. We encourage anyone to participate and practice their skills while having fun!”
                    </Text>
                    <Text marginTop="5" fontFamily="Hack" fontSize="13">
                    Starting in 2014, FlareOn is a world-scale Reverse Engineering CTF challenge that attracts many participants every year. They could be a skilled, talented professional, or could just be a student who has interested in this kind of stuff and can join the fun.
                    </Text>
                    <Text fontFamily="Hack" fontSize="13" marginTop="5">
                    This folder contains solutions for Flare On 2022 (Flare On 9) challenges (There were 11 challenges and I only solved 7). Even though the CTF has ended, you still be able to download the challenges of this year and the year before that and try it yourself anytime. So if you want to try it first, get out of here now and come back again when you’re completely stuck. Or if you’ve completed the challenge and want to know how I solved it or for any other reasons, enjoy reading my writeups and I hope you also enjoy reading my blog!
                    </Text>
                </Box>
            </Grid>
        </Flex>
    )
}

export class WhatIsFlareOn extends React.Component {
    render(){
        return(
        <ChakraBox
        transition={{
           duration: 1 
        }}
        initial={{ 
            marginTop: 20,
            opacity: 0 }}
        animate={{
            marginTop: 0, 
            opacity: 1 }}
        exit={{
            marginTop: 20}}> 
        <GoToTop/>
        <DolphinTer/>
        <Dolphin/>
        </ChakraBox>
        )
    };
};