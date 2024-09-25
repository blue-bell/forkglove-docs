---
title: API
description: Foxglove REST API 提供了一种编程接口，用于访问和交互 Foxglove 资源。
---

Foxglove REST API 提供了一种编程接口，用于访问和交互 Foxglove 资源。

[Foxglove API](/api) 提供了以下交互端点：

- 数据资源
  - [设备](/docs/devices)
  - [录音](/docs/recordings)
  - [事件](/docs/events)
- 可视化工具
  - [布局](/docs/visualization/layouts)
  - [扩展](/docs/visualization/extensions/introduction)

查看 [Foxglove API 参考](/api) 以获取所有可用端点的更多详细信息。

## API 密钥

组织管理员必须从[设置页面](https://app.foxglove.dev/~/settings/apikeys)创建 API 密钥。

![API 密钥管理](/img/docs/api/keys.webp)

## Python 客户端

_注意：从 v0.5.0 开始，所有方法都需要使用关键字参数。_

Foxglove 提供了一个 Python 客户端库（[`py-data-platform`](https://github.com/foxglove/py-data-platform)），以更轻松地与 Foxglove API 交互。

在 [API 参考](/api) 中查看每个端点的具体示例。

```python
from foxglove_data_platform.client import Client

token = "<YOUR API TOKEN HERE>"
client = Client(token=token)
```
