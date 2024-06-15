import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat With AI",
        1000,
        "Built With Gemini AI",
        2000,
        "It help's you to resolve you'r quesrie's",
        1500,
        "It is an AI assistant",
        1000,
        "It reduces your workload",
        2000,
        "It will processes human conversation",
        1500,
        "Chatbots enable natural human-computer interaction",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

const TypingAnim2 = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
      
        "Chat With AI",
        1000,
        "Built With Gemini AI",
        2000,
        "It help's you to resolve you'r quesrie's",
        1500,
        "It is an AI assistant",
        1000,
        "It reduces your workload",
        2000,
        "It is a computer program that processes human conversatio",
        1500,
        "Allowing humans to interact with digital devices as if they were communicating with a real person",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "20px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export { TypingAnim, TypingAnim2 };
