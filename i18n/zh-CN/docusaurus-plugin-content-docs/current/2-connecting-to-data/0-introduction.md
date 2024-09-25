---
title: 介绍
description: 连接到实时数据源进行实时可视化。您还可以加载本地和Foxglove导入的数据文件进行回放。
---

点击 [Foxglove 仪表板](https://app.foxglove.dev/~/dashboard) 中的“可视化”将带您进入“打开数据源”对话框。

![数据源对话框](/img/docs/connecting-to-data/dialog.png)

### 数据源

连接到[实时数据源](/docs/connecting-to-data/live-data)或加载[本地](/docs/connecting-to-data/local-data)和[Foxglove导入](/docs/connecting-to-data/imported-data)文件以可视化它们的数据。

|                                                                             | 用例                                                       | 支持的格式                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**实时数据**](/docs/connecting-to-data/live-data)<br/>“打开连接”           | 检查来自实时机器人堆栈或远程源（例如 S3 存储桶）的实时数据 | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#live-data)</li><li>[ROS 2](/docs/connecting-to-data/frameworks/ros2#live-data)</li><li>[自定义](/docs/connecting-to-data/frameworks/custom#live-data)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#live-data)</li><li>[Velodyne](/docs/connecting-to-data/frameworks/velodyne)</li></ul> |
| [**本地数据**](/docs/connecting-to-data/local-data)<br/>“打开本地文件”      | 检查存储在您计算机上的数据                                 | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#local-data)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#local-data)</li><li>[PX4 ULog](/docs/connecting-to-data/frameworks/px4#local-data)</li></ul>                                                                                                                                    |
| [**导入数据**](/docs/connecting-to-data/imported-data)<br/>“上传和共享数据” | 检查导入到 Foxglove 平台的数据                             | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#imported-data)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#imported-data)</li></ul>                                                                                                                                                                                                     |

如果您对 Foxglove 感兴趣，但手头没有自己的机器人数据，您可以“探索示例数据”以加载[来自 nuScenes 的示例数据](https://www.nuscenes.org/nuscenes)到示例布局中。

连接后，Foxglove 将在侧边栏中显示数据源的主题：

<img alt="sidebar" src="/img/docs/connecting-to-data/sidebar.png" width="300"/>
