import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateApplication from "./pages/CreateApplication";
import NavBar from "./components/NavBar/NavBar";
// import ProtectedRoute from "./pages/ProtectedRoute";
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="" element={<Navigate to="/basvuru-olustur" replace />} />
          <Route path="/basvuru-olustur" element={<CreateApplication />} />
          <Route path="admin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
