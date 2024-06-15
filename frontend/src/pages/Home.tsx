import { Box, useMediaQuery, useTheme } from "@mui/material";
import { TypingAnim } from "../components/typer/TypingAnim";
import Footer from "../components/Footer";
import UpcomingFeatures from "../components/UpcommingFeatures/upcomingFeatures";
import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/splashScreen";

const Home: React.FC = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (<>
    {showSplash && <SplashScreen />}
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img className="fadeInLeft"
            src="homepage-robot.png"
            alt="robot"
            style={{ width: "400px", margin: "auto" }}
          />
          <hr />
          <Box className="fadeInRight" sx={{
            display: "flex",
            mx: "auto",
            backgroundColor: "#5671a3",
            marginLeft: "-55px",
            padding: "20px",
            borderRadius: 6,
            boxShadow: "-5px -5px 105px #64f3d5",
          }}>
            <p className="homepage-hero-title">
              Welcome To Our Helpful <br /> <span className="homepage-hero">AI</span> Chat Assistant
            </p>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        textAlign: "center",
        marginTop: "300px",
        fontSize: "40px",
      }}>
        This Is Demo Of Our <span style={{ color: "#5671a3", fontSize: "50px", }}>Platform</span>
      </Box>
      <Box sx={{ display: "flex", mx: "auto" }}>
        <img
          src="homepage.png"
          alt="home page"
          style={{
            display: "flex",
            margin: "auto",
            width: isBelowMd ? "80%" : "60%",
            borderRadius: 20,
            boxShadow: "-5px -5px 105px #64f3d5",
            marginTop: 90,
            marginBottom: 150,
            padding: 10,
          }}
        />
      </Box>
      <Box sx={{
        textAlign: "center",
        marginTop: "-130px",
        fontSize: "20px",
      }}>UI of Our Chat Platform
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "30%",
          display: "flex",
          flexDirection: { md: "row", xs: "column", sm: "column" },
          gap: 5,
          my: 30,
          py: -20,
          marginBottom: -8,
        }}
      >
        <Box sx={{
          display: "flex",
          mx: "auto",
          marginLeft: "90px",
          padding: "20px",

          borderRadius: 6,
        }}>
          <img
            src="recent-prompts.png"
            alt="recent prompt"
            style={{ width: "320px", boxShadow: "-5px -5px 105px #64f3d5", margin: "auto", borderRadius: 20, paddingLeft: "-20px" }}
          />
        </Box>

        <Box sx={{
          display: "flex",
          mx: "auto",
          width: "70%",
          marginLeft: "-55px",
          padding: "20px",
          borderRadius: 6,
        }}>
          <img
            src="chat-prompt.png"
            alt="chat image"
            style={{ width: "100%", boxShadow: "-5px -5px 105px #64f3d5", margin: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>
      <Box sx={{
        width: "100%",
        height: "30%",
        display: "flex",
        flexDirection: { md: "row", xs: "column", sm: "column" },
        gap: 5,
        my: 30,
        py: -20,
        marginLeft: "-50px",
        marginBottom: "150px",
      }}>
        <Box sx={{
          display: "flex", mx: "auto",
          textAlign: "center",
          marginTop: "-185px",
          marginBottom: "200px",
          fontSize: "20px",
        }}>Recent Prompt's
        </Box>
        <Box sx={{
          display: "flex", mx: "auto",
          textAlign: "center",
          marginTop: "-185px",
          marginBottom: "50px",
          fontSize: "20px",
          paddingRight: "100px",
        }}>This Is How Our Assistant Give Response To User
        </Box>
      </Box>
      <Box sx={{ marginBottom: "400px", borderRadius: "20", boxShadow: "-5px -5px 105px #64f3d5", marginLeft: "80px", marginRight: "80px" }}>
        <UpcomingFeatures />
      </Box>
      <Footer />
    </Box>
  </>);
};

export default Home;
