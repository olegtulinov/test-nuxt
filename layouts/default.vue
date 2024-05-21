<template>
  <div class="page">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

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
</style>