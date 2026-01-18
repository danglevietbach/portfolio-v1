import { useState } from 'react'
import { Box, Heading, Text, VStack, HStack, Link, Button, Input, Textarea } from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:nhamhung.gttn@gmail.com?subject=${subject}&body=${body}`
  }
  return (
    <Box
      id="contact"
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

      <Box w="100%" px={{ base: 4, md: 8, lg: 12 }} position="relative" zIndex={1} maxW="1200px" mx="auto">
        <VStack align="stretch" gap={8}>
          {/* Header Section */}
          <VStack gap={3} mb={2} textAlign="center">
            <Box
              as="span"
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight={700}
              color="orange.600"
              textTransform="uppercase"
              letterSpacing="wide"
              px={6}
              py={3}
              bg="blue.100"
              borderRadius="full"
              boxShadow="md"
            >
              Get In Touch
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
              Contact Me
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.700"
              maxW="600px"
              mx="auto"
              textAlign="center"
              lineHeight="tall"
              fontWeight={500}
            >
              I'm always open to discussing creative collaborations, media projects, or just having a chat about communication and new media.
            </Text>
          </VStack>

          {/* Contact Form */}
          <Box
            bg="blue.50"
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="orange.100"
            maxW="800px"
            mx="auto"
            w="100%"
            _hover={{
              boxShadow: '2xl',
              borderColor: 'orange.200',
            }}
            transition="all 0.3s"
          >
            <form onSubmit={handleSubmit}>
              <VStack gap={6} align="stretch">
                {/* Name and Email Row */}
                <HStack gap={4} direction={{ base: 'column', md: 'row' }}>
                  <Box flex={1} w="100%">
                    <Text
                      fontSize="sm"
                      fontWeight={600}
                      color="gray.700"
                      mb={2}
                    >
                      Name *
                    </Text>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      bg="blue.100"
                      borderColor="gray.200"
                      _hover={{
                        borderColor: 'orange.300',
                      }}
                      _focus={{
                        borderColor: 'orange.500',
                        boxShadow: '0 0 0 1px #FF6B6B',
                      }}
                    />
                  </Box>
                  <Box flex={1} w="100%">
                    <Text
                      fontSize="sm"
                      fontWeight={600}
                      color="gray.700"
                      mb={2}
                    >
                      Email *
                    </Text>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      bg="blue.100"
                      borderColor="gray.200"
                      _hover={{
                        borderColor: 'orange.300',
                      }}
                      _focus={{
                        borderColor: 'orange.500',
                        boxShadow: '0 0 0 1px #FF6B6B',
                      }}
                    />
                  </Box>
                </HStack>

                {/* Subject */}
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight={600}
                    color="gray.700"
                    mb={2}
                  >
                    Subject
                  </Text>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    bg="blue.100"
                    borderColor="gray.200"
                    _hover={{
                      borderColor: 'purple.300',
                    }}
                    _focus={{
                      borderColor: 'purple.500',
                      boxShadow: '0 0 0 1px #667eea',
                    }}
                  />
                </Box>

                {/* Message */}
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight={600}
                    color="gray.700"
                    mb={2}
                  >
                    Message *
                  </Text>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    rows={6}
                    bg="blue.100"
                    borderColor="gray.200"
                    resize="vertical"
                    _hover={{
                      borderColor: 'purple.300',
                    }}
                    _focus={{
                      borderColor: 'purple.500',
                      boxShadow: '0 0 0 1px #667eea',
                    }}
                  />
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size={{ base: 'md', md: 'lg' }}
                  bgGradient="linear(135deg, #FF6B6B 0%, #FF8E53 50%, #4ECDC4 100%)"
                  color="gray.900"
                  fontWeight={600}
                  backgroundColor="orange.400"
                  px={8}
                  py={6}
                  fontSize={{ base: 'md', md: 'lg' }}
                  w="100%"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'xl',
                    opacity: 0.9,
                  }}
                  transition="all 0.3s"
                >
                  Send Message
                </Button>
              </VStack>
            </form>

            {/* Social Links */}
            <Box mt={8} pt={8} borderTop="1px solid" borderColor="gray.200">
              <Text
                fontSize="md"
                fontWeight={600}
                color="gray.800"
                mb={4}
                textAlign="center"
              >
                Or connect with me on
              </Text>
              <HStack gap={6} justify="center" flexWrap="wrap">
                <Link
                  href="mailto:danglevitbac@gmail.com"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg="red.50"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{
                      bg: '#ea4335',
                      transform: 'translateY(-4px) scale(1.1)',
                      '& svg': {
                        color: 'white',
                      },
                    }}
                    transition="all 0.3s"
                    css={{
                      '& svg': {
                        color: '#ea4335',
                        transition: 'color 0.3s',
                      },
                    }}
                  >
                    <FaEnvelope size={24} />
                  </Box>
                </Link>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default Contact

