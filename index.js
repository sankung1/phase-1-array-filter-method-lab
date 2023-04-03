// Code your solution here

const findMatching = (names, string)=>{
    return names.filter(names => names.toUpperCase() === string.toUpperCase());
}

const fuzzyMatch = (drivers, string) =>{
    return drivers.filter(names => names[0].toUpperCase() === string[0].toUpperCase());
}

const matchName = (names, string) =>{
    return names.filter(names => names.name === string);

}