# AGENTS.md

Standing rules for AI sessions working in this repo. See [README.md](README.md) for the three-layer brand architecture (shalom.design / PreflightUX / OpenCosmos).

## Scope freeze

No new pages, sections, or copy unless Shalom explicitly provides the language. The current single-page placeholder is deliberate, not a draft — do not expand it, add a nav, add sections, or write marketing copy on your own initiative. The offer is an unwritten hypothesis pending customer validation.

## Coupling rule

- `@opencosmos/ui` is consumed only via npm. Never vendor or copy its internals into this repo.
- PreflightUX is never imported, vendored, or referenced here — it's a separate instrument with its own repo (`github.com/preflightux/preflightux`).

## No additions without asking

No CMS, no auth, no analytics, and no additional dependencies beyond what's already installed — without asking first.
