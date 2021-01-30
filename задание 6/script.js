let sumPrice = 0;
let count = 0;

function addCart(elem) {
	let name = elem.parentNode.querySelector("h3").innerHTML;
	let price = elem.parentNode.querySelector("p").innerHTML;
	let p = document.createElement("p");
	sumPrice += Number(price);
	count++;
	p.innerHTML = `${name} - ${price} ₽`;
	document.querySelector(".count").innerHTML = count;
	document.querySelector(".sum-price").innerHTML = sumPrice;
	document.querySelector(".cart").appendChild(p);
}
