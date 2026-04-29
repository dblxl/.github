export const sampleQuery =
  "How does the knowledge base handle low-confidence answers?";

export const retrievedChunks = [
  {
    id: "chunk-0041",
    score: 0.94,
    source: "kb-ops-guide.md · §4.3",
    text: "When retrieval confidence falls below the configured threshold (default 0.6), the response is flagged and routed to the support agent review queue rather than returned directly to the customer.",
  },
  {
    id: "chunk-0038",
    score: 0.87,
    source: "kb-ops-guide.md · §4.1",
    text: "Confidence scores are computed as a weighted average of semantic similarity (0.7) and recency of the source article (0.3). Articles updated more than 90 days ago receive a staleness penalty.",
  },
  {
    id: "chunk-0112",
    score: 0.79,
    source: "escalation-policy.md · §2",
    text: "Escalated queries are surfaced in the agent dashboard with the original question, the top-3 retrieved chunks, and the draft answer. Agents can approve, edit, or discard the response.",
  },
];

export const generatedAnswer = `Low-confidence answers (score < 0.6) are not returned directly to customers. Instead, they are routed to the support agent review queue where an agent can approve, edit, or discard the draft response before delivery.

**Sources:** kb-ops-guide.md §4.1, §4.3 · escalation-policy.md §2`;

export const evalMetrics = {
  recall5: 0.87,
  mrr: 0.79,
  latencyMs: 340,
  chunksIndexed: 1_840,
  avgChunkTokens: 128,
};

export const pipelineStages = [
  { name: "Ingest", detail: "Fetch & normalize source documents" },
  { name: "Chunk", detail: "Split at 128-token windows, 20-token overlap" },
  { name: "Embed", detail: "text-embedding-3-small · 1536-dim vectors" },
  { name: "Retrieve", detail: "pgvector cosine similarity, top-5" },
  { name: "Evaluate", detail: "recall@5, MRR, latency per query" },
];
