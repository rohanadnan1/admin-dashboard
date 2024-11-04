import "./App.css";
import Main from "./components/Chats/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import LoginPage from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Chats/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import UserManagement from "./components/User-Management/Main";
import UserEdit from "./components/User-Management/UserEdit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const navigate = useNavigate();


  const userSession = localStorage.getItem("userSession");

  useEffect(() => {
    if (!userSession && location.pathname !== "/login") {
      navigate("/login");
    } else if (userSession && location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [userSession, location.pathname, navigate]);

  if (!userSession && location.pathname !== "/login") {
    return null; // Render nothing while redirecting
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      {!isLogin && userSession && <Sidebar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {userSession && (
          <>
            <Route path="/chats" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/user-management/:id" element={<UserEdit />} />
          </>
        )}
      </Routes>
    </div>
  );
}

function App() {
  const client = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Router>
          <AppContent />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
