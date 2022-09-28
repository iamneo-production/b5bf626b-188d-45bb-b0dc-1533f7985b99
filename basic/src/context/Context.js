import { createContext, useContext, useReducer } from "react";
import { Faker as faker} from 'react-fakers'
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
//faker.seed(99);

const Context = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Biriyani",
      price: "100",
      inStock: 10,
      fastDelivery: true,
      ratings: 3
    },
    {
      id: "2",
      name: "Fried Rice",
      price: "100",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 2
    },
        {
      id: "3",
      name: "Poori",
      price: "30",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 5
    },
        {
      id: "4",
      name: "Bajji",
      price: "20",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 4
    },
        {
      id: "5",
      name: "Chilli Paneer",
      price: "120",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 2
    },
        {
      id: "6",
      name: "Hotdog",
      price: "70",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 2
    },
        {
      id: "7",
      name: "Cheese Sandwich",
      price: "100",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 5
    },
        {
      id: "8",
      name: "Pizza",
      price: "70",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 4
    },
    {
      id: "9",
      name: "Burger",
      price: "55",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 5
    },
            {
      id: "10",
      name: "Twister",
      price: "70",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 1
    },
                {
      id: "11",
      name: "Chocolate Cake",
      price: "50",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 5
    },
                {
      id: "12",
      name: "Vanilla Cake",
      price: "40",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 4
    },
                {
      id: "13",
      name: "Bonda",
      price: "30",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 1
    },
                {
      id: "14",
      name: "Chaat",
      price: "30",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 5
    },
                {
      id: "15",
      name: "Shark Fry",
      price: "200",
     // image: faker.random.image(),
      inStock: 10,
      fastDelivery: true,
      ratings: 3
    }
];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;