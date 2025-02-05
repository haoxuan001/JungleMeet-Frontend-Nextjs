import ExclusiveVideos from "@/components/MainPage/ExclusiveVideos/ExclusiveVideos";
import HeroBanner from "@/components/MainPage/HeroBanner/HeroBanner";
import UpcomingMovies from "@/components/MainPage/UpcomingMovies/UpcomingMovies";
import Footer from "@/components/FooterSection/Footer";
import styled from "styled-components";
import NavBar from "@/components/NavBarSection/NarBar";
import NowPlaying from "@/components/MainPage/NowPlaying/NowPlaying";
import PopularDisscusion from "@/components/MainPage/PopularDisscusion/PopularDisscusion";
import WeeklyTop10Post from "@/components/MainPage/WeeklyTop10Post/WeeklyTop10Post";
import { Flex } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../layouts/Header";
import { AdContainerLeft, AdContainerRight, AdImg } from "@/components/Advertisement";

export const PageContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  z-index: 30;
`;

export const ContentWrapper = styled.div`
  padding: 98px;
  padding-bottom: 0;
  width: 100%;
  @media (max-width: 60em) {
    padding: 50px;
  }
`;

interface IgetStaticProps {
    locale: string;
}
export async function getStaticProps({ locale }: IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const HomePage = (): JSX.Element => {
    const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
    const [isLargerThan60em] = useMediaQuery("(max-width: 60em)");

    useEffect(() => {
        if (isLargerThan60em !== isMinWidthMedium) {
            setIsMinWidthMedium(isLargerThan60em);
        }
    }, [isLargerThan60em]);

    return (
        <PageContainer>
            <NavBar />
            <HeroBanner />
            <AdContainerLeft>
                <AdImg src="/ad_left.png" />
            </AdContainerLeft>
            <AdContainerRight>
                <AdImg src="/ad_right.png" />
            </AdContainerRight>
            <ContentWrapper>
                <Header />
                <Flex>
                    {!isMinWidthMedium && (
                        <>
                            <NowPlaying />
                            <WeeklyTop10Post />
                        </>
                    )}
                    {isMinWidthMedium && <WeeklyTop10Post />}
                </Flex>
                <UpcomingMovies />
                <ExclusiveVideos />
                <PopularDisscusion />
            </ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default HomePage;
