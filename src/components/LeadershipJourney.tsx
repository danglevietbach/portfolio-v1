import { Box, Heading, Text, VStack, Badge, HStack, SimpleGrid } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function LeadershipJourney() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const leadershipRoles = [
    {
      title: 'President',
      company: 'Music Ig Club',
      period: '10/2024 – 10/2025',
      description: [
        'Headed the music club aimed at enriching high school students\' passion for music through creative media projects, photoshoots, and large-scale performance events. Organised a playground for them to uncover and develop their hidden talent',
        'Supervised key social media platforms including Facebook, Instagram and TikTok. Oversaw 3 musical videos with a combined view totalling more than 100.000 and hosted shows with hundreds of participants',
        'Managed, directed and guided 100+ members on challenging administrative tasks to ensure effective publicity campaigns and proper preparation for key events',
        'Built a platform to motivate young people, especially high school students, to breakthrough, perform and shine on the stage',
        'Devised and executed leadership camps for the club to groom the next batch of student leaders',
        'Supervised social media platforms including Facebook, Instagram and TikTok. Devised logistical, financial and public relation plans for 2 events: Minishow 2025: "Rực", Chạm 2025: "Vọng"',
      ],
      projects: [
        {
          name: 'Chạm 2025: "Vọng"',
          role: 'Head organizer',
          period: '12/2024 – 03/2025',
          achievements: '400+ participants, 10.000+ views per post, 25M VND sponsorship, 20M VND profit, Featured on 4 major media channels',
        },
      ],
    },
    {
      title: 'Team Leader',
      company: 'CNH Support Team 2025',
      period: '05/2025 – 06/2025',
      description: [
        'Led a section involving 12 members of the school\'s Student Youth Union in volunteering and charity campaigns',
        'Supported cohorts of students taking major national examinations through means of providing encouragement, supplying water, and ensuring their smooth commute to the examination hall in the "Support Exam" programme',
        'Organized "Club Fair 2025: Concelation", an orientation fair for incoming students to explore the school activities and clubs through interactive display booths',
        'Shared gifts including books, food, milk, toys, clothes for disabled children in Hanoi Center for Nurturing Children with Disabilities through charitable activities',
      ],
      projects: [
        {
          name: 'CNH\'s Club Fair 2025: "Tang dau"',
          role: 'Advisor of Finance',
          period: '07/2025- 08/2025',
          achievements: '600 views per Facebook post, 750+ participants, 12M VND sponsorship',
        },
      ],
    },
    {
      title: 'Head of Human Resources',
      company: 'Move Up CNH',
      period: '03/2024 – 05/2024',
      description: [
        'Oversaw working performance of 65 committee members in organizing a series of graduation events for final-year students. Operated bonding meetings to strengthen members\' relationship. Monitored key metrics to ensure the programme\'s success',
        'Managed 12 members directly in the Human Resource department. Assigned tasks, led training sessions, organized specialized workshops to optimize individual performance',
        'Engaged with graduating students through class bonding activities. Prepared props for their yearbook photoshoots and collated a video montage highlighting the most memorable moments of their school journey. Successfully organized a main finale event attracting almost 500 senior students',
      ],
      projects: [
        {
          name: 'CNH\'s Club Fair 2024',
          role: 'Co-head of logistic',
          period: '06/2024 – 08/2024',
          achievements: 'Successfully managed equipment logistics for multiple clubs',
        },
        {
          name: 'Inspiration day 2025',
          role: 'Lecturer for history-major classes',
          period: '11/10/2025',
          achievements: '100+ students engaged, successful orientation program',
        },
      ],
    },
  ]

  return (
    <Box
      id="leadership"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="teal.50"
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
            bg="teal.100"
            borderRadius="full"
            boxShadow="md"
          >
            Leadership Journey
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
            Leadership Journey
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" maxW="800px" mt={4}>
            A timeline of my leadership roles and the impactful projects I've led
          </Text>
        </VStack>

        <VStack align="stretch" gap={12}>
          {leadershipRoles.map((role, index) => (
            <Box
              key={index}
              position="relative"
              pl={{ base: 0, md: 8 }}
              borderLeft={{ base: 'none', md: '4px solid' }}
              borderColor={{ base: 'transparent', md: 'orange.300' }}
            >
              {/* Timeline dot */}
              <Box
                position="absolute"
                left={{ base: 'auto', md: '-10px' }}
                top={0}
                w={{ base: '0', md: '20px' }}
                h={{ base: '0', md: '20px' }}
                borderRadius="full"
                bgGradient="linear(135deg, #FF6B6B, #FF8E53)"
                border="4px solid white"
                boxShadow="0 0 0 4px rgba(255, 107, 107, 0.2)"
                display={{ base: 'none', md: 'block' }}
              />

              <Box
                bg="white"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="teal.200"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(255, 107, 107, 0.15)',
                  borderColor: 'orange.200',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <HStack mb={4} flexWrap="wrap" gap={2}>
                  <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight={700} color="gray.900">
                    {role.title}
                  </Heading>
                  <Badge
                    bgGradient="linear(135deg, #FF6B6B, #FF8E53)"
                    color="gray.900"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight={700}
                    boxShadow="0 4px 12px rgba(255, 107, 107, 0.4)"
                  >
                    {role.period}
                  </Badge>
                </HStack>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="orange.700" mb={6} fontWeight={600}>
                  {role.company}
                </Text>

                <VStack align="stretch" gap={3} mb={6}>
                  {role.description.map((item, i) => (
                    <Box
                      key={i}
                      color="gray.800"
                      pl={6}
                      position="relative"
                      fontSize={{ base: 'sm', md: 'md' }}
                      lineHeight="tall"
                      fontWeight={500}
                    >
                      <Box
                        as="span"
                        position="absolute"
                        left={0}
                        color="orange.500"
                        fontWeight="bold"
                        fontSize="lg"
                      >
                        •
                      </Box>
                      {item}
                    </Box>
                  ))}
                </VStack>

                {role.projects && role.projects.length > 0 && (
                  <Box
                    mt={6}
                    pt={6}
                    borderTop="2px solid"
                    borderColor="gray.200"
                  >
                    <Text fontSize="md" fontWeight={700} color="gray.900" mb={4}>
                      Key Projects:
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                      {role.projects.map((project, pIndex) => (
                        <Box
                          key={pIndex}
                          bg="orange.50"
                          p={4}
                          borderRadius="lg"
                          borderLeft="4px solid"
                          borderColor="orange.500"
                        >
                          <HStack mb={2} flexWrap="wrap" gap={2}>
                            <Text fontWeight={700} color="gray.900" fontSize="sm">
                              {project.name}
                            </Text>
                            <Badge
                              bg="orange.200"
                              color="orange.800"
                              px={2}
                              py={0.5}
                              borderRadius="md"
                              fontSize="xs"
                              fontWeight={600}
                            >
                              {project.period}
                            </Badge>
                          </HStack>
                          <Text fontSize="xs" color="orange.700" fontWeight={600} mb={2}>
                            {project.role}
                          </Text>
                          <Text fontSize="xs" color="gray.700" fontWeight={500}>
                            {project.achievements}
                          </Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </VStack>

        {/* Scroll Arrow */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          color="orange.600"
          _hover={{ color: 'orange.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('impact')}
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

export default LeadershipJourney
