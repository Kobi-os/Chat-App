import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('c72fb7bc-1595-4fb6-b49b-6d327bb0b57c', 
    props.user.username, 
    props.user.secret);
    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>;
  };
  export default ChatsPage;