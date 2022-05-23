1.   Create a function that builds a tree.
Դավիդ ջան սրանից առաջ չի ստացվում գնալ:Նորից կփորձեմ։

function tTree(arr,count = 0){
    
    let tree = {};
        if(count ===arr.length){
            return tree;
        }
        if (arr[count].id === 'root' ){
            tree[`${arr[count].id}`] = {};
            for (let i = 0; i < arr[count].children.length; i++) {
               tree[`${arr[count].id}`][`${arr[count].children[i]}`]={}
            }
                count++;
     }
    return tree
      
    
}
2. Write a JavaScript function to get all possible subsets of given length of the given array.
Assume that all elements in the array are unique


3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.
function delay(fn, ms) {
    return function(...args){  
         setTimeout(()=>{
            fn.apply(this,args);
        },ms);
    }
}

4.   Implement Debounce decorator
function debounce(fn, delay) {
 let timer;
    return function(...args){
        clearTimeout(timer);
        time = setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    }
    
}