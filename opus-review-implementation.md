---
layout: default
title: Review: Published Implementation Guides
permalink: /opus-review-implementation/
---

# Review: Published Implementation Guides

*Reviewed: July 22, 2026*

> **Note:** Scores marked with * were from the July 2026 review when implementation guides were scored against the solution rubric. Re-scoring against [README-best-practices-implementation.md](README-best-practices-implementation.md) is planned.

## Scorecard

| Rank | Implementation Guide | Score | Verdict |
|------|---------------------|-------|---------|
| 1 | [AAP HA/DR on OpenShift](#1-high-availability-and-disaster-recovery-for-aap-on-openshift) | 9.8/10* | Reference-grade implementation guide with validated test scenarios, observed SLAs, and production-hardened failover runbooks |
| 2 | [Zero Trust Architecture with Ansible](#2-zero-trust-architecture-with-ansible-automation-platform) | 9.6/10* | Five integrated use cases demonstrating defense-in-depth: OPA policy gates, SPIFFE workload identity, JIT credentials, and break-glass recovery with phased implementation roadmap |
| 3 | [AI-Assisted Ansible Developer Experience](#3-ai-assisted-ansible-developer-experience) | 9.5/10* | Comprehensive DevTools guide with four installation methods, MCP integration, and enterprise maturity model from individual to governed |
| 4 | [OpenShift EDA + Kafka Event Pipeline](#4-openshift-eda--kafka-event-pipeline) | 9.2/10* | Deep integration guide: full Kafka/Serverless/EDA pipeline with custom credential types, alternative architectures, and strong validation |
| 5 | [High-Availability AAP with EDB PostgreSQL DR](#5-high-availability-aap-with-edb-postgresql-dr) | 8.7/10* | Reference-grade VM-based DR architecture with diagrams, runbooks, and failback procedures |
| 6 | [AI Infrastructure automation with Ansible](#6-ai-infrastructure-automation-with-ansible) | 7.3/10* | Clear two-collection story (infra.ai + redhat.ai); needs framework alignment and deeper validation |
| 7 | [Intelligent Assistant with Red Hat AI Inference Server](#7-intelligent-assistant-with-red-hat-ai-inference-server) | 6.9/10* | Strong hands-on RHAIIS + Lightspeed hookup; weakest framework alignment of published guides |
| 8 | [PostgreSQL Autovacuum Tuning](#8-postgresql-autovacuum-tuning) | Pending review | Published; not yet scored against the Implementation Guide rubric |
| 9 | [Vulnerability management with Lightwell](#9-vulnerability-management-with-lightwell) | 7.4/10 | Solid demo-grade implementation guide; event-driven CVE-to-patch pipeline is well-structured but needs a partner hero, source repo link, and a richer Architecture/Background section before reaching publication standard |
| 10 | [RHEL 9 STIG and CIS Compliance Scanning](#10-rhel-9-stig-and-cis-compliance-scanning) | 6.8/10 | Strong technical content and solid three-scenario validation; blocked from publication by missing guide-header/badge, no Day-2 Operations section, ASCII art diagram, and no troubleshooting table |

---

## How This Was Scored

Implementation guides will be evaluated against the quality scoring model from [Best Practices for Writing Implementation Guides](README-best-practices-implementation.md):

| Category | Weight |
|----------|--------|
| Outcome Clarity (platform/deployment goal) | 15% |
| Architecture Clarity | 25% |
| Technical Executability | 25% |
| Validation/Testability | 20% |
| Production and Day-2 Readiness | 15% |

Score each category 1-5. Multiply by weight. Final score out of 10. Any category below 3 means revise before publishing.

Scores marked with * in the scorecard above used the solution guide rubric during the July 2026 review and will be updated when re-scored.

---

## Guide Reviews

---

### 1. High Availability and Disaster Recovery for AAP on OpenShift

**File:** [README-AAP-HA-DR-OpenShift.md](README-AAP-HA-DR-OpenShift.md)
**Score:** 9.8 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 5 |
| Architecture Clarity (20%) | 5 |
| Technical Executability (25%) | 5 |
| Validation/Testability (15%) | 5 |
| Production Readiness (10%) | 5 |
| Business Framing (10%) | 4 |

**Stats:** ~8,500 words | 12+ YAML blocks | 1 clickable architecture image + 1 Mermaid diagram | 6 major sections with appendix | Validated test scenarios table

**Strengths:**
- Extraordinary depth: full operator Subscriptions, CNPG Cluster CRs with production-tuned PostgreSQL parameters, complete AAP CR with node scheduling
- Validated test scenarios with **observed SLAs** -- pod recovery (6-59s), DB failover (33-44s), node failure (~7min), full region DR (11-79s)
- Two failover procedures (controlled switchover vs emergency) with exact `oc patch` commands and step-by-step token flow
- Day 2 operations section: backup/restore, DB maintenance, certificate rotation, monitoring stack with key metrics and alert thresholds
- Known Issues section documents real bugs with workarounds (metrics service, stale OAuth2 secret, ODF RGW pg_num)
- Planning section on physical placement, distance, and external dependencies is unusually thoughtful for a technical guide
- Appendix A provides full ODF RGW multisite bootstrap with `radosgw-admin` commands and upstream bug references

**Weaknesses:**
- No demos, videos, or interactive walkthroughs
- Business framing is present (persona table, maturity path) but lacks quantified cost/MTTR savings
- The guide is extremely long -- may benefit from being split into "Architecture + Planning" and "Implementation" documents
- Missing KB blockquote under the title

**Suggestions:**
1. Add a brief executive summary or "Quick Start" at the top for architects who need the architecture without the full implementation
2. Consider a companion reference card (one-pager) with the validated SLA table and failover cheat sheet
3. Add a cost/resource estimate section (node count, storage, operator overhead)

---

### 2. Zero Trust Architecture with Ansible Automation Platform

**File:** [README-ZTA.md](README-ZTA.md)
**Score:** 9.6 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 5 |
| Architecture Clarity (20%) | 5 |
| Technical Executability (25%) | 5 |
| Validation/Testability (15%) | 5 |
| Production Readiness (10%) | 4.5 |
| Business Framing (10%) | 4 |

**Stats:** ~7,800 words | 12+ YAML/bash code blocks | 5 integrated use cases | Per-use-case validation suites | 9-row troubleshooting table | Phased implementation roadmap with success criteria | Measuring Success metrics table

**Strengths:**
- Five integrated use cases that build on each other: verification -> JIT credentials -> policy enforcement -> workload identity -> defense-in-depth. The progression tells a coherent story
- OPA policy enforcement at two rings (platform gateway + in-playbook) is the most sophisticated authorization model in any guide
- SPIFFE/SPIRE workload identity verification is unique across all guides -- cryptographic proof that the automation platform is legitimate
- Defense-in-depth use case with deliberate lockout scenario and tested break-glass recovery is exceptional -- teaches incident response, not just happy-path automation
- Comprehensive validation test suite with deny/allow scenarios for every use case, including "wrong user", "wrong VLAN", "wrong SPIFFE ID" negative tests
- Phased implementation roadmap (Crawl/Walk/Run) with specific week estimates and success criteria for each phase
- Measuring Success table with baseline vs. target metrics and measurement methods
- Source code repository linked directly (nmartins0611/zta-workshop-aap)
- Credential lifecycle timeline table showing exactly what happens from T+0 to T+301s

**Weaknesses:**
- No Mermaid architecture diagram (workflow patterns described in text only)
- No demos, videos, or interactive walkthroughs (workshop link is good but not an embedded demo)
- Business Framing relies on bold percentages in Summary rather than a dedicated ROI Recap section
- Empty HTML anchor tags (`<h2 id="..."></h2>`) clutter the source but don't affect rendering

**Suggestions:**
1. Add a Mermaid diagram showing the defense-in-depth rings and OPA policy enforcement flow
2. Consider recording a demo of the break-glass recovery scenario -- it's the most dramatic and teachable moment
3. Add an embedded Arcade walkthrough for the workshop if available

---

### 3. AI-Assisted Ansible Developer Experience

**File:** [README-Ansible-DevTools.md](README-Ansible-DevTools.md)
**Score:** 9.5 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 4.5 |
| Architecture Clarity (20%) | 5 |
| Technical Executability (25%) | 5 |
| Validation/Testability (15%) | 4 |
| Production Readiness (10%) | 5 |
| Business Framing (10%) | 5 |

**Stats:** ~4,800 words | 3 Mermaid diagrams + multiple code blocks (bash, JSON, YAML) | 4 installation methods with step-by-step | MCP server configuration section | Comprehensive comparison table

**Strengths:**
- Four installation methods (uv/pip, RPM, Dev Container, Dev Spaces) with clear "best for" guidance and honest tradeoffs
- Three Mermaid diagrams: delivery method progression, tool lifecycle (Create/Test/Deploy), and MCP architecture
- MCP section covers both Ansible Devtools MCP server and AAP MCP server with configuration examples for Claude Code, VS Code, and `.mcp.json`
- End-to-end development workflow showing scaffold -> lint -> inventory check -> run on AAP -> troubleshoot loop
- Comparison table across 11 dimensions is immediately actionable for decision-makers
- Maturity path goes to four levels (Crawl through "Fly") -- first guide to do so, appropriate for the topic
- Both upstream (community) and downstream (Red Hat supported) paths documented side by side

**Weaknesses:**
- Borderline solution vs. tutorial -- the framing around "enterprise developer experience" saves it, but the guide could be read as "how to install ADT"
- Validation is relatively simple (`adt --version` + smoke test) compared to the complexity of what's being set up
- No screenshots of the Dev Container or Dev Spaces experience in action
- Missing KB blockquote under the title

**Suggestions:**
1. Add a screenshot or two showing the dev container experience (VS Code with Ansible extension running inside the container)
2. Strengthen the validation section with a more meaningful test (e.g., scaffold a role, lint it, run molecule)
3. Add a "Common questions from leadership" FAQ addressing cost justification for Dev Spaces infrastructure

---

### 4. OpenShift EDA + Kafka Event Pipeline

**File:** [README-OpenShift-EDA-Kafka.md](README-OpenShift-EDA-Kafka.md)
**Score:** 9.2 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 4 |
| Architecture Clarity (20%) | 5 |
| Technical Executability (25%) | 5 |
| Validation/Testability (15%) | 5 |
| Production Readiness (10%) | 4 |
| Business Framing (10%) | 4 |

**Stats:** ~5,200 words | 15+ YAML/shell blocks | 1 Mermaid diagram | 7 numbered walkthrough steps | Per-stage validation table + 7-row troubleshooting table

**Strengths:**
- Complete pipeline from Kubernetes API to EDA: APIServerSource -> KafkaSink -> Kafka -> EDA -> AAP job template, all with deployable CRs
- Custom credential type for Kafka with field definitions and injector configuration -- uncommonly detailed
- Alternative architecture comparison (direct KafkaSink vs KafkaChannel + Subscription) with strengths/limitations table
- CloudEvents table documenting the three event types captured with their triggers and payloads
- Full EDA rulebook with three condition rules and a catch-all debug rule
- Honest scoping: "This guide builds the foundational event pipeline" with Maturity Path showing the path to automated governance

**Weaknesses:**
- The immediate outcome is "log namespace events" -- deliberately basic, but a reader might feel underwhelmed after deploying Kafka + Serverless + EDA
- No demos, videos, or interactive walkthroughs
- No quantified business value (time savings, audit compliance improvement)
- Missing KB blockquote under the title

**Suggestions:**
1. Add a "What you can build on this" section with 2-3 concrete examples (e.g., auto-apply network policies to new namespaces, alert on label violations)
2. Consider adding a simple governance action in a "bonus step" to show immediate value beyond logging
3. Add cost/resource notes for the Kafka + Serverless stack (storage, operator overhead)

---

### 5. High-Availability AAP with EDB PostgreSQL DR

**File:** [README-EDB.md](README-EDB.md)
**Score:** 8.7 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 4.5 |
| Architecture Clarity (20%) | 5 |
| Technical Executability (25%) | 4 |
| Validation/Testability (15%) | 4 |
| Production Readiness (10%) | 4 |
| Business Framing (10%) | 4.5 |

**Stats:** ~7,130 words | 1 YAML block | 3 Mermaid diagrams (architecture, data flow, failover sequence) | 6 phases, 23 titled substeps

**Strengths:**
- Reference-grade architecture: Mermaid diagrams (dual-DC topology, steady-state data flow, failover sequence) plus sizing and component tables
- Operational honesty about failover impact on sessions, in-flight jobs, EDA activations, and DNS TTL
- End-to-end scope from infrastructure provisioning through production cutover, plus an Operational Runbook section
- Strong validation surface: per-stage checklist, health-check scripts, failback procedure, and troubleshooting table
- Clear "Who Benefits" and Crawl/Walk/Run tables connecting engineering work to stakeholder language

**Weaknesses:**
- Unified INI inventory example for DC2 may have grouping issues that could cause install failures if copied literally
- Failover testing alternates between `pg_ctl promote` and EFM-orchestrated behavior without a clear single authority
- Unlike other AAP guides, there is no featured Automation Hub collection table (fine for the topic, but a convention gap)
- Missing KB blockquote under the title

**Suggestions:**
1. Validate and fix the unified inventory INI grouping so DC2 host/variable assignments are unambiguous
2. Add a short "Support and boundaries" note clarifying Red Hat vs EDB support scope
3. For 3-5 key commands (`podman ps`, `efm cluster-status`, `pg_is_in_recovery`), show verbatim expected output

---

### 6. AI Infrastructure automation with Ansible

**File:** [README-IA.md](README-IA.md)
**Score:** 7.3 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 4 |
| Architecture Clarity (20%) | 4 |
| Technical Executability (25%) | 4 |
| Validation/Testability (15%) | 3 |
| Production Readiness (10%) | 3 |
| Business Framing (10%) | 3 |

**Stats:** ~1,927 words | 3 YAML blocks | 1 workflow screenshot | ~8-10 major phases

**Strengths:**
- Clear two-collection story (`infra.ai` for provisioning, `redhat.ai` for model serving) with Automation Hub links
- Multiple integration paths: CLI inventory vs AAP EC2 sync, curl vs Ansible module for validation
- Honest scope note that AWS is an example while `infra.ai` supports other targets

**Weaknesses:**
- Missing canonical Overview, Prerequisites, and Maturity Path sections per the framework
- Validation has no verbatim expected output and no troubleshooting table
- No persona table, no quantified business pain

**Suggestions:**
1. Add an Overview section with a problem statement and consolidated Prerequisites table
2. Expand Validation with sample success output and a 3-5 row troubleshooting table
3. Add persona mapping and business framing

---

### 7. Intelligent Assistant with Red Hat AI Inference Server

**File:** [README-Intelligent-Assistant-RHAIIS.md](README-Intelligent-Assistant-RHAIIS.md)
**Score:** 6.9 / 10*

| Category | Score |
|----------|-------|
| Outcome Clarity (20%) | 4 |
| Architecture Clarity (20%) | 3 |
| Technical Executability (25%) | 3 |
| Validation/Testability (15%) | 4 |
| Production Readiness (10%) | 3 |
| Business Framing (10%) | 4 |

**Stats:** ~1,625 words | 0 YAML blocks (2 YAML snippets in `~~~` fences) | Arcade demo + 1 GPU screenshot | ~12-14 major operations

**Strengths:**
- Tight integration target: connects RHAIIS container flags required for Lightspeed
- Actionable OpenShift wiring: Kubernetes Secret keys and AAP CR spec.lightspeed fields
- Concrete validation with curl test and expected answer text
- Rich Arcade demo embed for visual learners

**Weaknesses:**
- Missing framework sections: no Overview, Solution (components/personas), Workflow/Architecture, or Maturity Path
- No formal architecture diagram
- YAML snippets use `~~~` fences instead of ` ```yaml `

**Suggestions:**
1. Add an Overview with problem statement and a Workflow section with a simple diagram
2. Fix `podman run` formatting; convert `~~~` to ` ```yaml `
3. Add a Validation heading with a troubleshooting table

---

### 8. PostgreSQL Autovacuum Tuning

**File:** [README-AAP-PostgreSQL-Autovacuum-Tuning.md](README-AAP-PostgreSQL-Autovacuum-Tuning.md)
**Score:** Pending review

Published since the July 2026 review. Not yet scored against the [Implementation Guide rubric](README-best-practices-implementation.md).

---

## Cross-Cutting Observations

**What changed since the May 2026 review:**

- **Four implementation guides** scored 9.2-9.8*, raising the quality bar significantly
- **AAP HA/DR on OpenShift** is the deepest single guide in the collection and introduces the "validated test scenarios with observed SLAs" pattern -- all other implementation guides should aspire to this level of production evidence
- **Mermaid adoption is now standard** -- all new implementation guides use Mermaid diagrams (the convention rule change is paying off)
- **MCP coverage is growing** -- the DevTools guide documents MCP server integration with configuration examples for multiple IDEs

**Patterns that work well across implementation guides:**
- Per-stage operational impact tables (HA/DR, EDB, OpenShift-EDA)
- Mermaid diagrams for workflow and architecture visualization (HA/DR, EDB, OpenShift-EDA, DevTools)
- Alternative architecture comparison tables (OpenShift-EDA: KafkaSink vs Channel)
- Validated test scenarios with timing data (HA/DR)
- Phased implementation roadmaps with success criteria (ZTA)
- Day 2 operations and known-issues sections (HA/DR)

**Recurring gaps across implementation guides:**
1. **Source repo links** -- many guides show code excerpts but don't link to a full runnable repo (ZTA is a positive exception)
2. **Cost/resource estimates** -- only DevTools addresses infrastructure cost questions consistently; HA/DR and OpenShift-EDA would benefit from node/storage estimates
3. **Missing KB blockquotes** -- HA/DR, DevTools, OpenShift-EDA, and EDB lack the legacy KB link under the title
4. **Framework alignment** -- AI Infrastructure and RHAIIS need canonical Overview, Prerequisites, and Maturity Path sections before re-scoring

**Ranking rationale:**
- HA/DR on OpenShift (9.8*) leads on raw depth, validated SLAs, and production-hardened failover runbooks
- ZTA (9.6*) is the most sophisticated authorization and identity model with five integrated use cases and break-glass recovery
- DevTools (9.5*) is the broadest developer-focused guide with four installation paths and MCP integration
- OpenShift-EDA (9.2*) is a strong foundational guide limited only by its deliberately basic immediate outcome
- EDB (8.7*) remains a reference-grade VM-based DR architecture; AI Infrastructure (7.3*) and RHAIIS (6.9*) need framework alignment work before they can compete with the top tier
- PostgreSQL Autovacuum Tuning is published but pending its first scored review
## pqc.ansible (`README-PQC-Discovery.md`)

**Score:** 9.2 / 10
**Verdict:** Solid, practitioner-focused implementation guide that covers discovery, variables, AAP integration, and deep verification. Ready to publish after fixing a minor style issue.

### Strengths
- Excellent deep-dive mapping of variables to playbook behavior (e.g., `pqc_collect_*` toggles).
- Thorough verification section with actual commands (`update-crypto-policies --show`, `sshd -T`, `openssl s_client`) and exactly what output to expect per RHEL version.
- Detailed AAP instructions showing job template configurations, required credentials, and survey setups.
- Helpful troubleshooting section covering realistic edge cases (Backstage ingest failures, OpenSSL 3.5+ requirements).

### Weaknesses
- Had one em dash (`—`) violation in the overview (fixed in review).
- Missing twemoji icons on the headings (optional but good for consistency with solution guides).
- The title specifies "Implementation Guide" but it was submitted when reviewing "Solution Guides".

### Suggestions
- Ensure this is linked correctly in the index / README as an Implementation guide, not a Business Solution Guide.
- (Resolved) Changed the em dash (`—`) to a double dash (`--`).

---

### 9. Vulnerability management with Lightwell

**File:** [README-AAP-LightWell-AO](README-AAP-LightWell-AO) ⚠️ Missing `.md` extension
**Score:** 7.4 / 10
**Reviewed:** October 19, 2026

| Category | Score |
|----------|-------|
| Outcome Clarity (15%) | 4 |
| Architecture Clarity (25%) | 3.5 |
| Technical Executability (25%) | 3.5 |
| Validation/Testability (20%) | 4 |
| Production & Day-2 Readiness (15%) | 3.5 |

**Stats:** ~1,100 words | 7 numbered walkthrough steps | 1 Mermaid diagram (7 nodes) | 6-row component table | 5-row troubleshooting table | 3 validation scenarios with verbatim expected output

**Strengths:**
- Event-driven architecture is well-represented: the Mermaid diagram cleanly traces the CVE disclosure path from EDA through RHTPA all the way to OS and app remediation.
- Four distinct demo scenarios (CVE disclosed, OS patch, app dependency via CI/CD, app dependency via GitOps) give readers a concrete feel for what the pipeline can demonstrate.
- Vault file setup is detailed and actionable -- all required variables are listed with examples.
- Troubleshooting table covers the five most likely failure modes with specific log locations and fixes.
- Reset procedure is documented, which is critical for a demo guide.
- Day-2 Operations section addresses the three genuinely important operational concerns: EDA webhook liveness, RHTPA storage growth, and Keycloak certificate rotation.

**Weaknesses:**
- **Missing `.md` extension on filename.** The file is named `README-AAP-LightWell-AO` instead of `README-AAP-LightWell-AO.md`. GitHub Pages will not render it as HTML; browsers will serve raw text.
- **No partner hero callout.** Partner implementation guides require a `guide-hero-callout guide-hero-partner` div with the AAP icon, `+`, and Lightwell wordmark. This is absent.
- **Background section is too thin.** It describes what the demo does rather than the validation environment: no AAP version, no RHEL release confirmed, no scale tested against.
- **Step 6 (EDA Rulebook) has no deployable content.** It says "deploy the EDA Rulebook (`rulebooks/cve_lifecycle.yml`)" but shows no YAML snippet, no EDA UI navigation steps, and no configuration screenshot or code. This step will fail a first-time reader.
- **No source repository link.** The entire guide depends on external shell scripts (`trigger_*.sh`, `setup/*.yml`, `controller/configure.yml`) that are never linked. Readers cannot find or verify the referenced files.
- **Architecture section missing decision rationale.** There is no explanation of why RHTPA is used for SBOM correlation instead of alternatives, why Gitea rather than a supported SCM, or why EDA webhook over polling. The component table describes roles but not decisions.
- **Overview scope boundaries absent.** The framework requires a note on what this guide does NOT cover. There is no mention of scale limits, unsupported configurations, or what lies outside the demo scope.
- **No Automation Hub collection table.** Collections are listed in the Prerequisites bullet but none link to their Automation Hub pages (required by convention).

**Suggestions:**
1. **Rename the file** to `README-AAP-LightWell-AO.md` so GitHub Pages renders it correctly.
2. **Add partner hero callout** -- source or create a Lightwell wordmark at 36px in `assets/images/logos/` and wire up the `guide-hero-partner` div.
3. **Expand Background** to document the validated environment: AAP version, RHEL 9.x release, node sizing used, and whether this was tested against a production or lab topology.
4. **Fill out Step 6** with at least the EDA Controller UI navigation path and the key rulebook fields (source type, webhook port, AAP credential) -- or inline the relevant snippet from `cve_lifecycle.yml`.
5. **Add the source repository link** in the Overview or Prerequisites (e.g., a "Source code" callout linking the GitHub repo hosting the demo playbooks and scripts).
6. **Add Automation Hub links** for every referenced collection (`ansible.eda`, `ansible.controller`, `redhat.rhel_system_roles`, `community.general`, `ansible.posix`, `containers.podman`).
7. **Add a "Scope" note** to the Overview clarifying this is a demo/lab deployment, the approximate fleet scale it was tested on, and what would need to change for production use.

---

### 10. RHEL 9 STIG and CIS Compliance Scanning

**File:** [README-STIG-CIS-compliance.md](README-STIG-CIS-compliance.md)
**Score:** 6.8 / 10
**Reviewed:** October 20, 2026
**Recommended type:** Implementation Guide (content is platform deployment / compliance tooling, not a partner integration)

| Category | Score |
|----------|-------|
| Outcome Clarity (15%) | 4 |
| Architecture Clarity (25%) | 3 |
| Technical Executability (25%) | 3.5 |
| Validation/Testability (20%) | 4 |
| Production & Day-2 Readiness (15%) | 2.5 |

**Stats:** ~1,400 words | 3 walkthrough steps | 2 YAML code blocks | 1 ASCII art diagram (needs Mermaid) | 3 validation scenarios (no troubleshooting table) | Maturity Path as prose bullets (not table)

**Strengths:**
- The core design rationale is excellent: agentless scanning, ephemeral EE delivery, separate assessment and remediation jobs, and per-host NDJSON streaming are all deliberate choices explained clearly in "Key design decisions."
- Three-profile coverage (DISA STIG V2R8, CIS Level 1 Server, CIS Level 2 Server) with rule counts, XCCDF profile IDs, CaC playbook names, and certification status in a clean table -- immediately actionable.
- The `failed_when: rc not in [0, 2]` OpenSCAP exit-code handling is a non-obvious correctness detail that saves implementers from false failures; documenting it here is valuable.
- Validation covers three concrete scenarios: scan completeness (no leftover artefacts), selective remediation (only tagged tasks ran), and CI guardrails (EE build-time `test -f` checks). This is stronger than most guides at this stage.
- The `normalize_xccdf` module design (strip XCCDF prefix so rule IDs match CaC tags directly) eliminates the mapping-file maintenance problem -- worth highlighting more prominently.
- NDJSON streaming rationale (avoiding Controller event-size truncation with 4000+ findings) is the kind of production-scale detail that distinguishes a real implementation guide from tutorial content.

**Weaknesses:**
1. **No `guide-header` div, no badge, no hero callout.** The guide opens with a YAML front matter block and a raw `#` heading. It will not render with the site's styled header or badge pill. The `type: solution-guide` in front matter conflicts with the content classification (this is an implementation guide).
2. **No `guide-outcome` callout.** The overview paragraph is clear but the `<div class="guide-outcome">` callout required by the framework is absent.
3. **No ToC.**
4. **ASCII art architecture diagram.** The workflow diagram uses a text box drawing that does not render with Mermaid. The site convention requires fenced `mermaid` blocks.
5. **No Day-2 Operations section.** Required for all implementation guides. Missing: monitoring (dashboard API health, EE image currency), content lifecycle (DISA quarterly STIG updates → EE rebuild cadence), known issues.
6. **No troubleshooting table in Validation.** The three scenarios describe expected success behaviour but give no symptom → cause → fix mapping for common failures.
7. **Maturity Path is prose bullets, not a table.** The framework requires a `| Maturity | Description |` table. The current content is one long paragraph broken into three bullet points.
8. **No Summary section.**
9. **No Who Benefits table.** Security engineers, compliance officers, and platform owners have distinct concerns not addressed.
10. **Automation Hub links missing.** `ansible.posix` and `redhat.rhel_system_roles` are listed as prerequisites but not linked. The `security.compliance_*` collections have no link (expected for custom collections, but a source repo link is needed).
11. **`status: draft` in front matter.** The guide is not yet ready to publish -- this is accurate but needs to be resolved before the guide appears in the catalog.
12. **Not in `index.md` or `README.md` catalog.**

**Suggestions:**
1. Change the guide type to **Implementation Guide** -- replace the YAML front matter `type` value, add `<div class="guide-header">` with `guide-type-badge--implementation`, and add an AAP hero callout (no external partner logo needed).
2. Add `<div class="guide-outcome">`: "Agentless RHEL 9 compliance scanning against DISA STIG V2R8 and CIS Benchmarks Level 1/2, with a separate tag-scoped remediation job that applies only the rules you choose -- no permanent scanner footprint, no all-or-nothing fixes."
3. Convert the ASCII art diagram to a Mermaid `graph LR` showing: Target hosts → EE (copy datastream, run oscap, fetch XML) → normalize_xccdf → dashboard API → Remediation JT.
4. Add a **Day-2 Operations** section covering: (a) EE rebuild cadence when DISA publishes a quarterly STIG update, (b) monitoring the dashboard API ingest endpoint for 4xx/5xx, (c) known issue with CIS L2 reboot-required rules that cannot be fully auto-remediated without a maintenance window.
5. Add a **troubleshooting table** with at least: `oscap` exits with rc=1 (fatal XML parse error, not a scan finding); `normalize_xccdf` module fails with `ElementTree` error (malformed XCCDF from partial scan); dashboard API returns 413 (NDJSON batch too large, reduce `ndjson_batch_size`); EE build fails at `test -f` (scap-security-guide not installed in base image, check CentOS 9 Stream repo availability).
6. Convert Maturity Path to the standard three-row `| Maturity | Description |` table.
7. Add a Summary section (2-3 sentences wrapping up the guide).
8. Add a Who Benefits table (Security Engineer, Compliance Officer, Platform Owner).
9. Link `ansible.posix` and `redhat.rhel_system_roles` to their Automation Hub pages; add a source repo link for the `security.compliance_*` collections.
