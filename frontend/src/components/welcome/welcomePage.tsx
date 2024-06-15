import { Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const WelcomeBox = () => {
  const auth = useAuth();
  const firstName = auth?.user?.name?.split(" ")[0] || "";

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #B3E5FC, #81D4FA, #4FC3F7, #29B6F6, #0288D1, #0277BD)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        borderRadius: '8px',
        marginLeft: '-470px',
        textAlign: 'left',
        fontSize: '54px',
        fontWeight: 'bold',
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundSize: '200% auto',
        animation: 'gradientMove 3s linear infinite',
      }}
    >
      <span>Hello,</span> {firstName} <br />
      How can I help you today?
    </Box>
  );
};

export default WelcomeBox;
