import logo from "../../assets/Vector.svg";
import logoText from "../../assets/VooDoo_Test.svg";

export const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-solid border-black py-[48px] pl-[62px] pr-[120px] font-display mob:p-[24px] mob-s:px-[10px]">
      <div className="flex mob:pb-[2px]">
        <a href="/voodoo">
          <img
            className="mr-[12px] h-[45px] w-[45px] mob:mr-[4px] mob:h-[23px] mob:w-[23px]"
            src={logo}
            alt="logo"
          />
        </a>

        <a href="/voodoo">
          <img
            className="mob:w-[94px] mob-s:h-[48px]"
            src={logoText}
            alt="logog text"
          />
        </a>
      </div>

      <nav className="flex items-start text-xl leading-[26px] mob:items-center mob:text-m mob:leading-[18px]">
        <a
          className="mr-[48px] flex h-[38px] w-[101px] items-center justify-center whitespace-nowrap rounded bg-transparent font-semibold hover:border-[1px] hover:border-solid hover:border-black mob:mr-[16px] mob:h-[34px] mob:w-[78px]"
          href="#"
        >
          About us
        </a>

        <a
          className="flex h-[38px] w-[101px] items-center justify-center rounded bg-black font-bold text-white mob:h-[34px] mob:w-[78px]"
          href="#sign-up"
        >
          Sign-up
        </a>
      </nav>
    </header>
  );
};
