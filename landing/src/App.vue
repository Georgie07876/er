<template>
  <div id="app">
    <!-- HERO -->
    <header class="hero">
      <div class="logo">BULLMIND 🐂</div>
      <h1>BullMind – AI-бот<br />для торговли в лонг</h1>
      <p>Интеллектуальная торговля криптой без лишних действий</p>
      <a href="/download" class="btn">Скачать .exe</a>
    </header>

    <!-- ABOUT -->
    <section class="about">
      <h2>О продукте</h2>
      <div class="about-content">
        <div class="about-image">
          <img src="https://via.placeholder.com/400x250" alt="Скриншот интерфейса" />
        </div>
        <div class="about-text">
          <p>
            BullMind — это умный торговый бот, который автоматически анализирует рынок и совершает сделки за вас.
            Мы поддерживаем все популярные биржи, включая <strong>Binance</strong> и <strong>Bybit</strong>.
          </p>
          <ul class="features">
            <li><img src="/assets/check.png" alt="check-icon" class="check-icon" /> Торговля только Long</li>
            <li><img src="/assets/check.png" alt="check-icon" class="check-icon" /> Поддержка популярных бирж</li>
            <li><img src="/assets/check.png" alt="check-icon" class="check-icon" /> Удобный интерфейс + AI-анализ</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FUNCTIONAL -->
    <section class="functional">
      <h2>Функционал</h2>
      <div class="func-grid">
        <div class="func-item">
          <img src="/assets/lightning.png" alt="Автоматические сделки" class="func-icon" />
          <p>Автоматические сделки</p>
        </div>
        <div class="func-item">
          <img src="/assets/dynamic.png" alt="История и статистика" class="func-icon" />
          <p>История и статистика</p>
        </div>
        <div class="func-item">
          <img src="/assets/dollar.png" alt="Баланс и профит" class="func-icon" />
          <p>Баланс и профит</p>
        </div>
        <div class="func-item">
          <img src="/assets/monitor.png" alt="Демо-режим для тестов" class="func-icon" />
          <p>Демо-режим для тестов</p>
        </div>
        <div class="func-item">
          <img src="/assets/setting.png" alt="Простые настройки" class="func-icon" />
          <p>Простые настройки</p>
        </div>
      </div>
    </section>

    <!-- SCREENSHOTS -->
    <section class="screenshots">
      <h2>Скриншоты интерфейса</h2>
      <div class="shots">
        <img src="" alt="Главный экран" />
        <img src="" alt="История сделок" />
        <img src="" alt="Настройки" />
        <img src="" alt="Демо-режим" />
      </div>
    </section>

    <!-- WHY -->
    <section class="why">
      <h2>Почему BullMind?</h2>
      <div class="why-content">
        <ul class="why-list">
          <li><img src="/assets/check.png" alt="" class="check-icon" /> Современный дизайн</li>
          <li><img src="/assets/check.png" alt="" class="check-icon" /> Простота и удобство</li>
          <li><img src="/assets/check.png" alt="" class="check-icon" /> Безопасность (API-ключи хранятся локально)</li>
          <li><img src="/assets/check.png" alt="" class="check-icon" /> Стратегия только в лонг</li>
        </ul>
        <div class="why-text">
          <p><strong>BullMind открывает сделки только в Long.</strong></p>
          <p>
            Наш ИИ обучен анализировать исключительно ростовые паттерны на графиках, что снижает риски и делает торговлю
            безопаснее по сравнению с рискованными шорт-стратегиями.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-block">
      <h2>Начните умную торговлю уже сегодня</h2>
      <a href="" class="btn btn-large">Скачать BullMind</a>
      <p class="cta-note">Доступно для Windows. Скоро – MacOS и Linux.</p>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <h2>Частые вопросы</h2>
      <div class="faq-container">
        <details>
          <summary>Как работает бот?</summary>
          <p>
            Бот подключается к вашему биржевому аккаунту через безопасные API-ключи и использует AI-алгоритмы для анализа
            рынка и автоматического открытия и закрытия Long-сделок.
          </p>
        </details>
        <details>
          <summary>Это реальная торговля или демо?</summary>
          <p>
            BullMind поддерживает как реальную торговлю с вашим депозитом, так и полнофункциональный демо-режим для
            безопасного тестирования стратегий без рисков.
          </p>
        </details>
        <details>
          <summary>Можно ли использовать без депозита?</summary>
          <p>
            Да, вы можете скачать бота и использовать его в демо-режиме, чтобы ознакомиться с интерфейсом и оценить его
            эффективность, не внося реальные средства.
          </p>
        </details>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="footer-container">
        <div class="footer-logo">BULLMIND 🐂</div>
        <nav class="footer-nav">
          <a href="#">О продукте</a>
          <a href="#">Поддержка</a>
          <a href="#">Политика</a>
          <a href="#">Контакты</a>
        </nav>
        <div class="footer-socials">
          <a href="#" aria-label="Telegram">T</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="Discord">D</a>
        </div>
      </div>
      <p class="copyright">© 2025 BullMind. Все права защищены.</p>
    </footer>
  </div>
</template>

<style lang="scss">
@use "sass:color";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

// ПЕРЕМЕННЫЕ 
$bg-dark: #0e1116;
$bg-section: #151a22;
$bg-box: #1a1f29;
$green: #00ff99;
$green-hover: #00cc66;
$text-light: #f0f0f0;
$text-muted: #a0a0a0;


