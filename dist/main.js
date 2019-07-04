$("button").click(function(){
    $(".recipes").empty()
  let ingredient=  $("input").val()
  $.get(`/recipes/${ingredient}`)
   .then(function(res){
    renderer.render(res)
    
   })
  
})

class Renderer{
    constructor(){}
    render(data){
        for (let i of data){
            $("#div").append(`<div class='recipes'>
            <a href=${i.href}>${i.title}</a>
            <img class='img' src=${i.thumbnail}>
            <ul id=${data.indexOf(i)}>
            
            </ul>
            </div>`)
            for( let x of i.ingredients){
            $(`#${data.indexOf(i)}`).append(`<li>${x}</li>`)
         }
 
        }
     
    }
}

const renderer=new Renderer


$("body").on('click','.img',function(){
    let firsting=$(this).siblings("ul")[0].children[0].innerText
    console.log(firsting)
})



 