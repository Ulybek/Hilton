const base = import.meta.env.BASE_URL;

const data = {
  services: [
    { id: 1, img: `${base}images/room_1.webp`, text: 'Специальные предложения' },
    { id: 2, img: `${base}images/room_2.webp`, text: 'Бутылка шампанского в подарок' },
    { id: 3, img: `${base}images/room_3.webp`, text: 'Свадебная фотосессия для молодожен' },
    { id: 4, img: `${base}images/room_4.webp`, text: 'Свадебная фотосессия для молодожен' },
    { id: 5, img: `${base}images/room_4.webp`, text: 'Свадебная фотосессия для молодожен' },
    { id: 6, img: `${base}images/room_4.webp`, text: 'Свадебная фотосессия для молодожен' },
    { id: 7, img: `${base}images/room_4.webp`, text: 'Свадебная фотосессия для молодожен' },
    { id: 8, img: `${base}images/room_4.webp`, text: 'Свадебная фотосессия для молодожен' }
  ],

  main_services: [
    { id: 1, img: `${base}images/service_img_3.webp`, name: 'Удобство в номере', time: 'круглосуточно' },
    { id: 2, img: `${base}images/service_img_3.webp`, name: 'Спальные места в номер', time: 'круглосуточно' },
    { id: 3, img: `${base}images/service_img_3.webp`, name: 'Уборка номера', time: 'круглосуточно' },
    { id: 4, img: `${base}images/service_img_3.webp`, name: 'Прачечная', time: 'круглосуточно' },
    { id: 5, img: `${base}images/service_img_3.webp`, name: 'Мини-бар', time: 'круглосуточно' },
    { id: 6, img: `${base}images/service_img_3.webp`, name: 'Мини-бар', time: 'круглосуточно' }
  ],

  add_services: [
    { id: 1, img: `${base}images/add_service_img_1.webp`, name: 'Багажная комната', time: 'круглосуточно' },
    { id: 2, img: `${base}images/add_service_img_2.webp`, name: 'Заказать трансфер', time: 'круглосуточно' },
    { id: 3, img: `${base}images/add_service_img_2.webp`, name: 'Заказать трансфер', time: 'круглосуточно' },
    { id: 4, img: `${base}images/add_service_img_2.webp`, name: 'Заказать трансфер', time: 'круглосуточно' },
    { id: 5, img: `${base}images/add_service_img_2.webp`, name: 'Заказать трансфер', time: 'круглосуточно' },
    { id: 6, img: `${base}images/add_service_img_2.webp`, name: 'Заказать трансфер', time: 'круглосуточно' }
  ],

  menu_types: [
    { id: '1', img: `${base}images/main_meal_img.webp`, name: 'Основное меню' },
    { id: '2', img: `${base}images/bar_meal_img.webp`, name: 'Барное меню' },
    { id: '3', img: `${base}images/kid_meal_img.webp`, name: 'Детское меню' },
    { id: '4', img: `${base}images/kid_meal_img.webp`, name: 'Детское меню' }
  ],

  menu_breakfastmeal: [
    { id: '1', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '2', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '3', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '4', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '5', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '6', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' }
  ],

  menu_lunchmeal: [
    { id: '1', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '2', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '3', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '4', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '5', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '6', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' }
  ],

  menu_hotmeal: [
    { id: '1', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '2', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '3', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '4', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '5', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' },
    { id: '6', img: `${base}images/menu_meal_img.png`, price: '1900 ₸', name: 'Скрембл с томатам', weight: '350 г' }
  ]
};

export default data;