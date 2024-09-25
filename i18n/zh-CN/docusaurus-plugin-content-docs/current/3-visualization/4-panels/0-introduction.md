---
title: 介绍
description: 面板是模块化的可视化界面，可以配置并排列到 Foxglove 布局中。
---

面板是模块化的可视化界面，可以配置并排列到 Foxglove 布局中。

在“添加面板”菜单中找到可用面板的完整列表。

![面板缩略图](/img/docs/visualization/panels/thumbnail.png)

### 添加到布局

点击任意面板名称将其添加到当前布局。或者，将面板名称拖放到当前布局中以将其添加到特定位置。

每个面板的顶部栏包含以下内容：

- **菜单** – 常见的面板操作，如拆分面板或将其更改为另一种面板类型
- **设置** – 点击齿轮图标打开面板的设置

使用顶部栏可以轻松地在布局中拖动面板。

### 编辑设置

点击每个面板顶部栏中的齿轮图标，在侧边栏中查看和编辑其设置。选定的面板将用紫色边框标出。

![面板设置标签](/img/docs/visualization/panels/settings-tab.png)

当侧边栏的面板设置打开时，点击布局中的不同面板将切换到其设置。

### 拖放主题

使用侧边栏的主题标签过滤数据源的主题及其包含的[消息路径](/docs/visualization/message-path-syntax)：

![面板设置标签](/img/docs/visualization/panels/filter-topics.png)

将过滤结果拖放到某些面板中以便即时可视化：

- **所有主题** – [原始消息](/docs/visualization/panels/raw-messages)和[表格](/docs/visualization/panels/table)面板
- **[图像和图像注释主题](/docs/visualization/panels/image#message-schemas)** – [图像](/docs/visualization/panels/image)面板
- **消息路径** – [图表](/docs/visualization/panels/plot)和[状态转换](/docs/visualization/panels/state-transitions)面板

要拖放多个消息路径，请使用 `Shift` 选择一系列相邻项目，或使用 `Ctrl`（在 macOS 上为 `Cmd`）选择多个非相邻项目：

![面板设置标签](/img/docs/visualization/panels/multi-drag-and-drop.png)

## 快捷键

- `Cmd` + `a` – 选择当前布局中的所有面板
- `Cmd` + `b` – 如果打开则关闭侧边栏
- 悬停在面板上 + `` ` `` – 显示面板快捷键（从布局中移除或拆分）
- 点击输入 + 向右拖动 – 增加数值面板设置值
- 点击输入 + 向左拖动 – 减少数值面板设置值
