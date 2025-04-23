import {
    SectionProps,
    SectionComponentProps,
} from "../../types/layout/SectionProps";

function Section({ layoutType, className = "", children }: SectionProps) {
    let layoutTypeClassName = "";

    switch (layoutType) {
        case "base":
            layoutTypeClassName = "w-full h-full mt-24 mb-24";
            break;
    }

    return (
        <section className={`${layoutTypeClassName} ${className}`}>
            {children}
        </section>
    );
}

function SectionComponent({
    layoutType,
    className = "",
    children,
}: SectionComponentProps) {
    let layoutTypeClassName = "";

    switch (layoutType) {
        case "base":
            layoutTypeClassName = "w-full ml-24 mr-24";
            break;
    }
    return (
        <div className={`${layoutTypeClassName} ${className}`}>{children}</div>
    );
}

export { Section, SectionComponent };
