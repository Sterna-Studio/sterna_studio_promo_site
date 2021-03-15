<template>
  <div class="home-page">
    <div class="page-title-block">
      <h1 class="tc-m-b mb-32">Студія веб розробок та дизайн рішень</h1>
      <p class="large tc-e-black">
        Програмуємо та малюємо інтерфейси від промосторінок до складних
        комерційних рішень
      </p>
    </div>
    <div class="main-projects-container">
      <div class="project-row ">
        <ProjectBlock
          image="https://img2.pngio.com/manager-project-delivery-transparent-png-clipart-free-download-ywd-project-delivery-png-1216_697.png"
        />
        <div class="project-row space-between">
          <ProjectBlock
            width="half"
            image="https://www.pikpng.com/pngl/m/517-5179196_project-graf-img-clipart.png"
            text_position="outside-bottom"
          /><ProjectBlock width="half" />
        </div>
      </div>
      <div class="project-row ">
        <ProjectBlock
          image="https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2015/07/Planning2-e1554986531973.jpg"
          text_position="outside-right"
        />
      </div>
    </div>
    <h3 class="tc-r-ryb link-text-icon float-right mb-64 ">
      Усі проекти <img src="/icons/arrow-right-red.svg" alt="" />
    </h3>
    <div class="about-studio-link mb-64">
      <p class="large tc-e-black">
        Студія «Стерна» допомагає компаніям виходити на ринок і взаємодіяти з
        потрібною аудиторією, знаходячи продумані, елегантні рішення в галузі
        брендингу та взаємодії.
      </p>
      <h3 class="tc-r-ryb link-text-icon">
        Про студію <img src="/icons/arrow-right-red.svg" alt="" />
      </h3>
    </div>
    <h2 class="tc-e-black text-align-left mb-16">Анкета для замовлення</h2>
    <p class="large tc-ind text-align-left mb-24">
      Після заповнення форми ми зв’яжемось з вами, щоб вияснити деталі
    </p>
    <h3 class="tc-r-ryb link-text-icon float-right mb-42 ">
      Більше проектів <img src="/icons/arrow-right-red.svg" alt="" />
    </h3>
    <div class="special-proposition">
      <h3 class="tc-e-black text-align-left mb-8">Спеціальна пропозиція</h3>
      <p class="large tc-ind text-align-left">
        Повна розробка лендінга від проектування до реалізації за $100
      </p>
    </div>
  </div>
</template>

<script>
import ProjectBlock from "@/components/ProjectBlock.vue";
export default {
  name: "Home",
  components: { ProjectBlock },
};
</script>
<style scoped>
.float-right {
  justify-content: flex-end;
}
.special-proposition {
  width: 100%;
  padding: 2.222222222222222vh;
  box-sizing: border-box;
  background: #ffd770;
  border-radius: 1.111111111111111vh;
}
.text-align-left {
  text-align: left;
}
.about-studio-link {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 3.333333333333333vh 0;
  border-bottom: 1px solid #c2c2c2;
  border-top: 1px solid #c2c2c2;
}
.about-studio-link p {
  text-align: left;
  width: 82.22222222222221vh;
}
.mb-64 {
  margin-bottom: 5.925925925925926vh;
}
.mb-42 {
  margin-bottom: 3.888888888888889vh;
}
.mb-24 {
  margin-bottom: 2.222222222222222vh;
}
.mb-16 {
  margin-bottom: 1.4814814814814814vh;
}
.mb-8 {
  margin-bottom: 0.7407407407407407vh;
}
.home-page {
  padding: 11.944444444444443vh 21.85185185185185vh 5.925925925925926vh;
  box-sizing: border-box;
  width: 100vw;
}
.page-title-block {
  width: 65.55555555555556vh;
  text-align: left;
  margin-bottom: 5.925925925925926vh;
}
.page-title-block h1 {
  width: 60.46296296296296vh;
}
.page-title-block p.large {
  width: 52.22222222222222vh;
}
.mb-32 {
  margin-bottom: 2.962962962962963vh;
}
.main-projects-container {
  display: flex;
  flex-direction: column;
}
.project-row {
  display: flex;
  flex-wrap: wrap;
}
.space-between {
  justify-content: space-between;
}
@media screen and (max-width: 414px) {
  .about-studio-link {
    padding: 5.797vw 0;
    flex-direction: column;
  }
  .about-studio-link p {
    width: 100%;
    margin-bottom: 1.932vw;
  }
  .special-proposition {
    padding: 3.865vw 5.797vw;
    background: #e84627;
  }
  .special-proposition h3 {
    color: #ffffff;
  }
  .special-proposition p {
    color: rgba(255, 255, 255, 0.9);
  }
  .mb-64 {
    margin-bottom: 11.594vw;
  }
  .mb-42 {
    margin-bottom: 5.797vw;
  }
  .mb-24 {
    margin-bottom: 3.865vw;
  }
  .mb-16 {
    margin-bottom: 1.932vw;
  }
  .home-page {
    padding: 24.155vw 5.797vw 11.594vw;
    width: 100%;
  }
  .project-row {
    display: flex;
    flex-direction: row-reverse;
  }
  .project-row .project-row {
    display: flex;
    flex-direction: row;
  }
  .main-projects-container {
    display: flex;
    flex-direction: column-reverse;
  }
  .page-title-block {
    width: 100%;
    margin-bottom: 11.594vw;
  }
  .page-title-block h1 {
    width: 100%;
  }
  .page-title-block p.large {
    width: 100%;
  }
  .mb-32 {
    margin-bottom: 1.932vw;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .about-studio-link {
    flex-direction: column;
    padding: 2.34375vh 0;
  }
  .mb-64 {
    margin-bottom: 4.6875vh;
  }
  .mb-24 {
    margin-bottom: 1.5625vh;
  }
  .mb-16 {
    margin-bottom: 0.78125vh;
  }
  .about-studio-link p {
    width: 100%;
    margin-bottom: 0.78125vh;
  }
  .home-page {
    padding: 11.62109375vh 10.25390625vh 4.6875vh;
    width: 100%;
  }
  .project-row {
    display: flex;
    flex-direction: row-reverse;
  }
  .project-row .project-row {
    display: flex;
    flex-direction: row;
  }
  .main-projects-container {
    display: flex;
    flex-direction: column-reverse;
  }
  .page-title-block {
    width: 100%;
    margin-bottom: 4.6875vh;
  }
  .page-title-block h1 {
    width: 100%;
  }
  .page-title-block p.large {
    width: 70%;
  }
  .mb-32 {
    margin-bottom: 1.5625vh;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .home-page {
    padding: 17.916666666666668vh 8.88888888888889vh;
  }
}
</style>
