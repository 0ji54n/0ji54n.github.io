import React from "react";
import { Flex,Text,useColorModeValue } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Content = () =>{
    return(
        <Text
        color={useColorModeValue('blackAlpha.700','white')}
        fontFamily="Hack">In development {`:(`}</Text>
    )
}

export class Gallery extends React.Component {
    render(){
        return(
            <Flex justifyContent="center" marginTop="20">
                <div>
                    <Helmet>
                        <title>In development</title>
                    </Helmet>
                </div>
                <Content/>
            </Flex>
        )
    };
};