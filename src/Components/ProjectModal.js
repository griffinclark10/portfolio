import { VStack, Box, Image, Button } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi"

export default function ProjectModal(project){
    let projectImage = "images/portfolio/" + project.image;

    const handleClick = () => {
        const el = document.getElementById(project.title.replace(' ','').toLowerCase());
        if (el.style.display === "none"){
            el.style.display = "block";
        } else {
            el.style.display = "none"
        }
    }

    return (
      <>
      <VStack w="350px" mr={20} cursor="pointer" onClick={handleClick} style={{transition: "height 1s"}}>
        <Box
          bg="white"
          textAlign="center"
        >
        <Image
        src={projectImage}
        alt={projectImage.title}
        boxSize="350px"
        height="auto"
        />
        <div style={{fontSize: "1.25em", padding: "10px"}}>{project.title}</div>
        <div style={{fontSize: "1.25em", padding: "10px"}}>{project.short_description}</div>
        <div id={project.title.replace(' ','').toLowerCase()} style={{display: "none", padding: "10px", transition: "height 1s"}}>
            {project.description}
            <Button
                as="a"
                target="_blank"
                href={project.url}
                mt={20}
                mb={20}
                color="white"
                backgroundColor="red"
                p={10}
                fontWeight="bold"
                leftIcon={project.button_type === "github" ? <AiFillGithub /> : <HiDocumentText />}
                _hover={{
                    color: "white",
                    backgroundColor: "green"
                }}
            >
                <div style={{color: "white"}}>{project.button_label}</div>
            </Button>
        </div>
        </Box>
      </VStack>
      </>
    );
}