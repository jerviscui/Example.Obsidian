---
tags: []
date created: 2024-07-17T17:43:24+08:00
date modified: 2024-07-17T18:06:28+08:00
---

![](../_templates/background-3.jpg#background_fade)

# Omnisearch

<https://github.com/scambier/obsidian-omnisearch>

使用 [MiniSearch](https://github.com/lucaong/minisearch) 实现的搜索引擎。

提供本地 HTTP 服务器以供外部应用搜索 Obsidian。

## 在 Google 中搜索 Obsidian 笔记

参考：
<https://publish.obsidian.md/omnisearch/Inject+Omnisearch+results+into+your+search+engine>
<https://sspai.com/post/85882>

1. 开启 HTTP Server：
    ![](../_assets/Omnisearch_files/Pasted%20image%2020240717174920.png)

2. 安装油猴脚本，<https://github.com/scambier/userscripts/raw/master/dist/obsidian-omnisearch-google.user.js>
3. 在 Google 中搜索时，会在右侧展示 Obsidian 中的搜索结果。
4. 点击结果使用 [Obsidian URI](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI) 在 Obsidian 中打开笔记。**不支持在新标签页打开**
