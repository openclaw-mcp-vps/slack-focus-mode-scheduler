export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers &amp; Team Leads
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Schedule Team-Wide Slack{" "}
          <span className="text-[#58a6ff]">Quiet Hours</span>{" "}Automatically
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Set organization-wide Do Not Disturb periods, block non-urgent messages, and create focus time blocks so your team can do deep work — without the constant ping.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Get Started — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Slack workspace.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔕", title: "Org-Wide DND", desc: "Push Do Not Disturb to every team member on a schedule." },
          { icon: "🚦", title: "Urgency Filter", desc: "Webhooks detect and allow only critical messages through." },
          { icon: "🗓️", title: "Focus Blocks", desc: "Auto-create calendar focus blocks synced to Slack status." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Per workspace. Unlimited team members.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited focus schedules",
              "Slack DND automation",
              "Urgency-based message filtering",
              "Calendar sync (Google &amp; Outlook)",
              "Slack App + webhook setup guide",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Does this require admin access to our Slack workspace?",
              a: "Yes, a Slack workspace admin needs to install the app once. After that, any team lead can manage focus schedules from the dashboard."
            },
            {
              q: "How does urgency filtering work?",
              a: "Our webhook listens for messages containing configurable keywords (e.g., 'urgent', 'incident', 'outage') and bypasses DND for those, so truly critical alerts always get through."
            },
            {
              q: "Can I set different schedules for different teams?",
              a: "Absolutely. You can create per-channel or per-user-group focus schedules, so engineering can have deep work hours while support stays available."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Slack Focus Mode Scheduler. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
