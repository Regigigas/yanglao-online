import { D as NEmpty } from "./vendor-naive-Bsb33G6J.js";
import { l as defineComponent, U as openBlock, a1 as createElementBlock, W as createVNode, V as withCtx, s as renderSlot, u as unref } from "./vendor-vue-CdCNd1N_.js";
const _hoisted_1 = { class: "flex items-center justify-center py-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseEmpty",
  props: {
    description: { default: "暂无数据" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NEmpty), { description: __props.description }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["description"])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
