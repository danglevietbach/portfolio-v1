import { Box, Heading, Text, Flex, VStack, HStack, SimpleGrid, Badge, Image } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import nhLogo from '../assets/images/nguyen_hue_logo.png'

function EducationSkills() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const education = [
    {
      degree: 'High School Diploma',
      institution: 'Nguyen Hue High School for the Gifted',
      period: '2023 - 2026',
      specialization: 'History',
      description: [
        'Active participant in various school clubs.',
      ],
    },
  ]

  const badgeColors = [
    { bg: 'orange.100', color: 'orange.700', hoverBg: 'orange.200' },
    { bg: 'teal.100', color: 'teal.700', hoverBg: 'teal.200' },
    { bg: 'pink.100', color: 'pink.700', hoverBg: 'pink.200' },
    { bg: 'cyan.100', color: 'cyan.700', hoverBg: 'cyan.200' },
    { bg: 'red.100', color: 'red.700', hoverBg: 'red.200' },
    { bg: 'yellow.100', color: 'yellow.700', hoverBg: 'yellow.200' },
    { bg: 'blue.100', color: 'blue.700', hoverBg: 'blue.200' },
    { bg: 'green.100', color: 'green.700', hoverBg: 'green.200' },
    { bg: 'purple.100', color: 'purple.700', hoverBg: 'purple.200' },
  ]

  const getBadgeColor = (index: number) => {
    return badgeColors[index % badgeColors.length]
  }

  const skillCategories = [
    {
      category: 'Leadership & Management',
      skills: ['Team Leadership', 'Event Planning', 'Project Management', 'Strategic Planning', 'Public Speaking', 'Mentoring'],
    },
    {
      category: 'Media Production',
      skills: ['Video Editing', 'Audio Production', 'Photography', 'Social Media Management', 'Content Creation', 'Multimedia Production'],
    },
    {
      category: 'Communication',
      skills: ['Public Relations', 'Marketing', 'Branding', 'Storytelling', 'Interpersonal Communication', 'Presentation Design'],
    },
    {
      category: 'Digital Skills',
      skills: ['Web Development', 'HTML/CSS', 'JavaScript', 'Adobe Creative Suite', 'Figma', 'UI/UX Design'],
    },
  ]

  return (
    <Box
      id="education-skills"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="cyan.50"
      py={{ base: 16, md: 24 }}
      px={0}
      position="relative"
    >
      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} maxW="1400px" mx="auto">
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
            bg="cyan.100"
            borderRadius="full"
            boxShadow="md"
          >
            Education & Skills
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
            Education & Skills
          </Heading>
        </VStack>

        {/* Education Section */}
        <Box mb={16}>
          <VStack align="stretch" gap={8}>
            {education.map((edu, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                p={{ base: 6, md: 10 }}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="gray.100"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(255, 107, 107, 0.15)',
                  borderColor: 'orange.200',
                  borderLeftColor: 'orange.600',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Flex gap={6} align="flex-start">
                  <Box
                    w="70px"
                    h="70px"
                    borderRadius="full"
                    bg="white"
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    boxShadow="0 4px 15px rgba(255, 107, 107, 0.3)"
                    border="2px solid"
                    borderColor="orange.100"
                    p={2}
                    overflow="hidden"
                  >
                    <Image src={nhLogo} alt="Nguyen Hue High School for the Gifted logo" w="100%" h="100%" objectFit="contain" />
                  </Box>
                  <VStack align="stretch" flex={1} gap={4}>
                    <Box>
                      <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={2} color="gray.900" fontWeight={700}>
                        {edu.degree}
                      </Heading>
                      <Text fontSize={{ base: 'md', md: 'lg' }} color="orange.700" fontWeight={600}>
                        {edu.institution}
                      </Text>
                    </Box>
                    <Box
                      bg="white"
                      p={4}
                      borderRadius="md"
                    >
                      <VStack align="stretch" gap={3}>
                        {edu.specialization && (
                          <HStack>
                            <Text fontWeight={600} color="orange.700" minW="120px" flexShrink={0}>
                              Specialization:
                            </Text>
                            <Text color="gray.800" fontWeight={500}>{edu.specialization}</Text>
                          </HStack>
                        )}
                        <HStack>
                          <Text fontWeight={600} color="orange.700" minW="120px" flexShrink={0}>
                            Period:
                          </Text>
                          <Text color="gray.800" fontWeight={500}>{edu.period}</Text>
                        </HStack>
                      </VStack>
                    </Box>
                    {edu.description && edu.description.length > 0 && (
                      <Box pt={4} borderTop="1px solid" borderColor="gray.200">
                        <VStack align="stretch" gap={2}>
                          {edu.description.map((item, i) => (
                            <Box key={i} color="gray.800" pl={6} position="relative" fontWeight={500}>
                              <Box
                                as="span"
                                position="absolute"
                                left={0}
                                color="orange.600"
                                fontWeight="bold"
                              >
                                ✓
                              </Box>
                              {item}
                            </Box>
                          ))}
                        </VStack>
                      </Box>
                    )}
                  </VStack>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight={700}
            color="gray.900"
            mb={8}
            textAlign="center"
          >
            Core Competencies
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
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
                  as="h4"
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

export default EducationSkills
