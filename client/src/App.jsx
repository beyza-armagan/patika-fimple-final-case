import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateApplication from "./pages/CreateApplication";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Default route */}
          <Route path="" element={<Navigate to="/basvuru-olustur" replace />} />
          <Route path="/basvuru-olustur" element={<CreateApplication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
