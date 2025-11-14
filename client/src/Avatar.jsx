export default function Avatar({userId, username}) {
    return (
        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center">
            <div className="text-center w-full">{username[0]} </div>
        </div>
    );
};