(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    886: function (e, s, i) {
      Promise.resolve().then(i.t.bind(i, 231, 23)),
        Promise.resolve().then(i.bind(i, 4920)),
        Promise.resolve().then(i.bind(i, 4336)),
        Promise.resolve().then(i.bind(i, 9662)),
        Promise.resolve().then(i.bind(i, 9336)),
        Promise.resolve().then(i.bind(i, 5347)),
        Promise.resolve().then(i.bind(i, 1315)),
        Promise.resolve().then(i.bind(i, 3682)),
        Promise.resolve().then(i.bind(i, 1386));
    },
    4920: function (e, s, i) {
      "use strict";
      var a = i(7437);
      i(2265);
      var l = i(6648),
        t = i(3267),
        r = i(5540),
        c = i(6466),
        n = i(5693),
        d = i(3964),
        o = i(6208),
        h = i(6956);
      let m = [c.Z, n.Z, d.Z, o.Z, h.Z, c.Z, n.Z, d.Z, o.Z, h.Z];
      s.default = (e) => {
        let { style_2: s } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "it-brand__area ".concat(
              s ? "it-brand__border pt-110 pb-100" : ""
            ),
            children: (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsx)("div", {
                className: "".concat(
                  s ? "" : "it-brand__border-top pt-80 pb-80"
                ),
                children: (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "it-brand__wrapper",
                    children: (0, a.jsx)(t.tq, {
                      speed: 1e3,
                      loop: !0,
                      slidesPerView: 5,
                      spaceBetween: 30,
                      autoplay: !0,
                      modules: [r.pt, r.tl],
                      pagination: {
                        el: ".testimonial-slider-dots",
                        clickable: !0,
                      },
                      breakpoints: {
                        1200: { slidesPerView: 5 },
                        992: { slidesPerView: 5 },
                        768: { slidesPerView: 4 },
                        576: { slidesPerView: 3 },
                        0: { slidesPerView: 2 },
                      },
                      className: "swiper-container it-brand__active",
                      children: m.map((e, s) =>
                        (0, a.jsx)(
                          t.o5,
                          {
                            className: "swiper-slide",
                            children: (0, a.jsx)("div", {
                              className: "it-brand__item",
                              children: (0, a.jsx)(l.default, {
                                src: e,
                                alt: "rk-theme",
                              }),
                            }),
                          },
                          s
                        )
                      ),
                    }),
                  }),
                }),
              }),
            }),
          }),
        });
      };
    },
    5259: function (e, s, i) {
      "use strict";
      var a = i(7437),
        l = i(7138);
      i(2265),
        (s.Z = (e) => {
          let { open: s, setOpen: i } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "search__popup ".concat(s ? "search-opened" : ""),
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("div", {
                      className: "col-xxl-12",
                      children: (0, a.jsxs)("div", {
                        className: "search__wrapper",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "search__top d-flex justify-content-between align-items-center",
                            children: [
                              (0, a.jsx)("div", {
                                className: "search__logo",
                                children: (0, a.jsx)(l.default, {
                                  href: "/",
                                  children: (0, a.jsx)("img", {
                                    src: "assets/img/logo/white-logo.png",
                                    alt: "rk-theme",
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "search__close",
                                children: (0, a.jsx)("button", {
                                  onClick: () => i(!1),
                                  type: "button",
                                  className:
                                    "search__close-btn search-close-btn",
                                  children: (0, a.jsxs)("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, a.jsx)("path", {
                                        d: "M17 1L1 17",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                      }),
                                      (0, a.jsx)("path", {
                                        d: "M1 1L17 17",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "search__form",
                            children: (0, a.jsx)("form", {
                              onSubmit: (e) => e.preventDefault(),
                              children: (0, a.jsxs)("div", {
                                className: "search__input",
                                children: [
                                  (0, a.jsx)("input", {
                                    className: "search-input-field",
                                    type: "text",
                                    placeholder: "Type here to search...",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "search-focus-border",
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "submit",
                                    children: (0, a.jsxs)("svg", {
                                      width: "20",
                                      height: "20",
                                      viewBox: "0 0 20 20",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        (0, a.jsx)("path", {
                                          d: "M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                        (0, a.jsx)("path", {
                                          d: "M19.0002 19.0002L17.2002 17.2002",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "body-overlay ".concat(s ? "apply" : ""),
                onClick: () => i(!1),
                style: { cursor: "pointer" },
              }),
            ],
          });
        });
    },
    4336: function (e, s, i) {
      "use strict";
      i.r(s);
      var a = i(7437),
        l = i(2265),
        t = i(7095),
        r = i(6044);
      s.default = (e) => {
        let { number: s, text: i, add_style: c } = e,
          [n, d] = (0, l.useState)(!1),
          o = (e) => {
            e && !n && d(!0);
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(t.ZP, {
            start: n ? 0 : void 0,
            end: s,
            duration: 2,
            children: (e) => {
              let { countUpRef: s } = e;
              return (0, a.jsxs)("div", {
                className: "d-inline",
                children: [
                  (0, a.jsx)("strong", { ref: s }),
                  (0, a.jsx)(r.df, {
                    as: "span",
                    onChange: (e) => o(e),
                    children: i && (0, a.jsx)("span", { children: i }),
                  }),
                ],
              });
            },
          }),
        });
      };
    },
    9662: function (e, s, i) {
      "use strict";
      var a = i(7437    ),
        l = i(7138),
        t = i(2265),
        r = i(9108),
        c = i(3267),
        n = i(5540);
      s.default = () => {
        let [e, s] = (0, t.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "it-slider__wrapper z-index fix",
              children: [
                (0, a.jsxs)(c.tq, {
                  loop: !0,
                  slidesPerView: 1,
                  spaceBetween: 0,
                  effect: "fade",
                  autoplay: !0,
                  modules: [n.pt, n.xW, n.tl],
                  pagination: { el: ".it-slider-dots", clickable: !0 },
                  breakpoints: {
                    1200: { slidesPerView: 1 },
                    992: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    576: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                  },
                  className: "swiper-container it-slider__active p-relative",
                  children: [
                    (0, a.jsx)(c.o5, {
                      className: "swiper-slide",
                      children: (0, a.jsxs)("div", {
                        className:
                          "it-slider__area it-slider__height it-slider__overlay p-relative",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-slider__shape-1",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/slider/slider-shape-3-2.png",
                              alt: "rk-theme",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-slider__shape-2",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/slider/shape-4-2.png",
                              alt: "rk-theme",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-slider__bg",
                            style: {
                              backgroundImage:
                                "url(/assets/img/slider/slider-1-1.png)",
                            },
                          }),
                          (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsx)("div", {
                                className: "col-xl-12",
                                children: (0, a.jsxs)("div", {
                                  className: "it-slider__content-wrap",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "it-slider__content",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "it-slider-subtitle",
                                          children:
                                            "SOLUTION FOR YOUR BUSINESS",
                                        }),
                                        (0, a.jsxs)("h2", {
                                          className: "it-slider-title pb-30",
                                          children: [
                                            "MS Next — Your One-Stop Partner for",
                                            (0, a.jsx)("br", {}),
                                            " Everything Mystery Shopping.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "it-slider__button d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)(l.default, {
                                          className: "it-btn",
                                          href: "/about-us",
                                          children: (0, a.jsx)("span", {
                                            children: "discover more",
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "it-slider__icon-box d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("a", {
                                              className: "popup-video",
                                              onClick: () => s(!0),
                                              style: { cursor: "pointer" },
                                              children: (0, a.jsx)("i", {
                                                className:
                                                  "fa-sharp fa-light fa-play",
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "it-slider__icon-text",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  "Watch our ",
                                                  (0, a.jsx)("br", {}),
                                                  " videos",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(c.o5, {
                      className: "swiper-slide",
                      children: (0, a.jsxs)("div", {
                        className:
                          "it-slider__area it-slider__height p-relative it-slider__overlay",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-slider__shape-1",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/slider/slider-shape-3-2.png",
                              alt: "rk-theme",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-slider__shape-2",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/slider/shape-4-2.png",
                              alt: "rk-theme",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-slider__bg ",
                            style: {
                              backgroundImage:
                                "url(/assets/img/slider/slider-1-3.png)",
                            },
                          }),
                          (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsx)("div", {
                                className: "col-xl-12",
                                children: (0, a.jsxs)("div", {
                                  className: "it-slider__content-wrap",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "it-slider__content",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "it-slider-subtitle",
                                          children:
                                            "SOLUTION FOR YOUR BUSINESS",
                                        }),
                                        (0, a.jsxs)("h2", {
                                          className: "it-slider-title pb-30",
                                          children: [
                                            "MS Next — Your One-Stop Partner for",
                                            (0, a.jsx)("br", {}),
                                            " Everything Mystery Shopping.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "it-slider__button d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)(l.default, {
                                          className: "it-btn",
                                          href: "/about-us",
                                          children: (0, a.jsx)("span", {
                                            children: "discover more",
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "it-slider__icon-box d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("a", {
                                              className: "popup-video",
                                              onClick: () => s(!0),
                                              style: { cursor: "pointer" },
                                              children: (0, a.jsx)("i", {
                                                className:
                                                  "fa-sharp fa-light fa-play",
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "it-slider__icon-text",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  "Watch our ",
                                                  (0, a.jsx)("br", {}),
                                                  " videos",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(c.o5, {
                      className: "swiper-slide",
                      children: (0, a.jsxs)("div", {
                        className:
                          "it-slider__area it-slider__height it-slider__overlay p-relative",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-slider__shape-1",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/slider/slider-shape-3-2.png",
                              alt: "rk-theme",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-slider__shape-2",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/slider/shape-4-2.png",
                              alt: "rk-theme",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-slider__bg",
                            style: {
                              backgroundImage:
                                "url(/assets/img/slider/slider-1-2.png)",
                            },
                          }),
                          (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsx)("div", {
                                className: "col-xl-12",
                                children: (0, a.jsxs)("div", {
                                  className: "it-slider__content-wrap",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "it-slider__content",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "it-slider-subtitle",
                                          children:
                                            "SOLUTION FOR YOUR BUSINESS",
                                        }),
                                        (0, a.jsxs)("h2", {
                                          className: "it-slider-title pb-30",
                                          children: [
                                            "MS Next — Your One-Stop Partner for",
                                            (0, a.jsx)("br", {}),
                                            " Everything Mystery Shopping.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "it-slider__button d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)(l.default, {
                                          className: "it-btn",
                                          href: "/about-us",
                                          children: (0, a.jsx)("span", {
                                            children: "discover more",
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "it-slider__icon-box d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("a", {
                                              className: "popup-video",
                                              onClick: () => s(!0),
                                              style: { cursor: "pointer" },
                                              children: (0, a.jsx)("i", {
                                                className:
                                                  "fa-sharp fa-light fa-play",
                                              }),
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "it-slider__icon-text",
                                              children: (0, a.jsxs)("span", {
                                                children: [
                                                  "Watch our ",
                                                  (0, a.jsx)("br", {}),
                                                  " videos",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: "it-slider-dots" }),
              ],
            }),
            (0, a.jsx)(r.Z, {
              isVideoOpen: e,
              setIsVideoOpen: s,
              videoId: "rhu7LAnc_kA",
            }),
          ],
        });
      };
    },
    9336: function (e, s, i) {
      "use strict";
      var a = i(7437),
        l = i(7138),
        t = i(2265);
      s.default = () => (
        (0, t.useEffect)(() => {
          if (window.matchMedia("(min-width: 768px)").matches) {
            let e = document.querySelectorAll(".col-custom");
            e.forEach((i, a) => {
              i.addEventListener("mouseenter", () => {
                s(e), i.classList.add("active");
              }),
                2 === a && i.classList.add("active");
            });
            let s = (e) => {
              e.forEach((e) => {
                e.classList.remove("active");
              });
            };
          } else
            document.querySelectorAll(".col-custom").forEach((e) => {
              e.classList.add("active");
            });
        }, []),
        (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "it-project__area pb-100 fix",
            children: (0, a.jsxs)("div", {
              className: "container-fluid",
              children: [
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-xl-12",
                    children: (0, a.jsxs)("div", {
                      className: "it-project__section-title text-center mb-45",
                      children: [
                        (0, a.jsx)("span", {
                          className: "it-section-subtitle",
                          children: "OUR SHOWCASE",
                        }),
                        (0, a.jsx)("h4", {
                          className: "it-section-title",
                          children: "Check Our Latest Projects",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "row-custom",
                  children: [
                    (0, a.jsx)("div", {
                      className: "col-custom",
                      children: (0, a.jsxs)("div", {
                        className: "it-panel-item-box p-relative",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-panel-item",
                            children: (0, a.jsx)("div", {
                              className: "it-panel-content",
                              children: (0, a.jsx)("img", {
                                src: "assets/img/project/prroject-big.jpg",
                                alt: "rk-theme",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-panel-item-2",
                            children: (0, a.jsxs)("div", {
                              className: "it-panel-content-2",
                              children: [
                                (0, a.jsx)(l.default, {
                                  href: "/project-details",
                                  children: (0, a.jsx)("h4", {
                                    className: "it-panel-title-2",
                                    children: "Digital Solution",
                                  }),
                                }),
                                (0, a.jsx)("span", { children: "idea" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-custom",
                      children: (0, a.jsxs)("div", {
                        className: "it-panel-item-box p-relative",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-panel-item",
                            children: (0, a.jsx)("div", {
                              className: "it-panel-content",
                              children: (0, a.jsx)("img", {
                                src: "assets/img/project/prroject-big-4.jpg",
                                alt: "rk-theme",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-panel-item-2",
                            children: (0, a.jsxs)("div", {
                              className: "it-panel-content-2",
                              children: [
                                (0, a.jsx)(l.default, {
                                  href: "/project-details",
                                  children: (0, a.jsx)("h4", {
                                    className: "it-panel-title-2",
                                    children: "Digital Solution",
                                  }),
                                }),
                                (0, a.jsx)("span", { children: "idea" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-custom",
                      children: (0, a.jsxs)("div", {
                        className: "it-panel-item-box p-relative",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-panel-item",
                            children: (0, a.jsx)("div", {
                              className: "it-panel-content",
                              children: (0, a.jsx)("img", {
                                src: "assets/img/project/prroject-big-2.jpg",
                                alt: "rk-theme",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-panel-item-2",
                            children: (0, a.jsxs)("div", {
                              className: "it-panel-content-2",
                              children: [
                                (0, a.jsx)(l.default, {
                                  href: "/project-details",
                                  children: (0, a.jsx)("h4", {
                                    className: "it-panel-title-2",
                                    children: "Digital Solution",
                                  }),
                                }),
                                (0, a.jsx)("span", { children: "idea" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "col-custom",
                      children: (0, a.jsxs)("div", {
                        className: "it-panel-item-box p-relative",
                        children: [
                          (0, a.jsx)("div", {
                            className: "it-panel-item",
                            children: (0, a.jsx)("div", {
                              className: "it-panel-content",
                              children: (0, a.jsx)("img", {
                                src: "assets/img/project/prroject-big-3.jpg",
                                alt: "rk-theme",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-panel-item-2",
                            children: (0, a.jsxs)("div", {
                              className: "it-panel-content-2",
                              children: [
                                (0, a.jsx)(l.default, {
                                  href: "/project-details",
                                  children: (0, a.jsx)("h4", {
                                    className: "it-panel-title-2",
                                    children: "Digital Solution",
                                  }),
                                }),
                                (0, a.jsx)("span", { children: "idea" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      );
    },
    5347: function (e, s, i) {
      "use strict";
      var a = i(7437);
      i(2265);
      var l = i(5540),
        t = i(3267);
      s.default = () =>
        (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "it-testimonial__area it-testimonial__space",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-xl-12",
                    children: (0, a.jsxs)("div", {
                      className: "it-testimonial__section-box text-center",
                      children: [
                        (0, a.jsx)("span", {
                          className: "it-section-subtitle",
                          children: "OUR REVIEWS",
                        }),
                        (0, a.jsx)("h4", {
                          className: "it-section-title",
                          children: "Our Client Testimonials",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "row",
                  children: (0, a.jsx)("div", {
                    className: "col-xl-12",
                    children: (0, a.jsx)("div", {
                      className: "it-testimonial__wrapper",
                      children: (0, a.jsxs)(t.tq, {
                        loop: !0,
                        slidesPerView: 2,
                        spaceBetween: 30,
                        autoplay: !0,
                        modules: [l.pt, l.tl],
                        pagination: {
                          el: ".testimonial-slider-dots",
                          clickable: !0,
                        },
                        breakpoints: {
                          1200: { slidesPerView: 2 },
                          992: { slidesPerView: 2 },
                          768: { slidesPerView: 1 },
                          576: { slidesPerView: 1 },
                          0: { slidesPerView: 1 },
                        },
                        className: "swiper-container it-testimonial__active",
                        children: [
                          (0, a.jsx)(t.o5, {
                            className: "swiper-slide",
                            children: (0, a.jsxs)("div", {
                              className:
                                "it-testimonial__item text-center p-relative",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "it-testimonial__avatar",
                                  children: (0, a.jsx)("img", {
                                    src: "assets/img/testimonial/author-1-1.png",
                                    alt: "rk-theme",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "it-testimonial__author-info",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "it-testimonial__author-name",
                                      children: "Hazzle Hood",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "it-testimonial__star",
                                      children: [
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        "Lorem ipsum dolor sit amet, consectetur adipisc ",
                                        (0, a.jsx)("br", {}),
                                        " elit,sed do eiusmod tempor incididunt labmagna ",
                                        (0, a.jsx)("br", {}),
                                        "aliqua. Quis ipsum suspendigravida.Risus",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(t.o5, {
                            className: "swiper-slide",
                            children: (0, a.jsxs)("div", {
                              className:
                                "it-testimonial__item p-relative text-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "it-testimonial__avatar",
                                  children: (0, a.jsx)("img", {
                                    src: "assets/img/testimonial/author-1-2.png",
                                    alt: "rk-theme",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "it-testimonial__author-info",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "it-testimonial__author-name",
                                      children: "Devid Roko",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "it-testimonial__star",
                                      children: [
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        "Lorem ipsum dolor sit amet, consectetur adipisc ",
                                        (0, a.jsx)("br", {}),
                                        " elit,sed do eiusmod tempor incididunt labmagna ",
                                        (0, a.jsx)("br", {}),
                                        "aliqua. Quis ipsum suspendigravida.Risus",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(t.o5, {
                            className: "swiper-slide",
                            children: (0, a.jsxs)("div", {
                              className:
                                "it-testimonial__item p-relative text-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "it-testimonial__avatar",
                                  children: (0, a.jsx)("img", {
                                    src: "assets/img/testimonial/author-1-3.png",
                                    alt: "rk-theme",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "it-testimonial__author-info",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "it-testimonial__author-name",
                                      children: "Lunna Baily",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "it-testimonial__star",
                                      children: [
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                        (0, a.jsx)("i", {
                                          className:
                                            "fa-sharp fa-solid fa-star",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        "Lorem ipsum dolor sit amet, consectetur adipisc ",
                                        (0, a.jsx)("br", {}),
                                        " elit,sed do eiusmod tempor incididunt labmagna ",
                                        (0, a.jsx)("br", {}),
                                        "aliqua. Quis ipsum suspendigravida.Risus",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "testimonial-slider-dots pt-50 text-center",
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
    },
    1315: function (e, s, i) {
      "use strict";
      var a = i(7437),
        l = i(9108),
        t = i(7138),
        r = i(2265);
      s.default = () => {
        let [e, s] = (0, r.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "it-video__area it-video__space p-relative grey-bg",
              children: [
                (0, a.jsx)("div", {
                  className: "it-video__bg",
                  style: {
                    backgroundImage: "url(/assets/img/video/video-1-1.png)",
                  },
                  children: (0, a.jsx)("div", {
                    className: "it-video__bg-icon",
                    children: (0, a.jsx)("a", {
                      className: "popup-video",
                      onClick: () => s(!0),
                      style: { cursor: "pointer" },
                      children: (0, a.jsx)("i", {
                        className: "fa-sharp fa-solid fa-play",
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("div", {
                      className: "col-xl-7 wow itfadeLeft",
                      "data-wow-duration": ".9s",
                      "data-wow-delay": ".5s",
                      children: (0, a.jsxs)("div", {
                        className: "it-video__left-box z-index-5",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "it-video__section-box",
                            children: [
                              (0, a.jsx)("span", {
                                className: "it-section-subtitle",
                                children: "WHAT ELSE HERE",
                              }),
                              (0, a.jsxs)("h4", {
                                className: "it-section-title pb-20",
                                children: [
                                  "The Best Everything Mystery Shopping. for ",
                                  (0, a.jsx)("br", {}),
                                  " Our Clients",
                                ],
                              }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean ",
                                  (0, a.jsx)("br", {}),
                                  "sollicitudin, lorem is simply free text quis bibendum. There are many ",
                                  (0, a.jsx)("br", {}),
                                  "variations of passages of availabl",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "it-video__content-box pb-40",
                            children: (0, a.jsx)("div", {
                              className: "it-video__content p-relative",
                              children: (0, a.jsxs)("ul", {
                                children: [
                                  (0, a.jsxs)("li", {
                                    children: [
                                      (0, a.jsx)("i", {
                                        className: "flaticon-check-mark",
                                      }),
                                      "Deliver Awesome Idea",
                                    ],
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      (0, a.jsx)("i", {
                                        className: "flaticon-check-mark",
                                      }),
                                      "Work With Global Brands",
                                    ],
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      (0, a.jsx)("i", {
                                        className: "flaticon-check-mark",
                                      }),
                                      "Deliver Awesome Idea",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "it-video__button",
                            children: (0, a.jsx)(t.default, {
                              className: "it-btn hover-2",
                              href: "/about-us",
                              children: (0, a.jsx)("span", {
                                children: "discover more",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(l.Z, {
              isVideoOpen: e,
              setIsVideoOpen: s,
              videoId: "rhu7LAnc_kA",
            }),
          ],
        });
      };
    },
    3682: function (e, s, i) {
      "use strict";
      var a = i(7437),
        l = i(7138),
        t = i(3812),
        r = i(2265),
        c = i(7003),
        n = i(5259),
        d = i(5126);
      s.default = () => {
        let { sticky: e } = (0, c.Z)(),
          [s, i] = (0, r.useState)(!1),
          [o, h] = (0, r.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("header", {
              className: "it-header-height",
              children: [
                (0, a.jsx)("div", {
                  className: "it-header-top__area theme-bg pt-10 pb-10",
                  children: (0, a.jsx)("div", {
                    className: "container container-large",
                    children: (0, a.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-xl-4 col-lg-3 d-none d-lg-block",
                          children: (0, a.jsxs)("div", {
                            className: "it-header-top__social",
                            children: [
                              (0, a.jsx)("a", {
                                href: "#",
                                children: (0, a.jsx)("i", {
                                  className: "fa-brands fa-facebook-f",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "#",
                                children: (0, a.jsx)("i", {
                                  className: "fa-brands fa-twitter",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "#",
                                children: (0, a.jsx)("i", {
                                  className: "fa-brands fa-instagram",
                                }),
                              }),
                              (0, a.jsx)("a", {
                                href: "#",
                                children: (0, a.jsx)("i", {
                                  className: "fa-brands fa-linkedin-in",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-xl-6 col-lg-7 col-md-8 col-sm-6",
                          children: (0, a.jsxs)("div", {
                            className:
                              "it-header-top__left-box text-sm-start text-center",
                            children: [
                              (0, a.jsxs)("span", {
                                children: [
                                  (0, a.jsx)("i", {
                                    className: "fa-light fa-envelope",
                                  }),
                                  (0, a.jsx)("a", {
                                    href: "mailto:info.rk-theme.com",
                                    children: "info.rktheme.com",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("span", {
                                className: "d-none d-md-inline-block",
                                children: [
                                  (0, a.jsx)("i", {
                                    className: "fa-light fa-phone-rotary",
                                  }),
                                  (0, a.jsx)("a", {
                                    href: "tel:+999008756",
                                    children: "+ 999008756",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "col-xl-2 col-lg-2 col-md-4 col-sm-6 d-none d-sm-block",
                          children: (0, a.jsxs)("div", {
                            className: "it-header-top__right-box text-end",
                            children: [
                              (0, a.jsx)("button", {
                                onClick: () => i(!s),
                                className: "search-open-btn",
                                children: (0, a.jsx)("i", {
                                  className:
                                    "fa-sharp fa-light fa-magnifying-glass",
                                }),
                              }),
                              (0, a.jsx)(l.default, {
                                href: "/cart",
                                children: (0, a.jsx)("i", {
                                  className:
                                    "fa-sharp fa-light fa-cart-shopping",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  id: "header-sticky",
                  className: "it-header__area ".concat(
                    e ? "header-sticky" : ""
                  ),
                  children: (0, a.jsx)("div", {
                    className: "container container-large",
                    children: (0, a.jsxs)("div", {
                      className: "it-header__wrap p-relative",
                      children: [
                        (0, a.jsx)("div", {
                          className: "it-header__logo d-none d-xl-block",
                          children: (0, a.jsx)(l.default, {
                            href: "/",
                            children: (0, a.jsx)("img", {
                              src: "assets/img/logo/white-logo.png",
                              alt: "rk-theme",
                            }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "row align-items-center",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "col-xl-10 col-lg-6 col-md-6 col-6",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "it-header__menu d-none d-xl-block text-center",
                                  children: (0, a.jsx)("nav", {
                                    className: "it-menu-content",
                                    children: (0, a.jsx)(t.Z, {}),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "it-header__main-logo d-xl-none",
                                  children: (0, a.jsx)(l.default, {
                                    href: "/",
                                    children: (0, a.jsx)("img", {
                                      src: "assets/img/logo/black-logo.png",
                                      alt: "rk-theme",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "col-xl-2 col-lg-6 col-md-6 col-6",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "it-header__right-box d-flex align-items-center justify-content-end",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "it-header__btn d-none d-md-block",
                                    children: (0, a.jsx)("a", {
                                      className: "it-btn",
                                      href: "#",
                                      children: (0, a.jsx)("span", {
                                        children: "Get solution",
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "it-header__bar d-xl-none",
                                    children: (0, a.jsx)("button", {
                                      className: "it-menu-bar",
                                      children: (0, a.jsx)("span", {
                                        onClick: () => h(!o),
                                        children: (0, a.jsx)("i", {
                                          className: "fa-regular fa-bars",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(n.Z, { open: s, setOpen: i }),
            (0, a.jsx)(d.Z, { openSidebar: o, setOpenSidebar: h }),
          ],
        });
      };
    },
    9108: function (e, s, i) {
      "use strict";
      var a = i(7437),
        l = i(5844);
      s.Z = (e) => {
        let { isVideoOpen: s, setIsVideoOpen: i, videoId: t = "bgMEvrd2E" } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(l.Z, {
            channel: "youtube",
            isOpen: s,
            videoId: t,
            onClose: () => i(!1),
          }),
        });
      };
    },
    6466: function (e, s) {
      "use strict";
      s.Z = {
        src: "/_next/static/media/brand-1-1.e0d8a9b6.png",
        height: 37,
        width: 96,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEUDFhkDFxkAAAADFRkEFxkCFxkFFxoDFxsEFhgDGBh2nbZYAAAACnRSTlOLmwKEdWMxQnxSo+KuRgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJwFwYcBACAMwzA7HcD/DyNRTLITKLv1cVjl8gED1ABIK5dz+wAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    5693: function (e, s) {
      "use strict";
      s.Z = {
        src: "/_next/static/media/brand-1-2.f9f47762.png",
        height: 61,
        width: 99,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEUCFhgDFhlMaXEDFhoCFxkDFhkDFhkDFxkAABYDFRkAFxcDGBsAFRUGGxsPTHMGAAAADnRSTlM8gQCYXJKtbAZHIEoMJQny1NgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicBcGHAQAwDMMg2Rnd/79bwObOsc3MSikHdERHFwoVnAXo2fYHD5kAon9gNJ0AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    3964: function (e, s) {
      "use strict";
      s.Z = {
        src: "/_next/static/media/brand-1-3.77ea6629.png",
        height: 33,
        width: 118,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUDFxkDFhkFFRoEFxkAGRkEFhoEFxuWVQdmAAAAB3RSTlNSYS9zHjk3uBzfUQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGBgZmZmYGRkYGRgYWJjYmMCAAD7ACMrtkd5AAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    6208: function (e, s) {
      "use strict";
      s.Z = {
        src: "/_next/static/media/brand-1-4.0d2d5318.png",
        height: 34,
        width: 98,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEUAExoDFhkDFhkDFhkEFRkCFhkDFhkDFxkFFBoAEx0DFhm+gZ7lAAAAC3RSTlMNeaa4bFWHljEaz9eatKwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhSURBVHicBcGHAQAwCMMwJ6yW/w9GYho+QK4djkLZKukdBEsAUREayM8AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    6956: function (e, s) {
      "use strict";
      s.Z = {
        src: "/_next/static/media/brand-1-5.90266894.png",
        height: 42,
        width: 96,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEUCFRkDFxkDFhkDFhkDFhoDFhkEFxoCFhkDFxoDFhgDGRwAFBTalSneAAAADHRSTlNmh5mOpXZ9Xrs9UBmQl6AsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nAXBgQEAIAjDsI6BgP7/rwlrHEfBy2h1JTupuScAWwUfCeUAgEXREAwAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
  },
  function (e) {
    e.O(0, [892, 493, 114, 844, 344, 971, 23, 744], function () {
      return e((e.s = 886));
    }),
      (_N_E = e.O());
  },
]);
