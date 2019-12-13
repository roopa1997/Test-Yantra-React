var todaysDate = new Date()
console.log("todays date is ",todaysDate);

console.log("*****************");
 var date = todaysDate.getDate();
 var month = todaysDate.getMonth();
 var day = todaysDate.getDay();
 var year= todaysDate.getFullYear();

 var displayDate = date +'/'+  month+'/'+year;

 console.log("Display Date "+ displayDate);

 var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
 var m= todaysDate.getMonth();
 var m1  =months[m];
 console.log('Month',m1);

 var days =['mon','tue','wed','thu','fri','sat','sun'];
 var d = todaysDate.getDay();
 var d1= days[d];
 console.log('day' , d1);

 var displaydate= date+'/'+m1+'/'+year;
 console.log(displaydate);

 console.log("**********");

 var dateM = new Date(86665000);
 console.log("date with milliseconds constructor",dateM)

 console.log("**********");

 var dateS = new Date("nov 22 2019");
 console.log("date with string constructor",dateS)

 console.log("**********");

 var dateY = new Date(1997,1,24,);
 console.log("date with year constructor",dateY)