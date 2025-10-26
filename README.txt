Local Run Tips:
1) Put index_local_fixed.html and supabase-init-safe.js in the SAME folder.
2) Double-click index_local_fixed.html to open in a browser.
3) If your browser blocks local file scripts, run a local server:
   npx serve
   ...and open the http://localhost URL.
4) In DevTools Console, test:
   const sb = window.supabase || window.__supabase || window.sb;
   sb.from('products').select('*').limit(1).then(console.log);
