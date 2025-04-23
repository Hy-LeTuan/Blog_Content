import PageLayoutProps from "../types/PageLayoutProps";

function PageLayout({ children }: PageLayoutProps) {
    return <main className="w-full h-full p-0 b-0">{children}</main>;
}

export default PageLayout;
