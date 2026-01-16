import { Box, Heading, SimpleGrid, Badge, VStack, Flex } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Skills() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  // Color palette for badges - Communication & New Media theme
  const badgeColors = [
    { bg: 'orange.100', color: 'orange.700', hoverBg: 'orange.200' },
    { bg: 'teal.100', color: 'teal.700', hoverBg: 'teal.200' },
    { bg: 'pink.100', color: 'pink.700', hoverBg: 'pink.200' },
    { bg: 'cyan.100', color: 'cyan.700', hoverBg: 'cyan.200' },
    { bg: 'red.100', color: 'red.700', hoverBg: 'red.200' },
    { bg: 'yellow.100', color: 'yellow.700', hoverBg: 'yellow.200' },
    { bg: 'coral.100', color: 'coral.700', hoverBg: 'coral.200' },
    { bg: 'blue.100', color: 'blue.700', hoverBg: 'blue.200' },
    { bg: 'green.100', color: 'green.700', hoverBg: 'green.200' },
    { bg: 'purple.100', color: 'purple.700', hoverBg: 'purple.200' },
  ]

  const getBadgeColor = (index: number) => {
    return badgeColors[index % badgeColors.length]
  }

  const skillCategories = [
    {
      category: 'Media Production',
      skills: ['Video Editing', 'Audio Production', 'Photography', 'Cinematography', 'Post-Production', 'Color Grading'],
    },
    {
      category: 'Digital Design',
      skills: ['Adobe Creative Suite', 'Figma', 'UI/UX Design', 'Graphic Design', 'Motion Graphics', 'Typography'],
    },
    {
      category: 'Content Creation',
      skills: ['Content Strategy', 'Social Media Management', 'Copywriting', 'Storytelling', 'Branding', 'Digital Marketing'],
    },
    {
      category: 'Communication',
      skills: ['Public Speaking', 'Presentation Design', 'Interpersonal Communication', 'Media Writing', 'Journalism', 'Research'],
    },
    {
      category: 'New Media Technologies',
      skills: ['Web Development', 'HTML/CSS', 'JavaScript', 'WordPress', 'AR/VR Basics', 'Interactive Media'],
    }
  ]

  return (
    <Box
      id="skills"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1200px" mx="auto">
        <VStack gap={3} mb={12} textAlign="center">
          <Box
            as="span"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight={700}
            color="orange.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="white"
            borderRadius="full"
            boxShadow="md"
          >
            Skills & Expertise
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
            Skills & Expertise
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(255, 107, 107, 0.15)',
                borderColor: 'orange.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Heading
                as="h3"
                fontSize="lg"
                mb={6}
                color="gray.900"
                fontWeight={700}
                pb={3}
                borderBottom="2px solid"
                borderColor="orange.200"
              >
                {category.category}
              </Heading>
              <Flex
                gap={2}
                flexWrap="wrap"
                align="flex-start"
              >
                {category.skills.map((skill, i) => {
                  const colorScheme = getBadgeColor(i)
                  return (
                    <Badge
                      key={i}
                      bg={colorScheme.bg}
                      color={colorScheme.color}
                      px={2.5}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight={600}
                      textTransform="none"
                      _hover={{
                        bg: colorScheme.hoverBg,
                        transform: 'translateY(-2px) scale(1.05)',
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  )
                })}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow - Optional, can scroll to contact or top */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
        color="orange.600"
        _hover={{ color: 'orange.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('contact')}
          transition="all 0.3s"
          zIndex={2}
          display={{ base: 'none', md: 'block' }}
        >
          <HiArrowDown size={32} />
        </Box>
      </Box>
    </Box>
  )
}

export default Skills

