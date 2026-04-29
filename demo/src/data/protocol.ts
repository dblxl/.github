export const rawAiResponse = `Sure! Here's the summary you asked for:

{
  "issue_id": "ISS-4821",
  "category": "billing",
  "sentiment": "frustrated",
  "priority": "high",
  "summary": "Customer was charged twice for the Pro plan in March. They have emailed support twice with no resolution and are threatening to cancel.",
  "suggested_action": "escalate",
  "confidence": 0.91
}

Let me know if you need anything else!`;

export const parsedOutput = {
  issue_id: "ISS-4821",
  category: "billing",
  sentiment: "frustrated",
  priority: "high",
  summary:
    "Customer was charged twice for the Pro plan in March. They have emailed support twice with no resolution and are threatening to cancel.",
  suggested_action: "escalate",
  confidence: 0.91,
};

export const contractSchema = `import { z } from "zod";

export const SupportSummaryContract = z.object({
  issue_id:         z.string(),
  category:         z.enum(["billing", "technical", "general"]),
  sentiment:        z.enum(["neutral", "frustrated", "satisfied"]),
  priority:         z.enum(["low", "medium", "high"]),
  summary:          z.string().max(500),
  suggested_action: z.enum(["resolve", "escalate", "monitor"]),
  confidence:       z.number().min(0).max(1),
});

export type SupportSummary = z.infer<typeof SupportSummaryContract>;`;

export const retryLog = [
  {
    attempt: 1,
    status: "failed" as const,
    reason: "Response contained markdown fences around JSON",
    duration: "1.2s",
  },
  {
    attempt: 2,
    status: "failed" as const,
    reason: "Missing required field: issue_id",
    duration: "0.9s",
  },
  {
    attempt: 3,
    status: "success" as const,
    reason: "All fields present and valid",
    duration: "1.1s",
  },
];
