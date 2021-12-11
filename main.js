// Recipe input data 
import firebase from 'firebase/app';
const recipeForm = document.quertSelector(".add-recipe-form");
const recipeName = document.querySelector(".add-name");
const category = document.querySelector(".add-category");
const ingridient = document.querySelector(".add-ingridient");
const instruction = document.querySelector(".add-instruction");

const submit = document.querySelector(".submit-form");
const modal = document.querySelector(".modal-wrap");
const close = document.querySelector(".modal-close");


submit.addEventListener("click", (e) =>{
    e.preventDefault();

    //write date into database
    db.collection('recipe-form').doc().Set({
        recipeName: recipeName.value,
        category: category.value,
        ingridient: ingridient.value,
        instruction: instruction.value,       
    }).then(()=>{
        recipeForm.reset.rest();

        modal.classList.toggle('display-none');
    })
});

close.addEventListener("click", ()=>{
    modal.classList.toggle("display-none");
});