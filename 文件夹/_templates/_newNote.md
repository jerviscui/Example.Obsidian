---
tags:
date created: <% tp.file.creation_date("yyyy-MM-DDTHH:mm:ssZ") %>
date modified: <% tp.file.last_modified_date("yyyy-MM-DDTHH:mm:ssZ") %>
---
<%*
let name = "background-" + tp.user.getRandomNumber(1, 8) + ".jpg" 
let file = tp.file.find_tfile(name)
let background = tp.user.getRelativeLink(tp.file.path(true), file.path)

//Rename your note, add condition just in case you accidentally delete the note
let newTitle
if(tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled")) {
    newTitle = await tp.system.prompt("请输入要创建的文件名")
    await tp.file.rename(newTitle)
}
else newTitle = tp.file.title
%>

![](<% background %>#background_fade)

# <% newTitle %>
