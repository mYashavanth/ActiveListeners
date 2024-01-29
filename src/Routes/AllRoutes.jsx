import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import CorporateServices from "../Pages/CorporateServices";
import IndividualServices from "../Pages/IndividualServices";
import StudentServices from "../Pages/StudentServices";
import Testimonials from "../Pages/Testimonials";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import { Box } from "@chakra-ui/react";

export default function AllRoutes() {
  return (
    <>
      <Box border={"1px solid red"} height={"200px"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/corporate-services" element={<CorporateServices />} />
          <Route path="/individual-services" element={<IndividualServices />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Box>
    </>
  );
}
