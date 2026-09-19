const Form_component = () => {
  return (
    <>
      <form className="md:p-8 p-6 ">
        <label htmlFor="email info">
          <p className="text-start mb-2 font-bold flex flex-row justify-between">
            Email address{" "}
            <span className="text-[hsl(4,100%,67%)] hidden">
              valid email required
            </span>{" "}
          </p>
          <input
            className="border border-[hsl(0,0%,58%)] cursor-pointer w-full p-3 placeholder:text-[hsl(0,0%,58%)] rounded-lg"
            type="email"
            name="email info"
            placeholder="email@company.com"
            id=""
          />
        </label>
        <button
          type="submit"
          className="p-3 bg-[hsl(234,29%,20%)] w-full mt-6 text-white cursor-pointer rounded-lg transition-shadow hover:bg-[hsl(4,100%,67%)] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)] "
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default Form_component;
