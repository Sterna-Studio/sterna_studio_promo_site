<template>
  <div :class="`project-block-container ${width} ${text_position}`">
    <img :src="image" alt="" />
    <div class="project-description-block">
      <h1
        v-if="width == 'full' && text_position == 'inside'"
        class="tc-e-black mb"
      >
        {{ title }}
      </h1>
      <h2 v-else class="tc-e-black mb">{{ title }}</h2>
      <p
        v-if="width == 'full' && text_position == 'inside'"
        class="large mb tc-ind"
      >
        {{ description }}
      </p>
      <p v-else class="medium mb tc-ind">
        {{ description }}
      </p>
      <p class="tc-d-b-g small">{{ tags }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "Заголовок проекту" },
    description: {
      type: String,
      default:
        "Програмуємо та малюємо інтерфейси від промосторінок до складних комерційних рішень",
    },
    tags: { type: String, default: "Теги: e-commerce, фірмовий стиль" },
    width: { type: String, default: "full" },
    text_position: { type: String, default: "inside" },
    image: {
      type: String,
      default:
        "https://hycare-project.eu/wp-content/uploads/2020/03/14-slideshow.jpg",
    },
  },
};
</script>
<style scoped>
.project-block-container {
  position: relative;
  margin-bottom: 2.222222222222222vh;
}
.project-block-container img {
  object-fit: cover;
  object-position: center;
}
.full {
  width: 100%;
  height: 56.48148148148148vh;
}
.full img {
  width: 100%;
  height: 100%;
}

.mb {
  margin-bottom: 1.4814814814814814vh;
}

.project-description-block {
  text-align: left;
}

.full.inside .project-description-block {
  position: absolute;
  left: 4.351851851851851vh;
  bottom: 5.925925925925926vh;
  width: 73.7037037037037vh;
}
.half {
  width: calc(50% - 1.5vh);
  height: 45.648148148148145vh;
}
.half.outside-bottom img {
  width: 100%;
  height: 34.166666666666664vh;
}

.half.inside img {
  width: 100%;
  height: 100%;
}
.half.inside .project-description-block {
  width: calc(100% - (8.6vh));
  position: absolute;
  left: 2.222222222222222vh;
  bottom: 3.333333333333333vh;
}
.half.outside-bottom .project-description-block {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.half .project-description-block .mb {
  margin-bottom: 0.7407407407407407vh;
}

.full.outside-right img {
  width: 84.22%;
  height: 100%;
  float: left;
}
.full.outside-right .project-description-block {
  width: 14.12%;
  position: absolute;
  right: 0;
  bottom: 0;
}
@media screen and (max-width: 414px) {
  .project-block-container {
    height: 79.71vw;
    margin-bottom: 7.729vw;
  }
  .half {
    width: 100%;
    height: 79.71vw;
  }
  .full {
    height: 85.024vw;
  }
  .full.inside .project-description-block {
    bottom: 5.797vw;
    left: 3.865vw;
    width: calc(100% - 7vw);
  }
  .half.outside-bottom img {
    height: 54.589vw;
  }
  .half.outside-bottom .project-description-block p {
    width: 100%;
  }
  .half.inside .project-description-block {
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .half.inside img {
    height: 54.589vw;
  }
  .mb {
    margin-bottom: 2.899vw;
  }
  .half .project-description-block .mb {
    margin-bottom: 1.932vw;
  }
  .full.outside-right {
    height: 79.71vw;
  }
  .full.outside-right img {
    width: 100%;
    height: 54.589vw;
    float: right;
  }
  .full.outside-right .project-description-block {
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .project-block-container {
    margin-bottom: 3.333333333333333vh;
    height: 84.72222222222221vh;
    margin-bottom: 1.5625vh;
  }
  .half {
    width: calc(50% - 1.3vh);
    height: 30.95703125vh;
  }
  .full {
    height: 36.42578125vh;
  }
  .full.inside .project-description-block {
    bottom: 3.125vh;
    left: 2.1484375vh;
    width: calc(100% - 4.3vh);
  }
  .half.outside-bottom img {
    height: 18.9453125vh;
  }
  .half.outside-bottom .project-description-block p {
    width: 100%;
  }
  .half.inside .project-description-block {
    left: 1.5625vh;
    bottom: 2.34375vh;
  }
  .mb {
    margin-bottom: 0.78125vh;
  }
  .half .project-description-block .mb {
    margin-bottom: 0.390625vh;
  }
  .full.outside-right {
    height: 24.8046875vh;
  }
  .full.outside-right img {
    width: 67.63%;
    float: right;
  }
  .full.outside-right .project-description-block {
    left: 0;
    top: 0;
    width: 27%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .project-block-container {
    margin-bottom: 3.333333333333333vh;
    height: 84.72222222222221vh;
  }
  .half {
    width: calc(50% - 2vh);
    height: 68.47222222222221vh;
  }
  .full.inside .project-description-block {
    bottom: 8.88888888888889vh;
    left: 6.527777777777778vh;
  }
  .half.outside-bottom img {
    height: 51.25vh;
  }
  .half.outside-bottom .project-description-block p {
    width: 70%;
  }
  .half.inside .project-description-block {
    left: 3.333333333333333vh;
    bottom: 5vh;
  }
  .mb {
    margin-bottom: 2.2222222222222223vh;
  }
  .half .project-description-block .mb {
    margin-bottom: 1.1111111111111112vh;
  }
  .full.outside-right {
    height: 73.88888888888889vh;
  }
}
</style>
