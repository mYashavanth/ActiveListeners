import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import { MdGroups, MdPerson } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* section 1 */}
      <Box>
        <Box width={"40%"} p={"1rem"}>
          <Heading color={"#026ABA"}>
            Active Listening The Master Key to Effective Communication
          </Heading>
          <Text>
            To be an active listener, we must try to go beyond the words and
            form a rich picture of the other person’s emotions and intentions.
          </Text>
          <Center display={"flex"} gap={"1rem"}>
            <Button
              backgroundColor={"#026ABA"}
              color={"white"}
              _hover={{ backgroundColor: "#B6B801" }}
            >
              Services
            </Button>
            <Button
              backgroundColor={"#B6B801"}
              color={"white"}
              _hover={{ backgroundColor: "#026ABA" }}
            >
              Contact Us
            </Button>
          </Center>
        </Box>
      </Box>

      {/* section 2 */}
      <Box display={"flex"}>
        <Box
          w={"33.3%"}
          p={"1rem"}
          backgroundColor={"#026ABA"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          border={"2px solid white"}
        >
          <MdGroups
            style={{
              width: "15rem",
              height: "100%",
            }}
          />
          <Text position={"relative"} bottom={"3rem"}>
            Corporate Services
          </Text>
        </Box>
        <Box
          w={"33.3%"}
          p={"1rem"}
          backgroundColor={"#B6B801"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          border={"2px solid white"}
        >
          <MdPerson
            style={{
              width: "10rem",
              height: "100%",
            }}
          />
          <Text position={"relative"} bottom={"3rem"}>
            Corporate Services
          </Text>
        </Box>
        <Box
          w={"33.3%"}
          p={"1rem"}
          backgroundColor={"#026ABA"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          border={"2px solid white"}
        >
          <FaGraduationCap
            style={{
              width: "10rem",
              height: "100%",
            }}
          />
          <Text position={"relative"} bottom={"3rem"}>
            Corporate Services
          </Text>
        </Box>
      </Box>

      {/* footer section */}
      <Footer />
    </>
  );
}
