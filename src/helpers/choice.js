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
  else {
    return;
  }
  return newList;
}

const lowHigh = (list) => {

  let sortedList = [];
  let index;

  while (list.length !== 0) {

    let smallestNum = list[0];

    for (let i = 0; i < list.length; i++) {
      if (!isNaN(list[i].price)) {
        if (smallestNum.price >= list[i].price) {
          smallestNum = list[i];
          index = i;
        }
      }
    }

    list.splice(index, 1);
    sortedList.push(smallestNum);
  }

  return sortedList;
}

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

const alphabetical = (list) => {

}
