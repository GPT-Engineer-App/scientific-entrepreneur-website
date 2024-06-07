import { Box, Button, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGoogle, FaGithub, FaArrowRight } from "react-icons/fa";

const SignIn = () => {
  return (
    <Flex height="100vh">
      {/* Left Section */}
      <Box flex="1" bg="black" color="white" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Image src="https://via.placeholder.com/100" alt="Logo" mb={4} />
        <Heading as="h1" size="lg" mb={6}>Sign in to Kortix</Heading>
        <VStack spacing={4} mb={6}>
          <Button leftIcon={<FaGoogle />} colorScheme="whiteAlpha" variant="outline" width="full">
            Sign in with Google
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="whiteAlpha" variant="outline" width="full">
            Sign in with GitHub
          </Button>
          <Button rightIcon={<FaArrowRight />} colorScheme="whiteAlpha" variant="outline" width="full">
            Continue with email
          </Button>
        </VStack>
        <Link color="teal.500" mb={6}>Don't have an account? Sign up</Link>
        <Text fontSize="sm" textAlign="center">
          Imprint • Data Privacy • Terms and Conditions
        </Text>
      </Box>

      {/* Right Section */}
      <Box flex="1" bgGradient="linear(to-r, teal.500, blue.500)" color="white" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Enabling the migration from human to AI workforce.
        </Heading>
        <Text fontSize="lg" mb={8} textAlign="center">
          One-stop to build, host, monitor & train AI Employee's.
        </Text>
        <Box bg="blackAlpha.700" p={6} borderRadius="md" width="80%">
          <HStack mb={4}>
            <Image borderRadius="full" boxSize="40px" src="https://via.placeholder.com/40" alt="Agent Mirco" />
            <Text>Agent Mirco</Text>
          </HStack>
          <Box bg="whiteAlpha.200" p={2} borderRadius="md" mb={4}>
            <Text>Search</Text>
          </Box>
          <Box bg="whiteAlpha.200" p={2} borderRadius="md" mb={4}>
            <Text>Units (2)</Text>
            <Text>Project 1</Text>
            <Text>Project 2</Text>
          </Box>
          <Box bg="whiteAlpha.200" p={2} borderRadius="md">
            <Text>Templates</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;