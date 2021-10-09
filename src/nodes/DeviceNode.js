import Node from "./Node";
export default class DeviceNode extends Node {
  constructor({ x, y, width, height, name, info }) {
    super();
    this.deviceType = "deviceType";
    this.width = width;
    this.height = height;
    this.borderColor = "#333";
    this.x = x;
    this.y = y;

    this.imageWidth = 80;
    this.imageHeight = 30;

    this.name = name;
    this.info = info;

    this.isDrag = false; // 被拖动
    this.isSelect = false;
    console.log(this);
  }
  /**
   * 重新提笔的逻辑，只有在active情况才触发，不然会降低批量渲染的性能
   * - 有什么办法可以减少提笔hover ctx调用次数问题
   *   - 链表，但链表的遍历速度如何呢？
   *   - js运算或者worker运算比直接ctx性能更高
   *
   * @param {*} ctx
   * @memberof DeviceNode
   */
  render(ctx) {
    const [a, b] = [this.x, this.y];
    const [c, d] = [this.x + this.width, this.y + this.height];
    ctx.moveTo(a, b);
    ctx.lineTo(c, b);
    ctx.lineTo(c, d);
    ctx.lineTo(a, d);
    ctx.lineTo(a, b);

    if (this.active) {
      ctx.strokeStyle = "#f80";
      ctx.stroke();
      ctx.beginPath();
    } else {
      ctx.strokeStyle = "#333";
      ctx.stroke();
      ctx.beginPath();
    }
  }
}
