---
title: 导入数据
description: 将 ROS 1 (.bag) 和 MCAP (.mcap) 数据文件导入 Foxglove 平台，以便后续可视化和分析。
---

将 [ROS 1](/docs/connecting-to-data/frameworks/ros1#imported-data) (`.bag`) 和 [MCAP](/docs/connecting-to-data/frameworks/mcap#imported-data) (`.mcap`) 数据文件导入 Foxglove 平台，以便后续可视化和分析。

查看 [MCAP 文档](https://mcap.dev) 以获取更多关于[转换其他数据格式](https://foxglove.dev/blog/importing-your-ros2-data-into-foxglove-data-platform)（如 ROS 2、Protobuf、JSON 等）为 MCAP 文件格式的信息。

### （可选）添加设备

要按记录的机器人组织文件，请为每个要跟踪的真实或模拟机器人创建唯一命名的设备。文件不必与设备关联即可导入。

点击[设备页面](https://app.foxglove.dev/~/devices)上的“添加设备”来创建您的设备：

![添加设备](/img/docs/importing-data/add-device.webp)

### 导入文件

从[记录](https://app.foxglove.dev/~/recordings)或[时间线](https://app.foxglove.dev/~/timeline)页面导入数据：

![记录页面](/img/docs/recordings/index.png)

或者，您可以点击[设备页面](https://app.foxglove.dev/~/devices)上创建的设备之一，进入其详细信息页面——从那里，您可以直接将数据导入该设备。

选择您要导入的文件，以及如果需要，您要与记录关联的设备：

![导入](/img/docs/importing-data/import.webp)

当导入带有元数据记录或附件的 [MCAP 文件](https://mcap.dev/)时，Foxglove 将在记录的详细信息页面的_元数据_和_附件_选项卡下索引并显示它们：

![记录元数据](/img/docs/importing-data/recording-metadata.webp)

### 查看记录

在[记录页面](https://app.foxglove.dev/~/recordings)上以列表形式查看导入的数据，或在[时间线页面](https://app.foxglove.dev/~/timeline)上以时间范围形式查看。

## 链接和资源

- [导入 ROS 2 数据](https://foxglove.dev/blog/importing-your-ros2-data-into-foxglove-data-platform)
