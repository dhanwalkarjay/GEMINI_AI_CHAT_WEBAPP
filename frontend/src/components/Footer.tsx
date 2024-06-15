import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
    backgroundColor: '#5671a3',
    color: '#ffffff',
    padding: '40px 0',
    marginTop: '20px',
});

const FooterLink = styled(Link)({
    fontSize: "20px",
    color: '#8AAAE5',
    textDecoration: 'none',
    '&:hover': {
        color: "rgb(0, 255, 252)",
    }
});

const Header = () => {
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={4}>
                        <Typography sx={{color: "white"}} variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography sx={{fontSize: "20px",}} variant="body2">
                            We are a company dedicated to providing the best AI chat assistant to help you with your needs. Our mission is to innovate and deliver top-quality services.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography sx={{color:"white"}} variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <FooterLink href="/">Home</FooterLink><br />
                        <FooterLink href="/chat">chat</FooterLink><br />
                        <FooterLink href="/login">login</FooterLink><br />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography sx={{color: "white"}} variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography sx={{fontSize: "20px",}} variant="body2">
                            123 AI Street<br />
                            Innovation City, Techland<br />
                            Email: support@aichatassistant.com<br />
                            Phone: (123) 456-7890
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center">
                    <Typography sx={{fontSize: "15px",}} variant="body2">
                        &copy; {new Date().getFullYear()} AI Chat Assistant. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </FooterContainer>
    );
};

export default Header;