1.Given an array. Write a recursive function that removes the first element and returns the given array. 
(without using arr.unshift(),assign second element to first, third element to second...)


function removeFirstElem(array){
    
   for (let i = 0; i < array.length-1; i++) {
       array[i]=array[i+1];
   }
    array.splice(array.length-1,1);
  return array;
}


2.Given an array of nested arrays. Write a recursive function that flattens it. 
(Hint create function that concats arrays).


function concatArr(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
             result = result.concat(concatArr(array[i]));
        }else{
            result.push(array[i]);
        }
    }
    return result;
}
3.Given an array and a number N.  Write a recursive function that rotates an array N places to the left.
 (Hint: to add element to the beginning use arr.unshift())


function recCircle(arr,n){ 
       
       if(n===0){
       	return;
       }
       arr.unshift(arr[arr.length-1])
       arr.pop()     
       recCircle(arr,n-1)
             
       return arr;

             
}
4.Given the list of the following readers:

[
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.


function checkReadStatus(array){
    let tempArr=[];
    for (let i = 0; i <array.length; i++) {
          if(typeof(array[i]==='object') && array[i]['readStatus']){
            
            tempArr.push(array[i]);
        }  
    }
    tempArr.sort(function(a,b){
    return a['percent']-b['percent'];
})

    
    return tempArr;
}


5.Implement “map” method for plain objects (same as Array map method.)


function objMap(fn){
    let result ={}
    for(let key in this){
        res[key] = fn(this[key]);
    }
    return result;
}