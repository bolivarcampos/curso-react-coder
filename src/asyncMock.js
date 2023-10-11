const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20.95",
    Categoria: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stock: "30",
  },

  {
    id: 2,
    name: "Product 2",
    price: "$28.95",
    Categoria: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 3,
    name: "Product 3",
    price: "$22",
    Categoria: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 4,
    name: "Product 4",
    price: "$36",
    Categoria: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 5,
    name: "Product 5",
    price: "$12",
    Categoria: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 6,
    name: "Product 6",
    price: "$16",
    Categoria: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
};
