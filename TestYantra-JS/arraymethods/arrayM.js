var hobbies = ["Football", "Badminton", "Cooking", "Singing", "Travelling"]
hobbies.push("Reading", "Coding");
console.log("hobbies after push ", hobbies)

console.log("************");

hobbies.pop()
console.log("hobbies after pop ", hobbies)

console.log("************");

hobbies.unshift("sleeping", "bird watching")
console.log("hobbies after unshift ", hobbies)

console.log("************");

hobbies.shift()
console.log("hobbies after shift ", hobbies)

console.log("************");

 var ishobbiesarray=Array.isArray(hobbies);
 console.log("is hobbies array ", ishobbiesarray)

 console.log("*******************************")

 var hascooking = hobbies.includes("Cooking",2)
 console.log("is cooking there ", hascooking)

 console.log("*******************************")

var indexsinging = hobbies.indexOf("Singing")
console.log("index of singing ", indexsinging)

console.log("*******************************")
 
var str = hobbies.join("---")
console.log("join method \n ", str)

console.log("*******************************")
var brands=["signature","bisleri","kingfisher","kinley"]
brands.splice(1,0,"ibbani");
console.log("brands after splice",brands)

console.log("*************")

var movies = [ "bangarada manushya","bhoo kailasam", "mother India","balan","Indian"]
var sliceMovies=movies.slice(1,3)
console.log("after slicing",movies)
console.log("after sliceMovies",sliceMovies)

var movie  = movies.slice(0)
console.log("before completion",movie)
movie.splice(1,0,"sagara sangamam")
console.log("after completion ",movie)


