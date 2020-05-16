<template>
  <div>
    <!-- 绘制矩形 -->
    <app-header></app-header>
    <h1>Content</h1>
    <app-footer></app-footer>
  </div>
</template>

<script>

export default {
  name: 'test'
}
</script>
<style scoped>
.rect_arc {
  width: 200px;
  height: 100px;
  border: 1px solid #00ff;
  border-radius: 20% 20% 20% 20%/20% 20% 20% 20%;
}
</style>
