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
  Crown,
  CreditCard,
  Smartphone,
  Wallet,
  Lock as LockIcon,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "card">("mpesa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setShowSuccess(true);
    
    // Reset success after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? '/' + v.slice(2, 4) : '');
    }
    return v;
  };

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

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
        >
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-bold">Payment Successful!</p>
              <p className="text-sm text-gray-300">Your premium subscription is now active. Welcome to premium!</p>
            </div>
          </div>
        </motion.div>
      )}

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

            {plan.name === "Premium" ? (
              <button
                onClick={() => {
                  document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {plan.buttonText}
              </button>
            ) : (
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {plan.buttonText}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Payment Section */}
      <div id="payment-section" className="glass rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Wallet className="h-6 w-6 text-pink-500" />
          Payment Details
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Payment Method Selection */}
          <div>
            <h3 className="text-xl font-bold mb-4">Select Payment Method</h3>
            
            <div className="space-y-4 mb-6">
              {/* M-Pesa Option */}
              <div
                onClick={() => setPaymentMethod("mpesa")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === "mpesa"
                    ? "border-pink-500 bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    paymentMethod === "mpesa" 
                      ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                      : "bg-white/10"
                  }`}>
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">M-Pesa</h4>
                      {paymentMethod === "mpesa" && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400">Pay with your mobile phone (Kenya)</p>
                  </div>
                </div>
              </div>

              {/* Debit/Credit Card Option */}
              <div
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === "card"
                    ? "border-pink-500 bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    paymentMethod === "card" 
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500" 
                      : "bg-white/10"
                  }`}>
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">Debit/Credit Card</h4>
                      {paymentMethod === "card" && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400">Visa, MasterCard, American Express</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Security Info */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <LockIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-bold">Secure Payment</p>
                  <p className="text-sm text-gray-300 mt-1">
                    All payments are encrypted and secure. We never store your full card details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Payment Form */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {paymentMethod === "mpesa" ? "M-Pesa Payment" : "Card Details"}
            </h3>
            
            <form onSubmit={handlePayment} className="space-y-6">
              {paymentMethod === "mpesa" ? (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="07XX XXX XXX"
                        className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Enter your Safaricom M-Pesa registered phone number
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-bold">How M-Pesa Payment Works</p>
                        <ol className="list-decimal list-inside text-sm text-gray-300 mt-2 space-y-1">
                          <li>Enter your phone number above</li>
                          <li>Click "Pay with M-Pesa"</li>
                          <li>Check your phone for STK Push notification</li>
                          <li>Enter your M-Pesa PIN to complete payment</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <ShieldCheck className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      Your card details are secured with 256-bit encryption and processed by our PCI-DSS compliant payment partner.
                    </p>
                  </div>
                </>
              )}

              {/* Order Summary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-3">Order Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Premium Plan</span>
                    <span>{selectedPlan === "yearly" ? "$8.99/month" : "$12.99/month"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Billing Cycle</span>
                    <span className="capitalize">{selectedPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Today</span>
                    <span className="text-lg font-bold">
                      {selectedPlan === "yearly" ? "$107.88" : "$12.99"}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <LockIcon className="h-5 w-5" />
                    {paymentMethod === "mpesa" ? "Pay with M-Pesa" : "Pay Securely"}
                    <span className="ml-auto">
                      {selectedPlan === "yearly" ? "$107.88" : "$12.99"}
                    </span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By proceeding, you agree to our{" "}
                <Link href="/terms" className="text-pink-500 hover:text-pink-400">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-pink-500 hover:text-pink-400">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
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
              q: "What payment methods do you accept?",
              a: "We accept M-Pesa for Kenyan customers and all major credit/debit cards (Visa, MasterCard, American Express) worldwide."
            },
            {
              q: "Is M-Pesa payment instant?",
              a: "Yes! M-Pesa payments are processed instantly. You'll receive a confirmation on your phone and immediate access to premium features."
            },
            {
              q: "Can I cancel my premium subscription anytime?",
              a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
            },
            {
              q: "Is my payment information secure?",
              a: "Yes, all payments are encrypted end-to-end. We never store your full card details and use PCI-DSS compliant payment processors."
            },
            {
              q: "Do you offer refunds?",
              a: "We offer a 30-day money-back guarantee. If you're not satisfied with Premium, contact our support team for a full refund."
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <h4 className="font-bold mb-2">{item.q}</h4>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Credit */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
            <span className="font-bold">BN</span>
          </div>
          <div className="text-left">
            <p className="font-medium">Developed by Brian Nyarienya</p>
            <p className="text-sm text-gray-400">Premium Mental Wellness Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}
