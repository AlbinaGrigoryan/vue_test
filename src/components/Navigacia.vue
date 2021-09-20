<template>
  <div class="dflex align_center  container_nav">
    <span :class="['silver', {'blue': count==1}]">Доставка</span>
    <img src="@/assets/images/arrow.png" alt="arrow">
    <span :class="['silver', {'blue': count==2}]">Оплата</span>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      name: "Navigacia",

    }
  },

  methods: {},
}
</script>

<style scoped>
.container_nav {
  padding: 20px 40px;
  margin-bottom: 33px;
}

.container_nav span {
  margin: 0 7px;
  cursor: pointer;
  color: #979797;
}

.container_nav img {
  margin: 0 5px;
}
</style>
