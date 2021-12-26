<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-mask"></div>
    <div class="loadingio-spinner-dual-ball-panatcir5yi">
      <div class="ldio-vxmp0ljehz">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}
.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
@keyframes ldio-vxmp0ljehz-o {
  0% {
    opacity: 1;
    transform: translate(0 0);
  }
  49.99% {
    opacity: 1;
    transform: translate(40.4px, 0);
  }
  50% {
    opacity: 0;
    transform: translate(40.4px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
}
@keyframes ldio-vxmp0ljehz {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40.4px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.ldio-vxmp0ljehz div {
  position: absolute;
  width: 40.4px;
  height: 40.4px;
  border-radius: 50%;
  top: 30.3px;
  left: 10.1px;
}
.ldio-vxmp0ljehz div:nth-child(1) {
  background: #0058e6;
  animation: ldio-vxmp0ljehz 1s linear infinite;
  animation-delay: -0.5s;
}
.ldio-vxmp0ljehz div:nth-child(2) {
  background: #a4aeaf;
  animation: ldio-vxmp0ljehz 1s linear infinite;
  animation-delay: 0s;
}
.ldio-vxmp0ljehz div:nth-child(3) {
  background: #0058e6;
  animation: ldio-vxmp0ljehz-o 1s linear infinite;
  animation-delay: -0.5s;
}
.loadingio-spinner-dual-ball-panatcir5yi {
  width: 101px;
  height: 101px;
  display: inline-block;
  overflow: hidden;
  background: none;
  z-index: 4;
}
.ldio-vxmp0ljehz {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-vxmp0ljehz div {
  box-sizing: content-box;
}
</style>
