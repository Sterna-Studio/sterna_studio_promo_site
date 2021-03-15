<template>
  <div
    @click="$emit('click')"
    :class="`promo-sterna-btn ${variant}-with-icon `"
  >
    <p class="large bold tc-w2">{{ text }}</p>
    <img v-if="icon != 'empty'" :src="`/icons/${icon}.svg`" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    variant: { type: String, default: "small" },
    text: { type: String, default: "Замовити проєкт" },
    icon: { type: String, default: "arrow-right" },
  },
};
</script>
<style scoped>
.promo-sterna-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a17cb;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
}
.promo-sterna-btn:hover {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    #1a17cb;
}
.promo-sterna-btn:active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    #1a17cb;
}
.promo-sterna-btn {
  border-radius: 2.222222222222222vh;
}
.small-with-icon {
  height: 3.148148148148148vh;
  padding: 0 2.962962962962963vh;
}
.small-with-icon p {
  margin-right: 0.7407407407407407vh;
}
.small-with-icon img {
  height: 1vh;
}
.big-with-icon {
  height: 3.148148148148148vh;
}
.big-with-icon p {
  margin-right: 0.7407407407407407vh;
}
.big-with-icon img {
  height: 1.4814814814814814vh;
}
@media screen and (max-width: 414px) {
  .promo-sterna-btn {
    border-radius: 5.797101449275363vw;
  }
  .small-with-icon {
    height: 9.420289855072465vw;
    padding: 0 9.420289855072465vw;
  }
  .small-with-icon p {
    margin-right: 1.9323671497584543vw;
  }
  .small-with-icon img {
    height: 1.9323671497584543vw;
  }
  .expandet-with-icon {
    width: 100vw;
    border-radius: 0;
    height: 14.009661835748794vw;
    justify-content: flex-start;
    padding: 0 5.797101449275363vw;
  }
  .expandet-with-icon p {
    margin-right: 2.415vw;
  }
  .big-with-icon {
    height: 9.42vw;
  }
  .big-with-icon img {
    height: 3.14vw;
  }
  .big-with-icon p {
    margin-right: 1.932vw;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .promo-sterna-btn {
    border-radius: 2.34375vw;
  }
  .small-with-icon {
    height: 3.80859375vw;
    padding: 0 3.80859375vw;
  }
  .small-with-icon p {
    margin-right: 0.78125vw;
  }
  .small-with-icon img {
    height: 0.78125vw;
  }
  .big-with-icon {
    height: 3.148148148148148vh;
  }
  .big-with-icon img {
    height: 1.26953125vh;
  }

  .big-with-icon p {
    margin-right: 0.78125vh;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .promo-sterna-btn {
    border-radius: 3.333333333333333vh;
  }
  .small-with-icon {
    height: 4.722222222222222vh;
    padding: 0 4.444444444444445vh;
  }
  .small-with-icon p {
    margin-right: 1.1111111111111112vh;
  }
  .small-with-icon img {
    height: 1.1111111111111112vh;
  }
  .big-with-icon {
    height: 5.833333333333333vh;
  }
  .big-with-icon p {
    margin-right: 1.1111111111111112vh;
  }
  .big-with-icon img {
    height: 2.0833333333333335vh;
  }
}
</style>
