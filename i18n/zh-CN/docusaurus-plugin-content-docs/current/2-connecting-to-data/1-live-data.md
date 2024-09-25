---
title: 实时数据
description: 通过 Foxglove WebSocket、Rosbridge 和 Velodyne Lidar 连接来连接实时数据源。您还可以通过 URL 加载远程数据文件。
---

通过 Foxglove WebSocket、Rosbridge 和 Velodyne Lidar 连接来连接实时数据源。您还可以通过 URL 加载远程数据文件。

### 支持的格式

|                        | 支持的格式                                                                                                                                                                                                                                                                                                                      | 配置选项                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Foxglove WebSocket** | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#foxglove-websocket)</li><li>[ROS 2](/docs/connecting-to-data/frameworks/ros2#foxglove-websocket)</li><li>[自定义](/docs/connecting-to-data/frameworks/custom#foxglove-websocket)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#foxglove-websocket)</li></ul> | WebSocket URL                                               |
| **Rosbridge**          | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#rosbridge)</li><li>[ROS 2](/docs/connecting-to-data/frameworks/ros2#rosbridge)</li></ul>                                                                                                                                                                               | WebSocket URL                                               |
| **ROS 1**              | [ROS 1](/docs/connecting-to-data/frameworks/ros1#native)（仅限桌面应用程序）                                                                                                                                                                                                                                                    | `ROS_MASTER_URI` 和 `ROS_HOSTNAME`                          |
| **Velodyne Lidar**     | [Velodyne](/docs/connecting-to-data/frameworks/velodyne)（仅限桌面应用程序）                                                                                                                                                                                                                                                    | UDP 端口                                                    |
| **远程文件**           | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#remote-file)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#remote-file)</li></ul>                                                                                                                                                                            | 需要 [CORS 设置](#cross-origin-resource-sharing-cors-setup) |

### 限制

连接到实时机器人堆栈时，每个连接将具有不同的功能。

|                         | Foxglove WebSocket（推荐） | Rosbridge                                                    | ROS 1 |
| ----------------------- | -------------------------- | ------------------------------------------------------------ | ----- |
| **流式传输 ROS 1 数据** | ✓                          | ✓                                                            | ✓     |
| **流式传输 ROS 2 数据** | ✓                          | ✓                                                            |       |
| **流式传输自定义数据**  | ✓                          |                                                              |       |
| **自定义消息架构**      | ✓                          | ✓                                                            | ✓     |
| **发布消息**            | ✓（ROS 1、ROS 2、JSON）    | ✓                                                            | ✓     |
| **调用服务**            | ✓                          | ✓                                                            |       |
| **调用动作**            |                            |                                                              |       |
| **读取和设置参数**      | ✓                          | [参见讨论](https://github.com/orgs/foxglove/discussions/223) | ✓     |

### 跨域资源共享（CORS）设置

要加载远程数据文件，您必须将文件托管在支持跨域资源共享（CORS）并接受范围请求的服务器或云提供商中。

在将远程数据加载到 Foxglove 进行回放和分析时，我们建议将文件托管在 [Amazon Simple Storage Service (S3)](https://aws.amazon.com/pm/serv-s3/)、[Google Cloud Storage (GCS)](https://cloud.google.com/storage) 或 [Azure Storage](https://azure.microsoft.com/en-us/product-categories/storage/) 等云提供商中。您也可以在自己的服务器上托管文件，但设置支持 [跨域资源共享（CORS）](https://web.dev/cross-origin-resource-sharing/) 和 [范围请求](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) 可能会很困难且耗时。

如果您的数据是敏感的，请生成并使用签名 URL – 确保您直接指向资源，因为重定向将无法与 CORS 一起使用：

- **S3** – [使用预签名 URL 共享对象](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html)
- **GCS** – [签名 URL](https://cloud.google.com/storage/docs/access-control/signed-urls)
- **Azure Storage** – [使用共享访问签名 (SAS) 授予对 Azure 存储资源的有限访问权限](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)

此签名 URL 将在有限的时间内有效。您可以设置服务器仅为经过身份验证的用户签署 URL。

最后，设置您的 CORS 配置。请查看以下 S3 存储桶的 [Terraform](https://www.terraform.io/) 配置示例（[文档](https://registry.terraform.io/providers/hashicorp%20%20/aws/latest/docs/resources/s3_bucket_cors_configuration)）：

```
cors_rule {
  allowed_methods = ["GET", "HEAD", "OPTIONS"]
  allowed_origins = ["https://app.foxglove.dev"]
  allowed_headers = ["*"]
  expose_headers = ["ETag", "Content-Type", "Accept-Ranges", "Content-Length"]
}
```

以及 GCS 存储桶的 Terraform 配置（[文档](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket#cors)）：

```
cors {
  origin = ["https://app.foxglove.dev"]
  method = ["GET", "HEAD", "OPTIONS"]
  response_header = ["ETag", "Content-Type", "Accept-Ranges", "Content-Length"]
}
```

## 链接和资源

- [MCAP](https://mcap.dev)
- [介绍 MCAP 文件格式](https://foxglove.dev/blog/introducing-the-mcap-file-format)
- [打开 Foxglove 桥接连接](https://foxglove.dev/blog/announcing-the-new-foxglove-bridge-for-live-ros-data)
