import { Button, Stack, Box, Typography, Container } from '@mui/material/';
import './LandingPage.scss';

function LandingPage()
{
    return (
        <div className='landingPage'>

            <Box
                sx={ {
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                } }
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        How productive are you... (Landing Page)
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
                        Most people don't have the courage to work 60 hours a day like you and me.
                        <br />
                        <br />
                        (Should we display this to users who aren't logged in?)
                    </Typography>
                    <Stack
                        sx={ { pt: 4 } }
                        direction="row"
                        spacing={ 2 }
                        justifyContent="center"
                    >
                        <Button disabled={ true } variant="contained">Login/create account ...something?</Button>
                        <Button disabled={ true } variant="outlined">Dismiss? Create your first Task/timer? Meow?</Button>
                    </Stack>
                </Container>
            </Box>
        </div>
    )
}

export default LandingPage;
