import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="w-full mb-8">
          <div className="text-9xl font-bold text-red-600">404</div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
