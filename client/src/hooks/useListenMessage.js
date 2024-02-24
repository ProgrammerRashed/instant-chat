import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import notificationSound from "file-loader!../assets/notification.mp3"; // Import the mp3 file directly
import useConversation from "./useConversation";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        const sound = new Audio(notificationSound); // Create audio instance
        socket?.on("newMessage", (newMessage) => {
            sound.play(); // Play the audio
            setMessages([...messages, newMessage]);
        });

        return () => {
            sound.pause(); // Pause the audio when component unmounts
            socket?.off("newMessage");
        };
    }, [socket, setMessages, messages]);

    return null; // Adjust the return as needed
};

export default useListenMessages;
