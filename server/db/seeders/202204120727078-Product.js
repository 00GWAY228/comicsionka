"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Человек паук",
          description: "Статуэтка человека паука. Вообще кайфовая",
          price: "4000",
          img: "380611_aS54H9DqPX_spider_man_advanced_suit_marvel.jpeg",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 1,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Железный человек",
          description: "Статуэтка железного человека",
          price: "3000",
          img: "Mk50-Ironman-Mark50.jpg_q50.970.jpg",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 1,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Статуэтка халка б/у",
          img: "b8380c7e-1877-49b4-bf13-e3bc79db64d5.jpg",
          name: "Статуэтка Халка",
          price: "5000",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Статуэтка Тора из МВБ ",
          img: "819dea40-74fc-45f1-93f7-c8d8d8be380d.jpg",
          name: "Статуэтка Тора",
          price: "5790",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Статуэтка со съемными руками",
          img: "6e50c027-e092-4127-9a1e-afc8cf6ad145.jpg",
          name: "Статуэтка Доктора Стрэнджа",
          price: 2890,
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Статуэтка малыша Грута",
          img: "ce5845d5-f285-4511-be2a-909ee137d45d.jpg",
          name: "Статуэтка Грута",
          price: "2190",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Железный человек 1987г.",
          description: "Оригинальный комикс железного человека",
          price: "3000",
          img: "ironMenComics.png",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 2,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Комикс к 50-летию",
          img: "c0426e6d-0d69-4752-87a4-6fcc5c597121.jpg",
          name: "Человек Паук 2012г.",
          price: "6840",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Первый комикс о Торе",
          img: "480f0085-a7c6-425a-a5da-9226a3b655af.jpg",
          name: "Тор 1998г.",
          price: "1830",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Комикс ФЧ с афтографом ",
          img: "79bc1b34-f37a-4ead-bdaa-c2f8998a36c6.jpg",
          name: "Фантастическая четверка",
          price: "8750",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Первый выпуск СС",
          img: "048f6e45-3dc6-44d8-9384-d1c2b69b8db9.jpg",
          name: "Серебряный серфер",
          price: "6580",
          seller_id: 2,
          statusClient: false,
          statusSeller: false,
          subCategory_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Халк 1998г.",
          description: "Оригинальный комикс Халк",
          price: "3000",
          img: "70682025.jpeg",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 2,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Футболка с Тором",
          description: "Оригинальный мерч",
          price: "2000",
          img: "large_ThorFury.jpeg",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 3,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Плакат со Мстителями",
          description: "Мстители финал",
          price: "1000",
          img: "567177.jpeg",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 4,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Статуэтка Бутмана",
          description: "Богатый чел",
          price: "3000",
          img: "batman-begins-batman-110-scale-statue-iron-studios_dc-comics_silo.png",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 5,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Комикс Сумермена",
          description: "Древний оригинальный комикс",
          price: "3000",
          img: "Superman-204.jpeg",
          statusSeller: false,
          statusClient: false,
          subCategory_id: 6,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Гарри Потер',
          description: 'Статуэтка Гарри Потер. Вообще кайфовая',
          price: '3000',
          img: 'HP_S_01.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 11,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Гермиона Грейнджер',
          description: 'Статуэтка Гермионы Грейнджер. Новая',
          price: '3000',
          img: 'HP_S_02.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 11,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Джинни и Рон Уизли',
          description: 'Набор фигурок',
          price: '6000',
          img: 'HP_S_03.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 11,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Альбус Дамблдор',
          description: 'Кукла Дамблдор, 30 см',
          price: '5000',
          img: 'HP_S_04.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 11,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Чжоу',
          description: 'Статуэтка Чжоу, 30 см',
          price: '2000',
          img: 'HP_S_05.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 11,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Волан-де-Морт',
          description: 'Крутой чел',
          price: '1000',
          img: 'HP_S_06.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 11,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Гарри Поттера',
          description: 'Сувенирная, на Хэллоуин',
          price: '3000',
          img: 'HP_Palka_01.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Волшебная палочка',
          description: 'С подсветкой (батарейки в комплекте)',
          price: '3000',
          img: 'HP_Palka_02.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Палка Топ',
          description: 'Коллекционная, в подарочной коробке',
          price: '6500',
          img: 'HP_Palka_03.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Северус Снейп',
          description: 'палочка декана факультета Слизерин',
          price: '4600',
          img: 'HP_Palka_04.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Римус Люпин',
          description: 'Палочка учителя Защиты от темных искусств',
          price: '3700',
          img: 'HP_Palka_05.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Дамблдора',
          description: 'Палочка профессора Дамблдора',
          price: '5600',
          img: 'HP_Palka_06.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};