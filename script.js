body {
  margin: 0;
  background: black;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.center {
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 2;
}

.glow {
  font-size: 3em;
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #ff00ff;
  }
  to {
    text-shadow: 0 0 30px #00ffff;
  }
}

.fade {
  animation: fadeIn 3s infinite;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
    }
