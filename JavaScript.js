const sliderData = [
  "./uploads/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg",
  "./uploads/u39.jpg",
  "./uploads/u42.png",
];

// 获取所有轮播项（<li>）和圆点指示器
const slideItems = document.querySelectorAll(".banner .wrapper .pic li");
const indicators = document.querySelectorAll(".banner .wrapper ol li");
let i = 0;

setInterval(function () {
  // 1. 隐藏当前轮播项，移除当前指示器样式
  slideItems[i].style.display = "none";
  indicators[i].classList.remove("current");

  // 2. 更新索引（循环）
  i++;
  if (i >= sliderData.length) i = 0;

  // 3. 显示新的轮播项，添加指示器样式
  slideItems[i].style.display = "block";
  slideItems[i].querySelector("img").src = sliderData[i]; // 替换当前项的图片src
  indicators[i].classList.add("current");
}, 1000);
