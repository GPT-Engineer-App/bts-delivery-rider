import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import HamburgerMenu from "../components/HamburgerMenu";
import FooterNavigation from "../components/FooterNavigation";

const HomePage = () => {
  return (
    <>
      <HamburgerMenu />
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl">Welcome to BTS Delivery!</Text>
        </Box>
        {/* Additional homepage content goes here */}
      </VStack>
      <FooterNavigation />
    </>
  );
};

export default HomePage;
