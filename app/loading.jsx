const Loading = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-800">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <p className="text-lg mt-4">Loading...</p>
      </div>
    );
  };

  export default Loading;
