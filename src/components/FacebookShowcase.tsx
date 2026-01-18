import { Box, Heading, Text, SimpleGrid, VStack, Link, Badge, HStack } from '@chakra-ui/react'
import { FiExternalLink, FiFacebook } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function FacebookShowcase() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const facebookPages = [
    {
      id: 1,
      title: 'Music Ig Club',
      vietnamese: 'Clb âm nhạc',
      url: 'https://www.facebook.com/mic.cnh?mibextid=wwXIfr&rdid=e1oDXRvbx5QCMHjv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1MudU3yNpm%2F%3Fmibextid%3DwwXIfr#',
      description: 'Leading the music club with creative media projects and large-scale performance events',
    },
    {
      id: 2,
      title: 'CNH Support Team',
      vietnamese: 'Đoàn thanh niên',
      url: 'https://www.facebook.com/share/1BUMsvJ3Ez/?mibextid=wwXIfr',
      description: 'Leading a section of the Student Youth Union in volunteering and charity campaigns',
    },
    {
      id: 3,
      title: 'Move Up CNH',
      vietnamese: 'Muc',
      url: 'https://www.facebook.com/share/1AkxVdnXYH/?mibextid=wwXIfr',
      description: 'Organizing graduation events and managing the Human Resources department',
    },
    {
      id: 4,
      title: 'Inspiration Day',
      vietnamese: 'Inspiration',
      url: 'https://www.facebook.com/share/16kr3KXeXE/?mibextid=wwXIfr',
      description: 'Orientation program for incoming students to explore school activities and clubs',
    },
  ]

  const musicVideos = [
    {
      id: 1,
      title: 'MV1',
      url: 'https://www.facebook.com/mic.cnh/videos/1700469903942395/',
      description: 'Creative music video showcasing talent and creativity',
    },
    {
      id: 2,
      title: 'MV2',
      url: 'https://www.facebook.com/mic.cnh/videos/1116802626462234/',
      description: 'Large-scale performance event with hundreds of participants',
    },
    {
      id: 3,
      title: 'MV3',
      url: 'https://www.facebook.com/mic.cnh/videos/3824386404515323/',
      description: 'Motivating young people to breakthrough and shine on stage',
    },
  ]

  const getFacebookEmbedUrl = (url: string) => {
    // Use the proper Facebook embed format
    const encodedUrl = encodeURIComponent(url)
    return `https://www.facebook.com/plugins/video.php?height=314&href=${encodedUrl}&show_text=true&width=560&t=0`
  }

  return (
    <Box
      id="facebook-showcase"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="blue.50"
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
            color="blue.600"
            textTransform="uppercase"
            letterSpacing="wide"
            px={6}
            py={3}
            bg="blue.100"
            borderRadius="full"
            boxShadow="md"
          >
            Leadership
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
            Facebook Leadership Showcase
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" maxW="800px" mt={4}>
            Explore my leadership through media products and webpages on Facebook
          </Text>
        </VStack>

        {/* Facebook Pages Section */}
        <Box mb={16}>
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight={700}
            color="gray.900"
            mb={6}
            textAlign="center"
          >
            Facebook Pages & Clubs
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {facebookPages.map((page) => (
              <Box
                key={page.id}
                bg="white"
                borderRadius="2xl"
                p={6}
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="blue.200"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)',
                  borderColor: 'blue.400',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <VStack align="stretch" gap={3}>
                  <HStack justify="space-between" align="start" flexWrap="wrap" gap={2}>
                    <VStack align="start" gap={1}>
                      <Heading as="h4" fontSize="lg" color="gray.900" fontWeight={700}>
                        {page.title}
                      </Heading>
                      {page.vietnamese && (
                        <Badge
                          bg="blue.100"
                          color="blue.700"
                          px={3}
                          py={1}
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight={600}
                        >
                          {page.vietnamese}
                        </Badge>
                      )}
                    </VStack>
                    <FiFacebook size={24} color="#1877F2" style={{ flexShrink: 0 }} />
                  </HStack>
                  <Text color="gray.700" lineHeight="tall" fontSize="sm" fontWeight={500}>
                    {page.description}
                  </Text>
                  <Link
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue.600"
                    fontWeight={600}
                    _hover={{
                      color: 'blue.700',
                      textDecoration: 'underline',
                    }}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    fontSize="sm"
                    w="fit-content"
                  >
                    Visit Facebook Page <FiExternalLink />
                  </Link>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Music Videos Section */}
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight={700}
            color="gray.900"
            mb={6}
            textAlign="center"
          >
            Music Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {musicVideos.map((video) => (
              <Box
                key={video.id}
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                border="1px solid"
                borderColor="blue.200"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)',
                  borderColor: 'blue.400',
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Box
                  position="relative"
                  paddingBottom="76.6%"
                  height="0"
                  overflow="hidden"
                  bg="gray.100"
                >
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      overflow: 'hidden',
                    }}
                    src={getFacebookEmbedUrl(video.url)}
                    title={video.title}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </Box>
                <Box p={6}>
                  <HStack justify="space-between" align="start" mb={3}>
                    <Heading as="h4" fontSize="md" color="gray.900" fontWeight={700}>
                      {video.title}
                    </Heading>
                    <FiFacebook size={20} color="#1877F2" style={{ flexShrink: 0 }} />
                  </HStack>
                  <Text color="gray.700" lineHeight="tall" fontSize="sm" fontWeight={500} mb={4}>
                    {video.description}
                  </Text>
                  <Link
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="blue.600"
                    fontWeight={600}
                    _hover={{
                      color: 'blue.700',
                      textDecoration: 'underline',
                    }}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    fontSize="sm"
                    w="fit-content"
                  >
                    Watch on Facebook <FiExternalLink />
                  </Link>
                </Box>
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
          color="blue.600"
          _hover={{ color: 'blue.700', transform: 'translateX(-50%) translateY(4px)' }}
          cursor="pointer"
          onClick={() => scrollToSection('education-skills')}
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

export default FacebookShowcase
