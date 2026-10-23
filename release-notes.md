---
layout: default
title: Release Notes
permalink: /release-notes/
inline_edit: true
---

<div class="hub-intro-row">
  <p class="guide-types-lead">Durable release notes for AAP Guides -- catalog retirements, taxonomy changes, and decisions that should stay findable after the rolling <a href="{{ '/updates/' | relative_url }}">What's New</a> window moves on.</p>
  <div class="edit-link-wrap edit-link-wrap--catalog">
    <a href="https://github.com/ansible-tmm/solution-guides/edit/main/{{ page.path }}"
       target="_blank" class="edit-link">
      <i class="fas fa-pencil-alt" aria-hidden="true"></i>
      Edit on GitHub
    </a>
  </div>
</div>

## 2026-10-23 -- Retired legacy KB guides

Three access.redhat.com-only cards were removed from the home page **Legacy Solution Guides** section. Official product docs (or open Jiras) now own that content path; the catalog stays focused on full markdown guides in this repo.

| Retired catalog card | Former KB | Follow-on work |
|----------------------|-----------|----------------|
| Get started with EDA (Ansible Rulebook) | [7136720](https://access.redhat.com/articles/7136720) | [AAP-91972](https://redhat.atlassian.net/browse/AAP-91972) -- Add "Getting Started with Rulebooks" section to EDA docs |
| Network Fact Gathering & Reporting | [7123361](https://access.redhat.com/articles/7123361) | [AAP-99047](https://redhat.atlassian.net/browse/AAP-99047) -- Review overlap with [AAP 2.7 networking playbook docs](https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/2.7/develop-assembly_networking_playbook) and decide integration approach |
| Network Back Up and Configuration | [7123366](https://access.redhat.com/articles/7123366) | [AAP-99048](https://redhat.atlassian.net/browse/AAP-99048) -- Add content from KB 7123366 into the AAP documentation set |

ServiceNow ITSM Ticket Enrichment remains under Legacy until its migration path is complete.

### Slack / field blurb

Copy/paste:

```text
AAP Guides catalog update (23 Oct 2026): We retired three legacy access.redhat.com cards from the AAP Guides home page so the catalog stays focused on full markdown guides.

• EDA getting started (KB 7136720) → tracked in AAP-91972 (Getting Started with Rulebooks in EDA docs)
• Network fact gathering (KB 7123361) → tracked in AAP-99047 (review vs AAP 2.7 networking playbook docs)
• Network backup & config (KB 7123366) → tracked in AAP-99048 (fold into AAP doc set)

Release notes (Jiras + links): https://ansible-tmm.github.io/solution-guides/release-notes/#2026-10-23-retired-legacy-kb-guides
Catalog: https://ansible-tmm.github.io/solution-guides/
```
