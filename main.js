
  $('.close').on('click',function(){
    $('.SideNav').css('left','-250px')
  })
  $('.open').on('click',function(){
    $('.SideNav').css('left','0px')
  })

//  defult meals
let Randommeals ;
async function feechData(){
    let Meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    Meals = await Meals.json()
    Randommeals = Meals.meals
    DisplayMeals(Randommeals)
    
}feechData()

function DisplayMeals(arr) {
    let temp = ''
    for(let i = 0 ; i< arr.length ; i++){
        temp += ` <div class="col-md-3">
        <div class="item position-relative overflow-hidden  rounded-3" id="${arr[i].idMeal}" onclick="GitDetils(${arr[i].idMeal})">
          <img src="${arr[i].strMealThumb}" alt="" class="w-100">
          <div class="hover-item d-flex align-items-center justify-content-center">
            <h1>${arr[i].strMeal}</h1>
          </div>
        </div>
       </div>`
    }
    document.getElementById('ShowData').innerHTML = temp
}

async function GitDetils(params, id='ShowData' ) {
    let recebditails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params}`)
    recebditails = await recebditails.json()
let dit = [recebditails.meals[0].strIngredient1,
            recebditails.meals[0].strIngredient2,
            recebditails.meals[0].strIngredient3,
            recebditails.meals[0].strIngredient4,
            recebditails.meals[0].strIngredient5,
            recebditails.meals[0].strIngredient6,
            recebditails.meals[0].strIngredient7,
            recebditails.meals[0].strIngredient8,
            recebditails.meals[0].strIngredient9,
            recebditails.meals[0].strIngredient10,
            recebditails.meals[0].strIngredient11,
            recebditails.meals[0].strIngredient12,
            recebditails.meals[0].strIngredient13,
            recebditails.meals[0].strIngredient14,
            recebditails.meals[0].strIngredient15,
            recebditails.meals[0].strIngredient16,
            recebditails.meals[0].strIngredient17,
            recebditails.meals[0].strIngredient18,
            recebditails.meals[0].strIngredient19,
            recebditails.meals[0].strIngredient20,
        ]
        let cartona = ``
        for (let i = 0; i < dit.length; i++) {
            if(dit[i] != null && dit[i].length > 0){
               cartona+=` <h4 class="bg-secondary rounded-3 p-2 d-inline-block">${dit[i]}</h4>`
            }
        }
let temp = ` <div class="col-md-4">
<div class="meal-image ">
  <img src="${recebditails.meals[0].strMealThumb}" class="w-100 rounded-3" alt="">
  <h1 class="text-light text-center">${recebditails.meals[0].strMeal}</h1>
</div>
</div>
<div class="col-md-8">
<div class="mealContent text-light">
  <h2>Instructions</h2>
  <p>${recebditails.meals[0].strInstructions}</p>
  <h3 class="fw-bolder">Area : ${recebditails.meals[0].strArea}</h3>
  <h3 class="fw-bolder">Category : ${recebditails.meals[0].strCategory}</h3>
  <h3 class="fw-bolder">Recipes : </h3>
  <div class="Recipes-items ">
      ${cartona}
  </div>
  <h3 class="fw-bolder">Tags : </h3>
  <p class="p-2 text-center rounded-2 bg-danger-subtle d-inline-block text-black ">${recebditails.meals[0].strTags?recebditails.meals[0].strTags: 'no tags'}</p>
  <div class="col-4">
  <button class="btn btn-success mb-2"><a href="${recebditails.meals[0].strSource}" class="text-decoration-none text-light" target="_blanck">Source</a></button>
  <button class="btn btn-danger mb-2"><a href="${recebditails.meals[0].strYoutube}" class="text-decoration-none text-light"  target="_blanck">Youtube</a></button>
  </div>
