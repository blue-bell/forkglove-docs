---
title: 设置
description: Foxglove 组织管理员可以使用设置来修改订阅计划、邀请和管理团队成员，以及配置组织范围的设置，如站点和自定义设备属性。
---

Foxglove 组织管理员可以使用[设置页面](https://app.foxglove.dev/~/settings)来修改订阅计划、邀请和管理团队成员，以及配置组织范围的设置，如站点和自定义设备属性。

### 常规

在[常规设置页面](https://app.foxglove.dev/~/settings/general)，管理员可以：

- **组织名称** – 编辑组织名称
- **订阅** – 查看和修改计划详情
- **批准的域** – 使用这些域的电子邮件地址登录的新用户会自动添加到组织中
- **使用情况** – 显示数据存储使用情况
- **危险区** – 删除组织

### 团队

在[团队设置页面](https://app.foxglove.dev/~/settings/team)，管理员可以：

- 查看所有团队成员的列表（姓名、电子邮件地址、最后一次见面、角色）
- 邀请或移除团队成员
- 修改团队成员的角色（“管理员”、“用户”）

### 站点

在[站点设置页面](https://app.foxglove.dev/~/settings/sites)，管理员可以：

- 查找其 Foxglove 和自托管[主站点](/docs/primary-sites/introduction)的状态、名称和 ID
- 查找其本地[边缘站点](/docs/edge-sites/introduction)的状态、名称和 ID
- 添加 Foxglove 托管的主站点
- 添加边缘站点

### 自定义属性

在[自定义属性设置页面](https://app.foxglove.dev/~/settings/custom-properties)，管理员可以为整个组织设置预定义的元数据字段（即[自定义属性](/docs/devices#custom-properties)），以便与其设备关联。

### API 密钥

在[API 密钥设置页面](https://app.foxglove.dev/~/settings/apikeys)，管理员可以：

- 生成用于访问[Foxglove API](/docs/api)的 API 密钥
- 启用、禁用或永久删除生成的 API 密钥
- 配置 API 密钥的每个数据资源的功能（例如，设备的只读，录音的读写等）

### 单点登录

在[单点登录设置页面](https://app.foxglove.dev/~/settings/oidc)，管理员可以配置 Okta SSO OIDC 设置，如 Okta 域、客户端 ID 等。

Foxglove 目前支持[Microsoft](https://foxglove.dev/blog/announcing-microsoft-sign-in)和[Okta SSO](/docs/organization-setup/okta-sso)。

### 扩展

在[扩展设置页面](https://app.foxglove.dev/~/settings/extensions)，管理员可以在整个组织中安装 Foxglove [扩展](/docs/visualization/extensions/introduction)，以更好地支持团队的独特工作流程。启用的扩展会自动为所有登录的团队成员安装。

使用 `foxglove` CLI 来[编写](/docs/visualization/extensions/introduction#writing-an-extension)和[发布](/docs/visualization/extensions/publish) Foxglove 扩展。

### 洞察

在[洞察设置页面](https://app.foxglove.dev/~/settings/insights)，管理员可以了解其团队成员如何利用平台。

#### 导入量

跟踪您的 Foxglove 组织每周导入的数据净量和累计量：

![imports](/img/docs/organization-setup/insights/imports.webp)

了解您的团队数据存储账单，是否接近计划的数据限制，以及团队在何时导入了最多的数据。
