export const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 flex items-center justify-center backdrop-blur-sm">
    <div className="text-center">
      {/* Animated Rings */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-spin-slow" />
        <div className="absolute inset-2 rounded-full border-2 border-purple-500/40 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-4 rounded-full border-2 border-pink-500/50 animate-spin-slow" style={{ animationDuration: '1s' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-pulse" />
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="space-y-2">
        <div className="text-2xl font-bold gradient-text">HIMANSHU VISHWAKARMA</div>
        <div className="flex justify-center gap-1">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, i) => (
            <span 
              key={i}
              className="text-gray-400 text-sm animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="w-32 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);