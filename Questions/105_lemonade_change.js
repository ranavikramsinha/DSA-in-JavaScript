//* https://leetcode.com/problems/lemonade-change/

var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;

    for(let bill of bills){
        if(bill === 5){
            five++;
        }
        else if(bill === 10){
            if(five > 0){
                five--;
                ten++;
            }
            else{
                return false;
            }
        }
        else if(five > 0 && ten > 0){
            five--;
            ten--;
        }
        else if(five >= 3){
            five -= 3;
        }
        else{
            return false;
        }
    }

    return true;
};