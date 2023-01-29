import { _ as __nuxt_component_0$1 } from '../server.mjs';
import { u as useDirectusItems } from './useDirectusItems.4be9a3f0.mjs';
import { withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'defu';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'cookie-es';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getItems } = useDirectusItems();
    const posts = ([__temp, __restore] = withAsyncContext(() => getItems({ collection: "articles" })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"><div class="max-w-screen-sm sm:text-center sm:mx-auto"><h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">My Directus Blog</h2><p class="text-base text-gray-700 md:text-lg sm:px-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p><hr class="w-full my-8 border-gray-300"></div><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"><div class="overflow-hidden transition-shadow duration-300 bg-white rounded"><div class="py-5"><p class="mb-2 text-xs font-semibold text-gray-600">${ssrInterpolate(new Date(post.date_created).toLocaleDateString())}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/articles/${post.id}`,
          class: "inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-2xl font-bold leading-5 text-blue-800"${_scopeId}>${ssrInterpolate(post.title)}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-2xl font-bold leading-5 text-blue-800" }, toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="mb-4 text-gray-700">${ssrInterpolate(post.short_content)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.7bcce924.mjs.map
