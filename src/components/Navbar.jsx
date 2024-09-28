import { Flex, Box, Link, IconButton, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionLink = motion(Link);

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionFlex
      as="nav"
      justify="space-between"
      align="center"
      p={4}
      bg="rgba(0, 0, 0, 0.8)"
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      boxShadow="md"
    >
      <Box fontSize="2xl" fontWeight="bold" color="teal.300">
        Mukadaz Labs
      </Box>

      <Box display={{ base: "none", md: "flex" }} gap={8}>
        {["About", "Experience", "Projects", "Testimonials", "Contact"].map(
          (section) => (
            <MotionLink
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              fontSize="lg"
              fontWeight="bold"
              cursor="pointer"
              color="white"
              _hover={{ color: "teal.300" }}
            >
              {section}
            </MotionLink>
          )
        )}
      </Box>

      {/* Hamburger Menu for mobile */}
      <IconButton
        display={{ base: "block", md: "none" }}
        aria-label="Menu"
        icon={isOpen ? <FaTimes /> : <FaBars />}
        color="white"
        variant="outline"
        borderColor="teal.300"
        onClick={onToggle}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          pb={4}
          display={{ md: 'none' }}
          pos="absolute"
          top="100%"
          left={0}
          w="100%"
          bg="rgba(0, 0, 0, 0.8)"
          zIndex={1001}
        >
          <Flex as={'nav'} direction="column" align="center" gap={4}>
            {["About", "Experience", "Projects", "Testimonials", "Contact"].map(
              (section) => (
                <Link
                  key={section}
                  onClick={() => {
                    scrollToSection(section.toLowerCase());
                    onClose();
                  }}
                  fontSize="lg"
                  fontWeight="bold"
                  cursor="pointer"
                  color="white"
                  _hover={{ color: "teal.300" }}
                >
                  {section}
                </Link>
              )
            )}
          </Flex>
        </Box>
      )}
    </MotionFlex>
  );
};

export default Navbar;