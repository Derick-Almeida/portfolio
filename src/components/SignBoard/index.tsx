import { TypeAnimation } from "react-type-animation";

export const SignBoard = () => {
  return (
    <>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "Dérick Silva",
          2000,
          "desenvolvedor front end",
          2000,
          "desenvolvedor back end",
          2000,
          "desenvolvedor full stack",
          2000,
        ]}
        wrapper="h3"
        repeat={Infinity}
        style={{ textTransform: "capitalize" }}
      />
    </>
  );
};

export default SignBoard;
