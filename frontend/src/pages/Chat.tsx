import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { CustomSpinner } from "../components/CustomSpinner/Spinner";
import WelcomeBox from "../components/welcome/welcomePage";
import InteractivePrompt from "../components/Suggestions/InteractiveSuggestions";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const [userInputs, setUserInputs] = useState<string[]>([]);

  useEffect(() => {
    const storedInputs = localStorage.getItem('userInputs');
    if (storedInputs) {
      setUserInputs(JSON.parse(storedInputs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userInputs', JSON.stringify(userInputs));
  }, [userInputs]);

  const handleSubmit2 = async (input: string) => {
    const content = input;

    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    setUserInputs((prev) => [...prev, content]);
    setLoading(true);
    try {
      const chatData = await sendChatRequest(content);
      if (chatData?.chats) {
        setChatMessages([...chatData.chats]);
      }
    } catch (error) {
      console.error("Error sending chat request:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };


  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;

    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    setUserInputs((prev) => [...prev, content]);
    setLoading(true);
    try {
      const chatData = await sendChatRequest(content);
      if (chatData?.chats) {
        setChatMessages([...chatData.chats]);
      }
    } catch (error) {
      console.error("Error sending chat request:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deletechats" });
      await deleteUserChats();
      setChatMessages([]);
      setUserInputs([]);
      localStorage.removeItem('userInputs');
      toast.success("Deleted Chats Successfully", { id: "deletechats" });
    } catch (error) {
      console.error("Error deleting chats:", error);
      toast.error("Deleting chats failed", { id: "deletechats" });
    }
  };

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          if (data?.chats) {
            setChatMessages([...data.chats]);
          }
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.error("Error loading chats:", err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, [auth]);

  useEffect(() => {
    if (!auth?.user) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const prompts = [
    { content: "Road trip drive time and kid entertainment ideas", iconSrc: "https://www.gstatic.com/images/branding/productlogos/maps/v7/192px.svg", onClick: () => handleSubmit2("Road trip drive time and kid entertainment ideas") },
    { content: "Understanding Artificial Intelligence and its Impact", iconSrc: "https://cdn-icons-png.flaticon.com/512/28/28736.png", onClick: () => handleSubmit2("Understanding Artificial Intelligence and its Impact") },
    { content: "Demystifying Machine Learning: Concepts and Applications", iconSrc: "https://cdn-icons-png.flaticon.com/512/3039/3039382.png", onClick: () => handleSubmit2("Demystifying Machine Learning: Concepts and Applications") },
    { content: "Immersive Experiences: Exploring Virtual Reality Technology", iconSrc: "https://cdn-icons-png.flaticon.com/512/2829/2829798.png", onClick: () => handleSubmit2("Immersive Experiences: Exploring Virtual Reality Technology") },
  ];


  return (
    <Box
      sx={{
        display: "flex",
        // flex: 1,
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "80vh",
            overflowY: "auto",
            bgcolor: "#506891",
            borderRadius: 5,
            boxShadow: "-1px -1px 100px #64f3d5",
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name?.[0]}
            {auth?.user?.name?.split(" ")[1]?.[0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", color: "white", justifyItems: "center", alignItems: "center" }}>
            You are talking to a Gemini AI ChatBOT

          <div className="recentprompt-title">Recent Prompt's</div>
            
          </Typography>          
          <Box sx={{overflowY: "auto", height: "55vh", marginBottom: "10px", marginTop: "35px",}}>
          {/* <Typography sx={{ mx: "auto", fontFamily: "Roboto Sans, serif", p: 3, alignItems: "center" }}> */}
            {userInputs.map((input, index) => (
              <Typography
                key={index}
                sx={{
                  color: "white",
                  width: "200px",
                  mx: "auto",
                  fontFamily: "Roboto Slab, serif",
                  marginBottom: 1,
                  padding: "5px",
                  borderRadius: "10px",
                  backgroundColor: "#8AAAE5",
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    backgroundColor: 'white',
                    color: 'black',
                  },
                  zIndex: input === userInputs[0] ? 1 : 0,
                }}
                onClick={() => handleSubmit2(input)}
              >
                {input.length > 20 ? input.substring(0, 20) + "..." : input}
              </Typography>
            ))}
          {/* </Typography> */}
          </Box>
          <Button
            onClick={handleDeleteChats}
            sx={{
              width: "200px",
              my: "auto",
              mb: "50px",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
          maxWidth: '100%',
        }}
      >
        {chatMessages.length === 0 && (
          <Typography
            sx={{
              textAlign : {xs: "center", sm: "center", md: "center"},
              fontSize: { xs: "30px", md: "40px" },
              color: "white",
              mb: 1,
              mx: "auto",
              fontWeight: "600",
            }}
          >
            <WelcomeBox />
          </Typography>
        )}
        {/* {chatMessages.length === 0 && (
          <InteractivePrompt
            onClick={() => handleSubmit2("Road trip drive time and kid entertainment ideas")} 
            content="Road trip drive time and kid entertainment ideas"
          />
        )} */}
        {chatMessages.length === 0 && (
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: '90px',
              marginTop: '300px',
              marginBottom: '-525px',              
              gap: 2,
            }}
          >
            {prompts.map((prompt, index) => (
              <Box
              key={index}
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <InteractivePrompt
                key={index}
                onClick={prompt.onClick}
                content={prompt.content}
                iconSrc={prompt.iconSrc}
              />
              </Box>
            ))}
          </Box>
        )}


        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: "70vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
          {loading && <CustomSpinner />}
        </Box>

        <Box
          style={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "#506891",
            display: "flex",
            margin: "auto",
            boxShadow: "-5px -5px 100px #64f3d5",
          }}
        >
          <input
            placeholder="Enter your prompt Here......"
            ref={inputRef}
            type="text"
            className="input-placeholder"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>

        </Box>
        
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            color: "white",
            fontSize: { xs: "12px", md: "14px" },
          }}
        >AI chat App may resolve your quries.</Typography>
      </Box>
    </Box>
  );
};

export default Chat;
