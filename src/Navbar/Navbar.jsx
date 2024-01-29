import {
  Box,
  Button,
  Center,
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
      <Box display={"flex"} justifyContent={"space-between"} border={"1px solid red"} p={"1rem"}>
        <Box width={"20%"} border={"1px solid red"}>
          <Image src={logo} alt="logo" />
        </Box>
        <Center display={"flex"} justifyContent={"space-between"} width={"50%"}>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/about-us">
            <h3>About Us</h3>
          </Link>
          <Menu isOpen={isOpen} onClose={onClose} >
            <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose} border={"1px solid red"} height={"100%"}>
              Actions <ChevronDownIcon />
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} border={"1px solid red"} mt={"-0.5rem"}>
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
            <h3>Testimonials</h3>
          </Link>
          <Link to="/blog">
            <h3>Blog</h3>
          </Link>
          <Link to="/contact-us">
            <h3>Contact Us</h3>
          </Link>
        </Center>

        <Center width={"20%"} border={"1px solid red"} display={"flex"} gap={"1rem"}>
          <Button colorScheme="blue" variant="outline">
            Login
          </Button>
          <Button colorScheme="blue" variant="solid">
            Sign Up
          </Button>
        </Center>
      </Box>
    </>
  );
}
