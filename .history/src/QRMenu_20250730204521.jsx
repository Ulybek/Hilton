import React from 'react';
import SectionHeading from './SectionHeading';
import data from './data.js';

export default function Services() {
    return (
        <div className='qr-kod-objects'>
            <SectionHeading>Меню ресторана</SectionHeading>
            <div className='search-button-box'>
                <div className='search-button'>
                    <img src="Hilton/images/search.png" alt="" />
                    <input type="text" placeholder='Поиск' />
                </div>
            </div>
            <div className='menu-types-objects'>
                {data.menu_types.map((item) => (
                    <div className="general-card" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div className='text'>
                            <h3>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className='meal-types-buttons'>
                <a href="#">
                    <p>Завтраки</p>
                </a>
                <a href="#">
                    <p>Супы</p>
                </a>
                <a href="#">
                    <p>Горячие блюда</p>
                </a>
                <a href="#">
                    <p>Ужины</p>
                </a>
            </div>

            <div className='menu-meals-objects'>
                <SectionHeading>Завтраки</SectionHeading>
                <div className='breakfast-menu style-flex-menu'>
                    {data.menu_breakfastmeal.map((item) => (
                        <div className="general-card" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div className='text'>
                                <h2>{item.price}</h2>
                                <h3>{item.name}</h3>
                                <p>{item.weight}</p>
                            </div>
                            <div className='add-button'>
                                <img src="Hilton/images/plus-sign.png" alt="" />
                            </div>
                        </div>
                    ))}
                </div>

                <SectionHeading>Супы</SectionHeading>
                <div className='lunch-menu style-flex-menu'>
                    {data.menu_lunchmeal.map((item) => (
                        <div className="general-card" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div className='text'>
                                <h2>{item.price}</h2>
                                <h3>{item.name}</h3>
                                <p>{item.weight}</p>
                            </div>
                            <div className='add-button'>
                                <img src="Hilton/images/plus-sign.png" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <SectionHeading>Горячие блюда</SectionHeading>
                <div className='hotmeal-menu style-flex-menu'>
                    {data.menu_hotmeal.map((item) => (
                        <div className="general-card" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div className='text'>
                                <h2>{item.price}</h2>
                                <h3>{item.name}</h3>
                                <p>{item.weight}</p>
                            </div>
                            <div className='add-button'>
                            <img src={`${base}images/plus-sign.png`} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}