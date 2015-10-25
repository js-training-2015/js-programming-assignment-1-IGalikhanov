function  solution1(A, B, C) 
{
    if(typeof(A) != "number") {alert("A must be number"); return;}
    if(typeof(B) != "number") {alert("B must be number"); return;}
    if(typeof(C) != "number") {alert("C must be number"); return;}
    if (C <= 0 ) {alert("It must be C > 0"); return;}
    if(A<B) {  return (B-A)/C;}
    else {alert("It must be В > A"); return;}
}
  
function solution2(A, B)
{ 
    if(typeof(A) != "number") {alert("A must be number"); return;}
    if(typeof(B) != "number") {alert("B must be number"); return;}
	if(A >= B) {alert("It must be A < B"); return;}
    var maxxor = 0;
    while (A < B)
    {
        var a1 = A + 1;
        while (a1 <= B)
        {
            var tempxor = A ^ a1;
            if (maxxor < tempxor) maxxor = tempxor;
            a1++;
        }
        A++;
    }	
    return maxxor;
}

var mindays = solution1(10,70,15);
var maxxor = solution2(1,4);
if(typeof(mindays) == "number") alert("min days " + mindays);
if(typeof(maxxor) == "number") alert("max xor " + maxxor);
