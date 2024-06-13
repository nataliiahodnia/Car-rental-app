
  <h1>Car Rental App</h1>

  <h2>Опис</h2>
  <p>Цей проект є веб-додатком для оренди автомобілів. Користувачі можуть переглядати доступні автомобілі, залишати відгуки та переглядати карту з розташуванням офісу.</p>


  ## Функціонал

- Перегляд доступних автомобілів
- Фільтрація автомобілів за виробником та ціною
- Додавання відгуків
- Перегляд карти з розташуванням офісу

  <h2>Вимоги</h2>
  <ul>
    <li>Node.js</li>
    <li>npm або yarn</li>
  </ul>

  <h2>Встановлення</h2>
  <ol>
    <li>Клонувати репозиторій:
      <pre><code>git clone https://github.com/yourusername/car-rental-app.git</code></pre>
    </li>
    <li>Перейти в директорію проекту:
      <pre><code>cd car-rental-app</code></pre>
    </li>
    <li>Встановити залежності:
      <pre><code>npm install</code></pre>
      або
      <pre><code>yarn install</code></pre>
    </li>
  </ol>

  <h2>Запуск</h2>
  <p>Для запуску проекту в режимі розробки виконайте команду:</p>
  <pre><code>npm start</code></pre>
  <p>або</p>
  <pre><code>yarn start</code></pre>
  <p>Проект буде доступний за адресою <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>Структура проекту</h2>
  <ul>
    <li><code>src/components</code> - Каталог з компонентами React
      <ul>
        <li><code>Footer</code> - Компонент для футера з кнопкою "Показати карту"</li>
        <li><code>Map</code> - Компонент для відображення карти</li>
        <li><code>SupportUkraine</code> - Компонент для відображення блоку підтримки України</li>
        <li><code>TestimonialCarousel</code> - Компонент для відображення каруселі з відгуками</li>
        <li><code>FeedbackForm</code> - Компонент для форми зворотного зв'язку</li>
        <li><code>FeedbackButton</code> - Компонент для кнопки зворотного зв'язку</li>
        <li><code>CarCard</code> - Компонент для карточки автомобіля</li>
        <li><code>CarDetailsModal</code> - Модальний компонент для детальної інформації про автомобіль</li>
        <li><code>CarList</code> - Компонент для списку автомобілів з пагінацією</li>
        <li><code>PromotionsSection</code> - Секція для відображення акцій</li>
        <li><code>SearchFilter</code> - Компонент для фільтрації автомобілів за введеними користувачем даними</li>
      </ul>
    </li>
  </ul>

<h2>Використані бібліотеки</h2>
<ul>
  <li><code>@reduxjs/toolkit</code> - бібліотека для кращого управління станом за допомогою Redux 🛠️</li>
  <li><code>axios</code> - бібліотека для здійснення HTTP-запитів 🌐</li>
  <li><code>leaflet</code> - бібліотека для роботи з інтерактивними картах 🗺️</li>
  <li><code>modern-normalize</code> - набір CSS-стилів для стандартизації стилів веб-додатків 📊</li>
  <li><code>react</code> - JavaScript-бібліотека для створення інтерфейсів користувача ⚛️</li>
  <li><code>react-animated-cursor</code> - бібліотека для створення анімованого курсору в React 🖱️</li>
  <li><code>react-animated-polyline-cursor</code> - бібліотека для анімації полілінійного курсору на картах Leaflet 🌐</li>
  <li><code>react-dom</code> - пакет для React, що надає DOM-специфічні методи ⚛️</li>
  <li><code>react-fast-marquee</code> - бібліотека для створення швидкої бігучої стрічки в React 🏃</li>
  <li><code>react-icons</code> - бібліотека іконок для React 🖼️</li>
  <li><code>react-leaflet</code> - бібліотека для використання Leaflet з React 🌐</li>
  <li><code>react-modal</code> - бібліотека модальних вікон для React 📌</li>
  <li><code>react-redux</code> - офіційний пакет для інтеграції React і Redux ⚛️</li>
  <li><code>react-responsive-carousel</code> - бібліотека для створення адаптивного каруселю в React 🎠</li>
  <li><code>react-router-dom</code> - бібліотека маршрутизації для React-додатків 🛣️</li>
  <li><code>redux</code> - бібліотека для управління станом додатка в JavaScript 🔀</li>
  <li><code>styled-components</code> - бібліотека для створення CSS в React 💅</li>
</ul>

Пошук та Фільтрація
У компоненті SearchFilter реалізовано можливість фільтрації автомобілів за виробником та ціною. Користувач може вибрати бажаний виробник з випадаючого списку, а також встановити мінімальну ціну за оренду.

Якщо вибрати виробника та встановити мінімальну ціну, то відобразяться тільки ті автомобілі, які відповідають вибраним критеріям.

