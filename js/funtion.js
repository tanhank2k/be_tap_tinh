var firstNum = document.getElementById("fnum");
var secondNum =  document.getElementById("snum");
var multi = document.getElementById("multi");
var plus = document.getElementById("plus");
var divide = document.getElementById("divide");
var sub = document.getElementById("sub");
var result = document.getElementById("result")
var Msg = document.getElementById("msg");

function test(){
    console.log(secondNum.value.length);
    result.value="";
    var textMsg="";
    if(secondNum.value.length==0||firstNum.value.length==0||isNaN(Number(firstNum.value)) || isNaN(Number(secondNum.value)) || (divide.checked && secondNum.value==0)){
        textMsg +=  "<p>Chưa điền đủ hai số hợp lệ để thực hiện phép tính</p>";
    }
    if(!multi.checked&&!divide.checked&&!plus.checked&&!sub.checked)
    {
        textMsg += "<p>Phép tính chưa được chọn</p>"
    }
    if(textMsg==""){
        if(multi.checked){
            result.value = firstNum.value * secondNum.value;
        }
        if(plus.checked){
            result.value = Number(firstNum.value) + Number(secondNum.value);
        }
        if(sub.checked){
            result.value = firstNum.value - secondNum.value;
        }
        if(divide.checked){
            result.value = firstNum.value / secondNum.value;
        }
    }
    Msg.innerHTML = textMsg;
}

function check(){
   
    let  countExcept=0;
    if(isNaN(Number(firstNum.value)) && isNaN(Number(secondNum.value))){
        countExcept =3;
    }
    else{
        if(isNaN(Number(firstNum.value))){
            countExcept = 1;
        }
    
        if(isNaN(Number(secondNum.value))){
            countExcept = 2 ;

        }
    }
    
    switch (countExcept){
        case 1:
            Msg.innerHTML = "<p>Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số</p>"
            break;
        case 2:
            Msg.innerHTML = "<p>Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số</p>"
            break;
        case 3:
            Msg.innerHTML = "<p>Giá trị nhập ở ô <i>Số thứ nhất, Số thứ hai</i> không phải là số</p>"
            break;

    }
}