
var sayRealName = function(hero) {
  var realName = 'No se quién es';
  var lowercase = hero.toLowerCase();

  if (lowercase === "ironman") {
    realName = "Tony Stark";
  } else if (lowercase === "hulk") {
    realName = "Bruce Banner";
  } else if (lowercase === "spiderman") {
    realName = "Peter Parker";
  } else if (lowercase === "capitan america") {
    realName = "Steve Rogers";
  } else if (lowercase === "lobezno") {
    realName = "Logan";
  } else if (lowercase === "tormenta") {
    realName = "Ororo";
  } else if (lowercase === "fenix") {
    realName = "Jean Grey";
  } 
  return realName;
};

var result = sayRealName("hulK");
console.log(result);


/*
    CTRL + D  
    can select al words with same syntaxis
*/