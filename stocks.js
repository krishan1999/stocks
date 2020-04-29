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
console.log(`Difference Hours: ${diff}`);
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
}

button.onclick = (e) => 
{

}

