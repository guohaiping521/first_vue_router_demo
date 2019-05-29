<template>
  <div class="HelloWorld">
    <h1>{{ msg }}</h1>
    <img :src="imgSrc"/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      imgSrc: 'media/checked-blue.png',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width: 1.26rem;
      height: 1.26rem;
      outline: none;
      border: none;
}
</style>
