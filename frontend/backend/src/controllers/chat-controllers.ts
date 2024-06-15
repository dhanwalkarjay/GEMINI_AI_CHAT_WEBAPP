import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_SECRET);


import runChat from "../config/geminiai-config.js"; 

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });

    // Grab chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    }));

    // Push the user's message to the chats
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // Generate response using Google Generative AI
    const prompt = chats.map(chat => chat.content).join("\n");
    const generatedText = await runChat(prompt);

    // Push the generated response to the user's chats
    user.chats.push({ content: generatedText, role: "AI" });

    // Save user's chats
    await user.save();

    // Send the user's chats back as response
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



// export const generateChatCompletion = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { message } = req.body;
//   try {
//     const user = await User.findById(res.locals.jwtData.id);
//     if (!user)
//       return res
//         .status(401)
//         .json({ message: "User not registered OR Token malfunctioned" });
//     // grab chats of user
//     const chats = user.chats.map(({ role, content }) => ({
//       role,
//       content,
//     })) as ChatCompletionRequestMessage[];
//     chats.push({ content: message, role: "user" });
//     user.chats.push({ content: message, role: "user" });

//     // send all chats with new one to openAI API
//     const config = runChat(message);
//     const openai = new GeminiAIApi(config);
//     // get latest response
//     const chatResponse = await openai.createChatCompletion({
//       model: "gemini-1.0-pro",
//       messages: chats,
//     });
//     user.chats.push(chatResponse.data.choices[0].message);
//     await user.save();
//     return res.status(200).json({ chats: user.chats });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };

// export const generateChatCompletion = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { message } = req.body;
//   try {
//     const user = await User.findById(res.locals.jwtData.id);
//     if (!user)
//       return res
//         .status(401)
//         .json({ message: "User not registered OR Token malfunctioned" });

//     // Grab chats of user
//     const chats = user.chats.map(({ role, content }) => ({
//       role,
//       content,
//     }));

//     // Push the user's message to the chats
//     chats.push({ content: message, role: "user" });
//     user.chats.push({ content: message, role: "user" });

//     // Generate content using Google Generative AI
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const prompt = chats.map(chat => chat.content).join("\n");
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const generatedText = response.text();

//     // Push the generated response to the user's chats
//     user.chats.push({ content: generatedText, role: "AI" });

//     // Save user's chats
//     await user.save();

//     // Send the user's chats back as response
//     return res.status(200).json({ chats: user.chats });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};


