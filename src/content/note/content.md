---
title: Markdown高级格式
timestamp: 2025-04-04 00:00:00+00:00
series: Astro
tags: [Content, Demo]
contents: true
top: 1
---

# 代码块

```lua
print('hello world')
```

下面是分割线

---

```astro
<script>
	import zoom from "medium-zoom/dist/pure";

	window.zoom = () => zoom(".markdown img", { background: "#00000044" });
	window.zoom();

	document.addEventListener("astro:page-load", () => {
		window.zoom();
	});
</script>

```

## 二级标题

### 三级标题

#### 四级标题

# 序列

- 123
- qwerttyuiop
- 信息展示你好朋友

蜻蜓队长：
1. 绝对不意气用事
2. 绝对不漏抓任何一件坏事
3. 绝对裁判得公正漂亮，裁判机器人蜻蜓队长前来晋见！

- [ ] xxx
- [x] xxx

# 表格
| id | plugins        | description    |
|----|----------------|----------------|
| 1  | vim-table-mode | 用它写表格得劲 |
| 2  | telescope      | 各种快速检索   |
| 3  | mirage.nvim    | 没啥用         |


# 文字样式

**加粗**

*斜体*

~~删除~~

==下划线==

普通链接：https://baidu.com

[超链接](https://baidu.com)


> [!TIP]
> 
> 123

> [!IMPORTANT]
> 
> 123

> [!CAUTION]
> 
> 123

> [!WARNING]
> 
> 123

> [!NOTE]
> Hello

> NOTION
> 
> 333
> 444

# 流程图

```mermaid
graph TD
smbconnection --> 初始化 --> 判断连接端口
判断连接端口 --> 139端口 --> *使用NetBios-TCP连接 --> 获取NetBios名称 --> *再次使用NetBios-TCP连接 
判断连接端口 --> 445端口 --> *再次使用NetBios-TCP连接 
*再次使用NetBios-TCP连接 --> *发送命令SMB_COM_NEGOTIATE:0x72 --> 根据响应判断smb版本
根据响应判断smb版本 --> SMB1 --> 登录
根据响应判断smb版本 --> SMB2/3 --> 登录
登录 --> *Kerberos登录 --> AS_REQ获取TGT --> TGS_REQ:使用TGT获取针对CIFS服务的TGS --> 构造AP_REQ请求并通过smb发送 --> 登录完成
登录 --> *NTLM登录
*NTLM登录 --> SMB1下使用NTLMv1登录 --> 登录完成
*NTLM登录 --> SMB2/3下使用NTLMSSP登录 --> 登录完成
登录完成 --> 启动伪shell
```


# emoji
🎉

```text
🎉

```
