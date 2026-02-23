"use client";

import { useState, useCallback } from "react";
import { siteConfig } from "@/content/site.config";
import Toast from "./Toast";

export default function BibTeX() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.bibtex);
      setShowToast(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = siteConfig.bibtex;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setShowToast(true);
    }
  }, []);

  return (
    <>
      <section className="section" id="BibTeX">
        <div className="max-w-desktop mx-auto">
          <h2 className="text-section-title font-bold text-text-heading mb-6">
            BibTeX
          </h2>
          <div className="relative">
            <pre className="bibtex-code">
              <code>{siteConfig.bibtex}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 px-3 py-1.5 bg-text-heading text-white text-xs font-medium rounded-button hover:bg-black transition-colors duration-200 flex items-center gap-1.5"
              aria-label="Copy BibTeX"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </button>
          </div>
        </div>
      </section>
      <Toast
        message="Copied!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
