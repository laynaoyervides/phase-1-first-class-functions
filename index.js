function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    const namedFunction= function(){console.log("This is a named function callback");}
    return namedFunction;
    //make sure not to use the parenthesis to invoke the function, this is a common error
    //When you leave the parentheses off of a named function, you’re providing a reference to that function. 
    //When you include the parentheses, you’re running it.
    //The site below was helpful
    //https://gomakethings.com/how-to-use-named-functions-as-callbacks-in-your-javascript/

} 


function returnsAnAnonymousFunction() { 
    return function(){ console.log("Stretch! Work that core!")};
    
}
