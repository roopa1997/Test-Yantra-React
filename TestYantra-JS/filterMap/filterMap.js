var numbers=[100,200,300,400];
 var filteredNumbers=numbers.filter(function(val){
     if(val>200){
         return true
     }
     else{
         return false
     }
 })

 console.log("after filter ",numbers)
 console.log("before filter ", filteredNumbers)

 console.log("******")

 var fillNumber = numbers.filter(val=>val>200)
 console.log(fillNumber)
 console.log("\nmap()")
 var numbers=[100,200,300,400];
 var nums = numbers.map(function(val,index){
     val=val+50
     return val
 })
 var nums = numbers.map(val=> val+50)
console.log("Before map ",numbers)
console.log("After map",nums)