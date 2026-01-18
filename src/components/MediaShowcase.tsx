import { useState } from 'react'
import { Box, Heading, Text, SimpleGrid, Image, Dialog, VStack, HStack, Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

// Music images
import music1 from '../assets/images/Music/IMG_3794.JPG'
import music2 from '../assets/images/Music/IMG_3795.JPG'
import music3 from '../assets/images/Music/IMG_3796.JPG'
import music4 from '../assets/images/Music/IMG_3797.JPG'
import music5 from '../assets/images/Music/IMG_3798.JPG'
import music6 from '../assets/images/Music/jasmtran-20.jpeg'

// Charity images
import charity1 from '../assets/images/Charity/C68D25DC-E519-4A2E-A664-D7249EB35CCF.jpg'
import charity2 from '../assets/images/Charity/IMG_0654.jpeg'
import charity3 from '../assets/images/Charity/IMG_0700.jpeg'
import charity4 from '../assets/images/Charity/IMG_3799.JPG'
import charity5 from '../assets/images/Charity/IMG_3800.JPG'
import charity6 from '../assets/images/Charity/IMG_3801.JPG'

// Friends images
import friend1 from '../assets/images/Friends/000003.jpeg'
import friend2 from '../assets/images/Friends/000039.jpeg'
import friend3 from '../assets/images/Friends/000046.jpeg'
import friend4 from '../assets/images/Friends/000053.jpeg'
import friend5 from '../assets/images/Friends/000055.jpeg'
import friend6 from '../assets/images/Friends/5063ce8debddeb1056036c8f335ff90c.jpeg'
import friend7 from '../assets/images/Friends/ce3399e3f0c19e15cec58d4772b4ceb6.jpeg'
import friend8 from '../assets/images/Friends/d18128e314bb3d03ea46c0ce8e8d5560.jpeg'
import friend9 from '../assets/images/Friends/IMG_3371.JPG'
import friend10 from '../assets/images/Friends/IMG_3798.JPG'
import friend11 from '../assets/images/Friends/IMG_6691.JPG'

// School image
import school from '../assets/images/NguyenHuehighschoolforthegifted.jpg'

function MediaShowcase() {
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const galleryImages = [
    // Music Club images
    {
      id: 1,
      src: music1,
      alt: 'Music Club Event',
      title: 'Music Club Performance',
      description: 'Showcasing talent and creativity through music performances',
      category: 'Music',
    },
    {
      id: 2,
      src: music2,
      alt: 'Music Club Activity',
      title: 'Music Club Activities',
      description: 'Engaging students in creative media projects and photoshoots',
      category: 'Music',
    },
    {
      id: 3,
      src: music3,
      alt: 'Music Event',
      title: 'Large-Scale Performance Events',
      description: 'Organizing events that attract hundreds of participants',
      category: 'Music',
    },
    {
      id: 4,
      src: music4,
      alt: 'Music Club Event',
      title: 'Music Club Showcase',
      description: 'Building a platform for students to discover and develop their talents',
      category: 'Music',
    },
    {
      id: 5,
      src: music5,
      alt: 'Music Performance',
      title: 'Stage Performances',
      description: 'Motivating young people to breakthrough and shine on stage',
      category: 'Music',
    },
    {
      id: 6,
      src: music6,
      alt: 'Music Club Member',
      title: 'Music Club Members',
      description: 'Leading and guiding 70+ members in creative projects',
      category: 'Music',
    },
    // Charity images
    {
      id: 7,
      src: charity1,
      alt: 'Charity Event',
      title: 'Charity Activities',
      description: 'Supporting disabled children in Hanoi Center for Nurturing Children with Disabilities',
      category: 'Charity',
    },
    {
      id: 8,
      src: charity2,
      alt: 'Charity Work',
      title: 'Community Service',
      description: 'Sharing gifts including books, food, milk, toys, and clothes for children',
      category: 'Charity',
    },
    {
      id: 9,
      src: charity3,
      alt: 'Charity Event',
      title: 'Volunteering',
      description: 'Making a positive impact through charitable activities',
      category: 'Charity',
    },
    {
      id: 10,
      src: charity4,
      alt: 'Charity Activity',
      title: 'Support Programs',
      description: 'Organizing charity booths and fundraising events',
      category: 'Charity',
    },
    {
      id: 11,
      src: charity5,
      alt: 'Charity Work',
      title: 'Community Engagement',
      description: 'Leading volunteering and charity campaigns',
      category: 'Charity',
    },
    {
      id: 12,
      src: charity6,
      alt: 'Charity Event',
      title: 'Charity Initiatives',
      description: 'Successfully raising funds for disabled children',
      category: 'Charity',
    },
    // Friends/Team images
    {
      id: 13,
      src: friend1,
      alt: 'Team Activities',
      title: 'Team Building',
      description: 'Strengthening relationships through collaborative activities',
      category: 'Team',
    },
    {
      id: 14,
      src: friend2,
      alt: 'Team Event',
      title: 'Club Activities',
      description: 'Building connections through school club activities',
      category: 'Team',
    },
    {
      id: 15,
      src: friend3,
      alt: 'Team Photo',
      title: 'Student Union',
      description: 'Leading sections of the Student Youth Union',
      category: 'Team',
    },
    {
      id: 16,
      src: friend4,
      alt: 'Team Activity',
      title: 'Collaborative Projects',
      description: 'Working together on challenging administrative tasks',
      category: 'Team',
    },
    {
      id: 17,
      src: friend5,
      alt: 'Team Event',
      title: 'Event Organization',
      description: 'Coordinating team members for successful events',
      category: 'Team',
    },
    {
      id: 18,
      src: friend6,
      alt: 'Team Photo',
      title: 'Leadership Team',
      description: 'Managing and directing teams of 70+ members',
      category: 'Team',
    },
    {
      id: 19,
      src: friend7,
      alt: 'Team Activity',
      title: 'Club Fair',
      description: 'Organizing orientation fairs for incoming students',
      category: 'Team',
    },
    {
      id: 20,
      src: friend8,
      alt: 'Team Event',
      title: 'Student Activities',
      description: 'Creating opportunities for students to explore clubs',
      category: 'Team',
    },
    {
      id: 21,
      src: friend9,
      alt: 'Team Photo',
      title: 'Graduation Events',
      description: 'Organizing series of graduation events for final-year students',
      category: 'Team',
    },
    {
      id: 22,
      src: friend10,
      alt: 'Team Activity',
      title: 'Committee Work',
      description: 'Overseeing working performance of 65 committee members',
      category: 'Team',
    },
    {
      id: 23,
      src: friend11,
      alt: 'Team Event',
      title: 'Event Coordination',
      description: 'Ensuring effective publicity campaigns and event preparation',
      category: 'Team',
    },
    // School image
    {
      id: 25,
      src: school,
      alt: 'Nguyen Hue High School',
      title: 'Nguyen Hue High School for Gifted Students',
      description: 'My school where I led various clubs and organized major events',
      category: 'School',
    },
  ]

  const categories = ['All', 'Music', 'Charity', 'Team', 'School']
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (image: any) => {
    setSelectedImage(image)
    onOpen()
  }

  return (
    <Box
      id="media"
      minH="100vh"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="orange.50"
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
            bg="orange.100"
            borderRadius="full"
            boxShadow="md"
          >
            Media Showcase
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
            Media Showcase
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" maxW="800px" mt={4}>
            Visual stories from events, projects, and creative work
          </Text>
        </VStack>

        <HStack mb={6} justifyContent="center" gap={2} flexWrap="wrap">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'solid' : 'ghost'}
              colorScheme={selectedCategory === category ? 'teal' : 'orange'}
              size="sm"
              px={4}
              borderRadius="full"
              fontWeight={selectedCategory === category ? 600 : 500}
              bg={selectedCategory === category ? 'teal.500' : undefined}
              color={selectedCategory === category ? 'yellow.200' : undefined}
              _hover={{
                bg: selectedCategory === category ? 'teal.600' : 'orange.100',
                color: selectedCategory === category ? 'yellow.100' : undefined,
              }}
            >
              {category}
            </Button>
          ))}
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {filteredImages.map((image) => (
            <Box
              key={image.id}
              cursor="pointer"
              onClick={() => openModal(image)}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              bg="orange.50"
              border="1px solid"
              borderColor="orange.300"
              _hover={{
                transform: 'scale(1.03)',
                boxShadow: '0 12px 40px rgba(255, 107, 107, 0.15)',
                borderColor: 'orange.300',
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Image
                src={image.src}
                alt={image.alt}
                w="100%"
                h="300px"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="800px">
            <Dialog.CloseTrigger />
            {selectedImage && (
              <Box p={6}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  w="100%"
                  borderRadius="md"
                />
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>

      {/* Scroll Arrow */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="orange.600"
        _hover={{ color: 'orange.700', transform: 'translateX(-50%) translateY(4px)' }}
        cursor="pointer"
        onClick={() => scrollToSection('facebook-showcase')}
        transition="all 0.3s"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={32} />
      </Box>
    </Box>
  )
}

export default MediaShowcase
