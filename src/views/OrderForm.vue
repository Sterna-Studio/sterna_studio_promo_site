<template>
  <div class="order-form-page">
    <div class="order-form">
      <h1 class="tc-e-black mb-16">Анкета замовлення</h1>
      <p class="medium tc-ind mb-32">
        Після відправлення анкети ми опрацюємо заявку. Обумовимо деталі та умови
        співпраці, складати договір. Якщо ми не можемо виконати роботу, ми
        напишемо про це також.
      </p>
      <div class="contacts-block mb-24">
        <h2 class="tc-e-black mb-24">Контакти</h2>
        <div class="input-row mb-24">
          <p class="large large-bold tc-e-black">Назва компанії</p>
          <input type="text" class="medium" />
        </div>
        <div class="input-row mb-24">
          <p class="large large-bold tc-e-black">Прізвище та Ім’я</p>
          <input type="text" class="medium" />
        </div>
        <div class="input-row mb-24">
          <p class="large large-bold tc-e-black">Пошта</p>
          <input type="text" class="medium" />
        </div>
        <div class="input-row mb-24">
          <p class="large large-bold tc-e-black">Телефон</p>
          <input type="text" class="medium" />
        </div>
        <div class="input-row mb-24">
          <p class="large large-bold tc-e-black">Звязок з вами через</p>
          <PromoSternaSelect class="select-input" />
        </div>
      </div>
      <h2 class="tc-e-black mb-24">Завдання</h2>
      <div class="input-row mb-24">
        <p class="large large-bold tc-e-black">Тип проекту</p>
        <PromoSternaSelect class="select-input" />
      </div>
      <p class="large large-bold tc-e-black mb-16">Файли</p>
      <p class="medium tc-ind mb-16">
        Щоб розказати про проект детальніше, відішліть додаткові файли,
        зображення, текст. Текст потрібен для того, щоб зрозуміти початкову
        задачу та подумати, як її вирішити.
      </p>
      <p class="medium tc-ind  mb-16">
        Добре, якщо в тексті ви опишете: — задачі, які повинен виконувати
        проект; — коротко про діяльність компанії; — особливості вашого бізнесу
        перед конкурентами.
      </p>
      <div class="file-drop-area mb-24">
        <img src="/icons/file-icon.svg" alt="" />
        <p class="medium tc-e-black">
          Скиньте файл з текстом сюди або <span>виберіть з пристрою.</span>
        </p>
        <p class="medium tc-e-black">
          <span>Виберіть файл з пристрою. </span>
        </p>
      </div>
      <PromoSternaBtn class="send-btn" icon="empty" text="Відправити анкету" />
    </div>
  </div>
