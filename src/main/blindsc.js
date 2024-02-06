import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text,Grid,chakra,Img,shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import file from "../media/blindsc/file.png"
import execute from "../media/blindsc/execute.png"
import dbg from "../media/blindsc/dbg.png"
import poc from "../media/blindsc/poc.png"

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
const Title = () =>{
    return(
        <Flex
        justifyContent="center">
        <Heading
        fontFamily="Anurati"
        marginTop="20"
        fontSize="40"
        color={useColorModeValue('blackAlpha.700','white')}
        >
            BLINDSC
        </Heading>
        </Flex>
    )
}
const Content = () =>{
    return(
        <Flex
        justifyContent="center"
        marginTop="10">
            <Grid
            w={{
                base:"95%",
                sm:"80%",
                md:"70%",
                lg:"60%",
                xl:"60%"
            }}>
            <Img justifySelf="center" borderRadius={10} src={file} alt="file" marginTop="10"/>
            <Img justifySelf="center" borderRadius={10} src={execute} alt="execute" marginTop="10"/>
            <Img justifySelf="center" borderRadius={10} src={dbg} alt="dbg" marginTop="10"/>
            <Text marginTop="10">main見ることで以下2点が分かった：</Text>
            <Text>1．入力したものがshellcodeとして実行される</Text>
            <Text>2．dup2で0(stdint),1(stdout),2(stderr)が全部/dev/nullの記述子になる→write(1,buff,count)が普段画面にbuff出力するが、これで画面の代わり/dev/nullに出力する→flagを画面に出すなどのsyscallが使用不可</Text>
            <Text>攻撃プラン：</Text>
            <Text>1．socketで新しい記述子を作る</Text>
            <Text>2．connectで作った記述子に接続する</Text>
            <Text>3．dup2で0,1を作った記述子に複写する</Text>
            <Text>4．execve(/bin/sh)実行する</Text>
            <Img justifySelf="center" borderRadius={10} src={poc} alt="poc" marginTop="10"/>
            <Flex justifyContent="space-between">
            <Link to="../works/dreamhack/cmd_center">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">cmd_center</Text>
            </Button>
            </Link>
            <Link to="../works/dreamhack/send_sig">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">send_sig</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}
export class BlindSC extends React.Component{
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
                 marginTop: 20}}
             >
                <GoToTop/>
                <Title/>
                <Content/>
            </ChakraBox>
        )
    }
}