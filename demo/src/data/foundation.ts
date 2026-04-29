export const modules = [
  {
    name: "auth",
    label: "Auth",
    description: "Session management, JWT tokens, role-based access control, and provider adapters (BetterAuth-compatible).",
    status: "stable" as const,
    files: ["src/auth/session.ts", "src/auth/middleware.ts", "src/auth/roles.ts"],
  },
  {
    name: "billing",
    label: "Billing",
    description: "Subscription lifecycle, plan enforcement, usage-based billing hooks, and Stripe adapter.",
    status: "stable" as const,
    files: ["src/billing/plans.ts", "src/billing/stripe.ts", "src/billing/webhooks.ts"],
  },
  {
    name: "usage",
    label: "Usage",
    description: "Token and API call telemetry, per-tenant cost attribution, and rollup aggregations.",
    status: "stable" as const,
    files: ["src/usage/tracker.ts", "src/usage/aggregate.ts", "src/usage/report.ts"],
  },
  {
    name: "ai",
    label: "AI",
    description: "LLM orchestration panel, model routing, prompt versioning, and Protocol integration for output validation.",
    status: "stable" as const,
    files: ["src/ai/panel.ts", "src/ai/router.ts", "src/ai/prompts.ts"],
  },
];

export const usageRows = [
  { date: "2026-04-29", tokens: 142_800, calls: 312, cost: "$2.14" },
  { date: "2026-04-28", tokens: 98_400,  calls: 218, cost: "$1.48" },
  { date: "2026-04-27", tokens: 201_600, calls: 441, cost: "$3.02" },
  { date: "2026-04-26", tokens: 76_200,  calls: 167, cost: "$1.14" },
  { date: "2026-04-25", tokens: 54_600,  calls: 119, cost: "$0.82" },
];

export const billingRecord = {
  tenant: "acme-corp",
  plan: "Pro",
  seats: 4,
  monthlyBase: "$149.00",
  usageCharge: "$8.60",
  totalDue: "$157.60",
  periodStart: "2026-04-01",
  periodEnd: "2026-04-30",
  nextInvoice: "2026-05-01",
  status: "active" as const,
};
