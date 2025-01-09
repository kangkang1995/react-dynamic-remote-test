import e from "react";
const r = (t) => {
  console.log("22222-我是子环境的log", t);
  const { state: l, setState: n, children: o } = t, a = () => {
    n.setAge(l.age + 1);
  };
  return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("button", { onClick: a }, "哦哦哦。牛逼 ", l.age ?? 0), /* @__PURE__ */ e.createElement("div", null, "子组件接受 父元素传过来的dom", o));
};
export {
  r as default
};
