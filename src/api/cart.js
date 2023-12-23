fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))

const Checkoutform = () => {
        return (
            <div className="page">
            <checkoutform/>

            </div>
        );
}