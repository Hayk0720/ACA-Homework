1. Get array of node ids from tree (keys).

function printkeys(obj,a=[]) {
      if(Object.keys(obj).length===0){
            return a;
        }
    
    for(let key in obj){
      
            a.push(key)
         printkeys(obj[key],a);

    }
    a.sort((a,b)=>a-b);
    return a;
}


printkeys(tree)
(7) ['0', '1', '2', '3', '4', '5', '6']

2. Get array of nodes from tree.

function printkeys(obj,a=[],b={}) {
    
      if(a.length===7){
            return a;
        }
    for(let key in obj){
                 //c.push(obj[key])
        for(let k in key){
        b={
                  ['id']:key,
                 ['children']:Object.keys(obj[key]),
              };
        }
    }
    
    for(let key in obj){
        
            
             
       
    
            a.push(b);
         printkeys(obj[key],a,b);

    }
    return a;
}

3. Implement binary search. 
First you need to research binary search WITHOUT the implementation itself.

let binSearch = function(arr,target){
    
    let left = 0;
    let right = arr.length-1;
    let mid;
    while(left <= right){
        mid = Math.round((right-left)/2)+left;

        if(target === arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            right = mid-1;
        }else{
            left = mid+1;
        }
        
    }
    return -1;
}

let array = a.sort((a,b)=> a-b);
binSearch(array,x)