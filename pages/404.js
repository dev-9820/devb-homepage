import NextLink from 'next/link'
import{Box,Heading,Container,Divider, Button, Text} from '@chakra-ui/react'

const NotFound = () => {
    return(
        <Container>
            <Heading as="h1"> Not Found</Heading>
            <Text> The Page you are looking for was not found.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">
                        Return to home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound