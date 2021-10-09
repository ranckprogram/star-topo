import DeviceNode from "../nodes/DeviceNode";
import images from "../assets/images/*.png";
export default class Firewall extends DeviceNode {
  constructor(props) {
    super(props);

    const img = document.createElement("img");
    img.src = images.concentrator;
    this.img = img;
  }

  render(ctx) {
    const { x, y, width, height, imageWidth, imageHeight, name, info } = this;

    const textTop = y + imageHeight + 15;

    this.img.onload = () => {
      ctx.drawImage(this.img, x, y, imageWidth, imageHeight);
    };
    ctx.drawImage(this.img, x, y, imageWidth, imageHeight);
    ctx.fillStyle = "#333";
    ctx.font = "12px serif";
    ctx.fillText(name, x, textTop);
    ctx.fillText(name, x, textTop);
    ctx.fillText(info, x, textTop + 10 + 12);
  }
}
