import { ReactNode } from "react";

type SectionProps = {
    layoutType: "base";
    className?: string;
    children?: ReactNode | null;
};

type SectionComponentProps = {
    layoutType: "base";
    className?: string;
    children?: ReactNode | null;
};

export type { SectionComponentProps, SectionProps };
