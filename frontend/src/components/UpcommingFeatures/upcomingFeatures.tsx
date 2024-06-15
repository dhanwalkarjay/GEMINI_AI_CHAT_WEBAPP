import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';

const SectionContainer = styled(Box)({
  backgroundColor: '#5671a3',
  color: 'white',
  padding: '100px 0',
  margin: '0px',
  borderRadius: '10px',
});

const FeatureCard = styled(Card)({
  backgroundColor: '#8AAAE5',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: "0px 0px 0px 2px #64f3d5",
  // boxShadow: '0px 20px 20px 11px rgba(0, 0, 0, 0.2), 0px -20px 20px 10px rgba(0, 0, 0, 0.14), 0px 1px 20px 20px rgba(0, 0, 0, 0.12)',
});


const UpcomingFeatures = () => {
    return (
        <SectionContainer>
          <Container maxWidth="lg">
            <Typography sx={{marginBottom: '20px', color:'white'}} variant="h4" align="center" gutterBottom>
              Upcoming Features
            </Typography>
            <Typography sx={{marginBottom: '50px', fontSize: '20px',}} variant="body1" align="center" paragraph>
              We are constantly working on new features to enhance your experience. Here are some exciting features coming soon!
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard>
                  <CardContent>
                    <Typography sx={{color:"white",}} variant="h6" gutterBottom>
                      Text to Image
                    </Typography>
                    <Typography sx={{color:"#5671a3", fontWeight: "500"}} variant="body2">
                      Our AI can generate images from text descriptions. Describe what you want to see, and our AI will create it for you.
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard>
                  <CardContent>
                    <Typography sx={{color:"white",}} variant="h6" gutterBottom>
                      Document Overview
                    </Typography>
                    <Typography sx={{color:"#5671a3", fontWeight: "500"}} variant="body2">
                      Upload a document and our AI will read it and provide a comprehensive overview, highlighting key points and summaries.
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard>
                  <CardContent>
                    <Typography sx={{color:"white",}} variant="h6" gutterBottom>
                        Talk with AI Assistant
                    </Typography>
                    <Typography sx={{color:"#5671a3", fontWeight: "500"}} variant="body2">
                    It allows users to have real-time interactive voice conversations with our AI assistant and get real-time responses</Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            </Grid>
          </Container>
        </SectionContainer>
      ); 
};

export default UpcomingFeatures;
