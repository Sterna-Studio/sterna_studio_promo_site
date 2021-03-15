<template>
  <div class="project-page">
    <img
      src="https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg"
      class="project-image"
    />
    <div class="content-block">
      <h1 class="tc-e-black mb-18">Назва проекту</h1>
      <h3 class="tc-m-b link mb-18">Посилання на сайт</h3>
      <h3 class="tc-e-black mb-48">
        Когда поль­зо­ва­телю нужно найти что‑то среди тысяч пред­ме­тов,
        помо­гут филь­тры. Вме­сто того, чтобы уга­ды­вать, какую иерар­хию
        заду­мал автор, чело­век настра­и­вает пара­метры независимо.
      </h3>
      <h3 class="tc-e-black mb-16">
        Підпункт опису
      </h3>
      <p class="large tc-ind mb-48">
        В 2019 году все наш мероприятия проходили оффлайн, но всё равно собирали
        участников из нескольких соседних регионов. 2020 год очень сильно
        повлиял на event-сферу и нам пришлось диджитализироваться. Мы смогли
        превратить кризисные моменты в точки роста, придумали, как провести
        мероприятие онлайн и масштабировали серию небольших региональных митапов
        в длинную онлайн-конфенренцию.
      </p>
      <div class="project-images mb-16">
        <img
          src="https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg"
          alt=""
          class="small-project-image"
        /><img
          src="https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg"
          alt=""
          class="small-project-image"
        />
      </div>
      <h3 class="tc-e-black mb-16">
        Підпункт опису
      </h3>
      <p class="large tc-ind mb-48">
        Когда поль­зо­ва­телю нужно найти что‑то среди тысяч пред­ме­тов,
        помо­гут филь­тры. Вме­сто того, чтобы уга­ды­вать, какую иерар­хию
        заду­мал автор, чело­век настра­и­вает пара­метры независимо.
      </p>
      <div class="project-images mb-16">
        <img
          src="https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg"
          alt=""
          class="big-project-image"
        />
      </div>
      <h3 class="tc-e-black mb-16">
        Підпункт опису
      </h3>
      <p class="large tc-ind mb-16">
        Когда поль­зо­ва­телю нужно найти что‑то среди тысяч пред­ме­тов,
        помо­гут филь­тры. Вме­сто того, чтобы уга­ды­вать, какую иерар­хию
        заду­мал автор, чело­век настра­и­вает пара­метры независимо.
      </p>
      <p class="large tc-ind mb-16">
        В онлайне такое повторить невозможно, пока нет таких технических
        возможностей. Поэтому мы сосредоточились на том, чтобы выступления были
        интересными и актуальными, чтобы знания можно было использовать сразу.
      </p>
      <p class="large tc-ind mb-48">
        Когда поль­зо­ва­телю нужно найти что‑то среди тысяч пред­ме­тов,
        помо­гут филь­тры. Вме­сто того, чтобы уга­ды­вать, какую иерар­хию
        заду­мал автор, чело­век настра­и­вает пара­метры независимо.
      </p>
      <h3 class="tc-e-black mb-24">
        Роботу виконали
      </h3>
      <p class="large tc-e-black mb-16">
        Виконавець — <strong>І’мя Прізвище</strong>
      </p>
      <p class="large tc-e-black mb-48">
        Виконавець — <strong>І’мя Прізвище</strong>
      </p>
      <h3 class="tc-e-black mb-24">
        Дата виконання
      </h3>
      <p class="large tc-e-black mb-16">
        Почали — 14.05.2021
      </p>
      <p class="large tc-e-black mb-48">
        Виконали — 01.08.2021
      </p>
      <h3 class="tc-e-black mb-24">
        Теги
      </h3>
      <div class="project-tags">
        <div
          v-for="(proj, index) in tags"
          :key="index"
          :style="` background:${proj.color} `"
          class="project-tag"
        >
          <p class="large large-bold tc-e-black">
            {{ proj.name }}
          </p>
          <p class="large large-bold tc-e-black">
            {{ proj.count }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        { name: "Онлайн-магазини", count: "12", color: "#F9A59F" },
        { name: "Фірмовий стиль", count: "12", color: "#7AB897" },
        { name: "Веб сервіси", count: "12", color: "#B59EFA" },
      ],
    };
  },
};
</script>
<style scoped>
.project-page {
  padding: 6.111111111111111vh 0 5.925925925925926vh;
  text-align: left;
}
.project-image {
  width: 100%;
  height: 45.09259259259259vh;
  object-fit: cover;
  object-position: center;
}
.content-block {
  padding: 4.444444444444444vh 38.888888888888886vh 0;
  width: 100%;
  box-sizing: border-box;
}
.mb-16 {
  margin-bottom: 1.4814814814814814vh;
}
.mb-18 {
  margin-bottom: 1.6666666666666665vh;
}
.mb-24 {
  margin-bottom: 2.222222222222222vh;
}
.mb-48 {
  margin-bottom: 4.444444444444444vh;
}
.link {
  text-decoration: underline;
}
.project-images {
  display: flex;
  justify-content: space-between;
}
.small-project-image {
  width: calc(50% - 1.111111111111111vh);
  height: 30.648148148148145vh;
  object-fit: cover;
  object-position: center;
}
.big-project-image {
  width: 100%;
  height: 45.46296296296296vh;
  object-fit: cover;
  object-position: center;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
}
.project-tag {
  padding: 0.37037037037037035vh 1.4814814814814814vh;
  margin-bottom: 1.111111111111111vh;
  border-radius: 0.7407407407407407vh;
  display: flex;
  margin-right: 1.111111111111111vh;
}
@media screen and (max-width: 414px) {
  .project-page {
    padding: 12.56vw 0 7.729vw;
  }
  .project-image {
    height: 40.097vw;
  }
  .mb-18 {
    margin-bottom: 3.865vw;
  }
  .mb-16 {
    margin-bottom: 1.932vw;
  }
  .mb-48 {
    margin-bottom: 7.729vw;
  }
  .content-block {
    padding: 7.729vw 5.797vw;
  }
  .project-images {
    flex-direction: column;
  }
  .small-project-image {
    height: 45.29vw;
    border-radius: 0.966vw;
    width: 100%;
  }
  .small-project-image:first-child {
    margin-bottom: 1.932vw;
  }
  .big-project-image {
    height: 45.29vw;
    border-radius: 0.966vw;
  }
  .project-tag {
    padding: 0.966vw 3.865vw;
    margin-bottom: 3.865vw;
    border-radius: 1.932vw;
    display: flex;
    margin-right: 3.865vw;
  }
  .project-tag p {
    margin-right: 0.966vw;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .project-page {
    padding: 6.93359375vh 0 3.125vh;
  }
  .project-image {
    height: 29.00390625vh;
  }
  .mb-18 {
    margin-bottom: 1.5625vh;
  }
  .mb-16 {
    margin-bottom: 0.78125vh;
  }
  .mb-48 {
    margin-bottom: 3.125vh;
  }
  .content-block {
    padding: 3.125vh 4.98046875vh;
  }
  .small-project-image {
    height: 30vh;
    border-radius: 0.390625vh;
    width: calc(50% - 0.5vh);
  }
  .big-project-image {
    height: 32.421875vh;
    border-radius: 0.390625vh;
  }
  .project-tag {
    padding: 0.390625vh 1.5625vh;
    margin-bottom: 1.5625vh;
    border-radius: 0.78125vh;
    display: flex;
    margin-right: 1.5625vh;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .project-page {
    padding: 9.166666666666666vh 0 8.88888888888889vh;
  }
  .project-image {
    height: 67.63888888888889vh;
  }
  .mb-18 {
    margin-bottom: 2.5vh;
  }
  .mb-16 {
    margin-bottom: 2.2222222222222223vh;
  }
  .mb-48 {
    margin-bottom: 6.666666666666666vh;
  }
  .content-block {
    padding: 6.666666666666666vh 30.833333333333332vh;
  }
  .small-project-image {
    height: 44.86111111111111vh;
    border-radius: 0.5555555555555556vh;
    width: calc(50% - 1.1111111111111112vh);
  }
  .big-project-image {
    height: 68.19444444444444vh;
    border-radius: 0.5555555555555556vh;
  }
  .project-tag {
    padding: 0.5555555555555556vh 2.2222222222222223vh;
    margin-bottom: 2.2222222222222223vh;
    border-radius: 1.1111111111111112vh;
    display: flex;
    margin-right: 2.2222222222222223vh;
  }
}
</style>
