export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function getMoodColor(mood: number): string {
  const colors = [
    'text-red-500',    // 0-1
    'text-orange-500', // 2-3
    'text-yellow-500', // 4-5
    'text-lime-500',   // 6-7
    'text-green-500',  // 8-9
  ];
  return colors[Math.min(Math.floor(mood / 2), 4)];
}

// Simple utility to combine class names
export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
