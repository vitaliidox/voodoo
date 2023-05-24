import logo from "../../assets/Logomark.svg";

export const Footer = () => {
  return (
    <section
      className="flex h-[266px] w-[100%] justify-between border-t-[1px] border-solid border-black bg-white px-[120px] py-[84px]
      tab:h-[598px] tab:flex-col tab:items-start tab:px-[48px]"
    >
      <div className="flex h-[98px] w-[302px] items-center justify-center tab:order-1 tab:mb-[48px] tab:w-[100%] tab:self-center">
        <img
          className="h-[82px] w-[82px] tab:h-[80px] tab:w-[80px]"
          src={logo}
          alt="logo"
        />
      </div>

      <ul className="flex w-[300px] shrink-[1.5] flex-col gap-[19px] font-footer text-m font-bold leading-[21px] tab:mb-[48px] tab:w-[100%] [&>li]:h-[10px]">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">RETURNS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>

      <ul className="flex w-[300px] flex-col gap-[19px] font-footer text-m font-bold leading-[21px] tab:mb-[48px] tab:w-[100%] [&>li]:h-[10px]">
        <li>
          <a href="#">TERMS & CONDITIONS</a>
        </li>
        <li>
          <a href="#">PRIVACY POLICY</a>
        </li>
        <li>
          <a href="#">COOKIE POLICY</a>
        </li>
        <li>
          <a href="#">COOKIE SETTINGS</a>
        </li>
      </ul>

      <ul className="flex w-[300px] flex-col gap-[19px] font-footer text-m font-bold leading-[21px] tab:mb-[48px] tab:w-[100%] [&>li]:h-[10px]">
        <li>
          <a href="#">ABOUT SECOND CHANCE</a>
        </li>
        <li>
          <a href="#">CAREER</a>
        </li>
        <li>
          <a href="#">FACEBOOK</a>
        </li>
        <li>
          <a href="#">INSTAGRAM</a>
        </li>
      </ul>
    </section>
  );
};
