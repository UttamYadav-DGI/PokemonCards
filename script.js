var main=document.getElementById("main");
var s="";
let arr=["https://www.pngfind.com/pngs/m/297-2976545_squirtle-pokemon-free-model-dae-free-png-charmander.png","https://www.pngfind.com/pngs/m/239-2391897_charmander-pokemon-gen-1-starters-charmander-hd-png.png","https://i.pinimg.com/736x/19/89/06/1989062fdae9deafccac9afa427b12ef.jpg","https://spng.pngfind.com/pngs/s/693-6932943_poliwhirl-model-hd-png-download.png","https://spng.pngfind.com/pngs/s/194-1946740_bulbasaur-ivysaur-venusaur-charmander-charmeleon-charizard-drowzee-pokemon.png"]

for(var i=1;i<=60;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"> <img src=${arr[r]}></div>`

}
main.innerHTML=s;

