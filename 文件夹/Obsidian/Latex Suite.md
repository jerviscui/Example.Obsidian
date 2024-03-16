---
tags: []
date created: 2022-10-24T22:18:14+08:00
date modified: 2023-10-31T15:44:13+08:00
---

# Latex Suite

提供数学公式智能提示、代码片段、语法颜色。
实现原理就是关键词替换，优点是很快。可以自定义规则代替 Snippet。

<https://github.com/artisticat1/obsidian-latex-suite>

## 注意

默认对减号进行替换，要输入分页使用 [Editing Toolbar](Editing%20Toolbar.md)

## 自定义规则

<https://github.com/artisticat1/obsidian-latex-suite/blob/main/DOCS.md>

```
{trigger: string, replacement: string, options: string, description : string, priority : number}
```

* `trigger` : 用于触发该命令的文本内容；
* `replacement` : 替换文本；
* `options` : 替换选项；
* `priority` (optional): 命令优先级，可以是负数。默认为 0；
* `description` (optional): 描述。

### Options

* m - 数学模式，只在数学模式下运行这个片段。
* t - 文本模式，只在数学之外运行该片段。
* A - 自动，触发器输入后，立即展开该片段。如果省略，必须按 Tab 键来展开该片段。
* r - Regex，触发器将被视为一个正则表达式。
* w - 字界，只有当触发器前面（和后面）有单词分界符，如 `.`, `,`, or `-` 时，才能运行这个片段。

### 内置变量

* `${VISUAL}` - 用于 `replacement`，表示选中内容。
* `${GREEK}` - 用于 `trigger`，代表希腊字符，用于实现连续替换，参考官方默认配置。
* `${SYMBOL}` - `trigger`，代表数学符号，用于实现连续替换，参考官方默认配置。

## 示例

使用参考：<https://www.zhihu.com/people/kio-mis/posts>

### 使用正则

```
[
    {trigger: "xxxx(\\d)", replacement: "【xxxx文件[[0]]】", options: "rt"}
]
```

* options：r 表示使用正则，
* trigger：`()` 实现分组，
* replacement：`[[0]]` 表示正则分组内容。

## 配置文件

[LatexSuite](../我的笔记/同步/LatexSuite.md)
