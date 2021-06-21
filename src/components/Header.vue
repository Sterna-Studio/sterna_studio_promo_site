<template>
  <div>
    <div class="header">
      <img @click="goToHome()" src="/icons/logo-text.svg" alt="" class="logo" />
      <div class="action-block">
        <p
          @click="goToProjects()"
          :class="
            `large mr-24  c-p ${
              routeName == 'projects' ? 'tc-e-black' : 'tc-s2'
            }`
          "
        >
          Проекти
        </p>
        <p
          @click="goToAbout()"
          :class="
            `large mr-24  c-p ${routeName == 'about' ? 'tc-e-black' : 'tc-s2'}`
          "
        >
          Про студію
        </p>
        <PromoSternaBtn
          v-if="routeName != 'order_form'"
          @click="goToOrderForm()"
        />
      </div>
      <div class="mobile-drop-menu-icon-container">
        <img
          v-if="!is_mobile_drop_down_active"
          @click="is_mobile_drop_down_active = !is_mobile_drop_down_active"
          src="/icons/menu.svg"
          alt=""
        />
        <img
          v-else
          src="/icons/menu-close.svg"
          @click="is_mobile_drop_down_active = !is_mobile_drop_down_active"
          alt=""
        />
      </div>
    </div>
    <transition name="slide">
      <div v-if="is_mobile_drop_down_active" class="navigation-drop-down">
        <div class="drop-down-section ">
          <p
            @click="goToProjects()"
            :class="
              `large bold  ${routeName == 'projects' ? 'tc-e-black' : 'tc-s2'}`
            "
          >
            Проекти
          </p>
        </div>
        <div class="drop-down-section ">
          <p
            @click="goToAbout()"
            :class="
              `large bold  ${routeName == 'about' ? 'tc-e-black' : 'tc-s2'}`
            "
          >
            Про студію
          </p>
        </div>
        <PromoSternaBtn variant="expandet" />
      </div>
    </transition>
  </div>
</template>

<script>
import PromoSternaBtn from "@/components/PromoSternaBtn.vue";
export default {
  components: {
    PromoSternaBtn,
  },
  data() {
    return {
      is_mobile_drop_down_active: false,
    };
  },
  methods: {
    goToProjects() {
      this.$router.push("/projects");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToOrderForm() {
      this.$router.push("/order_form");
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>
<style scoped>
.header {
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.navigation-drop-down {
  display: none;
  width: 100vw;
  position: fixed;
  top:12.560386473429952vw;
  right: 0;
  background: #ffffff;
  z-index: 9;
}
.drop-down-section {
  padding: 3.8647342995169085vw 5.797101449275363vw;
  border-bottom: 1px solid rgba(194, 194, 194, 0.6);
  width: 100vw;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
}
.action-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.mobile-drop-menu-icon-container {
  display: none;
}
.logo {
  height: 3vh;
  cursor: pointer;
}
.header {
  height: 6.111111111111111vh;
  padding: 0 2.222222222222222vh;
}
.mr-24 {
  margin-right: 2.222222222222222vh;
}
@media screen and (max-width: 414px) {
  .logo {
    height: 4.830917874396135vw;
  }
  .action-block {
    display: none;
  }
  .navigation-drop-down {
    display: block;
  }
  .mobile-drop-menu-icon-container {
    display: block;
  }
  .mobile-drop-menu-icon-container img {
    width: 3.8647342995169085vw;
    cursor: pointer;
  }

  .header {
    height: 12.560386473429952vw;
    padding: 0 4.830917874396135vw;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: right 0.5s;
  }
  .slide-enter,
  .slide-leave-to {
    right: -100vw;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .logo {
    height: 2.63671875vh;
  }
  .header {
    height: 6.93359375vh;
    padding: 0 2.34375vh;
  }
  .mr-24 {
    margin-right: 2.34375vh;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .logo {
    height: 3.75vh;
  }
  .header {
    height: 9.166666666666666vh;
    padding: 0 3.333333333333333vh;
  }
  .mr-24 {
    margin-right: 3.333333333333333vh;
  }
}
</style>