</div>
</div>`
console.log(recebditails.meals[0].strMeal);
document.getElementById(id).innerHTML = temp

}
// Search
document.querySelector('.Serach').addEventListener('click', function () {
   $('#Serach').fadeIn(0)
   $('#Contact').fadeOut(0)
   $('#rondom').fadeOut(0)
 })
let byName =  document.querySelector('#byName')
byName.addEventListener('keyup', Search )
async function Search(params) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${byName.value.toLowerCase()}`)
    data = await data.json()
    DisplaySearch(data.meals)
}
function DisplaySearch(arr) {
    let temp = ''
    for(let i = 0 ; i< arr.length ; i++){
        temp += ` <div class="col-md-3">
        <div class="item position-relative overflow-hidden  rounded-3" id="${arr[i].idMeal}" onclick="GitDetils(${arr[i].idMeal}, 'showSearch')">
          <img src="${arr[i].strMealThumb}" alt="" class="w-100">
          <div class="hover-item d-flex align-items-center justify-content-center">
            <h1>${arr[i].strMeal}</h1>
          </div>
        </div>
       </div>`
    }
    document.getElementById('showSearch').innerHTML = temp
}
 let byLetter =  document.querySelector('#byLetter')
 byLetter.addEventListener('keyup', Search )
 async function Search(params) {
     let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${byLetter.value.toLowerCase()}`)
     data = await data.json()
     DisplaySearch(data.meals)
 }
// Categories
document.querySelector('.Categories').addEventListener('click',async function name() {
    $('#Serach').fadeOut(0)
    $('#Contact').fadeOut(0)
    $('#rondom').fadeIn(0)
   let Categories = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
   Categories = await Categories.json()
   displayCategories(Categories.categories)
})

function displayCategories(arr) {
    let temp= ''
    for (let i = 0; i < arr.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="item position-relative overflow-hidden  rounded-3" onclick="GitCategory('${arr[i].strCategory}')">
          <img src="${arr[i].strCategoryThumb}" alt="" class="w-100">
          <div class="hover-item d-flex align-items-center justify-content-center">
            <h1>${arr[i].strCategory}</h1>
          </div>
        </div>
       </div>`
    }
    document.getElementById('ShowData').innerHTML = temp
}
async function GitCategory(ele) {
    let Categories = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ele}`)
    Categories = await Categories.json()
    displaycateg(Categories.meals)
}
function displaycateg(arr){
    let temp= ''
    for (let i = 0; i < arr.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="item position-relative overflow-hidden  rounded-3 " onclick="GitDetils(${arr[i].idMeal})">
          <img src="${arr[i].strMealThumb}" alt="" class="w-100">
          <div class="hover-item d-flex align-items-center justify-content-center">
            <h1>${arr[i].strMeal}</h1>
          </div>
        </div>
       </div>`
    }

    document.getElementById('ShowData').innerHTML = temp
}

