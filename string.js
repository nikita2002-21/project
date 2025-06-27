const fruit = [
    { Name: "apple", count: 7 },
    { Name: "orange", count: 4 },
    { Name: "pineapple", count: 4 },
    { Name: "Mango", count: 2 },
     {Name:"Banana",count:1}]
console.log("Simple Array :", fruit)

function addFruits(FruitAdd) {
    const fruitFound = fruit.find(item => item.Name === FruitAdd.Name);
    if (fruitFound) {
        fruitFound.count += 1
    }
    else {
        fruit.push(FruitAdd)
    }
}
addFruits({ Name: "melon", count: 1 })
addFruits({ Name: "kiwi", count: 1 })
console.log("Before Updation", fruit)
addFruits({ Name: "Apple", count: 1 })
addFruits({ Name: "Papya", count: 1 })
addFruits({ Name: "watermelon", count: 1 })
console.log("After Updation", fruit)