fetch('https://fakestoreapi.com/checkout')
            .then(res=>res.json())
            .then(json=>console.log(json))

    const Checkoutform = () => {
        return (
        <div className="page">
            <checkoutform/>
            Hey this is a test
        </div>
        );
    }