// Area 
document.querySelector('.Area').addEventListener('click',async function name() {
    $('#Serach').fadeOut(0)
    $('#Contact').fadeOut(0)
    $('#rondom').fadeIn(0)
    let Areas = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    Areas = await Areas.json()
    displayAreas(Areas.meals)
 })
 function displayAreas(arr) {
    let temp= ''
    for (let i = 0; i < arr.length; i++) {
        temp += `<div class="col-md-3">
            <div class="area text-center text-light" onclick="GitArea('${arr[i].strArea}')">
            <i class="fa-solid fa-house-laptop" style="color: #ffffff;"></i> 
            <h3 id="AreaName">${arr[i].strArea}</h3>
            </div>
        </div>
      `
    
    }
    document.getElementById('ShowData').innerHTML = temp
}
async function GitArea(para) {
    let Area = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${para}`)
    Area = await Area.json()
console.log(Area.meals);
    displayArea(Area.meals)
}

function displayArea(arr){
    let temp= ''
    for (let i = 0; i < arr.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="item position-relative overflow-hidden  rounded-3 " onclick="GitDetils(${arr[i].idMeal})">
          <img src="${arr[i].strMealThumb}" alt="" class="w-100">
          <div class="hover-item d-flex align-items-center justify-content-center">
            <h1>${arr[i].strMeal}</h1>
          </div>
        </div>
       </div>`
    }

    document.getElementById('ShowData').innerHTML = temp
}
// 
document.querySelector('.Ingredints').addEventListener('click',async function name() {
    $('#Serach').fadeOut(0)
    $('#Contact').fadeOut(0)
    $('#rondom').fadeIn(0)
    let Ingredints = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    Ingredints = await Ingredints.json()
    console.log(Ingredints.meals);
    displayIngredints(Ingredints.meals)
 })
 function displayIngredints(arr) {
    let temp= ''
    for (let i = 0; i < arr.length; i++) {
        temp += `<div class="col-md-3">
            <div class="area text-center text-light" onclick="GitIngredinys('${arr[i].strIngredient}')">
            <i class="fa-solid fa-drumstick-bite fs-1" style="color: #ffffff;"></i>
            <h3 id="AreaName">${arr[i].strIngredient}</h3>
            
            </div>
        </div>
      `
    
    }
    document.getElementById('ShowData').innerHTML = temp
}
async function GitIngredinys(para) {
    let Area = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${para}`)
    Area = await Area.json()
console.log(Area.meals);
    displayingre(Area.meals)
}

function displayingre(arr){
    let temp= ''
    for (let i = 0; i < arr.length; i++) {
        temp += ` <div class="col-md-3">
        <div class="item position-relative overflow-hidden  rounded-3 " onclick="GitDetils(${arr[i].idMeal})">
          <img src="${arr[i].strMealThumb}" alt="" class="w-100">
          <div class="hover-item d-flex align-items-center justify-content-center">
            <h1>${arr[i].strMeal}</h1>
          </div>
        </div>
       </div>`
    }

    document.getElementById('ShowData').innerHTML = temp
}

// contacts

document.querySelector('.Contact').addEventListener('click',function () {
    $('#Serach').fadeOut(0)
    $('#rondom').fadeOut(0)
    $('#Contact').fadeIn(0)
console.log('hi');
})

function validateForm() {
    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = document.getElementById('age').value.trim();
    const password = document.getElementById('password').value.trim();
    const repassword = document.getElementById('repassword').value.trim();

    // Validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    // Clear previous alerts
    clearAlerts();

    // Validation checks
    let isValid = true;
    if (name === '') {
        showAlert('nameAlert', 'Name is required');
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        showAlert('emailAlert', 'Invalid email format');
        isValid = false;
    }
    if (!phoneRegex.test(phone) || phone.length < 10) {
        showAlert('phoneAlert', 'Invalid phone number');
        isValid = false;
    }
    if (isNaN(age) || age < 0) {
        showAlert('ageAlert', 'Invalid age');
        isValid = false;
    }
    if (password === '') {
        showAlert('passwordAlert', 'Password is required');
        isValid = false;
    }
    if (password !== repassword) {
        showAlert('repasswordAlert', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        const data = {
            name: name,
            email: email,
            phone: phone,
            age: age,
            password: password,
            repassword: repassword
        };
        sendAjaxRequest(data);
    }
}

function showAlert(alertId, message) {
    const alertDiv = document.getElementById(alertId);
    alertDiv.classList.remove('d-none');
    alertDiv.textContent = message;
}

function clearAlerts() {
    const alertIds = ['nameAlert', 'emailAlert', 'phoneAlert', 'ageAlert', 'passwordAlert', 'repasswordAlert'];
    alertIds.forEach(id => {
        const alertDiv = document.getElementById(id);
        alertDiv.classList.add('d-none');
        alertDiv.textContent = '';
    });
}

function sendAjaxRequest(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint-url', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            if (xhr.status === 200 && response.success) {
                alert('Form submitted successfully');
            } else {
                alert(response.message || 'An error occurred');
            }
        }
    };
    xhr.send(JSON.stringify(data));
}
