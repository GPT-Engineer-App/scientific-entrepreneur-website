import { Container, VStack, Box, Heading, Text, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Marko Kraemer"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>
            Marko Kraemer
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Scientist | Entrepreneur | Innovator
          </Text>
        </Box>

        {/* About Section */}
        <Box bg="gray.100" p={8} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            I am a passionate scientist and entrepreneur with a deep interest in innovative technologies and scientific research. With a background in [Your Field], I have dedicated my career to pushing the boundaries of what is possible and bringing new ideas to life.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box p={8}>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg" mb={2}>
                Project One
              </Heading>
              <Text fontSize="md" color="gray.700">
                Description of the first project. Highlight key achievements and technologies used.
              </Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg" mb={2}>
                Project Two
              </Heading>
              <Text fontSize="md" color="gray.700">
                Description of the second project. Highlight key achievements and technologies used.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box bg="gray.100" p={8} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" color="gray.700" mb={4}>
            Feel free to reach out to me via email at <a href="mailto:marko.kraemer@example.com">marko.kraemer@example.com</a> or connect with me on social media.
          </Text>
          <HStack spacing={4} justify="center">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/markokraemer"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              variant="outline"
            />
            <IconButton
              as="a"
              href="https://github.com/markokraemer"
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              variant="outline"
            />
            <IconButton
              as="a"
              href="https://twitter.com/markokraemer"
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="lg"
              variant="outline"
            />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;