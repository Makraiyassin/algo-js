

function factorial(a){
    if (a === 0)
    {
       return 1;
    }
     return a * factorial(a-1);

    //a = a*(a-1)*(a-2)*(a-3)*(a-4)...*1;
    //return a;
}
console.log(factorial(5));