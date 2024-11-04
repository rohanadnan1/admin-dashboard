import { InputWrapper} from "../../mui-components/Chats/ChatsStyles";
import { RegenerateButton } from "../../mui-components/Chats/HeroStyles";
import Input from "./Input";
import { Replay } from "@mui/icons-material"

const MessageInput = () => {
    return(
        <InputWrapper>
        <RegenerateButton>
          <Replay
            sx={{
              fontSize: "15px",
            }}
          />{" "}
          Regenerate
        </RegenerateButton>
        <Input />
      </InputWrapper>
    )
}

export default MessageInput;