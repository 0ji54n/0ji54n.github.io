import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text,Grid,chakra,Img,shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import compile from "../media/cherry/compile.png"
import execute from "../media/cherry/execute.png"
import execute2 from "../media/cherry/execute2.png"
import read from "../media/cherry/read.png"
import read2 from "../media/cherry/read2.png"
import poc from "../media/cherry/poc.png"

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
            CHERRY
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
            <Text>初級レベルなスタックバッファオーバーフロー。</Text>
            <Img justifySelf="center" borderRadius={10} src={compile} alt="compile" marginTop="10" marginBottom="10"/>
            <Text>＝＞NXとPIEが無効</Text>
            <Text>1回目のreadで入力したものが"cherry"ある場合2回のreadへ進む</Text>
            <Img justifySelf="center" borderRadius={10} src={read} alt="read" marginTop="10" marginBottom="10"/>
            <Text>バッファサイズ（fruitとbuf）が6で定義されるが、readで使用されるcount（buf_size）が0x10まで入力させるためオーバーフロー発生。</Text>
            <Text>rsp(0x0)</Text>
            <Text>↓</Text>
            <Text>buf(0x18)</Text>
            <Text>↓</Text>
            <Text>count(0x24)</Text>
            <Text>↓</Text>
            <Text>rbp(0x30)</Text>
            <Text>↓</Text>
            <Text>return address(0x38)</Text>
            <Text>攻撃手順が以下のように：</Text>
            <Text>1. 2回目のreadのcount値上書きする</Text>
            <Text>read（2回目）のcountアドレス：0x7fffffffe7b4</Text>
            <Text>bufアドレス：0x7fffffffe7a8</Text>
            <Text>＝＞13バイトが必要</Text>
            <Img justifySelf="center" borderRadius={10} src={execute} alt="execute" marginTop="10" marginBottom="10"/>
            <Text>これで最後の'a'がcount値を上書きする＝＞0x61（97）バイトまで入力可能となる</Text>
            <Img justifySelf="center" borderRadius={10} src={read2} alt="read2" marginTop="10" marginBottom="10"/>
            <Text>2. __libc_start_call_mainに戻る代わりにflagに戻す</Text>
            <Text>flagアドレス：0x00000000004012bc</Text>
            <Img justifySelf="center" borderRadius={10} src={execute2} alt="execute2" marginTop="10" marginBottom="10"/>
            <Img justifySelf="center" borderRadius={10} src={poc} alt="poc" marginTop="10" marginBottom="10"/>
            <Flex justifyContent="space-between">
            <Link to="../works/dreamhack/">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">back to menu</Text>
            </Button>
            </Link>
            <Link to="../works/dreamhack/mmapped">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">mmapped</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}
export class Cherry extends React.Component{
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