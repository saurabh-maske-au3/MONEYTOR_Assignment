function removeDuplicates(array) {
    return array.reduce((acc, val)=> {
      !acc.includes(val) ? acc.push(val) : null;
      return acc;
    }, []);
  }
  console.log(removeDuplicates([1,2,3,3,4,5,5]))