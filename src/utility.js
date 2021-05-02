function utility() {

  this.formatPrice = (p) => {
    let _p = parseFloat(p);
    return _p > 0 && _p < 0.0001 ? "< 0.0001" : _p.toFixed(0).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  };

  return this;
}

export default new utility();