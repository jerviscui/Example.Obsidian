---
tags: []
date created: 2022-10-24T22:18:14+08:00
date modified: 2023-11-01T22:21:22+08:00
---

# Dataview

<https://github.com/blacksmithgu/obsidian-dataview>
<https://blacksmithgu.github.io/obsidian-dataview/>

基于 Obsidian Frontmatter 动态生成数据表格。

## 隐式字段

Dataview 会自动为每个页面添加大量元数据：

file.name：文件标题（字符串）。
file.folder：该文件所属文件夹的路径。
file.path：完整的文件路径（字符串）。
file.ext: 文件类型的扩展名；通常是“.md”（一个字符串）。
file.link：文件的链接（链接）。
file.size：文件的大小（以字节为单位）（一个数字）。
file.ctime：文件的创建日期（日期 + 时间）。
file.cday：文件的创建日期（只是一个日期）。
file.mtime：文件最后修改的日期（日期 + 时间）。
file.mday：文件最后修改的日期（只是一个日期）。
file.tags：笔记中所有唯一标签的数组。子标签按每个级别细分，因此 `#Tag/1/A` 将存储在数组中 `[#Tag, #Tag/1, #Tag/1/A]`。
file.etags：注释中所有显式标签的数组；不像 file.tags, 不包括子标签。
file.inlinks：指向此文件的所有传入链接的数组。
file.outlinks：此文件中所有传出链接的数组。
file.aliases：笔记的所有别名的数组。
file.tasks- [ ] blah blah blah：此文件中所有任务（即，）的数组。
file.lists：文件中所有列表元素的数组（包括任务）；这些元素是有效的任务，可以在任务视图中呈现。
file.frontmatter：包含所有 frontmatter 的原始值；主要用于检查原始 frontmatter 值或动态列出 frontmatter 键。

如果文件在其标题（表单 yyyy-mm-dd 或 yyyymmdd）中有日期，或者有一个 Date 字段/内联字段，它还具有以下属性：
file.day：与文件关联的明确日期。

如果您使用 Obsidian 默认的“加星标文件”插件，还可以使用以下元数据：
file.starred：如果此文件已被“星星”黑曜石插件加注星标。

## 查询

~~~
```dataview
[list|table|task] field1, (field2 + field3) as myfield, ..., fieldN
from #tag or "folder" or [[link]] or outgoing([[link]])
where field [>|>=|<|<=|=|&|'|'] [field2|literal value] (and field2 ...) (or field3...)
sort field [ascending|descending|asc|desc] (ascending is implied if not provided)
```
~~~

* list 、table 、task 分别对应 dataview 的列表、表格以及代办事项；
* field 对应 FrontMeta 中属性，空格使用 `-` 代替；
* from 指的是从哪里获取数据，允许使用 `and`、`or`、`!`；
* where 指的是上边获取的数据，要符合怎样的规则，也就是筛选；
* sort 指的是排序，默认升序。
* GROUP

    ```
    GROUP BY field
    GROUP BY (computed_field) AS name
    ```

from 支持：

* Tags: `use FROM #tag`.
* Folders: 从一个文件夹（和它的所有子文件夹）, use FROM "folder".
* Single Files: 从一个单一的文件中, use FROM "path/to/file".
* Links: 基于文件入链和出链作为数据源
    * which link TO `[[note]]`, use `FROM [[note]]`.
    * which link FROM `[[note]]` (i.e., all the links in that file), use `FROM outgoing([[note]])`.

### 常量

<https://blacksmithgu.github.io/obsidian-dataview/reference/literals/>

|    literals      |    |
|:--------------------|:----------------------------------|
|  `[[Link]]`         |  A link to the file named "Link"  |
|  `[1, 2, 3]`        |  A list of numbers 1, 2, and 3    |
|  `[[1, 2],[3, 4]]`  |  A list of lists                  |
|  `{ a: 1, b: 2 }`   |  An object                        |
|  `date()`           |  [Luxon DateTime](https://moment.github.io/luxon/api-docs/index.html#datetime) 返回 DateTime 对象  |
|  `duration("3 days 7 hours 43 seconds")`  |  [Luxon Duration](https://moment.github.io/luxon/api-docs/index.html#duration) 返回 Duration 对象  |
|  `dv.luxon.DateTime.now()`  |  当前时间 DateTime 对象  |

### 表达式

Lambdas：

```
(arg1, arg2, arg3, ...) => <expression using args>
```

### 内置函数

字符串处理、meta 信息等。
<https://blacksmithgu.github.io/obsidian-dataview/reference/functions/>

#### 日期处理

使用 [Luxon](Luxon.md) 处理日期和时间。

```javascript
dateformat(file.ctime,"yyyy-MM-dd") = "2022-01-05"
dateformat(file.ctime,"HH:mm:ss") = "12:18:04"
dateformat(date(now),"x") = "1407287224054"
dateformat(file.mtime,"ffff") = "Wednesday, August 6, 2014, 1:07 PM Eastern Daylight Time"
```

### 处理字段格式

在表达式中使用字符串模板：

```
notes.map(o => [`[[${o.file.name}]]`, o.file.mday, o.file.mday - now])
```

* 使用 `` ` `` 包裹字符串
* `${}` 中使用变量

## Dataviewjs

Dataview JavaScript API 允许通过访问 dataview 索引和查询引擎来执行任意 JavaScript。
同时提供 Api 给其他插件访问 `app.plugins.plugins.dataview.api`。

### Dv 对象

API 可通过隐式提供的 `dv` 或 `dataview` 变量获得。

<https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/>

~~~
```dataviewjs
dv.pages("#books") //返回所有带有标签 books 的页面
dv.pages('"folder"') //返回所有在 folder 文件夹的页面
dv.pages("#yes or -#no") //返回所有带有标签 yes 或者没有标签 no 的页面
dv.pages("") //返回所有页面
```
~~~

#### 数据处理方法

使用 `DataArray` 定义返回结果，它是一个具有额外功能的代理数组。
数据数组像普通数组一样支持索引和迭代（通过 for 和 for ...的循环），还支持许多数据处理方法，如 sort、groupBy、distinct、where 等。
[Data Arrays - Dataview](https://blacksmithgu.github.io/obsidian-dataview/api/data-array/)

### fileLink

生成文件链接：

```
dv.fileLink(path, [embed?], [display-name])
```

### 调试

在控制台中使用 `DataviewAPI` 可以调试 Dv 对象：

```
DataviewAPI.pages('""').groupBy(o => o.file.mday).limit(365)
DataviewAPI.luxon.DateTime.now()
```

### 示例

参考：<https://zhuanlan.zhihu.com/p/373623264>

~~~
```
LIST WITHOUT ID file.path FROM "4. Archive"
```
~~~

基于 dataview 实现的上下周的功能：

~~~
```dataviewjs
const format =  'gggg-[W]ww';
dv.paragraph(`<<[[${moment(dv.current().file.name, format).subtract(1, "week").format(format)}|上周]]  [[${moment(dv.current().file.name, format).add(1,  "week").format(format)}||下周]]>>`)
```
~~~

* 使用 [Moment](Moment.md) 处理时间。

## 示例

### 显示 Toc

~~~
```dataviewjs
dv.view('toc')
```
~~~
