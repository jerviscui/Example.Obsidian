---
aliases: []
tags: []
date created: 2022-10-24T22:18:14+08:00
date modified: 2022-10-25T20:21:47+08:00
---

# File Explorer Note Count

文件列表增加文件数统计。**必选，已经一年没有更新**
<https://github.com/ozntel/file-explorer-note-count>

该样式阻止显示数量 0：

```css
.nav-folder-title[data-count='0']::after {
    display: none;
}
```

使用 css 代码片段替换为：

```css
.nav-folder-title[data-count]::after {
    content: attr(data-count);
    display: inline-block;
    position: relative;
    background-color: var(--background-modifier-hover);
    border-radius: var(--radius-s);
    font-size: calc(100% * 0.9);
    font-weight: var(--font-semibold);
    letter-spacing: 0.05em;
    line-height: var(--line-height-normal);
    margin: 0 0 0 var(--size-2-3);
    padding: 0 var(--size-4-1);
    text-transform: uppercase;
    align-self: center;
    transition: opacity 100ms  ease-in-out;
}

.nav-folder-title[data-count='0']::after {
    content: attr(data-count);
    display: inline-block;
    position: relative;
    background-color: var(--background-modifier-hover);
    border-radius: var(--radius-s);
    font-size: calc(100% * 0.9);
    font-weight: var(--font-semibold);
    letter-spacing: 0.05em;
    line-height: var(--line-height-normal);
    margin: 0 0 0 var(--size-2-3);
    padding: 0 var(--size-4-1);
    text-transform: uppercase;
    align-self: center;
    transition: opacity 100ms  ease-in-out;
}
```

**可以用 Style Settings 替换吗？**
