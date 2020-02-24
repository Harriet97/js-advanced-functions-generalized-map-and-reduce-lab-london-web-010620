// Add your functions here
const map = (sourceArray, func) => {
    return sourceArray.map(element => func(element));
  };

  const reduce = (sourceArray, func, startingValue = 0) => {
    if (startingValue) {
    return sourceArray.reduce(func, startingValue)
    } else {
        return sourceArray.reduce(func)
    };
  };

  
 
