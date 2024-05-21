<template>
  <main class="content">
    <BreadCrumbs :crumbs='crumbs' />
    <h1 class="title__card">Кейсы</h1>
    <Tabs :projectCategories=store.projectCategories />

    <div v-if="store.filteredItems.length" class="cards">
      <Card v-for="project in store.filteredItems" :key="project.id" :project="project" />
    </div>
    <Form />
  </main>
</template>

<script setup>
import { ref, useAsyncData } from '#imports';
import useStore from "~/stores";

const store = useStore()

const crumbs = ref([
  { name: "Главная", to: '/' },
])

useAsyncData(async () => {
  await Promise.all([store.getProjects(), store.getProjectCategories()])
});
</script>

<style>
.page {
  font-family: "Fira Sans Condensed", sans-serif;
  background: linear-gradient(
    0deg,
    rgba(36, 37, 47, 1) 0%,
    rgba(49, 49, 63, 1) 36%,
    rgba(36, 37, 48, 1) 100%
  );
  color: white;
  height: 100%;
}

.content {
  max-width: 1288px;
  margin: 0 auto;
  padding: 0 24px;
}

.title__card {
  margin-top: 130px;
  margin-bottom: 65px;
  font-size: 48px;
}

.cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px 39px;
}

@media screen and (max-width: 1290px) {
  .cards {
  justify-content: center;
  gap: 40px;

}
}

@media screen and (max-width: 768px) {
 .title__card{
    margin-top: 30px;
  font-size: 21px;
  font-family: "Rubik", sans-serif;
}
}
</style>
