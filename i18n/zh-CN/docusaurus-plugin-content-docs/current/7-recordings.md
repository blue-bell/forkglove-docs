---
title: 录音
description: 录音代表了您组织设备记录的每一个数据文件。
---

录音代表了您组织设备记录的每一个数据文件。

从[录音页面](https://app.foxglove.dev/~/recordings)导入、删除和搜索录音：

![录音页面](/img/docs/recordings/index.png)

将鼠标悬停在每个录音上，可以使用 Foxglove [面板](/docs/visualization/panels/introduction)进行可视化。打开录音的“操作”菜单，可以删除它或将其下载为 `.mcap` 或 `.bag` 文件：

![录音操作](/img/docs/recordings/menu.png)

从[时间线页面](https://app.foxglove.dev/~/timeline)选择特定时间范围的数据进行下载。

![时间线页面](/img/docs/recordings/timeline.png)

### 操作

|                            | 定义                                                                                                 | CLI 命令                                                                                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **导入**                   | 为您组织中的设备导入数据录音                                                                         | `foxglove data import ~/data/bags/gps.bag --device-id dev_drpLqjBZYUzus3gv`                                                                                                               |
| **删除**                   | 删除导入到您组织中的数据录音                                                                         | N/A                                                                                                                                                                                       |
| **附加上下文数据**         | 导入带有[元数据记录](https://mcap.dev/spec#metadata-op0x0c)的 [MCAP](https://mcap.dev) 文件           | N/A                                                                                                                                                                                       |
| **附加辅助数据**           | 导入带有[附件](https://mcap.dev/spec#attachment-op0x09)的 [MCAP](https://mcap.dev) 文件               | N/A                                                                                                                                                                                       |
| **下载**                   | 将数据录音下载为 [MCAP](https://mcap.dev) 或 ROS 1 `.bag` 文件                                       | `$ foxglove data export --device-id dev_flm75pLkfzUBX2DH --start 2001-01-01T00:00:00Z --end 2022-01-01T00:00:00Z --output-format mcap0 --topics /gps/fix,/gps/fix_velocity > output.mcap` |
