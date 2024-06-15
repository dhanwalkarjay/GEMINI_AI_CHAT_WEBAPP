
// const NotFound = () => {
//   return <div>NotFound</div>;
// };

// export default NotFound;


import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Box
      width="97.2%"
      height="100%"
      display="flex"
      flex={1}
      mt={18}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={3}
      bgcolor="transperent"
    >
      <Box
        display="flex"
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={3}
        borderRadius="10px"
        boxShadow="10px 10px 20px #000"
        bgcolor="#20232a"
        color="white"
        mt={5}
      >
        <Typography variant="h4" textAlign="center" padding={2} fontWeight={600}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" textAlign="center" padding={2}>
          The page you are looking for might have been removed or is temporarily unavailable.
        </Typography>
        <Button
          onClick={handleGoBack}
          sx={{
            px: 2,
            py: 1,
            mt: 2,
            width: '200px',
            borderRadius: 2,
            bgcolor: '#00fffc',
            color: 'black',
            ':hover': {
              bgcolor: 'white',
              color: 'black',
            },
          }}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
