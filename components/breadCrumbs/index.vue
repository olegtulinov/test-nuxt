<template lang="">
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__list__item" v-for="(item, index) in crumbs" :key="index">
        <router-link class="breadcrumbs__list__item__link" :to="item.to">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
    crumbs: {
      type: Array,
      required: true,
  },
});
</script>
<style lang="scss">
.breadcrumbs {
  &__list {
    display: flex;
    list-style: none;

    &__item {
      &::after {
        content: '/';
        color: #9aa8ba;
      }
      &:last-child &__link {
        cursor: default;
        color: #c4d2e3;
      }
      &:last-child {
        &::after {
          content: '';
        }
      }
      &__link {
        cursor: pointer;
        font-size: 18px;
        font-family: 'Fira Sans Condensed', sans-serif;
        color: #9aa8ba;
        padding: 0 3px;
        &:hover {
          color: #2d76f9;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    &__list {
      margin-top: 46px;

      &__item {
        &:last-child &__link {
          cursor: default;
          color: #616580;
        }
        &:last-child {
          &::after {
            content: '';
          }
        }
        &__link {
          cursor: pointer;
          font-size: 12px;
          font-family: 'Rubik', sans-serif;
          color: #9aa8ba;
          padding: 0 3px;
          &:hover {
            color: #2d76f9;
          }
        }
      }
    }
  }
}
</style>
