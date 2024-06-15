import { useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";
import { useLocation } from "react-router-dom";

const routeTitles : { [key: string]: string }  = {
  "/": "Home",
  "/chat": "Chat",
  "/login": "Login Page",
  "/signup": "Signup Page",
  "*": "Not Found",
};

function App() {
  const auth = useAuth();
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "Page Not Found";
    document.title = `AI Chat Bot - ${title}`;
  }, [location.pathname]);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
