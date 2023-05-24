export const getData = async () => {
  const response = await fetch(
    "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
  );
  return await response.json();
};
