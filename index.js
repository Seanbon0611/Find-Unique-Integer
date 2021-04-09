const findUnique = (a) => {
  //create hashmap
  const hashMap = {};
  //array that holds unique values
  const result = [];
  //iterate through array and count the frequency of each element
  //iterate through hashmap, if there are any values that are equal to 1, return
  for (let num of a) {
    if (hashMap[num]) {
      hashMap[num]++
    } else {
      hashMap[num] = 1
    }
  }
  for (let el in hashMap) {
    if (hashMap[el] === 1) {
      result.push(el)
    }
  }
  return result
}


findUnique([1,1,2,4,5,5,4])
findUnique([1,3,1,5,8,8,8,2])