import { ReactNode } from "react";
interface ISimplyRender {
  isTrue: boolean;
  children: ReactNode;
  fallback: any;
}

const SimplyRender = ({ isTrue, children, fallback }: ISimplyRender) => {
  return isTrue ? children : fallback;
};

export { ISimplyRender, SimplyRender };
