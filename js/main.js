let userBtn = document.getElementById('user-btn');
let numberUser = document.getElementById("number-user")
let o;

if(localStorage.user != null){
  o = JSON.parse(localStorage.user)
}else{
  o = 0
  localStorage.setItem('user', JSON.stringify(o))
}
numberUser.innerHTML = JSON.parse(localStorage.user)

userBtn.onclick = function (){
  o++;
  localStorage.setItem('user', JSON.stringify(o))
  numberUser.innerHTML = JSON.parse(localStorage.user)
  win()
}
// localStorage.clear()



let numberPosts = document.getElementById('number-posts');
let postsBtn = document.getElementById('posts-btn');


postsBtn.onclick = function (){
  if(numberPosts.innerHTML >= 0){
    numberPosts.innerHTML--
  }else {
    numberPosts.innerHTML++
  }
  win()
}

let wins = document.getElementById('win');
function win(){
  if(numberUser.innerHTML == numberPosts.innerHTML){
    wins.classList.remove('d-none');
  }else {
    wins.classList.add('d-none');
  }
}


let btnProduct = document.getElementById("product-btn");
let numberProduct = document.getElementById("number-product");
let table = document.getElementById("tableB");



let datas = []
btnProduct.onclick = function () {
  newPro = `
<tr>
  <td>tv</td>
  <td><span class="price">$30</span></td>
  <td><span class="count">10</span></td>
</tr>
  `
  datas.push(newPro);
  numberProduct.innerHTML = datas.length 
  console.log(datas.length);
  readdata()
  price()
  refresh()
}

function readdata() {
  table.innerHTML += newPro;
}



let pricee = document.getElementById('price');
let oE = 0;
function price(){
  oE+=30
  pricee.innerHTML = oE
}

function refresh() {
  if(pricee.innerHTML >= 3000){
    localStorage.clear()
  }
   
}