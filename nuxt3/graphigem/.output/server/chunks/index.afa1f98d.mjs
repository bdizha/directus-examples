import { u as useDirectusItems } from './useDirectusItems.95333d7b.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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

const _imports_0 = "" + globalThis.__publicAssetsURL("videos/GG_Infinity_WithTitles.mp4");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDirectusItems();
    ref("");
    ref("");
    ref({
      line: "",
      variant: ""
    });
    const steps = [
      {
        title: "Buil <span class='text-white'> it</span>",
        subtitle: "<span class='text-yellow'>Launch</span> a bold campaign and shoot for the stars by capturing the imagination of culture and get to target specific demographics of your potential customers of your brand on social & web3 platforms.",
        text: "",
        src: "/icons/icons-007.png",
        theme: "yellow"
      },
      {
        title: "Apply <span class='text-white'> it</span>",
        subtitle: "<span class='text-green'>Discover</span> and highlight reasons for brand loyalty to your potential customers through the Graphigem's Gem Plan campaign strategy and never doubt the impact and effect of your campaigns again.",
        text: "",
        src: "/icons/icons-009.png",
        theme: "green"
      },
      {
        title: "Evaluate <span class='text-white'> it</span>",
        subtitle: "<span class='text-pink'>Unleash</span> new insights and repeat building again with some adjustments to the buy-in effects of your campaign on simulated customer dsata sets we provide you to exxperiment with real contexts.",
        text: "",
        src: "/icons/icons-006.png",
        theme: "pink"
      }
    ];
    const services = [
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        title: "<span class='text-yellow'>Digital</span> Campaigns",
        subtitle: "<span class='text-yellow'>Build</span> and launch unique campaign stories.",
        text: "Great companies have great stories, and it's those great stories - when told correctly - that connect with culture and create community. Those that can't communicate their story will fail. Those that can, will thrive. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands."
      },
      {
        src: "/gees/gees-006.png",
        theme: "green",
        title: "<span class='text-green'>On-demand</span> Branding",
        subtitle: "<span class='text-green'>Automate</span> your brand's loyal audience and grow.",
        text: "We understand the challenges that entrepreneurs may come across because we are entrepreneurs, allowing us to provide you with advice based on our first-hand experience. We uniquely combine international experience with a deep understanding of culture dominated marketplace and the magic that showcase your products."
      },
      {
        src: "/gees/gees-009.png",
        theme: "pink",
        title: "<span class='text-pink'>Virtual</span> Branding",
        subtitle: "<span class='text-pink'>Adjust</span> to creative input and connect with audience.",
        text: "Internet culture is now culture. Virtual word is now media. We help distribute your story in the most cost effective way through virtual story telling, digital media, blockchain partners and our network of influential pioneers. Switch on the lights and become the pilot of your brand's rocket flight to the skies. Let's do it."
      }
    ];
    const industries = [
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        line1: "Fashion",
        line2: "&",
        line3: "Beauty"
      },
      {
        src: "/gees/gees-006.png",
        theme: "green",
        line1: "Film",
        line2: "&",
        line3: "Media"
      },
      {
        src: "/gees/gees-009.png",
        theme: "pink",
        line1: "Content",
        line2: "&",
        line3: "AI"
      },
      {
        src: "/gees/gees-003.png",
        theme: "purple",
        line1: "Web3",
        line2: "&",
        line3: "IP"
      }
    ];
    const values = {
      left: [
        {
          src: "/icons/icons-008.png",
          theme: "purple",
          title: "Envision",
          text: "<span class='text-purple'>Build</span> on it. Play with it, then give it the perfect squeeze. Step in to unlock it."
        },
        {
          src: "/icons/icons-009.png",
          theme: "green",
          title: "Launch",
          text: "<span class='text-green'>Adjust</span> gears and iterate it. Scale it with us and unleash your brand. "
        }
      ],
      right: [
        {
          src: "/icons/icons-007.png",
          theme: "yellow",
          title: "Evaluate",
          text: "<span class='text-yellow'>Reflect</span> on your previous campaigns and seek insights that inform the next iteration."
        },
        {
          src: "/icons/icons-006.png",
          theme: "pink",
          title: "Iterate",
          text: "<span class='text-pink'>Craft</span> a full branding strategy to narrate your brand story for your target audience."
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_row, mergeProps({
        justify: "center",
        "no-gutters": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { class: "mx-auto text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<video autoplay muted loop${_scopeId3}><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"${_scopeId3}> Your browser does not support HTML video. </video>`);
                      } else {
                        return [
                          createVNode("video", {
                            autoplay: "",
                            muted: "",
                            loop: ""
                          }, [
                            createVNode("source", {
                              src: _imports_0,
                              type: "video/mp4"
                            }),
                            createTextVNode(" Your browser does not support HTML video. ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, { class: "mx-auto text-center" }, {
                      default: withCtx(() => [
                        createVNode("video", {
                          autoplay: "",
                          muted: "",
                          loop: ""
                        }, [
                          createVNode("source", {
                            src: _imports_0,
                            type: "video/mp4"
                          }),
                          createTextVNode(" Your browser does not support HTML video. ")
                        ])
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
                  _push3(`<div class="p12"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p12" })
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
                              _push5(ssrRenderComponent(_component_v_col, { cols: "9" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card, {
                                      theme: "accent",
                                      class: "p6 dark-purple"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, {
                                            align: "center",
                                            justify: "start",
                                            minHeight: "600"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_card, {
                                                        theme: "accent",
                                                        class: "p3 dark-purple"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_card_title, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`<h2 class="text-h2"${_scopeId10}>Our appreach</h2>`);
                                                                } else {
                                                                  return [
                                                                    createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_card_subtitle, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Ask us, what it&#39;s like? And the answer is simple: It&#39;s always a dream as it were. `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Providing innovative brands the support they need to succeed in a variety of today&#39;s marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that&#39;s bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_card_title, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_card_subtitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_card, {
                                                          theme: "accent",
                                                          class: "p3 dark-purple"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, null, {
                                                              default: withCtx(() => [
                                                                createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_card_subtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_v_card, {
                                                                    theme: "theme",
                                                                    class: "dark-purple p4"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(_component_v_img, {
                                                                          width: "100%",
                                                                          src: "/icons/icons-015.png"
                                                                        }, null, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(_component_v_img, {
                                                                            width: "100%",
                                                                            src: "/icons/icons-015.png"
                                                                          })
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_v_card, {
                                                                      theme: "theme",
                                                                      class: "dark-purple p4"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          width: "100%",
                                                                          src: "/icons/icons-015.png"
                                                                        })
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card, {
                                                                    theme: "theme",
                                                                    class: "dark-purple p4"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        width: "100%",
                                                                        src: "/icons/icons-015.png"
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
                                                      }, _parent9, _scopeId8));
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
                                                                  theme: "theme",
                                                                  class: "dark-purple p4"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      width: "100%",
                                                                      src: "/icons/icons-015.png"
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        theme: "accent",
                                                        class: "p3 dark-purple"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, null, {
                                                            default: withCtx(() => [
                                                              createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_card_subtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card, {
                                                                theme: "theme",
                                                                class: "dark-purple p4"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    width: "100%",
                                                                    src: "/icons/icons-015.png"
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "start",
                                              minHeight: "600"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      theme: "accent",
                                                      class: "p3 dark-purple"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card, {
                                                              theme: "theme",
                                                              class: "dark-purple p4"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  width: "100%",
                                                                  src: "/icons/icons-015.png"
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
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card, {
                                        theme: "accent",
                                        class: "p6 dark-purple"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "center",
                                            justify: "start",
                                            minHeight: "600"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: "p3 dark-purple"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    align: "center",
                                                    justify: "start"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card, {
                                                            theme: "theme",
                                                            class: "dark-purple p4"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                width: "100%",
                                                                src: "/icons/icons-015.png"
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
                                              cols: "4",
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
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "6" }, {
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
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "6" }, {
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
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_col, { cols: "6" }, {
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
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "6" }, {
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
                                                              createVNode(_component_v_col, { cols: "6" }, {
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
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "6" }, {
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
                                                            createVNode(_component_v_col, { cols: "6" }, {
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
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "6" }, {
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
                                                cols: "4",
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
                                                          createVNode(_component_v_col, { cols: "6" }, {
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
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "6" }, {
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
                                              cols: "4",
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
                                                        createVNode(_component_v_col, { cols: "6" }, {
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
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "6" }, {
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
                                createVNode(_component_v_col, { cols: "9" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      theme: "accent",
                                      class: "p6 dark-purple"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          align: "center",
                                          justify: "start",
                                          minHeight: "600"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: "p3 dark-purple"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "center",
                                                  justify: "start"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          theme: "theme",
                                                          class: "dark-purple p4"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              width: "100%",
                                                              src: "/icons/icons-015.png"
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
                                            cols: "4",
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
                                                      createVNode(_component_v_col, { cols: "6" }, {
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
                                                      }, 1024),
                                                      createVNode(_component_v_col, { cols: "6" }, {
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
                              createVNode(_component_v_col, { cols: "9" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    theme: "accent",
                                    class: "p6 dark-purple"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        align: "center",
                                        justify: "start",
                                        minHeight: "600"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: "p3 dark-purple"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                align: "center",
                                                justify: "start"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        theme: "theme",
                                                        class: "dark-purple p4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            width: "100%",
                                                            src: "/icons/icons-015.png"
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
                                          cols: "4",
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
                                                    createVNode(_component_v_col, { cols: "6" }, {
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
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "6" }, {
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
                            createVNode(_component_v_col, { cols: "9" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  theme: "accent",
                                  class: "p6 dark-purple"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      justify: "start",
                                      minHeight: "600"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: "p3 dark-purple"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      theme: "theme",
                                                      class: "dark-purple p4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          width: "100%",
                                                          src: "/icons/icons-015.png"
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
                                        cols: "4",
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
                                                  createVNode(_component_v_col, { cols: "6" }, {
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
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "6" }, {
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
                  _push3(ssrRenderComponent(_component_v_card, {
                    theme: "white",
                    class: "p12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h2"${_scopeId6}>Our services</h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h2" }, "Our services")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-subtitle"${_scopeId6}> Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. </div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-subtitle" }, " Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h2" }, "Our services")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-subtitle" }, " Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(services, (service, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  cols: "3",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        theme: "accent",
                                        class: `p3 dark-${service.theme}`,
                                        "min-height": "450"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_row, {
                                              align: "start",
                                              justify: "start"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_card, {
                                                          theme: "accent",
                                                          class: `dark-${service.theme}`
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_img, {
                                                                height: "100%",
                                                                src: service.src
                                                              }, null, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: service.src
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
                                                            class: `dark-${service.theme}`
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: service.src
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
                                                        _push9(ssrRenderComponent(_component_v_card, {
                                                          theme: "accent",
                                                          class: `dark-${service.theme}`
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_card_title, null, null, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_sheet, null, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(`<b${_scopeId11}>${service.subtitle}</b> ${ssrInterpolate(service.text)}`);
                                                                        } else {
                                                                          return [
                                                                            createVNode("b", {
                                                                              innerHTML: service.subtitle
                                                                            }, null, 8, ["innerHTML"]),
                                                                            createTextVNode(" " + toDisplayString(service.text), 1)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_sheet, null, {
                                                                        default: withCtx(() => [
                                                                          createVNode("b", {
                                                                            innerHTML: service.subtitle
                                                                          }, null, 8, ["innerHTML"]),
                                                                          createTextVNode(" " + toDisplayString(service.text), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              if (service.action) {
                                                                _push10(ssrRenderComponent(_component_v_card_actions, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(ssrRenderComponent(_component_v_btn, {
                                                                        height: 36,
                                                                        variant: "outlined"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`${ssrInterpolate(service.action)}`);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(toDisplayString(service.action), 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                    } else {
                                                                      return [
                                                                        createVNode(_component_v_btn, {
                                                                          height: 36,
                                                                          variant: "outlined"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(service.action), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                _push10(`<!---->`);
                                                              }
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_card_title, {
                                                                  innerHTML: service.title
                                                                }, null, 8, ["innerHTML"]),
                                                                createVNode(_component_v_card_text, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_sheet, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode("b", {
                                                                          innerHTML: service.subtitle
                                                                        }, null, 8, ["innerHTML"]),
                                                                        createTextVNode(" " + toDisplayString(service.text), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_btn, {
                                                                      height: 36,
                                                                      variant: "outlined"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(service.action), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)) : createCommentVNode("", true)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_card, {
                                                            theme: "accent",
                                                            class: `dark-${service.theme}`
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, {
                                                                innerHTML: service.title
                                                              }, null, 8, ["innerHTML"]),
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_sheet, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("b", {
                                                                        innerHTML: service.subtitle
                                                                      }, null, 8, ["innerHTML"]),
                                                                      createTextVNode(" " + toDisplayString(service.text), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_btn, {
                                                                    height: 36,
                                                                    variant: "outlined"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(service.action), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024)) : createCommentVNode("", true)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, { cols: "6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          theme: "accent",
                                                          class: `dark-${service.theme}`
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: service.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          theme: "accent",
                                                          class: `dark-${service.theme}`
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, {
                                                              innerHTML: service.title
                                                            }, null, 8, ["innerHTML"]),
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_sheet, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("b", {
                                                                      innerHTML: service.subtitle
                                                                    }, null, 8, ["innerHTML"]),
                                                                    createTextVNode(" " + toDisplayString(service.text), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_btn, {
                                                                  height: 36,
                                                                  variant: "outlined"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(service.action), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)) : createCommentVNode("", true)
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                align: "start",
                                                justify: "start"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        theme: "accent",
                                                        class: `dark-${service.theme}`
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            height: "100%",
                                                            src: service.src
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        theme: "accent",
                                                        class: `dark-${service.theme}`
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, {
                                                            innerHTML: service.title
                                                          }, null, 8, ["innerHTML"]),
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_sheet, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("b", {
                                                                    innerHTML: service.subtitle
                                                                  }, null, 8, ["innerHTML"]),
                                                                  createTextVNode(" " + toDisplayString(service.text), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_btn, {
                                                                height: 36,
                                                                variant: "outlined"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(service.action), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)) : createCommentVNode("", true)
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, {
                                          theme: "accent",
                                          class: `p3 dark-${service.theme}`,
                                          "min-height": "450"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "start",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      theme: "accent",
                                                      class: `dark-${service.theme}`
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          height: "100%",
                                                          src: service.src
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      theme: "accent",
                                                      class: `dark-${service.theme}`
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, {
                                                          innerHTML: service.title
                                                        }, null, 8, ["innerHTML"]),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_sheet, null, {
                                                              default: withCtx(() => [
                                                                createVNode("b", {
                                                                  innerHTML: service.subtitle
                                                                }, null, 8, ["innerHTML"]),
                                                                createTextVNode(" " + toDisplayString(service.text), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_btn, {
                                                              height: 36,
                                                              variant: "outlined"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(service.action), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)) : createCommentVNode("", true)
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
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "3" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h2" }, "Our services")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-subtitle" }, " Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                                  return createVNode(_component_v_col, {
                                    cols: "3",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "accent",
                                        class: `p3 dark-${service.theme}`,
                                        "min-height": "450"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "start",
                                            justify: "start"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: `dark-${service.theme}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        height: "100%",
                                                        src: service.src
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "accent",
                                                    class: `dark-${service.theme}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, {
                                                        innerHTML: service.title
                                                      }, null, 8, ["innerHTML"]),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_sheet, null, {
                                                            default: withCtx(() => [
                                                              createVNode("b", {
                                                                innerHTML: service.subtitle
                                                              }, null, 8, ["innerHTML"]),
                                                              createTextVNode(" " + toDisplayString(service.text), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            height: 36,
                                                            variant: "outlined"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(service.action), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true)
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, {
                            align: "center",
                            justify: "start"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "3" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h2" }, "Our services")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-subtitle" }, " Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                                return createVNode(_component_v_col, {
                                  cols: "3",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      theme: "accent",
                                      class: `p3 dark-${service.theme}`,
                                      "min-height": "450"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          align: "start",
                                          justify: "start"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: `dark-${service.theme}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      height: "100%",
                                                      src: service.src
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "accent",
                                                  class: `dark-${service.theme}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, {
                                                      innerHTML: service.title
                                                    }, null, 8, ["innerHTML"]),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_sheet, null, {
                                                          default: withCtx(() => [
                                                            createVNode("b", {
                                                              innerHTML: service.subtitle
                                                            }, null, 8, ["innerHTML"]),
                                                            createTextVNode(" " + toDisplayString(service.text), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          height: 36,
                                                          variant: "outlined"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(service.action), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)) : createCommentVNode("", true)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      theme: "white",
                      class: "p12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "3" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h2" }, "Our services")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-subtitle" }, " Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                              return createVNode(_component_v_col, {
                                cols: "3",
                                key: index
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    theme: "accent",
                                    class: `p3 dark-${service.theme}`,
                                    "min-height": "450"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        align: "start",
                                        justify: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: `dark-${service.theme}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    height: "100%",
                                                    src: service.src
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "accent",
                                                class: `dark-${service.theme}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, {
                                                    innerHTML: service.title
                                                  }, null, 8, ["innerHTML"]),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_sheet, null, {
                                                        default: withCtx(() => [
                                                          createVNode("b", {
                                                            innerHTML: service.subtitle
                                                          }, null, 8, ["innerHTML"]),
                                                          createTextVNode(" " + toDisplayString(service.text), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        height: 36,
                                                        variant: "outlined"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(service.action), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    theme: "accent",
                    class: "p12 dark-green"
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
                                cols: "6",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_subtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h2"${_scopeId6}><span class="text-purple"${_scopeId6}>Making</span>\xA0 <span class="text-pink"${_scopeId6}>Sense.</span>\xA0 <span class="text-green"${_scopeId6}>Making</span>\xA0 <span class="text-yellow"${_scopeId6}>Value.</span></h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h2" }, [
                                              createVNode("span", { class: "text-purple" }, "Making"),
                                              createTextVNode("\xA0 "),
                                              createVNode("span", { class: "text-pink" }, "Sense."),
                                              createTextVNode("\xA0 "),
                                              createVNode("span", { class: "text-green" }, "Making"),
                                              createTextVNode("\xA0 "),
                                              createVNode("span", { class: "text-yellow" }, "Value.")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_subtitle, null, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h2" }, [
                                            createVNode("span", { class: "text-purple" }, "Making"),
                                            createTextVNode("\xA0 "),
                                            createVNode("span", { class: "text-pink" }, "Sense."),
                                            createTextVNode("\xA0 "),
                                            createVNode("span", { class: "text-green" }, "Making"),
                                            createTextVNode("\xA0 "),
                                            createVNode("span", { class: "text-yellow" }, "Value.")
                                          ])
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
                                    _push6(ssrRenderComponent(_component_v_row, {
                                      align: "center",
                                      justify: "center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, {
                                                  align: "top",
                                                  justify: "end"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<!--[-->`);
                                                      ssrRenderList(values.left, (value, index) => {
                                                        _push9(ssrRenderComponent(_component_v_col, {
                                                          cols: "6",
                                                          key: index
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_row, {
                                                                align: "center",
                                                                justify: "center"
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_card, {
                                                                            theme: "theme",
                                                                            class: `p2 dark-${value.theme}`
                                                                          }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: value.src
                                                                                }, null, _parent13, _scopeId12));
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
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_card, {
                                                                              theme: "theme",
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
                                                                    }, _parent11, _scopeId10));
                                                                    _push11(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_card, {
                                                                            theme: "theme",
                                                                            class: `p2 dark-${value.theme}`,
                                                                            "min-height": "75"
                                                                          }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_row, {
                                                                                  dense: "",
                                                                                  align: "center",
                                                                                  justify: "center"
                                                                                }, {
                                                                                  default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                    if (_push14) {
                                                                                      _push14(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                                        default: withCtx((_14, _push15, _parent15, _scopeId14) => {
                                                                                          if (_push15) {
                                                                                            _push15(ssrRenderComponent(_component_v_card_title, {
                                                                                              class: `text-${value.theme}`
                                                                                            }, {
                                                                                              default: withCtx((_15, _push16, _parent16, _scopeId15) => {
                                                                                                if (_push16) {
                                                                                                  _push16(`${ssrInterpolate(value.title)}`);
                                                                                                } else {
                                                                                                  return [
                                                                                                    createTextVNode(toDisplayString(value.title), 1)
                                                                                                  ];
                                                                                                }
                                                                                              }),
                                                                                              _: 2
                                                                                            }, _parent15, _scopeId14));
                                                                                          } else {
                                                                                            return [
                                                                                              createVNode(_component_v_card_title, {
                                                                                                class: `text-${value.theme}`
                                                                                              }, {
                                                                                                default: withCtx(() => [
                                                                                                  createTextVNode(toDisplayString(value.title), 1)
                                                                                                ]),
                                                                                                _: 2
                                                                                              }, 1032, ["class"])
                                                                                            ];
                                                                                          }
                                                                                        }),
                                                                                        _: 2
                                                                                      }, _parent14, _scopeId13));
                                                                                      _push14(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                                        default: withCtx((_14, _push15, _parent15, _scopeId14) => {
                                                                                          if (_push15) {
                                                                                            _push15(ssrRenderComponent(_component_v_card_text, null, null, _parent15, _scopeId14));
                                                                                          } else {
                                                                                            return [
                                                                                              createVNode(_component_v_card_text, {
                                                                                                innerHTML: value.text
                                                                                              }, null, 8, ["innerHTML"])
                                                                                            ];
                                                                                          }
                                                                                        }),
                                                                                        _: 2
                                                                                      }, _parent14, _scopeId13));
                                                                                    } else {
                                                                                      return [
                                                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                                                          default: withCtx(() => [
                                                                                            createVNode(_component_v_card_title, {
                                                                                              class: `text-${value.theme}`
                                                                                            }, {
                                                                                              default: withCtx(() => [
                                                                                                createTextVNode(toDisplayString(value.title), 1)
                                                                                              ]),
                                                                                              _: 2
                                                                                            }, 1032, ["class"])
                                                                                          ]),
                                                                                          _: 2
                                                                                        }, 1024),
                                                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                                                          default: withCtx(() => [
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
                                                                                }, _parent13, _scopeId12));
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
                                                                                            class: `text-${value.theme}`
                                                                                          }, {
                                                                                            default: withCtx(() => [
                                                                                              createTextVNode(toDisplayString(value.title), 1)
                                                                                            ]),
                                                                                            _: 2
                                                                                          }, 1032, ["class"])
                                                                                        ]),
                                                                                        _: 2
                                                                                      }, 1024),
                                                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                                                        default: withCtx(() => [
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
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_card, {
                                                                              theme: "theme",
                                                                              class: `p2 dark-${value.theme}`,
                                                                              "min-height": "75"
                                                                            }, {
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
                                                                                          class: `text-${value.theme}`
                                                                                        }, {
                                                                                          default: withCtx(() => [
                                                                                            createTextVNode(toDisplayString(value.title), 1)
                                                                                          ]),
                                                                                          _: 2
                                                                                        }, 1032, ["class"])
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1024),
                                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                                      default: withCtx(() => [
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
                                                                            }, 1032, ["class"])
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_card, {
                                                                            theme: "theme",
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
                                                                          createVNode(_component_v_card, {
                                                                            theme: "theme",
                                                                            class: `p2 dark-${value.theme}`,
                                                                            "min-height": "75"
                                                                          }, {
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
                                                                                        class: `text-${value.theme}`
                                                                                      }, {
                                                                                        default: withCtx(() => [
                                                                                          createTextVNode(toDisplayString(value.title), 1)
                                                                                        ]),
                                                                                        _: 2
                                                                                      }, 1032, ["class"])
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1024),
                                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                                    default: withCtx(() => [
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
                                                                          }, 1032, ["class"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "center"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card, {
                                                                          theme: "theme",
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
                                                                        createVNode(_component_v_card, {
                                                                          theme: "theme",
                                                                          class: `p2 dark-${value.theme}`,
                                                                          "min-height": "75"
                                                                        }, {
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
                                                                                      class: `text-${value.theme}`
                                                                                    }, {
                                                                                      default: withCtx(() => [
                                                                                        createTextVNode(toDisplayString(value.title), 1)
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["class"])
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024),
                                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                                  default: withCtx(() => [
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
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]-->`);
                                                    } else {
                                                      return [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                                          return openBlock(), createBlock(_component_v_col, {
                                                            cols: "6",
                                                            key: index
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "center"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card, {
                                                                        theme: "theme",
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
                                                                      createVNode(_component_v_card, {
                                                                        theme: "theme",
                                                                        class: `p2 dark-${value.theme}`,
                                                                        "min-height": "75"
                                                                      }, {
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
                                                                                    class: `text-${value.theme}`
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createTextVNode(toDisplayString(value.title), 1)
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["class"])
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024),
                                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                                default: withCtx(() => [
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
                                                                      }, 1032, ["class"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_row, {
                                                    align: "top",
                                                    justify: "end"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                                        return openBlock(), createBlock(_component_v_col, {
                                                          cols: "6",
                                                          key: index
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "center"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card, {
                                                                      theme: "theme",
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
                                                                    createVNode(_component_v_card, {
                                                                      theme: "theme",
                                                                      class: `p2 dark-${value.theme}`,
                                                                      "min-height": "75"
                                                                    }, {
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
                                                                                  class: `text-${value.theme}`
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(toDisplayString(value.title), 1)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["class"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                                              default: withCtx(() => [
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
                                                                    }, 1032, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  theme: "theme",
                                                  class: `p2 dark-green`,
                                                  "min-height": "120"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_img, {
                                                        height: "600",
                                                        src: "/icons/icons-004.png"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_img, {
                                                          height: "600",
                                                          src: "/icons/icons-004.png"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card, {
                                                    theme: "theme",
                                                    class: `p2 dark-green`,
                                                    "min-height": "120"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        height: "600",
                                                        src: "/icons/icons-004.png"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  theme: "theme",
                                                  class: `p2 dark-green`,
                                                  "min-height": "120"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_row, {
                                                        align: "top",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<!--[-->`);
                                                            ssrRenderList(values.right, (value, index) => {
                                                              _push10(ssrRenderComponent(_component_v_col, {
                                                                cols: "6",
                                                                key: index
                                                              }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "center"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_card, {
                                                                                  theme: "theme",
                                                                                  class: `p2 dark-${value.theme}`
                                                                                }, {
                                                                                  default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                    if (_push14) {
                                                                                      _push14(ssrRenderComponent(_component_v_img, {
                                                                                        height: "100%",
                                                                                        src: value.src
                                                                                      }, null, _parent14, _scopeId13));
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
                                                                                }, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_card, {
                                                                                    theme: "theme",
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
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_card, {
                                                                                  theme: "theme",
                                                                                  class: `p2 dark-${value.theme}`,
                                                                                  "min-height": "75"
                                                                                }, {
                                                                                  default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                    if (_push14) {
                                                                                      _push14(ssrRenderComponent(_component_v_row, {
                                                                                        dense: "",
                                                                                        align: "center",
                                                                                        justify: "center"
                                                                                      }, {
                                                                                        default: withCtx((_14, _push15, _parent15, _scopeId14) => {
                                                                                          if (_push15) {
                                                                                            _push15(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                                              default: withCtx((_15, _push16, _parent16, _scopeId15) => {
                                                                                                if (_push16) {
                                                                                                  _push16(ssrRenderComponent(_component_v_card_title, {
                                                                                                    class: `text-${value.theme}`
                                                                                                  }, {
                                                                                                    default: withCtx((_16, _push17, _parent17, _scopeId16) => {
                                                                                                      if (_push17) {
                                                                                                        _push17(`${ssrInterpolate(value.title)}`);
                                                                                                      } else {
                                                                                                        return [
                                                                                                          createTextVNode(toDisplayString(value.title), 1)
                                                                                                        ];
                                                                                                      }
                                                                                                    }),
                                                                                                    _: 2
                                                                                                  }, _parent16, _scopeId15));
                                                                                                } else {
                                                                                                  return [
                                                                                                    createVNode(_component_v_card_title, {
                                                                                                      class: `text-${value.theme}`
                                                                                                    }, {
                                                                                                      default: withCtx(() => [
                                                                                                        createTextVNode(toDisplayString(value.title), 1)
                                                                                                      ]),
                                                                                                      _: 2
                                                                                                    }, 1032, ["class"])
                                                                                                  ];
                                                                                                }
                                                                                              }),
                                                                                              _: 2
                                                                                            }, _parent15, _scopeId14));
                                                                                            _push15(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                                              default: withCtx((_15, _push16, _parent16, _scopeId15) => {
                                                                                                if (_push16) {
                                                                                                  _push16(ssrRenderComponent(_component_v_card_text, null, null, _parent16, _scopeId15));
                                                                                                } else {
                                                                                                  return [
                                                                                                    createVNode(_component_v_card_text, {
                                                                                                      innerHTML: value.text
                                                                                                    }, null, 8, ["innerHTML"])
                                                                                                  ];
                                                                                                }
                                                                                              }),
                                                                                              _: 2
                                                                                            }, _parent15, _scopeId14));
                                                                                          } else {
                                                                                            return [
                                                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                                                default: withCtx(() => [
                                                                                                  createVNode(_component_v_card_title, {
                                                                                                    class: `text-${value.theme}`
                                                                                                  }, {
                                                                                                    default: withCtx(() => [
                                                                                                      createTextVNode(toDisplayString(value.title), 1)
                                                                                                    ]),
                                                                                                    _: 2
                                                                                                  }, 1032, ["class"])
                                                                                                ]),
                                                                                                _: 2
                                                                                              }, 1024),
                                                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                                                default: withCtx(() => [
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
                                                                                      }, _parent14, _scopeId13));
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
                                                                                                  class: `text-${value.theme}`
                                                                                                }, {
                                                                                                  default: withCtx(() => [
                                                                                                    createTextVNode(toDisplayString(value.title), 1)
                                                                                                  ]),
                                                                                                  _: 2
                                                                                                }, 1032, ["class"])
                                                                                              ]),
                                                                                              _: 2
                                                                                            }, 1024),
                                                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                                                              default: withCtx(() => [
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
                                                                                }, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_card, {
                                                                                    theme: "theme",
                                                                                    class: `p2 dark-${value.theme}`,
                                                                                    "min-height": "75"
                                                                                  }, {
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
                                                                                                class: `text-${value.theme}`
                                                                                              }, {
                                                                                                default: withCtx(() => [
                                                                                                  createTextVNode(toDisplayString(value.title), 1)
                                                                                                ]),
                                                                                                _: 2
                                                                                              }, 1032, ["class"])
                                                                                            ]),
                                                                                            _: 2
                                                                                          }, 1024),
                                                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                                                            default: withCtx(() => [
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
                                                                                  }, 1032, ["class"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_card, {
                                                                                  theme: "theme",
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
                                                                                createVNode(_component_v_card, {
                                                                                  theme: "theme",
                                                                                  class: `p2 dark-${value.theme}`,
                                                                                  "min-height": "75"
                                                                                }, {
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
                                                                                              class: `text-${value.theme}`
                                                                                            }, {
                                                                                              default: withCtx(() => [
                                                                                                createTextVNode(toDisplayString(value.title), 1)
                                                                                              ]),
                                                                                              _: 2
                                                                                            }, 1032, ["class"])
                                                                                          ]),
                                                                                          _: 2
                                                                                        }, 1024),
                                                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                                                          default: withCtx(() => [
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
                                                                                }, 1032, ["class"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_row, {
                                                                        align: "center",
                                                                        justify: "center"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_card, {
                                                                                theme: "theme",
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
                                                                              createVNode(_component_v_card, {
                                                                                theme: "theme",
                                                                                class: `p2 dark-${value.theme}`,
                                                                                "min-height": "75"
                                                                              }, {
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
                                                                                            class: `text-${value.theme}`
                                                                                          }, {
                                                                                            default: withCtx(() => [
                                                                                              createTextVNode(toDisplayString(value.title), 1)
                                                                                            ]),
                                                                                            _: 2
                                                                                          }, 1032, ["class"])
                                                                                        ]),
                                                                                        _: 2
                                                                                      }, 1024),
                                                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                                                        default: withCtx(() => [
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
                                                              }, _parent10, _scopeId9));
                                                            });
                                                            _push10(`<!--]-->`);
                                                          } else {
                                                            return [
                                                              (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                                return openBlock(), createBlock(_component_v_col, {
                                                                  cols: "6",
                                                                  key: index
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "center"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_card, {
                                                                              theme: "theme",
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
                                                                            createVNode(_component_v_card, {
                                                                              theme: "theme",
                                                                              class: `p2 dark-${value.theme}`,
                                                                              "min-height": "75"
                                                                            }, {
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
                                                                                          class: `text-${value.theme}`
                                                                                        }, {
                                                                                          default: withCtx(() => [
                                                                                            createTextVNode(toDisplayString(value.title), 1)
                                                                                          ]),
                                                                                          _: 2
                                                                                        }, 1032, ["class"])
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1024),
                                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                                      default: withCtx(() => [
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
                                                                            }, 1032, ["class"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_row, {
                                                          align: "top",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                              return openBlock(), createBlock(_component_v_col, {
                                                                cols: "6",
                                                                key: index
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_row, {
                                                                    align: "center",
                                                                    justify: "center"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_card, {
                                                                            theme: "theme",
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
                                                                          createVNode(_component_v_card, {
                                                                            theme: "theme",
                                                                            class: `p2 dark-${value.theme}`,
                                                                            "min-height": "75"
                                                                          }, {
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
                                                                                        class: `text-${value.theme}`
                                                                                      }, {
                                                                                        default: withCtx(() => [
                                                                                          createTextVNode(toDisplayString(value.title), 1)
                                                                                        ]),
                                                                                        _: 2
                                                                                      }, 1032, ["class"])
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1024),
                                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                                    default: withCtx(() => [
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
                                                                          }, 1032, ["class"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
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
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card, {
                                                    theme: "theme",
                                                    class: `p2 dark-green`,
                                                    "min-height": "120"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "top",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                            return openBlock(), createBlock(_component_v_col, {
                                                              cols: "6",
                                                              key: index
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "center"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card, {
                                                                          theme: "theme",
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
                                                                        createVNode(_component_v_card, {
                                                                          theme: "theme",
                                                                          class: `p2 dark-${value.theme}`,
                                                                          "min-height": "75"
                                                                        }, {
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
                                                                                      class: `text-${value.theme}`
                                                                                    }, {
                                                                                      default: withCtx(() => [
                                                                                        createTextVNode(toDisplayString(value.title), 1)
                                                                                      ]),
                                                                                      _: 2
                                                                                    }, 1032, ["class"])
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1024),
                                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                                  default: withCtx(() => [
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
                                                                        }, 1032, ["class"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
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
                                            createVNode(_component_v_col, { cols: "3" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "top",
                                                  justify: "end"
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                                      return openBlock(), createBlock(_component_v_col, {
                                                        cols: "6",
                                                        key: index
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "center"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card, {
                                                                    theme: "theme",
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
                                                                  createVNode(_component_v_card, {
                                                                    theme: "theme",
                                                                    class: `p2 dark-${value.theme}`,
                                                                    "min-height": "75"
                                                                  }, {
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
                                                                                class: `text-${value.theme}`
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(toDisplayString(value.title), 1)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["class"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                                            default: withCtx(() => [
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
                                                                  }, 1032, ["class"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
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
                                            createVNode(_component_v_col, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "theme",
                                                  class: `p2 dark-green`,
                                                  "min-height": "120"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      height: "600",
                                                      src: "/icons/icons-004.png"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "3" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "theme",
                                                  class: `p2 dark-green`,
                                                  "min-height": "120"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "top",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                          return openBlock(), createBlock(_component_v_col, {
                                                            cols: "6",
                                                            key: index
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "center"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card, {
                                                                        theme: "theme",
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
                                                                      createVNode(_component_v_card, {
                                                                        theme: "theme",
                                                                        class: `p2 dark-${value.theme}`,
                                                                        "min-height": "75"
                                                                      }, {
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
                                                                                    class: `text-${value.theme}`
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createTextVNode(toDisplayString(value.title), 1)
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["class"])
                                                                                ]),
                                                                                _: 2
                                                                              }, 1024),
                                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                                default: withCtx(() => [
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
                                                                      }, 1032, ["class"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024);
                                                        }), 128))
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
                                        justify: "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "3" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                align: "top",
                                                justify: "end"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                                    return openBlock(), createBlock(_component_v_col, {
                                                      cols: "6",
                                                      key: index
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "center"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card, {
                                                                  theme: "theme",
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
                                                                createVNode(_component_v_card, {
                                                                  theme: "theme",
                                                                  class: `p2 dark-${value.theme}`,
                                                                  "min-height": "75"
                                                                }, {
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
                                                                              class: `text-${value.theme}`
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(toDisplayString(value.title), 1)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["class"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                                          default: withCtx(() => [
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
                                                                }, 1032, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
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
                                          createVNode(_component_v_col, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "theme",
                                                class: `p2 dark-green`,
                                                "min-height": "120"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    height: "600",
                                                    src: "/icons/icons-004.png"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "3" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "theme",
                                                class: `p2 dark-green`,
                                                "min-height": "120"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    align: "top",
                                                    justify: "start"
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                        return openBlock(), createBlock(_component_v_col, {
                                                          cols: "6",
                                                          key: index
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "center"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card, {
                                                                      theme: "theme",
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
                                                                    createVNode(_component_v_card, {
                                                                      theme: "theme",
                                                                      class: `p2 dark-${value.theme}`,
                                                                      "min-height": "75"
                                                                    }, {
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
                                                                                  class: `text-${value.theme}`
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(toDisplayString(value.title), 1)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["class"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                                              default: withCtx(() => [
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
                                                                    }, 1032, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
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
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "6",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_subtitle, null, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h2" }, [
                                          createVNode("span", { class: "text-purple" }, "Making"),
                                          createTextVNode("\xA0 "),
                                          createVNode("span", { class: "text-pink" }, "Sense."),
                                          createTextVNode("\xA0 "),
                                          createVNode("span", { class: "text-green" }, "Making"),
                                          createTextVNode("\xA0 "),
                                          createVNode("span", { class: "text-yellow" }, "Value.")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      justify: "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "top",
                                              justify: "end"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                                  return openBlock(), createBlock(_component_v_col, {
                                                    cols: "6",
                                                    key: index
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "center"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card, {
                                                                theme: "theme",
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
                                                              createVNode(_component_v_card, {
                                                                theme: "theme",
                                                                class: `p2 dark-${value.theme}`,
                                                                "min-height": "75"
                                                              }, {
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
                                                                            class: `text-${value.theme}`
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(toDisplayString(value.title), 1)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["class"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                                        default: withCtx(() => [
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
                                                              }, 1032, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "theme",
                                              class: `p2 dark-green`,
                                              "min-height": "120"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  height: "600",
                                                  src: "/icons/icons-004.png"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "3" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "theme",
                                              class: `p2 dark-green`,
                                              "min-height": "120"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "top",
                                                  justify: "start"
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                      return openBlock(), createBlock(_component_v_col, {
                                                        cols: "6",
                                                        key: index
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "center"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card, {
                                                                    theme: "theme",
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
                                                                  createVNode(_component_v_card, {
                                                                    theme: "theme",
                                                                    class: `p2 dark-${value.theme}`,
                                                                    "min-height": "75"
                                                                  }, {
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
                                                                                class: `text-${value.theme}`
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(toDisplayString(value.title), 1)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["class"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                                            default: withCtx(() => [
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
                                                                  }, 1032, ["class"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
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
                                cols: "6",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_subtitle, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h2" }, [
                                        createVNode("span", { class: "text-purple" }, "Making"),
                                        createTextVNode("\xA0 "),
                                        createVNode("span", { class: "text-pink" }, "Sense."),
                                        createTextVNode("\xA0 "),
                                        createVNode("span", { class: "text-green" }, "Making"),
                                        createTextVNode("\xA0 "),
                                        createVNode("span", { class: "text-yellow" }, "Value.")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, {
                                    align: "center",
                                    justify: "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "top",
                                            justify: "end"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                                return openBlock(), createBlock(_component_v_col, {
                                                  cols: "6",
                                                  key: index
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "center"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card, {
                                                              theme: "theme",
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
                                                            createVNode(_component_v_card, {
                                                              theme: "theme",
                                                              class: `p2 dark-${value.theme}`,
                                                              "min-height": "75"
                                                            }, {
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
                                                                          class: `text-${value.theme}`
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(value.title), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["class"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
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
                                                            }, 1032, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
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
                                      createVNode(_component_v_col, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "theme",
                                            class: `p2 dark-green`,
                                            "min-height": "120"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                height: "600",
                                                src: "/icons/icons-004.png"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "3" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "theme",
                                            class: `p2 dark-green`,
                                            "min-height": "120"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                align: "top",
                                                justify: "start"
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                    return openBlock(), createBlock(_component_v_col, {
                                                      cols: "6",
                                                      key: index
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "center"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card, {
                                                                  theme: "theme",
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
                                                                createVNode(_component_v_card, {
                                                                  theme: "theme",
                                                                  class: `p2 dark-${value.theme}`,
                                                                  "min-height": "75"
                                                                }, {
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
                                                                              class: `text-${value.theme}`
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(toDisplayString(value.title), 1)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["class"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                                          default: withCtx(() => [
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
                                                                }, 1032, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
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
                      class: "p12 dark-green"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "6",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_subtitle, null, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h2" }, [
                                      createVNode("span", { class: "text-purple" }, "Making"),
                                      createTextVNode("\xA0 "),
                                      createVNode("span", { class: "text-pink" }, "Sense."),
                                      createTextVNode("\xA0 "),
                                      createVNode("span", { class: "text-green" }, "Making"),
                                      createTextVNode("\xA0 "),
                                      createVNode("span", { class: "text-yellow" }, "Value.")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, {
                                  align: "center",
                                  justify: "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          align: "top",
                                          justify: "end"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                              return openBlock(), createBlock(_component_v_col, {
                                                cols: "6",
                                                key: index
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    align: "center",
                                                    justify: "center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card, {
                                                            theme: "theme",
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
                                                          createVNode(_component_v_card, {
                                                            theme: "theme",
                                                            class: `p2 dark-${value.theme}`,
                                                            "min-height": "75"
                                                          }, {
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
                                                                        class: `text-${value.theme}`
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(value.title), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["class"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                                    default: withCtx(() => [
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
                                                          }, 1032, ["class"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
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
                                    createVNode(_component_v_col, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "theme",
                                          class: `p2 dark-green`,
                                          "min-height": "120"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              height: "600",
                                              src: "/icons/icons-004.png"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "3" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "theme",
                                          class: `p2 dark-green`,
                                          "min-height": "120"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "top",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                  return openBlock(), createBlock(_component_v_col, {
                                                    cols: "6",
                                                    key: index
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "center"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card, {
                                                                theme: "theme",
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
                                                              createVNode(_component_v_card, {
                                                                theme: "theme",
                                                                class: `p2 dark-${value.theme}`,
                                                                "min-height": "75"
                                                              }, {
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
                                                                            class: `text-${value.theme}`
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(toDisplayString(value.title), 1)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["class"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                                        default: withCtx(() => [
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
                                                              }, 1032, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
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
                    theme: "white",
                    class: "p12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, {
                                      align: "center",
                                      "min-height": "600",
                                      justify: "center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, {
                                            cols: "6",
                                            class: "text-right"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h2 class="text-h2"${_scopeId8}>Our expertise</h2>`);
                                                    } else {
                                                      return [
                                                        createVNode("h2", { class: "text-h2" }, "Our expertise")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h2", { class: "text-h2" }, "Our expertise")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_row, {
                                                  dense: "",
                                                  align: "center",
                                                  justify: "center"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Brands that can&#39;t communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it&#39;s only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                                }, _parent8, _scopeId7));
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
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              class: "text-right"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h2", { class: "text-h2" }, "Our expertise")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  dense: "",
                                                  align: "center",
                                                  justify: "center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, {
                                        align: "center",
                                        "min-height": "600",
                                        justify: "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            class: "text-right"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("h2", { class: "text-h2" }, "Our expertise")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                dense: "",
                                                align: "center",
                                                justify: "center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(industries, (industry, index) => {
                                            _push7(ssrRenderComponent(_component_v_col, {
                                              cols: "3",
                                              key: index
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_card, {
                                                    theme: "theme",
                                                    class: `p2 dark-${industry.theme}`,
                                                    "min-height": "90"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_row, {
                                                          align: "start",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_row, {
                                                                        align: "center",
                                                                        justify: "start"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
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
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "9" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_card_title, {
                                                                                  class: `text-${industry.theme}`
                                                                                }, {
                                                                                  default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                    if (_push14) {
                                                                                      _push14(`<h4 class="text-h4"${_scopeId13}>${ssrInterpolate(industry.line1)}</h4>`);
                                                                                    } else {
                                                                                      return [
                                                                                        createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
                                                                                      ];
                                                                                    }
                                                                                  }),
                                                                                  _: 2
                                                                                }, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_card_title, {
                                                                                    class: `text-${industry.theme}`
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["class"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "9" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_card_title, {
                                                                                  class: `text-${industry.theme}`
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_row, {
                                                                        align: "center",
                                                                        justify: "start"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "9" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_card_title, {
                                                                                class: `text-${industry.theme}`
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_card_title, {
                                                                                  class: `text-${industry.theme}`
                                                                                }, {
                                                                                  default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                    if (_push14) {
                                                                                      _push14(`<h4 class="text-h4"${_scopeId13}>${ssrInterpolate(industry.line2)}</h4>`);
                                                                                    } else {
                                                                                      return [
                                                                                        createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                                      ];
                                                                                    }
                                                                                  }),
                                                                                  _: 2
                                                                                }, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_card_title, {
                                                                                    class: `text-${industry.theme}`
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["class"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_card_title, {
                                                                                  class: `text-${industry.theme}`
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["class"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_row, {
                                                                        align: "center",
                                                                        justify: "start"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_card_title, {
                                                                                class: `text-${industry.theme}`
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["class"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
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
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_card_title, {
                                                                                  class: `text-${industry.theme}`
                                                                                }, {
                                                                                  default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                    if (_push14) {
                                                                                      _push14(`<h4 class="text-h4"${_scopeId13}>${ssrInterpolate(industry.line3)}</h4>`);
                                                                                    } else {
                                                                                      return [
                                                                                        createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                                      ];
                                                                                    }
                                                                                  }),
                                                                                  _: 2
                                                                                }, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_card_title, {
                                                                                    class: `text-${industry.theme}`
                                                                                  }, {
                                                                                    default: withCtx(() => [
                                                                                      createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                                    ]),
                                                                                    _: 2
                                                                                  }, 1032, ["class"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "6" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_card_title, {
                                                                                  class: `text-${industry.theme}`
                                                                                }, {
                                                                                  default: withCtx(() => [
                                                                                    createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                                  ]),
                                                                                  _: 2
                                                                                }, 1032, ["class"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_row, {
                                                                        align: "center",
                                                                        justify: "start"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "6" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_card_title, {
                                                                                class: `text-${industry.theme}`
                                                                              }, {
                                                                                default: withCtx(() => [
                                                                                  createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                                ]),
                                                                                _: 2
                                                                              }, 1032, ["class"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
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
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(ssrRenderComponent(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                        if (_push12) {
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                          _push12(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                              if (_push13) {
                                                                                _push13(ssrRenderComponent(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, _parent13, _scopeId12));
                                                                              } else {
                                                                                return [
                                                                                  createVNode(_component_v_img, {
                                                                                    height: "100%",
                                                                                    src: industry.src
                                                                                  }, null, 8, ["src"])
                                                                                ];
                                                                              }
                                                                            }),
                                                                            _: 2
                                                                          }, _parent12, _scopeId11));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024),
                                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                                              default: withCtx(() => [
                                                                                createVNode(_component_v_img, {
                                                                                  height: "100%",
                                                                                  src: industry.src
                                                                                }, null, 8, ["src"])
                                                                              ]),
                                                                              _: 2
                                                                            }, 1024)
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 2
                                                                    }, _parent11, _scopeId10));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_row, {
                                                                        align: "center",
                                                                        justify: "start"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024),
                                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(_component_v_img, {
                                                                                height: "100%",
                                                                                src: industry.src
                                                                              }, null, 8, ["src"])
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
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "9" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_card_title, {
                                                                              class: `text-${industry.theme}`
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_card_title, {
                                                                              class: `text-${industry.theme}`
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["class"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "6" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_card_title, {
                                                                              class: `text-${industry.theme}`
                                                                            }, {
                                                                              default: withCtx(() => [
                                                                                createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                              ]),
                                                                              _: 2
                                                                            }, 1032, ["class"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_row, {
                                                                      align: "center",
                                                                      justify: "start"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(_component_v_img, {
                                                                              height: "100%",
                                                                              src: industry.src
                                                                            }, null, 8, ["src"])
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
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_row, {
                                                            align: "start",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_row, {
                                                                    align: "center",
                                                                    justify: "start"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_row, {
                                                                    align: "center",
                                                                    justify: "start"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "9" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_card_title, {
                                                                            class: `text-${industry.theme}`
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_row, {
                                                                    align: "center",
                                                                    justify: "start"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_card_title, {
                                                                            class: `text-${industry.theme}`
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["class"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_row, {
                                                                    align: "center",
                                                                    justify: "start"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "6" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_card_title, {
                                                                            class: `text-${industry.theme}`
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1032, ["class"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "12" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_row, {
                                                                    align: "center",
                                                                    justify: "start"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode(_component_v_col, { cols: "3" }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            height: "100%",
                                                                            src: industry.src
                                                                          }, null, 8, ["src"])
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
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_card, {
                                                      theme: "theme",
                                                      class: `p2 dark-${industry.theme}`,
                                                      "min-height": "90"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "start",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "start"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "start"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "9" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card_title, {
                                                                          class: `text-${industry.theme}`
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "start"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card_title, {
                                                                          class: `text-${industry.theme}`
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["class"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "start"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "6" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_card_title, {
                                                                          class: `text-${industry.theme}`
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["class"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "12" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_row, {
                                                                  align: "center",
                                                                  justify: "start"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "3" }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          height: "100%",
                                                                          src: industry.src
                                                                        }, null, 8, ["src"])
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
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(industries, (industry, index) => {
                                              return createVNode(_component_v_col, {
                                                cols: "3",
                                                key: index
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "theme",
                                                    class: `p2 dark-${industry.theme}`,
                                                    "min-height": "90"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "start",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "start"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "start"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "9" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card_title, {
                                                                        class: `text-${industry.theme}`
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "start"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card_title, {
                                                                        class: `text-${industry.theme}`
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["class"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "start"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "6" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_card_title, {
                                                                        class: `text-${industry.theme}`
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["class"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "12" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_row, {
                                                                align: "center",
                                                                justify: "start"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_col, { cols: "3" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        height: "100%",
                                                                        src: industry.src
                                                                      }, null, 8, ["src"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(industries, (industry, index) => {
                                            return createVNode(_component_v_col, {
                                              cols: "3",
                                              key: index
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "theme",
                                                  class: `p2 dark-${industry.theme}`,
                                                  "min-height": "90"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "start",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "start"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "start"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "9" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_title, {
                                                                      class: `text-${industry.theme}`
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "start"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_title, {
                                                                      class: `text-${industry.theme}`
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "start"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "6" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_card_title, {
                                                                      class: `text-${industry.theme}`
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_row, {
                                                              align: "center",
                                                              justify: "start"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      height: "100%",
                                                                      src: industry.src
                                                                    }, null, 8, ["src"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "center",
                                      "min-height": "600",
                                      justify: "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          class: "text-right"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("h2", { class: "text-h2" }, "Our expertise")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              dense: "",
                                              align: "center",
                                              justify: "center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(industries, (industry, index) => {
                                          return createVNode(_component_v_col, {
                                            cols: "3",
                                            key: index
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "theme",
                                                class: `p2 dark-${industry.theme}`,
                                                "min-height": "90"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    align: "start",
                                                    justify: "start"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "9" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, {
                                                                    class: `text-${industry.theme}`
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                      }, 1024),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, {
                                                                    class: `text-${industry.theme}`
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["class"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "6" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_card_title, {
                                                                    class: `text-${industry.theme}`
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["class"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_col, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_row, {
                                                            align: "center",
                                                            justify: "start"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_col, { cols: "3" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    height: "100%",
                                                                    src: industry.src
                                                                  }, null, 8, ["src"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, {
                            align: "center",
                            justify: "start"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, {
                                    align: "center",
                                    "min-height": "600",
                                    justify: "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, {
                                        cols: "6",
                                        class: "text-right"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("h2", { class: "text-h2" }, "Our expertise")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            dense: "",
                                            align: "center",
                                            justify: "center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(industries, (industry, index) => {
                                        return createVNode(_component_v_col, {
                                          cols: "3",
                                          key: index
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "theme",
                                              class: `p2 dark-${industry.theme}`,
                                              "min-height": "90"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "start",
                                                  justify: "start"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "9" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, {
                                                                  class: `text-${industry.theme}`
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, {
                                                                  class: `text-${industry.theme}`
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "6" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, {
                                                                  class: `text-${industry.theme}`
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          align: "center",
                                                          justify: "start"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_col, { cols: "3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  height: "100%",
                                                                  src: industry.src
                                                                }, null, 8, ["src"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      theme: "white",
                      class: "p12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, {
                                  align: "center",
                                  "min-height": "600",
                                  justify: "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "6",
                                      class: "text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createVNode("h2", { class: "text-h2" }, "Our expertise")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          dense: "",
                                          align: "center",
                                          justify: "center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(industries, (industry, index) => {
                                      return createVNode(_component_v_col, {
                                        cols: "3",
                                        key: index
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "theme",
                                            class: `p2 dark-${industry.theme}`,
                                            "min-height": "90"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                align: "start",
                                                justify: "start"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "9" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, {
                                                                class: `text-${industry.theme}`
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, {
                                                                class: `text-${industry.theme}`
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "6" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, {
                                                                class: `text-${industry.theme}`
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["class"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        align: "center",
                                                        justify: "start"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_col, { cols: "3" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                height: "100%",
                                                                src: industry.src
                                                              }, null, 8, ["src"])
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
                    theme: "yellow",
                    class: "p12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "9" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<form${_scopeId5}></form>`);
                                  } else {
                                    return [
                                      createVNode("form")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "9" }, {
                                  default: withCtx(() => [
                                    createVNode("form")
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
                              createVNode(_component_v_col, { cols: "9" }, {
                                default: withCtx(() => [
                                  createVNode("form")
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
                      theme: "yellow",
                      class: "p12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "9" }, {
                              default: withCtx(() => [
                                createVNode("form")
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "mx-auto text-center" }, {
                    default: withCtx(() => [
                      createVNode("video", {
                        autoplay: "",
                        muted: "",
                        loop: ""
                      }, [
                        createVNode("source", {
                          src: _imports_0,
                          type: "video/mp4"
                        }),
                        createTextVNode(" Your browser does not support HTML video. ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p12" })
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
                          createVNode(_component_v_col, { cols: "9" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                theme: "accent",
                                class: "p6 dark-purple"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, {
                                    align: "center",
                                    justify: "start",
                                    minHeight: "600"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            theme: "accent",
                                            class: "p3 dark-purple"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("h2", { class: "text-h2" }, "Our appreach")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Ask us, what it's like? And the answer is simple: It's always a dream as it were. ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Providing innovative brands the support they need to succeed in a variety of today's marketplaces. Engage your existing and new customers in hyper ways and unleash a common ground with your customers. Customers enjoy being part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of your choice, anytime. ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "center",
                                            justify: "start"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    theme: "theme",
                                                    class: "dark-purple p4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        width: "100%",
                                                        src: "/icons/icons-015.png"
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
                                      cols: "4",
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
                                                createVNode(_component_v_col, { cols: "6" }, {
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
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "6" }, {
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
                  createVNode(_component_v_card, {
                    theme: "white",
                    class: "p12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "start"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h2" }, "Our services")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-subtitle" }, " Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital, Inc. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                            return createVNode(_component_v_col, {
                              cols: "3",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  theme: "accent",
                                  class: `p3 dark-${service.theme}`,
                                  "min-height": "450"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "start",
                                      justify: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: `dark-${service.theme}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  height: "100%",
                                                  src: service.src
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              theme: "accent",
                                              class: `dark-${service.theme}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, {
                                                  innerHTML: service.title
                                                }, null, 8, ["innerHTML"]),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_sheet, null, {
                                                      default: withCtx(() => [
                                                        createVNode("b", {
                                                          innerHTML: service.subtitle
                                                        }, null, 8, ["innerHTML"]),
                                                        createTextVNode(" " + toDisplayString(service.text), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      height: 36,
                                                      variant: "outlined"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(service.action), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)) : createCommentVNode("", true)
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
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    theme: "accent",
                    class: "p12 dark-green"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "6",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_subtitle, null, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h2" }, [
                                    createVNode("span", { class: "text-purple" }, "Making"),
                                    createTextVNode("\xA0 "),
                                    createVNode("span", { class: "text-pink" }, "Sense."),
                                    createTextVNode("\xA0 "),
                                    createVNode("span", { class: "text-green" }, "Making"),
                                    createTextVNode("\xA0 "),
                                    createVNode("span", { class: "text-yellow" }, "Value.")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, {
                                align: "center",
                                justify: "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        align: "top",
                                        justify: "end"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(values.left, (value, index) => {
                                            return openBlock(), createBlock(_component_v_col, {
                                              cols: "6",
                                              key: index
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  align: "center",
                                                  justify: "center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          theme: "theme",
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
                                                        createVNode(_component_v_card, {
                                                          theme: "theme",
                                                          class: `p2 dark-${value.theme}`,
                                                          "min-height": "75"
                                                        }, {
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
                                                                      class: `text-${value.theme}`
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(value.title), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1032, ["class"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_col, { cols: "12" }, {
                                                                  default: withCtx(() => [
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
                                                        }, 1032, ["class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
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
                                  createVNode(_component_v_col, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "theme",
                                        class: `p2 dark-green`,
                                        "min-height": "120"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            height: "600",
                                            src: "/icons/icons-004.png"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "3" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "theme",
                                        class: `p2 dark-green`,
                                        "min-height": "120"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "top",
                                            justify: "start"
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(values.right, (value, index) => {
                                                return openBlock(), createBlock(_component_v_col, {
                                                  cols: "6",
                                                  key: index
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "center"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card, {
                                                              theme: "theme",
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
                                                            createVNode(_component_v_card, {
                                                              theme: "theme",
                                                              class: `p2 dark-${value.theme}`,
                                                              "min-height": "75"
                                                            }, {
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
                                                                          class: `text-${value.theme}`
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(value.title), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["class"])
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                                      default: withCtx(() => [
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
                                                            }, 1032, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
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
                    theme: "white",
                    class: "p12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "start"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, {
                                align: "center",
                                "min-height": "600",
                                justify: "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "6",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h2" }, "Our expertise")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        dense: "",
                                        align: "center",
                                        justify: "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Envisioning a desirable future and accelerating change affords futuristic brands a dynamic branding strategy and competive edge on the marketplace. Telling branding stories and customer journeys, when told correctly, have the possibilities that can connect with culture and create community within a highly dynamic market environment in totally unpredictable ways. ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Brands that can't communicate a deligthing and an enriching story will unsurprisingly fail to stay in in unleashing their missions. ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" The ones, that do, will thrive. Below is a list of the industries that we currently serve with the support of media and veteran creatives in our digital arsenal, and it's only in the nascent stage of what can be unleashed when a new type of branding is unveiled to the marketplace. ")
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
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(industries, (industry, index) => {
                                    return createVNode(_component_v_col, {
                                      cols: "3",
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          theme: "theme",
                                          class: `p2 dark-${industry.theme}`,
                                          "min-height": "90"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "start",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "9" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, {
                                                              class: `text-${industry.theme}`
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line1), 1)
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
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, {
                                                              class: `text-${industry.theme}`
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line2), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "6" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, {
                                                              class: `text-${industry.theme}`
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode("h4", { class: "text-h4" }, toDisplayString(industry.line3), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      align: "center",
                                                      justify: "start"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_col, { cols: "3" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              height: "100%",
                                                              src: industry.src
                                                            }, null, 8, ["src"])
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    theme: "yellow",
                    class: "p12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "9" }, {
                            default: withCtx(() => [
                              createVNode("form")
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
//# sourceMappingURL=index.afa1f98d.mjs.map
