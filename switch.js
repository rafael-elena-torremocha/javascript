var sayName = function (hero) {
  var realName = "No se quién es";

  var lowercase = hero.toLowerCase();

  switch (lowercase) {
    case "ironman":
      realName = "Tony Stark";
      break;
    case "hulk":
      realName = "Bruce Banner";
      break;
    case "spiderman":
      realName = "Peter Parker";
      break;
    case "capitan america":
      realName = "Steve Rogers";
      break;
    case "lobezno":
      realName = "Logan";
      break;
    case "tormenta":
      realName = "Ororo";
      break;
    case "fenix":
      realName = "Jean Grey";
      break;
    default:
      realName = "No encontrado";
      break;
  }

  return realName;
};

var result = sayName("ironmAn");
console.log(result);
