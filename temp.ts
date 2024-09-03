
function isCorrect(s: string): false | Array<string |  [number, ...string[]]>{
  const firstCheck = /\(([^()]+?)\)(?:\d|\d?[+-])/g;
  const other:Array<[number, ...string[]]> = [];
  let m: RegExpExecArray;
  while((m = firstCheck.exec(s)) !== null){
    const tmp = isCorrect(m[1]) as Array<string>;
    if (!tmp)
        return false;
    other.push([parseInt(m.input.charAt(firstCheck.lastIndex - 1)), ...tmp.flat()]);
  }
  // console.log(s);
  s = s.split(/\([^()]+?\)(?:\d|\d?[+-])/g).join("|");
  const pattern = /[A-Z][a-z]?\d?[+\-]?(?:(?<=[+\-])\d?)?/g;
  const found:  Array<string |  [number, ...string[]]> = [];
  const indexes: Set<number> = new Set();
  for (let position = 0, tmp: RegExpExecArray = pattern.exec(s); tmp !== null; tmp = pattern.exec(s)){
    const index = s.indexOf("|", position);
    indexes.add(index);
    if (index != -1 && index < tmp.index){
      found.push(other.shift());
      position = tmp.index;
    }
    found.push(tmp[0]);
  }
  s.match(/\|/g)?.forEach((element, index) => {
    found.push(other[index])
  });
  s = s.split("").filter((d, i) => !indexes.has(i)).join("");
  pattern.exec(s);
  function accumulateLength(accum: number, currentValue: {length: number}){
    return accum + currentValue.length;
  }
  const foundLength = found.reduce(accumulateLength, 0);
  
  if(!(foundLength == s.length + other.reduce(accumulateLength, 0)))
    return false;
  return found
}
console.log(isCorrect("CU(OH)-"))