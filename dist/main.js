$("button").click(function(){
  let ingredient=  $("input").val()
  $.get(`/recipes/${ingredient}`)
   .then(function(res){
       for (let i of res.results){
           $("body").append(`<div class='recipes'>
           <a href=${i.href}>${i.title}</a>
           <img src=${i.thumbnail}>
           <ul id=${res.results.indexOf(i)}>
           
           </ul>
           </div>`)
           for( let x of i.ingredients){
           $(`#${res.results.indexOf(i)}`).append(`<li>${x}</li>`)
        }

       }
    
   })
  
})