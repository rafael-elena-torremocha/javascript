
var avengers = ["Spiderman", "Hulk", "Antman", "Ironman", "", "Deadpool"];
var numbers = [4, 1, 5, 7, 2, 9, 0, 8, 3, 6];
 
for(var i = 0; i <= avengers.length; i++)
{
    if(avengers[i] == 'Antman')
    {
        avengers[i] = 'Lobezno';
    };
}


console.log(avengers);

for(var i = 0; i <= avengers.length; i++)
{
    if(avengers[i] == 'Ironman')
    {
        avengers[i] = 'Penelope';
    } else if (avengers[i] == 'Deadpool')
    {
        avengers[i] = 'Kakarot';
    } else if (avengers[i] == "")
    {   
        avengers[i] = 'Vision';
        avengers.push('Capitan America')
    };

}

console.log(avengers);


for(var i = 0; i <= numbers.length; i++)
{
    numbers.sort()
    numbers.reverse()
}

console.log(numbers);

/*
    FiraCode, para juntar los operadores y verlos mas guays.
*/

