"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="rounded-md border border-[#eed8b8] bg-[#fff8ec] px-3 py-1.5 text-xs font-black text-[#17324d] transition hover:bg-white"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
