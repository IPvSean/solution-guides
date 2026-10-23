---
layout: default
title: What's New
permalink: /updates/
---

<div class="hub-intro-row">
  <p class="guide-types-lead">Automated release notes for this site -- new solution guides, notable guide updates, and site changes from the last 30 days. Regenerated weekly from git history. For durable decisions (for example catalog retirements), see <a href="{{ '/release-notes/' | relative_url }}">Release notes</a>.</p>
</div>

<!-- BEGIN:AUTO-UPDATES -->
*Rolling window: 2026-09-19 to 2026-10-19. Regenerated weekly from git history.*

### New guides

- [LogicMonitor + Ansible Automation Platform: AIOps Solution Guide]({{ "/README-AIOps-LogicMonitor" | relative_url }}) -- Add LogicMonitor AIOps solution guide (#59)
- [Automated runtime mitigation for Linux OT hosts]({{ "/README-Falco-runtime-mitigation" | relative_url }}) -- feat: add Falco runtime mitigation solution guide and review
- [Intelligent Network Automation with Gluware and Ansible]({{ "/README-Gluware-Network-Automation" | relative_url }}) -- Add WIP Gluware network automation solution guide
- [PQC Discovery and Scoped Remediation - Implementation Guide]({{ "/README-PQC-Discovery" | relative_url }}) -- Add files via upload
- [Proactive Vulnerability Remediation with Satellite, Event-Driven Ansible, and Lightspeed On-Premises]({{ "/README-Satellite-CVE-Remediation" | relative_url }}) -- Add Satellite CVE remediation solution guide

### Guide updates

- [High Availability and Disaster Recovery for AAP 2.7 on OpenShift]({{ "/README-AAP-HA-DR-OpenShift" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [PostgreSQL Autovacuum Tuning Guide for Ansible Automation Platform]({{ "/README-AAP-PostgreSQL-Autovacuum-Tuning" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Event-Driven Remediation with Azure Service Bus and Ansible]({{ "/README-AIOps-Azure-Service-Bus" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Unlock AIOps with ServiceNow LEAP and Ansible MCP server]({{ "/README-AIOps-ServiceNow" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [AIOps with Splunk and Event-Driven Ansible]({{ "/README-AIOps-Splunk-ITSI" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [AIOps Ticket Enrichment]({{ "/README-AIOps-Ticket-Enrichment" | relative_url }}): Tighten UC01 opening: drop meta callout, lead with Overview.
- [Incident and Ticket Enrichment]({{ "/README-AIOps-Use-Case-01-Incident-Ticket-Enrichment" | relative_url }}): Replace UC01 stage locator callouts with a scannable table.
- [Curated Automation Remediation: From EDA to Orchestrated Automation]({{ "/README-AIOps-Use-Case-04-Curated-Automation-Remediation" | relative_url }}): Position foundational AIOps workflow as the high-level UC04 walkthrough.
- [Self-healing infrastructure: From EDA to Orchestrated Automation]({{ "/README-AIOps-Use-Case-06-Self-Healing-Infrastructure" | relative_url }}): Drop defensive workshop-appendix fencing from AIOps and UC06.
- [Windows Certificate Rotation with AI Risk Analysis]({{ "/README-AIOps-Windows-Cert-Rotation" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [AIOps automation with Ansible]({{ "/README-AIOps" | relative_url }}): Clarify 'select from library' with concrete examples
- [Ansible Development Workspaces]({{ "/README-Ansible-DevSpaces" | relative_url }}): fix: size Red Hat logo for raw markdown rendering (#66)
- [AI-Assisted Ansible Developer Experience]({{ "/README-Ansible-DevTools" | relative_url }}): fix: size Red Hat logo for raw markdown rendering (#66)
- [High-Availability Ansible Automation Platform with EDB PostgreSQL Active-Passive DR]({{ "/README-EDB" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [AI Infrastructure Automation with Ansible]({{ "/README-IA" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Automated Incident Remediation with IBM Instana and Ansible Automation Platform]({{ "/README-Instana-AIOps" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Configuring Ansible Lightspeed intelligent assistant with Red Hat AI Inference Server on RHEL]({{ "/README-Intelligent-Assistant-RHAIIS" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Event-Driven Network Source of Truth with NetBox and Ansible Automation Platform]({{ "/README-NetBox-SoT-EDA-Config" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Event-Driven WAN Circuit Failover with NetBox and Ansible Automation Platform]({{ "/README-NetBox-WAN-EDA-Failover" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Using Event-Driven Ansible to Consume OpenShift API Resources With Kafka]({{ "/README-OpenShift-EDA-Kafka" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [RHEL Patching with Red Hat Lightspeed and Ansible MCP Server]({{ "/README-Patching-RHEL" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [AIOps with AWS SQS and Event-Driven Ansible]({{ "/README-SQS" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [ServiceNow ITSM Ticket Enrichment Automation]({{ "/README-ServiceNow-ITSM" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)
- [Zero Trust Architecture with Ansible Automation Platform]({{ "/README-ZTA" | relative_url }}): fix: size all partner logos for raw markdown rendering (#67)

### Site and tooling

- fix: rename pqc.ansible to PQC Discovery across site
- feat: tag PQC and ZTA guides as security
- feat: move Falco guide to Security automation track
- feat: add Falco guide to index and README
- Add pqc.ansible Implementation Guide and index
- fix: promote Satellite catalog card from WIP to published
- Address Satellite guide publish-checklist feedback
- Cancel in-flight Pages deploys on newer pushes
- Cross-list LogicMonitor under AIOps and Network automation
- Add Satellite logos to WIP catalog card
- Add LogicMonitor logos to WIP catalog card
- Add Slack/OG social preview image for AAP Guides
- Mark Satellite CVE guide WIP, catalog it, and add SG review
- Add weekly What's New page from git history
- Clean up issue title: strip README- prefix, hyphens to spaces, better fallback

_…and 15 more site commits in this window._

<!-- END:AUTO-UPDATES -->

<p class="guide-types-lead" style="margin-top: 2rem;">Want to contribute a guide? Start with the <a href="{{ '/best-practices/' | relative_url }}">Best Practices hub</a>.</p>
