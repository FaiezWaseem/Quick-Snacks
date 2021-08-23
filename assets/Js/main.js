import * as data from './dataExtract.js'
function get($){
    return document.querySelector($);
}
function getParam ()
{
    let url = window.location;
    let params = new URLSearchParams(url.search.slice(1));
   
    let obj = {};
    for(let pair of params.entries()) {
        obj[pair[0]] = pair[1]    //push keys/values to object
    }
    return obj
}
try{
    var uri = getParam()
    const recipe = new data.DataExtract(uri.type , uri.product);
   var item;
   if(recipe.snack_for_kids()){
    //setting the title
    setTitle(uri.product)
    //setting up the image 
    setImg(item.link)
    //Setting the info 
    setInfo(item.nutrion , item.serving , item.preperation_Time , item.purchase)
    //Setting Note
    setNote(item.note)
    //Setting Ingredient
    setIngredient(item.ingredient)
    //setting Steps
    setSteps(item.cooking_des)
   }else if (recipe.healthy_snacks()){
   item = recipe.healthy_snacks()
    //setting the title
    setTitle(uri.product)
    //setting up the image 
    setImg(item.link)
    //Setting the info 
    setInfo(item.nutrion , item.serving , item.preperation_Time , item.purchase)
    //Setting Note
    setNote(item.note)
    //Setting Ingredient
    setIngredient(item.ingredient)
    //setting Steps
    setSteps(item.cooking_des)
   }else if (recipe.easy_on_stomach()){
  item = recipe.easy_on_stomach()
      //setting the title
      setTitle(uri.product)
      //setting up the image 
      setImg(item.link)
      //Setting the info 
      setInfo(item.nutrion , item.serving , item.preperation_Time , item.purchase)
      //Setting Note
      setNote(item.note)
      //Setting Ingredient
      setIngredient(item.ingredient)
      //setting Steps
      setSteps(item.cooking_des)
     }else if (recipe.smoothie){
   item = recipe.smoothie()
    //setting the title
    setTitle(uri.product)
    //setting up the image 
    setImg(item.link)
    //Setting the info 
    setInfo(item.nutrion , item.serving , item.preperation_Time , item.purchase)
    //Setting Note
    setNote(item.note)
    //Setting Ingredient
    setIngredient(item.ingredient)
    //setting Steps
    setSteps(item.cooking_des)
         }
   
    
}catch($){
   console.warn($)
}
function setTitle($){
const title = get('#product-title')
title.innerText = $
}
function setImg($){
const img = get('#product-img')
img.src = $
}
function setInfo(nutrition , serving , prep  , link){
const prep_time = get('#cooking-time');
const serve = get('#serving') 
const nutri = get('#nutrition')
const purchase = get('#purchase')
prep_time.innerText = `Cooking Time : ${prep}`
serve.innerText = `Serving : ${serving}`
nutri.innerText = nutrition
purchase.href = link
}
function setNote($){
  if(!$=== undefined){
      const note = get('#note')
      note.innerText = $
  }
}
function setIngredient($){
    const ing = get('#ingredient');
    $.forEach(element => {
        ing.innerHTML += `<li class="list-group-item">${element}</li>`
    });
}
function setSteps($){
    const step = get('#steps')
    for (const [key, value] of Object.entries($)) {
        
        step.innerHTML += `
        <div class="row  mt-5">
        <div class="col-md-9">
            <h2 class="text-left"><i class="fas fa-check-circle"></i>${key.charAt(0).toUpperCase() + key.slice(1)}</h2>
            <p>${value}</p>
        </div>
    </div>
        `
      }
   
console.log($)
}
