import {
  MessagesWrapper,
  Message,
  MessageContent,
  Image,
  EditIcon,
} from "../../mui-components/Chats/HeroStyles";
import { useAppSelector } from "../../store/store";

interface Item {
  message: string;
  imgUrl: string;
}

const Messages = () => {
  const selector = useAppSelector((state) => state.message);

  return (
    <MessagesWrapper>
      {selector.map((item: Item, index: number) => {
        return (
          <Message key={index}>
            <MessageContent>
              <Image src={item.imgUrl} />
              {item.message}
            </MessageContent>
            <EditIcon />
          </Message>
        );
      })}
    </MessagesWrapper>
  );
};

export default Messages;
