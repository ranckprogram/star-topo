export default function hoverCheck(e, nodes) {
  const { offsetX, offsetY } = e;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (
      node.x < offsetX &&
      node.x + node.width > offsetX &&
      node.y < offsetY &&
      node.y + node.height > offsetY
    ) {
      node.active = true;
      document.body.style.cursor = "pointer";
      return
    } else {
      node.active = false;
      document.body.style.cursor = "default";
    }
  }
}
