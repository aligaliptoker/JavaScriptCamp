// ödevin 1. kısmı 
function findPrime(...numbers) {
   numbers.forEach(number =>{
    if (number <2 ) {
        return console.log(number + " is a prime number")
    }
    else if (number === 2 || number ===3 ){
        return console.log("numbers + is a prime ")
    }
    else{
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0){
                return console.log(number+ " is not a prime number")
            }
            
        }
        return console.log(number + " is a prime number ")
    }
  })
}
findPrime(4)
findPrime(11, 13, 15, 20, 23, 24, 32, 35, 37, 43, 56)



// ödevin 2. kısmı 
function arkadas(sayi1, sayi2){
    let sayi1Bolen = []
    let sayi2Bolen = []
    bolenBul(sayi1, sayi1Bolen)
    console.log("1. sayı bölenleri="+ sayi1Bolen)
bolenBul(sayi2, sayi2Bolen)
console.log(" 2.sayı bölenleri=" + sayi2Bolen)
if (sayi1 === bolenleriTopla(sayi2Bolen) && sayi2 === bolenleriTopla(sayi1Bolen)){
    console.log("arkadaş sayılar")
}
else{
    console.log("arkadaş sayı değillerdir")
}
}
function bolenBul(sayi, array){
    for(let i = 0; i < sayi; i++){
        if(sayi %i ===0) {
            array.push(i)
        }
    }
    return array
}



function bolenleriTopla(array){
    let toplam = 0 
    for (let h = 0; h < array.length; h++) {
        toplam = toplam + array[h]
    }
    return toplam
}
arkadas(220,284)
arkadas(25,23)

//ödevin 3. kısmı yukarıdaki bolenleriTopla ve bolenBul adlı fonksiyonları kullandım 

function mukemmelSayi(){
    let mukemmel = []

    for (let sayi = 0; sayi < 1000 ; sayi++) {
        let bolenler = []
        bolenBul(sayi, bolenler)

        if ( sayi === bolenleriTopla(bolenler)){
            mukemmel.push (sayi)
        }
    }
    return console.log("1000'e kadar olan mukemmel sayilar=" + mukemmel)
}
mukemmelSayi()



// ödevin 4. kısmı 

function asalSayilar(){
    let asallar = []
    for (let i = 0; i < 1000; i++) {
       if (asal(i)){
           asallar.push(i)
       }
        
    }
    return console.log("1000'e kadar olan asal sayilar:"+ asallar)
}
function asal(sayilar) {
    if (sayilar < 2){
        return false
    } 
    else {
        for (let t = 2; t < sayilar; t++) {
            if (sayilar %t === 0) {
                return false
            }
        }
    }
    return true 
}
asalSayilar()