import { useState, useEffect } from 'react'
import { Box, Container, Flex, Link, IconButton, useDisclosure, Drawer, VStack, Text, Image } from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import profileImage from '../assets/images/Background/IMG_2359.JPG'

interface NavbarProps {
  activeSection?: string
}

function Navbar({ activeSection = 'home' }: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'impact', label: 'Impact' },
    { id: 'media', label: 'Media' },
    { id: 'facebook-showcase', label: 'Leadership' },
    { id: 'education-skills', label: 'Education & Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="orange.50"
      backdropFilter="blur(12px)"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.12)"
      zIndex={1000}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      borderBottom="2px solid"
      borderColor="gray.200"
      w="100%"
    >
      <Container maxW="1280px" px={{ base: 6, md: 8 }} w="100%">
        <Flex
          as="nav"
          justify="space-between"
          align="center"
          h={{ base: '64px', md: '72px' }}
        >
          {/* Logo - Enhanced */}
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ transform: 'scale(1.05)' }}
            transition="transform 0.2s"
          >
            <Box
              w={{ base: '40px', md: '48px' }}
              h={{ base: '40px', md: '48px' }}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 12px rgba(255, 107, 107, 0.4)"
              border="2px solid"
              borderColor="orange.200"
              bg="orange.100"
            >
              <Image
                src={profileImage}
                alt="Profile"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight={700}
              color="gray.800"
              display={{ base: 'none', sm: 'block' }}
            >
              Greetings
            </Text>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <Flex
            as="ul"
            listStyleType="none"
            gap={2}
            align="center"
            display={{ base: 'none', md: 'flex' }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Box as="li" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    px={4}
                    py={2}
                    borderRadius="lg"
                    fontSize="sm"
                    fontWeight={isActive ? 700 : 500}
                    color={isActive ? 'teal.700' : 'gray.700'}
                    bg={isActive ? 'teal.100' : 'transparent'}
                    border={isActive ? '2px solid' : '2px solid transparent'}
                    borderColor={isActive ? 'teal.400' : 'transparent'}
                    position="relative"
                    _hover={{
                      color: 'teal.700',
                      bg: 'teal.50',
                      borderColor: 'teal.300',
                      transform: 'translateY(-1px)',
                    }}
                    transition="all 0.2s ease"
                    className="relative"
                  >
                    {item.label}
                    {isActive && (
                      <Box
                        position="absolute"
                        bottom={-2}
                        left="50%"
                        transform="translateX(-50%)"
                        w="80%"
                        h="3px"
                        borderRadius="full"
                        bgGradient="linear(90deg, teal.400 0%, teal.600 100%)"
                        boxShadow="0 2px 8px rgba(45, 212, 191, 0.6)"
                      />
                    )}
                  </Link>
                </Box>
              )
            })}
          </Flex>

          {/* Mobile Menu Button - Enhanced */}
          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', md: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
            color="gray.700"
            size="lg"
            borderRadius="lg"
            _hover={{
              bg: 'orange.50',
              color: '#FF6B6B',
            }}
            transition="all 0.2s"
            backgroundColor="orange.100"
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Drawer - Enhanced */}
      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="rgba(0, 0, 0, 0.4)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="320px" bg="orange.50">
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="gray.200"
              bgGradient="linear(135deg, #FF6B6B 0%, #FF8E53 50%, #4ECDC4 100%)"
              color="gray.900"
              py={6}
            >
              <Flex justify="space-between" align="center">
                <Text fontSize="xl" fontWeight={700} mr={1}>
                  Menu
                </Text>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  size="sm"
                  color="gray.900"
                  _hover={{ bg: 'rgba(0, 0, 0, 0.1)' }}
                  backgroundColor="orange.200"
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={6} px={4}>
              <VStack align="stretch" gap={2}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                      px={4}
                      py={3}
                      borderRadius="lg"
                      color={isActive ? 'teal.700' : 'gray.700'}
                      fontWeight={isActive ? 700 : 500}
                      fontSize="md"
                      bg={isActive ? 'teal.100' : 'transparent'}
                      borderLeft={isActive ? '4px solid' : '4px solid transparent'}
                      borderColor={isActive ? 'teal.500' : 'transparent'}
                      transition="all 0.2s"
                      _hover={{
                        color: 'teal.700',
                        bg: 'teal.50',
                        pl: isActive ? 4 : 5,
                        borderLeft: '4px solid',
                        borderColor: isActive ? 'teal.500' : 'teal.300',
                      }}
                    >
                      <Flex align="center" gap={2}>
                        {isActive && (
                          <Box
                            w="10px"
                            h="10px"
                            borderRadius="full"
                            bgGradient="linear(135deg, teal.400 0%, teal.600 100%)"
                            boxShadow="0 0 10px rgba(45, 212, 191, 0.6)"
                            flexShrink={0}
                          />
                        )}
                        <Text>{item.label}</Text>
                      </Flex>
                    </Link>
                  )
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar
