  <h1>Car Rental App</h1>

  <h2>Опис</h2>
  <p>Цей проект є веб-додатком для оренди автомобілів. Користувачі можуть переглядати та арендувати доступні автомобілі,  а також переглядати карту з розташуванням офісу.</p>

## Функціонал

- Перегляд доступних автомобілів
- Фільтрація за виробником
- Перегляд карти з розташуванням офісу

<h2>Адаптивний дизайн</h2>
Додаток розроблений з урахуванням адаптивного дизайну і добре адаптується до різних розмірів екрану.

  <h2>Вимоги</h2>
  <ul>
    <li>Node.js</li>
    <li>npm або yarn</li>
  </ul>

  <h2>Встановлення</h2>
  <ol>
    <li>Клонувати репозиторій:
      <pre><code>git clone https://github.com/nataliiahodnia/car-rental-app.git</code></pre>
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

  <h2>Структура проекту</h2>
  <ul>
    <li><code>src/components</code> - Каталог з компонентами React
      <ul>
        <li><code>Footer</code> - Компонент для футера з кнопкою "Показати карту"</li>
        <li><code>Map</code> - Компонент для відображення карти</li>
        <li><code>SupportUkraine</code> - Компонент для відображення блоку підтримки України</li>
        <li><code>TestimonialCarousel</code> - Компонент для відображення каруселі з відгуками</li>
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
  <li><code>react</code> - бібліотека для створення інтерфейсів користувача ⚛️</li>
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
  <li><code>redux</code> - бібліотека для управління станом додатка 🔀</li>
  <li><code>styled-components</code> - бібліотека для створення CSS в React 💅</li>
</ul>

Пошук та Фільтрація
У компоненті SearchFilter реалізовано можливість фільтрації автомобілів за виробником. Користувач може вибрати бажаний виробник з випадаючого списку.

Якщо вибрати виробника, то відобразяться тільки ті автомобілі, які відповідають вибраним критеріям.

<h1>Car Rental App</h1>

<h2>Description</h2>
<p>This project is a web application for car rental. Users can browse and rent available cars, as well as view a map with the location of the office.</p>

## Functionality

- View available cars
- Filtering by manufacturer
- View map with office location

<h2>Responsive Design</h2>
The app is designed to be responsive and adapts well to different screen sizes.

<h2>Requirements</h2>
<ul>
  <li>Node.js</li>
  <li>npm or yarn</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/nataliiahodnia/car-rental-app.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd car-rental-app</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
    or
    <pre><code>yarn install</code></pre>
  </li>
</ol>

<h2>Usage</h2>
<p>To run the project in development mode, execute the following command:</p>
<pre><code>npm start</code></pre>
or
<pre><code>yarn start</code></pre>

<h2>Project Structure</h2>
<ul>
  <li><code>src/components</code> - Directory containing React components
    <ul>
      <li><code>Footer</code> - Component for the footer with the "Show Map" button</li>
      <li><code>Map</code> - Component for displaying the map</li>
      <li><code>SupportUkraine</code> - Component for displaying the Ukraine support block</li>
      <li><code>TestimonialCarousel</code> - Component for displaying the carousel with testimonials</li>
      <li><code>CarCard</code> - Component for the car card</li>
      <li><code>CarDetailsModal</code> - Modal component for detailed car information</li>
      <li><code>CarList</code> - Component for the list of cars with pagination</li>
      <li><code>PromotionsSection</code> - Section for displaying promotions</li>
      <li><code>SearchFilter</code> - Component for filtering cars based on user input</li>
    </ul>
  </li>
</ul>

<h2>Used Libraries</h2>
<ul>
  <li><code>@reduxjs/toolkit</code> - Library for better state management with Redux 🛠️</li>
  <li><code>axios</code> - Library for making HTTP requests 🌐</li>
  <li><code>leaflet</code> - Library for working with interactive maps 🗺️</li>
  <li><code>modern-normalize</code> - CSS styleset for standardizing web application styles 📊</li>
  <li><code>react</code> - Library for building user interfaces ⚛️</li>
  <li><code>react-animated-cursor</code> - Library for creating animated cursors in React 🖱️</li>
  <li><code>react-animated-polyline-cursor</code> - Library for animating polyline cursor on Leaflet maps 🌐</li>
  <li><code>react-dom</code> - React package providing DOM-specific methods ⚛️</li>
  <li><code>react-fast-marquee</code> - Library for creating a fast-running marquee in React 🏃</li>
  <li><code>react-icons</code> - Library of icons for React 🖼️</li>
  <li><code>react-leaflet</code> - Library for using Leaflet with React 🌐</li>
  <li><code>react-modal</code> - Library of modal windows for React 📌</li>
  <li><code>react-redux</code> - Official package for integrating React and Redux ⚛️</li>
  <li><code>react-responsive-carousel</code> - Library for creating an adaptive carousel in React 🎠</li>
  <li><code>react-router-dom</code> - Library for routing React applications 🛣️</li>
  <li><code>redux</code> - Library for managing application state 🔀</li>
  <li><code>styled-components</code> - Library for creating CSS in React 💅</li>
</ul>

Search and Filtering
The SearchFilter component allows users to filter cars by manufacturer. The user can select the desired manufacturer from the dropdown list.

If a manufacturer is selected, only the cars that match the selected criteria will be displayed.
