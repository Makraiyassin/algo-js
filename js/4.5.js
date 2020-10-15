let a = [1,1]
let b = [5,5]

function calcDistance(a, b){
    let dist = Math.sqrt((b[0]-a[0])**2 + (b[1]-a[1])**2);
    return dist;
}
console.log(calcDistance(a,b));
