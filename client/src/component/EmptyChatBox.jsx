const EmptyChatBox = () => {
  return (
    <div className="h-[100vh] bg-darkBlue text-white">
      <div className="flex justify-center pt-[26vh]">
        <img
          src="https://i.ibb.co/NxNXJ5p/Screenshot-2024-02-20-213813-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <div>
          <p className="text-xl font-bold mt-5  text-slate-300">
            It's Nice to Chat With Someone
          </p>
          <p className="text-center text-slate-400 italic font-medium">
            Pick a person from left menu
          </p>
          <p className="text-center text-slate-400 italic font-medium">
            And start your conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyChatBox;
