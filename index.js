// Code your solution in this file!

function distanceFromHqInBlocks(current) {
    if (current >= 42) {
        return current - 42
    }
    else {
        return 42 - current
    }
}

function distanceFromHqInFeet(current) {
    if (current >= 42) {
        return (current - 42) * 264
    }
    else {
        return (42 - current) * 264
    }  
}

function distanceTravelledInFeet(start, destination){
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice (start, destination) {
   const a = distanceTravelledInFeet(start , destination);
    if (400 > a) {
        return 0
    }
    else if (400 < a && a < 2000) {
        return (a-400) * 0.02
    }
    else if (2000 < a && a < 2500) {
        return 25
    }
    else if (a > 2500) {
        return "cannot travel that far"
    }
}

