import React, { useState } from "react";
import { Box, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, Text } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton ref={btnRef} icon={<FaBars />} onClick={onOpen} variant="outline" aria-label="Open Menu" />
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
