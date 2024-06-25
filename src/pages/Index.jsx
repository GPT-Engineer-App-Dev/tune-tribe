import { Container, VStack, Heading, Text, Box, Image, Button, List, ListItem } from "@chakra-ui/react";
import { FaPlay, FaPlus, FaPause } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [playlists, setPlaylists] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const storedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
    setPlaylists(storedPlaylists);
  }, []);

  const handlePlayPause = (song) => {
    if (currentSong === song) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      setCurrentSong(song);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }
  };

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
        {currentSong && (
          <Box mt={4}>
            <audio ref={audioRef} controls>
              <source src={currentSong.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Box>
        )}
        
        <List spacing={3}>
          {playlists.map((playlist, index) => (
            <ListItem key={index} fontSize="lg">
              {playlist.name}
              <Button
                leftIcon={currentSong === playlist ? <FaPause /> : <FaPlay />}
                colorScheme="teal"
                size="sm"
                ml={4}
                onClick={() => handlePlayPause(playlist)}
              >
                {currentSong === playlist && !audioRef.current.paused ? "Pause" : "Play"}
              </Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;