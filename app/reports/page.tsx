"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  Filter,
  Calendar,
  Users,
  BarChart3,
  Printer,
  Share2,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<string>("weekly");

  const reports = [
    { id: "weekly", name: "Weekly Wellness Report", description: "7-day overview of mood, sleep, and activities" },
    { id: "monthly", name: "Monthly Progress Report", description: "Comprehensive monthly analysis and trends" },
    { id: "therapy", name: "Therapy Session Summary", description: "Session notes and progress tracking" },
    { id: "crisis", name: "Crisis Intervention Report", description: "Incident reports and intervention details" },
    { id: "compliance", name: "HIPAA Compliance Report", description: "Privacy and security compliance" },
    { id: "custom", name: "Custom Analytics Report", description: "Build your own report with custom metrics" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/therapist/dashboard"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Therapist Dashboard
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
          Professional Reports
        </h1>
        <p className="text-gray-400">Generate, manage, and export professional reports</p>
      </div>

      {/* Report Selection */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Available Reports
            </h2>
            <p className="text-gray-400">Select a report type to generate or view</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Filter className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report) => (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                selectedReport === report.id
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-pink-500'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${
                  selectedReport === report.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'bg-white/10'
                }`}>
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold">{report.name}</h3>
              </div>
              <p className="text-sm text-gray-400">{report.description}</p>
              <div className="flex gap-2 mt-4">
                <button className="text-sm px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20">
                  Preview
                </button>
                <button className="text-sm px-3 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-500">
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Preview */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Report Preview</h2>
            <p className="text-gray-400">Weekly Wellness Report • Generated: Today</p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Printer className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all">
              <Download className="h-5 w-5" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Mock Report Content */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
            <h3 className="text-lg font-bold mb-4">Executive Summary</h3>
            <p className="text-gray-300">
              Client shows significant improvement in mood consistency (+15% from last week). 
              Sleep patterns have stabilized with an average of 7.5 hours per night. 
              Journaling consistency remains high at 85% completion rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-green-500" />
                <h4 className="font-bold">Engagement</h4>
              </div>
              <p className="text-3xl font-bold">92%</p>
              <p className="text-sm text-gray-400">Daily check-in completion</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <h4 className="font-bold">Progress</h4>
              </div>
              <p className="text-3xl font-bold">+15%</p>
              <p className="text-sm text-gray-400">Mood improvement</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-purple-500" />
                <h4 className="font-bold">Consistency</h4>
              </div>
              <p className="text-3xl font-bold">28 days</p>
              <p className="text-sm text-gray-400">Current streak</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <h3 className="text-lg font-bold mb-4">Recommendations</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Continue with current meditation routine (shows strong correlation with mood improvement)</li>
              <li>• Consider introducing gratitude journaling to boost positive affect</li>
              <li>• Monitor sleep patterns as seasonal changes approach</li>
              <li>• Schedule follow-up session in 2 weeks to assess progress</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Report History */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4">Report Name</th>
                <th className="text-left p-4">Generated</th>
                <th className="text-left p-4">Client</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: "Weekly Report", date: "Today", client: "Alex Johnson", status: "complete" },
                { id: 2, name: "Therapy Summary", date: "2 days ago", client: "Taylor Smith", status: "complete" },
                { id: 3, name: "Monthly Analysis", date: "1 week ago", client: "Jordan Lee", status: "pending" },
                { id: 4, name: "Crisis Report", date: "2 weeks ago", client: "Casey Brown", status: "complete" },
              ].map((report) => (
                <tr key={report.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">
                    <div className="font-bold">{report.name}</div>
                  </td>
                  <td className="p-4">
                    <div className="text-gray-400">{report.date}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium">{report.client}</div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      report.status === 'complete' 
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30">
                        <FileText className="h-4 w-4 text-blue-500" />
                      </button>
                      <button className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30">
                        <Download className="h-4 w-4 text-green-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
