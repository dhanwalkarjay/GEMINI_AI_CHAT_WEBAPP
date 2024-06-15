import { Box } from '@mui/material';

const SplashScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#506891',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <img className="splash-screen" src="logo.png" alt="App Logo" style={{ width: '400px', height: '400px' }} />
    </Box>
  );
};

export default SplashScreen;
