<template>
  <div @click="selecting = !selecting" class="select-container">
    <img :class="{ rotate: selecting }" src="/icons/select-icon.svg" alt="" />
    <p class="medium tc-ind">{{ selected }}</p>
    <transition class="slide">
      <div v-if="selecting" class="drop-down-block">
        <p
          @click="selectItem(item)"
          v-for="(item, i) in select_list"
          :key="i"
          class="medium tc-ind select-block"
        >
          {{ item }}
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    select_list: Array,
  },
  data() {
    return {
      selecting: false,
      selected: null,
    };
  },
  methods: {
    selectItem(item) {
      this.selected = item;
      this.$emit("select", this.selected);
    },
  },
};
</script>
<style scoped>
.select-container {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(194, 194, 194, 0.6);
  box-sizing: border-box;
  border-radius: 0.7407407407407407vh;
  height: 3.4259259259259256vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3vh 0 1.111111111111111vh;
}
.select-container img {
  position: absolute;
  right: 1.3888888888888888vh;
  top: calc(50% - 0.27777777777777773vh);
  height: 0.5555555555555555vh;
  transition: transform 0.5s;
}
.rotate {
  transform: rotateX(180deg);
}
.drop-down-block {
  z-index: 10;
  position: absolute;
  left: -1px;
  top: 87%;
  width: calc(100% + 2px);
  background: rgba(255, 255, 255);
  border: 1px solid rgba(194, 194, 194, 0.6);
  box-sizing: border-box;
  border-bottom-left-radius: 0.7407407407407407vh;
  border-bottom-right-radius: 0.7407407407407407vh;
  border-color: transparent rgba(194, 194, 194, 0.6) rgba(194, 194, 194, 0.6)
    rgba(194, 194, 194, 0.6);
}
.select-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3.4259259259259256vh;
  padding: 0 3vh 0 1.111111111111111vh;
}
.select-block:hover {
  background: #ebebeb;
  cursor: pointer;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(0%);
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .select-container {
    height: 5.138888888888888vh;
    padding: 0 3.4722222222222223vh 0 1.6666666666666665vh;
  }
  .select-block img {
    height: 0.8333333333333333vh;
    top: calc(50% - 0.41666666666666663vh);
    right: 2.0833333333333335vh;
  }
  .select-block {
    height: 5.138888888888888vh;
    padding: 0 3.4722222222222223vh 0 1.6666666666666665vh;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .select-container {
    height: 3.61328125vh;
    padding: 0 2.44140625vh 0 1.171875vh;
  }
  .select-block img {
    height: 0.5859375vh;
    top: calc(50% - 0.29296875vh);
    right: 1.46484375vh;
  }
  .select-block {
    height: 3.61328125vh;
    padding: 0 2.44140625vh 0 1.171875vh;
  }
}
@media screen and (max-width: 414px) {
  .select-container {
    height: 8.213vw;
    padding: 0 6.039vw 0 2.899vw;
  }
  .select-block img {
    height: 1.449vw;
    top: calc(50% - 0.725vw);
    right: 3.623vw;
  }
  .select-block {
    height: 8.213vw;
    padding: 0 6.039vw 0 2.899vw;
  }
}
</style>
