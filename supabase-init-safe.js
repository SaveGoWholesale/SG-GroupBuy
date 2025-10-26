// supabase-init-safe.js
(function () {
  const URL = "https://bwlqwrlsibmqttndymzu.supabase.co";
  const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHF3cmxzaWJtcXR0bmR5bXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MDA0MzcsImV4cCI6MjA3NjA3NjQzN30.QQ8Lncmyl_VfP4a_hc9JP-W9YdlcRl21-8N4LTi2WDM";

  if (!window.supabase) {
    console.error("[supabase-init-safe] Supabase UMD library not loaded yet.");
    return;
  }
  const isNamespace = typeof window.supabase.createClient === "function";
  const alreadyClient = typeof window.supabase.from === "function";
  if (alreadyClient) {
    window.__supabase = window.supabase;
    window.sb = window.__supabase;
    console.info("[supabase-init-safe] Using existing Supabase client.");
    return;
  }
  try {
    const client = window.supabase.createClient(URL, KEY, {
      auth: { persistSession: true, storageKey: "savego-auth" }
    });
    window.__supabase = client;
    window.sb = client;
    if (isNamespace) {
      window.supabase = client;
      console.info("[supabase-init-safe] Created global `supabase` client.");
    } else {
      console.info("[supabase-init-safe] Created client at `__supabase` / `sb`.");
    }
  } catch (e) {
    console.error("[supabase-init-safe] Failed to init Supabase:", e);
  }
})();
