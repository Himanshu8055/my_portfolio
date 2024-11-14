
export const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <div className="text-2xl text-blue-500 font-bold animate-pulse">Loading <br /> Experience</div>
      </div>
    </div>
  );