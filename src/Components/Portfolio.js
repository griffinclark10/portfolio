import { Flex } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal";
import ProjectModal from "./ProjectModal";

export default function Portfolio(props){
  if (!props.data) return null;

  const projects = props.data.projects.map((project) => <ProjectModal {...project} />);

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <h1>Check Out Some of My Works.</h1>
        <Flex align="center" justify="center">
          {projects}
        </Flex>
      </Fade>
    </section>
  );
}