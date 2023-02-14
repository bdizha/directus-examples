import { u as useDirectusItems } from './useDirectusItems-f15604bd.mjs';
import { u as useRoute } from './server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[...id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getItemById } = useDirectusItems();
    const route = useRoute();
    const post = ([__temp, __restore] = withAsyncContext(() => getItemById({ collection: "blog", id: route.params.id })), __temp = await __temp, __restore(), __temp);
    if (!post)
      throwError("No article found, 404");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" }, _attrs))}><div class="max-w-screen-sm sm:text-center sm:mx-auto"><h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">${ssrInterpolate(unref(post).title)}</h2><hr class="w-full my-8 border-gray-300"><p class="text-base text-gray-700 md:text-lg sm:px-4">${ssrInterpolate(unref(post).content)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[...id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...id_-cee3f092.mjs.map
