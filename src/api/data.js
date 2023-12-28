// import { PaymentIcon } from 'react-native-payment-icons'
import { Mastercard, Visa, Paypal, Alipay, Amex } from 'react-payment-logos/dist/flat';




export const reviewsArray = [
  {
    name: 'John Doe',
    reviewText: 'This product is amazing!',
  },
  {
    name: 'Jane Smith',
    reviewText: 'Highly recommended. Great quality!',
  },
  {
    name: 'Bob Johnson',
    reviewText: 'Very satisfied with my purchase.',
  },
  {
    name: 'Alice Brown',
    reviewText: 'Excellent customer service. Will buy again!',
  },
];

      
     
      

// Payment Options
export const paymentOptions = [
  {
    name: 'MasterCard',
    icon: <Mastercard />,
  },
  {
    name: 'Paypal',
    icon: <Paypal />,
  },
  {
    name: 'Visa',
    icon:  <Visa />,
  },
    {
    name: 'Alipay',
    icon:  <Alipay />,
  },

];

// Shipping Options

          
          


export const shippingOptions = [
  {
    name: 'WorldWide Delivery',
    icon: "/assets/flight.svg",
    alt: "star",
   
    
  },
  {
    name: 'Express Delivery',
    icon: "/assets/logistics-delivery-express-svgrepo-com.svg",
    alt: "delivery",
  },
  {
    name: 'DoorStep delivery',
    icon:"/assets/24-hours-delivery-svgrepo-com.svg",
    alt: "doorstep",
  },
];


// export const shippingOptions = [
//   {
//     name: 'WorldWide Delivery',
//     icon:  <Icon name="home" />,
//   },
//   {
//     name: 'Express Delivery',
//     icon: <Icon name="file" height="40" width="40" />,
//   },
//   {
//     name: 'DoorStep delivery',
//     icon: <Icon name="smile" color="red" />,
//   },
// ];
// sizes
export const sizesData = [
  { id: 1, name: 'S' },
  { id: 2, name: 'M' },
  { id: 3, name: 'L' },
  { id: 4, name: 'XL' },
  { id: 5, name: 'XXL' }
];

// colours
export const colorsData = [
  { id: 1, name: 'Red', code: '#708090' },
  { id: 2, name: 'Green', code: '#778869' },
  { id: 3, name: 'Blue', code: '#2F4F4F' },
  { id: 4, name: 'Yellow', code: '#6A5ACD' },
  { id: 5, name: 'Purple', code: '#708009' }
];




const navData = [
  { name: 'Home', route: '/' },
  { name: "Men's Clothing", route: '/ProductCategory/men\'s clothing' },
  { name: 'Jewelry', route: '/ProductCategory/jewelry' },
  { name: 'Electronics', route: '/ProductCategory/electronics' },
  { name: 'Women\'s Clothing', route: '/ProductCategory/womens clothing' },
  { name: 'Nike Shoes', route: '/ProductCategory/nike shoes' },
];
