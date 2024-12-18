// Localization is::
// Getting user locale
// const locale = window.navigator.language;
// console.log(locale); //en-US

// The best way to format date
let today = new Date();
let fdate = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hourCycle: "h12",
  dayPeriod: "long",
}).format(today);

console.log(fdate); //->Tuesday, 10 January 2023 at 9:17 at night

let fmtdate = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Africa/Nairobi",
}).format(today);
console.log(fmtdate); //-> Tuesday, 10 January 2023 at 22:09
console.log(new Date()); //Tue Jan 10 2023 22:09:03 GMT+0300 (East Africa Time)

console.log(
  new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
    dayPeriod: "long",
  }).format(today)
); //-> 10:07 at night

/* 
  Time formatting
*/
//show AM/PM
function ampm() {
  let daytime = new Intl.DateTimeFormat("en", {
    timeStyle: "short",
  }).format(today);
  return daytime;
}
console.log(ampm()); //-> 10:40 PM

// Relative time formatting
/* formart(signedNumber,timePeriod)
  signedNumber: +ve number e.g +1,+2 ... referes to future dates e.g in three years time etc
              -ve number e.g -1,-2 ... refers to previous dates e.g yesterday, tomorrow, next year, 3 weeks ago etc
  timePeriod: second,minute,hour,day,month,year
*/
let rtf = new Intl.RelativeTimeFormat("en", {
  numeric: "auto", //always
  style: "long", //short  / narrow
}).format(3, "year");
console.log(rtf); //->

//Formating numbers
//--> 1: Currency
let amount = 30600;
let fmtn = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "KES",
  currencyDisplay: "name",
  //signDisplay: "exceptZero",
}).format(amount);
console.log(fmtn); // ->30,600.00 Kenyan shillings

// --> 2: Unit formatting
let fmtunt = new Intl.NumberFormat("en-GB", {
  style: "unit",
  unit: "centimeter",
  unitDisplay: "long",
});

console.log(fmtunt.format(amount));

// -->3: Percent formating
const fmtperc = new Intl.NumberFormat("en-GB", {
  style: "percent",
});
console.log(fmtperc.format(0.9));

function add3(a, b, c) {
  return a + b + c;
}
add3(3, 4, 5);
