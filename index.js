console.log(1);
import DeviceNode from "./src/nodes/DeviceNode";
class StarTopo {
  constructor(el) {
    this.el = document.querySelector(el);
    this.nodes = [];
    this.edges = [];

    this.el.addEventListener("mousemove", this.mousemove);



    this.render()
  }
  mousemove(e) {
    console.log(e);
    const { offsetX, offsetY } = e;

  }
  addNode() {
    // 自己定义设备，类型注册，创建设备节点，传入类型和参数
    const node = new DeviceNode({
      id: "id",
      x: 20,
      y: 20,
      width: 120,
      height: 30,
    });
    this.nodes.push(node);
  }

  removeNode() {}

  render(nodes = this.nodes) {
    const canvas = this.el;
    const ctx = canvas.getContext("2d");
    console.log(ctx);

    for (let node of nodes) {
      node.render(ctx);
    }

    ctx.stroke();
  }
}

const topo = new StarTopo("#canvas");
console.log(topo);

topo.addNode();
topo.render();
