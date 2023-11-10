import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/others/navbar";

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        display="flex"
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
        bgGradient="transparent"
        mx={{ base: "0", md: "auto" }}
        p={4}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "7xl" }}
          color="white"
          mb={4}
        >
          Welcome Quizzy !
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} color="white" mb={8}>
          lets do some fun quizz...
        </Text> <Text fontSize={{ base: "xl", md: "2xl" }} color="RED" mb={8}>
          PLEASE NOTE
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }} color="white" mb={8}>
          Only teacher can create the quiz & if You want to attend the Quiz click attend/give quiz in the navbar
        </Text>
      </Box>
    </>
  );
};

export default Mainpage;
