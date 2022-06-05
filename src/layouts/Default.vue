<template>
  <div class="layout">
     <TopNav/>
    <header class="header">
     
    </header>
    <slot/>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
  export default {
    components: {
      TopNav
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 11pt;
  font-weight: 400;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #969696;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
