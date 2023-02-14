import { _ as __nuxt_component_0 } from './server-placeholder-3a7b1497.mjs';
import { _ as _sfc_main$2 } from './Values-7d662158.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    const players = [
      {
        theme: "purple",
        src: "/team/01007.png",
        title: `Creative Art`,
        subtitle: `Drijke Wessles`,
        text: "Always and expanding my knowledge scope while spreading magic in the world through a futuristic lense of imagination."
      },
      {
        theme: "pink",
        src: "/team/00051.png",
        title: "Web3 Enthusiast",
        subtitle: `Batanayi Matuku`,
        text: "Obsessed with ideating and architecting branding strategies and building bold things for innovative brands in Africa."
      },
      {
        theme: "green",
        src: "/team/00934.png",
        title: "2D artist",
        subtitle: `Sibusiso Nkosi`,
        text: "Everday we dream it, we'll make it the best we can. If you just think of the job, the credit will automatically follow."
      },
      {
        theme: "yellow",
        src: "/team/00446.png",
        title: "3D Artist",
        subtitle: `Jason Grobler`,
        text: `All creative people want to do the unexpected and the crazy stuff too. I find myself happy with little things like drawing.`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = __nuxt_component_0;
      const _component_v_row = __nuxt_component_0;
      const _component_v_col = __nuxt_component_0;
      const _component_v_card_subtitle = __nuxt_component_0;
      const _component_v_img = __nuxt_component_0;
      const _component_v_card_title = __nuxt_component_0;
      const _component_v_card_text = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        rounded: "0",
        theme: "accent",
        class: "p12 dark-green"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    lg: "6",
                    cols: "12",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_subtitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h2 class="text-h2"${_scopeId4}><span class="text-green"${_scopeId4}>Our</span> team</h2>`);
                            } else {
                              return [
                                createVNode("h2", { class: "text-h2" }, [
                                  createVNode("span", { class: "text-green" }, "Our"),
                                  createTextVNode(" team")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_subtitle, null, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h2" }, [
                                createVNode("span", { class: "text-green" }, "Our"),
                                createTextVNode(" team")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    lg: "9",
                    md: "6",
                    sm: "12",
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "top",
                          justify: "start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(players, (value, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  lg: "3",
                                  md: "6",
                                  cols: "12",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        theme: "theme",
                                        class: `p2 dark-${value.theme}`,
                                        "min-height": "75"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_row, {
                                              align: "center",
                                              justify: "start"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_card, {
                                                          theme: "accent",
                                                          class: `p2 dark-${value.theme}`
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_img, {
                                                                height: "100%",
                                                                src: value.src
                                                              }, null, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: value.src
                                                                }, null, 8, ["src"])
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_card, {
                                                            theme: "accent",
                                                            class: `p2 dark-${value.theme}`
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: value.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_row, {
                                                          dense: "",
                                                          align: "center",
                                                          justify: "center"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_card_title, null, null, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(_component_v_card_subtitle, {
                                                                      class: `text-${value.theme}`
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(_component_v_card_text, null, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_card_title, {
                                                                        innerHTML: value.title
                                                                      }, null, 8, ["innerHTML"]),
                                                                      createVNode(_component_v_card_subtitle, {
                                                                        class: `text-${value.theme}`,
                                                                        innerHTML: value.subtitle
                                                                      }, null, 8, ["class", "innerHTML"]),
                                                                      createVNode(_component_v_card_text, {
                                                                        innerHTML: value.text
                                                                      }, null, 8, ["innerHTML"])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_title, {
                                                                      innerHTML: value.title
                                                                    }, null, 8, ["innerHTML"]),
                                                                    createVNode(_component_v_card_subtitle, {
                                                                      class: `text-${value.theme}`,
                                                                      innerHTML: value.subtitle
                                                                    }, null, 8, ["class", "innerHTML"]),
                                                                    createVNode(_component_v_card_text, {
                                                                      innerHTML: value.text
                                                                    }, null, 8, ["innerHTML"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_row, {
                                                            dense: "",
                                                            align: "center",
                                                            justify: "center"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, {
                                                                    innerHTML: value.title
                                                                  }, null, 8, ["innerHTML"]),
                                                                  createVNode(_component_v_card_subtitle, {
                                                                    class: `text-${value.theme}`,
                                                                    innerHTML: value.subtitle
                                                                  }, null, 8, ["class", "innerHTML"]),
                                                                  createVNode(_component_v_card_text, {
                                                                    innerHTML: value.text
                                                                  }, null, 8, ["innerHTML"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          theme: "accent",
                                                          class: `p2 dark-${value.theme}`
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: value.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          dense: "",
                                                          align: "center",
                                                          justify: "center"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, {
                                                                  innerHTML: value.title
                                                                }, null, 8, ["innerHTML"]),
                                                                createVNode(_component_v_card_subtitle, {
                                                                  class: `text-${value.theme}`,
                                                                  innerHTML: value.subtitle
                                                                }, null, 8, ["class", "innerHTML"]),
                                                                createVNode(_component_v_card_text, {
                                                                  innerHTML: value.text
                                                                }, null, 8, ["innerHTML"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                align: "center",
                                                justify: "start"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        theme: "accent",
                                                        class: `p2 dark-${value.theme}`
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            height: "100%",
                                                            src: value.src
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        dense: "",
                                                        align: "center",
                                                        justify: "center"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, {
                                                                innerHTML: value.title
                                                              }, null, 8, ["innerHTML"]),
                                                              createVNode(_component_v_card_subtitle, {
                                                                class: `text-${value.theme}`,
                                                                innerHTML: value.subtitle
                                                              }, null, 8, ["class", "innerHTML"]),
                                                              createVNode(_component_v_card_text, {
                                                                innerHTML: value.text
                                                              }, null, 8, ["innerHTML"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, {
                                          theme: "theme",
                                          class: `p2 dark-${value.theme}`,
                                          "min-height": "75"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      theme: "accent",
                                                      class: `p2 dark-${value.theme}`
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          height: "100%",
                                                          src: value.src
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      dense: "",
                                                      align: "center",
                                                      justify: "center"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, {
                                                              innerHTML: value.title
                                                            }, null, 8, ["innerHTML"]),
                                                            createVNode(_component_v_card_subtitle, {
                                                              class: `text-${value.theme}`,
                                                              innerHTML: value.subtitle
                                                            }, null, 8, ["class", "innerHTML"]),
                                                            createVNode(_component_v_card_text, {
                                                              innerHTML: value.text
                                                            }, null, 8, ["innerHTML"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(players, (value, index) => {
                                  return createVNode(_component_v_col, {
                                    lg: "3",
                                    md: "6",
                                    cols: "12",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "theme",
                                        class: `p2 dark-${value.theme}`,
                                        "min-height": "75"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "center",
                                            justify: "start"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: `p2 dark-${value.theme}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        height: "100%",
                                                        src: value.src
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    dense: "",
                                                    align: "center",
                                                    justify: "center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, {
                                                            innerHTML: value.title
                                                          }, null, 8, ["innerHTML"]),
                                                          createVNode(_component_v_card_subtitle, {
                                                            class: `text-${value.theme}`,
                                                            innerHTML: value.subtitle
                                                          }, null, 8, ["class", "innerHTML"]),
                                                          createVNode(_component_v_card_text, {
                                                            innerHTML: value.text
                                                          }, null, 8, ["innerHTML"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, {
                            align: "top",
                            justify: "start"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(players, (value, index) => {
                                return createVNode(_component_v_col, {
                                  lg: "3",
                                  md: "6",
                                  cols: "12",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      theme: "theme",
                                      class: `p2 dark-${value.theme}`,
                                      "min-height": "75"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          align: "center",
                                          justify: "start"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: `p2 dark-${value.theme}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      height: "100%",
                                                      src: value.src
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  dense: "",
                                                  align: "center",
                                                  justify: "center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, {
                                                          innerHTML: value.title
                                                        }, null, 8, ["innerHTML"]),
                                                        createVNode(_component_v_card_subtitle, {
                                                          class: `text-${value.theme}`,
                                                          innerHTML: value.subtitle
                                                        }, null, 8, ["class", "innerHTML"]),
                                                        createVNode(_component_v_card_text, {
                                                          innerHTML: value.text
                                                        }, null, 8, ["innerHTML"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                    createVNode(_component_v_col, {
                      lg: "6",
                      cols: "12",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_subtitle, null, {
                          default: withCtx(() => [
                            createVNode("h2", { class: "text-h2" }, [
                              createVNode("span", { class: "text-green" }, "Our"),
                              createTextVNode(" team")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      lg: "9",
                      md: "6",
                      sm: "12",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "top",
                          justify: "start"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(players, (value, index) => {
                              return createVNode(_component_v_col, {
                                lg: "3",
                                md: "6",
                                cols: "12",
                                key: index
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    theme: "theme",
                                    class: `p2 dark-${value.theme}`,
                                    "min-height": "75"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        align: "center",
                                        justify: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: `p2 dark-${value.theme}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    height: "100%",
                                                    src: value.src
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                dense: "",
                                                align: "center",
                                                justify: "center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, {
                                                        innerHTML: value.title
                                                      }, null, 8, ["innerHTML"]),
                                                      createVNode(_component_v_card_subtitle, {
                                                        class: `text-${value.theme}`,
                                                        innerHTML: value.subtitle
                                                      }, null, 8, ["class", "innerHTML"]),
                                                      createVNode(_component_v_card_text, {
                                                        innerHTML: value.text
                                                      }, null, 8, ["innerHTML"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
              createVNode(_component_v_row, {
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    lg: "6",
                    cols: "12",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_subtitle, null, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h2" }, [
                            createVNode("span", { class: "text-green" }, "Our"),
                            createTextVNode(" team")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    lg: "9",
                    md: "6",
                    sm: "12",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "top",
                        justify: "start"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(players, (value, index) => {
                            return createVNode(_component_v_col, {
                              lg: "3",
                              md: "6",
                              cols: "12",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  theme: "theme",
                                  class: `p2 dark-${value.theme}`,
                                  "min-height": "75"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      justify: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: `p2 dark-${value.theme}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  height: "100%",
                                                  src: value.src
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              dense: "",
                                              align: "center",
                                              justify: "center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, {
                                                      innerHTML: value.title
                                                    }, null, 8, ["innerHTML"]),
                                                    createVNode(_component_v_card_subtitle, {
                                                      class: `text-${value.theme}`,
                                                      innerHTML: value.subtitle
                                                    }, null, 8, ["class", "innerHTML"]),
                                                    createVNode(_component_v_card_text, {
                                                      innerHTML: value.text
                                                    }, null, 8, ["innerHTML"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "about-us",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = __nuxt_component_0;
      const _component_v_col = __nuxt_component_0;
      const _component_v_card = __nuxt_component_0;
      const _component_v_card_title = __nuxt_component_0;
      const _component_v_card_subtitle = __nuxt_component_0;
      const _component_v_card_text = __nuxt_component_0;
      const _component_v_img = __nuxt_component_0;
      const _component_Values = _sfc_main$2;
      const _component_Team = _sfc_main$1;
      _push(ssrRenderComponent(_component_v_row, mergeProps({
        justify: "center",
        "no-gutters": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    theme: "theme",
                    class: "p6 dark-pink"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                lg: "6",
                                xl: "6",
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, {
                                      align: "center",
                                      justify: "end",
                                      minHeight: "600"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            lg: "9",
                                            md: "6",
                                            sm: "12",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  theme: "accent",
                                                  class: "p3 dark-pink"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_card_title, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h2 class="text-h2"${_scopeId9}><span class="text-pink"${_scopeId9}>Our</span> story </h2>`);
                                                          } else {
                                                            return [
                                                              createVNode("h2", { class: "text-h2" }, [
                                                                createVNode("span", { class: "text-pink" }, "Our"),
                                                                createTextVNode(" story ")
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_card_subtitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` It&#39;s a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_card_text, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` Behind each great product there&#39;s an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that&#39;s imbued in all the showcases we make for the amazing brands in Africa. `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createVNode("h2", { class: "text-h2" }, [
                                                              createVNode("span", { class: "text-pink" }, "Our"),
                                                              createTextVNode(" story ")
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: "p3 dark-pink"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode("h2", { class: "text-h2" }, [
                                                            createVNode("span", { class: "text-pink" }, "Our"),
                                                            createTextVNode(" story ")
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              lg: "9",
                                              md: "6",
                                              sm: "12",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: "p3 dark-pink"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h2", { class: "text-h2" }, [
                                                          createVNode("span", { class: "text-pink" }, "Our"),
                                                          createTextVNode(" story ")
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, {
                                        align: "center",
                                        justify: "end",
                                        minHeight: "600"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            lg: "9",
                                            md: "6",
                                            sm: "12",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: "p3 dark-pink"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h2", { class: "text-h2" }, [
                                                        createVNode("span", { class: "text-pink" }, "Our"),
                                                        createTextVNode(" story ")
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                lg: "6",
                                xl: "6",
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, {
                                      theme: "theme",
                                      class: "p3 dark-pink"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, {
                                            width: "100%",
                                            src: "/assets/assets-005.png"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_img, {
                                              width: "100%",
                                              src: "/assets/assets-005.png"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, {
                                        theme: "theme",
                                        class: "p3 dark-pink"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            width: "100%",
                                            src: "/assets/assets-005.png"
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
                                createVNode(_component_v_col, {
                                  lg: "6",
                                  xl: "6",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      justify: "end",
                                      minHeight: "600"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          lg: "9",
                                          md: "6",
                                          sm: "12",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: "p3 dark-pink"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h2", { class: "text-h2" }, [
                                                      createVNode("span", { class: "text-pink" }, "Our"),
                                                      createTextVNode(" story ")
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  lg: "6",
                                  xl: "6",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      theme: "theme",
                                      class: "p3 dark-pink"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          width: "100%",
                                          src: "/assets/assets-005.png"
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
                          createVNode(_component_v_row, {
                            align: "center",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                lg: "6",
                                xl: "6",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, {
                                    align: "center",
                                    justify: "end",
                                    minHeight: "600"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        lg: "9",
                                        md: "6",
                                        sm: "12",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "accent",
                                            class: "p3 dark-pink"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("h2", { class: "text-h2" }, [
                                                    createVNode("span", { class: "text-pink" }, "Our"),
                                                    createTextVNode(" story ")
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                lg: "6",
                                xl: "6",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    theme: "theme",
                                    class: "p3 dark-pink"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        width: "100%",
                                        src: "/assets/assets-005.png"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      theme: "theme",
                      class: "p6 dark-pink"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              lg: "6",
                              xl: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, {
                                  align: "center",
                                  justify: "end",
                                  minHeight: "600"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      lg: "9",
                                      md: "6",
                                      sm: "12",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "accent",
                                          class: "p3 dark-pink"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("h2", { class: "text-h2" }, [
                                                  createVNode("span", { class: "text-pink" }, "Our"),
                                                  createTextVNode(" story ")
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              lg: "6",
                              xl: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  theme: "theme",
                                  class: "p3 dark-pink"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      width: "100%",
                                      src: "/assets/assets-005.png"
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
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    theme: "accent",
                    class: "p12 dark-purple"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "center",
                          minHeight: "600"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                lg: "9",
                                md: "6",
                                sm: "12",
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, {
                                      align: "center",
                                      justify: "start",
                                      minHeight: "600"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            lg: "6",
                                            xl: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  theme: "accent",
                                                  class: "dark-purple p3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_img, {
                                                        width: "100%",
                                                        src: "/gems/globe-003.png"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_img, {
                                                          width: "100%",
                                                          src: "/gems/globe-003.png"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: "dark-purple p3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        width: "100%",
                                                        src: "/gems/globe-003.png"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            lg: "6",
                                            xl: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  theme: "accent",
                                                  class: "p3 dark-purple"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_card_title, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h2 class="text-h2"${_scopeId9}><span class="text-purple"${_scopeId9}>Our</span> vision </h2>`);
                                                          } else {
                                                            return [
                                                              createVNode("h2", { class: "text-h2" }, [
                                                                createVNode("span", { class: "text-purple" }, "Our"),
                                                                createTextVNode(" vision ")
                                                              ])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_card_subtitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(` To <span class="text-purple"${_scopeId9}>inspire</span> innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. `);
                                                          } else {
                                                            return [
                                                              createTextVNode(" To "),
                                                              createVNode("span", { class: "text-purple" }, "inspire"),
                                                              createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_card_text, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. `);
                                                          } else {
                                                            return [
                                                              createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createVNode("h2", { class: "text-h2" }, [
                                                              createVNode("span", { class: "text-purple" }, "Our"),
                                                              createTextVNode(" vision ")
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" To "),
                                                            createVNode("span", { class: "text-purple" }, "inspire"),
                                                            createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: "p3 dark-purple"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode("h2", { class: "text-h2" }, [
                                                            createVNode("span", { class: "text-purple" }, "Our"),
                                                            createTextVNode(" vision ")
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" To "),
                                                          createVNode("span", { class: "text-purple" }, "inspire"),
                                                          createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              lg: "6",
                                              xl: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: "dark-purple p3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      width: "100%",
                                                      src: "/gems/globe-003.png"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              lg: "6",
                                              xl: "6",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: "p3 dark-purple"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h2", { class: "text-h2" }, [
                                                          createVNode("span", { class: "text-purple" }, "Our"),
                                                          createTextVNode(" vision ")
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" To "),
                                                        createVNode("span", { class: "text-purple" }, "inspire"),
                                                        createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, {
                                        align: "center",
                                        justify: "start",
                                        minHeight: "600"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            lg: "6",
                                            xl: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: "dark-purple p3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    width: "100%",
                                                    src: "/gems/globe-003.png"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            lg: "6",
                                            xl: "6",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: "p3 dark-purple"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h2", { class: "text-h2" }, [
                                                        createVNode("span", { class: "text-purple" }, "Our"),
                                                        createTextVNode(" vision ")
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" To "),
                                                      createVNode("span", { class: "text-purple" }, "inspire"),
                                                      createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, { justify: "start" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(steps, (step, index) => {
                                            _push7(ssrRenderComponent(_component_v_col, {
                                              sm: "12",
                                              md: "12",
                                              lg: "4",
                                              xl: "4",
                                              key: index
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_card, {
                                                    theme: "theme",
                                                    class: `p3 dark-${step.theme}`
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_col, {
                                                                lg: "6",
                                                                xl: "6",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_card_title, {
                                                                      class: `text-${step.theme}`
                                                                    }, null, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(_component_v_card_text, null, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_card_title, {
                                                                        innerHTML: step.title,
                                                                        class: `text-${step.theme}`
                                                                      }, null, 8, ["innerHTML", "class"]),
                                                                      createVNode(_component_v_card_text, {
                                                                        innerHTML: `${step.subtitle} ${step.text}`
                                                                      }, null, 8, ["innerHTML"])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_col, {
                                                                lg: "6",
                                                                xl: "6",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_card, {
                                                                      theme: "theme",
                                                                      class: `px-2 py-2 dark-${step.theme}`
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_img, {
                                                                            src: step.src
                                                                          }, null, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_img, {
                                                                              src: step.src
                                                                            }, null, 8, ["src"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_card, {
                                                                        theme: "theme",
                                                                        class: `px-2 py-2 dark-${step.theme}`
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            src: step.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["class"])
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_col, {
                                                                  lg: "6",
                                                                  xl: "6",
                                                                  cols: "12"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_title, {
                                                                      innerHTML: step.title,
                                                                      class: `text-${step.theme}`
                                                                    }, null, 8, ["innerHTML", "class"]),
                                                                    createVNode(_component_v_card_text, {
                                                                      innerHTML: `${step.subtitle} ${step.text}`
                                                                    }, null, 8, ["innerHTML"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, {
                                                                  lg: "6",
                                                                  xl: "6",
                                                                  cols: "12"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card, {
                                                                      theme: "theme",
                                                                      class: `px-2 py-2 dark-${step.theme}`
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          src: step.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, {
                                                                lg: "6",
                                                                xl: "6",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, {
                                                                    innerHTML: step.title,
                                                                    class: `text-${step.theme}`
                                                                  }, null, 8, ["innerHTML", "class"]),
                                                                  createVNode(_component_v_card_text, {
                                                                    innerHTML: `${step.subtitle} ${step.text}`
                                                                  }, null, 8, ["innerHTML"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, {
                                                                lg: "6",
                                                                xl: "6",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card, {
                                                                    theme: "theme",
                                                                    class: `px-2 py-2 dark-${step.theme}`
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        src: step.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["class"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_card, {
                                                      theme: "theme",
                                                      class: `p3 dark-${step.theme}`
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, {
                                                              lg: "6",
                                                              xl: "6",
                                                              cols: "12"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, {
                                                                  innerHTML: step.title,
                                                                  class: `text-${step.theme}`
                                                                }, null, 8, ["innerHTML", "class"]),
                                                                createVNode(_component_v_card_text, {
                                                                  innerHTML: `${step.subtitle} ${step.text}`
                                                                }, null, 8, ["innerHTML"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, {
                                                              lg: "6",
                                                              xl: "6",
                                                              cols: "12"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card, {
                                                                  theme: "theme",
                                                                  class: `px-2 py-2 dark-${step.theme}`
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      src: step.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                              return createVNode(_component_v_col, {
                                                sm: "12",
                                                md: "12",
                                                lg: "4",
                                                xl: "4",
                                                key: index
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "theme",
                                                    class: `p3 dark-${step.theme}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, {
                                                            lg: "6",
                                                            xl: "6",
                                                            cols: "12"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, {
                                                                innerHTML: step.title,
                                                                class: `text-${step.theme}`
                                                              }, null, 8, ["innerHTML", "class"]),
                                                              createVNode(_component_v_card_text, {
                                                                innerHTML: `${step.subtitle} ${step.text}`
                                                              }, null, 8, ["innerHTML"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, {
                                                            lg: "6",
                                                            xl: "6",
                                                            cols: "12"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card, {
                                                                theme: "theme",
                                                                class: `px-2 py-2 dark-${step.theme}`
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    src: step.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, { justify: "start" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                            return createVNode(_component_v_col, {
                                              sm: "12",
                                              md: "12",
                                              lg: "4",
                                              xl: "4",
                                              key: index
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "theme",
                                                  class: `p3 dark-${step.theme}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, {
                                                          lg: "6",
                                                          xl: "6",
                                                          cols: "12"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, {
                                                              innerHTML: step.title,
                                                              class: `text-${step.theme}`
                                                            }, null, 8, ["innerHTML", "class"]),
                                                            createVNode(_component_v_card_text, {
                                                              innerHTML: `${step.subtitle} ${step.text}`
                                                            }, null, 8, ["innerHTML"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, {
                                                          lg: "6",
                                                          xl: "6",
                                                          cols: "12"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card, {
                                                              theme: "theme",
                                                              class: `px-2 py-2 dark-${step.theme}`
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  src: step.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
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
                                createVNode(_component_v_col, {
                                  lg: "9",
                                  md: "6",
                                  sm: "12",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      justify: "start",
                                      minHeight: "600"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          lg: "6",
                                          xl: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: "dark-purple p3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  width: "100%",
                                                  src: "/gems/globe-003.png"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          lg: "6",
                                          xl: "6",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: "p3 dark-purple"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h2", { class: "text-h2" }, [
                                                      createVNode("span", { class: "text-purple" }, "Our"),
                                                      createTextVNode(" vision ")
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" To "),
                                                    createVNode("span", { class: "text-purple" }, "inspire"),
                                                    createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { justify: "start" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                          return createVNode(_component_v_col, {
                                            sm: "12",
                                            md: "12",
                                            lg: "4",
                                            xl: "4",
                                            key: index
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "theme",
                                                class: `p3 dark-${step.theme}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    align: "center",
                                                    justify: "start"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, {
                                                        lg: "6",
                                                        xl: "6",
                                                        cols: "12"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, {
                                                            innerHTML: step.title,
                                                            class: `text-${step.theme}`
                                                          }, null, 8, ["innerHTML", "class"]),
                                                          createVNode(_component_v_card_text, {
                                                            innerHTML: `${step.subtitle} ${step.text}`
                                                          }, null, 8, ["innerHTML"])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_col, {
                                                        lg: "6",
                                                        xl: "6",
                                                        cols: "12"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card, {
                                                            theme: "theme",
                                                            class: `px-2 py-2 dark-${step.theme}`
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                src: step.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["class"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
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
                          createVNode(_component_v_row, {
                            align: "center",
                            justify: "center",
                            minHeight: "600"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                lg: "9",
                                md: "6",
                                sm: "12",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, {
                                    align: "center",
                                    justify: "start",
                                    minHeight: "600"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        lg: "6",
                                        xl: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "accent",
                                            class: "dark-purple p3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                width: "100%",
                                                src: "/gems/globe-003.png"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        lg: "6",
                                        xl: "6",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "accent",
                                            class: "p3 dark-purple"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("h2", { class: "text-h2" }, [
                                                    createVNode("span", { class: "text-purple" }, "Our"),
                                                    createTextVNode(" vision ")
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" To "),
                                                  createVNode("span", { class: "text-purple" }, "inspire"),
                                                  createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { justify: "start" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                        return createVNode(_component_v_col, {
                                          sm: "12",
                                          md: "12",
                                          lg: "4",
                                          xl: "4",
                                          key: index
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "theme",
                                              class: `p3 dark-${step.theme}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "center",
                                                  justify: "start"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      lg: "6",
                                                      xl: "6",
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, {
                                                          innerHTML: step.title,
                                                          class: `text-${step.theme}`
                                                        }, null, 8, ["innerHTML", "class"]),
                                                        createVNode(_component_v_card_text, {
                                                          innerHTML: `${step.subtitle} ${step.text}`
                                                        }, null, 8, ["innerHTML"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      lg: "6",
                                                      xl: "6",
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          theme: "theme",
                                                          class: `px-2 py-2 dark-${step.theme}`
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              src: step.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      theme: "accent",
                      class: "p12 dark-purple"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "center",
                          minHeight: "600"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              lg: "9",
                              md: "6",
                              sm: "12",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, {
                                  align: "center",
                                  justify: "start",
                                  minHeight: "600"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      lg: "6",
                                      xl: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "accent",
                                          class: "dark-purple p3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              width: "100%",
                                              src: "/gems/globe-003.png"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      lg: "6",
                                      xl: "6",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "accent",
                                          class: "p3 dark-purple"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("h2", { class: "text-h2" }, [
                                                  createVNode("span", { class: "text-purple" }, "Our"),
                                                  createTextVNode(" vision ")
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" To "),
                                                createVNode("span", { class: "text-purple" }, "inspire"),
                                                createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { justify: "start" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                      return createVNode(_component_v_col, {
                                        sm: "12",
                                        md: "12",
                                        lg: "4",
                                        xl: "4",
                                        key: index
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "theme",
                                            class: `p3 dark-${step.theme}`
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                align: "center",
                                                justify: "start"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    lg: "6",
                                                    xl: "6",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, {
                                                        innerHTML: step.title,
                                                        class: `text-${step.theme}`
                                                      }, null, 8, ["innerHTML", "class"]),
                                                      createVNode(_component_v_card_text, {
                                                        innerHTML: `${step.subtitle} ${step.text}`
                                                      }, null, 8, ["innerHTML"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    lg: "6",
                                                    xl: "6",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        theme: "theme",
                                                        class: `px-2 py-2 dark-${step.theme}`
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            src: step.src
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Values, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Values)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Team, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Team)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    theme: "theme",
                    class: "p6 dark-pink"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            lg: "6",
                            xl: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, {
                                align: "center",
                                justify: "end",
                                minHeight: "600"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    lg: "9",
                                    md: "6",
                                    sm: "12",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "accent",
                                        class: "p3 dark-pink"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("h2", { class: "text-h2" }, [
                                                createVNode("span", { class: "text-pink" }, "Our"),
                                                createTextVNode(" story ")
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" It's a dream, as it were. Those that dream and effect the desired and mutual goals, with deliberate actions, will thrive. Great brands often overcome failure, derison, and sheer hardship to reach their goals. ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" Behind each great product there's an equally great story and often a fascinating team of individual experts. The same virtues: toughness, creativity, and engenuity - define many of the product originators. We uniquely combine international experience with a deep appreation of aesthetic ideas of culture dominated marketplace and the creativity that's imbued in all the showcases we make for the amazing brands in Africa. ")
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
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            lg: "6",
                            xl: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                theme: "theme",
                                class: "p3 dark-pink"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    width: "100%",
                                    src: "/assets/assets-005.png"
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
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    theme: "accent",
                    class: "p12 dark-purple"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "center",
                        minHeight: "600"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            lg: "9",
                            md: "6",
                            sm: "12",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, {
                                align: "center",
                                justify: "start",
                                minHeight: "600"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    lg: "6",
                                    xl: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "accent",
                                        class: "dark-purple p3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            width: "100%",
                                            src: "/gems/globe-003.png"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    lg: "6",
                                    xl: "6",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "accent",
                                        class: "p3 dark-purple"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("h2", { class: "text-h2" }, [
                                                createVNode("span", { class: "text-purple" }, "Our"),
                                                createTextVNode(" vision ")
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" To "),
                                              createVNode("span", { class: "text-purple" }, "inspire"),
                                              createTextVNode(" innovative brands in Africa. Many great brands are forging a unique way of life for the world of this generation and continue to shape it. With a unique philosophy of customer service, the single thing that all of these African icons have in common is success of one kind or another. ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode("In many cases, this will continue beyond this day. In some way or other, they have all helped to stoke the engine of the fast growing economy in the worlld. We are doing this by taking a revolutionary approach, that understands the impact branding campaigns can bring to the growing customer demands and plan to maximize value for creative brands. ")
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
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { justify: "start" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                    return createVNode(_component_v_col, {
                                      sm: "12",
                                      md: "12",
                                      lg: "4",
                                      xl: "4",
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "theme",
                                          class: `p3 dark-${step.theme}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  lg: "6",
                                                  xl: "6",
                                                  cols: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, {
                                                      innerHTML: step.title,
                                                      class: `text-${step.theme}`
                                                    }, null, 8, ["innerHTML", "class"]),
                                                    createVNode(_component_v_card_text, {
                                                      innerHTML: `${step.subtitle} ${step.text}`
                                                    }, null, 8, ["innerHTML"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  lg: "6",
                                                  xl: "6",
                                                  cols: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      theme: "theme",
                                                      class: `px-2 py-2 dark-${step.theme}`
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          src: step.src
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
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
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_Values)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_Team)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-us-c3ebb758.mjs.map
