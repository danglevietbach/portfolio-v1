import { Box, Heading, Text, SimpleGrid, Badge, HStack, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const projects = [
    {
      title: 'CNH\'s Club Fair 2025: "Tang dau"',
      description: 'Coached the Finance department in proper handling of financial matters. Liaised with financial sponsors and managed the event\'s income and expenses. Ensured proper contract management towards sponsor representatives. Took care and delivered them full benefits as per agreement. Attracted participants from 30 clubs and over 750 junior students in Nguyen Hue High School for Gifted Students. Received 12,000,000 VND sponsorship from leading educational organisations such as IZONE, Zim Academy, Summit Education. Set up charity booths and successfully raised funds for the Hanoi Center for Disabled Children in the form of financial support, clothing, food, beverages and books. Gained 600 views per Facebook post',
      technologies: ['Finance Management', 'Sponsorship', 'Event Planning', 'Charity'],
      period: '07/2025- 08/2025',
      role: 'Advisor of Finance',
      achievements: '600 views per Facebook post, 750+ participants, 12M VND sponsorship',
    },
    {
      title: 'Chạm 2025: "Vọng"',
      description: 'Took full responsibility as the head organiser for a major event totalling over 400 participants. Built themes, song lists and concepts from the ground up. Executed multimedia marketing campaigns. Organised in-depth mentoring and training sessions for over 70 members in preparation. Led a fundraising event called "The Miracle Express" selling food items and souvenirs. Supervised MC, sound and LED screen check. Served customers, coordinated both the rehearsal and main show. Appeared 4 times on major domestic media channels: Vietbeauty, sportandcultural, newHanoi, womenandlaw thanks to the event\'s outreach. Continued encouraging young people to surpass difficulties, self-doubt to reach their dream through song list and multimedia posts.',
      technologies: ['Event Management', 'Marketing', 'Team Leadership', 'Multimedia Production'],
      period: '12/2024 – 03/2025',
      role: 'Head organizer',
      achievements: '400+ participants, 10,000+ views per post, 25M VND sponsorship, 20M VND profit, Featured on 4 major media channels',
    },
    {
      title: 'CNH\'s Club Fair 2024',
      description: 'Managed 5 members. Assigned tasks and equipped them with specialized skills. Constructed a list of necessary equipment. Inquired about price and purchased them at the lowest possible cost. Sold and rented them out to participating clubs at reasonable prices while maintaining a stable profit. Contacted and worked with the suppliers to make hazard management plans to control risks during events.',
      technologies: ['Logistics', 'Procurement', 'Risk Management', 'Team Management'],
      period: '06/2024 – 08/2024',
      role: 'Co-head of logistic',
      achievements: 'Successfully managed equipment logistics for multiple clubs',
    },
    {
      title: 'Inspiration day 2025',
      description: 'Spoke at a welcoming event to over 70 enrolling high school students majoring in history. Guided them through academic components, operating procedures of various school clubs and ways to balance between study and extracurricular activities. Prepared sharing sessions and materials including slides, scripts and games to connect and learn about listeners\' characteristics and requirements, thereby introducing them to the appropriate clubs. Delivered fresh perspectives on extracurricular activities and community projects to inspire students towards making more contributions for society.',
      technologies: ['Public Speaking', 'Mentoring', 'Education', 'Student Engagement'],
      period: '11/10/2025',
      role: 'Lecturer for history-major classes',
      achievements: '70+ students engaged, successful orientation program',
    },
  ]

  return (
    <Box
      id="projects"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="white"
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
            Featured Projects
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
            Featured Projects
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={6}
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="gray.100"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 40px rgba(255, 107, 107, 0.15)',
                borderColor: 'orange.200',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <VStack align="stretch" gap={3}>
                <Heading as="h3" fontSize="lg" color="gray.900" fontWeight={700}>
                  {project.title}
                </Heading>
                {project.role && (
                  <Text fontSize="md" color="orange.700" fontWeight={600}>
                    {project.role}
                  </Text>
                )}
                {project.period && (
                  <Badge
                    bgGradient="linear(135deg, #FF6B6B, #FF8E53)"
                    color="white"
                    backgroundColor="gray.100"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight={600}
                    w="fit-content"
                  >
                    {project.period}
                  </Badge>
                )}
                <Text color="gray.800" lineHeight="tall" fontSize="sm" fontWeight={500}>
                  {project.description}
                </Text>
                {project.achievements && (
                  <Box
                    bg="orange.50"
                    p={3}
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor="orange.500"
                  >
                    <Text fontSize="xs" fontWeight={600} color="orange.700" mb={1}>
                      Key Achievements:
                    </Text>
                    <Text fontSize="xs" color="gray.700" fontWeight={500}>
                      {project.achievements}
                    </Text>
                  </Box>
                )}
                <HStack flexWrap="wrap" gap={2} mt={2}>
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      bg="orange.50"
                      color="orange.700"
                      backgroundColor="gray.100"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight={600}
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
        color="orange.600"
        _hover={{ color: 'orange.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('gallery')}
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

export default Projects

