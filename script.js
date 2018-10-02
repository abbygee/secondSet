function firstLast6(array){
    var numbers = array;
    var length = array.length;
    var check = numbers.lastIndexOf(6);

    if(check == 0 || check == (length - 1)){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    var check = array.includes(2);
    var checkAgain = array.includes(3);

    if(check == true || checkAgain == true){
        return true;
    }else{
        return false;
    }
}

function fix23(array){

    for(var i = 0; i < array.length; i++){
        if(array[i] == 2){
            if(array[i+1] == 3){
                array.splice(i+1, 1, 0);

            }
        }
    }
    return array;
}

function countYZ(str){
    var string = str.toLocaleLowerCase();
    var sum = 0;

    for(var i = 0; i < string.length; i++){
        if(string[i] == " "){
            if(string[i-1] == "z"){
                sum++;
            }
            if(string[i-1] == "y"){
                sum++;
            }
        }
    }
    if(string.endsWith("y")){
        sum++
    }
    if(string.endsWith("z")){
        sum++;
    }
    return sum;
}

function endOther(string1, string2){
    var first = string1.toLocaleLowerCase();
    var second = string2.toLocaleLowerCase();

    if(first.includes(second)){
        if(first.endsWith(second)){
            return true;
        }
    }

    if(second.includes(first)){
        if(second.endsWith(first)){
            return true;
        }
    }

    if(first != second){
        return false;
    }
}

function starOut(string){
    var newString = " ";
    for(var i = 0; i < string.length; i++){
        if(string[i] != "*" && string[i+1] != "*" && string[i-1] != "*"){
            newString = newString + string[i];
        }
    }
    return newString;
}

function getSandwich(string){
    var bread1 = string.indexOf("bread");
    var bread2 = string.lastIndexOf("bread");

    if(string.includes("bread")==false){
        return "";
    }

    var newString = string.slice(bread1 + 5, bread2);
    return newString;
}

function canBalance(array){
    var totalSum = 0;
    var leftSide = 0;

    for(var n = 0; n < array.length; n++){
        totalSum += array[n];
    }
    var result = false;

    for(var i = 0; i < array.length; i++) {
        leftSide += array[i];
        totalSum -= array[i];
        if (totalSum == leftSide) {
            result = true;
        }
    }

    return result;
}

function countClumps(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i+1] && array[i] != array[i-1]){
            sum++;
        }
    }
    return sum;
}

function evenlySpaced(a, b, c){
    var result = false

    if(a>b && b>c){
        if(a-b == b-c){
            result = true;
        }
    }

    if(a>c && c>b){
        if(a-c == c-b){
            result = true;
        }
    }

    if(b>c && c>a){
        if(b-c == c-a){
            result = true;
        }
    }

    if(b>a && a>c){
        if(b-a == a-c){
            result = true;
        }
    }

    if(c>a && a>b){
        if(c-a == a-b){
            result = true;
        }
    }

    if(c>b && b>a){
        if(c-b == b-a){
            result = true;
        }
    }

    if(a==b && b==c){
        result = true;
    }

    return result;
}



function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

