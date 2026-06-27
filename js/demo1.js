//comment
var x =10; //Number
x = "hello word"; //string
x = true; //boolean
x = 3.141459;
x = "3.14159"
var y = 5;
var z = "7";
var t = y + z;//"57"
// "1" + 2 ==> "12"
// 1 + 2 ==> 3
// 1 + "2" ==> "12"
console.log ("hello world");
if (y>0){

}else{

}
for(var i=0; i<10; i++){

}
var arr=[];//mảng. Không cần báo kiểu dữ liệu là gì, không báo kiểu dữ liệu bao nhiêu, chỉ cần biết là mảng rỗng --> thì tự hiểu là các giá trị của mảng.
// arr[4]=19;
arr.push(19);
arr.push("xin chao");
//rule: khi dùng mảng thì cùng 1 kiểu dữ liệu
arr.push(true);


var nums =[5,9,1,4,2,3];
console.log(nums);
console.log(7);
console.log("9"+7);
var total=0;
for(var i=0; i<nums.length;i++){
    total +=nums[i];
}
var total2=0;
nums.map(e=>{
    total2 +=e;
});
//sắp xếp mảng nums lại theo thứ tự bé --> lớn
nums.sort();
console.log(nums);

//hàm khai báo đoạn code và gọi để sử dụng.

function tinh_tong(a,b){
    var c = a +b;
    console.log(c);
    return c;
}

tinh_tong(5,9);
var tt = tinh_tong(10, 3.24259);
var tx = tinh_tong ("ABC",108);
console.log(tt);


var nhan_hai_so = (a,b)=>{//arrow function
    var c = a*b;
    console.log(c);
}

// alert("Yêu cầu trên 18 tuổi mới được truy cập vào website");//no return

// confirm("xác nhận nộp bài thi");//return true/false

// prompt("nhập tên của bạn:"); //return string

//tham chiếu h1 có id head1 sang đây để xử lý
var h1e = document.getElementById("head1");
h1e.style.color=("red");
h1e.style.backgroundColor="#abcabc";


// noi dung van ban
h1e.textContent +="<i>hello world! T2605E</i>";//chỉ chỉnh nội dung text đơn giản
h1e.innerHTML ="<i>Xin Chao T2605E </i>";//đổi cả định dạng

h1e.classList.add("show-title");

var color=["green","red","yellow","orange","blue"];
var r=0;
//setInterval(()=>{
 //sẽ làm các việc này trong mỗi 1000ms
// var cs=r%5;
 //h1e.style.color = color[cs]
 //r++;
//},1000);


var h2e=document.getElementById("head2");
var timer = 10;
setInterval(() => {
    if (timer>=0){
        //in giá trị của timer vào  h2e
         h2e.innerHTML=timer;
        timer--;
    }
    
},1000);

function box_click(e){
    e.style.backgroundColor="green";
}
function move(){
    var bd = document.getElementById("page");
    bd.classList.add("dark");
}
function moveOut(){
    var bd = document.getElementById("page");
    bd.classList.remove("dark");
    
}
var x=100;
function MoveBox_click1(){
    document.getElementById("b1").style.transform = "translateY("+x+"px)";
    x=x+100;
}
function (){
    document.getElementById("popup").style.display="block";
}


