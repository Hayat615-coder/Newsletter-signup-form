const Form_component = () => {
  return (
    <>
      <form className="px-14 mt-8">
        <label htmlFor="email info">
          <p className="text-start mb-2 font-bold">Email address </p>
          <input
            className="border border-[hsl(0,0%,58%)] w-full p-3 placeholder:text-[hsl(0,0%,58%)] rounded-lg"
            type="email"
            name="email info"
            placeholder="email@company.com"
            id=""
          />
        </label>
        <button
          type="submit"
          className="p-3 bg-[hsl(234,29%,20%)] w-full mt-6 text-white rounded-lg"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default Form_component;
