import React from "react";
import {Flex,Grid,GridItem,SimpleGrid, Text, Highlight,Input,Box} from "@chakra-ui/react"

const DolphinTer = () => {
    return (
        <Flex justifyContent="center" marginTop = "10" marginBottom = "10">
            <Grid bgColor="#333F50" h={50} border="1px"
            w={{
                base:"80%",
                sm:"60%",
                md:"50%",
                lg:"40%",
                xl:"30%"
            }}
            templateRows='repeat(8, 1fr)'
            templateColumns='repeat(24, 1fr)'>
                <GridItem colStart="4" colEnd="24"
                rowStart="5" rowEnd="5">
                    <Text color="purple.500" fontSize="14">0ji54n@TAKO $~ <Highlight query="dolphin" styles={{color:"green.500"}}>dolphin </Highlight><Highlight query="works" styles={{color:"blue.400"}}>works</Highlight> </Text>
                </GridItem>
            </Grid>
        </Flex>
    )
}
const Dolphin = () => {
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
                    fontFamily="Hack"/>
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
                    </SimpleGrid>
                </GridItem> 
            </Grid>
        </Flex>
    )
}

export class NewFolder extends React.Component {
    render(){
        return(
            <Box>
                <DolphinTer/>
                <Dolphin/>
            </Box>
        )
    };
};