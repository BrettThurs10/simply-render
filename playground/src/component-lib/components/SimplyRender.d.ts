import { ReactNode } from "react";
interface ISimplyRender {
    isTrue: boolean;
    children: ReactNode;
    fallback: any;
}
declare const SimplyRender: ({ isTrue, children, fallback }: ISimplyRender) => any;
export { ISimplyRender, SimplyRender };
