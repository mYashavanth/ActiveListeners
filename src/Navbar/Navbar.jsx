import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        border={"1px solid red"}
        p={"1rem"}
        position={"sticky"}
        top={"0"}
        zIndex={"99"}
        backgroundColor={"#F9F9F9"}
      >
        <Box width={"20%"} border={"1px solid red"}>
          <Image src={logo} alt="logo" />
        </Box>
        <Center display={"flex"} justifyContent={"space-around"} width={"50%"}>
          <Link to="/">
            <Heading fontSize={"1rem"}>Home</Heading>
          </Link>
          <Link to="/about-us">
            <Heading fontSize={"1rem"}>About Us</Heading>
          </Link>
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              border={"1px solid red"}
              height={"100%"}
            >
              <Heading fontSize={"1rem"}>
                Actions <ChevronDownIcon />
              </Heading>
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              border={"1px solid red"}
              mt={"-0.5rem"}
            >
              <Link to="/corporate-services">
                <MenuItem>Corporate Services</MenuItem>
              </Link>
              <Link to="/individual-services">
                <MenuItem>Individual Services</MenuItem>
              </Link>
              <Link to="/student-services">
                <MenuItem>Student Services</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Link to="/testimonials">
            <Heading fontSize={"1rem"}>Testimonials</Heading>
          </Link>
          <Link to="/blog">
            <Heading fontSize={"1rem"}>Blog</Heading>
          </Link>
          <Link to="/contact-us">
            <Heading fontSize={"1rem"}>Contact Us</Heading>
          </Link>
        </Center>

        <Center
          width={"20%"}
          border={"1px solid red"}
          display={"flex"}
          gap={"1rem"}
        >
          <Button
            backgroundColor={"#B6B801"}
            color={"white"}
            _hover={{ backgroundColor: "#026ABA" }}
          >
            Login
          </Button>
          <Button
            backgroundColor={"#026ABA"}
            color={"white"}
            _hover={{ backgroundColor: "#B6B801" }}
          >
            Sign Up
          </Button>
        </Center>
      </Box>
    </>
  );
}
