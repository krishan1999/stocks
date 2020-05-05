// if(!confirm("Are you over 18"))
// {
//  window.close();
// }

// if(prompt("Please enter your age")<18)
// {
// 	window.close();
// }
/*let val= new Date(2020,3,26);
let val2= new Date(2020,3,27);


let dif= val2.getTime()- val.getTime();
let diff =dif/1000/60/60/24;
console.log(`Difference ,cdHours: ${diff}`);
console.log(val.toJSON());
console.log(val.toLocaleString());

console.log(val.toDateString());
console.log(val.toTimeString());
console.log(val.toUTCString());*/

/*let time;
let timer= document.querySelector(".timer");
let output= document.getElementsByClassName("output")[0];


timer.onclick= (e)=> 
{
let date = new Date();
time = date.getTime();
update(time);
//document.getElementsByTagName("body")[0].appendChild(createTextNode("working"));
}

const update= (time) => { 
 // debugger;
    let diff= ((new Date()).getTime()-time)/1000;
	output.value=  diff;
	if(diff<1000)
		(function update(time)
		{
			update(time);
		})();
   
}*/

let image= document.getElementsByClassName('image')[0];
let button= document.getElementsByClassName('login')[0];
let ul= document.getElementsByClassName("items")[0];

image.onclick = (e) => 
{
	ul.classList.toggle("mobile");
    //document.getElementsByTagName("body")[0].style.background=""
} 

button.onclick = (e) => 
{

}


//part 2
let stock= document.querySelector(".stock");
let enter= document.querySelector(".enter");
let output= document.querySelector(".output");


const insert= (val) =>{

	let element= document.createElement("li");
	element.classList.add("output-item");
	let text= document.createTextNode(`${val}`);
    let button= document.createElement("button");
    button.classList.add("cancel");
    button.appendChild(document.createTextNode("X"));
	element.appendChild(text);
	element.appendChild(button);
	output.appendChild(element);
}

const del= (e)=>
{

	if(e.target.classList.contains("cancel"))
	{
			if(confirm("Please confirm the deletion"))
      {
		let item= e.target.parentElement;
        output.removeChild(item);
      }
	}
}

function repeated(val)
{
	let ans=0;
   let childArr=Array.from(output.children);
    childArr.forEach((val2)=> 
    	{
        let text= val2.textContent.substring(0,val2.textContent.length-1);	
    	 if(text==val)
    	 {
    	 	ans=1;
    	 }
        }); 
    

if(ans==0)
    return false;
else
	return true;

}

let isEmpty = (val) => val=="";


enter.onclick= (e) =>
{
let val=stock.value;


    if(isEmpty(val))
    {
       alert("The field is empty");
    }
	else if(repeated(val))
	{
		alert(`${val.toUpperCase()} is already in the list`);
	      stock.value="";     
	}
	else
	{
		insert(val);
        stock.value="";
	}

}

stock.onkeyup= (e)=>
{
	let val=e.target.value;
	
    if(e.which==13){

		
    if(isEmpty(val))
    {
       alert("The field is empty");
    }
	else if(repeated(val))
	{
		alert(`${val.toUpperCase()} is already in the list`);
	      e.target.value="";   
	}
	else
	{
		insert(e.target.value);
		e.target.value="";
	}
		
	}
}

output.onclick = (e) =>
{  

 del(e);

}