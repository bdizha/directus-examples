import { _ as __nuxt_component_0 } from './server-placeholder-3a7b1497.mjs';
import { _ as _export_sfc, e as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, withCtx, renderSlot, createVNode, mergeProps, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  data: () => ({
    drawer: false,
    currentYear: (/* @__PURE__ */ new Date()).getFullYear(),
    links: [
      { title: "Home", variant: "text", route: "/", theme: "purple" },
      { title: "Services", variant: "text", route: "/services", theme: "pink" },
      { title: "Careers", variant: "text", route: "/careers", theme: "green" },
      {
        title: "About Us",
        variant: "text",
        route: "/about-us",
        theme: "yellow"
      },
      {
        title: "Get in touch",
        variant: "outlined",
        route: "/#contact-us",
        theme: "yellow"
      }
    ]
  })
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app_bar = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_v_img = __nuxt_component_0;
  const _component_v_spacer = __nuxt_component_0;
  const _component_v_app_bar_nav_icon = __nuxt_component_0;
  const _component_v_sheet = __nuxt_component_0;
  const _component_v_btn = __nuxt_component_0;
  const _component_v_navigation_drawer = __nuxt_component_0;
  const _component_v_list = __nuxt_component_0;
  const _component_v_list_item_group = __nuxt_component_0;
  const _component_v_list_item = __nuxt_component_0;
  const _component_v_list_item_title = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_app_bar, null, {
    prepend: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_img, {
                width: "102",
                height: "36",
                src: "/logos/icon-text-016.png"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_img, {
                  width: "102",
                  height: "36",
                  src: "/logos/icon-text-016.png"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, { to: "/" }, {
            default: withCtx(() => [
              createVNode(_component_v_img, {
                width: "102",
                height: "36",
                src: "/logos/icon-text-016.png"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    append: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_app_bar_nav_icon, {
          color: "accent",
          class: "hidden-md-and-up text-right",
          onClick: ($event) => _ctx.drawer = !_ctx.drawer
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_sheet, { class: "hidden-sm-and-down text-right" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.links, (link) => {
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: link.route,
                  key: link
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_btn, {
                        color: "white",
                        variant: link.variant,
                        class: "mx-2",
                        rounded: "xl"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(link.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(link.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_btn, {
                          color: "white",
                          variant: link.variant,
                          class: "mx-2",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["variant"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    to: link.route,
                    key: link
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "white",
                        variant: link.variant,
                        class: "mx-2",
                        rounded: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(link.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["variant"])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_app_bar_nav_icon, {
            color: "accent",
            class: "hidden-md-and-up text-right",
            onClick: ($event) => _ctx.drawer = !_ctx.drawer
          }, null, 8, ["onClick"]),
          createVNode(_component_v_sheet, { class: "hidden-sm-and-down text-right" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  to: link.route,
                  key: link
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      color: "white",
                      variant: link.variant,
                      class: "mx-2",
                      rounded: "xl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant"])
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_spacer)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_navigation_drawer, {
    modelValue: _ctx.drawer,
    "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
    width: "100%",
    temporary: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_list, {
          nav: "",
          dense: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_list_item_group, {
                modelValue: _ctx.group,
                "onUpdate:modelValue": ($event) => _ctx.group = $event,
                "active-class": "deep-purple--text text--accent-4"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList(_ctx.links, (link) => {
                      _push4(ssrRenderComponent(_component_v_list_item, { key: link }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_NuxtLink, {
                                    to: link.route
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_v_btn, {
                                          color: "white",
                                          variant: link.variant,
                                          class: "mx-2",
                                          rounded: "xl"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(link.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(link.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_v_btn, {
                                            color: "white",
                                            variant: link.variant,
                                            class: "mx-2",
                                            rounded: "xl"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(link.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["variant"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_NuxtLink, {
                                      to: link.route
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: "white",
                                          variant: link.variant,
                                          class: "mx-2",
                                          rounded: "xl"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(link.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["variant"])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: link.route
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "white",
                                        variant: link.variant,
                                        class: "mx-2",
                                        rounded: "xl"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(link.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["variant"])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                        return openBlock(), createBlock(_component_v_list_item, { key: link }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: link.route
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "white",
                                      variant: link.variant,
                                      class: "mx-2",
                                      rounded: "xl"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["variant"])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_list_item_group, {
                  modelValue: _ctx.group,
                  "onUpdate:modelValue": ($event) => _ctx.group = $event,
                  "active-class": "deep-purple--text text--accent-4"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                      return openBlock(), createBlock(_component_v_list_item, { key: link }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: link.route
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: "white",
                                    variant: link.variant,
                                    class: "mx-2",
                                    rounded: "xl"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(link.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["variant"])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_list, {
            nav: "",
            dense: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_list_item_group, {
                modelValue: _ctx.group,
                "onUpdate:modelValue": ($event) => _ctx.group = $event,
                "active-class": "deep-purple--text text--accent-4"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                    return openBlock(), createBlock(_component_v_list_item, { key: link }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: link.route
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "white",
                                  variant: link.variant,
                                  class: "mx-2",
                                  rounded: "xl"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["variant"])
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data: () => ({
    currentYear: (/* @__PURE__ */ new Date()).getFullYear(),
    links: [
      { title: "Home", variant: "text", route: "/", theme: "purple" },
      { title: "Services", variant: "text", route: "/services", theme: "pink" },
      { title: "Careers", variant: "text", route: "/careers", theme: "green" },
      {
        title: "About Us",
        variant: "text",
        route: "/about-us",
        theme: "yellow"
      },
      {
        title: "Get in touch",
        variant: "outlined",
        route: "/#contact-us",
        theme: "white"
      }
    ]
  })
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_footer = __nuxt_component_0;
  const _component_v_card = __nuxt_component_0;
  const _component_v_row = __nuxt_component_0;
  const _component_v_col = __nuxt_component_0;
  const _component_v_img = __nuxt_component_0;
  const _component_v_spacer = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_v_btn = __nuxt_component_0;
  const _component_v_card_text = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_footer, mergeProps({
    padless: "",
    class: "text-center-sm-and-down"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, {
          theme: "accent",
          class: "p3",
          rounded: "0",
          width: "100%"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { justify: "center" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, { cols: "auto" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_img, {
                            width: "102",
                            height: "36",
                            src: "/logos/icon-text-010.png"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_img, {
                              width: "102",
                              height: "36",
                              src: "/logos/icon-text-010.png"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_spacer, { class: "hidden-md-and-down" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      md: "auto",
                      cols: "12"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_row, {
                            justify: "end",
                            "no-gutters": ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<!--[-->`);
                                ssrRenderList(_ctx.links, (link) => {
                                  _push6(ssrRenderComponent(_component_v_col, {
                                    md: "auto",
                                    cols: "12",
                                    key: link
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_NuxtLink, {
                                          to: link.route
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_v_btn, {
                                                color: link.theme,
                                                variant: link.variant,
                                                class: "mx-2",
                                                rounded: "xl"
                                              }, {
                                                default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                  if (_push9) {
                                                    _push9(`${ssrInterpolate(link.title)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(link.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(_component_v_btn, {
                                                  color: link.theme,
                                                  variant: link.variant,
                                                  class: "mx-2",
                                                  rounded: "xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(link.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color", "variant"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_NuxtLink, {
                                            to: link.route
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: link.theme,
                                                variant: link.variant,
                                                class: "mx-2",
                                                rounded: "xl"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(link.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "variant"])
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                });
                                _push6(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      md: "auto",
                                      cols: "12",
                                      key: link
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: link.route
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: link.theme,
                                              variant: link.variant,
                                              class: "mx-2",
                                              rounded: "xl"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(link.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "variant"])
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_row, {
                              justify: "end",
                              "no-gutters": ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    md: "auto",
                                    cols: "12",
                                    key: link
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: link.route
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            color: link.theme,
                                            variant: link.variant,
                                            class: "mx-2",
                                            rounded: "xl"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(link.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "variant"])
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      lg: "12",
                      cols: "12",
                      class: "text-center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card_text, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Graphigem Digital \xA9 ${ssrInterpolate(_ctx.currentYear)}`);
                              } else {
                                return [
                                  createTextVNode("Graphigem Digital \xA9 " + toDisplayString(_ctx.currentYear), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createTextVNode("Graphigem Digital \xA9 " + toDisplayString(_ctx.currentYear), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, { cols: "auto" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            width: "102",
                            height: "36",
                            src: "/logos/icon-text-010.png"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_spacer, { class: "hidden-md-and-down" }),
                      createVNode(_component_v_col, {
                        md: "auto",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, {
                            justify: "end",
                            "no-gutters": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  md: "auto",
                                  cols: "12",
                                  key: link
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: link.route
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          color: link.theme,
                                          variant: link.variant,
                                          class: "mx-2",
                                          rounded: "xl"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(link.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "variant"])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        lg: "12",
                        cols: "12",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createTextVNode("Graphigem Digital \xA9 " + toDisplayString(_ctx.currentYear), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_row, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, { cols: "auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          width: "102",
                          height: "36",
                          src: "/logos/icon-text-010.png"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_spacer, { class: "hidden-md-and-down" }),
                    createVNode(_component_v_col, {
                      md: "auto",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          justify: "end",
                          "no-gutters": ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                              return openBlock(), createBlock(_component_v_col, {
                                md: "auto",
                                cols: "12",
                                key: link
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: link.route
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: link.theme,
                                        variant: link.variant,
                                        class: "mx-2",
                                        rounded: "xl"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(link.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "variant"])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      lg: "12",
                      cols: "12",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createTextVNode("Graphigem Digital \xA9 " + toDisplayString(_ctx.currentYear), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, {
            theme: "accent",
            class: "p3",
            rounded: "0",
            width: "100%"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_img, {
                        width: "102",
                        height: "36",
                        src: "/logos/icon-text-010.png"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_spacer, { class: "hidden-md-and-down" }),
                  createVNode(_component_v_col, {
                    md: "auto",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        justify: "end",
                        "no-gutters": ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                            return openBlock(), createBlock(_component_v_col, {
                              md: "auto",
                              cols: "12",
                              key: link
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: link.route
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: link.theme,
                                      variant: link.variant,
                                      class: "mx-2",
                                      rounded: "xl"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "variant"])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    lg: "12",
                    cols: "12",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createTextVNode("Graphigem Digital \xA9 " + toDisplayString(_ctx.currentYear), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data: () => ({
    currentYear: (/* @__PURE__ */ new Date()).getFullYear(),
    links: [
      { title: "Home", route: "/", theme: "purple" },
      { title: "Services", route: "/services", theme: "pink" },
      { title: "Careers", route: "/careers", theme: "green" },
      { title: "About Us", route: "/about-us", theme: "yellow" }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = __nuxt_component_0;
  const _component_v_layout = __nuxt_component_0;
  const _component_Header = __nuxt_component_1;
  const _component_v_main = __nuxt_component_0;
  const _component_Footer = __nuxt_component_2;
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_layout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Header, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_main, { style: { "min-height": "300px" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                    _push4(ssrRenderComponent(_component_Footer, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default"),
                      createVNode(_component_Footer)
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Header),
                createVNode(_component_v_main, { style: { "min-height": "300px" } }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(_component_Footer)
                  ]),
                  _: 3
                })
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_layout, null, {
            default: withCtx(() => [
              createVNode(_component_Header),
              createVNode(_component_v_main, { style: { "min-height": "300px" } }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(_component_Footer)
                ]),
                _: 3
              })
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-1e773752.mjs.map
