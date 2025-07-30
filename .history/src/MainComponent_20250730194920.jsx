import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import './MainComponent.css';
import data from './data';
import Services from './Services';
import QRMenu from './QRMenu';

export default function MainComponent() {
  return (
    <main className="main">
      <section className='section-1'>
        <div className="info-box">
          <div className="name-box">
            <h1>Hilton Garden Inn</h1>
            <p>Астана, Кабанбай батыр проспект 15</p>
          </div>
          <a href="#" className="description">
            <img src="/images/info.png" alt="" />
          </a>
        </div>

        <div className="slides-scroll">
          {data.services.map((item) => (
            <div className="slide-card" key={item.id}>
              <div
                className="slide-image"
                style={{ backgroundImage: `url(${item.img})` }}>
                <h3>{item.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='section-2'>
        <div className='section-2-button'>
          <NavLink to="/services" className={({ isActive }) => `service-button ${isActive ? 'active' : ''}`}><h1>Услуги</h1></NavLink>
          <NavLink to="/qr" className={({ isActive }) => `qr-button ${isActive ? 'active' : ''}`}><h1>QR-меню</h1></NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/services" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/qr" element={<QRMenu />} />
        </Routes>
      </section>
    </main>
  );
}
