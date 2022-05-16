1.

2.Դեռ չի ստացվում Դավիդ ջան-նորից կփորձեմ

3. Write a recursive function to determine whether all digits of the number are odd or
not.
function oddOrNot(number,i=0){ 
    let str = number+'';
    let arrStr=str.split();
    if(i===arrStr.length){
        return true;
    }
    if(arrStr[i]%2===0){
        return console.log(false);
    }
    
    return oddOrNot(number,i+1);
}

4. Given an array of numbers. Write a recursive function to find its minimal positive element. 
(if such element does not exist, return -1)․


function findMinPos(arr,i=0){
    arr.sort((a,b)=>a-b);
    if( arr[i]>-1){
        return arr[i];
    }  
    if(i===arr.length){
        return -1;
    }
    
    return findMinPos(arr,i+1);
}