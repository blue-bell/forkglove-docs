---
title: ROS Foxglove 桥接
description: 使用 ROS Foxglove 桥接与 Foxglove WebSocket 连接来可视化您的实时 ROS 1 或 ROS 2 数据。Foxglove 桥接通过 Foxglove WebSocket 协议将您的 ROS 堆栈连接到 Foxglove。
---

使用 ROS Foxglove 桥接，通过 Foxglove WebSocket 连接来可视化您的实时 [ROS 1](/docs/connecting-to-data/frameworks/ros1#foxglove-websocket) 或 [ROS 2](/docs/connecting-to-data/frameworks/ros2#foxglove-websocket) 数据。

Foxglove 桥接通过 Foxglove WebSocket 协议将您的 ROS 堆栈连接到 Foxglove。它作为一个 C++ 节点实现，具有高性能和低开销的特点。

### 概述

`foxglove_bridge` 使用 [Foxglove WebSocket 协议](https://github.com/foxglove/ws-protocol)，这是一种类似于 [`rosbridge`](https://github.com/RobotWebTools/rosbridge_suite) 的协议，但具有支持额外模式格式（如 ROS 2 `.msg` 和 ROS 2 `.idl`）、参数、图形自省和非 ROS 系统的能力。该桥接用 C++ 编写，设计为高性能和低开销，以尽量减少对机器人堆栈的影响。

### 安装

`foxglove_bridge` 包适用于 ROS 1 Melodic 和 Noetic，以及 ROS 2 Humble、Iron 和 Rolling。由于 API 设计和/或性能限制，早期版本的 ROS 将不受支持。可以使用以下命令安装该包：

```bash
$ sudo apt install ros-$ROS_DISTRO-foxglove-bridge
```

### 启动

使用 `roslaunch` 在 ROS 1 中或使用 `ros2 launch` 在 ROS 2 中从您的 ROS 工作区启动 `foxglove_bridge`。以下是可选配置及其默认值。

```bash
$ ros2 launch foxglove_bridge foxglove_bridge_launch.xml
```

如果您计划在机器人上线时使用 `foxglove_bridge`，请将其添加到您的启动文件中。

#### 配置

通过以下参数配置桥接行为。在初始化时通过启动文件或命令行设置参数，运行时无法修改。

### 配置

提供参数以配置桥接的行为。这些参数必须在初始化时通过启动文件或命令行设置，运行时无法修改。

- **port** – 绑定 WebSocket 服务器的 TCP 端口。必须是有效的 TCP 端口号，或 0 以使用随机端口。默认值为 `8765`。
- **address** – 绑定 WebSocket 服务器的主机地址。默认值为 `0.0.0.0`，默认监听所有接口。将其更改为 `127.0.0.1`（或 IPv6 的 `::1`）以仅接受来自本机的连接。
- **tls** – 如果为 `true`，则使用传输层安全性（TLS）进行加密通信。默认值为 `false`。
- **certfile** – 用于 TLS 的证书路径。当 **tls** 设置为 `true` 时必需。默认值为 `""`。
- **keyfile** – 用于 TLS 的私钥路径。当 **tls** 设置为 `true` 时必需。默认值为 `""`。
- **topic_whitelist** – 白名单主题名称的正则表达式列表（[ECMAScript 语法](https://en.cppreference.com/w/cpp/regex/ecmascript)）。默认值为 `[".*"]`。
- **service_whitelist** – 白名单服务名称的正则表达式列表（[ECMAScript 语法](https://en.cppreference.com/w/cpp/regex/ecmascript)）。默认值为 `[".*"]`。
- **param_whitelist** – 白名单参数名称的正则表达式列表（[ECMAScript 语法](https://en.cppreference.com/w/cpp/regex/ecmascript)）。默认值为 `[".*"]`。
- **client_topic_whitelist** – 白名单客户端发布主题名称的正则表达式列表（[ECMAScript 语法](https://en.cppreference.com/w/cpp/regex/ecmascript)）。默认值为 `[".*"]`。
- **send_buffer_limit** – 连接发送缓冲区限制（以字节为单位）。当连接的发送缓冲区达到此限制时，将丢弃消息，以避免积累过时消息的队列。默认值为 `10000000`（10 MB）。
- **use_compression** – 使用 WebSocket 压缩（permessage-deflate）。适用于带宽较小的连接，但会增加 CPU 负载。
- **capabilities** – 支持的 [服务器功能](https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md) 列表。默认值为 `[clientPublish,parameters,parametersSubscribe,services,connectionGraph,assets]`。
- **asset_uri_allowlist** – 允许的资产 URI 的正则表达式列表（[ECMAScript 语法](https://en.cppreference.com/w/cpp/regex/ecmascript)）。使用 [resource_retriever](https://index.ros.org/p/resource_retriever/github-ros-resource_retriever) 来解析 `package://`、`file://` 或 `http(s)://` URI。请注意，应仔细配置此列表，以确保不会通过 WebSocket 连接意外暴露机密文件。作为额外的安全措施，包含两个连续点（`..`）的 URI 被禁止，因为它们可能被用来构造 URI，如果允许列表配置不够严格（例如 `package://<pkg_name>/../../../secret.txt`），则可能允许检索机密文件。默认值为 `["^package://(?:\w+/)*\w+\.(?:dae|fbx|glb|gltf|jpeg|jpg|mtl|obj|png|stl|tif|tiff|urdf|webp|xacro)$"]`。

仅 ROS 1：

- **max_update_ms** – 轮询 `roscore` 以获取新主题、服务或参数之间的最大等待毫秒数。默认值为 `5000`。
- **service_type_retrieval_timeout_ms** – 检索服务类型信息的最大毫秒数。默认值为 `250`。

仅 ROS 2：

- **num_threads** – 用于 ROS 节点执行器的线程数。这控制可以并行处理的订阅数量。0 表示每个 CPU 核心一个线程。默认值为 `0`。
- **min_qos_depth** – 订阅的 QoS 配置文件的最小深度。默认值为 `1`。这是为订阅者的 QoS 深度设置的下限，该深度通过汇总所有发布者的深度来计算。另请参见 [ros-foxglove-bridge/#208](https://github.com/foxglove/ros-foxglove-bridge/issues/208)。
- **max_qos_depth** – 订阅的 QoS 配置文件的最大深度。默认值为 `25`。
- **include_hidden** – 包括隐藏的主题和服务。默认值为 `false`。

### 开发

要从源代码构建或为项目做贡献，请查看 [`ros-foxglove-bridge` GitHub 仓库](https://github.com/foxglove/ros-foxglove-bridge/)。
