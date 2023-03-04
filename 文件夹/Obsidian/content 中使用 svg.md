---
aliases: []
tags: []
date created: 2022-10-24T22:18:14+08:00
date modified: 2022-10-25T20:21:48+08:00
---

# Content 中使用 Svg

css 伪元素 before 和 after，参考：<https://www.cnblogs.com/JCDXH/p/11498445.html>

使用 `url()`CSS function，参考：<https://stackoverflow.com/a/29276505/8163839>
svg 转换：<https://yoksel.github.io/url-encoder/>

```css
#mydiv::before {
  content: url("data:image/svg+xml; utf8, <svg ... code here</svg>");
  display: block;
  width: 22px;
  height: 10px;
  margin: 10px 5px 0 10px;
}
```
