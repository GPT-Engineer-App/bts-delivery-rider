import React from "react";
import { Box, Flex, IconButton, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaClipboardList, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const FooterNavigation = () => (
  <Flex as="nav" bg="brand.800" p={4} justifyContent="space-around" alignItems="center" color="white" position="fixed" left="0" bottom="0" width="100%">
    <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" as={Link} href="/" />
    <IconButton aria-label="Orders" icon={<FaClipboardList />} variant="ghost" as={Link} href="/dashboard" />
    <IconButton aria-label="Check In" icon={<FaSignInAlt />} variant="ghost" as={Link} href="/orders/check-in" />
    <IconButton aria-label="Check Out" icon={<FaSignOutAlt />} variant="ghost" as={Link} href="/orders/check-out" />
    <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" as={Link} href="/profile" />
  </Flex>
);

export default FooterNavigation;
