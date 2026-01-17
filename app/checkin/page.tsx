"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

function CheckinContent() {
  // Your existing page content here
  return (
    <div>Your checkin page content</div>
  );
}

export default function CheckinPage() {
  return (
    <ProtectedRoute>
      <CheckinContent />
    </ProtectedRoute>
  );
}
