import { ReactNode } from "react";
export interface ISimplyRender {
    isTrue: boolean;
    children: ReactNode;
    fallback: any;
}
declare const SimplyRender: ({ isTrue, children, fallback }: ISimplyRender) => any;
export default SimplyRender;
