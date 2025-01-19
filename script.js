// 鼠标点击特效
document.addEventListener('click', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  
  const effect = document.createElement('div');
  effect.className = 'click-effect';
  effect.style.left = `${x}px`;
  effect.style.top = `${y}px`;
  
  document.body.appendChild(effect);
  
  setTimeout(() => {
    effect.remove();
  }, 1000);
});

// 添加样式
const style = document.createElement('style');
style.textContent = `
.click-effect {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #2962ff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: ripple 0.8s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
