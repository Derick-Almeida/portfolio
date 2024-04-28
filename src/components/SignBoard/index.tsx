import { TypeAnimation } from "react-type-animation";

export const SignBoard = () => {
  return (
    <>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "Dérick Silva",
          4500,
          "desenvolvedor front end",
          3000,
          "desenvolvedor back end",
          3000,
          "desenvolvedor full stack",
          3000,
        ]}
        wrapper="h3"
        repeat={Infinity}
        style={{ textTransform: "capitalize" }}
      />
    </>
  );
};

export default SignBoard;
