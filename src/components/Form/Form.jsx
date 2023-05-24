export const Form = () => {
  return (
    <form
      className="mb-[80px] flex h-[177px] w-[100%] flex-col items-center justify-center mob:mb-[79px]"
      id="sign-up"
    >
      <p
        className="-pb-[-10px] mb-[24px] h-[20px] text-xl font-normal leading-[26px] mob:text-center mob:text-m mob:font-normal"
        htmlFor="eamil"
      >
        Be the first one to know when we launch our beta!
      </p>

      <div className="flex w-[624px] justify-center mob:w-[100%]">
        <input
          className="box-border h-[43px] w-[80%] p-[16px] placeholder-black placeholder:text-l placeholder:font-bold"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />

        <button
          className="ml-[12px] h-[43px] w-[94px] rounded bg-[#ED5E21] text-l font-semibold leading-[20px]"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Sign-up
        </button>
      </div>
    </form>
  );
};
