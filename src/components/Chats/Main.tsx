import { MainContainer } from "../../mui-components/Chats/MainStyles";
import Chats from "./Chats";
import LastSection from "./LastSection";
import Hero from "./Hero";

const Main = () => {
  return (
    <MainContainer>
      {/* <Sidebar /> */}
      <Chats />
      <Hero />
      <LastSection />
    </MainContainer>
  );
};

export default Main;
