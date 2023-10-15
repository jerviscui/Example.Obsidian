---
tags: []
date created: 2022-10-24T22:18:15+08:00
date modified: 2023-10-16T00:06:37+08:00
---

# Templater

<https://github.com/SilentVoid13/Templater>
<https://silentvoid13.github.io/Templater/>

Templater 通过模板支持在文件创建过程中替换内容和执行脚本。

您可以将 Templater 设置为在创建新文件时触发，它将应用绑定的模板执行创建。

## 内部函数

<https://silentvoid13.github.io/Templater/internal-functions/overview.html>

```
tp.file.cursor(1)
tp.file.cursor_append("content: string")
```

tp.file.include() 包含一个模板文件。

```
<%*
let name = "background-" + tp.user.getRandomNumber(1, 8) + ".jpg"
let file = tp.file.find_tfile(name)
tp.file.include(file)
%>
```

## 执行 js

Templater 自身语法只支持方法调用，没有逻辑判断等。
使用 `<%* %>` 包装语句，可以执行 js 代码：

```
<%*
//Rename your note, add condition just in case you accidentally delete the note
let newTitle
if(tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled")) {
newTitle = await tp.system.prompt("请输入要创建的文件名")
await tp.file.rename(newTitle)
}
else newTitle = tp.file.title
%>
```

## 用户自定义脚本

Templater 将加载 `Scripts` 文件夹中的所有 JavaScript（ `.js` 文件）脚本。

```js
function my_function (msg) {
    return `Message from my script: ${msg}`;
}
module.exports = my_function;
```

调用：

```
<% tp.user.my_function("Hello World!") %>
```
