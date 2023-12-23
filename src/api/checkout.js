fetch('https://fakestoreapi.com/checkout')
            .then(res=>res.json())
            .then(json=>console.log(json))