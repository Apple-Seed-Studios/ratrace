import { Stack, Box, Typography, Container } from '@mui/material/';
import LoginButton from '../Login/LoginButton';

function LandingPage()
{
    return (
        <Box
            sx={ {
                bgcolor: 'background.paper',
                pt: 8,
                pb: 10,
            } }
            className='landingPage'
        >
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    How productive are you...
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    How would you feel to have your money worries behind you?
                    <br />
                    <br />
                    Just imagine the look on your kids' faces when they see your productivity-energy emanating into the room.
                    <br />
                    <br />
                    Most people don't have the courage to work 60 hours a day... folks like us? We're just built different. 🐀
                    <br />
                    <br />
                </Typography>
                <Stack
                    sx={ { pt: 4 } }
                    direction="row"
                    spacing={ 2 }
                    justifyContent="center"
                >
                    <LoginButton />
                </Stack>
            </Container>
        </Box>
    )
}

export default LandingPage;
