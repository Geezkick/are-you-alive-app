"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Shield, 
  Brain, 
  Users,
  Zap,
  Lock,
  Check,
  ArrowLeft,
  Crown
} from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  const features = [
    { icon: Brain, text: "AI Insights & Pattern Recognition" },
    { icon: Shield, text: "Advanced Crisis Response Tools" },
    { icon: Users, text: "Therapist Integration & Support" },
    { icon: Zap, text: "Priority Support & Faster Response" },
    { icon: Lock, text: "Advanced Encryption & Security" },
    { icon: Sparkles, text: "Custom Mood Scales & Analytics" },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["Basic mood tracking", "Simple journal", "Community access", "Basic coping tools"],
      color: "border-gray-500",
      buttonText: "Current Plan",
    },
    {
      name: "Premium",
      price: selectedPlan === "yearly" ? "$8.99" : "$12.99",
      period: selectedPlan === "yearly" ? "/month" : "/month",
      note: selectedPlan === "yearly" ? "Billed annually ($107.88)" : "Billed monthly",
      features: [
        "All Free features",
        "AI-powered insights",
        "Emergency response tools",
        "Therapist integration",
        "Advanced analytics",
        "Priority support",
      ],
      color: "border-pink-500",
      buttonText: "Upgrade to Premium",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "All Premium features",
        "Organization dashboard",
        "Custom integrations",
        "Dedicated support",
        "HIPAA compliance",
        "Bulk user management",
      ],
      color: "border-purple-500",
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
          Premium Features
        </h1>
        <p className="text-gray-400">Unlock advanced wellness tools and support</p>
      </div>

      {/* Hero Section */}
      <div className="glass rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <Crown className="h-12 w-12 text-yellow-500/50" />
        </div>
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">MOST POPULAR</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Elevate Your Wellness Journey</h2>
          <p className="text-gray-300 mb-6">
            Join thousands who have transformed their mental wellness with our comprehensive, 
            privacy-focused premium platform. Get personalized insights, priority support, 
            and advanced tools designed for your healing journey.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex glass rounded-xl p-1">
          <button
            onClick={() => setSelectedPlan("monthly")}
            className={`px-6 py-2 rounded-lg transition-all ${
              selectedPlan === "monthly"
                ? "bg-gradient-to-r from-pink-500 to-purple-600"
                : "hover:bg-white/10"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan("yearly")}
            className={`px-6 py-2 rounded-lg transition-all ${
              selectedPlan === "yearly"
                ? "bg-gradient-to-r from-pink-500 to-purple-600"
                : "hover:bg-white/10"
            }`}
          >
            Yearly (Save 25%)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass rounded-2xl p-6 border-2 ${plan.color} relative ${
              plan.popular ? "scale-105" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              {plan.note && <p className="text-sm text-gray-400 mt-1">{plan.note}</p>}
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="glass rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">Premium Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <feature.icon className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">{feature.text}</h4>
                <p className="text-sm text-gray-400">
                  Advanced tools and insights to support your wellness journey
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Can I cancel my premium subscription anytime?",
              a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
            },
            {
              q: "Is my data secure with premium?",
              a: "Yes, all data is encrypted end-to-end. We never sell your data and follow zero-trust privacy principles."
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, PayPal, and Apple Pay for premium subscriptions."
            },
            {
              q: "Do you offer discounts for students or non-profits?",
              a: "Yes, we offer special discounts for students, educators, and non-profit organizations. Contact our support team for more information."
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <h4 className="font-bold mb-2">{item.q}</h4>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <p className="text-gray-400 mb-4">Need help choosing the right plan?</p>
        <button className="border-2 border-pink-500/30 text-pink-500 px-8 py-3 rounded-xl font-semibold hover:bg-pink-500/10 hover:border-pink-500/50 transition-all">
          Contact Our Support Team
        </button>
      </div>
    </div>
  );
}
