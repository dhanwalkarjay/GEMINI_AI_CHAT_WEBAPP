/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from "@mui/material";

export const CustomSpinner: React.FC<{}> = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
    <div className="loader">
      <hr className="loader-1" />
      <hr />
      <hr />
    </div>
    <style jsx>{`
      .loader{
          width: 100%;
          display: flex;
          flex-direction: column;
      }
      
      .loader hr{
        margin-top: 6px;
        margin-bottom: 6px;
          border-radius: 4px;
          width: 98%; 
          border: none;
          background-color: #f6f7f8;
          background: linear-gradient(to right, #9ed7ff, #8AAAE5, #9edfff);
          background-size: 800px 50px;
          height: 20px;
          animation: loader 2s infinite linear;
      }
      
      @keyframes loader {
          0%{
              background-position: -800px 0px;
          }
          100%{
              background-position: 800px 0px;
          }
      }
    `}</style>
  </Box>
);

// export const CustomSpinner: React.FC<{}> = () => (
//   <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
//     <div className="spinner"></div>
//     <style jsx>{`
//       .spinner {
//         border: 4px solid rgba(255, 255, 255, 0.3);
//         border-left-color: #fff;
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//         animation: spin 1s linear infinite;
//       }
//       @keyframes spin {
//         0% {
//           transform: rotate(0deg);
//         }
//         100% {
//           transform: rotate(360deg);
//         }
//       }
//     `}</style>
//   </Box>
// );

export const LoadingBar: React.FC<{}> = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
    <div className="loading-bar"></div>
    <style jsx>{`
      .loading-bar {
        width: 100px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.3);
        position: relative;
        overflow: hidden;
      }
      .loading-bar::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #fff;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        0% {
          transform: translateX(-100%);
        }
        50% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `}</style>
  </Box>
);

export const RotatingSquare: React.FC<{}> = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
    <div className="rotating-square"></div>
    <style jsx>{`
      .rotating-square {
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
        border-radius: 4px;
        animation: rotate 1s infinite linear;
      }
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </Box>
);

export const BouncingBar: React.FC<{}> = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
    <div className="bouncing-bar"></div>
    <style jsx>{`
      .bouncing-bar {
        width: 20px;
        height: 40px;
        background-color: #fff;
        animation: bounce 1s infinite ease-in-out;
      }
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
    `}</style>
  </Box>
);
