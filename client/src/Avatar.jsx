export default function Avatar({userId, username, online}) {

    const colors = ['bg-red-400', 'bg-green-400', 
                    'bg-gray-300', 'bg-purple-400', 
                    'bg-blue-400', 'bg-teal-400'];
    const userIdBase10 = parseInt(userId, 16);
    //like 15 $ 6 = 3 and then get infered colour
    const colorIndex = userIdBase10 % colors.length;
    const color = colors[colorIndex];

    return (
        <div className={"w-8 h-8 relative rounded-full flex items-center "+color}>
            <div className="text-center w-full opacity-70">{username[0]} </div>
            {online && (
                <div className="absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white"></div>
            )}
        </div>
    );
};