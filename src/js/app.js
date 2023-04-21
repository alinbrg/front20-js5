// 1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს.
function getPowerOfNumber(num) {
	// const pow = Math.pow(num, 2)
	return num * num;
}

// console.log(getPowerOfNumber(5));
// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.
function getPriceAfterSale(startPrice, salePercent) {
	const priceAfterSale = startPrice - startPrice * (salePercent / 100);
	return Math.round(startPrice * (1 - salePercent / 100));
}

// console.log(getPriceAfterSale(1000, 10));
// 3.Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.Math.floor() - ამრგვალებს რიცხვს ნაკლებობით, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// Math.ceil()
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function getRandonNumber() {
	return Math.round(Math.random() * 100);
}

// console.log(getRandonNumber());
// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს ამ სტრინგის სიგრძეს (თუ რამდენი სიმბოლოსგან შედგება)

function getCharactersNum(text) {
	// console.log(text.split(" ").join(""));
	return text.length;
}

// console.log(getCharactersNum("example    text"));

// 5. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი app.js სადაც გვაქვს ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის rate მნიშვნელობაც არის უმცირესი
const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

function getLowestRateCurrency(arr) {
	const sortedArr = arr.sort((a, b) => {
		return a.rate - b.rate;
	});
	// console.log(sortedArr);
	return sortedArr[0];
}

// console.log(getLowestRateCurrency(currencies));

// DOM
// select
const section = document.querySelector("section");
const button = document.getElementById("button");
const titles = document.querySelectorAll(".title");
const link = section.querySelector(".link");
const currenciesDiv = document.querySelector(".currencies");
// console.log(link);

// create
const divEl = document.createElement("div");
const divEl2 = document.createElement("div");
divEl.textContent = "some text";

// titles[0].remove();

// append
section.append(divEl2);
titles[2].insertAdjacentElement("afterend", divEl);
// console.log(divEl);

// text, html
divEl.innerText = "<p>example text</p>";
divEl2.innerHTML = "<p>example <span>text</span></p>";

// style
// button.style.display = "block";
// button.style.backgroundColor = "red";

// classes
button.classList.remove("btn");
button.classList.add("green");
button.classList.toggle("green");

// attributes

// console.log(link.getAttribute("href"), link.href);

link.setAttribute("id", "link");

function callback(event) {
	event.stopPropagation();
	// console.log(event.target);
	button.classList.toggle("green");
	divEl.innerText = "new text";
	renderCurrencies();
}

button.addEventListener("click", callback);

link.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("a tag clicked");
});

function renderCurrencies() {
	const currenciesHTML = currencies.map((curr) => {
		return `
		<div class="card">
			<h3>title: ${curr.name}</h3>
			<h3>rate: ${curr.rate}</h3>
		</div>
		`;
	});

	console.log(currenciesHTML.join(""));
	currenciesDiv.innerHTML = currenciesHTML.join("");

	// add event listeners
}
