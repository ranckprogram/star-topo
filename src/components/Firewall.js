import DeviceNode from "../nodes/DeviceNode";
import images from "../assets/images/*.png";
export default class Firewall extends DeviceNode {
  constructor(props) {
    super(props);

    console.log(images);
  }

  render(ctx) {
    const { x, y, width, height, imageWidth, imageHeight, name, info } = this;

    const textTop = y + imageHeight + 10;
    const img = document.createElement("img");
    img.src = images.concentrator;

    img.onload = () => {
      ctx.drawImage(img, x, y, imageWidth, imageHeight);
      ctx.font = "12px serif";
      ctx.fillText(name, x, textTop);
      ctx.fillStyle ="#333"

      ctx.fillText(name, x, textTop);
      ctx.fillText(info, x, textTop + 10 + 12);
    };
  }
}
