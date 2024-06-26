function h(n) {
  const t = d(n);
  return function() {
    const e = t[0] ^ t[0] << 11;
    return t[0] = t[1], t[1] = t[2], t[2] = t[3], t[3] = t[3] ^ t[3] >> 19 ^ e ^ e >> 8, (t[3] >>> 0) / (1 << 31 >>> 0);
  };
}
function d(n) {
  const t = new Uint32Array([0, 0, 0, 0]);
  for (let o = 0; o < n.length; o++)
    t[o % 4] = (t[o % 4] << 5) - t[o % 4] + n.charCodeAt(o);
  return t;
}
function g(n) {
  const t = h(n.toLowerCase()), o = $(t);
  return [m(t), o];
}
function m(n) {
  const t = new Uint8Array(32);
  for (let o = 0; o < 32; o++)
    t[o] = Math.floor(
      // background: 43% chances
      // color:      43% chances
      // spot:       13% chances
      n() * 2.3
    );
  return t;
}
function $(n) {
  const t = u(n), o = u(n), e = u(n);
  return [o, t, e];
}
function u(n) {
  return new Uint16Array([
    // hue = 0 to 360 (whole color spectrum)
    n() * 360,
    // saturation = 40 to 100 (avoid greyish colors)
    40 + n() * 60,
    // lightness = 0 to 100 but probabilities are a bell curve around 50%
    (n() + n() + n() + n()) * 25
  ]);
}
const w = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" shape-rendering="optimizeSpeed" ';
function p(n, t) {
  const o = h(n.toLowerCase()), [e, s, c] = $(o), r = [
    "M0,0H8V8H0z",
    // background
    "",
    // color
    ""
    // spot
  ];
  for (let a = 0, i, l; a < 32; a++) {
    i = a % 4, l = Math.floor(a / 4);
    const f = Math.floor(o() * 2.3);
    f > 0 && (r[f] += `M${i},${l}h1v1h-1zM${7 - i},${l}h1v1h-1z`);
  }
  return `${w}width="${t}" height="${t}"><path fill="hsl(${e[0]} ${e[1]}% ${e[2]}%)" d="${r[0]}"/><path fill="hsl(${s[0]} ${s[1]}% ${s[2]}%)" d="${r[1]}"/><path fill="hsl(${c[0]} ${c[1]}% ${c[2]}%)" d="${r[2]}"/></svg>`;
}
function b(n, t = 64) {
  return "data:image/svg+xml;base64," + btoa(v(n, t));
}
function v(n, t = 64) {
  return p(n, t);
}
function x(n) {
  return g(n);
}
export {
  b as blo,
  x as bloImage,
  v as bloSvg
};
