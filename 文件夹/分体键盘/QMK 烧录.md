---
tags: []
date created: 2023-03-04T11:19:47+08:00
date modified: 2023-03-04T11:20:39+08:00
---

# QMK 烧录

## QMK Toolbox

1. 安装烧录工具：<https://github.com/qmk/qmk_toolbox>
2. 启动工具后提示安装驱动，
![](../_assets/Pasted%20image%2020221212005851.png)

## 烧录固件

<https://docs.qmk.fm/#/newbs_flashing?id=put-your-keyboard-into-dfu-bootloader-mode>

1. 通过 usb 连接电脑和芯片
2. toolbox 中选择编译好的固件文件 `.hex`，勾选 Auto-Flash,
![](../_assets/Pasted%20image%2020221219150423.png)
3. 短接芯片的 `RESET` 和 `GND` 针脚一到两次，开始自动烧录，
![](../_assets/Pasted%20image%2020221219151052.png)
4. 烧录成功后，设备自动断开连接，
![](../_assets/Pasted%20image%2020221219151118.png)
5. 设备自动以 usb 键盘方式连接系统，等待驱动自动安装好后，会出现在键盘管理中，
![](../_assets/Pasted%20image%2020221219151010.png)
6. 可以在<https://config.qmk.fm/#/test> 测试按键是否工作。

## 键盘触发

如果设置了 `QK_BOOT` 按键，则可以通过按键触发烧录。

比如上面的按键配置中，左手键盘插入 usb 时按键如下：
![](../_assets/Pasted%20image%2020230111051503.png)
如果是右手键盘插入 usb，基于电路映射，实际使用以下键触发烧录：
![](../_assets/Pasted%20image%2020230111052038.png)

**注意：** 只是改 keymap 的话，只烧录左手即可。
