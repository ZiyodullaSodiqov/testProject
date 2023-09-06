import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/main.css'
import Register from "./components/register/Register";
import Auth from "./components/auth/Auth";
import User from './components/users/User'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}> </Route>
        <Route path="/success" element={<Auth />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);