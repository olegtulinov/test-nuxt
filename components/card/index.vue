<template>
  <div class="card">
    <img class="card__img" :src="project.image" alt="img" />
    <div class="card__title">
      <span class="card__title_text">{{ project.title }}</span>
      <span class="card__title_desc"
        >Онлайн гипермаркет. Для компании были разработаны сайт и мобильное приложение и т.д.</span
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss">
.card {
  position: relative;
  width: 387px;
  height: 378px;

  &::after {
    content: '';
    position: absolute;
    top: 17px;
    left: 341px;
    width: 25px;
    height: 25px;
    background: url('~/assets/img/afterArrow.svg');
    z-index: 1;
  }

  &__img {
    width: 387px;
    height: 378px;
    object-fit: cover;
    border-radius: 12px;
  }

  &__title {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: 122px;
    width: 122px;
    top: 23px;
    left: 238px;
    background-color: #313341;
    border-radius: 5px;

    &_text {
      font-size: 24px;
    }

    &_desc {
      display: none;
      font-size: 13px;
      max-width: 254px;
      text-align: left;
    }
  }
}

@media screen and (max-width: 1230px) {
  .card {
    position: relative;
    width: 327px;
    height: 320px;

    &__img {
      width: 327px;
      height: 320px;
    }

    &__title {
      display: flex;
      align-items: flex-start;
      justify-content: end;
      text-align: center;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 23px 29px;
      background: none;
      gap: 6px;
      border-radius: 5px;
      font-family: 'Rubik', sans-serif;
      font-size: 24px;
      z-index: 3;

      &_desc {
        display: flex;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.2;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 192px;
      left: 29px;
      width: 17px;
      height: 17px;
      background: url('~/assets/img/afterArrowWhite.svg');
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(0deg, rgba(9, 11, 33, 1) 0%, rgba(49, 51, 65, 0) 100%);
      border-radius: 5px;
      z-index: 1;
    }
  }

  .card__img::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(9, 11, 33, 1) 0%, rgba(49, 51, 65, 0) 100%);
    z-index: 50;
  }
}

@media screen and (max-width: 1024px) {
  .card {
    position: relative;

    &__img {
      width: 327px;
      height: 320px;
    }
  }

  .card__img::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(9, 11, 33, 1) 0%, rgba(49, 51, 65, 0) 100%);
    z-index: 50;
  }
}
</style>
