//try array.length
var company = `[{
"name":"milk",
"price":"40" ,
"location": "cooling",
"fact": "contains dairy"

},
{
  "name":"yoghurt",
  "price": 50 ,
  "location": "cooling",
  "fact": "contains dairy"
},
{
  "name":"flour",
  "price": 55,
  "location": "isle 6",
  "fact": "NOT gluten free"
},
{
  "name":"hotdog",
  "price": 100,
  "location": "cooling",
  "fact": "gluten free"
},
{
  "name":"pita brood",
  "price": 75.50,
  "location": "cooling",
  "fact": "not gluten free"
}]`
//console.log(JSON.parse(company)[1].name);

var info = (JSON.parse(company)[0].price + "," + JSON.parse(company)[0].location  + "," + JSON.parse(company)[0].fact );
var info1 = (JSON.parse(company)[1].price + "," + JSON.parse(company)[1].location  + "," + JSON.parse(company)[1].fact );
var info2 = (JSON.parse(company)[2].price + "," + JSON.parse(company)[2].location  + "," + JSON.parse(company)[2].fact );
var info3 = (JSON.parse(company)[3].price + "," + JSON.parse(company)[3].location  + "," + JSON.parse(company)[3].fact );
var info4 = (JSON.parse(company)[4].price + "," + JSON.parse(company)[4].location  + "," + JSON.parse(company)[4].fact );


var son =JSON.parse(company)[0].name
//console.log( JSON.parse(company)[0].name);
var yoghurt = JSON.parse(company)[1].name;
var mn = JSON.parse(company)[2].name;
var hotdog = JSON.parse(company)[3].name;
var pita = JSON.parse(company)[4].name;
var array = [ son, yoghurt, mn, hotdog, pita];
console.log(array);




const para = document.createElement("h1");
var leeg = para.innerHTML = "";
document.getElementById("here").appendChild(para);
para.className = "itemName";





const editThis= document.createElement("p");
document.getElementById('here').appendChild(editThis);
editThis.className="iteminfo";
var here = document.getElementById('here');
here.style.display='none';



var btn = document.createElement('button');
  btn.className = "btn";
document.getElementById('here').appendChild(btn);
btn.setAttribute("id","test");


var img = document.createElement('img');
// img.style.display='none;'

img.setAttribute("id","nutfacts")
document.getElementById('here').appendChild(img);

function myFunction() {
let text = son;
let result = text.match(son);
var input =  document.getElementById("myInput").value;

//console.log(son);
if( input == array[0]){
  img.src="images/vb1.png";
  img.className="pic1";
   para.innerHTML =  son;
   editThis.innerHTML = " srd " + info;
   here.style.display='block';




} if ( input == array[1]){
  img.src="images/vb3.png";
  img.className="pic2";
   para.innerHTML = array[1];
    editThis.innerHTML = info1;
    here.style.display='block';

}
if ( input == array[2]){
  img.src="images/vb1.png";
  img.className="pic1";
   para.innerHTML = array[2];
    editThis.innerHTML = info2;
    here.style.display='block';

}
if ( input == array[3]){
  img.src="images/vb3.png";
  img.className="pic2";
   para.innerHTML = array[3];
    editThis.innerHTML = info3;
    here.style.display='block';

}
if ( input == array[4]){
  img.src="images/vb3.png";
  img.className="pic2";
   para.innerHTML = array[4];
    editThis.innerHTML = info4;
    here.style.display='block';

}
if(input == leeg){
  para.innerHTML= '';
  editThis.innerHTML='';
  here.style.display='none';
};


};



// total.className = "itemPrice";

var total0= document.createElement("h3");
document.getElementById("total").appendChild(total0);
var itemPrice0 = total0.className = "itemPrice1";
document.getElementById('total').style.display='none';



var forYoghurt =document.createElement('h3');
document.getElementById("total").appendChild(forYoghurt);
forYoghurt.className = "itemPrice2";

var forSnacks =document.createElement('h3');
document.getElementById("total").appendChild(forSnacks);
forSnacks.className = "itemPrice3";

var forHot =document.createElement('h3');
document.getElementById("total").appendChild(forHot);
forHot.className = "itemPrice4";


var forPita =document.createElement('h3');
document.getElementById("total").appendChild(forPita);
forPita.className = "itemPrice5";

var bill =document.createElement('h3');
document.getElementById("total").appendChild(bill);


var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var a = 0;
var yo = 0;
var snack = 0;
var dog =0;
var pbrood = 0;

var disp = document.getElementById('total');
btn.onclick = function(){

document.getElementById('total').style.display='block';
  var input1 = document.getElementById('myInput');
if(input1.value == "milk"){
var sum =  total0.innerHTML= JSON.parse(company)[0].price;
count++
  a  = count * 40;
total0.innerHTML = " SRD " + a +  "  " + son ;

}
if(input1.value == "yoghurt"){
   forYoghurt.className = "itemPrice2";
    count1++
    yo = count1 * 50;
  forYoghurt.innerHTML = " SRD " + yo +  "  " + yoghurt ;

}
if(input1.value == "flour"){
 forSnacks.className = "itemPrice3";
 count2++;
  snack = count2 * 55;
 forSnacks.innerHTML = " SRD " + snack +  "  " + mn ;

}
if(input1.value == "hotdog"){
forHot.className = "itemPrice4";
count3++
 dog = count3 * 100;
forHot.innerHTML = " SRD " + dog +  "  " + hotdog ;


}if(input1.value == "pita brood"){
forPita.className = "itemPrice5";
count4++
 pbrood = count4 * 75.5;
forPita.innerHTML=  " SRD " + pbrood +  "  " + pita ;

}

console.log ( pbrood + a + snack + dog + yo);

bill.className = "yourBill";
var totalSrd = pbrood - -a  - -snack - -dog - -yo;
bill.innerHTML = " Total Price : SRD  " + totalSrd;

};

$('.carousel').carousel({
  interval: 10000
});



function closeTag(){
  document.getElementById("alltags").style.display='none';
};


function opentag(){

document.getElementById("alltags").style.display='block';


};
