<template>
  <section class="container">
    <div>
      <logo />
      <div class="links">
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.links {
  padding-top: 15px;
}
</style>
