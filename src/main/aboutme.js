import React from "react";
import { Flex, Grid, GridItem, Img, Text, Highlight, SimpleGrid,Box,chakra, shouldForwardProp } from "@chakra-ui/react";
import terminalbar from "../media/terminalbarsharp.png"
import { motion, isValidMotionProp } from "framer-motion";
import GoToTop from "../components/gototop"
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Txt = () => {
    return(
        <Flex justifyContent="center" marginTop = "5">
        <Grid bgColor="#333F50" h={120} border="1px"
        templateColumns='repeat(24, 1fr)'
        templateRows='repeat(24, 1fr)'
        w={{
            base:"80%",
            sm:"70%",
            md:"40%",
            lg:"40%",
            xl:"20%"
        }}>
            <GridItem
            colStart="2" colEnd="10"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Img src={terminalbar} alt="terminalbar"
                h={3} w="200%" />
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="11" colEnd="20"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1.2,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack" fontSize="12">
                  <Highlight query='cat' styles={{ color: 'blue.400'}}>
                        cat readme.txt
                  </Highlight>
                </Text>
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="4" colEnd="24"
            rowStart="7" rowEnd="24"
            >
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Box>
                <Text fontFamily="Hack" fontSize="12">
                    Name: Le Xuan Nghia
                </Text>
                <Text fontFamily="Hack" fontSize="12" marginTop="2">
                    Date of Birth: 2001/??/??
                </Text>
                <Text fontFamily="Hack" fontSize="12" marginTop="2">
                    Language: English, Vietnamese, 日本語
                </Text>
                </Box>
                </ChakraBox>
            </GridItem>
            <GridItem colStart="2" colEnd="3"
            rowStart="6" rowEnd="9">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack">{`>`}</Text>
                </ChakraBox>
            </GridItem>
        </Grid>
        </Flex>
    )
}
const Skill = () => {
    return(
        <Flex justifyContent="center" marginTop = "5">
        <Grid bgColor="#333F50" h={{
            base:170,
            sm:170,
            md:170,
            lg:150,
            xl:130
        }} border="1px"
        w={{
            base:"90%",
            sm:"80%",
            md:"50%",
            lg:"50%",
            xl:"30%"
        }}
        templateColumns='repeat(24, 1fr)'
        templateRows='repeat(24, 1fr)'>
            <GridItem
            colStart="2" colEnd="10"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Img src={terminalbar} alt="terminalbar"
                h={4} w="200%" />
                </ChakraBox>
            </GridItem>    
            <GridItem
            colStart="11" colEnd="20"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1.2,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack" color="green.500" fontSize="13">
                    <Highlight query="skills" styles={{color:"blue.400"}}>
                        cd skills ; ls
                    </Highlight>
                </Text>
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="4" colEnd="24"
            rowStart="7" rowEnd="24">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <SimpleGrid
                columns={3} spacing={2}
                marginTop="1">
                     <Box height='16px'>
                        <Text fontFamily="Hack" fontSize="13" color="blue.400">C</Text>
                     </Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Assembly</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Python</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Javascript</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >ReactJS</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Disassembler</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Debugger</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Linux</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >RE</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Pwn</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Malware_Analyst</Text></Box>
                     <Box height='16px'><Text fontFamily="Hack" color="blue.400" fontSize="13" >Network</Text></Box>
                </SimpleGrid>
                </ChakraBox>
            </GridItem>
            <GridItem colStart="2" colEnd="3"
            rowStart="8" rowEnd="9">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack">{`>`}</Text>
                </ChakraBox>
            </GridItem>
        </Grid>
        </Flex>
    )
}
const Bio = () => {
    return(
        <Flex justifyContent="center" marginTop = "5" marginBottom="2">
        <Grid bgColor="#333F50" h={{
            base:300,
            sm:300,
            md:250,
            lg:250,
            xl:250
        }} border="1px"
        w={{
            base:"90%",
            sm:"90%",
            md:"60%",
            lg:"60%",
            xl:"40%"
        }}
        templateColumns='repeat(24, 1fr)'
        templateRows='repeat(24, 1fr)'>
            <GridItem
            colStart="3" colEnd="10"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Img src={terminalbar} alt="terminalbar"
                h={19} w="200%" />
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="11" colEnd="20"
            rowStart="3" rowEnd="5"
            >
                <ChakraBox
                transition={{delay:1.2,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack" color="orange.700" fontSize="14">
                    ./bio
                </Text>
                </ChakraBox>
            </GridItem>
            <GridItem
            colStart="4" colEnd="24"
            rowStart="6" rowEnd="24">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Box>
                <Text fontFamily="Hack" fontSize="14">
                2019 Oct -{`>`} エール学園日本語教育学科
                (EHLE Japanese Language School)
                </Text>
                <Text fontFamily="Hack" fontSize="14">|</Text>
                <Text fontFamily="Hack" fontSize="14">2021 Feb -{`>`} Pass N2 Japanese-Language Proficiency Test (JLPT)</Text>
                <Text fontFamily="Hack" fontSize="14">|</Text>
                <Text fontFamily="Hack" fontSize="14">2021 Mar -{`>`} Graduate</Text>
                <Text fontFamily="Hack" fontSize="14">|</Text>
                <Text fontFamily="Hack" fontSize="14">2021 Oct – Present -{`>`} Self-taught programming/hacking</Text>
                </Box>
                </ChakraBox>
            </GridItem>
            <GridItem colStart="2" colEnd="3"
            rowStart="6" rowEnd="9">
                <ChakraBox
                transition={{delay:1.5,
                duration:0.1}}
                initial={{opacity:0}}
                animate={{opacity:1}}>
                <Text fontFamily="Hack">{`>`}</Text>
                </ChakraBox>
            </GridItem>
        </Grid>
        </Flex>
    )
}
export class AboutMe extends React.Component {
    render(){
        return(
            <ChakraBox
            transition={{
               duration: 1,
               ease:"linear"
            }}
            initial={{ 
                marginTop: 40,
                opacity: 0 }}
            animate={{
                marginTop: 0, 
                opacity: 1 }}
            exit={{ opacity:0 }}>
                <GoToTop/>
                <Txt/>
                <Skill/>
                <Bio/>
            </ChakraBox>
        )
    };
};