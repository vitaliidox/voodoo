import { useMemo, useState } from "react";

import { InfoButton } from "../../components/InfoButton/InfoButton";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Form } from "../../components/Form/Form";
import { getData } from "../../API";

export const Main = () => {
  const [products, setProducts] = useState(null);
  const [isError, setIsError] = useState(false);

  useMemo(() => {
    getData()
      .then((data) => {
        setProducts(data.products);
        setIsError(false);
      })
      .catch(() => setIsError(true));
  }, []);

  return (
    <main className="relative mx-auto w-[100%] max-w-[1512px] flex-1 px-[120px] pt-[100px] font-display tab:px-[24px]">
      <InfoButton />

      {isError ? (
        <h1 className="my-[160px] text-center text-[42px] font-bold">
          Something went wrong...
        </h1>
      ) : (
        <ul className="-z-[-4] flex flex-wrap gap-[24px] pt-[48px]">
          {products &&
            products.map((item) => <ProductCard key={item.id} data={item} />)}
        </ul>
      )}

      <Form />
    </main>
  );
};
