"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 px-4 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium">Developed by Brian Nyarienya</p>
              <p className="text-sm text-gray-400">Mental Wellness Platform</p>
            </div>
          </div>
          <p className="text-gray-400">
            All rights reserved • End-to-end encrypted • Zero-trust privacy
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2026 Are You Alive? • Mental Health Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
