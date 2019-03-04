// Calculating John's family expenses:

var JOHN_FAMILY = {

    tips: [],
    finalBill: [],
    bills: [124, 48, 268, 180, 42],
    calculateTip: function() {

        for (var i = 0; i < this.bills.length; i++) {
            
            if (this.bills[i] < 50) {

                this.tips[i] = this.bills[i] * .2;
                
            } else if (this.bills[i] > 50 && this.bills[i] < 200) {

                this.tips[i] = this.bills[i] * .15;
               
            } else {

                this.tips[i] = this.bills[i] * .1;
                
            }

            this.finalBill[i] = this.bills[i] + this.tips[i];
        }
    },

    tipsSum: function() {

        tipSum = 0;

        for (var i = 0; i < this.bills.length; i++) {

            tipSum += this.tips[i];
        }
        return tipSum;
    }
}


JOHN_FAMILY.calculateTip();


// Calculating Mark's family expenses:

var MARK_FAMILY = {

    tips: [],
    finalBill: [],
    bills: [77, 375, 110, 45],
    calculateTip: function() {

        for (var i = 0; i < this.bills.length; i++) {
            
            if (this.bills[i] < 100) {

                this.tips[i] = this.bills[i] * .2;
                
            } else if (this.bills[i] > 100 && this.bills[i] < 300) {

                this.tips[i] = this.bills[i] * .1;
               
            } else {

                this.tips[i] = this.bills[i] * .25;
                
            }

            this.finalBill[i] = this.bills[i] + this.tips[i];
        }
    },

    tipsSum: function() {

        tipSum = 0;

        for (var i = 0; i < this.bills.length; i++) {

            tipSum += this.tips[i];
        }
        return tipSum;
    }
}

MARK_FAMILY.calculateTip();


//Calculating the average tips of each family:

JOHN_FAMILY_AVG = 0;
MARK_FAMILY_AVG = 0;

function avgFamilyTip () {

    JOHN_FAMILY_AVG = JOHN_FAMILY.tipsSum() / JOHN_FAMILY.tips.length;
    MARK_FAMILY_AVG = MARK_FAMILY.tipsSum() / MARK_FAMILY.tips.length;

    if (JOHN_FAMILY_AVG > MARK_FAMILY_AVG) {

        console.log('John\'s family have tipped more!');

    } else if (JOHN_FAMILY_AVG < MARK_FAMILY_AVG) {

        console.log('Mark\'s family have tipped more!');

    } else {

        console.log('Both families have tipped the same amount!');

    }
}

avgFamilyTip();


