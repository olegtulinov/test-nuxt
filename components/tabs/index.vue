<template>
  <div class="tabs">
    <span
      :class="['tabs__item', { selected: tab.id === store.filteredId }]"
      v-for="tab in projectCategories"
      @click="clickOnTab(tab.id)"
      :key="tab.id"
      >{{ tab.name }}

    </span>
      <!-- @click="store.setFilteredCategories(tab.id)" -->
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import useStore from "~/stores";

const props = defineProps({
  projectCategories: {
    type: Object,
    required: true,
  },
})

const store = useStore()

const emit = defineEmits(['clickTab']);


function clickOnTab(id) {
  if(store.filteredId === id){
    store.setFilteredCategories('')
  }else{
    store.setFilteredCategories(id)
  }
}
const selectedTab = ref('');
</script>
<style lang="scss">
.tabs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 50px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 29px;
    background-color: #313341;
    height: 49px;
    border-radius: 7px;
    color: #eef3ff;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .selected {
    background-color: #2d76f9;
  }
}

@media screen and (max-width: 1080px) {
  .tabs {
    gap: 20px;

    &__item {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      padding: 0 24px;
    }
  }
}

@media screen and (max-width: 768px) {
  .tabs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 17px;
    &__item {
      height: 33px;
      font-size: 14px;
      padding: 0 29px;
    }
  }
}

@media screen and (max-width: 425px) {
  .tabs {
    &__item {
      padding: 0 6px;
      font-size: 12px;
      font-family: 'Open Sans', sans-serif;
    }
  }
}
</style>
