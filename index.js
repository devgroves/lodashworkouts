//uses cases to solve 
//take the order items qty and items no
//filter by category and name - try with multivalue hashmap
//find training courses for this month 
//uniq vendors
//find valid coupons having stripe coupon id and no of times > 0
//group by email id, purchases done.. 
//group by email id how many free downloads happened
var _ = require('lodash');
console.log(_.debounce);
const intervalfn = setInterval(() => {console.log(new Date());}, 10);
function debouncefncheck() {
    console.log("function created to check debounce function working after 3 seconds...");
    clearInterval(intervalfn);
    console.log(new Date());
}
_.debounce(debouncefncheck, 3000)();
