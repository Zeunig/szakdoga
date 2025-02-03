"use client";

export default function Alert({alert_type, title, message} : {alert_type: string, title: string, message: string}) {
    if (alert_type === "") {
        return (<div></div>);
    }
    let title_class;
    let message_class;
    switch(alert_type) {
        case "danger":
            title_class = "bg-red-500 text-white font-bold rounded-t px-4 py-2";
            message_class = "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700";
            break;
        case "warning":
            title_class = "bg-yellow-500 text-white font-bold rounded-t px-4 py-2";
            message_class = "border border-t-0 border-yellow-400 rounded-b bg-yellow-100 px-4 py-3 text-yellow-700";
            break;
        case "info":
            title_class = "bg-blue-500 text-white font-bold rounded-t px-4 py-2";
            message_class = "border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700";
            break;
        case "success":
            title_class = "bg-green-500 text-white font-bold rounded-t px-4 py-2";
            message_class = "border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700";
            break;
        default:
            title_class = "bg-red-500 text-white font-bold rounded-t px-4 py-2";
            message_class = "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700";
            break;
    }
    return (
        <div role="alert" className="my-2 mx-5 mt-5">
            <div className={title_class}>
                {title}
            </div>
            <div className={message_class}>
                <p>{message}</p>
            </div>
        </div>
    )
}