import { useState, useEffect } from "react";
import classNames from "classnames";

import alert from "../../assets/alert-circle.svg";
import arrow from "../../assets/chevron-down.svg";

export const InfoButton = () => {
  const [active, setActive] = useState(false);
  const [windowSize, setWindowSize] = useState(window.outerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.outerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <button
      className="relative flex h-[72px] w-[100%] items-center rounded bg-black p-[24px] text-white"
      onClick={() => setActive(!active)}
      onBlur={() => setActive(false)}
    >
      <div className="mr-[48px] flex items-center justify-start">
        <img
          className="mr-[6px] mob:h-[20px] mob:w-[20px]"
          src={alert}
          alt="alert"
        />

        <div className="text-l font-bold leading-[20px]">ALPHA</div>
      </div>

      <p className="-pb-[-10px]text-clip w-[100%] whitespace-nowrap text-left text-m font-medium leading-[18px]">
        Important info {windowSize > 480 ? "regarding our service" : ""}
      </p>

      <img
        className={classNames("h-[24px] w-[24px] transition-all", {
          "rotate-180": active,
        })}
        src={arrow}
        alt="arrow"
      />

      <div
        className={classNames(
          "absolute left-0 top-[100%] -z-[-1] h-[0px] w-[100%] overflow-hidden rounded bg-black px-[20px] text-m text-white transition-all [&>h2]:text-left [&>h2]:text-l [&>ul]:mb-[20px] [&>ul]:ml-[20px] [&>ul]:list-disc [&>ul]:text-left",
          { "mt-[12px] h-fit p-[20px]": active }
        )}
      >
        <h2>Store Development and Customization</h2>
        <ul>
          <li>
            Our team excels in developing online stores from scratch, modifying
            existing ones, or seamlessly transferring stores from other
            platforms to Shopify.
          </li>
          <li>
            We focus on enabling you to concentrate on your business rather than
            website development, ensuring a smooth and hassle-free experience.
          </li>
        </ul>

        <h2>Shopify Dropshipping Store Creation</h2>
        <ul>
          <li>
            We specialize in creating high-performing online stores specifically
            tailored for Shopify dropshipping.
          </li>
          <li>
            Our expertise lies in facilitating your business growth, emphasizing
            efficient operations rather than investing significant time and
            effort in website development.
          </li>
        </ul>

        <h2>Store Analysis and Optimization</h2>
        <ul>
          <li>
            We offer a comprehensive analysis of your store, identifying areas
            for improvement to enhance its overall performance.
          </li>
          <li>
            Our expert recommendations help you optimize your store, maximizing
            conversions and increasing sales.
          </li>
        </ul>

        <h2>Payment Acceptance Solutions</h2>
        <ul>
          <li>
            VOODOO ECOM provides the best payment acceptance solutions for
            online stores operating on the Shopify platform.
          </li>
          <li>
            We ensure secure, seamless, and efficient payment processing,
            enabling your customers to have a smooth checkout experience.
          </li>
        </ul>

        <h2>Personal Agent from China</h2>
        <ul>
          <li>
            As part of our services, we offer a dedicated personal agent from
            China who can assist you in sourcing products from AliExpress at
            competitive prices.
          </li>
          <li>
            This valuable contact enables you to access a wide range of products
            and secure better deals, enhancing your dropshipping business's
            profitability.
          </li>
        </ul>

        <h2>Guides, Courses, and Facebook Tools</h2>
        <ul>
          <li>
            We provide a range of educational resources, including guides and
            courses, to equip you with the necessary knowledge and skills to
            succeed in the online business landscape.
          </li>
          <li>
            Additionally, we offer Facebook tools specifically designed to
            optimize your advertising efforts, ensuring effective targeting and
            maximizing your return on investment.
          </li>
        </ul>
      </div>
    </button>
  );
};
