import DeviceNode from "./src/nodes/DeviceNode";
import Transform from "./src/core/Transform";
import hoverCheck from "./src/utils/hoverCheck";
import Firewall from "./src/components/Firewall";
import boundaryCheck from "./src/utils/boundaryCheck";
import moveNodes from "./src/utils/move";

class StarTopo {
  constructor(el) {
    this.el = document.querySelector(el);
    this.nodes = [];
    this.edges = [];
    this.annotations = [];

    this.transform = new Transform();
    this.originPosition = [0, 0];

    this.isPress = false;

    this.raf = null; // 动画

    this.el.addEventListener("mousemove", (e) => this.mousemove(e));
    this.el.addEventListener("mouseleave", (e) => this.mouseleave(e));
    this.el.addEventListener("mousedown", (e) => this.mousedown(e));
    this.el.addEventListener("mouseup", (e) => this.mouseup(e));

    this.render();
  }

  mousemove(e) {
    if (this.isPress) {
      moveNodes(e, this.nodes, this.originPosition);
    } else {
      hoverCheck(e, this.nodes);

      // 优化+1，鼠标如果没检测到碰撞，可以不调用渲染
      this.render();
    }
  }

  mouseleave(e) {
    this.mouseup();
  }

  mousedown(e) {
    this.isPress = true;
    this.draw();
    const { offsetX, offsetY } = e;
    this.originPosition = [offsetX, offsetY];
    for (let i = 0; i < this.nodes.length; i++) {
      const isPress = boundaryCheck(e, this.nodes[i]);
      this.nodes[i].isSelect = isPress;
    }

    console.log(this.nodes);
  }

  mouseup(e) {
    this.isPress = false;
    window.cancelAnimationFrame(this.raf);

    this.originPosition = [0, 0];
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].isPress = false;
      this.nodes[i]._x = 0;
      this.nodes[i]._y = 0;
    }
  }

  addNode(node) {
    // 自己定义设备，类型注册，创建设备节点，传入类型和参数
    this.nodes.push(node);
  }

  removeNode() {}

  destroy() {}

  draw() {
    if (this.isPress) {
      this.render();
      this.raf = window.requestAnimationFrame(() => this.draw());
    }
  }

  render(nodes = this.nodes) {
    const canvas = this.el;
    const ctx = canvas.getContext("2d", { alpha: true });

    ctx.fillStyle = "#ddd";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let node of nodes) {
      node.render(ctx);
    }

    // ctx.stroke();
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
