import React from 'react';
import { Box, Text, VStack, Heading, Image, Button, Container, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="flex-start">
        {/* Hero Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box>
            <Heading as="h1" size="2xl" mb={4}>Welcome to Aktive Care</Heading>
            <Text fontSize="lg" mb={6}>
              Your trusted partner in personalized, compassionate home care services. 
              Empowering you and your loved ones to live a fulfilled life with the support and care you deserve.
            </Text>
            <Button as={Link} to="/contact" colorScheme="teal" size="lg">Get in Touch</Button>
          </Box>
          <Box>
            <Image src="/fakecaregiversimage.png" alt="Caregivers of Aktive Care" borderRadius="lg" />
          </Box>
        </SimpleGrid>
        
        {/* Services Section */}
        <Box>
          <Heading as="h2" size="xl" mb={6}>Our Services</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {/* Service 1 */}
            <Box bg="teal.50" p={5} borderRadius="lg" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>Personal Care</Heading>
              <Text mb={4}>Assistance with daily living activities tailored to your personal needs.</Text>
              <Button as={Link} to="/services/personal-care" colorScheme="teal">Learn More</Button>
            </Box>
            {/* Service 2 */}
            <Box bg="teal.50" p={5} borderRadius="lg" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>Live-in Care</Heading>
              <Text mb={4}>Continuous, comprehensive care to support independence at home.</Text>
              <Button as={Link} to="/services/live-in-care" colorScheme="teal">Learn More</Button>
            </Box>
            {/* Service 3 */}
            <Box bg="teal.50" p={5} borderRadius="lg" textAlign="center">
              <Heading as="h3" size="lg" mb={4}>Respite Care</Heading>
              <Text mb={4}>Temporary relief for primary caregivers, offering peace of mind.</Text>
              <Button as={Link} to="/services/respite-care" colorScheme="teal">Learn More</Button>
            </Box>
          </SimpleGrid>
        </Box>

        {/* About Us Teaser */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={6}>About Us</Heading>
          <Text fontSize="lg" mb={6}>At Aktive Care, we're more than just a care agency. We're a family committed to providing the highest quality of life for those we serve.</Text>
          <Button as={Link} to="/about" colorScheme="teal" size="lg">Learn More About Us</Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default Home;
