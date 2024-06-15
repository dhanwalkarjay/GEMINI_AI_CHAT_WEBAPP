import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CSSTransition } from "react-transition-group";

function extractCodeFromString(message: string): string[] {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
  return [message];
}

const myCustomStyle = {
  ...coldarkDark,
  pre: {
    maxWidth: "90%",
  },
};

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  const userName = auth?.user?.name || "";
  const initials = userName
    ? userName.split(" ").map((name) => name[0]).join("")
    : "??";

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <Box
        sx={{
          m: 1,
          display: "flex",
          p: 3,
          bgcolor: role === "user" ? "#506891" : "#f5f5f5",
          gap: 2,
          borderRadius: 2,
          maxWidth: "95%",
          color: role === "user" ? "black" : "white",
        }}
      >
        <Avatar sx={{ ml: "0", bgcolor: role === "user" ? "black" : undefined, color: role === "user" ? "white" : undefined }}>
          {role === "user" ? initials : <img src="logo.png" alt="logo" width={"30px"} />}
        </Avatar>
        <Box sx={{ color: role === "user" ? "black" : "white" }}>
          {!messageBlocks.length ? (
            <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
          ) : (
            messageBlocks.map((block, index) =>
              isCodeBlock(block) ? (
                <SyntaxHighlighter
                  key={index}
                  style={myCustomStyle}
                  language="javascript"
                >
                  {block}
                </SyntaxHighlighter>
              ) : (
                <Typography key={index} sx={{ fontSize: "20px", color: role === "user" ? "white" : "black", }}>
                  {block}
                </Typography>
              )
            )
          )}
        </Box>
      </Box>
    </CSSTransition>
  );
};

export default ChatItem;