</template>
<script>
import PromoSternaSelect from "@/components/PromoSternaSelect.vue";
import PromoSternaBtn from "@/components/PromoSternaBtn.vue";
export default {
  components: {
    PromoSternaBtn,
    PromoSternaSelect,
  },
};
</script>
<style scoped>
.order-form-page {
  padding: 7.314814814814814vh 21.85185185185185vh 5.462962962962963vh;
  width: 100%;
  box-sizing: border-box;
}
.order-form {
  padding: 2.962962962962963vh;
  width: 60.55555555555555vh;
  box-sizing: border-box;
  text-align: left;
}
.mb-16 {
  margin-bottom: 1.4814814814814814vh;
}
.mb-24 {
  margin-bottom: 2.222222222222222vh;
}
.mb-32 {
  margin-bottom: 2.962962962962963vh;
}
.contacts-block {
  width: 100%;
  padding: 2.222222222222222vh 0 0;
  border-top: 1px solid rgba(194, 194, 194, 0.6);
  border-bottom: 1px solid rgba(194, 194, 194, 0.6);
}
.input-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input-row p {
  width: 13.962962962962962vh;
}
.input-row input {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(194, 194, 194, 0.6);
  box-sizing: border-box;
  border-radius: 0.7407407407407407vh;
  height: 3.4259259259259256vh;
  width: 31.48148148148148vh;
  padding: 0 3vh 0 1.111111111111111vh;
  color: #453e51;
}
.file-drop-area {
  border: 1px dashed rgba(194, 194, 194, 0.6);
  box-sizing: border-box;
  border-radius: 0.7407407407407407vh;
  width: 100%;
  height: 24.72222222222222vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.file-drop-area p:last-of-type {
  display: none;
}
.file-drop-area span {
  color: #1a17cb;
}
.file-drop-area img {
  margin-right: 1.2962962962962963vh;
}
.send-btn {
  height: 3.888888888888889vh;
}
.select-input {
  width: 31.48148148148148vh;
}
@media screen and (max-width: 414px) {
  .order-form-page {
    padding: 20.29vw 5.797vw 12.56vw;
  }
  .order-form {
    padding: 0;
    width: 100%;
  }
  .mb-16 {
    margin-bottom: 3.865vw;
  }
  .mb-24 {
    margin-bottom: 5.797vw;
  }
  .mb-32 {
    margin-bottom: 5.797vw;
  }
  .input-row {
    flex-direction: column;
  }
  .input-row p {
    width: 100%;
    margin-bottom: 1.932vw;
  }
  .input-row input {
    width: 100%;
    height: 8.213vw;
    padding: 0 2.899vw 0;
  }
  .select-input {
    width: 100%;
  }
  .file-drop-area {
    border: 1px dashed rgba(194, 194, 194, 0.6);
    box-sizing: border-box;
    border-radius: 1.932vw;
    height: 16.184vw;
    justify-content: flex-start;
    padding-left: 1.5625vh;
  }
  .file-drop-area span {
    color: #1a17cb;
  }
  .file-drop-area img {
    margin-right: 3.382vw;
  }
  .send-btn {
    height: 10.145vw;
  }
  .file-drop-area p:last-of-type {
    display: block;
  }
  .file-drop-area p:first-of-type {
    display: none;
  }
}
@media screen and (min-width: 415px) and (max-width: 1024px) {
  .order-form-page {
    padding: 11.42578125vh 10.25390625vh 6.93359375vh;
  }
  .order-form {
    padding: 0;
    width: 100%;
  }
  .mb-16 {
    margin-bottom: 1.5625vh;
  }
  .mb-24 {
    margin-bottom: 2.34375vh;
  }
  .mb-32 {
    margin-bottom: 3.125vh;
  }
  .input-row p {
    width: 13.28125vh;
  }
  .input-row input {
    width: 41.69921875vh;
    height: 3.61328125vh;
    padding: 0 1.171875vh 0 1.171875vh;
  }
  .select-input {
    width: 41.69921875vh;
  }
  .file-drop-area {
    border: 1px dashed rgba(194, 194, 194, 0.6);
    box-sizing: border-box;
    border-radius: 0.78125vh;
    height: 6.54296875vh;
    justify-content: flex-start;
    padding-left: 1.5625vh;
  }
  .file-drop-area span {
    color: #1a17cb;
  }
  .file-drop-area img {
    margin-right: 1.3671875vh;
    height:3.90625vh
  }
  .send-btn {
    height: 4.1015625vh;
  }
  .file-drop-area p:last-of-type {
    display: block;
  }
  .file-drop-area p:first-of-type {
    display: none;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1366px) {
  .order-form-page {
    padding: 15.277777777777777vh 8.88888888888889vh 12.777777777777777vh;
  }
  .order-form {
    padding: 0;
    width: 72.63888888888889vh;
  }
  .mb-16 {
    margin-bottom: 2.2222222222222223vh;
  }
  .mb-24 {
    margin-bottom: 3.333333333333333vh;
  }
  .mb-32 {
    margin-bottom: 4.444444444444445vh;
  }
  .input-row p {
    width: 18.88888888888889vh;
  }
  .input-row input {
    width: 47.22222222222222vh;
    height: 5.138888888888888vh;
    padding: 0 3.4722222222222223vh 0 1.6666666666666665vh;
  }
  .select-input {
    width: 47.22222222222222vh;
  }
  .file-drop-area {
    border: 1px dashed rgba(194, 194, 194, 0.6);
    box-sizing: border-box;
    border-radius: 1.932vw;
    height: 37.083333333333336vh;
  }
  .file-drop-area span {
    color: #1a17cb;
  }
  .file-drop-area img {
    margin-right: 1.9444444444444444vh;
  }
  .send-btn {
    height: 5.833333333333333vh;
  }
}
</style>
