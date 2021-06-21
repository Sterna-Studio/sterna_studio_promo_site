<template>
  <div class="footer">
    <div>
      <div class="logo-container">
        <img src="/icons/logo-text.svg" class="footer-logo" alt="" />
      </div>
      <div class="link-blocks-container">
        <div class="link-block">
          <p class="large tc-d-b-g">Хочете обговорити проект?</p>
          <p class="large large-bold tc-e-black">Заповніть заявку на сайті</p>
          <p class="large  tc-e-black">manager@sterna.studio</p>
          <p class="large  tc-e-black">чат в телеграмі</p>
          <p class="large  tc-e-black">+38 (099) 359-14-67</p>
        </div>
        <div class="link-block">
          <p class="large tc-d-b-g">Меню</p>
          <p class="large  tc-e-black">Проекти</p>
          <p class="large  tc-e-black">Про студію</p>
          <p class="large  tc-e-black">Анкета</p>
        </div>
        <div class="link-block">
          <p class="large tc-d-b-g">Юридична інфомація</p>
          <p class="large  tc-e-black">Умови використання</p>
          <p class="large  tc-e-black">Cookies</p>
        </div>
      </div>
    </div>
    <div class="len-change-block">
      <div class="len-block">
        <h4 class="tc-e-black">укр</h4>
        <img src="/icons/ukrainian-flag.svg" alt="" />
      </div>
      <div class="len-block">
        <h4 class="tc-s1">eng</h4>
        <img src="/icons/american-flag.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 0 21.85185185185185vh 5.185185185185185vh;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.footer-logo {
  height: 2.5vh;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2.962962962962963vh;
}
.link-blocks-container {
  display: flex;
}
.link-block {
  width: max-content;
  margin-right: 5.925925925925926vh;
}
.link-block p {
  margin-bottom: 1.4814814814814814vh;
  text-align: left;
}
.len-change-block {
  display: flex;
  align-items: center;
}
.len-block {
  display: flex;
  align-items: center;
}
.len-block:first-child {
  margin-right: 1.4814814814814814vh;
}
.len-block img {
  margin-left: 0.7407407407407407vh;
  height: 1.9444444444444444vh;
}
.len-block h4 {
  text-transform: uppercase;
}
@media screen and (max-width: 414px) {
  .footer {
    padding: 0 5.797vw 6.522vw;
    flex-direction: column;
    align-items: flex-start;
  }
  .link-blocks-container {
    flex-direction: column;
  }
  .link-block:nth-child(2) {
    display: none;
  }
  .footer-logo {
    height: 6.522vw;
  }
  .len-block {
    margin-top: 1.953125vh;
  }
  .len-block img {
    height: 2.05078125vh;
    margin-left: 0.390625vh;
  }
  .link-block p {
    margin-bottom: 3.865vw;
  }
  .link-block p:last-child {
    margin-bottom: 7.729vw;
  }
  .logo-container {
    margin-bottom: 1.5625vh;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .footer {
    padding: 0 10.25390625vh 9.66796875vh;
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-logo {
    height: 2.63671875vh;
  }
  .len-block {
    margin-top: 1.953125vh;
  }
  .len-block img {
    height: 2.05078125vh;
    margin-left: 0.390625vh;
  }
  .link-block p {
    margin-bottom: 1.5625vh;
  }
  .logo-container {
    margin-bottom: 1.5625vh;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .footer {
    padding: 0 8.88888888888889vh 7.777777777777778vh;
  }
  .footer-logo {
    height: 3.75vh;
  }
  .len-block img {
    height: 2.9166666666666665vh;
    margin-left: 1.1111111111111112vh;
  }
  .link-block p {
    margin-bottom: 2.2222222222222223vh;
  }
  .logo-container {
    margin-bottom: 4.444444444444445vh;
  }
}
</style>