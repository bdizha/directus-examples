import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { b as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import './node-server.mjs';
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
  data: () => ({
    currentYear: new Date().getFullYear(),
    links: [
      { title: "Home", route: "/" },
      { title: "Services", route: "/#services" },
      { title: "About Us", route: "/#about-us" }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_layout = resolveComponent("v-layout");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_main = resolveComponent("v-main");
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_layout, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_app_bar, null, {
                prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_img, {
                      width: "102",
                      height: "36",
                      src: "/logos/icon-text-016.png"
                    }, null, _parent4, _scopeId3));
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
                append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_sheet, { class: "text-right" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(_ctx.links, (link) => {
                            _push5(ssrRenderComponent(_component_v_btn, {
                              key: link,
                              color: "white",
                              variant: "text",
                              class: "mx-2",
                              rounded: "xl"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate(link)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(link), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                              return openBlock(), createBlock(_component_v_btn, {
                                key: link,
                                color: "white",
                                variant: "text",
                                class: "mx-2",
                                rounded: "xl"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(link), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_sheet, { class: "text-right" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                            return openBlock(), createBlock(_component_v_btn, {
                              key: link,
                              color: "white",
                              variant: "text",
                              class: "mx-2",
                              rounded: "xl"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(link), 1)
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
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_spacer, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_spacer)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_main, { style: { "min-height": "300px" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                    _push4(ssrRenderComponent(_component_v_footer, { padless: "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_card, {
                            theme: "accent",
                            class: "p3",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_row, { justify: "space-between" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_col, { class: "text-left" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_img, {
                                              width: "102",
                                              height: "36",
                                              src: "/logos/icon-text-010.png"
                                            }, null, _parent8, _scopeId7));
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
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, { class: "text-right" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<!--[-->`);
                                            ssrRenderList(_ctx.links, (link) => {
                                              _push8(ssrRenderComponent(_component_v_btn, {
                                                key: link,
                                                text: "",
                                                rounded: "",
                                                class: `m-3 text-${link.theme}`
                                              }, {
                                                default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                  if (_push9) {
                                                    _push9(`<a to="link.route"${_scopeId8}>${ssrInterpolate(link.title)}</a>`);
                                                  } else {
                                                    return [
                                                      createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent8, _scopeId7));
                                            });
                                            _push8(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                                return openBlock(), createBlock(_component_v_btn, {
                                                  key: link,
                                                  text: "",
                                                  rounded: "",
                                                  class: `m-3 text-${link.theme}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, { class: "text-center" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` \xA9 ${ssrInterpolate(_ctx.currentYear)}`);
                                          } else {
                                            return [
                                              createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              width: "102",
                                              height: "36",
                                              src: "/logos/icon-text-010.png"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                              return openBlock(), createBlock(_component_v_btn, {
                                                key: link,
                                                text: "",
                                                rounded: "",
                                                class: `m-3 text-${link.theme}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_row, { justify: "space-between" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            width: "102",
                                            height: "36",
                                            src: "/logos/icon-text-010.png"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                            return openBlock(), createBlock(_component_v_btn, {
                                              key: link,
                                              text: "",
                                              rounded: "",
                                              class: `m-3 text-${link.theme}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              theme: "accent",
                              class: "p3",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { justify: "space-between" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          width: "102",
                                          height: "36",
                                          src: "/logos/icon-text-010.png"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                          return openBlock(), createBlock(_component_v_btn, {
                                            key: link,
                                            text: "",
                                            rounded: "",
                                            class: `m-3 text-${link.theme}`
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default"),
                      createVNode(_component_v_footer, { padless: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            theme: "accent",
                            class: "p3",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { justify: "space-between" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        width: "102",
                                        height: "36",
                                        src: "/logos/icon-text-010.png"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                        return openBlock(), createBlock(_component_v_btn, {
                                          key: link,
                                          text: "",
                                          rounded: "",
                                          class: `m-3 text-${link.theme}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
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
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_app_bar, null, {
                  prepend: withCtx(() => [
                    createVNode(_component_v_img, {
                      width: "102",
                      height: "36",
                      src: "/logos/icon-text-016.png"
                    })
                  ]),
                  append: withCtx(() => [
                    createVNode(_component_v_sheet, { class: "text-right" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                          return openBlock(), createBlock(_component_v_btn, {
                            key: link,
                            color: "white",
                            variant: "text",
                            class: "mx-2",
                            rounded: "xl"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(link), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_spacer)
                  ]),
                  _: 1
                }),
                createVNode(_component_v_main, { style: { "min-height": "300px" } }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(_component_v_footer, { padless: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          theme: "accent",
                          class: "p3",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { justify: "space-between" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      width: "102",
                                      height: "36",
                                      src: "/logos/icon-text-010.png"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                      return openBlock(), createBlock(_component_v_btn, {
                                        key: link,
                                        text: "",
                                        rounded: "",
                                        class: `m-3 text-${link.theme}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
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
              createVNode(_component_v_app_bar, null, {
                prepend: withCtx(() => [
                  createVNode(_component_v_img, {
                    width: "102",
                    height: "36",
                    src: "/logos/icon-text-016.png"
                  })
                ]),
                append: withCtx(() => [
                  createVNode(_component_v_sheet, { class: "text-right" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                        return openBlock(), createBlock(_component_v_btn, {
                          key: link,
                          color: "white",
                          variant: "text",
                          class: "mx-2",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_spacer)
                ]),
                _: 1
              }),
              createVNode(_component_v_main, { style: { "min-height": "300px" } }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(_component_v_footer, { padless: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        theme: "accent",
                        class: "p3",
                        width: "100%"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { justify: "space-between" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { class: "text-left" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    width: "102",
                                    height: "36",
                                    src: "/logos/icon-text-010.png"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { class: "text-right" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link) => {
                                    return openBlock(), createBlock(_component_v_btn, {
                                      key: link,
                                      text: "",
                                      rounded: "",
                                      class: `m-3 text-${link.theme}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("a", { to: "link.route" }, toDisplayString(link.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \xA9 " + toDisplayString(_ctx.currentYear), 1)
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
//# sourceMappingURL=default.0525ac8c.mjs.map
