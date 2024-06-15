// interface InteractivePromptProps {
//     onClick: () => void;
//     content: string;
// }


// const InteractivePrompt: React.FC<InteractivePromptProps> = ({ onClick, content }) => {
//     return (
//         <div
//             style={{
//                 position: "absolute",
//                 width: "15%",
//                 height: "28%",
//                 borderRadius: "20px",
//                 backgroundColor: "#506891",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: "290px",
//                 marginBottom: "-400px",
//                 marginLeft: "40px",
//                 paddingLeft: "20px",
//                 fontFamily: "Robot Sans, serif",
//                 fontSize: "23px",
//                 boxShadow: "-5px -5px 100px #64f3d5",
//                 cursor: "pointer",
//                 transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
//                 display: "grid",
//             }}
//             onClick={onClick}
//         >
//             <span>{content}</span>
//             <img style={{ width: "50px", height:"50px", borderRadius: "50%", backgroundColor: "#8AAAE5", padding: "3px" }} src="https://www.gstatic.com/images/branding/productlogos/maps/v7/192px.svg" alt="logo" />
//         </div>
//     );
// };

// export default InteractivePrompt;



import React from "react";

interface InteractivePromptProps {
  onClick: () => void;
  content: string;
  iconSrc: string; // Add iconSrc prop
}

const InteractivePrompt: React.FC<InteractivePromptProps> = ({ onClick, content, iconSrc }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "150px",
        borderRadius: "20px",
        backgroundColor: "#506891",
        justifyContent: "center",
        margin: "10px",
        padding: "20px",
        fontFamily: "Roboto Sans, serif",
        fontSize: "18px",
        boxShadow: "-5px -5px 100px #64f3d5",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
      onClick={onClick}
    >
      <span>{content}</span>
      <img
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#8AAAE5",
          padding: "3px",
          marginTop: "40px",
        }}
        src={iconSrc} // Use the iconSrc prop
        alt="logo"
      />
    </div>
  );
};

export default InteractivePrompt;
