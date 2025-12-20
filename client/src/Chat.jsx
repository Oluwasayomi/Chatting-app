import { useState, useEffect, useContext } from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
import { UserContext } from "./UserContext";

export default function Chat() {
    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState({});
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [newMessageText, setNewMessageText] = useState('');
    const [messages, setMessages] = useState([]);
    const {username, id} = useContext(UserContext);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4000');
        setWs(ws);
        ws.addEventListener('message', handleMessage)
    }, []);

    function showOnlinePeople(peopleArray) {
        const people = {};
        peopleArray.forEach(({userId,username}) => {
            people[userId] = username;
        });
        setOnlinePeople(people);
    };

    function handleMessage(ev) {
        const messageData = JSON.parse(ev.data);
        console.log({ev,messageData});
        if ('online' in messageData) {
            showOnlinePeople(messageData.online);
        } else if ('text' in messageData) {
            setMessages(prev => ([...prev, {isOur:false, text:messageData.text}]));
        }
    };

    function sendMessage(ev) {
        ev.preventDefault();
        ws.send(JSON.stringify({
            recipient: selectedUserId,
            text: newMessageText,
        }));
        setNewMessageText('');
        setMessages(prev => ([...prev,{text: newMessageText, isOur: true}]));
    }

    const onlinePeopleExclOurUser = {...onlinePeople};
    delete onlinePeopleExclOurUser[id];

    const messagesWithoutDupes = uniqBy(messages, 'id');

    return (
        <div className="flex h-screen">
            <div className="bg-amber-400 w-1/3">
                <Logo />
                <h1 className="text-bold text-2xl border-b-5 border-green-400 pb-2 pl-4">Contacts</h1>
                {Object.keys(onlinePeopleExclOurUser).map(userId => (
                    <div onClick={() => setSelectedUserId(userId)} 
                        key={userId} 
                        className={"border-b border-green-200 flex items items-center gap-2 cursor-pointer " +(userId === selectedUserId ? 'bg-green-400' : '')}>
                            {userId === selectedUserId && (
                                <div className="w-1 bg-green-700 h-12 rounded-r-md"></div>
                            )}
                        <div className="flex gap-2 py-2 pl-4 items-center">
                            <Avatar username={onlinePeople[userId]} userId={userId}/>
                        <span className="text-grey-800">{onlinePeople[userId]}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col bg-green-400 w-2/3 p-2">
                <div className="flex-grow">
                    {!selectedUserId && (
                        <div className="flex h-full items-center justify-center"> 
                            <div className="text-gray-500 text-center"> No Selected Person <br/> &larr; Select a person from Contacts</div>
                        </div>
                    )}
                    {!!selectedUserId && (
                        <div>
                            {messagesWithoutDupes.map(message =>
                                <div>{message.text}</div>
                            )}
                        </div>
                    )}
                </div>

                {!!selectedUserId && (
                    <form className="flex gap-2" onSubmit={sendMessage}>
                    <input type="text" 
                    value={newMessageText}
                    onChange={ev => setNewMessageText(ev.target.value)}
                    placeholder="Type your message here" 
                    className="bg-white flex-grow border rounded-sm p-2"/>
                    <button type="submit" className="bg-amber-500 p-2 text-white rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
                )}
                
            </div>
        </div>
    );
};