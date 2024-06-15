import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface Props {
  prompts: string[]; // Array of prompt suggestions
  onPromptClick: (prompt: string) => void; // Function to handle click events
}

const ReadyMadePrompts: React.FC<Props> = ({ prompts, onPromptClick }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
        Suggested Prompts:
      </Typography>
      {/* Render each prompt suggestion as a button */}
      {prompts.map((prompt, index) => (
        <Button
          key={index}
          variant="outlined"
          onClick={() => onPromptClick(prompt)} // Handle click event
          sx={{ mr: 1, mb: 1, color: "white", borderColor: "white" }}
        >
          {prompt}
        </Button>
      ))}
    </Box>
  );
};

export default ReadyMadePrompts;
