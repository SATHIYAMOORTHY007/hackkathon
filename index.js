let div=document.createElement("div");
div.setAttribute("class","main1");



let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");


let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter the name");
input.style.width="520px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary","button");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click",foo);
//input text display 
let user=document.createElement("h3");
user.setAttribute("type","text");
user.setAttribute("id","user");
//heading 
let head=document.createElement("h1");
head.setAttribute("type","text");
head.setAttribute("id","head");
head.innerHTML=`Search for the nationality based on the name.`
formgroup.append(head,user);
//descripton
let des=document.createElement("p");
des.setAttribute("type","text");
des.setAttribute("id","p");
des.innerHTML=`Ex. try this names(michael,matthew,jane)`
formgroup.append(head,des,user);

formgroup.append(input,button);
//table creation
let table=document.createElement("table");
table.setAttribute("class","table table-bordered table-dark")
let thead=document.createElement("thead");
let thead_tr=document.createElement("tr"); 
let th_country=document.createElement("th");
th_country.innerHTML="country";
th_country.setAttribute("scope","col");

let th_pro=document.createElement("th");
th_pro.innerHTML="probability";
th_pro.setAttribute("scope","col")
//table body

let tbody=document.createElement("tbody");
tbody.setAttribute("id","tbody")

document.body.append(div);
div.append(formgroup);
formgroup.append(table);
table.append(thead);
thead.append(thead_tr);
thead_tr.append(th_country);
thead_tr.append(th_pro)
table.append(tbody);


async function foo(){
var count =0;
try {
let name=document.getElementById("main").value.toLowerCase();;
console.log(name);
let res= await fetch(`https://api.nationalize.io?name=${name}`);
let result=await res.json();
//functions
result.country.filter(search)
if(name==="")
{
  alert("Please Enter Valid Input")
}
 function search(num,index,arr)
{
 
  if(count<2)
  {
    let tbody_tr=document.createElement("tr");
        tbody.append(tbody_tr);
          let c=document.createElement("td");
          c.setAttribute("class","text-center");
          c.innerHTML=num.country_id;
          tbody_tr.append(c);
         
          let p=document.createElement("td");
          p.setAttribute("class","text-center");
          p.innerHTML=num.probability;
          tbody_tr.append(p);
  }
  count++
 
}
}
catch (error) {
  console.log(error);
}

}
