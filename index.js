// Code your solution here
const findMatching = (arr, name) => {
    return arr.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (arr, name) =>{
    return arr.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

const matchName = (arr, arg) =>{
    return arr.filter(driver => driver.name.toLowerCase() === arg.toLowerCase())
}