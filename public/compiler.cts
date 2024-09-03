require("mathjax").init({
  loader: {load: ['input/asciimath', "output/chtml"]}
}).then((MathJax) => {
  const mml = MathJax.asciimath2mml('2x^2', {display: true});
  console.log(mml);
}).catch((err) => console.log(err.message));

function isCorrect(s: string): false | Array<string>{
  const other:Array<string> = [];
  if (!isNaN(parseInt(s.charAt(0)))){
    other.push(s.charAt(0));
    s = s.substring(1)
    if (s.length != 1 && s.charAt(2) == "("){
        if (s.charAt(s.length - 1) != "(")
          return false;
        s = s.substring(1, s.length - 1);
    }
  }
  const pattern = /[A-Z][a-z]?\d?[+\-]?(?:(?<=[+\-])\d?)?/g;
  let found = s.match(pattern);
  if (!found)
    return false;
  const foundLength = found.reduce((accum, currentValue) => accum + currentValue.length, 0);
  found.push(...other);
  return (foundLength == s.length) && found;  
}
function compiler(text: string){
 let el = isCorrect(text);
  if (el){
    el.forEach(e =>{

    })
  }else{
    
  }
}
