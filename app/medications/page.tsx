"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Pill, 
  Bell, 
  Calendar, 
  AlertTriangle,
  Plus,
  Trash2,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function MedicationsPage() {
  const [medications, setMedications] = useState([
    { id: 1, name: "Escitalopram", dosage: "10mg", frequency: "Daily", time: "9:00 AM", taken: true },
    { id: 2, name: "Lorazepam", dosage: "0.5mg", frequency: "As Needed", time: "When needed", taken: false },
    { id: 3, name: "Multivitamin", dosage: "1 tablet", frequency: "Daily", time: "8:00 AM", taken: true },
  ]);

  const toggleTaken = (id: number) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  const addMedication = () => {
    const newMed = {
      id: medications.length + 1,
      name: "New Medication",
      dosage: "0mg",
      frequency: "Daily",
      time: "9:00 AM",
      taken: false
    };
    setMedications([...medications, newMed]);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
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
          Medication Tracker
        </h1>
        <p className="text-gray-400">Track medications, set reminders, log side effects</p>
      </div>

      {/* Today's Medications */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Pill className="h-5 w-5 text-blue-500" />
              Today's Medications
            </h2>
            <p className="text-gray-400">Track what you've taken today</p>
          </div>
          <button
            onClick={addMedication}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Add Medication
          </button>
        </div>

        <div className="space-y-4">
          {medications.map((med) => (
            <div key={med.id} className="glass rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${med.taken ? 'bg-green-500/20' : 'bg-blue-500/20'}`}>
                    <Pill className={`h-6 w-6 ${med.taken ? 'text-green-500' : 'text-blue-500'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{med.name}</h3>
                    <p className="text-gray-400">{med.dosage} • {med.frequency} • {med.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTaken(med.id)}
                    className={`p-2 rounded-lg ${med.taken ? 'bg-green-500/20' : 'bg-white/10'} hover:opacity-90 transition-all`}
                  >
                    {med.taken ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-400" />
                    )}
                  </button>
                  <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-all">
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reminders & Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-6 w-6 text-yellow-500" />
            <h3 className="text-xl font-bold">Reminders</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
              <div>
                <p className="font-medium">Morning Medications</p>
                <p className="text-sm text-gray-400">9:00 AM Daily</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
              <div>
                <p className="font-medium">Refill Alert</p>
                <p className="text-sm text-gray-400">3 days until refill needed</p>
              </div>
              <AlertTriangle className="h-5 w-5 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-purple-500" />
            <h3 className="text-xl font-bold">Weekly Summary</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Adherence Rate</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                </div>
                <span className="font-bold">80%</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400">Missed Doses This Week</p>
              <p className="text-2xl font-bold text-red-400">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Effects Tracker */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Side Effects Log</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {["Nausea", "Headache", "Drowsiness", "Insomnia"].map((effect) => (
            <button
              key={effect}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-center"
            >
              <div className="text-sm font-medium">{effect}</div>
              <div className="text-xs text-gray-400">Click to log</div>
            </button>
          ))}
        </div>
        <button className="w-full border-2 border-pink-500/30 text-pink-500 py-3 rounded-xl font-semibold hover:bg-pink-500/10 hover:border-pink-500/50 transition-all">
          View Detailed Log
        </button>
      </div>
    </div>
  );
}
