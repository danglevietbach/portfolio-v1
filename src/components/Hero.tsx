import { Box, Container, Heading, Text, Button, Flex, VStack, Link } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import { FaEnvelope } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import bg1 from '../assets/images/Background/IMG_2359.JPG'
import bg2 from '../assets/images/Background/e20fed349d74603144f13c41a152ed57.jpeg'
import bg3 from '../assets/images/Background/IMG_3526.JPG'
import bg4 from '../assets/images/Background/IMG_8988.JPG'

function Hero() {
  const images = [bg1, bg2, bg3, bg4]
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
            opacity={index === currentImageIndex ? 0.3 : 0}
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
                Dang Le Viet Bach
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="yellow.100"
                maxW="600px"
                lineHeight="tall"
                opacity={1}
                fontWeight={500}
                textShadow="0 2px 8px rgba(0, 0, 0, 0.5)"
                css={{
                  animation: 'fadeInUp 1s ease-out 0.6s both',
                }}
              >
                I am a passionate student leader dedicated to enriching high school students' experiences through creative media projects, large-scale events, and community engagement.
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
                onClick={() => scrollToSection('leadership')}
                size={{ base: 'md', md: 'lg' }}
                bg="orange.400"
                color="white"
                fontWeight={600}
                px={8}
                boxShadow="0 8px 30px rgba(0, 0, 0, 0.3)"
                _hover={{
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  bg: 'orange.500',
                }}
                backgroundColor="orange.400"
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
                borderColor="orange.300"
                borderWidth="2px"
                color="orange.700"
                fontWeight={600}
                px={8}
                bg="orange.100"
                backdropFilter="blur(10px)"
                _hover={{
                  bg: 'orange.200',
                  transform: 'translateY(-4px) scale(1.05)',
                  borderColor: 'orange.400',
                }}
                backgroundColor="orange.100"
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
                href="mailto:danglevitbac@gmail.com"
                color="yellow.200"
                _hover={{
                  color: 'yellow.100',
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
        color="yellow.200"
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
          color: 'yellow.100',
          transform: 'translateX(-50%) translateY(-5px)',
        }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default Hero

