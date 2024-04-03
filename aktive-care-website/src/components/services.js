import React from 'react';
import { Box, Text, VStack, Heading, Image, Button, Container, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="flex-start">
        {/* Hero Section */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={6}>Our Care Services</Heading>
          <Text fontSize="lg" mb={6}>
            At Aktive Care, we offer a range of personalized home care services designed to meet the unique needs of each individual.
            From daily assistance to full-time care, our dedicated team is here to support you and your loved ones.
          </Text>
          <Image 
            src="/fakecareservices.webp" 
            alt="Care Services at Aktive Care" 
            borderRadius="lg" 
            mb={6}
          />
        </Box>

        {/* Services List */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <ServiceCard
            title="Personal Care"
            description="Personalized assistance with daily activities, ensuring dignity and comfort."
            to="/services/personal-care"
          />
          <ServiceCard
            title="Live-in Care"
            description="Comprehensive, round-the-clock care for those who need constant support."
            to="/services/live-in-care"
          />
          <ServiceCard
            title="Respite Care"
            description="Temporary care solutions, providing relief for family caregivers."
            to="/services/respite-care"
          />
          {/* Add more services as needed */}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

// Reusable Service Card Component
function ServiceCard({ title, description, to }) {
  return (
    <Box bg="teal.50" p={5} borderRadius="lg" textAlign="center">
      <Heading as="h3" size="lg" mb={4}>{title}</Heading>
      <Text mb={4}>{description}</Text>
      <Button as={Link} to={to} colorScheme="teal">Learn More</Button>
    </Box>
  );
}

export default Services;
