import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "./Images/logo.png";
import { IoHome } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          backgroundColor={"#F9F9F9"}
          p={"1rem"}
        >
          <Box>
            <Heading color={"#026ABA"}>Counselling Experts</Heading>
            <Text>Want to receive the updates from Active Listeners.</Text>
          </Box>
          <Center display={"flex"} gap={"1rem"}>
            <Input placeholder="Enter your email" required={true} w={"20rem"} />
            <Input placeholder="Enter your Name" required={true} w={"20rem"} />
            <Button
              backgroundColor={"#B6B801"}
              color={"white"}
              _hover={{ backgroundColor: "#026ABA" }}
            >
              SUBSCRIBE
            </Button>
          </Center>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={"5rem"}
          p={"1rem"}
          backgroundColor={"#F0F0F0"}
        >
          <Box w={"20%"}>
            <Image src={logo} alt="logo" />
            <Text>
              Listening Services at Active Listeners are more user defined than
              structured. We believe listening as a service is very
              individualistic and cannot be served as a platter.
            </Text>
          </Box>
          <Box w={"20%"} display={"flex"} flexDirection={"column"} gap={"1rem"}>
            <Heading size={"md"}>Contact Us</Heading>
            <Box>
              <Heading color={"#026ABA"} size={"md"}>
                Active Listeners
              </Heading>
              <Text>
                <IoHome style={{ display: "inline" }} />
                399, 2nd Cross, HBCS Colony, Amarjyothi Layout, Opposite The
                Paul Domlur, Bangalore 71
              </Text>
            </Box>
            <Text>
              <MdCall style={{ display: "inline" }} />
              +91 90360-33300
            </Text>
            <Text>
              <FaPencilAlt style={{ display: "inline" }} />{" "}
              contact@activelisteners.in
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
