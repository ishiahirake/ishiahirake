---
title: 搭建 shadowsocks 服务器
date: 2020-12-09
path: /shadowsocks
---

本文记录在阿里云上搭建 Shadowsocks VPN 服务器的过程.

## Shadowsocks

### 搭建

笔者选用的 **Ubuntu 20.04** 镜像, 其中已经安装了 Python3.8 以及 `pip3`, 因此直接执行:

`sudo pip3 install shadowsocks`

即可完成安装.

### 配置

创建配置文件:

```sh
sudo mkdir /etc/shadowsocks

vim /etc/shadowsocks/shadowsocks.json
```

配置文件的内容如下:

```json
{
  "server": "[服务器IP地址]",
  "server_port": 8388,
  "local_port": 0,
  "password": "[密码]",
  "timeout": 600,
  "method": "aes-256-cfb"
}
```

注意: 这里的 **服务器 IP 地址** 是 **主私网 IP** 而不是 **公网 IP**.
否则在启动的时候会报相应的 IP 地址错误.
**主私网 IP** 可以通过下面的命令来查看.

`ip addr`

### 启动

使用下面的命令来启动服务:

`sudo ssserver -c /etc/shadowsocks/shadowsocks.json -d start`

在启动的时候会出现如下的错误:

`AttributeError: /lib/x86_64-linux-gnu/libcrypto.so.1.1: undefined symbol: EVP_CIPHER_CTX_cleanup`

主要是因为 **openssl1.1.0** 里废弃了 `EVP_CIPHER_CTX_cleanup` 函数, 将其改为 `EVP_CIPHER_CTX_reset` 即可.
总共有 2 处.

修改完了之后再执行上述的命令即可.
