import Node from "./Node";
export default class DeviceNode extends Node {
  constructor({ x, y, width, height }) {
    super();
    this.deviceType = "deviceType";
    this.width = width;
    this.height = height;
    this.borderColor = "#333";
    this.x = x;
    this.y = y;
    console.log(this);
  }

  render(ctx) {
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.width, this.y);
    ctx.lineTo(this.width, this.y + this.height);
    ctx.lineTo(this.x, this.y + this.height);
    ctx.lineTo(this.x, this.y);
  }
}
