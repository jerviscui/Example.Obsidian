---
tags: []
date created: 2023-10-15T20:29:02+08:00
date modified: 2023-10-29T00:25:24+08:00
---

![](../_templates/background-3.jpg#background_fade)

# Moment

JavaScript 的日期和时间库。
<https://momentjs.com/docs/#/parsing/>

Obsidian 内置了 momentjs 库，

```
const format =  'gggg-[W]ww';
moment(dv.current().file.name, format).subtract(1, "week").format(format)
```

时间格式字符串设置：<http://momentjs.com/docs/#/displaying/>
