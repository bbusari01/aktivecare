import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Flex, Button, Box, Image, Text, IconButton, Collapse, useDisclosure} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Home from './components/home.js'; 
import About from './components/about.js'; 
import Services from './components/services.js'; 
import NotFound from './NotFound.js';
import Footer from './components/footer.js';

function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Flex as="header" align="center" justify="space-between" padding="4" bg="teal.500" color="white">
      
      <Box bg='white' maxW="100%">
          <Image src="/aktivecare-logo.png" alt="Logo" maxH="100px" />
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        {/* These buttons will be visible on medium and larger screens */}
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">Home</Button>
        <Button as={Link} to="/about" colorScheme="teal" variant="ghost">About</Button>
        <Button as={Link} to="/services" colorScheme="teal" variant="ghost">Services</Button>
      </Box>
      

      <IconButton
        aria-label="Open Menu"
        display={{ md: 'none' }}
        icon={isOpen ? <CloseIcon boxSize="2" /> : <HamburgerIcon boxSize="6" />}
        onClick={onToggle}
      />
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          bg="white" // Slightly darker to stand out from the main header
          p={3}
          display={{ md: 'none' }}
        >
          <Button as={Link} to="/" colorScheme="teal" variant="ghost" onClick={onToggle}>Home</Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="ghost" onClick={onToggle}>About</Button>
          <Button as={Link} to="/services" colorScheme="teal" variant="ghost" onClick={onToggle}>Services</Button>
        </Flex>
      </Collapse>
  </Flex>
  );
}

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
