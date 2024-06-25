import { Container, VStack, Heading, Text, Box, Image, Button, List, ListItem } from "@chakra-ui/react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const storedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
    setPlaylists(storedPlaylists);
  }, []);

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
        <Button as={Link} to="/create-playlist" leftIcon={<FaPlus />} colorScheme="teal" size="lg">
          Create Playlist
        </Button>
        <Heading as="h2" size="lg" textAlign="center" mt={10}>Your Playlists</Heading>
        <List spacing={3}>
          {playlists.map((playlist, index) => (
            <ListItem key={index} fontSize="lg">{playlist.name}</ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;