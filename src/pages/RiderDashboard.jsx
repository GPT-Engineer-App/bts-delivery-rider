import React from "react";
import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";
import FooterNavigation from "../components/FooterNavigation";
import HamburgerMenu from "../components/HamburgerMenu";

import { Flex, Spacer } from "@chakra-ui/react";

const RiderDashboard = () => {
  return (
    <>
      <HamburgerMenu />
      <Container maxWidth="container.xl" pt={4}>
        <VStack spacing={5}>
          <Text fontSize="xl">Your upcoming deliveries will be listed here.</Text>
          {/* Add more dashboard widgets or elements here as needed */}
        </VStack>
      </Container>
      <FooterNavigation />
    </>
  );
};

export default RiderDashboard;
