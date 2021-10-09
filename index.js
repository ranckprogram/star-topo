import DeviceNode from "./src/nodes/DeviceNode";
import Transform from "./src/core/Transform";
import hoverCheck from "./src/utils/hoverCheck";
import Firewall from "./src/components/Firewall";

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
    const ctx = canvas.getContext("2d", { alpha: true });

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

topo.addNode(
  new Firewall({
    id: "firewall",
    x: 300,
    y: 80,
    width: 80,
    height: 100,
    name: "防火墙",
    info: "10.0.0.25",
  })
);

topo.addNode(
  new Firewall({
    id: "firewall",
    x: 300,
    y: 180,
    width: 80,
    height: 100,
    name: "防火墙sfdfsdfsdf阿三大苏打",
    info: "10.0.0.25犯得上发射点发射点犯得上",
  })
);
topo.render();
