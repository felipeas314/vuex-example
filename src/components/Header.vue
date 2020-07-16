<template>
  <nav class="nav-bar">
    <a>Logo </a>
    <ul>
      <li>Valor: {{value}} </li>
      <li>Logout</li>
    </ul>
  </nav>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'header',
  computed: {
    ...mapState('count',{
      value: 'value'
    })
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: darkkhaki;
}

.nav-bar ul {
  display: flex;
  list-style: none;
}

.nav-bar ul li {
  margin-right: 30px;
}
</style>