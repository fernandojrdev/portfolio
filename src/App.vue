<script setup>
import Navbar from '/components/Navbar.vue'

;(function () {
  const htmlElement = document.querySelector("html")
  if(htmlElement.getAttribute("data-bs-theme") === 'auto') {
    function updateTheme() {
      document.querySelector("html").setAttribute("data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)
    updateTheme()
  }
})()
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    
  </main>
</template>

<style scoped>
</style>
