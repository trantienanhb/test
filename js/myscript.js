//Phân tích Bài toán lúc này: Nhấn vào BUTTON > thay đổi P 
// 1. Xác định các đối tượng chịu tác động
let btnDetermine    = document.getElementById("btnDetermine");
// let imgContainer    = document.getElementById("imgContainer");
let imgItem = document.getElementById("imgItem");
let imgContainer = document.getElementById("imgContainer");
// 2. Xử lý: Bắt sự kiện (Có nhiều cách)
btnDetermine.addEventListener("click", hamGiDo);

// 3. Hàm xử lý sự kiện:
function hamGiDo(){
    let listDetermine = ['normal','Bizarre','alien'];
    let Determine = txtDetermine.value;

    // Can hoc va ren luyen tu duy Lap trinh truoc do
    if(Determine == ''){
        alert('You must answer question');
    }else{
        let result = false;
        for(let i=0; i<listDetermine.length; i++){
            if(determine == listDetermine[i]){
                result = true;
                break;
            }
        }
        if(result == true){
            lblTitle.textContent = Determine;
            imgItem.src = 'images/'+Determine+'.jpg';
        }else{
            alert("Question is not exited")
        }
    }


}

btnDetermine.addEventListener("click", function(){
    let newElement = document.createElement("img");
    newElement.src = "images/alien.jpg";

    imgContainer.appendChild(newElement);
})