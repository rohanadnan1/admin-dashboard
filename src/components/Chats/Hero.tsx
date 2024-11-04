import { HeroWrapper } from "../../mui-components/Chats/HeroStyles";
import Navbar from "./Navbar";
import Messages from "./Message";
import MessageInput from "./MessageInput";

const Hero = () => {
    return(
        <HeroWrapper>
        <Navbar text="Your Chats with our service" />
        <Messages />
        <MessageInput />
      </HeroWrapper>
    )
}

export default Hero;
