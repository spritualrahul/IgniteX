export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Simple CSS spinner — no external resources, no CLS */}
        <div
          className="w-10 h-10 border-4 border-gray-200 border-t-red-600 rounded-full"
          style={{ animation: 'spin 0.8s linear infinite' }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
