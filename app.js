// // let a = [10, 20]
// // let b = [30, 40]
// // // let c = a.concat(b).concat(50).concat("ihunar")
// // let c = [...a, ...b,50,60,70,80]
// // console.log(c)

// let a = {
//     name: "iskillers",
//     email: "info@gmail.com",
// }
// let b = {
//     newName: "Ihunar",
//     phone: "03453525243",
// }
// console.log(a)
// console.log(b)
// let c = { ...a, ...b }
// console.log(c)


// let colors = ["red", "green", "yellow", "gray"]
// console.log(colors)
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// console.log(colors[3])
// console.log(">>>>>>>>Destructing<<<<<<<<<")
// let [red, green, yellow, gray] = colors;
// console.log(colors)
// console.log(red)
// console.log(green)
// console.log(gray)
// console.log(yellow)

// let bioData = {
//     name: "ABC",
//     age: 25,
//     gmail: "abc@gmail.com",
//     color:["red","green"]
// }
// console.log(bioData)
// console.log(">>>>>>>>>>Destructing<<<<<<<<")
// let {age,gmail,name,color:[red,green]} = bioData;
// console.log(gmail)
// console.log(name)
// console.log(age)
// console.log(red)
// console.log(green)


let colors = {
    red: "red",
    rgb: ["10,20,30", "50.125,65", { rgbColor: "45,5,65" }],
    hex: {
        hex1: "#fff",
        hex2: {
            gray: "gray",
            green: ["green"]
        },
        hex3: ["#000", '#54178']
    }
}
console.log(colors)

let { red, rgb, rgb: [first, second, { rgbColor }], hex, hex: { hex1, hex2, hex2: { gray, green: [greenColor] }, hex3, hex3: [colorCode1, colorCode2] } } = colors;
console.log(">>>>>>>>red<<<<<<<<")
console.log(red)

console.log(">>>>>>>>rgb<<<<<<<<")
console.log(rgb)
console.log("first....", first)
console.log("second....", second)
console.log("third...", rgbColor)

console.log(">>>>>>>>hex<<<<<<<<")
console.log(hex)
console.log("hex1", hex1)
console.log("hex2", hex2)
console.log(gray)
console.log(greenColor)
console.log("hex3", hex3)
console.log(colorCode1)
console.log(colorCode2)
