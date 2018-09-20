<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪</title>
</head>
<body>
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  <script>
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // Array.prototype.filter()
    //You can insert 10 things in an aray and return 2, for example.
    // 1. Filter the list of inventors for those who were born in the 1500's
    let fifteen = inventors.filter(function(item){
      //many people just use singluar version of the array(inventor), instead of "item."
      if (item.year < 1600) {
        return true
      }
    });
    //ES6 version below, returns true.
    let fifteen = inventors.filter(item => (item.year < 1600))
    //print it
    console.log(fifteen)
    console.table(fifteen)//looks much nicer


    // Array.prototype.map()
    //Map takes in an array, does something ith it, then return array of thes ame length. Can think of it as  factory machine taking a raw material , stamping it out somehow, and kicks out theat thing.
    // 2. Give us an array of the inventors' first and last names
    let fullnames = inventors.map(item => `${item.first} +  ${item.last}`)//to avoid the sapcing issue between names.
    console.log(fullnames)

    // Array.prototype.sort()
    //SOrt works by comparing 2 items, is personA older than person B, return 1 and -1 to bubble these itms up and down.
    // 3. Sort the inventors by birthdate, oldest to youngest
    let ordered = inventors.sort(function(a,b) {
      if(a.year > b.year) {
        return 1;
      } else return -1;
      }
    })
    //Shorter version, ternary version, and ES6.
    let ordered = inventors.sort((a,b) => a.year > b.year? 1: -1)

    // Array.prototype.reduce()
    //Allows you to build something on every single one, kind of like a cleaner version of a "for loop"(example below).
    // 4. How many years did all the inventors live?

//for loop method
var totalYears = 0
for(var i=0; i<inventors.length; i++) {
  totalYears += inventors[i].year
}

//Reduce method
totalYears2 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
  //need to add "0" because the first time around doesnt have a total.
}, 0)
//Gives you a running total of what you reutned last time. It also gives you the inventor

    // 5. Sort the inventors by years lived
    let oldest = inventors.sort(function(a,b) {
      let lastGuy = a.passed - a.year;
      let nextGuy = b.passed - b.year;
      return lastGuy > nextGuy? 1: -1;
    });
    console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//Need to get the DOM elements out of the page. Use dev tools to inspect whatever contains this list.(mw-category)
let category = document.querySelector('.mw-category');
//need to then find the links within mw-category.
let links = Array.from(category.querySelectorAll('a'))
//convert the list of links to names, then filter it.
const de = links
.map(link => link.textContent)
.filter(streetName => streetName.includes('de'));

/* the original links variable wont wont work cuz its a Node list, need to convert to an array. Two ways to do this:
//1)
let links = /*wrap it in array.from*/ Array.from(category.querySelectorAll('a'))
//2)
//let links = /*ES6 spread operator to spread every single item into the array. takes every item OUT of something and put it into the containing array*/[...category.querySelectorAll('a')]

    // 7. sort Exercise
    //How do that without a nice object?
    // Sort the people alphabetically by last name

    let alpha = people.sort((lastOne, nextOne) => {
//all these people hav a comma and a "space". split on that. This gives us an array.
      //let parts = lastOne.split(', ')
      //rathre than an array, we can destructure this, rather than returning an array, can put them into their own variables.
      let [aLast, aFirst] = lastOne.split(', ');
      let [bLast, bFirst] = nextOne.split(', ')
      //console.log(last, first)
      return aLast > bLast ? 1 : -1;
    })
    console.log(alpha )


    // 8. Reduce Exercise
    //Very flexible method
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
//Step 1: //we need to start with an object
let transportation = data.reduce(function(obj, /*car, car, truck...*/item) {
  console.log(item)
  return obj
} {})
//Step 2:
let transportation = data.reduce(function(obj, item) {
  if(!obj[item]) {
  obj[item] = 0;
}
 obj[item]++;
  return obj
}, {});
  </script>
</body>
</html>
