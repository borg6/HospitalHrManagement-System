---
id: channel-slack-slash-command
title: Handling Slack Slash Commands
original_id: channel-slack-slash-command
---

## Handling Slash Commands

[Slack's slash command](https://api.slack.com/interactivity/slash-commands) is a special event which mostly used as certain entry points for your slack app. A typical slash command message looks like: `/todo ask @crushermd to bake a birthday cake for @worf in #d-social`.

To enable this feature, you need to:

1. Configure slash command in your Slack app settings
2. Handle slash command events in your slack bot

### Configuring Slash Command in You