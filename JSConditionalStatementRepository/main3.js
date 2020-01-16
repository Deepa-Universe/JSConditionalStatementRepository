//If Else Statement

let numValue10 = 10;
let numValue20 = 20;

if(numValue10 == numValue20)
{
    console.log("Value1 is equal to Value2");
}
else
{
    console.log("Value1 is not equal to Value2");
}


// == Comparing operator
let numValue3 = 10;
let strValue4 = "10";

if(numValue3 == strValue4) //Since JS is volatile and dynamic language, JS interpreter understands the datatype and values at runtime
{
    console.log("Value3 is equal to Value4"); //In this case data values are same but data types are different, yet it prints they are same 
}
else
{
    console.log("Value3 is not equal to Value4");
}

// === Comparing operator (Comparing operator)
let numValue5 = 10;
let strValue6 = "10";

//To overcome the above issue === is introduced
if(numValue5 === strValue6) //Since JS is volatile and dynamic language, JS interpreter understands the datatype and values at runtime
{
    console.log("Value5 is equal to Value6"); 
}
else
{
    console.log("Value5 is not equal to Value6"); //check strict type
}


//Ternary Operator 
let numValue7 = 55;

let resultTernary = (numValue7 % 2 === 0) ? "This is Even" : "This is Odd"; //=== is always the best practice to use for comparisons
console.log(resultTernary);


// <  <=
let numValue8 = 111;
let numValue9 = 222;

let numValue1 = 111;

if(numValue8 < numValue9)
{
    console.log("Value1 (111) is lesser than Value2 (222)"); //Less Than
}
else
{
    console.log("Value1 is greater than Value2");
}

if(numValue8 <= numValue1)
{
    console.log("Value1 is less than or equal to Value2");
}


// > >=

if(numValue8 > numValue9){ 
    console.log(true);
}
else
{
    console.log(false);
}

if(numValue8 >= numValue9){ 
    console.log(true);
}
else
{
    console.log(false);
}

// !=
let numValue2 = 20;
if(numValue1!=numValue2)
{
    console.log(true);
}
else
{
    console.log(false);
}

let strValue = "20";
if(numValue2 !== strValue) //works
{
    console.log("YES");
}
else
{
    console.log("NO");
}


let strValue101="Deepak";
let strValue111="Deepak----";
let strValue112="Deepa";

if(strValue101 >= strValue111)
{
    console.log(true); //true
}
else if(strValue101 !== strValue112)
{
    console.log(false);
}

strValue101 = "Deepa ";
strValue112 = "ABCDE ";   //Here it is considering the length of the string. 

if(strValue101 >= strValue112)
{
    console.log(true + "-length"); //true
}
else if(strValue101 !== strValue112)
{
    console.log(false);
}