---
layout: default
title: Guide Types
permalink: /guide-types/
---

<p class="guide-types-lead">Ansible Guides are organized into two types. Each answers a different question for IT leaders and practitioners evaluating or deploying Ansible Automation Platform.</p>

<div class="guide-types-grid">

<section class="guide-type-panel guide-type-panel--solution">
  <div class="guide-type-panel__header">
    <span class="guide-type-badge guide-type-badge--solution"><i class="fas fa-check-circle" aria-hidden="true"></i> Solution Guide</span>
    <h2 id="solution-guides" class="guide-type-panel__title">Solution Guides</h2>
  </div>

  <dl class="guide-type-facts">
    <div class="guide-type-fact">
      <dt>Who they are for</dt>
      <dd>IT directors, operations leaders, and architects evaluating how Ansible fits a specific business problem.</dd>
    </div>
    <div class="guide-type-fact">
      <dt>What they cover</dt>
      <dd>Partner-focused reference architectures that show how Ansible Automation Platform solves a measurable operational challenge -- often alongside Splunk, ServiceNow, IBM Instana, Azure, or other technologies your organization already runs.</dd>
    </div>
    <div class="guide-type-fact">
      <dt>What you get</dt>
      <dd>A clear problem statement, business outcomes (such as lower MTTR or less manual triage), architecture diagrams, and a path from pilot to production.</dd>
    </div>
    <div class="guide-type-fact">
      <dt>Examples</dt>
      <dd>AIOps automation with Ansible, automated incident remediation with IBM Instana, AIOps with Splunk and Event-Driven Ansible.</dd>
    </div>
  </dl>

  <p class="guide-type-panel__tracks-intro">Solution Guides are grouped into <strong>tracks</strong> by automation pattern. Both tracks use the same guide framework, validation expectations, and maturity path structure.</p>

  <div class="guide-type-tracks">
    <article class="guide-type-track guide-type-track--aiops">
      <div class="guide-type-track__header">
        <span class="guide-type-track__badge">AIOps</span>
        <h3 id="aiops-solutions" class="guide-type-track__title">AIOps Solutions</h3>
      </div>
      <p class="guide-type-track__body">Partner integrations where <strong>AI inference, Ansible Lightspeed, or MCP</strong> augments detection, diagnosis, and remediation. Use these when the outcome depends on intelligent triage, enrichment, or governed playbook selection.</p>
      <p class="guide-type-track__examples"><strong>Examples:</strong> AIOps automation with Ansible, AIOps with Splunk and Event-Driven Ansible, Unlock AIOps with ServiceNow LEAP and Ansible MCP server.</p>
    </article>

    <article class="guide-type-track guide-type-track--event-driven">
      <div class="guide-type-track__header">
        <span class="guide-type-track__badge">Event-Driven</span>
        <h3 id="event-driven-solutions" class="guide-type-track__title">Event-Driven Solutions</h3>
      </div>
      <p class="guide-type-track__body">Partner integrations where <strong>Event-Driven Ansible</strong> closes the loop from partner events to automated action -- without an AI enrichment layer. Use these when webhooks, queues, or CMDB state changes should trigger governed Ansible execution in real time.</p>
      <p class="guide-type-track__examples"><strong>Examples:</strong> Automated WAN circuit failover with NetBox and AAP, event-driven network configuration with NetBox and AAP.</p>
    </article>
  </div>

  <a href="{{ '/' | relative_url }}" class="guide-type-panel__cta">Browse Solution Guides</a>
</section>

<section class="guide-type-panel guide-type-panel--implementation">
  <div class="guide-type-panel__header">
    <span class="guide-type-badge guide-type-badge--implementation"><i class="fas fa-cogs" aria-hidden="true"></i> Implementation Guide</span>
    <h2 id="implementation-guides" class="guide-type-panel__title">Implementation Guides</h2>
  </div>

  <dl class="guide-type-facts">
    <div class="guide-type-fact">
      <dt>Who they are for</dt>
      <dd>Platform owners, infrastructure leads, and senior automation engineers responsible for deploying and operating AAP in production.</dd>
    </div>
    <div class="guide-type-fact">
      <dt>What they cover</dt>
      <dd>How to configure Ansible Automation Platform for reliability, performance, and scale -- high availability, disaster recovery, database tuning, developer tooling, and platform hardening patterns that apply regardless of which integrations you adopt later.</dd>
    </div>
    <div class="guide-type-fact">
      <dt>What you get</dt>
      <dd>Architecture decisions, prerequisites, step-by-step walkthroughs, validation tests, and troubleshooting guidance you can hand to an implementation team.</dd>
    </div>
    <div class="guide-type-fact">
      <dt>Examples</dt>
      <dd>AAP HA/DR on OpenShift with CloudNativePG, PostgreSQL autovacuum tuning, AI infrastructure automation with Ansible.</dd>
    </div>
  </dl>

  <a href="{{ '/' | relative_url }}#implementation-guides" class="guide-type-panel__cta">Browse Implementation Guides</a>
</section>

</div>

<section class="guide-types-together">
  <h2 id="how-they-work-together">How they work together</h2>
  <div class="guide-types-together__grid">
    <div class="guide-types-together__item">
      <span class="guide-types-together__label guide-types-together__label--solution">Solution Guides</span>
      <p>Show <strong>why and what</strong> -- the business problem and the integrated outcome.</p>
    </div>
    <div class="guide-types-together__item">
      <span class="guide-types-together__label guide-types-together__label--implementation">Implementation Guides</span>
      <p>Show <strong>how</strong> -- the platform configuration that makes those outcomes reliable in production.</p>
    </div>
  </div>
  <p class="guide-types-together__closing">Many teams start with a Solution Guide to align on the problem, then use Implementation Guides to build the foundation their automation will run on.</p>
</section>
