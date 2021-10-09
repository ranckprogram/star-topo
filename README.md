# star-topo

es6 快速开发自研的 canvas topo 图框架

parcel

```
parcel index.html
```

### canvas

图形库

- [ ] 事件判断
- [ ] 拖拽
- [ ] 点击
- [ ] 记录鼠标区域缩小便利区域
- [ ] 划线
- [ ] 减少渲染数量，（9 宫分页法）
- [ ] 批量绘制提高性能
- [ ] 坐标系，偏移量
- [ ] 分片渲染法，每次渲染一定量的数据，分批次完成渲染，多次测试找到普通电脑上最适合的渲染量参数
- [ ] 分层渲染，画线的时候，启用 2 个 canvas，原有不动，线条在上面的一个 canvas 中绘制，层叠合并成画

### Node

| 属性 | 类型 | 用途 |
| ---- | ---- | ---- |
| id   |      |      |

### 设备结构

继承 Node

| 属性   | 类型 | 用途      | 默认 |
| ------ | ---- | --------- | ---- |
| id     |      |           |      |
| width  |      | 默认：200 | 200  |
| height |      | 默认：30  | 30   |
| x      |      | x 坐标    | 0    |
| y      |      |           | 0    |
| image  |      | 设备图片  |      |
| text   |      | 设备名    |      |
| info   |      | 设备信息  |      |
| type   |      | 设备类型  |      |
| status |      | 活跃状态  |      |
| type   |      | 设备类型  |      |

一个设备组件需要自身有哪些方法？

- [x] render
- [ ] active
  - 定义自己的 active 样式
  - 定义触发 active 的方法
- [ ] setCursor
- [ ] transform（移动位置）
- [ ] 动画
- [ ] 点击事件

一个设备组件应该提供事件

next:

定义一个防火墙设备，追加到图上。

- [x] 加载图片
- [x] 加载文本
- [ ] 计算文本长度
- [ ] 处理文本换行和坐标的问题
- [ ] 处理 hover 变化
- [ ] hover 时候 有水晶头，水晶头可以连线
-

### 标注元素

### 线。边

- 基础直线
-

### 组

- 键盘鼠标组合选中多个
- 鼠标框选单位面积的多个

### 工具函数库

- [x] hoverCheck 鼠标移动过程中检测
- [ ]

### 事件

- [x] 多物体 hover
- [ ] 物体点击
- [ ] 边界判断
- [ ] 鼠标的回调事件中包含页面对象信息，鼠标坐标信息
- [ ] 拖动设备的时候更高的性能可以考虑分层渲染，合成结果。(靠后)
  - 不动的部分在底层 canvas
  - 动的部分在顶层 canvas

### contextmenu 右键菜单

- 删除
- 信息
- 其他
- 拓展

### 下载 topo

- 计算 canvas 全部边界
- 生成 data base 64 url 下载

### 鸟瞰图

- 编辑时候粗发生成完整图片
- 实际图和鸟瞰内窗的位置等比关联

### topo 图检索

- node 中寻找 name 或其他信息
- 获得目标 node
- transform 到对应坐标

### test

- 模拟 2000 个设备
- 模拟 2000 条线
- 模拟 1w 条数据
- 模拟 10w 条数据

### 对象继承图

```flow

start=>start: Node
device=>operation: DeviceNode
isFirewall=>condition: deviceType is firewall ?
firewall=>operation: Firewall

isRouter=>condition: deviceType is router?
router=>operation: Router

other=>operation: Other Component

start->device
start->device
device->isFirewall
isFirewall(yes)->firewall
isFirewall(no)->isRouter

isRouter(yes)->router
isRouter(no)->other




```

### topo 自动智能布局算法

- 邻边最多的节点放在画布的中间
- 最大程度保证同等深度的节点同一 y 轴高度排列
- 同等深度的相邻节点等宽
- 若等宽节点存在大量子节点，则递归等比释放距离

### 组件管理系统

- 继承方式拓展组件
- 约定必须重写的方法
- 合理继承父组件的本有属性
- 组件的事件系统，从源头开始 emit？
