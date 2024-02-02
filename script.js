//Double Values Solution
function doubleValues(array) {
  let newArray = [];
  //iterate over ever array value
  array.forEach((val) => {
    //Double Each Value
    newArray.push(val * 2);
  });
  // Return New Array
  return newArray;
}

//Even Value Solution
function onlyEvenValues(array) {
  let newArray = [];
  array.forEach((val) => {
    //Check for Even Values.
    if (val % 2 === 0) {
      newArray.push(val);
    }
  });
  return newArray;
}

//First And Last Value
function showFirstAndLast(array) {
  let newArray = [];
  array.forEach((val) => {
    newArray.push(val[0] + val[val.length - 1]);
  });
  return newArray;
}

//add key and value to Array
function addKeyAndValue(array, key, value) {
  array.forEach((val) => {
    val[key] = value;
  });
  return array;
}

//Vowel Count of a string
function vowelCount(str) {
  let testArray = str.split("");
  let Obj = {};
  const vowels = "aeiou";

  testArray.forEach((letter) => {
    let lowerCaseLeter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCaseLeter]) {
        obj[lowerCaseLeter]++;
      } else {
        obj[lowerCaseLeter] = 1;
      }
    }
  });
  return obj;
}

//Map Array Functions

//doubleValuesWiteMap
function doubleValuesWithMap(array) {
  return array.map((val) => {
    return val * 2;
  });
}

//valTimesIndex
function valTimesIndex(array) {
  return array.map((val, indx) => {
    return val * indx;
  });
}

//extractKey
function extractKey(array, key) {
  return array.map((val) => {
    return val[key];
  });
}

//Extract Full Name
function extractFullName(array) {
  return array.map((val) => {
    return val.first + " " + val.last;
  });
}

//Filter Functions

//filterByValue
function filterByValue(array, key) {
  return array.filter((val) => {
    return val[key] !== undefined;
  });
}

//find
function find(array, searchVal) {
  return array.filter((val) => {
    return val === searchVal;
  })[0];
}

//find in Object
function findInObj(array, key, searchVal) {
  return array.filter((val) => {
    return val[key] === searchVal;
  })[0];
}

//Remove Vowels
function removeVowels(str) {
  //Vowels Variable
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter((val) => {
      return vowels.indexOf(val === -1);
    })
    .join("");
}

//Double Odd Numbers
function doubleOddNumbers(array) {
  return array
    .filter((val) => {
      return val % 2 !== 0;
    })
    .map((val) => {
      return val * 2;
    });
}
