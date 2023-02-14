import { _ as __nuxt_component_0 } from './server-placeholder-3a7b1497.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Values",
  __ssrInlineRender: true,
  setup(__props) {
    const values = [
      {
        src: "/icons/icons-008.png",
        theme: "purple",
        title: "<span class='text-purple'>Purposefully</span> driven",
        text: "<span class='text-purple'>We</span> hold our work and each other to the highest of standards and believe that team work is dream work. We believe in sweating the small stuff and attention to detail is key."
      },
      {
        src: "/icons/icons-010.png",
        theme: "pink",
        title: "<span class='text-pink'>Relentlessly</span> caring",
        text: "<span class='text-pink'>For</span> us, it's incredibly important that we work in a supportive and caring space. We value character over all else. We respect each other, are also compassionate and we deeply care about our work and colleagues."
      },
      {
        src: "/icons/icons-009.png",
        theme: "green",
        title: "<span class='text-green'>Unapolagetically</span> ambitious",
        text: "<span class='text-green'>We</span> want to achieve great things and we want everyone to join us on this mission. We believe in rewarding consistent effort, hard work and great results."
      },
      {
        src: "/icons/icons-013.png",
        theme: "yellow",
        title: "<span class='text-yellow'>Deliberately</span> curious",
        text: "<span class='text-yellow'>We</span> encourage everyone, no matter what team or role, to bring their ideas to the table. The outcome of an experiment or an idea does not matter, it is the learning from it that counts."
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
        theme: "theme",
        class: "p12 dark-yellow"
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
                              _push5(`<h2 class="text-h2"${_scopeId4}><span class="text-yellow"${_scopeId4}>Our</span> values</h2>`);
                            } else {
                              return [
                                createVNode("h2", { class: "text-h2" }, [
                                  createVNode("span", { class: "text-yellow" }, "Our"),
                                  createTextVNode(" values")
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
                                createVNode("span", { class: "text-yellow" }, "Our"),
                                createTextVNode(" values")
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
                          justify: "end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(values, (value, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  lg: "6",
                                  cols: "12",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        theme: "accent",
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
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    sm: "4",
                                                    cols: "4"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_img, {
                                                          height: "100%",
                                                          src: value.src
                                                        }, null, _parent9, _scopeId8));
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
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "8",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_row, {
                                                          align: "center",
                                                          justify: "center"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_card_title, null, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<h4 class="text-light"${_scopeId11}>${value.title}</h4>`);
                                                                        } else {
                                                                          return [
                                                                            createVNode("h4", {
                                                                              class: "text-light",
                                                                              innerHTML: value.title
                                                                            }, null, 8, ["innerHTML"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(_component_v_card_text, null, null, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_card_title, null, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h4", {
                                                                            class: "text-light",
                                                                            innerHTML: value.title
                                                                          }, null, 8, ["innerHTML"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
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
                                                                    createVNode(_component_v_card_title, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h4", {
                                                                          class: "text-light",
                                                                          innerHTML: value.title
                                                                        }, null, 8, ["innerHTML"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
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
                                                            align: "center",
                                                            justify: "center"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h4", {
                                                                        class: "text-light",
                                                                        innerHTML: value.title
                                                                      }, null, 8, ["innerHTML"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
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
                                                    createVNode(_component_v_col, {
                                                      sm: "4",
                                                      cols: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          height: "100%",
                                                          src: value.src
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      sm: "12",
                                                      md: "12",
                                                      lg: "8",
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "center"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h4", {
                                                                      class: "text-light",
                                                                      innerHTML: value.title
                                                                    }, null, 8, ["innerHTML"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
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
                                                  createVNode(_component_v_col, {
                                                    sm: "4",
                                                    cols: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        height: "100%",
                                                        src: value.src
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "8",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "center"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("h4", {
                                                                    class: "text-light",
                                                                    innerHTML: value.title
                                                                  }, null, 8, ["innerHTML"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
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
                                          theme: "accent",
                                          class: `p2 dark-${value.theme}`,
                                          "min-height": "75"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  sm: "4",
                                                  cols: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      height: "100%",
                                                      src: value.src
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  sm: "12",
                                                  md: "12",
                                                  lg: "8",
                                                  cols: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "center"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, null, {
                                                              default: withCtx(() => [
                                                                createVNode("h4", {
                                                                  class: "text-light",
                                                                  innerHTML: value.title
                                                                }, null, 8, ["innerHTML"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
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
                                (openBlock(), createBlock(Fragment, null, renderList(values, (value, index) => {
                                  return createVNode(_component_v_col, {
                                    lg: "6",
                                    cols: "12",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "accent",
                                        class: `p2 dark-${value.theme}`,
                                        "min-height": "75"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "center",
                                            justify: "start"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                sm: "4",
                                                cols: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    height: "100%",
                                                    src: value.src
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, {
                                                sm: "12",
                                                md: "12",
                                                lg: "8",
                                                cols: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    align: "center",
                                                    justify: "center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, null, {
                                                            default: withCtx(() => [
                                                              createVNode("h4", {
                                                                class: "text-light",
                                                                innerHTML: value.title
                                                              }, null, 8, ["innerHTML"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
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
                            justify: "end"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(values, (value, index) => {
                                return createVNode(_component_v_col, {
                                  lg: "6",
                                  cols: "12",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      theme: "accent",
                                      class: `p2 dark-${value.theme}`,
                                      "min-height": "75"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          align: "center",
                                          justify: "start"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              sm: "4",
                                              cols: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  height: "100%",
                                                  src: value.src
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, {
                                              sm: "12",
                                              md: "12",
                                              lg: "8",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "center",
                                                  justify: "center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createVNode("h4", {
                                                              class: "text-light",
                                                              innerHTML: value.title
                                                            }, null, 8, ["innerHTML"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
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
                              createVNode("span", { class: "text-yellow" }, "Our"),
                              createTextVNode(" values")
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
                          justify: "end"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(values, (value, index) => {
                              return createVNode(_component_v_col, {
                                lg: "6",
                                cols: "12",
                                key: index
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    theme: "accent",
                                    class: `p2 dark-${value.theme}`,
                                    "min-height": "75"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        align: "center",
                                        justify: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            sm: "4",
                                            cols: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                height: "100%",
                                                src: value.src
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, {
                                            sm: "12",
                                            md: "12",
                                            lg: "8",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                align: "center",
                                                justify: "center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode("h4", {
                                                            class: "text-light",
                                                            innerHTML: value.title
                                                          }, null, 8, ["innerHTML"])
                                                        ]),
                                                        _: 2
                                                      }, 1024),
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
                            createVNode("span", { class: "text-yellow" }, "Our"),
                            createTextVNode(" values")
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
                        justify: "end"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(values, (value, index) => {
                            return createVNode(_component_v_col, {
                              lg: "6",
                              cols: "12",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  theme: "accent",
                                  class: `p2 dark-${value.theme}`,
                                  "min-height": "75"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      justify: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          sm: "4",
                                          cols: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              height: "100%",
                                              src: value.src
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, {
                                          sm: "12",
                                          md: "12",
                                          lg: "8",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h4", {
                                                          class: "text-light",
                                                          innerHTML: value.title
                                                        }, null, 8, ["innerHTML"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Values.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Values-7d662158.mjs.map
