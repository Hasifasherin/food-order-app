// ✅ Import images from assets
import cheeseburger from "../assets/cheeseburger.jpg";
import doubleWhopper from "../assets/double-whopper.jpg";
import baconKing from "../assets/bacon-king.jpg";
import icecreamStrawberry from "../assets/icecream-strawberry.jpg";
import icecreamCookies from "../assets/icecream-cookies.jpg";
import friedNoodles from "../assets/fried-noodles.jpg";
import danDan from "../assets/dan-dan.jpg";
import wontonNoodles from "../assets/wonton-noodles.jpg";
import greenSalad from "../assets/green-salad.jpg";
import caesarSalad from "../assets/caesar-salad.jpg";
import fries from "../assets/fries.jpg";
import onionRings from "../assets/onion-rings.jpg";
import cheeseBalls from "../assets/cheese-balls.jpg";
import lavaCake from "../assets/lava-cake.jpg";
import redVelvet from "../assets/red-velvet.jpg";

const products = [
  //  Burgers
  {
    id: 1,
    name: "Cheeseburger",
    desc: "Juicy beef patty with cheddar cheese",
    price: "$6.99",
    rating: 4,
    category: "Burgers",
    image: cheeseburger,
  },
  {
    id: 2,
    name: "Double Whopper",
    desc: "Two flame-grilled beef patties with cheese",
    price: "$8.49",
    rating: 5,
    category: "Burgers",
    image: doubleWhopper,
  },
  {
    id: 3,
    name: "Bacon King",
    desc: "Loaded with bacon, cheese, and patties",
    price: "$9.99",
    rating: 5,
    category: "Burgers",
    image: baconKing,
  },

  //  Ice Cream
  {
    id: 4,
    name: "Strawberry Ice Cream",
    desc: "Sweet and creamy strawberry flavor",
    price: "$3.50",
    rating: 5,
    category: "Ice Cream",
    image: icecreamStrawberry,
  },
  {
    id: 5,
    name: "Chocolate Ice Cream",
    desc: "Sweet and creamy chocolate flavor",
    price: "$4.00",
    rating: 5,
    category: "Ice Cream",
    image: icecreamCookies,
  },

  //  Noodles
  {
    id: 6,
    name: "Fried Sliced Noodles",
    desc: "Wok tossed sliced noodles with veggies",
    price: "$7.99",
    rating: 4,
    category: "Noodles",
    image: friedNoodles,
  },
  {
    id: 7,
    name: "Dan Dan Noodles",
    desc: "Spicy Sichuan-style noodles with minced meat",
    price: "$8.50",
    rating: 5,
    category: "Noodles",
    image: danDan,
  },
  {
    id: 8,
    name: "Wonton Noodles",
    desc: "Noodles in clear broth with pork wontons",
    price: "$8.25",
    rating: 4,
    category: "Noodles",
    image: wontonNoodles,
  },

  //  Salads
  {
    id: 9,
    name: "Green Salad",
    desc: "Lettuce, cucumber, and tomato mix",
    price: "$5.25",
    rating: 4,
    category: "Salads",
    image: greenSalad,
  },
  {
    id: 10,
    name: "Caesar Salad",
    desc: "Romaine, parmesan, and croutons",
    price: "$6.00",
    rating: 5,
    category: "Salads",
    image: caesarSalad,
  },

  //  Sides
  {
    id: 11,
    name: "French Fries",
    desc: "Crispy golden fries",
    price: "$2.99",
    rating: 4,
    category: "Sides",
    image: fries,
  },
  {
    id: 12,
    name: "Onion Rings",
    desc: "Crispy battered onion slices",
    price: "$3.49",
    rating: 3,
    category: "Sides",
    image: onionRings,
  },
  {
    id: 13,
    name: "Cheese Balls",
    desc: "Melty cheese inside crispy shells",
    price: "$4.25",
    rating: 5,
    category: "Sides",
    image: cheeseBalls,
  },

  //  Desserts
  {
    id: 14,
    name: "Chocolate Lava Cake",
    desc: "Warm chocolate cake with gooey center",
    price: "$5.99",
    rating: 5,
    category: "Desserts",
    image: lavaCake,
  },
  {
    id: 15,
    name: "Red Velvet Cake",
    desc: "Moist and rich with cream cheese frosting",
    price: "$6.50",
    rating: 5,
    category: "Desserts",
    image: redVelvet,
  },
];

export default products;
