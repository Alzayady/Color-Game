var easy=document.querySelector("#easy");
var hard =document.querySelector("#hard");
hard.classList.add("fight");
var type ="hard";
var lasttype="hard";
var first=true;
var end=new Array();
var elements=new Array();
var disaple=false;
var answer=null;
var anwercolor=new Array();
main();
go();
pick();
death();
function pick(){
    var n=6;
    if(type=="easy")
        {
            n=3;
        }
    var r=Math.floor(Math.random()*(n));
    var co=document.querySelectorAll(".get");
    var e=elements[r];

    document.querySelector("#red").textContent=Math.floor(e.red);
    document.querySelector("#green").textContent=Math.floor(e.green);
    document.querySelector("#blue").textContent=Math.floor(e.blue);
    answer=co[r];
    anwercolor.push(Math.floor(e.red));
    anwercolor.push(Math.floor(e.green));
    anwercolor.push(Math.floor(e.blue));
}
function death(){
     var co=document.querySelectorAll(".get");
    for(var i=0;i<co.length;i++){
        event(co[i],i);
    }
}
function go(){
    var co=document.querySelectorAll(".get");
    for(var i=0;i<co.length;i++){
        var get=get_color();
        co[i].style.background="rgb("+get[0]+","+get[1]+","+get[2]+")";
        var ele=new Object();
        ele.red=get[0];
        ele.green=get[1];
        ele.blue=get[2];
        elements.push(ele);
        
    }
}
function event(color,num){
        color.addEventListener("click",function(){
        var d=document.getElementById("rr");
        if(!disaple){
        if(color==answer){
                    var d=document.querySelector(".df");
                    d.classList.remove("d-none");
                    d.classList.add("d-inline");
                    chenageall();
                    var final=document.querySelector(".final");
                    var newco=document.querySelector(".newco");
                    newco.textContent="play again?";
                    d.classList.remove("d-none");
                    d.textContent="correct!!";
                    final.style.background="rgb("+anwercolor[0]+","+anwercolor[1]+","+anwercolor[2]+")";
                    disaple=true;
        
        }else{
            color.classList.add("bg-dark");
            d.classList.remove("d-none");
            d.textContent="Try Again!";
          
        }
    }
    })
}
function chenageall(){
    var ch=document.querySelectorAll(".get");
    for (var i=0;i<ch.length;i++){
         ch[i].classList.remove("bg-dark");
        ch[i].style.background="rgb("+anwercolor[0]+","+anwercolor[1]+","+anwercolor[2]+")";
    }
}
function ffh(){
    type="hard";
     if(main()){
         reset();
         go();
         pick();
         death();
         disaple=false;

     }
    lasttype=type;
    easy.classList.remove("fight");
    hard.classList.add("fight");
    }
function ffe(){
     type="easy";
     if(main()){
         reset();
         go();
         pick();
         death();
         disaple=false;

     }
     lasttype=type;
     hard.classList.remove("fight");
     easy.classList.add("fight");
}
function reset(){
     var t =document.querySelector(".final");
     t.style.background=null;
     var newco=document.querySelector(".newco");
     newco.textContent="NEW COLOR";
     var d=document.querySelector(".df");
     d.classList.add("d-none");
     d.classList.remove("d-inline");
     anwercolor=new Array();
            first=false;
        end=new Array();
        elements=new Array();

}
function main(){
       
    if((type=="hard"&&(lasttype!="hard"))||first){
        var g=document.querySelector(".ii");
        var no=document.querySelectorAll(".gg");
        for(var i=0;i<no.length;i++){
         g.removeChild(no[i]);
        }
        first=false;
        var g=document.querySelector(".ii");
        var e=create_div();
        g.appendChild(e);
        e.classList.add("gg");
        var e=create_div();
        e.classList.add("gg");
        g.appendChild(e);
        return true;
    }else if((type=="easy"&&(lasttype!="easy"))){
        var g=document.querySelector(".ii");
        var no=document.querySelectorAll(".gg");
        for(var i=0;i<no.length;i++){
         g.removeChild(no[i]);
        }
        var g=document.querySelector(".ii");
        var e=create_div();
        var e=create_div();
        e.classList.add("gg");
        g.appendChild(e);
        return true;
    }
    return false;
}


function create_div(){
    var div =document.createElement("div");
    for(var i=0;i<3;i++){
        div.appendChild(create_color());
    }
    //div.classList.add("di")
    //div.classList.add("container");
    //div.classList.add("d-flex");
   // div.classList.add("justify-content-around");
   // div.classList.add("row");
    //div.classList.add("my-3");
    return div;
}
function create_color(){
    var d=document.createElement("div");
    //d.classList.add("col-3");
    //d.classList.add("col-s-2");
    d.classList.add("try")
    var colo=document.createElement("div");
    colo.classList.add("imp");
    //colo.classList.add("mx-md-5");
    //colo.classList.add("mx-2");
    colo.classList.add("get");
    colo.classList.add("gett");
    colo.style.transition = "all 1s";
    colo.classList.add("p");
    //colo.style.webkit-transition = "all 1s";
    d.appendChild(colo);
    return d;
}
function m(){
    //first=true;
    var g=document.querySelector(".ii");
    var no=document.querySelectorAll(".gg");
    for(var i=0;i<no.length;i++){
    g.removeChild(no[i]);}
    disaple=false;
    end=new Array();
    elements=new Array();
    answer=5;
    anwercolor=new Array();
    reset();
   // main(); 
        var g=document.querySelector(".ii");
        var e=create_div();
        g.appendChild(e);
        e.classList.add("gg");
    if(type=="hard"){
        var e=create_div();
        e.classList.add("gg");
        g.appendChild(e);
    }
    go();
    pick();
    death();
}

function get_color(){
    var color=new Array(3);
     color[0]=Math.random()*256;
    Math.random();
    Math.random();
    Math.random();
    
     color[1]=Math.random()*256;   
    Math.random();
    Math.random();
    Math.random();
    
     color[2]=Math.random()*256;
    if(makesure(color)){
        return get_color();
    }else{
            end.push(color);
            return color;

    }
}
function makesure(arr){
    for(var i=0;i<end.length;i++){
        if(same(arr,end[i],0)){
            return true;
        }
    }
    return false;
}

function same(f1,f2,inn){
    if(inn==2){
        return f1[inn]==f2[inn];
    }
    else{
        if(f1[inn]!=f2[inn]){
            return false;
        }else{
            return same(f1,f2,inn+1);
        }
    }
}
