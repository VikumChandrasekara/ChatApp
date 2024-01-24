import { MultiChatSocket , MultiChatWindow , useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'dbfa537a-9d4a-4f7b-a6a0-779e9c9d8812',
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh' }}>
            <MultiChatSocket {...chatProps} style={{ height: '100vh', }}/>
            <MultiChatWindow {...chatProps} style={{ height: '100vh', }}/>
        </div>
    )
}

export default ChatsPage