<template>
  <div class="app">
    <div>hello Movie</div>
    <div class="uniform-distribution">
      <p>均匀分布子元素1</p>
      <p>均匀分布子元素2</p>
      <p>均匀分布子元素3</p>
    </div>
    <div class="vertical-centering">
      <p>垂直居中</p>
    </div>
    <p class="gradual-text">渐变文本</p>
   
  </div>
</template>

<script>
export default {};
</script>

<style>
.app{
    background-color: royalblue;
}
.uniform-distribution {
  background: green;
  display: flex;
  /*横轴上的对齐方式 */
  justify-content: space-between;
}
.vertical-centering {
  background: red;
  display: flex;
  justify-content: center;
  /*纵轴上的对齐方式 */
  align-items: center;
}
.gradual-text {
  /*文本元素提供渐变背景 */
  background: -webkit-linear-gradient(pink, red);
  /*透明颜色填充文本 */
  -webkit-text-fill-color: transparent;
  /*文本剪辑背景，渐变背景作为颜色填充*/
  -webkit-background-clip: text;
}
.grid-center {
  background: green;
  display: grid;
  justify-content: center;
  align-items: center;
}
/*.grid-layout  div  所有儿子都这个
.grid-layout>div  临近div
 */
</style>
