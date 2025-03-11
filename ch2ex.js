for(n=1;n<101;n=n+1){
    if(n%3==0 && n%5==0){
        console.log("fizzbuzz")
    }
    elseif(n%5==0) {
        console.log("buzz")
    }
    elseif(n%3==0) {
        console.log("fizz")
    }
    else{
         console.log(n)
    }
}