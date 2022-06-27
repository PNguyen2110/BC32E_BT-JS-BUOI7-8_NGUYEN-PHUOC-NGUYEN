
// Up-Down

const upDown = document.querySelectorAll('.btn')
for(var i = 0; i < upDown.length; i++){
    upDown[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}


// Bài tập////////////////////////
var array = [];


var btnThemSo = document.getElementById('btnThemSo');
btnThemSo.onclick =
function (){
   
    getInput('input1', input1 , 'mang', array  )

   
}
    // lấy value ở đầu bài và bài số 9
function getInput(id1, valueInput, id2, valueArray) {
    var valueInput = +document.getElementById(id1).value;
    valueArray.push(valueInput);
    document.getElementById(id2).innerHTML = valueArray;
}


// Bài 1: Tính tổng số dương

var btn1 =document.getElementById('btn1');
btn1.onclick = function() {
    var ketQua1 = document.getElementById('ketQua1');
    var html = 0;
    
    var index = array.findIndex(function(item,index){
        
        
        if(item > 0){
            
            html += item
        }
    })
    ketQua1.innerHTML = html;
}
// <!-- bài 2: đếm số dương -->
var btn2 =document.getElementById('btn2');
btn2.onclick = function() {
    var ketQua2 = document.getElementById('ketQua2');
    var html = 0;
    
    var index = array.findIndex(function(item, index){
        
        
        if(item >= 0){
            
            html += 1
        }
    })
    ketQua2.innerHTML = html ;
}


// <!-- Bài 3: Tìm số nhỏ nhất -->

var btn3 =document.getElementById('btn3');
btn3.onclick = function() {
//    array.sort((a,b) => {
//     if (a > b)
//         return -1;
//     if (a < b)
//         return 1;            // mentor ơi, giải thích giùm mình return về để làm gì vậy,
                                // chạy code không hiểu lắm @@
//     return 0;
//    })

//    var arr2 = array.reverse()
//    document.getElementById('ketQua3').innerHTML = arr2 [0]

    var arr2 = [];
    var arr3 = [];
    var kq = false
        for (var i =0; i<array.length; i++){
            if(array[i] < 0){
                arr2.push(array[i]);
                arr2.sort()
                var length = arr2.length
                kq = true
            }else{
                arr3.push(array[i])
                arr3.sort()
            }
        }
        if(kq ){
            document.getElementById('ketQua3').innerHTML = arr2[length - 1]
        }
        else{
            
            document.getElementById('ketQua3').innerHTML = arr3[0]
        }
  
}


// <!-- Bài 4: Tìm số dương nhỏ nhất -->


var btn4 =document.getElementById('btn4');
btn4.onclick = function() {
    
    var arr2 = [];

    var index = array.findIndex(function(item){
    if(item >= 0){
        arr2.push(item);
        arr2.sort();
        document.getElementById('ketQua4').innerHTML = arr2[0];
    }
    })
}


// <!-- Bài 5: Tìm số chẵn cuối cùng -->

var btn5 =document.getElementById('btn5');
btn5.onclick = function() {

    for(var i = 0; i < array.length; i++){
        var arr2 = [];
        if(array[i] % 2 === 0){
            arr2.push(array[i]);

            arr2.sort()
            var lent = arr2.length
            document.getElementById('ketQua5').innerHTML = arr2[lent-1];
        }else{
            document.getElementById('ketQua5').innerHTML = -1;
        }
        
    }

}

// <!-- Bài 6: Đổi chỗ -->

document.getElementById('btn6').onclick = function() {
    var index1 = +document.getElementById('soThu1').value;
    var index2 = +document.getElementById('soThu2').value;
    
    var number;
    for (var i = 0; i < array.length; i++){
        if(index1 == i){
            
            number =  array[index1];
            
        }else if(index2 == i){
            
            array[index1]= array[index2];

            array[index2] = number;
        }
    }
    document.getElementById('ketQua6').innerHTML = array;

}


// <!-- Bài 7: Sắp xếp tăng dần -->

var btn7 =document.getElementById('btn7');
btn7.onclick = function() {
   array.sort((a,b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;

    return 0;
   })

 
   document.getElementById('ketQua7').innerHTML =  array.reverse()

}

// <!-- Bài 8: Tìm số nguyên tố đầu tiên -->

var btn8 =document.getElementById('btn8');
btn8.onclick = function() {

    var html = '';
    for (var i = 0; i < array.length; i++) {
        var kiemTra = timSo(i)
        if(kiemTra && array[i] > 1){
            html += array[i];
            document.getElementById('ketQua8').innerHTML = html;
            break;
        }else{
            document.getElementById('ketQua8').innerHTML = -1;
        }
    }
    
} 

function timSo (so){
    var kq = true
    for (var j = 2; j < array[so]; j++){
        if(array[so] % j == 0 ){
            kq = false; 
            break;
        }
    }
    
    return kq
}


// <!-- Bài 9: Đếm số nguyên -->
var array2 =[];
var btnThemSo9 = document.getElementById('btnThemSo9');
btnThemSo9.onclick =function (){
    getInput('input9', input9 , 'mang9', array2  )
}

var btn9 = document.getElementById('btn9');
btn9.onclick = function (){
    

    var html = 0;
    for(var i = 0; i < array2.length; i++){
       var par = Number.isInteger(array2[i])
       
        if(par){

            html += 1
        }

    }
    document.getElementById('ketQua9').innerHTML = html;
}

// <!-- Bài 10: So sánh số lượng số âm và số dương -->
var btn10 = document.getElementById('btn10');
btn10.onclick = function (){
    var ar1 = [];
    var ar2 = [];
    var html = '';

    for (var i = 0; i <array.length; i++){
        if(array[i] >= 0){
            ar1.push(array[i]);
        }else{
            ar2.push(array[i]);
        }
    }

    
    if(ar1.length > ar2.length){
        html='số dương > số âm'
    }else if(ar1.length < ar2.length){
        html='số dương < số âm'
    }else{
        html = 'số dương = số âm'
    }

    document.getElementById('ketQua10').innerHTML = html;

}
