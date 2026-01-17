import Link from "next/link";
import { Home, Heart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
          <Heart className="h-12 w-12 text-white" />
        </div>
        
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/dashboard"
            className="border-2 border-pink-500/30 text-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-pink-500/10 hover:border-pink-500/50 transition-all"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
