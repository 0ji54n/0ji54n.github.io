import React from "react";
import {Button,Heading,Flex,useColorModeValue,Text,Grid,chakra,Img,shouldForwardProp} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa";
import GoToTop from "../components/gototop";
import { motion, isValidMotionProp } from "framer-motion";
import file from "../media/mmapped/file.png"
import stack from "../media/mmapped/stack.png"
import stack2 from "../media/mmapped/stack2.png"
import stack3 from "../media/mmapped/stack3.png"
import stack4 from "../media/mmapped/stack4.png"
import poc from "../media/mmapped/poc.png"

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
            MMAPPED
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
            <Img justifySelf="center" borderRadius={10} src={file} alt="file" marginTop="10" marginBottom="10"/>
            <Text>chall.c確認した上、カナリアが外したこともわかる。</Text>
            <Text>バイナリ実行すると以下のように：</Text>
            <Text>1. 同じダイレクトリーでflagファイル内容をfd変数に出力</Text>
            <Text>2. fake_flag_addrとbufのメモリアドレスを画面に出力</Text>
            <Text>3. mmap呼び出し、flagファイルの内容を仮想記憶にマッピングして、その仮想メモリのアドレスを画面に出力</Text>
            <Text>4. ユーザー入力を待つ（60バイトまで入力可能）、入力したものがbufに保存</Text>
            <Text>5. mprotect(real_flag_addr, len, PROT_NONE)呼び出すことでflag内容がある仮想記憶ゾーンがアクセス不可能にする</Text>
            <Text>6. fake_flag_addrとbufにある内容を画面に出力</Text>
            <Text>7. mmunmap呼び出し、仮想記憶にある情報を消す</Text>
            <Text>8. flagファイルクローズする</Text>
            <Text>bufサイズが0x20(32)で定義されるが、60バイトまで入力させるのでバッファオーバーフローの原因となる</Text>
            <Text>具体的に：</Text>
            <Text>mmprotect($rbp-0x18, $rbp-0x8, PROT_NONE)</Text>
            <Text>普通に実行したらrbp-0x18はflag内容保存される仮想記憶アドレス指し、rbp−0x18はflag内容保存される仮想記憶アドレス指し、rbp-0x8がFLAG_SIZE(0x45)である</Text>
            <Text>そうなると仮想記憶ゾーンは他のシステムコール等でアクセスことができない</Text>
            <Img justifySelf="center" borderRadius={10} src={stack} alt="stack" marginTop="10" marginBottom="10"/>
            <Text>しかしbufが60バイトまで入力可能のため、上記の2つにある値を上書きすることもできる</Text>
            <Text>例えば：</Text>
            <Img justifySelf="center" borderRadius={10} src={stack2} alt="stack2" marginTop="10" marginBottom="10"/>
            <Text>これで仮想記憶ゾーンがアクセス許可制限されなくなった</Text>
            <Text>2. write(1, $rbp-0x10, 0x45)</Text>
            <Text>mprotect呼び終わった後にwriteでfake_flag_addrを画面に出力</Text>
            <Img justifySelf="center" borderRadius={10} src={stack3} alt="stack3" marginTop="10" marginBottom="10"/>
            <Text>1のようにbufを32バイト以上に入力すると：</Text>
            <Img justifySelf="center" borderRadius={10} src={stack4} alt="stack4" marginTop="10" marginBottom="10"/>
            <Text>これでflagがある仮想アドレスを$rbp-0x10に上書きすると期待通りflagが画面に出力される</Text>
            <Img justifySelf="center" borderRadius={10} src={poc} alt="poc" marginTop="10" marginBottom="10"/>
            <Flex justifyContent="space-between">
            <Link to="../works/dreamhack/cherry">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleLeft/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">Cherry</Text>
            </Button>
            </Link>
            <Link to="../works/dreamhack/awesome-basics">
            <Button marginTop="10"
            shadow="dark-lg"
            leftIcon={<FaAngleDoubleRight/>}   
            marginBottom="10">
                <Text
                color={useColorModeValue('blackAlpha.700','white')} fontSize="14">awesome-basics</Text>
            </Button>
            </Link>
            </Flex>
            </Grid>
            </Flex>
    )
}
export class Mmapped extends React.Component{
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