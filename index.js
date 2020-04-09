var cake = {
	name: "German Chocolate Cake",
	ingredients: ["eggs", "flour", "oil", "chocolate", "sugar", "butter"],
	topping: "coconut frosting",
	bakeTemp: "425 degrees",
	bakeTime: "45 minutes",
	customer: "Tommy",
	decorate: function(updateFunction) {
		const status = "Decorating with " + this.topping + ". Ready to eat soon!"

		updateFunction(status)
		setTimeout(() => updateFunction(serve.apply(this, ["Happy Eating!", this.customer])), 2000)
	}
}

var pie = {
	name: "Apple Pie",
	ingredients: ["apples", "flour", "eggs", "butter", "sugar"],
	topping: "streusel",
	bakeTemp: "350 degrees",
	bakeTime: "75 minutes",
	customer: "Tammy"
}

function makeCake() {
	const updateCakeStatus = updateStatus.bind(this)

	mix.call(cake, updateCakeStatus)
}

function makePie() {
	const updatePieStatus = updateStatus.bind(this);

	pie.decorate = cake.decorate.bind(pie);
	mix.call(pie, updatePieStatus);
}

function updateStatus(statusText) {
	this.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
	const status = "Baking at " + this.bakeTemp + " for " + this.bakeTime

	setTimeout(() => cool.call(this, updateFunction), 2000);
	updateFunction(status);
}

function mix(updateFunction) {
	const status = "Mixing " + this.ingredients.join(", ")

	setTimeout(() => bake.call(this, updateFunction), 2000);
	updateFunction(status);
}

function cool(updateFunction) {
	const status = "It has to cool! Hands off!"

	setTimeout(() => this.decorate(updateFunction), 2000);
	updateFunction(status);
}

function makeDessert() {
	if (this.parentElement.id === "cake") {makeCake.call(this.parentElement)};
	if (this.parentElement.id === "pie") {makePie.call(this.parentElement)};
}

function serve(message, customer) {
	return (customer + ", your " + this.name + " is ready to eat! " + message)
}

document.addEventListener("DOMContentLoaded", function(event) {
	const cookLinks = document.getElementsByClassName("js-make")

	for (var i = 0; i < cookLinks.length; i++) {
		cookLinks[i].addEventListener("click", makeDessert)
	}
})
