function myEach(collection, callback) {
if (Array.isArray(collection)) {
    collection.forEach((element) => {
        callback(element);
    })
} else if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
            callback(collection[key])
        }
    }
}
return collection
}
function myMap(collection, callback) {
const transformedArray = [];
if(Array.isArray(collection)) {
    for (let i = 0; i< collection.length; i++) {
        const transformedValue = callback(collection[i]);

        transformedArray.push(transformedValue);
    }
}  else if (typeof collection ==='object' && collection !== null) {
    for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
            const transformedValue = callback(collection[key]);
            transformedArray.push(transformedValue);
        }
    }
}   
return transformedArray;
}

function myReduce(collection, callback, acc) {
    // Check if a start value is provided
    let startIdx = 0;
    if (typeof acc === 'undefined') {
      // If no start value is provided, use the first element of the collection
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIdx = 1;
      } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        startIdx = 1;
      } else {
        throw new Error('Invalid collection');
      }
    }
  
    // Iterate through the collection starting from the appropriate index
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    } else {
      throw new Error('Invalid collection');
    }
  
    // Return the final value of the accumulator
    return acc;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      // Iterate through the array elements
      for (let i = 0; i < collection.length; i++) {
        // Apply the predicate function to each element
        if (predicate(collection[i])) {
          // Return the first element that passes the test
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      // Iterate through object properties using a for...in loop
      for (let key in collection) {
        // Check if the property is a direct property of the object
        if (collection.hasOwnProperty(key)) {
          // Apply the predicate function to each property value
          if (predicate(collection[key])) {
            // Return the first value that passes the test
            return collection[key];
          }
        }
      }
    }
  
    // If no value passes the test, return undefined
    return undefined;
  }
  function myFilter(collection, predicate) {
    const filteredArray = [];
  
    if (Array.isArray(collection)) {
      // Iterate through the array elements
      for (let i = 0; i < collection.length; i++) {
        // Apply the predicate function to each element
        if (predicate(collection[i])) {
          // Add the element to the filtered array if it passes the test
          filteredArray.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      // Iterate through object properties using a for...in loop
      for (let key in collection) {
        // Check if the property is a direct property of the object
        if (collection.hasOwnProperty(key)) {
          // Apply the predicate function to each property value
          if (predicate(collection[key])) {
            // Add the value to the filtered array if it passes the test
            filteredArray.push(collection[key]);
          }
        }
      }
    }
  
    // Return the filtered array
    return filteredArray;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      // Return the length of the array
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      // Count the number of object using a for...in loop
      let count = 0;
      for (let key in collection) {
        // Check if the property is a direct property of the object
        if (collection.hasOwnProperty(key)) {
          count++;
        }
      }
      return count;
    } else {
      throw new Error('Invalid collection');
    }
  }
  function myFirst(array, n) {
    if (n) {
      // Return the first n elements of the array
      return array.slice(0, n);
    } else {
      // Return the first element of the array
      return array[0];
    }
  }
  function myLast(array, n) {
    if (n) {
      // Return the last n elements of the array
      return array.slice(-n);
    } else {
      // Return the last element of the array
      return array[array.length - 1];
    }
  }

function myKeys(object) {
  // Create an empty array to store the property names
  const keysArray = [];

  // Iterate over object properties using a for...in loop
  for (let key in object) {
    // Check if the property is a direct property of the object
    if (object.hasOwnProperty(key)) {
      // Add the property name to the keysArray
      keysArray.push(key);
    }
  }

  // Return the array of property names
  return keysArray;
}
function myValues(object) {
    // Create an empty array to store the property values
    const valuesArray = [];
  
    // Iterate over object properties using a for...in loop
    for (let key in object) {
      // Check if the property is a direct property of the object
      if (object.hasOwnProperty(key)) {
        // Add the property value to the valuesArray
        valuesArray.push(object[key]);
      }
    }
  
    // Return the array of property values
    return valuesArray;
  }