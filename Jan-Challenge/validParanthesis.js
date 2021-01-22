var isValid = function(s) {
    let openPar=['[','{','('];
    let closedPar=[']','}',')'];
    let stack= [];
    let valid = false;
    for(let i=0;i<s.length;i++){
    	if(openPar.includes(s[i])){
      	stack.push(s[i]);
      }
      if(closedPar.includes(s[i])){
      	if(stack.length>0){
        	if(!isValid(stack.pop(),s[i])){
          	valid = false;
            break;
            }
            else
          		valid = true;
          	
        	}
          else{
          	valid = false;
          	break;
            }
        }
      
    }
    if(stack.length>0){
        valid = false;
    }
    
    function isValid(s1,s2){
    	if(s1==='[' && s2 ===']')
      	return true;
      else if(s1==='{' && s2==='}')
      	return true;
      else if(s1==='(' && s2 ===')')
      	return true;
      else
      	return false;
    }
    return valid;
};
var isValid1 = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            }
            else return false;
        }
    }
    return arr.length === 0 ? true : false;
};
let s= "(){}}{";//'{([])}';
console.log(isValid(s));