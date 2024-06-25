import { useState } from "react";
import { Container, VStack, Heading, Input, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleCreatePlaylist = () => {
    if (playlistName.trim() === "") {
      toast({
        title: "Playlist name is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
    playlists.push({ name: playlistName });
    localStorage.setItem("playlists", JSON.stringify(playlists));

    toast({
      title: "Playlist created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    navigate("/");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading as="h2" size="xl">Create a New Playlist</Heading>
        <Input
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleCreatePlaylist}>Create Playlist</Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;