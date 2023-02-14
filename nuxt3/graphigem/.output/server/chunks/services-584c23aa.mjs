import { _ as __nuxt_component_0 } from './server-placeholder-3a7b1497.mjs';
import { b as _sfc_main$1, _ as _sfc_main$2, a as __nuxt_component_3 } from './Services-a46aec9f.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './composables-1ca9bb4f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import 'cookie-es';
import 'ohash';
import './config.mjs';
import 'scule';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_row = __nuxt_component_0;
  const _component_v_col = __nuxt_component_0;
  const _component_Services = _sfc_main$1;
  const _component_Approach = _sfc_main$2;
  const _component_Projects = __nuxt_component_3;
  _push(ssrRenderComponent(_component_v_row, mergeProps({
    justify: "center",
    "no-gutters": ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Services, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Services)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Approach, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Approach)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Projects, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Projects)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_Services)
            ]),
            _: 1
          }),
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_Approach)
            ]),
            _: 1
          }),
          createVNode(_component_v_col, { cols: "12" }, {
            default: withCtx(() => [
              createVNode(_component_Projects)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { services as default };
//# sourceMappingURL=services-584c23aa.mjs.map
