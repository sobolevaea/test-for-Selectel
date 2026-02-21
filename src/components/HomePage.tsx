import "./HomePage.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <section className="hero">
          <h1>React + TypeScript Application</h1>
          <p className="subtitle">
            Меня зовут Елизавета, Frontend-разработчик.
          </p>
          <p className="description">
            Мой проект демонстрирует работу с типизированным состоянием,
            компонентной архитектурой и клиентским роутингом.
          </p>
          <Link to="/menu" className="primary-btn">
            Перейти к меню
          </Link>
        </section>

        <section className="tech">
          <h2>Технологии</h2>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>React Router</li>
            <li>Модульная структура</li>
            <li>Адаптивная верстка</li>
          </ul>
        </section>
      </div>
    </div>
  );
}