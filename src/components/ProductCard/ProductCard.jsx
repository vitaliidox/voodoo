export const ProductCard = ({ data }) => {
  const { images, title, product_type, variants, vendor } = data;

  return (
    <section className="mx-auto mb-[48px] h-[402px] w-[300px] mob:mb-[50px] mob:w-[342px]">
      <a
        href="#"
        className="relative mb-[12px] block h-[300px] w-[100%] overflow-hidden rounded border-[1px] border-solid border-black"
      >
        <img
          className="h-[100%] w-[100%] object-cover object-center"
          src={images[0].src}
          alt="product"
        />

        <button className="absolute left-[12px] top-[12px] h-[24px] w-[47px] rounded bg-black text-s font-normal leading-[15px] text-white">
          USED
        </button>
      </a>

      <div>
        <table className="mb-[12px] w-[100%] text-m leading-[18px]">
          <tbody className="[&>tr>td]:p-0">
            <tr>
              <td className="text-left font-bold">{title}</td>

              <td className="text-right font-medium">
                {product_type || " - "}
              </td>
            </tr>

            <tr>
              <td className="text-left font-bold">
                {variants[0].price + " UAH"}
              </td>

              <td className="text-right">{vendor}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="h-[42px] w-[100%] rounded bg-black text-m font-bold leading-[18px] text-white">
        <p className="-pb-[10px]">PICK-UP IN 2200</p>
      </button>
    </section>
  );
};
