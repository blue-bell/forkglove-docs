---
title: Shareable links
description: Build and share deep links with your teammates to open Foxglove with specific layouts and data sources.
---

Build and share deep links with your teammates to open Foxglove with specific layouts and data sources.

To open Foxglove using a specific layout or data source, construct a "deep link" URL using the format:

```
https://app.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/view?param1=value2&param2=value2
```

Supported query parameters are documented below, or you can copy any URL while you are using the app.

## Web vs. desktop

By default, links will open in the browser. You can open the desktop app instead using the `openIn` parameter:

| parameter | type   | required | description                   |
| --------- | ------ | -------- | ----------------------------- |
| `openIn`  | string |          | `web` (default)<br/>`desktop` |

Using `openIn=desktop` will attempt to open the Foxglove desktop app (assuming it is installed), while providing a landing page giving users the option to download the app (if it is not installed), or to open the link in their browser instead. This is the preferred approach to open the desktop app, as it provides a graceful browser fallback option.

Alternatively, if you are sure the user has the desktop app installed, you can use the `foxglove://` URL scheme to open it. This provides no browser fallback, and will fail silently if the desktop app is not installed.

| prefix                                               | example                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `https://app.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/view` | https://app.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/view?ds=sample-nuscenes&openIn=desktop |
| `foxglove://open`                                    | foxglove://open?ds=sample-nuscenes                                                   |

### Opening via command line

You can also use pass a `foxglove://open` URL as an argument to the desktop app binary when opening via CLI. For example:

```bash
$ foxglove-studio "foxglove://open?ds=foxglove-websocket&ds.url=ws://myrobot:8765/"
```

This will open the Foxglove desktop app and connect to `ws://myrobot:8765/` over the Foxglove websocket protocol.

## Layouts

To load a saved layout (personal or team):

| parameter  | type   | required | description                               |
| ---------- | ------ | -------- | ----------------------------------------- |
| `layoutId` | string | ✓        | Foxglove's ID for a remotely saved layout |

To get a URL with the correct `layoutId` param, open the web app and click your desired layout in the "Layouts" menu.

## Timestamp

| parameter | type                                                                     | required | description                                      |
| --------- | ------------------------------------------------------------------------ | -------- | ------------------------------------------------ |
| `time`    | timestamp<br/>([RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)) |          | Timestamp to seek to (for non-live data sources) |

## Data sources

To specify your data source, use the `ds` parameter as documented according to your desired data source below.

For example, a Rosbridge connection may look like the following:

```
https://app.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/view?ds=rosbridge-websocket&ds.url=ws%3A%2F%2Flocalhost%3A9090&layoutId=2644147b-f205-456c-ace9-69466aaac0b7
```

### Foxglove WebSocket

| parameter | type   | required | description          |
| --------- | ------ | -------- | -------------------- |
| `ds`      | string | ✓        | `foxglove-websocket` |
| `ds.url`  | string | ✓        | WebSocket URL        |

### Rosbridge

| parameter | type   | required | description           |
| --------- | ------ | -------- | --------------------- |
| `ds`      | string | ✓        | `rosbridge-websocket` |
| `ds.url`  | string | ✓        | WebSocket URL         |

### ROS 1 Native

(Supported on desktop only)

| parameter | type   | required | description                                                                   |
| --------- | ------ | -------- | ----------------------------------------------------------------------------- |
| `ds`      | string | ✓        | `ros1-socket`                                                                 |
| `ds.url`  | string | ✓        | [ROS Master URI](http://wiki.ros.org/ROS/EnvironmentVariables#ROS_MASTER_URI) |

### Foxglove

| parameter         | type                                                                     | required                                                                | description                  |
| ----------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ---------------------------- |
| `ds`              | string                                                                   | ✓                                                                       | `foxglove-data-platform`     |
| `ds.deviceId`     | string                                                                   | One of `ds.deviceId`, `ds.recordingId` or `ds.recordingKey` is required | Robot ID                     |
| `ds.start`        | timestamp<br/>([RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)) | With `ds.deviceId`                                                      | Start of data playback range |
| `ds.end`          | timestamp<br/>([RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)) | With `ds.deviceId`                                                      | End of data playback range   |
| `ds.recordingId`  | string                                                                   | One of `ds.deviceId`, `ds.recordingId` or `ds.recordingKey` is required | ID of the recording to open  |
| `ds.recordingKey` | string                                                                   | One of `ds.deviceId`, `ds.recordingId` or `ds.recordingKey` is required | Key of the recording to open |
| ~~`ds.importId`~~ | string                                                                   | Deprecated. Prefer `ds.recordingId` instead                             | ID of the import to open     |

### Remote files

| parameter | type   | required | description                   |
| --------- | ------ | -------- | ----------------------------- |
| `ds`      | string | ✓        | `remote-file`                 |
| `ds.url`  | string | ✓        | URL to `.bag` or `.mcap` file |
