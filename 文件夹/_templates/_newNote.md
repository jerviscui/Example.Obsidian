---
tags:
date created: <% tp.file.creation_date("yyyy-MM-DDTHH:mm:ssZ") %>
date modified: <% tp.file.last_modified_date("yyyy-MM-DDTHH:mm:ssZ") %>
---

![](_templates/background-<% tp.user.getRandomNumber(1, 8) %>.jpg##background_fade)

<%*
//Rename your note, add condition just in case you accidentally delete the note
let newTitle
if(tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled")) {
    newTitle = await tp.system.prompt("请输入要创建的文件名")
    await tp.file.rename(newTitle)
}
else newTitle = tp.file.title
%>
# <% newTitle %>
