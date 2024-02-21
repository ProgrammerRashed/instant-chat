import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "./useConversation";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
    console.log(selectedConversation)

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`http://localhost:4000/api/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			console.log(data)
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;