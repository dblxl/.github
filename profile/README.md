# dblxl

Systems designed to remove friction.

dblxl is the public systems layer behind DoubleXL — a boutique AI strategy and systems studio that helps resourceful teams build and operate AI products at a higher level.

These are not experiments. They are durable reference frameworks built from real consulting work.

---

## The System

Four frameworks. One composition path.

| Layer | Repo | Role |
|---|---|---|
| 1 | [blueprint](https://github.com/dblxl/blueprint) | Turns business workflow definitions into entity models, workflow specs, and Foundation scaffolds via a structured CLI. |
| 2 | [foundation](https://github.com/dblxl/foundation) | Lean SaaS baseline — auth, billing, usage tracking, audit log, and AI integration layer. |
| 3 | [protocol](https://github.com/dblxl/protocol) | AI system contracts — structured output parsing, schema validation, and retry orchestration. |
| 4 | [atlas](https://github.com/dblxl/atlas) | Observable RAG stack — ingestion, chunking, embedding, ranked retrieval, and evaluation. |

```
blueprint → foundation → protocol → atlas
```

Each repo is independently versioned. Use one layer or compose all four.

---

## Live Demo

[dblxl-demo](https://github.com/dblxl/dblxl-demo) surfaces all four frameworks as a deployed portal — realistic fixture data showing what each layer produces, with three end-to-end pipeline examples.

---

Founded by Coy Robison · [DoubleXL](https://www.double-xl.com) · [hello@double-xl.com](mailto:hello@double-xl.com)
