//Phân tích Bài toán lúc này: Nhấn vào BUTTON > thay đổi P 
// 1. Xác định các đối tượng chịu tác động
const determineBtn = document.getElementById("determine");
// let imgContainer    = document.getElementById("imgContainer");
const defaultResultBox = document.getElementsByClassName("default-box");
// 2. Xử lý: Bắt sự kiện (Có nhiều cách)
determineBtn.addEventListener("click", hamGiDo);
// 3. Hàm xử lý sự kiện:
function hamGiDo() {
    const defaultAns = document.getElementsByClassName("defaultAns");
  
    defaultResultBox[0].innerHTML = "";
    const heading = document.createElement("h2");
    heading.classList.add("default-heading");
  
    const image = document.createElement("img");
    image.classList.add("default-img");
  
    if (
      defaultAns[0].selectedIndex == 0 &&
      defaultAns[1].selectedIndex == 2 &&
      defaultAns[2].selectedIndex == 1
    ) {
      heading.textContent = "You're an alien";
      image.setAttribute("src", "images/alien.jpg");
    } else if (
      defaultAns[0].selectedIndex == 2 &&
      defaultAns[1].selectedIndex == 0 &&
      defaultAns[2].selectedIndex == 0
    ) {
      heading.textContent = "You're bizarre";
      image.setAttribute("src", "images/Bizarre.jpg");
    } else {
      heading.textContent = "You're normal";
      image.setAttribute("src", "images/normal.jpg");
    }
  
    for (let i = 0; i < defaultAns.length; i++) {
      defaultAns[i].selectedIndex = 0;
    }
  
    defaultResultBox[0].appendChild(heading);
    defaultResultBox[0].appendChild(image);
  };