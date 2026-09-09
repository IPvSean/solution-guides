---
layout: default
title: Guide Types
permalink: /guide-types/
---

# Guide Types

Ansible Guides are organized into two types. Each answers a different question for IT leaders and practitioners evaluating or deploying Ansible Automation Platform.

## Solution Guides {#solution-guides}

**Who they are for:** IT directors, operations leaders, and architects evaluating how Ansible fits a specific business problem.

**What they cover:** Partner-focused reference architectures that show how Ansible Automation Platform solves a measurable operational challenge -- often alongside Splunk, ServiceNow, IBM Instana, Azure, or other technologies your organization already runs.

**What you get:** A clear problem statement, business outcomes (such as lower MTTR or less manual triage), architecture diagrams, and a path from pilot to production. Use these guides to build a business case, align stakeholders, and understand what a successful deployment looks like before you commit engineering time.

**Examples:** AIOps automation with Ansible, automated incident remediation with IBM Instana, AIOps with Splunk and Event-Driven Ansible.

Solution Guides are organized into **tracks** by automation pattern. Both tracks use the same guide framework, validation expectations, and maturity path structure.

### AIOps Solutions {#aiops-solutions}

Partner integrations where **AI inference, Ansible Lightspeed, or MCP** augments detection, diagnosis, and remediation. Use these when the outcome depends on intelligent triage, enrichment, or governed playbook selection.

**Examples:** AIOps automation with Ansible, AIOps with Splunk and Event-Driven Ansible, Unlock AIOps with ServiceNow LEAP and Ansible MCP server.

### Event-Driven Solutions {#event-driven-solutions}

Partner integrations where **Event-Driven Ansible** closes the loop from partner events to automated action -- without an AI enrichment layer. Use these when webhooks, queues, or CMDB state changes should trigger governed Ansible execution in real time.

**Examples:** Automated WAN circuit failover with NetBox and AAP, event-driven network configuration with NetBox and AAP.

[Browse Solution Guides on the homepage](/)

---

## Implementation Guides {#implementation-guides}

**Who they are for:** Platform owners, infrastructure leads, and senior automation engineers responsible for deploying and operating AAP in production.

**What they cover:** How to configure Ansible Automation Platform for reliability, performance, and scale -- high availability, disaster recovery, database tuning, developer tooling, and platform hardening patterns that apply regardless of which integrations you adopt later.

**What you get:** Architecture decisions, prerequisites, step-by-step walkthroughs, validation tests, and troubleshooting guidance you can hand to an implementation team. Use these guides when planning a rollout, hardening an existing deployment, or standardizing how your organization runs AAP.

**Examples:** AAP HA/DR on OpenShift with CloudNativePG, PostgreSQL autovacuum tuning, AI infrastructure automation with Ansible.

[Browse Implementation Guides on the homepage](/#implementation-guides)

---

## How they work together

Solution Guides show **why and what** -- the business problem and the integrated outcome. Implementation Guides show **how** -- the platform configuration that makes those outcomes reliable in production.

Many teams start with a Solution Guide to align on the problem, then use Implementation Guides to build the foundation their automation will run on.
