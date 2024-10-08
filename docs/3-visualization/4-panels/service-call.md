---
title: Service Call
description: Call a service and view its response.
---

Call a service and view its response.

Supports live [ROS 1](/docs/connecting-to-data/frameworks/ros1#live-data) and [ROS 2](/docs/connecting-to-data/frameworks/ros2#live-data) connections, as well as [custom Foxglove WebSocket connections](/docs/connecting-to-data/frameworks/custom#foxglove-websocket) that provide services.

<img width="500" alt="Service call panel" src="/img/docs/visualization/panels/call-service/panel.png" />

## Settings

### General

| field            | description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| **Service name** | Name of service to make a request to                                                     |
| **Layout**       | Positioning of request and response inputs ("Vertical" or "Horizontal")                  |
| **Editing mode** | Whether you want to edit the request message and see the response message; On by default |

### Button

Configure the button for calling the service.

| field       | description         |
| ----------- | ------------------- |
| **Title**   | Button text         |
| **Tooltip** | Button tooltip text |
| **Color**   | Button color        |

## User interactions

The "Call service" button will be disabled until connected to a supported data source.

Format the service request using valid JSON in the "Request" input, and click the "Call service" button. The result will appear in the "Response" input.
