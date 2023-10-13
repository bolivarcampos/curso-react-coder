const product = [
  {
    id: 1,
    name: "Creatina Monohidratada",
    price: "$20.95",
    category: "Creatina",
    img: "https://contents.mediadecathlon.com/m12348014/k$858e3220dc1bfaaa937fce5703fc459e/sq/lata-com-300g-de-creatina-monohidratada-creapure-neutral.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stock: "30",
  },

  {
    id: 2,
    name: "Product 2",
    price: "$28.95",
    category: "Creatina",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 3,
    name: "Product 3",
    price: "$22",
    category: "Proteinas",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 4,
    name: "Product 4",
    price: "$36",
    category: "Proteinas",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 5,
    name: "Product 5",
    price: "$12",
    category: "Quemadores",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 6,
    name: "Product 6",
    price: "$16",
    category: "Quemadores",
    img: "https://contents.mediadecathlon.com/p2177823/k$91cb784f71426e21ac43c9f14e5eecd8/sq/creatina.jpg?format=auto&f=800x0",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => setTimeout(() => resolve(product), 500));
};

export const getProductByCategory = () => {
  return new Promise((resolve) => setTimeout(() => resolve(product), 500));
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.find((prod) => prod.id === productId));
    }, 500);
  });
};
