import { Box, Container, Heading, Text, Button, Flex, VStack, Link } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo4 from '../assets/photo_4.jpg'
import photo5 from '../assets/photo_5.jpg'
import photo6 from '../assets/photo_6.jpg'

function Hero() {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      id="home"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      pt={{ base: "80px", md: "88px" }}
      pb={20}
    >
      {/* Image Slideshow Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        w="100%"
        h="100%"
        zIndex={0}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            w="100%"
            h="100%"
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            opacity={index === currentImageIndex ? 1 : 0}
            transition="opacity 1.5s ease-in-out"
          />
        ))}
      </Box>

      {/* Dark overlay for text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        zIndex={1}
      />

      <Container maxW="1280px" position="relative" zIndex={10} px={{ base: 4, md: 8 }}>
        <Flex
          direction="column"
          align="center"
          gap={{ base: 8, lg: 12 }}
        >
          <VStack
            align="center"
            textAlign="center"
            gap={6}
            flex={1}
            maxW="800px"
          >
            <Box
              css={{
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="yellow.300"
                mb={2}
                fontWeight={600}
                letterSpacing="wide"
                opacity={0.95}
                css={{
                  animation: 'fadeIn 1.2s ease-out',
                }}
              >
                Hello, I'm
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight={800}
                color="green.200"
                mb={4}
                lineHeight="shorter"
                textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
                css={{
                  animation: 'fadeInUp 1s ease-out 0.2s both',
                }}
              >
                Nham Quoc Hung
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                fontWeight={600}
                color="orange.300"
                mb={6}
                opacity={0.95}
                css={{
                  animation: 'fadeInUp 1s ease-out 0.4s both',
                }}
              >
                Data Engineer, Software Engineer & Educator
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="white"
                maxW="600px"
                lineHeight="tall"
                opacity={0.9}
                css={{
                  animation: 'fadeInUp 1s ease-out 0.6s both',
                }}
              >
                I am a Computer Science graduate with a specialisation in Data and passion for teaching.
              </Text>
            </Box>

            <Flex
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
              css={{
                animation: 'fadeInUp 1s ease-out 0.8s both',
              }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="purple.700"
                fontWeight={600}
                px={8}
                boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  bg: 'gray.50',
                }}
                backgroundColor="gray.100"
                transition="all 0.3s"
                css={{
                  animation: 'buttonPulse 3s ease-in-out infinite',
                }}
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size={{ base: 'md', md: 'lg' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="blue.600"
                fontWeight={600}
                px={8}
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                _hover={{
                  bg: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-4px) scale(1.05)',
                  borderColor: 'white',
                }}
                backgroundColor="gray.100"
                transition="all 0.3s"
              >
                Get In Touch
              </Button>
            </Flex>

            <Flex
              gap={6}
              mt={4}
              css={{
                animation: 'fadeInUp 1s ease-out 1s both',
              }}
            >
              <Link
                href="https://github.com/nhamhung"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/quoc-hung-nham/"
                target="_blank"
                rel="noopener noreferrer"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="mailto:nhamhung.gttn@gmail.com"
                color="white"
                _hover={{
                  color: 'white',
                  transform: 'translateY(-4px) scale(1.2)',
                }}
                transition="all 0.3s"
                css={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                }}
              >
                <FaEnvelope size={24} />
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="white"
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        transition="all 0.3s"
        zIndex={10}
        display={{ base: 'none', md: 'block' }}
        css={{
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-10px)' },
          },
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
        }}
        _hover={{
          color: 'white',
          transform: 'translateX(-50%) translateY(-5px)',
        }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Hero

