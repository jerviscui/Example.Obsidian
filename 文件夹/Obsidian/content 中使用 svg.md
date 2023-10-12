---
tags: []
date created: 2022-10-24T22:18:14+08:00
date modified: 2023-09-08T19:06:53+08:00
---

# content 中使用 svg

使用 CSS function，参考：<https://stackoverflow.com/a/29276505/8163839>

svg 转码后可以直接从本地加载，不需要联网。
svg 转换：<https://yoksel.github.io/url-encoder/>

通过 `url()` 加载转码后 svg：

```css
#mydiv::before {
  content: url("data:image/svg+xml; utf8, <svg ... code here</svg>");
  display: block;
  width: 22px;
  height: 10px;
  margin: 10px 5px 0 10px;
}
```

before 和 after 是 css [伪元素](../知识树/0%20-%20计算机科学、资讯与总类/000%20计算机科学、资讯与总类/005%20程序设计、程序、数据/005.2%20客户端/Web/CSS3/伪元素.md)
