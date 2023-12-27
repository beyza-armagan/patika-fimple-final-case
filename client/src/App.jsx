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
import ApplicationList from "./pages/ApplicationList";
import UpdateApplicationPage from "./components/Admin/UpdateApplicationPage";
import ApplicationSuccessful from "./pages/ApplicationSuccessful";
import SearchApplication from "./pages/SearchApplication";
import ApplicationTracking from "./pages/ApplicationTracking";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="" element={<Navigate to="/basvuru-olustur" replace />} />
          <Route path="/basvuru-olustur" element={<CreateApplication />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="/admin/basvuru-listesi" element={<ApplicationList />} />
          <Route
            path="/admin/basvuru/:basvuruNo"
            element={<UpdateApplicationPage />}
          />
          <Route path="/basvuru-basarili" element={<ApplicationSuccessful />} />
          <Route path="/basvuru-sorgula" element={<SearchApplication />} />
          <Route path="/basvuru" element={<ApplicationTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
