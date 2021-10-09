export default function move(e, nodes, originPosition) {
  const [a, b] = originPosition;
  const { offsetX, offsetY } = e;

  const vectorX = offsetX - a;
  const vectorY = offsetY - b;
  originPosition = [vectorX, vectorY];

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].isSelect) {
      nodes[i]._x = nodes[i]._x || nodes[i].x;
      nodes[i]._y = nodes[i]._y || nodes[i].y;
      nodes[i].x = vectorX + nodes[i]._x;
      nodes[i].y = vectorY + nodes[i]._y;
    }
  }
}
