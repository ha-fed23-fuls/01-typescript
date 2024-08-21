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


// 4 Skriv en loop som kör 10 gånger. Du kan lägga den i en funktion för att få bättre struktur på koden. Loopen ska simulera ett trafikljus och därför omväxlande skriva ut "rött", "gult", "grönt" i den ordningen. En färg per varv i loopen.

function trafficLights(): void {
	let light: number = 0
	for( let i: number = 0; i < 10; i++ ) {
		if( light === 0 ) {
			console.log('rött')
		}
		else if( light === 1 ) {
			console.log('gult')
		}
		else if( light === 2 ) {
			console.log('grönt')
		}

		if( light === 2 ) light = 0
		else light++
	}

	// Alternativ: i % 3
}
trafficLights()


type UserSettings = {
	name: string;
	id: number;
	firstTime: boolean;
	favColor?: string;
}

let kajsa: UserSettings = {
	name: 'Kajsa Warg',
	id: 567,
	firstTime: false,
	favColor: 'pink'
}
let bamse: UserSettings = {
	name: 'Bamse',
	id: 12341,
	firstTime: true,
}


// 5 Skriv ett program som skriver ut talen 1 till 20 och om varje tal är udda eller jämnt.
function printNumbers(): void {
	for( let i:number=1; i<=20; i++ ) {
		if( i % 2 === 0 ) {
			console.log(i + ' är jämnt')
		}
		else {
			console.log(i + ' är udda')
		}
	}
}

printNumbers()


// 6 Pelle har 100 kronor. Varje dag köper Pelle en frukt för 7 kronor. Hur många dagar räcker pengarna? Bygg ett program som besvarar frågan.
function fruitCalculation(): void {
	let moneyLeft: number = 100
	const fruitPrice: number = 7
	let days: number
	for( days = 0; moneyLeft >= fruitPrice; days++ ) {
		moneyLeft -= fruitPrice
	}
	console.log(`Pengarna räckte i ${days} dagar.`)
}
fruitCalculation()
