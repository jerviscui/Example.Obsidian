---
aliases: []
tags: []
date created: 2022-10-24T22:18:15+08:00
date modified: 2022-10-25T20:21:45+08:00
---

# Templater

<https://github.com/SilentVoid13/Templater>
<https://silentvoid13.github.io/Templater/>

扩展 Obsidian 模板，可以执行 JavaScript 代码。

您可以将 Templater 设置为在创建新文件时触发。它将侦听新文件创建事件并替换它在新文件内容中找到的每个命令。

内部函数：<https://silentvoid13.github.io/Templater/internal-functions/overview.html>

用户脚本：
Templater 将加载文件夹中的所有 .js，
```js
function my_function (msg) {
    return "Message from my script:";
}
module.exports = my_function;
```
调用：
```
<% tp.user.<function()> %>
```

要从 JS 执行命令输出某些内容，您只需要将要输出的内容附加到该 tR 字符串变量即可。
例如，以下命令：<%* tR += "test" %>将输出 test.
