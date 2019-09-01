<template>
  <div id="app">
    <h1>__CadStu__</h1>
    <div class="router-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f3d9ea;
}
h1 {
  padding: 20px;
  color: white;
  font-weight: bold;
  background: #8a085c;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-container{
  border-radius: 10px;
  background: #f5f5f5;
  margin: 40px;
  padding: 8px;
}
html{
  background: #f3d9ea;
}
</style>
