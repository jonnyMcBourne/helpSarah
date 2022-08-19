const data = require('./data.json');
// this is the first approach
/*
const cebollaTeam =[]
data.forEach((receta)=>{
    receta.ingredients.forEach((ingredient)=>{
        if(ingredient ==="cebolla"){
            cebollaTeam.push(receta)
        } 
    })
})
*/
// This is the secong and fancier approach
ingredientFound = 'cebolla'
const cebollaTeam = data.filter((recipe)=> recipe.ingredients.find((ingredient)=>ingredient === ingredientFound ))
console.log("cebollaTeam",cebollaTeam);
