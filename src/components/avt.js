import {Flex, Img, chakra, shouldForwardProp } from "@chakra-ui/react";
import React from "react";
import profile from "../media/profile.png"
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


export default function Avt() {
    return (
        <Flex justifyContent="center"
        marginTop={{
          base:"10",
          sm:"10",
          md:"10",
          lg:"20",
          xl:"20"
        }}
        marginLeft={{
            base:"none",
            sm:"none",
            md: "none",
            lg: "-500",
            xl: "-500"
        }}>
            <ChakraBox
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: 1
            }}>
              <Img
              boxSize="120" borderRadius="full"
              src={profile} alt="profile"
              boxShadow="dark-lg">
              </Img>
            </ChakraBox>
        </Flex>
    );
};