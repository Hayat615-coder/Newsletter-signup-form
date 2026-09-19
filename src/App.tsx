import "./App.css";
import type { CSSProperties } from "react";
import illustration_signup_desktop from "./assets/illustration-sign-up-desktop.svg";
import illustration_signup_tablet from "./assets/illustration-sign-up-tablet.svg";
import illustration_signup_mobile from "./assets/illustration-sign-up-mobile.svg";

import Form_component from "./components/Form_component";
import Text_component from "./components/Text_component";
function App() {
  return (
    <>
      <div className="flex md:flex-row bg-white md:rounded-3xl md:w-4xl flex-col-reverse">
        <div className="flex flex-col md:justify-center md:w-full">
          <Text_component />
          <Form_component />
        </div>
        <div
          style={
            {
              "--bg-mobile": `url(${illustration_signup_mobile})`,
              "--bg-tablet": `url(${illustration_signup_tablet})`,
              "--bg-desktop": `url(${illustration_signup_desktop})`,
            } as CSSProperties
          }
          className="px-12 md:mt-4 md:mb-4 md:mr-4 bg-(image:--bg-mobile) md:bg-(image:--bg-tablet) xl:bg-(image:--bg-desktop) bg-no-repeat bg-cover w-full aspect-500/284 md:aspect-528/360 xl:aspect-475/593 rounded-b-2xl"
        />
      </div>
    </>
  );
}

export default App;
