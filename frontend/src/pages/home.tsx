import { Flex, Heading, HStack, VStack, Text, Box } from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";
import { Avatar } from "../components/ui/avatar";

export const Home = () => {
  return (
    <Flex w="vw" h="vh" align="center" justify="center" fontSize="xl">
      <VStack gap="8">
        <Avatar
          name="Bagreyverson"
          size="full"
          src="https://imgs.search.brave.com/5Ed_vto1RYRT9AmP5SPsTm8WkiXgDb0zlVVK2Lro6VM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YS50cmFuc2Zlcm1h/cmt0LnRlY2hub2xv/Z3kvcG9ydHJhaXQv/YmlnLzI0MzU0MS0x/NzA4NjU0MzI0Lmpw/Zz9sbT0x"
        />
        <Heading size="2xl" letterSpacing="tight">
          Bem vindo ao Bagredex
        </Heading>

        <HStack>
          <Text>O primeiro bagre a gente nunca esquece!</Text>
        </HStack>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ColorModeButton />
      </Box>
    </Flex>
  );
};
