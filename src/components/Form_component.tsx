import { useState } from "react";

type FormComponentProps = {
  onSubmit: (email: string) => void;
};

const Form_component = ({ onSubmit }: FormComponentProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setError(true);
    } else {
      setError(false);
    }

    if (!email.trim()) {
      setError(true);
      return;
    }

    setError(false);
    onSubmit(email);
  };

  return (
    <>
      <form className="md:p-8 p-6 " onSubmit={handleSubmit}>
        <label htmlFor="email info">
          <p className="text-start mb-2 font-bold flex flex-row justify-between">
            Email address{" "}
            <span className={`${error ? "" : "hidden"} text-[hsl(4,100%,67%)]`}>
              valid email required
            </span>{" "}
          </p>
          <input
            className={`${error ? "border border-[hsl(4,100%,67%)]" : "border border-[hsl(0,0%,58%)]"} cursor-pointer w-full p-3 placeholder:text-[hsl(0,0%,58%)] rounded-lg`}
            type="email"
            name="email info"
            placeholder="email@company.com"
            id=""
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError(false);
            }}
            aria-invalid={error}
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