// Normalize 
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background: $bg-dark;
  color: $text-light;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; height: auto; display: block; }
h1, h2 { font-weight: 700; }
section { max-width: 1000px; margin: auto; padding: 80px 20px; }

ul.features, ul.why-list {
  list-style: none;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 16px;
    .check-icon {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      flex-shrink: 0;
    }
  }
}
//СТИЛИ КНОПОК
.btn {
  display: inline-block;
  padding: 12px 28px;
  background: $green;
  color: #000;
  border-radius: 30px; 
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba($green, 0.5);
  
  &:hover {
    background: $green-hover;
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba($green, 0.8);
  }

  &.btn-large {
    padding: 16px 40px;
    font-size: 18px;
  }
}

//HERO SECTION
.hero {
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  text-align: flex-start;
  margin: auto;
  max-width: 1000px;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;

  // ФОН С СЕТКОЙ 
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(rgba($bg-section, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba($bg-section, 0.5) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.5;
    z-index: -1;
  }

  .logo { font-size: 24px; font-weight: 700; margin-bottom: 20px; }
  h1 { margin: 0 0 15px; font-size: 42px; line-height: 1.2; }
  p { margin: 0 0 30px; font-size: 18px; color: $text-muted; }
}

// ABOUT
.about .about-content {
  display: flex; flex-wrap: wrap; gap: 40px; align-items: center; padding-top: 20px;
  .about-image { flex: 1; min-width: 300px; }
  .about-text { flex: 1.2; min-width: 300px; .features { list-style: none; padding: 0; margin-top: 20px; li { margin-bottom: 10px; }}}
}


.func-item {
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  text-align: center;

  .func-icon {
    max-width: 60px; 
    height: auto;
    margin-bottom: 12px;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
}

// Галочки (списки)
.check-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  vertical-align: middle;
}

// FUNCTIONAL

.functional .func-grid {
  padding-top: 20px; 
  display: flex; 
  flex-wrap: wrap; 
  gap: 20px;

  .func-item {
    flex: 1; 
    min-width: 150px; 
    background: $bg-box; 
    padding: 20px; 
    border-radius: 12px;
    text-align: center; 
    aspect-ratio: 1 / 1; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    transition: transform 0.2s ease, background-color 0.2s ease;
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-5px); 
      background-color: color.adjust($bg-box, $lightness: 5%);
      border-color: $green;
    }
  }
}

// SCREENSHOTS
.screenshots .shots {
    padding-top: 20px;
    display: flex;
    flex-wrap: nowrap; 
    gap: 20px;
    justify-content: center;
    overflow-x: auto; 
    -webkit-overflow-scrolling: touch; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
}

.screenshots .shots::-webkit-scrollbar {
    display: none; 
}

.screenshots .shots img {
    border-radius: 8px;
    width: 100%;
    min-width: 200px; 
    max-width: 300px;
    transition: transform 0.3s ease;
}

// WHY BULLMIND 
.why .why-content {
  display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;
  .why-list { list-style: none; padding: 0; flex: 1; min-width: 280px; li { margin-bottom: 15px; font-size: 18px; }}
  .why-text { flex: 1; min-width: 280px; background: $bg-box; padding: 20px; border-radius: 8px; border-left: 3px solid $green; p { margin-bottom: 10px; &:last-child { margin-bottom: 0; }}}
}

//CTA
.cta-block {
  text-align: center;
  background: $bg-section;
  border-radius: 12px;
  padding: 60px 20px;
  h2 { font-size: 28px; margin-bottom: 20px; }
  .cta-note { margin-top: 15px; color: $text-muted; font-size: 14px; }
}

//FAQ
.faq .faq-container {
  max-width: 1000px; margin: 20px auto 0;
  details {
    background: $bg-box; border-radius: 8px; margin-bottom: 10px;
    border: 1px solid $bg-section;
    p { padding: 0 20px 20px; color: $text-muted; }
  }
  summary {
    padding: 20px; font-weight: bold; cursor: pointer; list-style: none;
    position: relative;
    &::-webkit-details-marker { display: none; }
    &::after { // Стилизация стрелки
      content: '+'; position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 24px;
    }
  }
  details[open] summary::after { content: '−'; }
}

//ФУТЕР
footer {
  padding: 40px 20px 20px; background: $bg-section;
  .footer-container {
    max-width: 1000px; margin: 0 auto 30px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;
    .footer-logo { font-size: 20px; font-weight: bold; }
    .footer-nav { display: flex; gap: 20px; a:hover { color: $green; }}
    .footer-socials {
      display: flex; gap: 15px;
      a {
        display: flex; align-items: center; justify-content: center; width: 36px; height: 36px;
        border: 1px solid $text-muted; border-radius: 50%;
        &:hover { background: $green; color: #000; border-color: $green; }
      }
    }
  }
  .copyright { text-align: center; font-size: 14px; color: $text-muted; }
}

// АДАПТИВНОСТЬ
@media (max-width: 768px) {
  section { padding: 60px 15px; }
  .hero h1 { font-size: 32px; }
  .why .why-list li, .why .why-text { flex: 1 1 100%; }
}

@media (max-width: 480px) {
  .hero h1 { font-size: 28px; }
  .hero p { font-size: 16px; }
  footer .footer-container { flex-direction: column; text-align: center; }
}
</style>