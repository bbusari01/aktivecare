// Footer.js
import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  VStack,
  Heading,
  Button,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {/* Company Information */}
          <VStack align="flex-start">
            <Heading size="md">Aktive Care</Heading>
            <Text>At Aktive Care, we believe that life happens at home.</Text>
            <Box display="flex" align="center">
              <Icon as={FaPhone} mr={2} />
              <Link href="tel:+440000000000">+44 0000 000 000</Link>
            </Box>
            <Box display="flex" align="center">
              <Icon as={FaEnvelope} mr={2} />
              <Link href="mailto:careteam@aktivecare.co.uk">careteam@aktivecare.co.uk</Link>
            </Box>
            <Box display="flex" align="center">
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text>63/66 Hatton Garden, Fifth Floor Suite 23, London, EC1N 8LE</Text>
            </Box>
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start">
            <Heading size="md">Quick Links</Heading>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/careers">Careers</Link>
            {/* Add more links as needed */}
          </VStack>

          {/* Social Links */}
          <VStack align="flex-start">
            <Heading size="md">Socials</Heading>
            <Link href="https://www.facebook.com/">Facebook</Link>
            <Link href="https://www.linkedin.com/company/">LinkedIn</Link>
          </VStack>

          {/* Open Hours */}
          <VStack align="flex-start">
            <Heading size="md">Open Hours</Heading>
            <Text>8:30 AM - 5 PM, Monday - Friday</Text>
            <Text>We also operate an out of hours on-call service.</Text>
            <Button colorScheme="teal" size="sm">Call Us Today</Button>
          </VStack>
        </SimpleGrid>
        {/* Bottom Text */}
        <Box pt={5} borderTopWidth={1} borderTopColor={useColorModeValue('gray.200', 'gray.700')}>
          <Text textAlign="center" fontSize="sm">© {new Date().getFullYear()} Aktive Care. All rights reserved.</Text>
          <Text textAlign="center" fontSize="sm">Website Devloped by  <Link href="https://bbusari.netlify.app/">Boladale</Link></Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
