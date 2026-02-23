"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (show) {
      setExiting(false);
      const timer = setTimeout(() => {
        setExiting(true);
        setTimeout(onClose, 300);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <div
        className={`bg-text-heading text-white px-6 py-3 rounded-button shadow-lg text-sm font-medium ${
          exiting ? "toast-exit" : "toast-enter"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
