// 캔버스의 기본 크기가 있음 --> 화면에 가득 채우려면
// css에서 canvas 스타일을 width:100%, height:100%로 지정해도 화면에 가득차지 않음. --> js로 지정해야 됨

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;