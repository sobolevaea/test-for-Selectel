import { Link } from "react-router-dom";
import "./HomePage.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Добро пожаловать!</h1>
      <Link to="/menu">Перейти к меню</Link>
    </div>
  );
}