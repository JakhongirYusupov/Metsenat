<template>
  <div className="overlay">
    <div className="spinner"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f4f4f4d0;
}

.spinner {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
}

.spinner:after {
  content: " ";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 6px solid #2a85ff;
  border-color: #2a85ff transparent #2a85ff transparent;
  animation: spinnerRight 1s alternate infinite;
}

.spinner:before {
  content: " ";
  position: absolute;
  display: block;
  top: 10px;
  left: 10px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #2a85ff;
  border-color: #2a85ff transparent #2a85ff transparent;
  animation: spinnerLeft 1s alternate infinite;
}

@keyframes spinnerRight {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinnerLeft {
  100% {
    transform: rotate(0deg);
  }

  0% {
    transform: rotate(360deg);
  }
}
</style>