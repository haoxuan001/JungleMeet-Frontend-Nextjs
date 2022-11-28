import Footer from "@/components/FooterSection/Footer";
import NavBar from "@/components/NavBarSection/NarBar";
import { ContentWrapper, PageContainer } from "@/pages";
// import { AdContainerLeft, AdContainerRight } from "./Advertisement";
// import Image from "next/image";

interface IPageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
    return (
        <PageContainer>
            <NavBar />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default PageWrapper;
