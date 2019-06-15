function calculateTipJohn(bill) {
    if (bill < 50) {
        return bill * .2;
    } else if (bill >= 50 && bill <= 200) {
        return bill * .15;
    } else {
        return bill * .1;
    }
}

var john = {
    bills: [124, 48, 268, 188, 42],
    tips: [],
    finalBills: [],
    calcBill: function() {
        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = calculateTipJohn(this.bills[i]);
            this.finalBills[i] = this.bills[i] + this.tips[i];
        }
    }
}

john.calcBill();
// console.log(john.tips);
// console.log(john.finalBills);

function calculateTipMark(bill) {
    if (bill < 100) {
        return bill * .2;
    } else if (bill >= 100 && bill <= 300) {
        return bill * .1;
    } else {
        return bill * .25;
    }
}

var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalBills: [],
    calcBill: function() {
        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = calculateTipMark(this.bills[i]);
            this.finalBills[i] = this.bills[i] + this.tips[i];
        }
    }
}

mark.calcBill();
// Extra
console.log(mark.tips);

function markTips() {
    var markTipSum = 0;
    for (var i = 0; i < mark.tips.length; i++) {
        markTipSum = markTipSum + mark.tips[i];
    }
    return markTipSum / mark.tips.length;
}

function johnTips() {
    var johnTipSum = 0;
    for (var i = 0; i < john.tips.length; i++) {
        johnTipSum = johnTipSum + john.tips[i];
    }
    return johnTipSum / john.tips.length;
}

function highestAvg() {
    if (markTips() > johnTips()) {
        console.log('Mark has better avg');
    }  else {
        console.log('john has better avg');
    }
}

console.log(markTips());
console.log(johnTips());
highestAvg();