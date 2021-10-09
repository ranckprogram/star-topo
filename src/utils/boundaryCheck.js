export default function boundaryCheck(e, node) {
  const { offsetX, offsetY } = e;
  if (
    node.x < offsetX &&
    node.x + node.width > offsetX &&
    node.y < offsetY &&
    node.y + node.height > offsetY
  ) {
    return true;
  } else {
    return false;
  }
}
