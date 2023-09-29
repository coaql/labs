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

  const ob = menu.meals[i];
  const tr = document.createElement("tr");

  for(prop in ob)
  {
    d = document.createTextNode(ob[prop]);
    const td = document.createElement("td");
    td.appendChild(d);
    tr.appendChild(td);
  }
  document.getElementById("meals").appendChild(tr);

}
  

//button to add to cart
//cart
//dynamic trending items 
//filters
//fancy
