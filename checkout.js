fetch('https://fakestoreapi.com/checkout')
            .then(res=>res.json())
            .then(json=>console.log(json))

            document.getElementById("payment").addEventListener("click", function() {
                alert("Payment Recieved! Merry Christmas!");
              });