function cubeNumber(number) {
    if (typeof number != "number")
        return "Input is incorrect.\nInput should be a number";
    return number * number * number;
}


function matchFinder(string1, string2) {
    if (typeof string1 != "string" || typeof string2 != "string")
        return "Input is incorrect. \nInput should be string.";

    if (string1.indexOf(string2) != -1)
        return true;
    return false;
}


function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0)
        return "Invalid Input";
    else if (arr[0] == arr[1])
        return "equal";
    else if (arr[0] < arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }

    return arr;
}


function findAddress(obj) {
    if (!address.hasOwnProperty("street"))
        address.street = "__";
    if (!address.hasOwnProperty("house"))
        address.house = "__";
    if (!address.hasOwnProperty("society"))
        address.society = "__";

    return address.street + "," + address.house + "," + address.society;
}


function canPay(changeArray, totalDue) {

    if (changeArray.length == 0)
        return "Input is invalid.";

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }

    if (totalDue <= sum)
        return true;
    else
        return false;
}
