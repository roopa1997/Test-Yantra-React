var items = [
    {
        id: 1,
        name: "lipstick",
        price: 850
    },
    {
        id: 2,
        name: "eyeliner",
        price: 500
    },
    {
        id: 3,
        name: "beard oil",
        price: 900
    },
    {
        id: 4,
        name: "rakhi",
        price: 250
    }
   
]

    var fillitem = items.filter(item => item.price>500)
    console.log(fillitem)
    var m= items.map(function(item){
        
        var v={
            id: item.id,
            name: item.name,
            price: item.price+50

        }
        return v
    })
     console.log("items",items)
     console.log("m",m)

    
     

    

    
