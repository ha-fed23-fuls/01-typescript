// 3 Skapa en variabel color som innehåller namnet på ett färg.Skriv en funktion som producerar en mening med variabeln.Om color till exempel är 'blå' ska programmet skriva ut: 'En blå bil'.Variabeln och funktionen ska ha type annotations; dvs du ska tala om vilka datatyper variabeln, parametern och returvärdet har.

let color: string
color = 'blå'
console.log( carSentence(color) )

function carSentence(carColor: string): string {
	// let sentence = 'En '
	// sentence += carColor
	// sentence += 'bil'
	// let sentence: string = 'En ' + carColor + 'bil'
	let sentence: string = `En ${carColor} bil`
	return sentence
	// console.log(`En ${carColor} bil`)
}


let xs: number[] = [1, 2, 5, 10]
let madness: any = 1
madness = 'hejsan'
madness = [1, 'hej', true]

interface Box {
	value: number;
}
let box: Box = { value: 55 }
console.log( box.value )
// box.name - funkar ej
