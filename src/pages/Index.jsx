import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to MusicStream</Heading>
        <Text fontSize="lg" textAlign="center">Your ultimate destination for streaming music. Discover new tracks, create playlists, and enjoy your favorite tunes.</Text>
        <Box boxSize="sm">
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaPlay />} colorScheme="teal" size="lg">
          Start Listening
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;