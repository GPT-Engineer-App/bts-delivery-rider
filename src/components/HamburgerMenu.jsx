import React, { useState } from "react";
import { Box, Flex, Heading, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, Text } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box as="header" bg="brand.900" p={4} position="sticky" top={0} zIndex={1}>
        <Flex justify="space-between" align="center">
          <IconButton ref={btnRef} icon={<FaBars />} onClick={onOpen} variant="outline" aria-label="Open Menu" color="white" />
          <Flex justify="center" align="center">
            <Image src="/bts-delivery-logo.png" alt="BTS Delivery Logo" height="50px" />
          </Flex>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Text as="a" href="/" onClick={onClose}>
                Home
              </Text>
              <Text as="a" href="/dashboard" onClick={onClose}>
                Dashboard
              </Text>
              <Text as="a" href="/orders/check-in" onClick={onClose}>
                Check In
              </Text>
              <Text as="a" href="/orders/check-out" onClick={onClose}>
                Check Out
              </Text>
              <Text as="a" href="/profile" onClick={onClose}>
                Profile
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
