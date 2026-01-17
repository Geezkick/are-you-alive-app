"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
        Terms of Service
      </h1>

      <div className="glass rounded-2xl p-8 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300">
            By accessing and using Are You Alive?, you accept and agree to be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. Premium Subscription</h2>
          <p className="text-gray-300">
            Premium subscriptions are billed on a recurring basis (monthly or annually) until cancelled. 
            You can cancel your subscription at any time through your account settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Payment Terms</h2>
          <p className="text-gray-300">
            We accept M-Pesa for Kenyan customers and major credit/debit cards worldwide. 
            All payments are processed securely through our PCI-DSS compliant payment partners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. Refund Policy</h2>
          <p className="text-gray-300">
            We offer a 30-day money-back guarantee for all premium subscriptions. 
            Contact our support team to request a refund if you're not satisfied.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Data Privacy</h2>
          <p className="text-gray-300">
            Your data is protected with end-to-end encryption. We never sell your personal information 
            and follow strict privacy guidelines to protect your mental health data.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()} • Developed by Brian Nyarienya
          </p>
        </div>
      </div>
    </div>
  );
}
