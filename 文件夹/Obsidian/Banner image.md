---
tags: []
date created: 2023-10-15T02:07:55+08:00
date modified: 2023-10-15T19:57:17+08:00
---

# Banner image

参考：<https://forum.obsidian.md/t/header-images-with-css/18917?u=jerviscui>

添加样式脚本：

```css
/* banner */
.view-content {
    z-index: 0;
}

span[src$="background_fade"] img,
div[src$="background_fade"] img {
    object-fit: cover;
    object-position: center;
    height: 250px;
    width: 100%;
    margin: 0px auto;
    /* ding wei */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* jian bian */
    -webkit-mask-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    opacity: 0.6;
}
```

然后在笔记中添加背景图，以 `#background_fade` 结尾：

```
![](_templates/background.jpg#background_fade)
```

可以使用 [Templater](Templater.md) 创建文件模板自动引入 background。

可以在 <https://wall.alphacoders.com/?lang=Chinese> 下载壁纸。
