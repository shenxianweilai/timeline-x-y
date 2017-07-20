<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:;
}
fade-enter-active, .fade-leave-active
{
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
}

.fade-enter, .fade-leave-active
{
  transform: scale(1.2);
  opacity: 0
}
</style>
