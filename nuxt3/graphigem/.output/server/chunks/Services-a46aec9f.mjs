import { _ as __nuxt_component_0 } from './server-placeholder-3a7b1497.mjs';
import { u as useHead } from './composables-1ca9bb4f.mjs';
import { defineComponent, ref, computed, h, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, createCommentVNode, toDisplayString } from 'vue';
import { p as parseSize, _ as _export_sfc, b as useNuxtApp, e as __nuxt_component_0$1 } from './server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const useImage = () => {
  return useNuxtApp().$img;
};
const baseImageProps = {
  src: { type: String, required: true },
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = _base.attrs.value;
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$2 = {
  __name: "Approach",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        title: "Build <span class='text-white'> it</span>",
        subtitle: "<span class='text-yellow'>Launch</span> a bold campaign and shoot for the stars by capturing the imagination of your audience's culture and AI customer learning models.",
        text: "",
        src: "/icons/icons-007.png",
        theme: "yellow"
      },
      {
        title: "Apply <span class='text-white'> it</span>",
        subtitle: "<span class='text-green'>Discover</span> and highlight incentives for brand loyalty and target specific demographics of your potential customers on social & web3 platforms.",
        text: "",
        src: "/icons/icons-009.png",
        theme: "green"
      },
      {
        title: "Evaluate <span class='text-white'> it</span>",
        subtitle: "<span class='text-pink'>Unleash</span> new insights and repeat building again while adding adjustments to the buy-in effects of your campaign on real and potential customers.",
        text: "",
        src: "/icons/icons-006.png",
        theme: "pink"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = __nuxt_component_0;
      const _component_v_row = __nuxt_component_0;
      const _component_v_col = __nuxt_component_0;
      const _component_v_card_title = __nuxt_component_0;
      const _component_v_card_subtitle = __nuxt_component_0;
      const _component_v_card_text = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      const _component_v_img = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        theme: "accent",
        class: "p12 dark-purple"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              justify: "center",
              minHeight: "600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "9" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "end",
                          minHeight: "600"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                lg: "6",
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h2"${_scopeId6}><span class="text-purple"${_scopeId6}>Our</span> appreach </h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h2" }, [
                                              createVNode("span", { class: "text-purple" }, "Our"),
                                              createTextVNode(" appreach ")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_subtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. `);
                                        } else {
                                          return [
                                            createTextVNode(" If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="text-purple"${_scopeId6}>Catalyze</span> your brands&#39; branding efforts with the support you need to succeed in a variety of today&#39;s specialized and mostly virtual marketplaces around the world. `);
                                        } else {
                                          return [
                                            createVNode("span", { class: "text-purple" }, "Catalyze"),
                                            createTextVNode(" your brands' branding efforts with the support you need to succeed in a variety of today's specialized and mostly virtual marketplaces around the world. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="text-purple"${_scopeId6}>Compliment</span> your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. `);
                                        } else {
                                          return [
                                            createVNode("span", { class: "text-purple" }, "Compliment"),
                                            createTextVNode(" your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span class="text-purple"${_scopeId6}>Delight</span> your audience who always expect to be a part of a story line that&#39;s bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. `);
                                        } else {
                                          return [
                                            createVNode("span", { class: "text-purple" }, "Delight"),
                                            createTextVNode(" your audience who always expect to be a part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h2" }, [
                                            createVNode("span", { class: "text-purple" }, "Our"),
                                            createTextVNode(" appreach ")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-purple" }, "Catalyze"),
                                          createTextVNode(" your brands' branding efforts with the support you need to succeed in a variety of today's specialized and mostly virtual marketplaces around the world. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-purple" }, "Compliment"),
                                          createTextVNode(" your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-purple" }, "Delight"),
                                          createTextVNode(" your audience who always expect to be a part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. ")
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
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, {
                                      align: "center",
                                      justify: "start"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card, {
                                                  theme: "theme",
                                                  class: "dark-purple p3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_nuxt_img, {
                                                        width: 600,
                                                        height: 600,
                                                        src: "/icons/icons-005.png"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(_component_nuxt_img, {
                                                          width: 600,
                                                          height: 600,
                                                          src: "/icons/icons-005.png"
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
                                                    class: "dark-purple p3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_nuxt_img, {
                                                        width: 600,
                                                        height: 600,
                                                        src: "/icons/icons-005.png"
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
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  theme: "theme",
                                                  class: "dark-purple p3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_nuxt_img, {
                                                      width: 600,
                                                      height: 600,
                                                      src: "/icons/icons-005.png"
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
                                        justify: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                theme: "theme",
                                                class: "dark-purple p3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_nuxt_img, {
                                                    width: 600,
                                                    height: 600,
                                                    src: "/icons/icons-005.png"
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
                                  lg: "6",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h2" }, [
                                          createVNode("span", { class: "text-purple" }, "Our"),
                                          createTextVNode(" appreach ")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-purple" }, "Catalyze"),
                                        createTextVNode(" your brands' branding efforts with the support you need to succeed in a variety of today's specialized and mostly virtual marketplaces around the world. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-purple" }, "Compliment"),
                                        createTextVNode(" your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-purple" }, "Delight"),
                                        createTextVNode(" your audience who always expect to be a part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  lg: "6",
                                  cols: "12"
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
                                              theme: "theme",
                                              class: "dark-purple p3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_nuxt_img, {
                                                  width: 600,
                                                  height: 600,
                                                  src: "/icons/icons-005.png"
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
                            justify: "end",
                            minHeight: "600"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                lg: "6",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h2" }, [
                                        createVNode("span", { class: "text-purple" }, "Our"),
                                        createTextVNode(" appreach ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-purple" }, "Catalyze"),
                                      createTextVNode(" your brands' branding efforts with the support you need to succeed in a variety of today's specialized and mostly virtual marketplaces around the world. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-purple" }, "Compliment"),
                                      createTextVNode(" your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-purple" }, "Delight"),
                                      createTextVNode(" your audience who always expect to be a part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                lg: "6",
                                cols: "12"
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
                                            theme: "theme",
                                            class: "dark-purple p3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_nuxt_img, {
                                                width: 600,
                                                height: 600,
                                                src: "/icons/icons-005.png"
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
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { justify: "start" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(steps, (step, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  sm: "12",
                                  md: "12",
                                  lg: "4",
                                  xl: "4",
                                  cols: "12",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        theme: "theme",
                                        class: `p3 dark-${step.theme}`
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
                                                    lg: "3",
                                                    cols: "6"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_img, {
                                                          src: step.src
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_img, {
                                                            src: step.src
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    lg: "9",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_card_title, {
                                                          class: `text-${step.theme}`
                                                        }, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_card_text, null, null, _parent9, _scopeId8));
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
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      lg: "3",
                                                      cols: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          src: step.src
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, {
                                                      lg: "9",
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
                                                    lg: "3",
                                                    cols: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        src: step.src
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, {
                                                    lg: "9",
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
                                          class: `p3 dark-${step.theme}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "center",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  lg: "3",
                                                  cols: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      src: step.src
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, {
                                                  lg: "9",
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
                                (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                  return createVNode(_component_v_col, {
                                    sm: "12",
                                    md: "12",
                                    lg: "4",
                                    xl: "4",
                                    cols: "12",
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
                                                lg: "3",
                                                cols: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    src: step.src
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, {
                                                lg: "9",
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
                          createVNode(_component_v_row, { justify: "start" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(steps, (step, index) => {
                                return createVNode(_component_v_col, {
                                  sm: "12",
                                  md: "12",
                                  lg: "4",
                                  xl: "4",
                                  cols: "12",
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
                                              lg: "3",
                                              cols: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  src: step.src
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, {
                                              lg: "9",
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
                    createVNode(_component_v_col, { cols: "9" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "end",
                          minHeight: "600"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              lg: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h2" }, [
                                      createVNode("span", { class: "text-purple" }, "Our"),
                                      createTextVNode(" appreach ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_subtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-purple" }, "Catalyze"),
                                    createTextVNode(" your brands' branding efforts with the support you need to succeed in a variety of today's specialized and mostly virtual marketplaces around the world. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-purple" }, "Compliment"),
                                    createTextVNode(" your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-purple" }, "Delight"),
                                    createTextVNode(" your audience who always expect to be a part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              lg: "6",
                              cols: "12"
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
                                          theme: "theme",
                                          class: "dark-purple p3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_nuxt_img, {
                                              width: 600,
                                              height: 600,
                                              src: "/icons/icons-005.png"
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
                                sm: "12",
                                md: "12",
                                lg: "4",
                                xl: "4",
                                cols: "12",
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
                                            lg: "3",
                                            cols: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                src: step.src
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, {
                                            lg: "9",
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
                justify: "center",
                minHeight: "600"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "9" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "end",
                        minHeight: "600"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            lg: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h2" }, [
                                    createVNode("span", { class: "text-purple" }, "Our"),
                                    createTextVNode(" appreach ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" If you ask us, what is it like to launch a successful campaign? Our answer is simple: It is always a dream as it were. We delight in working with upcoming brands to unleash their own wildest dreams. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-purple" }, "Catalyze"),
                                  createTextVNode(" your brands' branding efforts with the support you need to succeed in a variety of today's specialized and mostly virtual marketplaces around the world. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-purple" }, "Compliment"),
                                  createTextVNode(" your customer engagement efforts with your potential and existing customers in bolder ways and unleash a common ground with them for mutual gain. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-purple" }, "Delight"),
                                  createTextVNode(" your audience who always expect to be a part of a story line that's bolder than their wildest expectations and Graphigem is your digital campaign partner of choice. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            lg: "6",
                            cols: "12"
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
                                        theme: "theme",
                                        class: "dark-purple p3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_nuxt_img, {
                                            width: 600,
                                            height: 600,
                                            src: "/icons/icons-005.png"
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
                              sm: "12",
                              md: "12",
                              lg: "4",
                              xl: "4",
                              cols: "12",
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
                                          lg: "3",
                                          cols: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: step.src
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, {
                                          lg: "9",
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Approach.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  data: () => ({
    tab: null,
    projects: [
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        title: "Films",
        items: [
          {
            src: "/cast/royal-bride/Welcome.png",
            title: "Royal Bride",
            subtitle: "",
            text: ""
          },
          {
            src: "/cast/bold-girls/Welcome.png",
            title: "Bold Girls",
            subtitle: "",
            text: ""
          },
          {
            src: "/cast/tribal-combat/Welcome.png",
            title: "Trubal Combat",
            subtitle: "",
            text: ""
          },
          {
            src: "/cast/bold-man/Welcome.png",
            title: "Bold Man",
            subtitle: "",
            text: ""
          },
          {
            src: "/cast/bold-and-famous/Welcome.png",
            title: "Bold & Famous",
            subtitle: "",
            text: ""
          }
        ]
      },
      {
        src: "/gees/gees-013.png",
        theme: "purple",
        title: "Sneakers",
        items: [
          {
            src: "/items/bold-sneaker-001.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-sneaker-002.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-sneaker-003.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-sneaker-004.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-sneaker-005.png",
            title: "Bold Sneakers",
            subtitle: "",
            text: ""
          }
        ]
      },
      {
        src: "/gees/gees-013.png",
        theme: "pink",
        title: "Handbags",
        items: [
          {
            src: "/items/bold-handbags-001.png",
            title: "Bold Handbag",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-handbags-002.png",
            title: "Bold Handbag",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-handbags-003.png",
            title: "Bold Handbag",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-handbags-004.png",
            title: "Bold Handbag",
            subtitle: "",
            text: ""
          }
        ]
      },
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        title: "Watches",
        items: [
          {
            src: "/items/bold-watch-001.png",
            title: "Bold Watch",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-watch-002.png",
            title: "Bold Watch",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-watch-003.png",
            title: "Bold Watch",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-watch-004.png",
            title: "Bold Watch",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-watch-005.png",
            title: "Bold Watch",
            subtitle: "",
            text: ""
          }
        ]
      },
      {
        src: "/gees/gees-013.png",
        theme: "green",
        title: "Hoodies",
        items: [
          {
            src: "/items/bold-hoodie-001.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-002.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-003.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-004.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-005.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-006.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-007.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-008.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/bold-hoodie-009.png",
            title: "Bold Hoodies",
            subtitle: "",
            text: ""
          }
        ]
      },
      {
        src: "/gees/gees-013.png",
        theme: "pink",
        title: "Commercials",
        items: [
          {
            src: "/items/watch-hands-001.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/watch-hands-002.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/watch-hands-003.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/watch-hands-004.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: ""
          },
          {
            src: "/items/watch-hands-005.png",
            title: "Bold watch Advert",
            subtitle: "",
            text: ""
          }
        ]
      }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = __nuxt_component_0;
  const _component_v_row = __nuxt_component_0;
  const _component_v_col = __nuxt_component_0;
  const _component_v_card_title = __nuxt_component_0;
  const _component_v_card_text = __nuxt_component_0;
  const _component_v_tabs = __nuxt_component_0;
  const _component_v_tab = __nuxt_component_0;
  const _component_v_window = __nuxt_component_0;
  const _component_v_window_item = __nuxt_component_0;
  const _component_v_carousel = __nuxt_component_0;
  const _component_v_carousel_item = __nuxt_component_0;
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
                lg: "9",
                md: "6",
                sm: "12",
                cols: "12"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, {
                      align: "center",
                      justify: "start"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            lg: "6",
                            cols: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card_title, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h2 class="text-h2"${_scopeId6}><span class="text-yellow"${_scopeId6}>Our</span> productions </h2>`);
                                    } else {
                                      return [
                                        createVNode("h2", { class: "text-h2" }, [
                                          createVNode("span", { class: "text-yellow" }, "Our"),
                                          createTextVNode(" productions ")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_card_text, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` If it doesn&#39;t sell, it isn&#39;t creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. `);
                                    } else {
                                      return [
                                        createTextVNode(" If it doesn't sell, it isn't creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_card_text, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` &quot;You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night&quot; - <b${_scopeId6}>David Ogilvy</b>`);
                                    } else {
                                      return [
                                        createTextVNode(' "You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night" - '),
                                        createVNode("b", null, "David Ogilvy")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h2" }, [
                                        createVNode("span", { class: "text-yellow" }, "Our"),
                                        createTextVNode(" productions ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" If it doesn't sell, it isn't creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(' "You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night" - '),
                                      createVNode("b", null, "David Ogilvy")
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
                            cols: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_tabs, {
                                  modelValue: _ctx.tab,
                                  "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                                  color: "deep-purple-accent-4",
                                  "align-tabs": "center",
                                  class: "mb-6"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList(_ctx.projects, (project) => {
                                        _push7(ssrRenderComponent(_component_v_tab, {
                                          color: project.theme,
                                          value: project
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(project.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(project.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                          return openBlock(), createBlock(_component_v_tab, {
                                            color: project.theme,
                                            value: project
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(project.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "value"]);
                                        }), 256))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_window, {
                                  modelValue: _ctx.tab,
                                  "onUpdate:modelValue": ($event) => _ctx.tab = $event
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList(_ctx.projects, (project) => {
                                        _push7(ssrRenderComponent(_component_v_window_item, {
                                          key: project,
                                          value: project
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_v_card, {
                                                rounded: "0",
                                                theme: "theme",
                                                class: `dark-${project.theme}`
                                              }, {
                                                default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                  if (_push9) {
                                                    _push9(ssrRenderComponent(_component_v_carousel, {
                                                      "show-arrows": "false",
                                                      cycle: "",
                                                      "hide-delimiters": ""
                                                    }, {
                                                      default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                        if (_push10) {
                                                          _push10(`<div${_scopeId9}></div><!--[-->`);
                                                          ssrRenderList(project.items, (item) => {
                                                            _push10(ssrRenderComponent(_component_v_carousel_item, {
                                                              key: item,
                                                              value: item,
                                                              src: item.src
                                                            }, null, _parent10, _scopeId9));
                                                          });
                                                          _push10(`<!--]-->`);
                                                        } else {
                                                          return [
                                                            createVNode("div"),
                                                            (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                              return openBlock(), createBlock(_component_v_carousel_item, {
                                                                key: item,
                                                                value: item,
                                                                src: item.src
                                                              }, null, 8, ["value", "src"]);
                                                            }), 128))
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent9, _scopeId8));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_carousel, {
                                                        "show-arrows": "false",
                                                        cycle: "",
                                                        "hide-delimiters": ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("div"),
                                                          (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                            return openBlock(), createBlock(_component_v_carousel_item, {
                                                              key: item,
                                                              value: item,
                                                              src: item.src
                                                            }, null, 8, ["value", "src"]);
                                                          }), 128))
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
                                                  rounded: "0",
                                                  theme: "theme",
                                                  class: `dark-${project.theme}`
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_carousel, {
                                                      "show-arrows": "false",
                                                      cycle: "",
                                                      "hide-delimiters": ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("div"),
                                                        (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                          return openBlock(), createBlock(_component_v_carousel_item, {
                                                            key: item,
                                                            value: item,
                                                            src: item.src
                                                          }, null, 8, ["value", "src"]);
                                                        }), 128))
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
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                          return openBlock(), createBlock(_component_v_window_item, {
                                            key: project,
                                            value: project
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                rounded: "0",
                                                theme: "theme",
                                                class: `dark-${project.theme}`
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_carousel, {
                                                    "show-arrows": "false",
                                                    cycle: "",
                                                    "hide-delimiters": ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div"),
                                                      (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                        return openBlock(), createBlock(_component_v_carousel_item, {
                                                          key: item,
                                                          value: item,
                                                          src: item.src
                                                        }, null, 8, ["value", "src"]);
                                                      }), 128))
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_tabs, {
                                    modelValue: _ctx.tab,
                                    "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                                    color: "deep-purple-accent-4",
                                    "align-tabs": "center",
                                    class: "mb-6"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                        return openBlock(), createBlock(_component_v_tab, {
                                          color: project.theme,
                                          value: project
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(project.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "value"]);
                                      }), 256))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_v_window, {
                                    modelValue: _ctx.tab,
                                    "onUpdate:modelValue": ($event) => _ctx.tab = $event
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                        return openBlock(), createBlock(_component_v_window_item, {
                                          key: project,
                                          value: project
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              rounded: "0",
                                              theme: "theme",
                                              class: `dark-${project.theme}`
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_carousel, {
                                                  "show-arrows": "false",
                                                  cycle: "",
                                                  "hide-delimiters": ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div"),
                                                    (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                      return openBlock(), createBlock(_component_v_carousel_item, {
                                                        key: item,
                                                        value: item,
                                                        src: item.src
                                                      }, null, 8, ["value", "src"]);
                                                    }), 128))
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              lg: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h2" }, [
                                      createVNode("span", { class: "text-yellow" }, "Our"),
                                      createTextVNode(" productions ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" If it doesn't sell, it isn't creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(' "You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night" - '),
                                    createVNode("b", null, "David Ogilvy")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              lg: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_tabs, {
                                  modelValue: _ctx.tab,
                                  "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                                  color: "deep-purple-accent-4",
                                  "align-tabs": "center",
                                  class: "mb-6"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                      return openBlock(), createBlock(_component_v_tab, {
                                        color: project.theme,
                                        value: project
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(project.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "value"]);
                                    }), 256))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_window, {
                                  modelValue: _ctx.tab,
                                  "onUpdate:modelValue": ($event) => _ctx.tab = $event
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                      return openBlock(), createBlock(_component_v_window_item, {
                                        key: project,
                                        value: project
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            rounded: "0",
                                            theme: "theme",
                                            class: `dark-${project.theme}`
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_carousel, {
                                                "show-arrows": "false",
                                                cycle: "",
                                                "hide-delimiters": ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div"),
                                                  (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                    return openBlock(), createBlock(_component_v_carousel_item, {
                                                      key: item,
                                                      value: item,
                                                      src: item.src
                                                    }, null, 8, ["value", "src"]);
                                                  }), 128))
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "start"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            lg: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h2" }, [
                                    createVNode("span", { class: "text-yellow" }, "Our"),
                                    createTextVNode(" productions ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(" If it doesn't sell, it isn't creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(' "You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night" - '),
                                  createVNode("b", null, "David Ogilvy")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            lg: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tabs, {
                                modelValue: _ctx.tab,
                                "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                                color: "deep-purple-accent-4",
                                "align-tabs": "center",
                                class: "mb-6"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                    return openBlock(), createBlock(_component_v_tab, {
                                      color: project.theme,
                                      value: project
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(project.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "value"]);
                                  }), 256))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_window, {
                                modelValue: _ctx.tab,
                                "onUpdate:modelValue": ($event) => _ctx.tab = $event
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                    return openBlock(), createBlock(_component_v_window_item, {
                                      key: project,
                                      value: project
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          rounded: "0",
                                          theme: "theme",
                                          class: `dark-${project.theme}`
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_carousel, {
                                              "show-arrows": "false",
                                              cycle: "",
                                              "hide-delimiters": ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div"),
                                                (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                  return openBlock(), createBlock(_component_v_carousel_item, {
                                                    key: item,
                                                    value: item,
                                                    src: item.src
                                                  }, null, 8, ["value", "src"]);
                                                }), 128))
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                createVNode(_component_v_col, {
                  lg: "9",
                  md: "6",
                  sm: "12",
                  cols: "12"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, {
                      align: "center",
                      justify: "start"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          lg: "6",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-h2" }, [
                                  createVNode("span", { class: "text-yellow" }, "Our"),
                                  createTextVNode(" productions ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createTextVNode(" If it doesn't sell, it isn't creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createTextVNode(' "You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night" - '),
                                createVNode("b", null, "David Ogilvy")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          lg: "6",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_tabs, {
                              modelValue: _ctx.tab,
                              "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                              color: "deep-purple-accent-4",
                              "align-tabs": "center",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                  return openBlock(), createBlock(_component_v_tab, {
                                    color: project.theme,
                                    value: project
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(project.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "value"]);
                                }), 256))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_window, {
                              modelValue: _ctx.tab,
                              "onUpdate:modelValue": ($event) => _ctx.tab = $event
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                  return openBlock(), createBlock(_component_v_window_item, {
                                    key: project,
                                    value: project
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        rounded: "0",
                                        theme: "theme",
                                        class: `dark-${project.theme}`
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_carousel, {
                                            "show-arrows": "false",
                                            cycle: "",
                                            "hide-delimiters": ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div"),
                                              (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                                return openBlock(), createBlock(_component_v_carousel_item, {
                                                  key: item,
                                                  value: item,
                                                  src: item.src
                                                }, null, 8, ["value", "src"]);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
          createVNode(_component_v_row, {
            align: "center",
            justify: "center"
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
                    justify: "start"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        lg: "6",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h2" }, [
                                createVNode("span", { class: "text-yellow" }, "Our"),
                                createTextVNode(" productions ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createTextVNode(" If it doesn't sell, it isn't creative. Brands have to decide what image they want for their brand. Image means personality. Products, like people, have personalities, and they can make or break them in the marketplace. We are taking a stride toward beauty and easthetics. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createTextVNode(' "You will never win fame and fortune unless you invent big ideas. It takes a big idea to attract the attention of consumers and get them to buy your product. Unless your advertising contains a big idea, it will pass like a ship in the night" - '),
                              createVNode("b", null, "David Ogilvy")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        lg: "6",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tabs, {
                            modelValue: _ctx.tab,
                            "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                            color: "deep-purple-accent-4",
                            "align-tabs": "center",
                            class: "mb-6"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                return openBlock(), createBlock(_component_v_tab, {
                                  color: project.theme,
                                  value: project
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(project.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color", "value"]);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_window, {
                            modelValue: _ctx.tab,
                            "onUpdate:modelValue": ($event) => _ctx.tab = $event
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project) => {
                                return openBlock(), createBlock(_component_v_window_item, {
                                  key: project,
                                  value: project
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      rounded: "0",
                                      theme: "theme",
                                      class: `dark-${project.theme}`
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_carousel, {
                                          "show-arrows": "false",
                                          cycle: "",
                                          "hide-delimiters": ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div"),
                                            (openBlock(true), createBlock(Fragment, null, renderList(project.items, (item) => {
                                              return openBlock(), createBlock(_component_v_carousel_item, {
                                                key: item,
                                                value: item,
                                                src: item.src
                                              }, null, 8, ["value", "src"]);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        src: "/gees/gees-013.png",
        theme: "yellow",
        title: "<span class='text-yellow'>Original</span> Branding",
        subtitle: "<span class='text-yellow'>Build</span> and launch bold campaign story lines.",
        text: "Great companies have great dreams, and it's those great stories - when narrated creatively - that connect with culture and create demand. Those that can't tell their story will fail.",
        action: "Get started"
      },
      {
        src: "/gees/gees-006.png",
        theme: "green",
        title: "<span class='text-green'>On-demand</span> Branding",
        subtitle: "<span class='text-green'>Automate</span> your brand's loyal audience and grow.",
        text: "We understand the challenges that brands come across allowing us to provide your brabd with advice based on our first-hand campaign experiences. ",
        action: "Get started"
      },
      {
        src: "/gees/gees-009.png",
        theme: "pink",
        title: "<span class='text-pink'>Virtual</span> Branding",
        subtitle: "<span class='text-pink'>Adjust</span> to creative input and connect with audience.",
        text: "Internet culture is now culture. We help broadcast your brand story through various ways that resonate well with your product's appeal capabilities. ",
        action: "Get started"
      },
      {
        src: "/gees/gees-003.png",
        theme: "purple",
        title: "<span class='text-purple'>Agent</span> Branding",
        subtitle: "<span class='text-pink'>Adopt</span> and train an AI powered campaign agent model.",
        text: "Welcome a new world of automated blochain solutions. Imagine the special role that a branded virtual campaign can achieve for your brand beyond any limits.",
        action: "Get started"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = __nuxt_component_0;
      const _component_v_row = __nuxt_component_0;
      const _component_v_col = __nuxt_component_0;
      const _component_v_img = __nuxt_component_0;
      const _component_v_card_title = __nuxt_component_0;
      const _component_v_card_subtitle = __nuxt_component_0;
      const _component_v_card_text = __nuxt_component_0;
      const _component_v_card_actions = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_v_btn = __nuxt_component_0;
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
                    lg: "9",
                    md: "6",
                    sm: "12",
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_v_col, {
                                lg: "6",
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h2"${_scopeId6}><span class="text-green"${_scopeId6}>Our</span> services </h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h2" }, [
                                              createVNode("span", { class: "text-green" }, "Our"),
                                              createTextVNode(" services ")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_subtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand&#39;s rocket flight to the skies. `);
                                        } else {
                                          return [
                                            createTextVNode(" Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand's rocket flight to the skies. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We&#39;ve assembled the world&#39;s greatest creative talent to help you connect your story and contextual customer demands, seamlessly. `);
                                        } else {
                                          return [
                                            createTextVNode(" Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands, seamlessly. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h2" }, [
                                            createVNode("span", { class: "text-green" }, "Our"),
                                            createTextVNode(" services ")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand's rocket flight to the skies. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands, seamlessly. ")
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
                                createCommentVNode("", true),
                                createVNode(_component_v_col, {
                                  lg: "6",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h2" }, [
                                          createVNode("span", { class: "text-green" }, "Our"),
                                          createTextVNode(" services ")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand's rocket flight to the skies. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands, seamlessly. ")
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
                              createCommentVNode("", true),
                              createVNode(_component_v_col, {
                                lg: "6",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h2" }, [
                                        createVNode("span", { class: "text-green" }, "Our"),
                                        createTextVNode(" services ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand's rocket flight to the skies. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands, seamlessly. ")
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
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(services, (service, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  lg: "3",
                                  md: "6",
                                  sm: "12",
                                  key: index
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        theme: "theme",
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
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    lg: "12",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_img, {
                                                          height: "100%",
                                                          src: service.src
                                                        }, null, _parent9, _scopeId8));
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
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_card_title, null, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_v_card_text, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`<b${_scopeId9}>${service.subtitle}</b> ${ssrInterpolate(service.text)}`);
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
                                                        }, _parent9, _scopeId8));
                                                        if (service.action) {
                                                          _push9(ssrRenderComponent(_component_v_card_actions, null, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(ssrRenderComponent(_component_NuxtLink, { to: "/#contact-us" }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(ssrRenderComponent(_component_v_btn, {
                                                                        block: "",
                                                                        color: service.theme,
                                                                        size: "x-large",
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
                                                                          block: "",
                                                                          color: service.theme,
                                                                          size: "x-large",
                                                                          variant: "outlined"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(service.action), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1032, ["color"])
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                return [
                                                                  createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_btn, {
                                                                        block: "",
                                                                        color: service.theme,
                                                                        size: "x-large",
                                                                        variant: "outlined"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(service.action), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1032, ["color"])
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_card_title, {
                                                            innerHTML: service.title
                                                          }, null, 8, ["innerHTML"]),
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createVNode("b", {
                                                                innerHTML: service.subtitle
                                                              }, null, 8, ["innerHTML"]),
                                                              createTextVNode(" " + toDisplayString(service.text), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_btn, {
                                                                    block: "",
                                                                    color: service.theme,
                                                                    size: "x-large",
                                                                    variant: "outlined"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(service.action), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1032, ["color"])
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
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      lg: "12",
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          height: "100%",
                                                          src: service.src
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_col, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, {
                                                          innerHTML: service.title
                                                        }, null, 8, ["innerHTML"]),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createVNode("b", {
                                                              innerHTML: service.subtitle
                                                            }, null, 8, ["innerHTML"]),
                                                            createTextVNode(" " + toDisplayString(service.text), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_btn, {
                                                                  block: "",
                                                                  color: service.theme,
                                                                  size: "x-large",
                                                                  variant: "outlined"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(service.action), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["color"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)) : createCommentVNode("", true)
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
                                                  createVNode(_component_v_col, {
                                                    lg: "12",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        height: "100%",
                                                        src: service.src
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, {
                                                        innerHTML: service.title
                                                      }, null, 8, ["innerHTML"]),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createVNode("b", {
                                                            innerHTML: service.subtitle
                                                          }, null, 8, ["innerHTML"]),
                                                          createTextVNode(" " + toDisplayString(service.text), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_btn, {
                                                                block: "",
                                                                color: service.theme,
                                                                size: "x-large",
                                                                variant: "outlined"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(service.action), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1032, ["color"])
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true)
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
                                          class: `p3 dark-${service.theme}`,
                                          "min-height": "450"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              align: "start",
                                              justify: "start"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  lg: "12",
                                                  cols: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      height: "100%",
                                                      src: service.src
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, {
                                                      innerHTML: service.title
                                                    }, null, 8, ["innerHTML"]),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createVNode("b", {
                                                          innerHTML: service.subtitle
                                                        }, null, 8, ["innerHTML"]),
                                                        createTextVNode(" " + toDisplayString(service.text), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_btn, {
                                                              block: "",
                                                              color: service.theme,
                                                              size: "x-large",
                                                              variant: "outlined"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(service.action), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)) : createCommentVNode("", true)
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
                                (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                                  return createVNode(_component_v_col, {
                                    lg: "3",
                                    md: "6",
                                    sm: "12",
                                    key: index
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        theme: "theme",
                                        class: `p3 dark-${service.theme}`,
                                        "min-height": "450"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            align: "start",
                                            justify: "start"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                lg: "12",
                                                cols: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    height: "100%",
                                                    src: service.src
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, {
                                                    innerHTML: service.title
                                                  }, null, 8, ["innerHTML"]),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode("b", {
                                                        innerHTML: service.subtitle
                                                      }, null, 8, ["innerHTML"]),
                                                      createTextVNode(" " + toDisplayString(service.text), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            block: "",
                                                            color: service.theme,
                                                            size: "x-large",
                                                            variant: "outlined"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(service.action), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true)
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
                              (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                                return createVNode(_component_v_col, {
                                  lg: "3",
                                  md: "6",
                                  sm: "12",
                                  key: index
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, {
                                      theme: "theme",
                                      class: `p3 dark-${service.theme}`,
                                      "min-height": "450"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          align: "start",
                                          justify: "start"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              lg: "12",
                                              cols: "12"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  height: "100%",
                                                  src: service.src
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, {
                                                  innerHTML: service.title
                                                }, null, 8, ["innerHTML"]),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode("b", {
                                                      innerHTML: service.subtitle
                                                    }, null, 8, ["innerHTML"]),
                                                    createTextVNode(" " + toDisplayString(service.text), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          block: "",
                                                          color: service.theme,
                                                          size: "x-large",
                                                          variant: "outlined"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(service.action), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)) : createCommentVNode("", true)
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
                      lg: "9",
                      md: "6",
                      sm: "12",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx(() => [
                            createCommentVNode("", true),
                            createVNode(_component_v_col, {
                              lg: "6",
                              cols: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h2" }, [
                                      createVNode("span", { class: "text-green" }, "Our"),
                                      createTextVNode(" services ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_subtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand's rocket flight to the skies. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands, seamlessly. ")
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
                        createVNode(_component_v_row, {
                          align: "center",
                          justify: "start"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                              return createVNode(_component_v_col, {
                                lg: "3",
                                md: "6",
                                sm: "12",
                                key: index
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    theme: "theme",
                                    class: `p3 dark-${service.theme}`,
                                    "min-height": "450"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        align: "start",
                                        justify: "start"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            lg: "12",
                                            cols: "12"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                height: "100%",
                                                src: service.src
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, {
                                                innerHTML: service.title
                                              }, null, 8, ["innerHTML"]),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createVNode("b", {
                                                    innerHTML: service.subtitle
                                                  }, null, 8, ["innerHTML"]),
                                                  createTextVNode(" " + toDisplayString(service.text), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        block: "",
                                                        color: service.theme,
                                                        size: "x-large",
                                                        variant: "outlined"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(service.action), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true)
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
                    lg: "9",
                    md: "6",
                    sm: "12",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "start"
                      }, {
                        default: withCtx(() => [
                          createCommentVNode("", true),
                          createVNode(_component_v_col, {
                            lg: "6",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h2" }, [
                                    createVNode("span", { class: "text-green" }, "Our"),
                                    createTextVNode(" services ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Get to know and offer your customers tailored products that resonate with their distinct lifestyles and expectations. Switch on the lights and become the pilot of your brand's rocket flight to the skies. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Said differently, we enable you to uniquely delight your customers in both systematic and more strategic ways with better returns alongside your auto-scale branding experts at Graphigem Digital. We've assembled the world's greatest creative talent to help you connect your story and contextual customer demands, seamlessly. ")
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
                      createVNode(_component_v_row, {
                        align: "center",
                        justify: "start"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                            return createVNode(_component_v_col, {
                              lg: "3",
                              md: "6",
                              sm: "12",
                              key: index
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  theme: "theme",
                                  class: `p3 dark-${service.theme}`,
                                  "min-height": "450"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      align: "start",
                                      justify: "start"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          lg: "12",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              height: "100%",
                                              src: service.src
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, {
                                              innerHTML: service.title
                                            }, null, 8, ["innerHTML"]),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode("b", {
                                                  innerHTML: service.subtitle
                                                }, null, 8, ["innerHTML"]),
                                                createTextVNode(" " + toDisplayString(service.text), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            service.action ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, { to: "/#contact-us" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      block: "",
                                                      color: service.theme,
                                                      size: "x-large",
                                                      variant: "outlined"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(service.action), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["color"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, __nuxt_component_3 as a, _sfc_main as b };
//# sourceMappingURL=Services-a46aec9f.mjs.map
