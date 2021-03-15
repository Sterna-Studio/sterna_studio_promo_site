<template>
  <div class="projects-page">
    <div class="title-block">
      <h1 class="tc-e-black">Усі проекти</h1>
      <img src="/icons/drop-down-arrow.svg" alt="" />
    </div>

    <div class="project-categorys">
      <div
        v-for="(proj, index) in projects"
        :key="index"
        :style="` background:${proj.color} `"
        class="project-category"
      >
        <p class="large large-bold tc-e-black">
          {{ proj.name }}
        </p>
        <p class="large large-bold tc-e-black">
          {{ proj.count }}
        </p>
      </div>
    </div>
    <div class="projects-list-container">
      <div v-for="i in 4" :key="i" class="project-item" @click="goToProject()">
        <img
          src="https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg"
          alt=""
        />
        <h2 class="tc-e-black mb-8">Заголовок проекту</h2>
        <p class="medium tc-e-black mb-8">Програмуємо та малюємо інтерфейси</p>
        <p class="small tc-d-b-g">Теги: e-commerce, фірмовий стиль</p>
      </div>
    </div>
    <PromoSternaBtn
      class="show-more"
      variant="big"
      icon="arrow-down"
      text="Загрузити ще"
    />
  </div>
</template>
<script>
import PromoSternaBtn from "@/components/PromoSternaBtn.vue";
export default {
  components: { PromoSternaBtn },
  data() {
    return {
      projects: [
        { name: "Усі продукти", count: "12", color: "#c4c4c4" },
        { name: "Промосторінки", count: "12", color: "#FFD770" },
        { name: "Онлайн-магазини", count: "12", color: "#F9A59F" },
        { name: "Фірмовий стиль", count: "12", color: "#7AB897" },
        { name: "Веб сервіси", count: "12", color: "#B59EFA" },
        { name: "Бекенд", count: "12", color: "#A4BFEB" },
        { name: "Мобільні додатки", count: "12", color: "#D9EBC1" },
        { name: "Соціальні мережі", count: "12", color: "#D683D8" },
        { name: "Упаковка", count: "12", color: "#A9E5BB" },
        { name: "Навігація", count: "12", color: "#FD9BE5" },
      ],
    };
  },
  methods: {
    goToProject() {
      this.$router.push("/project");
    },
  },
};
</script>
<style scoped>
.projects-page {
  padding: 12.037037037037036vh 21.85185185185185vh 5.925925925925926vh;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}
.title-block img {
  display: none;
}
.mb-50 {
  margin-bottom: 4.62962962962963vh;
}
.project-categorys {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 4.62962962962963vh 0 1.8518518518518516vh;
}
.project-category {
  padding: 0.37037037037037035vh 1.4814814814814814vh;
  margin-bottom: 1.111111111111111vh;
  border-radius: 0.7407407407407407vh;
  display: flex;
  margin-right: 1.111111111111111vh;
}
.project-category p:first-child {
  margin-right: 0.9259259259259258vh;
}
.projects-list-container {
  display: flex;
  flex-wrap: wrap;
}
.project-item {
  width: calc(50% - 1.2962962962962963vh);
  margin-bottom: 6.851851851851851vh;
  margin-right: 2.5925925925925926vh;
  cursor: pointer;
}
.project-item:nth-child(2n) {
  margin-right: 0;
}
.project-item:last-child {
  margin-bottom: 0;
}
.project-item:nth-last-child(2) {
  margin-bottom: 0;
}
.project-item img {
  height: 34.166666666666664vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
  background: #c4c4c4;
  border-radius: 0.37037037037037035vh;
  margin-bottom: 1.4814814814814814vh;
}
.mb-8 {
  margin-bottom: 0.7407407407407407vh;
}
.show-more {
  width: 31.85185185185185vh;
  margin: 5.925925925925926vh auto 0;
}
@media screen and (max-width: 414px) {
  .title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title-block img {
    display: block;
  }
  .projects-page {
    padding: 20.29vw 5.797vw 7.729vw;
  }
  .mb-50 {
    margin-bottom: 7.246vw;
  }
  .mb-8 {
    margin-bottom: 1.932vw;
  }
  .project-category {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.932vw;
    justify-content: center;
    padding: 1.932vw 0;
  }
  .project-categorys {
    padding: 3.865vw 0 7.729vw;
  }
  .project-item {
    width: 100%;
    margin-right: 0;
    margin-bottom: 7.246vw;
  }
  .project-item img {
    height: 52.415vw;
    margin-bottom: 1.401vw;
  }
  .show-more {
    margin-top: 7.246vw;
    width: 100%;
  }
  .project-item:last-child {
    margin-bottom: 7.246vw;
  }
  .project-item:nth-last-child(2) {
    margin-bottom: 7.246vw;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .projects-page {
    padding: 11.62109375vh 10.25390625vh 3.125vh;
  }
  .mb-50 {
    margin-bottom: 1.7578125vh;
  }
  .mb-8 {
    margin-bottom: 0.390625vh;
  }
  .project-categorys {
    padding: 3.125vh 0 1.953125vh;
  }
  .project-item {
    width: calc(50% - 0.78125vh);
    margin-right: 1.5625vh;
    margin-bottom: 1.7578125vh;
  }
  .project-item img {
    height: 18.9453125vh;
    margin-bottom: 0.78125vh;
  }
  .show-more {
    margin-top: 3.3203125vh;
    width: 18.65234375vh;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .projects-page {
    padding: 18.055555555555554vh 8.88888888888889vh 8.88888888888889vh;
  }
  .mb-50 {
    margin-bottom: 6.944444444444445vh;
  }
  .project-category {
    padding: 0.5555555555555556vh 2.2222222222222223vh;
    margin-bottom: 1.6666666666666665vh;
    margin-right: 1.6666666666666665vh;
  }
  .project-categorys {
    margin-bottom: 2.7777777777777777vh;
  }
  .project-item img {
    height: 51.25vh;
    border-radius: 0.5555555555555556vh;
    margin-bottom: 2.2222222222222223vh;
  }
  .mb-8 {
    margin-bottom: 1.1111111111111112vh;
  }
  .project-item {
    margin-bottom: 10.277777777777777vh;
    width: calc(50% - 1.171875vh);
    margin-right: 2.34375vh;
  }
  .show-more {
    margin-top: 8.88888888888889vh;
  }
}
</style>
