import success from "../assets/icon-success.svg";

type SuccessfullComponentProps = {
  email: string;
  onDismiss: () => void;
};

const Successfull_component = ({
  email,
  onDismiss,
}: SuccessfullComponentProps) => {
  return (
    <>
      <div className="bg-white w-xl p-18 h-full rounded-2xl">
        <img src={success} alt="succes icon" />
        <h1 className="text-5xl my-12 text-[hsl(234,29%,20%)] font-bold mb-4">
          Thanks for subscribing
        </h1>
        <p className="text-[18px]">
          A confirmation email has been sent to
          <span className="font-bold"> {email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
        <button
          type="button"
          onClick={onDismiss}
          className="p-3 bg-[hsl(234,29%,20%)] w-full mt-6 text-white cursor-pointer rounded-lg transition-shadow hover:bg-[hsl(4,100%,67%)] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)] "
        >
          Dissmiss message
        </button>
      </div>
    </>
  );
};

export default Successfull_component;
