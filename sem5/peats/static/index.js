//dynamic menu listing 
menu = {
	"meals":[
	{id:1, name:"tea", con:0, rate:12},
	{id:2, name:"coffee", con:0, rate:12},
	{id:3, name:"latte", con:0, rate:12}
	]
};

for(i = 0, n = menu.meals; i < n.length; i++)
{

  //loop arr of OB
    //create <tr>
    //loop properties of OB
      //extract porperty into d
      //create <td>
      //append d -> <td>
      //append <td> -> <tr> 
    //add <tr> to <tbody>
  
  const ob = menu.meals[i];
  const tr = document.createElement("tr");

  for(prop in ob)
  {
    d = document.createTextNode(ob[prop]);
    const td = document.createElement("td");
    td.appendChild(d);
    tr.appendChild(td);
  }
  const add_bt = document.createElement("button");
  add_bt.innerHTML = "+";
  add_bt.style.color = "green";

  const count = document.createElement("b");
  count.innerHTML = "C";
  count.style.margin = "10px";

  const sub_bt = document.createElement("button");
  sub_bt.innerHTML = "-";
  sub_bt.style.color = "red";

  const td = document.createElement("td");
  td.appendChild(sub_bt);
  td.appendChild(count);
  td.appendChild(add_bt);
  tr.appendChild(td);
  if(i%2 == 0)
  document.getElementById("meals").appendChild(tr).style.color = "yellow";
  else
  document.getElementById("meals").appendChild(tr).style.color = "cyan";


}
  

//button to add to cart
//cart
//dynamic trending items 
//filters
//fancy
