import DeviceNode from "./src/nodes/DeviceNode";
import Transform from "./src/core/Transform";
import hoverCheck from "./src/utils/hoverCheck";
class StarTopo {
  constructor(el) {
    this.el = document.querySelector(el);
    this.nodes = [];
    this.edges = [];

    this.transform = new Transform();

    this.el.addEventListener("mousemove", (e) => this.mousemove(e));
    this.render();
  }
  mousemove(e) {
    hoverCheck(e, this.nodes);
    this.render();
  }
  addNode(node) {
    // 自己定义设备，类型注册，创建设备节点，传入类型和参数

    this.nodes.push(node);
  }

  removeNode() {}

  render(nodes = this.nodes) {
    const canvas = this.el;
    const ctx = canvas.getContext("2d");

    for (let node of nodes) {
      node.render(ctx);
    }

    ctx.stroke();
  }
}

const topo = new StarTopo("#canvas");
console.log(topo);

const node = new DeviceNode({
  id: "id",
  x: 20,
  y: 20,
  width: 120,
  height: 30,
});
topo.addNode(node);

topo.addNode(
  new DeviceNode({
    id: "i4d",
    x: 100,
    y: 40,
    width: 220,
    height: 30,
  })
);

topo.render();
