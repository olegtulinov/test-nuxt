<template>
  <header :class="['header', { active: isActive }]">
    <NuxtLink to="/">
      <img class="header__logo" src="~/assets/img/logo.svg" alt="logo" />
    </NuxtLink>
    <div @click="onClick" :class="['burger', { active: isActive }]">
      <span></span>
    </div>
    <nav class="header__nav">
      <ul class="header__links">
        <li><a class="header__links-item" href="#">Агентство</a></li>
        <li><a class="header__links-item" href="#">Услуги</a></li>
        <li>
          <NuxtLink class="header__links-item" to="/cases"> Кейсы </NuxtLink>
        </li>
        <li><a class="header__links-item" href="#">Блог</a></li>
        <li><a class="header__links-item" href="#">Контакты</a></li>
      </ul>
    </nav>
    <div class="header__contact">
      <h3 class="header__contact_title">Контакты:</h3>
      <p class="header__contact_item">+7 999 123 45 67</p>
      <p class="header__contact_item">hello@cyberia.studio</p>
      <p class="header__contact_item">ул.Ярных, д.35, оф.10</p>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';

let isActive = ref(false);

function onClick() {
  isActive.value = !isActive.value;
}
</script>
<style lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 64px 24px;
  max-width: 1288px;
  margin: 0 auto;

  &__logo {
    margin-right: 191px;
    height: 28px;
    width: 131px;
  }

  &__nav.open {
    display: flex;
  }

  &__links {
    display: flex;
    gap: 60px;
  }

  &__links-item {
    color: white;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      color: #2d76f9;
    }
  }

  &__contact {
    display: none;
    flex-direction: column;
    padding: 38px 0px;
    border-top: 2px solid #2b2d3a;
    border-bottom: 2px solid #2b2d3a;

    &_title {
      font-size: 18px;
      color: #9aa8ba;
      margin-bottom: 42px;
    }
    &_item {
      font-size: 16px;
      color: #9aa8ba;
      margin-bottom: 20px;
    }
  }
}

.header.active {
  display: inline-block;
  background-color: #24252f;
  position: fixed;
  z-index: 30;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}

.header.active .header__logo {
  display: none;
}

.header.active .header__contact {
  display: flex;
}

.header.active .header__nav {
  display: flex;
}

.burger {
  display: none;
  position: relative;
  z-index: 50;
  align-items: center;
  height: 32px;
  width: 32px;
  margin-left: auto;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 4px;
    width: 24px;
    height: 2px;
    border-radius: 10px;
    background-color: #eef3ff;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 4px;
    width: 24px;
    height: 2px;
    border-radius: 10px;
    background-color: #eef3ff;
  }
}

.burger span {
  position: absolute;
  top: 15px;
  left: 4px;
  width: 24px;
  height: 2px;
  transform: scale(1);
  border-radius: 10px;
  background-color: #eef3ff;
}

.burger.active span {
  transform: scale(0);
}

.burger.active::after {
  top: 50%;
  transform: rotate(45deg);
}
.burger.active::before {
  top: 50%;
  transform: rotate(-45deg);
}

@media screen and (max-width: 1439px) {
  .header {
    &__logo {
      margin-right: 150px;
    }

    &__links {
      gap: 22px;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    display: flex;
    justify-content: space-between;
    padding: 24px;
    background-color: #20212c;

    &__logo {
      width: 93px;
      height: 20px;
      margin-right: 75px;
    }

    &__nav {
      display: none;
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-bottom: 42px;
    }
  }

  .burger {
    display: flex;
  }
}

@media screen and (max-width: 425px) {
  .header {
    background-color: #20212c;
    &__logo {
      margin-left: 17px;
      height: 20px;
      width: 93px;
    }
  }
}
</style>
