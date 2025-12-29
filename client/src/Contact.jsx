import Avatar from "./Avatar.jsx";

export default function Contact({id, username, onClick, selected}) {
    return (
        <div key={id} onClick={() => onClick(id)} 
             className={"border-b border-green-200 flex items items-center gap-2 cursor-pointer " +(id === selectedUserId ? 'bg-green-400' : '')}>
            {id === selected && (
                <div className="w-1 bg-green-700 h-12 rounded-r-md"></div>
            )}
            <div className="flex gap-2 py-2 pl-4 items-center">
                <Avatar online={true} username={username} userId={id}/>
                <span className="text-grey-800">{username}</span>
            </div>
        </div>
    );
}