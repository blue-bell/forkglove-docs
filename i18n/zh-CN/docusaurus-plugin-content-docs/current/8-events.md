---
title: 事件
description: 事件表示您组织的录音中感兴趣的点或时间范围。
---

事件表示您组织的录音中感兴趣的点或时间范围。它们帮助您快速识别、分类和搜索相关的数据子集。

每个事件都需要一个关联的设备、时间戳和持续时间（瞬时事件为0）。它还可以包含可选的元数据。

### 在回放期间添加事件

在[“录音”页面](https://app.foxglove.dev/~/recordings)上为录音点击“可视化”。数据将在新窗口中打开进行回放 – 在回放栏上找到书签图标：

![事件图标](/img/docs/visualization/playback/event-icon.webp)

找到数据中的感兴趣点，然后点击书签图标在时间线上添加一个事件。

![添加事件](/img/docs/visualization/playback/create-event.webp)

添加的事件也会保留在[“事件”页面](https://app.foxglove.dev/~/events)上。

#### 在回放期间查看和搜索

在右侧边栏的“事件”选项卡中查看与当前数据源关联的所有事件列表。搜索输入字段使用与Foxglove事件搜索相同的语法 – 通过元数据键和值过滤事件并找到感兴趣的事件。

在流式传输Foxglove录音时，回放栏还会显示为蓝色条的事件。将鼠标悬停在蓝色条上会在工具提示中显示其元数据：

![事件工具提示](/img/docs/visualization/playback/event-tooltip.webp)

如果“事件”侧边栏打开，将鼠标悬停在回放时间线上的事件上会突出显示侧边栏中的相应信息：

![事件悬停](/img/docs/visualization/playback/event-hover.webp)

### 操作

在[事件页面](https://app.foxglove.dev/~/events)添加、列出、删除和搜索事件。

![创建事件](/img/docs/events/create-event.webp)

|            | 定义                                                     | CLI                    |
| ---------- | -------------------------------------------------------- | ---------------------- |
| **添加**   | 添加一个事件以标记您组织中的有趣数据                     | `TBD`                  |
| **列出**   | 查看您组织的事件                                         | `foxglove events list` |
| **删除**   | 删除您组织中的一个事件                                   | `TBD`                  |

#### 搜索

在[事件页面](https://app.foxglove.dev/~/events)按设备、时间范围和元数据搜索事件。

使用以下语法按元数据键和值进行过滤：

|                                | 特定键                            | 任意键  |
| ------------------------------ | --------------------------------- | ------- |
| 特定值                         | `weather:rain`                    | `*:rain`|
| 任意值                         | `weather:*`                       |         |
| 多个值（全部需要）             | `weather:rain weather:fog`        |         |
| 多个值（1+需要）               | `weather:rain,fog,"mostly sunny"` |         |

单个单词（例如 `error`）将查找匹配的元数据键或值。

非字母数字字符可以用引号括起来使用（例如 `"/weather/rain":*` 或 `"@my.custom.key":"10%"`）。

## 链接和资源

- [将事件添加到您的数据](https://foxglove.dev/blog/announcing-foxglove-data-platform-events)
- [API参考](/api#tag/Events)
