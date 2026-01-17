"use client";

import { ArrowLeft, Lock, Shield, Eye } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Link
        href="/premium"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Premium
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
        Privacy Policy
      </h1>

      <div className="glass rounded-2xl p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10">
            <Lock className="h-8 w-8 text-pink-500 mb-3" />
            <h3 className="font-bold mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-gray-300">All your data is encrypted and only you can access it</p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
            <Shield className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-bold mb-2">Zero-Trust Privacy</h3>
            <p className="text-sm text-gray-300">We never sell or share your personal information</p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10">
            <Eye className="h-8 w-8 text-green-500 mb-3" />
            <h3 className="font-bold mb-2">Transparent Controls</h3>
            <p className="text-sm text-gray-300">You control what data you share and with whom</p>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-bold mb-4">Data Collection</h2>
          <p className="text-gray-300 mb-4">
            We collect only the data necessary to provide our mental wellness services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Account information (name, email, profile picture)</li>
            <li>Mood tracking data and journal entries</li>
            <li>Usage patterns to improve our services</li>
            <li>Payment information (processed securely by our partners)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Data Security</h2>
          <p className="text-gray-300">
            We use industry-standard security measures including 256-bit encryption, 
            regular security audits, and secure data storage. Your mental health data 
            is treated with the highest level of confidentiality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Payment Information</h2>
          <p className="text-gray-300">
            Payment information is processed by our PCI-DSS compliant payment partners. 
            We never store your full credit card details. M-Pesa transactions are processed 
            securely through Safaricom's payment infrastructure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Access all your personal data</li>
            <li>Request deletion of your data</li>
            <li>Export your data at any time</li>
            <li>Opt-out of non-essential communications</li>
            <li>Control what information is shared with therapists (with consent)</li>
          </ul>
        </section>

        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            This platform prioritizes your mental health privacy above all else. 
            Developed by Brian Nyarienya with care and respect for your wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
}
