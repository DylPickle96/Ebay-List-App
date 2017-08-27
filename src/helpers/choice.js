// this exposed function calls the correct function
// based on the user's choice
export const choiceParser = (list, choice) => {

  let newList;

  if (choice === 'Low to High') {
    newList = lowHigh(list);
  }
  else if (choice === 'High to Low') {
    newList = highLow(list);
  }
  else if (choice === 'Alphabetical Order') {
    newList = alphabetical(list);
  }
  else if (choice === 'Oldest to Newest') {
    newList = sortByDate(list);
  }
  else if (choice === 'Newest to Oldest') {
    newList = sortByDate(list);
    newList = newList.reverse();
  }
  else {
    return;
  }
  return newList;
}

const lowHigh = (list) => {
  let sortedList = [];
  let index;

  // we loop until our original list has no more elements left
  while (list.length !== 0) {

    //default our target as the first position in the list
    let smallestNum = list[0];

    // if it's a number and if that number is smaller than the
    // current smallest set that number to be our smallestNum
    // we repeat this over the whole list
    for (let i = 0; i < list.length; i++) {
      if (!isNaN(list[i].price)) {
        if (smallestNum.price >= list[i].price) {
          smallestNum = list[i];
          index = i;
        }
      }
    }

    // once done we push that object to the sortedList and splice
    // the list at it's index removing just that one object
    list.splice(index, 1);
    sortedList.push(smallestNum);
  }

  return sortedList;
}

// inverse of the low to high function
const highLow = (list) => {
  let sortedList = [];
  let index;

  while (list.length !== 0) {
    let largestNum = list[0];

    for (let i = 0; i < list.length; i++) {
      if (!isNaN(list[i].price)) {
        if (largestNum.price <= list[i].price) {
          largestNum = list[i];
          index = i;
        }
      }
    }

    list.splice(index, 1);
    sortedList.push(largestNum);
  }

  return sortedList;
}

// sort the list alphabetically
const alphabetical = (list) => {
  let sortedList = [];
  let sortedTitles = [];

  // we remove all titles from the original list
  for (let i = 0; i < list.length; i++) {
    sortedTitles.push(list[i].title);
  }

  // sort the titles
  sortedTitles.sort();

  // if the sortedTitle matches one of the titles in the
  // original list we push that to our new sortedList
  for (let i = 0; i < sortedTitles.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (sortedTitles[i] === list[j].title) {
        sortedList.push(list[j]);
      }
    }
  }
  return sortedList;
}

const sortByDate = (list) => {
  let times = [];
  let sortedList = [];

  // grab all dates in the list
  for (let i = 0; i < list.length; i++) {
    times.push(list[i].startdate);
  }

  // sort a and b that if a is smaller than
  // b sort a as an older date
  times.sort(function (a, b) {
    return new Date(a) - new Date(b);
  });

  // push the correct object if the current time
  // matches the objects time
  for (let i = 0; i < times.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (times[i] === list[j].startdate) {
        sortedList.push(list[j]);
        break;
      }
    }
  }

  return sortedList;

}
