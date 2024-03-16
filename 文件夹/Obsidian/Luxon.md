---
tags: []
date created: 2023-10-29T01:24:36+08:00
date modified: 2023-10-29T01:34:30+08:00
---

![](../_templates/background-5.jpg#background_fade)

# Luxon

JavaScript 时间库。
<https://moment.github.io/luxon/#/formatting?id=table-of-tokens>

当前时间：

```
DateTime.now().toISO() // '2023-10-29T01:32:45.961+08:00'
```

两个时间差值，<https://moment.github.io/luxon/api-docs/index.html#duration>

```
DateTime.now().diff(new DateTime("2021-01-01")).toFormat("y d s") //=> "1 6 2"
```
