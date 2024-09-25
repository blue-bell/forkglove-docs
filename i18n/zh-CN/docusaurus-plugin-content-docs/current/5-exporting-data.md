---
title: 导出数据
description: 将 ROS 1 (.bag) 和 MCAP (.mcap) 数据文件导入 Foxglove 平台，以便进行后续的可视化和分析。
---

将您的数据导出，以便在 Foxglove 和其他调试和可视化工具中进行可视化。

一旦您将数据导入 Foxglove，您可以选择导出该数据的特定范围，导出为 [MCAP](https://mcap.dev) (`.mcap`) 或 ROS 1 (`.bag`) 文件，或者直接将数据流传输到第三方调试工具如 Jupyter Notebooks 或可视化工具如 [Foxglove](https://foxglove.dev/product)。

### 下载录制或事件

从 [录制页面](https://app.foxglove.dev/~/recordings) 选择一个录制，或从 [事件页面](https://app.foxglove.dev/~/events) 选择一个事件进行下载。

下载 MCAP 文件时，所有相关的元数据记录和附件都会被包含在内。您也可以在录制详情页面的 _附件_ 标签下单独下载 MCAP 文件的附件。

### 下载时间范围

使用 [时间轴页面](https://app.foxglove.dev/~/timeline) 查找您感兴趣的数据：

![search](/img/docs/exporting-data/search.webp)

放大和缩小您的数据，并导航到感兴趣的时间范围。点击时间轴中的任意列以放大您想要的数据。

定位到您想要的数据后，点击覆盖条或通过拖动和点击选定区域选择一个时间范围：

![export via Timeline](/img/docs/exporting-data/timeline-export.webp)

将选定的数据下载为 `.mcap` 或 `.bag` 文件，或在 Foxglove 中启动以进行即时可视化。
