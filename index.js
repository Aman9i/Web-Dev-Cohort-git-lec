function add(a,b){
    return a+b 
}
add(2,5)
add(10,23)
add(10,40)


function sub(a,b){
    if(!(a>b)) throw new Error ('number must be greater than b')
    return a-b
}

sub(20,10)

function multiply(a,b){
    return a*b
}

multiply(2,5)
multiply(5,5)
multiply(24,24)

