// 功能：每次调用prev或next方法，返回值就会加1或减1
// 参数：接收一个最大值（到了最大值，next就是0）
export default class IndexControl {
  constructor(len) {
    this.len = len;
    this.index = 0;
  }
  prev() {
    return this.getIndex(-1);
  }
  next() {
    return this.getIndex(1);
  }
  getIndex(val) {
    this.index = (this.index + val + this.len) % this.len;
    return this.index;
  }
}