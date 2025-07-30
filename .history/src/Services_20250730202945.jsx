import React from 'react';
import SectionHeading from './SectionHeading';
import data from './data.js';

export default function Services() {
  return (
    <>
      <div className='Main-services'>
        <SectionHeading>Основные услуги</SectionHeading>
        <div className='services-objects'>
          {data.main_services.map((item) => (
            <div className="general-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className='service-text'>
                <h3>{item.name}</h3>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='Additional-services'>
        <SectionHeading>Дополнительные услуги</SectionHeading>
        <div className='services-objects'>
          {data.add_services.map((item) => (
            <div className="general-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className='service-text'>
                <h3>{item.name}</h3>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionHeading>Связаться с отелем</SectionHeading>
      <div className='contact-box'>
        <a href="#"><p>Сообщить о проблеме</p><img src="Hilton/images/arrow.png" /></a>
        <a href="#"><p>Техническая помощь в номере</p><img src="Hilton/images/arrow.png" /></a>
      </div>
    </>
  );
}