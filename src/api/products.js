// Get products from fake API store
// Get all products
export const products = async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        console.log(data)

        return data
    }
    catch (error) {console.log(error)}
    }

    // Get product category
export const productsCategory = async (prodcategory="") => {
    try{
        // const url = `https://fakestoreapi.com/products/category/${prodcategory}`

        let url;

        if (prodcategory) {
            // Use the category-specific endpoint
            url = `https://fakestoreapi.com/products/category/${prodcategory}`;
        } else {
            // Use the general categories endpoint
            url = 'https://fakestoreapi.com/products/categories';
        }

        const response = await fetch(url)
        const data = await response.json()
        // console.log(response)

        // console.log(data)

        return data
    }
    catch (error) {console.log(error)}
    }

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//             // sorty
// fetch('https://fakestoreapi.com/products?limit=5')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// // all category
// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//             // specific prod
// fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
