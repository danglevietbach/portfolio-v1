import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box
      id="about"
      minH="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      px={0}
    >
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="orange.50"
        opacity={0.3}
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="teal.50"
        opacity={0.3}
        filter="blur(60px)"
      />

      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1}>
        <VStack align="stretch" gap={6}>
          {/* Header Section */}
          <VStack gap={3} mb={2}>
            <Box
              as="span"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight={700}
              color="orange.600"
              textTransform="uppercase"
              letterSpacing="wide"
              px={6}
              py={3}
              bg="purple.50"
              borderRadius="full"
              boxShadow="md"
            >
              About Me
            </Box>
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight={800}
              textAlign="center"
              lineHeight="shorter"
              bgGradient="linear(135deg, #FF6B6B 0%, #FF8E53 50%, #4ECDC4 100%)"
              bgClip="text"
              letterSpacing="tight"
            >
              About Me
            </Heading>
          </VStack>

          {/* Content Section */}
          <Box
            w="100%"
          >
            <VStack gap={4} align="stretch">
              <Box
                bg="purple.50"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="orange.100"
                _hover={{
                  boxShadow: '2xl',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.800"
                lineHeight="tall"
                textAlign="center"
                fontWeight={500}
              >
                I'm a passionate student leader dedicated to <Text as="span" fontWeight={700} color="orange.600">enriching high school students' experiences</Text> through creative media projects, large-scale events, and community engagement. With a deep commitment to <Text as="span" fontWeight={700} color="teal.600">building platforms for young people to discover and develop their talents</Text>, I lead teams, organize impactful events, and create meaningful connections that inspire students to shine.
              </Text>
              </Box>

              <Box
                bg="purple.50"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="orange.100"
                _hover={{
                  boxShadow: '2xl',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.800"
                lineHeight="tall"
                textAlign="center"
                fontWeight={500}
              >
                Through my leadership roles, I've managed teams of 70+ members, organized events attracting hundreds of participants, and built social media platforms reaching thousands of views. I'm passionate about <Text as="span" fontWeight={700} color="teal.600">mentoring the next generation of student leaders</Text>, creating opportunities for growth, and making a positive impact in my community through music, charity work, and educational initiatives.
              </Text>
              </Box>
            </VStack>
          </Box>

          {/* Statistics Cards */}
          <SimpleGrid 
            columns={{ base: 1, md: 3 }} 
            gap={{ base: 6, md: 8 }} 
            mt={8}
            w="100%"
          >
            <Box
              bg="purple.50"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="xl"
              textAlign="center"
              border="2px solid"
              borderColor="orange.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '2xl',
                borderColor: 'orange.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(90deg, #FF6B6B 0%, #FF8E53 100%)"
              />
              <Heading
                as="h3"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight={800}
                color="orange.600"
                mb={5}
              >
                70+
              </Heading>
              <Text fontSize="lg" fontWeight={600} color="gray.800" mb={1}>
                Team Members
              </Text>
              <Text fontSize="lg" fontWeight={600} color="gray.800">
                Managed & Led
              </Text>
            </Box>

            <Box
              bg="purple.50"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="xl"
              textAlign="center"
              border="2px solid"
              borderColor="teal.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '2xl',
                borderColor: 'teal.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(90deg, #4ECDC4 0%, #44A08D 100%)"
              />
              <Heading
                as="h3"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight={800}
                color="teal.600"
                mb={5}
              >
                100K+
              </Heading>
              <Text fontSize="lg" fontWeight={600} color="gray.800" mb={1}>
                Combined Video
              </Text>
              <Text fontSize="lg" fontWeight={600} color="gray.800">
                Views Achieved
              </Text>
            </Box>

            <Box
              bg="purple.50"
              p={{ base: 8, md: 10 }}
              borderRadius="2xl"
              boxShadow="xl"
              textAlign="center"
              border="2px solid"
              borderColor="pink.200"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: '2xl',
                borderColor: 'pink.400',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="4px"
                bgGradient="linear(90deg, #FF8B94 0%, #FF6B9D 100%)"
              />
              <Heading
                as="h3"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight={800}
                color="pink.600"
                mb={5}
              >
                400+
              </Heading>
              <Text fontSize="lg" fontWeight={600} color="gray.800" mb={1}>
                Event Participants
              </Text>
              <Text fontSize="lg" fontWeight={600} color="gray.800">
                in Major Events
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="orange.600"
        _hover={{ color: 'orange.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('education')}
        transition="all 0.3s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default About

