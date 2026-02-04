 const people=[{nam : "sahida",city:"banglore"},
        {nam:"immu",city:"hyderabad"},
        {nam:"neelima",city:"banglore"},
        {nam:"sravan",city:"hyderabad"},
    ]

     people.forEach(element => {
        console.log(element);
    });

    const peo = people.map(function(value){
        return value.nam.toUpperCase();
    })
    console.log(peo);