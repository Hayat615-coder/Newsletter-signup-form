import { Info } from "../info";
const Text_component = () => {
  return (
    <>
      <div className="flex flex-col gap-3  px-16">
        <h1 className="text-3xl  text-[hsl(234,29%,20%)] font-bold text-center">
          stay updated
        </h1>
        <p className="flex text-[16px] ">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          {Info.map((item) => (
            <li key={item.id} className="flex flex-row gap-1">
              <img src={item.image} alt="icon" />
              <p className=" text-[16px]"> {item.text} </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Text_component;
