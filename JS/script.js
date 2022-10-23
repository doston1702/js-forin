let obj = {             //Тут сам объект
  city: "Samarkand",
  city2: "Tashkent",
};

console.warn("Я использовал массивы чтобы возможно было обращаться к словам");
console.warn("В основном был использован 'for in'");

let obj_keys = []       //Тут я создал массивы чтобы запихнуть ключи и значения
let obj_values = []

for (let item in obj) {         //А тут я запихнул в массивы эти значения и ключи
  obj_keys.push(item)     //Ключи
  obj_values.push(obj[item])    //Значения
}
console.log(obj_keys);      //А тут я вывел их на консоль чтобы проверить всё ли работает правильно
console.log(obj_values);

let result = `I love my ${obj_keys[0]}. My ${obj_keys[0]} is ${obj_values[0]}, but I am living in ${obj_values[1]}`   //А это конечный результат где я всё совместил

console.log(result);
document.write(`<h1>${result}</h1>`)