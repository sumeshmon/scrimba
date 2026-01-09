function outerFunction(param){
    const outerVariable = 'I am from outer function'
    function innerFunction(){
        console.log(param);
        console.log(outerVariable); 
    }
    return innerFunction
}
const closure = outerFunction('I am argument')
closure()