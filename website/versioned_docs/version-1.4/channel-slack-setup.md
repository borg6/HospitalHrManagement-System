---
id: channel-slack-setup
title: Slack Setup
original_id: channel-slack-setup
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/7aISWF9_jO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

Before going further, we assume that you already have:

- a Slack Account
- a [Slack Workspace](https://slack.com/create#email)

### Create a Slack App

Create a [Slack App](https://api.slack.com/apps?new_app=1) if you haven't.

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82567644-3a20d100-9bb0-11ea-9c53-a04b62340db0.png"/></p>

Click the `Create New App` button.

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82567788-72c0aa80-9bb0-11ea-8233-48b604d3495e.png"/></p>

Fill the `App Name` and `Development Slack Workspace` and then click the `Create App` button.

We recommand creating a new workspace for experiment.

### Install Slack App to Workspace

You can find the `Install App to Workspace` button in [Slack Developer Console](https://api.slack.com/apps) → \${YourApp} → OAuth & Permissions

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82569943-80c3fa80-9bb3-11ea-997c-346a685d1adf.png"/></p>

The `Install App to Workspace` button is disabled. To enable the button, you need to setup at least one of the permissions the Slack app need.

You can set those permissions in [Slack Developer Console](https://api.slack.com/apps) → \${YourApp} → OAuth & Permissions → Scopes → Bot Token Scopes

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82569279-9a187700-9bb2-11ea-9e9e-148c608202c4.png"/></p>

Click the `Add an OAuth Scope` button in the `Bot Token Scopes` section to create a `chat:write` OAuth Scope, which allows Slack app to send messages as a bot user.

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82569788-4a867b00-9bb3-11ea-9ecd-d6c763d6860d.png"/></p>

The `Install App to Workspace` button is enabled now.

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82570855-ba493580-9bb4-11ea-93aa-832df61de427.png"/></p>

Click the `Install App to Workspace` button.

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82571054-fda3a400-9bb4-11ea-9907-aa80d53519a5.png"/></p>

This is the page for the Slack workspace authorizes to the Slack app.

Click the `Allow` button.

 <p><img width="800" src="https://user-images.githubusercontent.com/563929/82573621-94be2b00-9bb8-11ea-991c-f7ae5cfffc15.png"/>