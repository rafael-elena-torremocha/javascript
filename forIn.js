var spiderman = {
    name: "Peter",
    surname: "Parker",
    state: "USA",
    ocupation: "Student"
}

for (var key in spiderman) {
    console.log("spiderman tiene "  + key + " con valor: " + spiderman[key]);
}