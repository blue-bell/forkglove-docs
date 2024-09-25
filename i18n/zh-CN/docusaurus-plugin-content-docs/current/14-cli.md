---
title: CLI
description: Foxglove CLI 工具帮助您从命令行导入、导出和与数据交互。
---

[Foxglove CLI 工具](https://github.com/foxglove/foxglove-cli) 帮助您从命令行导入、导出和与数据交互。

### 安装

从命令行下载最新版本。

| 操作系统 | 架构        | 命令                                                                                                                             |
| -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| linux    |
|          | amd64       | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-linux-amd64 -o foxglove && chmod +x foxglove` |
|          | arm64       | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-linux-arm64 -o foxglove && chmod +x foxglove` |
| macos    |
|          | amd64       | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-macos-amd64 -o foxglove && chmod +x foxglove` |
|          | arm64       | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-macos-arm64 -o foxglove && chmod +x foxglove` |
| windows  |
|          | amd64       | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-windows-amd64.exe -o foxglove.exe`            |
|          | arm64       | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-windows-arm64.exe -o foxglove.exe`            |

要安装特定版本，请参阅[发布页面](https://github.com/foxglove/foxglove-cli/releases)。

### 入门

在与数据交互之前，您必须先使用您的 [Foxglove 账户](https://app.foxglove.dev/signup) 进行身份验证：

```bash
$ foxglove auth login
```

查看所有可用的 CLI 命令列表：

```bash
$ foxglove -h
```

为子命令和参数启用 shell 自动补全（支持 `bash`、`zsh`、`fish` 和 `PowerShell`）：

```bash
$ foxglove completion <shell> -h
```

### 操作

|                | 创建                                                                                                                                      | 列表                         | 删除                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------- |
| **设备**       | `foxglove devices add --name "my device"`                                                                                                 | `foxglove devices list`      | `foxglove devices delete --name "my device"`      |
| **记录**       | `foxglove data import ~/data/bags/gps.bag --device-id dev_drpLqjBZYUzus3gv`                                                               | `foxglove data imports list` |                                                   |
| **事件**       | `foxglove events add --device-id dev_flm75pLkfzUBX2DH --timestamp 2022-01-01T12:00:00Z --duration-nanos 0 --metadata 'someKey:someValue'` | `foxglove events list`       |                                                   |
| **扩展**       | `foxglove extensions publish ./my-extension.1.0.0.foxe`                                                                                   | `foxglove extensions list`   | `foxglove extensions unpublish ext_BsGXKGsZ9c4WQF1` |

### 可视化数据

Foxglove CLI 工具无法直接在 Foxglove 应用中打开数据，但应用程序二进制文件可以[在通过命令行打开时接受数据源参数](/docs/visualization/shareable-links#opening-via-command-line)。
