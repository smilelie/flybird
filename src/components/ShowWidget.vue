<template>
  <div class="ShowWidget">
  </div>
</template>

<script>
export default {
  name: 'ShowWidget',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ShowWidget {
  border-style: solid;
  border-color: #ff0000;
  border-width: 4px;
  border-top-color: #ff0000;
}
</style>
