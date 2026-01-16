import { Box, Heading, Text, VStack, Badge, HStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Experience() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
  const experiences = [
    {
      title: 'President',
      company: 'Music Ig Club',
      period: '10/2024 – 10/2025',
      description: [
        'Headed the music club aimed at enriching high school students\' passion for music through creative media projects, photoshoots, and large-scale performance events. Organised a playground for them to uncover and develop their hidden talent',
        'Supervised key social media platforms including Facebook, Instagram and TikTok. Oversaw 3 musical videos with a combined view totalling more than 100.000 and hosted shows with hundreds of participants',
        'Managed, directed and guided 70+ members on challenging administrative tasks to ensure effective publicity campaigns and proper preparation for key events',
        'Built a platform to motivate young people, especially high school students, to breakthrough, perform and shine on the stage',
        'Devised and executed leadership camps for the club to groom the next batch of student leaders',
        'Supervised social media platforms including Facebook, Instagram and TikTok. Devised logistical, financial and public relation plans for 2 events: Minishow 2025: "Rực", Chạm 2025: "Vọng"',
      ]
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
    },
  ]

  return (
    <Box
      id="experience"
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
            Leadership Experience
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
            Leadership Experience
          </Heading>
        </VStack>
        <Box position="relative" maxW="1000px" mx="auto">
          {/* Center Timeline Line */}
          <Box
            position="absolute"
            left="50%"
            top={0}
            bottom={0}
            w="4px"
            transform="translateX(-50%)"
            bgGradient="linear(180deg, #FF6B6B 0%, #FF8E53 50%, #4ECDC4 100%)"
            borderRadius="full"
            boxShadow="0 0 10px rgba(255, 107, 107, 0.3)"
            display={{ base: 'none', md: 'block' }}
          />
          
          <VStack align="stretch" gap={10}>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <Box
                  key={index}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  flexDirection={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
                  gap={{ base: 4, md: 6 }}
                >
                  {/* Card */}
                  <Box
                    flex={{ base: '1', md: '1' }}
                    maxW={{ base: '100%', md: '45%' }}
                    bg="white"
                    p={{ base: 6, md: 8 }}
                    borderRadius="xl"
                    boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                    border="1px solid"
                    borderColor="gray.100"
                    _hover={{
                      transform: { base: 'translateY(-4px)', md: isEven ? 'translateX(-8px)' : 'translateX(8px)' },
                      boxShadow: '0 8px 30px rgba(255, 107, 107, 0.15)',
                      borderColor: 'orange.200',
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <HStack mb={3} flexWrap="wrap" gap={2}>
                      <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight={700} color="gray.900">
                        {exp.title}
                      </Heading>
                      <Badge
                        bgGradient="linear(135deg, #FF6B6B, #FF8E53)"
                        color="white"
                        backgroundColor="gray.100"
                        px={4}
                        py={1.5}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight={700}
                        boxShadow="0 4px 12px rgba(255, 107, 107, 0.4)"
                        letterSpacing="wide"
                      >
                        {exp.period}
                      </Badge>
                    </HStack>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="orange.700" mb={4} fontWeight={600}>
                    {exp.company}
                  </Text>
                  <VStack align="stretch" gap={3} mt={4}>
                    {exp.description?.map((item, i) => (
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
                  </Box>

                  {/* Timeline Dot */}
                  <Box
                    position={{ base: 'relative', md: 'absolute' }}
                    left={{ base: 'auto', md: '50%' }}
                    transform={{ base: 'none', md: 'translateX(-50%)' }}
                    w={{ base: '24px', md: '32px' }}
                    h={{ base: '24px', md: '32px' }}
                    borderRadius="full"
                    bgGradient="linear(135deg, #FF6B6B, #FF8E53)"
                    border="5px solid white"
                    boxShadow="0 0 0 5px rgba(255, 107, 107, 0.3), 0 6px 20px rgba(255, 107, 107, 0.4)"
                    zIndex={2}
                    flexShrink={0}
                    display={{ base: 'none', md: 'block' }}
                  />

                  {/* Spacer for desktop */}
                  <Box flex={{ base: '0', md: '1' }} maxW={{ base: '0', md: '45%' }} display={{ base: 'none', md: 'block' }} />
                </Box>
              )
            })}
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
          onClick={() => scrollToSection('awards')}
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

export default Experience

