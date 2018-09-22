(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  Array(157).concat([
    function(t, e, n) {
      'use strict';
      var r = n(36);
      (e.__esModule = !0),
        (e.withPrefix = d),
        (e.navigateTo = e.replace = e.push = e.navigate = e.default = void 0);
      var i = r(n(163)),
        a = r(n(180)),
        s = r(n(12)),
        o = r(n(56)),
        p = r(n(38)),
        h = r(n(8)),
        c = r(n(0)),
        u = n(14),
        l = n(160);
      function d(t) {
        return (function(t) {
          return t.replace(/\/+/g, '/');
        })('/' + t);
      }
      var f = {
          activeClassName: h.default.string,
          activeStyle: h.default.object,
        },
        g = (function(t) {
          function e(e) {
            var n;
            (n = t.call(this) || this),
              (0, p.default)(
                (0, o.default)((0, o.default)(n)),
                'defaultGetProps',
                function(t) {
                  return t.isCurrent
                    ? {
                        className: [n.props.className, n.props.activeClassName]
                          .filter(Boolean)
                          .join(' '),
                        style: (0, a.default)(
                          {},
                          n.props.style,
                          n.props.activeStyle
                        ),
                      }
                    : null;
                }
              );
            var r = !1;
            'undefined' != typeof window &&
              window.IntersectionObserver &&
              (r = !0);
            var i = e.location;
            return (
              (n.state = { IOSupported: r, location: i }),
              (n.handleRef = n.handleRef.bind(
                (0, o.default)((0, o.default)(n))
              )),
              n
            );
          }
          (0, s.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidUpdate = function(t, e) {
              this.props.to === t.to ||
                this.state.IOSupported ||
                ___loader.enqueue((0, l.parsePath)(this.props.to).pathname);
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue((0, l.parsePath)(this.props.to).pathname);
            }),
            (n.handleRef = function(t) {
              var e,
                n,
                r,
                i = this;
              this.props.innerRef && this.props.innerRef(t),
                this.state.IOSupported &&
                  t &&
                  ((e = t),
                  (n = function() {
                    ___loader.enqueue((0, l.parsePath)(i.props.to).pathname);
                  }),
                  (r = new window.IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e));
            }),
            (n.render = function() {
              var t = this,
                e = this.props,
                n = e.to,
                r = e.getProps,
                s = void 0 === r ? this.defaultGetProps : r,
                o = e.onClick,
                p = e.onMouseEnter,
                h = e.location,
                f = (e.activeClassName,
                e.activeStyle,
                e.ref,
                e.innerRef,
                e.state),
                g = (0, i.default)(e, [
                  'to',
                  'getProps',
                  'onClick',
                  'onMouseEnter',
                  'location',
                  'activeClassName',
                  'activeStyle',
                  'ref',
                  'innerRef',
                  'state',
                ]),
                m = d(n);
              return c.default.createElement(
                u.Link,
                (0, a.default)(
                  {
                    to: m,
                    state: f,
                    getProps: s,
                    innerRef: this.handleRef,
                    onMouseEnter: function(t) {
                      p && p(t),
                        ___loader.hovering((0, l.parsePath)(n).pathname);
                    },
                    onClick: function(e) {
                      if (
                        (o && o(e),
                        !(
                          0 !== e.button ||
                          t.props.target ||
                          e.defaultPrevented ||
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        ))
                      ) {
                        e.preventDefault();
                        var n = (0, l.parsePath)(m),
                          r = n.pathname,
                          i = n.hash;
                        if (r === h.pathname || !r) {
                          var a = i
                            ? document.getElementById(i.substr(1))
                            : null;
                          null !== a
                            ? a.scrollIntoView()
                            : window.scrollTo(0, 0);
                        }
                        v(m, { state: f });
                      }
                      return !0;
                    },
                  },
                  g
                )
              );
            }),
            e
          );
        })(c.default.Component);
      g.propTypes = (0, a.default)({}, f, {
        innerRef: h.default.func,
        onClick: h.default.func,
        to: h.default.string.isRequired,
      });
      var m,
        y = ((m = g),
        function(t) {
          return c.default.createElement(u.Location, null, function(e) {
            var n = e.location;
            return c.default.createElement(
              m,
              (0, a.default)({ location: n }, t)
            );
          });
        });
      e.default = y;
      var v = function(t, e) {
        window.___navigate(t, e);
      };
      e.navigate = v;
      var b = function(t) {
        console.warn(
          'The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___push(t);
      };
      (e.push = b),
        (e.replace = function(t) {
          console.warn(
            'The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
          ),
            window.___replace(t);
        }),
        (e.navigateTo = function(t) {
          return (
            console.warn(
              'The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'
            ),
            b(t)
          );
        });
    },
    function(t, e, n) {
      var r = n(27).f,
        i = Function.prototype,
        a = /^\s*function ([^ (]*)/;
      'name' in i ||
        (n(17) &&
          r(i, 'name', {
            configurable: !0,
            get: function() {
              try {
                return ('' + this).match(a)[1];
              } catch (t) {
                return '';
              }
            },
          }));
    },
    function(t, e, n) {
      var r = n(35),
        i = n(54);
      n(194)('keys', function() {
        return function(t) {
          return i(r(t));
        };
      });
    },
    ,
    function(t, e, n) {
      'use strict';
      var r,
        i = n(0),
        a = n.n(i),
        s = n(86),
        o = n(8),
        p = n.n(o),
        h = n(63),
        c = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,
        u = Object(h.a)(c.test.bind(c)),
        l = '__EMOTION_THEMING__',
        d = (((r = {})[l] = p.a.object), r),
        f = u,
        g = function(t) {
          return 'theme' !== t && 'innerRef' !== t;
        },
        m = function() {
          return !0;
        },
        y = function(t, e) {
          for (var n = 2, r = arguments.length; n < r; n++) {
            var i = arguments[n],
              a = void 0;
            for (a in i) t(a) && (e[a] = i[a]);
          }
          return e;
        };
      n.d(e, 'a', function() {
        return s.css;
      }),
        (function(t, e) {
          var n = function(r, i) {
            var a, s, o, p;
            void 0 !== i &&
              ((a = i.e),
              (s = i.label),
              (o = i.target),
              (p =
                r.__emotion_forwardProp && i.shouldForwardProp
                  ? function(t) {
                      return (
                        r.__emotion_forwardProp(t) && i.shouldForwardProp(t)
                      );
                    }
                  : i.shouldForwardProp));
            var h = r.__emotion_real === r,
              c = (void 0 === a && h && r.__emotion_base) || r;
            return (
              'function' != typeof p &&
                (p =
                  'string' == typeof c &&
                  c.charAt(0) === c.charAt(0).toLowerCase()
                    ? f
                    : g),
              function() {
                var u = arguments,
                  f =
                    h && void 0 !== r.__emotion_styles
                      ? r.__emotion_styles.slice(0)
                      : [];
                if ((void 0 !== s && f.push('label:' + s + ';'), void 0 === a))
                  if (null == u[0] || void 0 === u[0].raw) f.push.apply(f, u);
                  else {
                    f.push(u[0][0]);
                    for (var g = u.length, v = 1; v < g; v++)
                      f.push(u[v], u[0][v]);
                  }
                var b = (function(n) {
                  var r, i;
                  function s() {
                    return n.apply(this, arguments) || this;
                  }
                  (i = n),
                    ((r = s).prototype = Object.create(i.prototype)),
                    (r.prototype.constructor = r),
                    (r.__proto__ = i);
                  var h = s.prototype;
                  return (
                    (h.componentWillMount = function() {
                      void 0 !== this.context[l] &&
                        (this.unsubscribe = this.context[l].subscribe(
                          function(t) {
                            this.setState({ theme: t });
                          }.bind(this)
                        ));
                    }),
                    (h.componentWillUnmount = function() {
                      void 0 !== this.unsubscribe &&
                        this.context[l].unsubscribe(this.unsubscribe);
                    }),
                    (h.render = function() {
                      var n = this.props,
                        r = this.state;
                      this.mergedProps = y(m, {}, n, {
                        theme: (null !== r && r.theme) || n.theme || {},
                      });
                      var i = '',
                        s = [];
                      return (
                        n.className &&
                          (i +=
                            void 0 === a
                              ? t.getRegisteredStyles(s, n.className)
                              : n.className + ' '),
                        (i +=
                          void 0 === a ? t.css.apply(this, f.concat(s)) : a),
                        void 0 !== o && (i += ' ' + o),
                        e.createElement(
                          c,
                          y(p, {}, n, { className: i, ref: n.innerRef })
                        )
                      );
                    }),
                    s
                  );
                })(e.Component);
                return (
                  (b.displayName =
                    void 0 !== s
                      ? s
                      : 'Styled(' +
                        ('string' == typeof c
                          ? c
                          : c.displayName || c.name || 'Component') +
                        ')'),
                  void 0 !== r.defaultProps &&
                    (b.defaultProps = r.defaultProps),
                  (b.contextTypes = d),
                  (b.__emotion_styles = f),
                  (b.__emotion_base = c),
                  (b.__emotion_real = b),
                  (b.__emotion_forwardProp = p),
                  Object.defineProperty(b, 'toString', {
                    value: function() {
                      return '.' + o;
                    },
                  }),
                  (b.withComponent = function(t, e) {
                    return n(t, void 0 !== e ? y(m, {}, i, e) : i).apply(
                      void 0,
                      f
                    );
                  }),
                  b
                );
              }
            );
          };
        })(s, a.a);
    },
    ,
    function(t, e) {
      t.exports = function(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      };
    },
    function(t, e, n) {
      var r = n(6);
      r(r.S + r.F, 'Object', { assign: n(190) });
    },
    function(t, e) {
      !(function(e) {
        'use strict';
        var n,
          r = Object.prototype,
          i = r.hasOwnProperty,
          a = 'function' == typeof Symbol ? Symbol : {},
          s = a.iterator || '@@iterator',
          o = a.asyncIterator || '@@asyncIterator',
          p = a.toStringTag || '@@toStringTag',
          h = 'object' == typeof t,
          c = e.regeneratorRuntime;
        if (c) h && (t.exports = c);
        else {
          (c = e.regeneratorRuntime = h ? t.exports : {}).wrap = _;
          var u = 'suspendedStart',
            l = 'suspendedYield',
            d = 'executing',
            f = 'completed',
            g = {},
            m = {};
          m[s] = function() {
            return this;
          };
          var y = Object.getPrototypeOf,
            v = y && y(y(O([])));
          v && v !== r && i.call(v, s) && (m = v);
          var b = (E.prototype = S.prototype = Object.create(m));
          (w.prototype = b.constructor = E),
            (E.constructor = w),
            (E[p] = w.displayName = 'GeneratorFunction'),
            (c.isGeneratorFunction = function(t) {
              var e = 'function' == typeof t && t.constructor;
              return (
                !!e &&
                (e === w || 'GeneratorFunction' === (e.displayName || e.name))
              );
            }),
            (c.mark = function(t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, E)
                  : ((t.__proto__ = E), p in t || (t[p] = 'GeneratorFunction')),
                (t.prototype = Object.create(b)),
                t
              );
            }),
            (c.awrap = function(t) {
              return { __await: t };
            }),
            k(C.prototype),
            (C.prototype[o] = function() {
              return this;
            }),
            (c.AsyncIterator = C),
            (c.async = function(t, e, n, r) {
              var i = new C(_(t, e, n, r));
              return c.isGeneratorFunction(e)
                ? i
                : i.next().then(function(t) {
                    return t.done ? t.value : i.next();
                  });
            }),
            k(b),
            (b[p] = 'Generator'),
            (b[s] = function() {
              return this;
            }),
            (b.toString = function() {
              return '[object Generator]';
            }),
            (c.keys = function(t) {
              var e = [];
              for (var n in t) e.push(n);
              return (
                e.reverse(),
                function n() {
                  for (; e.length; ) {
                    var r = e.pop();
                    if (r in t) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (c.values = O),
            (L.prototype = {
              constructor: L,
              reset: function(t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = n),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = n),
                  this.tryEntries.forEach(P),
                  !t)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      i.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = n);
              },
              stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;
                function r(r, i) {
                  return (
                    (o.type = 'throw'),
                    (o.arg = t),
                    (e.next = r),
                    i && ((e.method = 'next'), (e.arg = n)),
                    !!i
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var s = this.tryEntries[a],
                    o = s.completion;
                  if ('root' === s.tryLoc) return r('end');
                  if (s.tryLoc <= this.prev) {
                    var p = i.call(s, 'catchLoc'),
                      h = i.call(s, 'finallyLoc');
                    if (p && h) {
                      if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                      if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                    } else if (p) {
                      if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                    } else {
                      if (!h)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    i.call(r, 'finallyLoc') &&
                    this.prev < r.finallyLoc
                  ) {
                    var a = r;
                    break;
                  }
                }
                a &&
                  ('break' === t || 'continue' === t) &&
                  a.tryLoc <= e &&
                  e <= a.finallyLoc &&
                  (a = null);
                var s = a ? a.completion : {};
                return (
                  (s.type = t),
                  (s.arg = e),
                  a
                    ? ((this.method = 'next'), (this.next = a.finallyLoc), g)
                    : this.complete(s)
                );
              },
              complete: function(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), P(n), g;
                }
              },
              catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ('throw' === r.type) {
                      var i = r.arg;
                      P(n);
                    }
                    return i;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function(t, e, r) {
                return (
                  (this.delegate = {
                    iterator: O(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  'next' === this.method && (this.arg = n),
                  g
                );
              },
            });
        }
        function _(t, e, n, r) {
          var i = e && e.prototype instanceof S ? e : S,
            a = Object.create(i.prototype),
            s = new L(r || []);
          return (
            (a._invoke = (function(t, e, n) {
              var r = u;
              return function(i, a) {
                if (r === d) throw new Error('Generator is already running');
                if (r === f) {
                  if ('throw' === i) throw a;
                  return R();
                }
                for (n.method = i, n.arg = a; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var o = T(s, n);
                    if (o) {
                      if (o === g) continue;
                      return o;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if (r === u) throw ((r = f), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = d;
                  var p = x(t, e, n);
                  if ('normal' === p.type) {
                    if (((r = n.done ? f : l), p.arg === g)) continue;
                    return { value: p.arg, done: n.done };
                  }
                  'throw' === p.type &&
                    ((r = f), (n.method = 'throw'), (n.arg = p.arg));
                }
              };
            })(t, n, s)),
            a
          );
        }
        function x(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        function S() {}
        function w() {}
        function E() {}
        function k(t) {
          ['next', 'throw', 'return'].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t);
            };
          });
        }
        function C(t) {
          var e;
          this._invoke = function(n, r) {
            function a() {
              return new Promise(function(e, a) {
                !(function e(n, r, a, s) {
                  var o = x(t[n], t, r);
                  if ('throw' !== o.type) {
                    var p = o.arg,
                      h = p.value;
                    return h && 'object' == typeof h && i.call(h, '__await')
                      ? Promise.resolve(h.__await).then(
                          function(t) {
                            e('next', t, a, s);
                          },
                          function(t) {
                            e('throw', t, a, s);
                          }
                        )
                      : Promise.resolve(h).then(function(t) {
                          (p.value = t), a(p);
                        }, s);
                  }
                  s(o.arg);
                })(n, r, e, a);
              });
            }
            return (e = e ? e.then(a, a) : a());
          };
        }
        function T(t, e) {
          var r = t.iterator[e.method];
          if (r === n) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = n),
                T(t, e),
                'throw' === e.method)
              )
                return g;
              (e.method = 'throw'),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return g;
          }
          var i = x(r, t.iterator, e.arg);
          if ('throw' === i.type)
            return (
              (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), g
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
                (e.delegate = null),
                g)
              : a
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              g);
        }
        function A(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function L(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(A, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[s];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                a = function e() {
                  for (; ++r < t.length; )
                    if (i.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = n), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: n, done: !0 };
        }
      })(
        (function() {
          return this;
        })() || Function('return this')()
      );
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n(178);
      Object.defineProperty(e, 'MDXTag', {
        enumerable: !0,
        get: function() {
          return a(r).default;
        },
      });
      var i = n(176);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      Object.defineProperty(e, 'MDXProvider', {
        enumerable: !0,
        get: function() {
          return a(i).default;
        },
      });
    },
    function(t, e, n) {
      t.exports = n(193);
    },
    function(t, e) {
      function n(t, e, n, r, i, a, s) {
        try {
          var o = t[a](s),
            p = o.value;
        } catch (t) {
          return void n(t);
        }
        o.done ? e(p) : Promise.resolve(p).then(r, i);
      }
      t.exports = function(t) {
        return function() {
          var e = this,
            r = arguments;
          return new Promise(function(i, a) {
            var s = t.apply(e, r);
            function o(t) {
              n(s, i, a, o, p, 'next', t);
            }
            function p(t) {
              n(s, i, a, o, p, 'throw', t);
            }
            o(void 0);
          });
        };
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(6),
        i = n(30)(0),
        a = n(18)([].forEach, !0);
      r(r.P + r.F * !a, 'Array', {
        forEach: function(t) {
          return i(this, t, arguments[1]);
        },
      });
    },
    ,
    ,
    ,
    function(t, e, n) {
      (e.__esModule = !0), (e.Helmet = void 0);
      var r =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        i = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        a = u(n(0)),
        s = u(n(8)),
        o = u(n(181)),
        p = u(n(184)),
        h = n(187),
        c = n(177);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      var d,
        f,
        g,
        m = (0, o.default)(
          h.reducePropsToState,
          h.handleClientStateChange,
          h.mapStateOnServer
        )(function() {
          return null;
        }),
        y = ((d = m),
        (g = f = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ('object' != typeof e && 'function' != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            (function(t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, t),
            (e.prototype.shouldComponentUpdate = function(t) {
              return !(0, p.default)(this.props, t);
            }),
            (e.prototype.mapNestedChildrenToProps = function(t, e) {
              if (!e) return null;
              switch (t.type) {
                case c.TAG_NAMES.SCRIPT:
                case c.TAG_NAMES.NOSCRIPT:
                  return { innerHTML: e };
                case c.TAG_NAMES.STYLE:
                  return { cssText: e };
              }
              throw new Error(
                '<' +
                  t.type +
                  ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
              );
            }),
            (e.prototype.flattenArrayTypeChildren = function(t) {
              var e,
                n = t.child,
                i = t.arrayTypeChildren,
                a = t.newChildProps,
                s = t.nestedChildren;
              return r(
                {},
                i,
                (((e = {})[n.type] = [].concat(i[n.type] || [], [
                  r({}, a, this.mapNestedChildrenToProps(n, s)),
                ])),
                e)
              );
            }),
            (e.prototype.mapObjectTypeChildren = function(t) {
              var e,
                n,
                i = t.child,
                a = t.newProps,
                s = t.newChildProps,
                o = t.nestedChildren;
              switch (i.type) {
                case c.TAG_NAMES.TITLE:
                  return r(
                    {},
                    a,
                    (((e = {})[i.type] = o), (e.titleAttributes = r({}, s)), e)
                  );
                case c.TAG_NAMES.BODY:
                  return r({}, a, { bodyAttributes: r({}, s) });
                case c.TAG_NAMES.HTML:
                  return r({}, a, { htmlAttributes: r({}, s) });
              }
              return r({}, a, (((n = {})[i.type] = r({}, s)), n));
            }),
            (e.prototype.mapArrayTypeChildrenToProps = function(t, e) {
              var n = r({}, e);
              return (
                Object.keys(t).forEach(function(e) {
                  var i;
                  n = r({}, n, (((i = {})[e] = t[e]), i));
                }),
                n
              );
            }),
            (e.prototype.warnOnInvalidChildren = function(t, e) {
              return !0;
            }),
            (e.prototype.mapChildrenToProps = function(t, e) {
              var n = this,
                r = {};
              return (
                a.default.Children.forEach(t, function(t) {
                  if (t && t.props) {
                    var i = t.props,
                      a = i.children,
                      s = l(i, ['children']),
                      o = (0, h.convertReactPropstoHtmlAttributes)(s);
                    switch ((n.warnOnInvalidChildren(t, a), t.type)) {
                      case c.TAG_NAMES.LINK:
                      case c.TAG_NAMES.META:
                      case c.TAG_NAMES.NOSCRIPT:
                      case c.TAG_NAMES.SCRIPT:
                      case c.TAG_NAMES.STYLE:
                        r = n.flattenArrayTypeChildren({
                          child: t,
                          arrayTypeChildren: r,
                          newChildProps: o,
                          nestedChildren: a,
                        });
                        break;
                      default:
                        e = n.mapObjectTypeChildren({
                          child: t,
                          newProps: e,
                          newChildProps: o,
                          nestedChildren: a,
                        });
                    }
                  }
                }),
                (e = this.mapArrayTypeChildrenToProps(r, e))
              );
            }),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.children,
                n = l(t, ['children']),
                i = r({}, n);
              return (
                e && (i = this.mapChildrenToProps(e, i)),
                a.default.createElement(d, i)
              );
            }),
            i(e, null, [
              {
                key: 'canUseDOM',
                set: function(t) {
                  d.canUseDOM = t;
                },
              },
            ]),
            e
          );
        })(a.default.Component)),
        (f.propTypes = {
          base: s.default.object,
          bodyAttributes: s.default.object,
          children: s.default.oneOfType([
            s.default.arrayOf(s.default.node),
            s.default.node,
          ]),
          defaultTitle: s.default.string,
          defer: s.default.bool,
          encodeSpecialCharacters: s.default.bool,
          htmlAttributes: s.default.object,
          link: s.default.arrayOf(s.default.object),
          meta: s.default.arrayOf(s.default.object),
          noscript: s.default.arrayOf(s.default.object),
          onChangeClientState: s.default.func,
          script: s.default.arrayOf(s.default.object),
          style: s.default.arrayOf(s.default.object),
          title: s.default.string,
          titleAttributes: s.default.object,
          titleTemplate: s.default.string,
        }),
        (f.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
        (f.peek = d.peek),
        (f.rewind = function() {
          var t = d.rewind();
          return (
            t ||
              (t = (0, h.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: '',
                titleAttributes: {},
              })),
            t
          );
        }),
        g);
      (y.renderStatic = y.rewind), (e.Helmet = y), (e.default = y);
    },
    function(t, e, n) {
      'use strict';
      var r = n(6),
        i = n(29),
        a = n(188),
        s = ''.endsWith;
      r(r.P + r.F * n(189)('endsWith'), 'String', {
        endsWith: function(t) {
          var e = a(this, t, 'endsWith'),
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = i(e.length),
            o = void 0 === n ? r : Math.min(i(n), r),
            p = String(t);
          return s ? s.call(e, p, o) : e.slice(o - p.length, o) === p;
        },
      });
    },
    function(t, e, n) {
      'use strict';
      n.d(e, 'd', function() {
        return K;
      }),
        n.d(e, 'a', function() {
          return q;
        }),
        n.d(e, 'b', function() {
          return z;
        }),
        n.d(e, 'c', function() {
          return Y;
        });
      var r = n(195),
        i = (n(196), n(197), n(198), n(199), n(200)),
        a = n.n(i),
        s = n(201),
        o = n.n(s),
        p = n(0),
        h = n.n(p),
        c = n(204),
        u = n(213),
        l = n.n(u),
        d = n(8),
        f = n.n(d),
        g = function() {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return e.filter(Boolean).join(' ');
        },
        m = function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'jsx';
          return Object(r.highlight)(t, r.languages[e]);
        },
        y = /^((\t|  )+)/gm,
        v = /\t/g,
        b = function(t) {
          return t.replace(y, function(t, e) {
            return e.replace(v, '  ');
          });
        },
        _ = function(t) {
          return t.replace('\n', '<br>');
        },
        x = function(t) {
          return a()(t.replace(/<br>/gm, '\n').replace(/<\/?[^>]*>/gm, ''));
        };
      function S(t, e) {
        var n = window.getSelection();
        if (1 == arguments.length) {
          if (!n.rangeCount) return;
          var r = {},
            i = (c = n.getRangeAt(0)).cloneRange();
          return (
            i.selectNodeContents(t),
            i.setEnd(c.endContainer, c.endOffset),
            (r.end = i.toString().length),
            i.setStart(c.startContainer, c.startOffset),
            (r.start = r.end - i.toString().length),
            (r.atStart = 0 === i.startOffset),
            (r.commonAncestorContainer = i.commonAncestorContainer),
            (r.endContainer = i.endContainer),
            (r.startContainer = i.startContainer),
            r
          );
        }
        for (
          var a,
            s,
            p = e.end && e.end !== e.start,
            h = 0,
            c = document.createRange(),
            u = o()(t)
              .select(Node.TEXT_NODE)
              .revisit(!1),
            l = e.start > t.textContent.length ? t.textContent.length : e.start,
            d = e.end > t.textContent.length ? t.textContent.length : e.end,
            f = e.atStart;
          (a = u.next());

        ) {
          var g = h;
          if (
            ((h += a.textContent.length),
            !s && (f ? h > l : h >= l) && ((s = !0), c.setStart(a, l - g), !p))
          ) {
            c.collapse(!0), w(t, c);
            break;
          }
          if (p && h >= d) {
            c.setEnd(a, d - g), w(t, c);
            break;
          }
        }
      }
      function w(t, e) {
        var n = window.getSelection();
        t.focus(), n.removeAllRanges(), n.addRange(e);
      }
      var E = function(t, e) {
          var n = t.slice(0, e),
            r = n.lastIndexOf('\n') + 1;
          return n.slice(r);
        },
        k = /^\s+/,
        C = function(t, e) {
          var n = E(t, e).match(k);
          return null === n ? '' : n[0] || '';
        },
        T = /^(\t|  )*  $/,
        A = function(t, e) {
          var n = E(t, e);
          return T.test(n) ? 2 : 0;
        },
        P = function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        },
        L =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        O = function(t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        },
        R = function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        },
        I = function(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
        },
        N = (function(t) {
          function e() {
            var n, r;
            P(this, e);
            for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
              a[s] = arguments[s];
            return (
              (n = r = I(this, t.call.apply(t, [this].concat(a)))),
              (r.undoStack = []),
              (r.undoOffset = 0),
              (r.undoTimestamp = 0),
              (r.compositing = !1),
              (r.state = { html: '' }),
              (r.onRef = function(t) {
                r.ref = t;
              }),
              (r.getPlain = function() {
                if (r._innerHTML === r.ref.innerHTML) return r._plain;
                var t = x(_(r.ref.innerHTML));
                return (
                  (r._plain = t), (r._innerHTML = r.ref.innerHTML), r._plain
                );
              }),
              (r.recordChange = function(t, e) {
                if (t !== r.undoStack[r.undoStack.length - 1]) {
                  r.undoOffset > 0 &&
                    ((r.undoStack = r.undoStack.slice(0, -r.undoOffset)),
                    (r.undoOffset = 0));
                  var n = Date.now(),
                    i = { plain: t, selection: e };
                  n - r.undoTimestamp < 3e3
                    ? (r.undoStack[r.undoStack.length - 1] = i)
                    : (r.undoStack.push(i),
                      r.undoStack.length > 50 && r.undoStack.shift()),
                    (r.undoTimestamp = n);
                }
              }),
              (r.updateContent = function(t) {
                r.compositing ||
                  (r.setState({ html: m(t, r.props.language) }),
                  r.props.onChange && r.props.onChange(t));
              }),
              (r.restoreStackState = function(t) {
                var e = r.undoStack[r.undoStack.length - 1 - t],
                  n = e.plain,
                  i = e.selection;
                (r.selection = i), (r.undoOffset = t), r.updateContent(n);
              }),
              (r.undo = function() {
                var t = r.undoOffset + 1;
                t >= r.undoStack.length || r.restoreStackState(t);
              }),
              (r.redo = function() {
                var t = r.undoOffset - 1;
                t < 0 || r.restoreStackState(t);
              }),
              (r.onKeyDown = function(t) {
                if (
                  (r.props.onKeyDown && r.props.onKeyDown(t),
                  9 !== t.keyCode || r.props.ignoreTabKey)
                )
                  if (8 === t.keyCode) {
                    var e = S(r.ref),
                      n = e.start;
                    if (n !== e.end) return;
                    var i = A(r.getPlain(), n);
                    if (i <= 0) return;
                    for (var a = 0; a < i; a++)
                      document.execCommand('delete', !1);
                    t.preventDefault();
                  } else if (13 === t.keyCode) {
                    var s = S(r.ref).start,
                      o = C(r.getPlain(), s);
                    document.execCommand('insertHTML', !1, '\n' + o),
                      t.preventDefault();
                  } else
                    90 !== t.keyCode ||
                      t.metaKey === t.ctrlKey ||
                      t.altKey ||
                      (t.shiftKey ? r.redo() : r.undo(), t.preventDefault());
                else
                  document.execCommand('insertHTML', !1, '  '),
                    t.preventDefault();
              }),
              (r.onKeyUp = function(t) {
                if (
                  (r.props.onKeyUp && r.props.onKeyUp(t),
                  91 !== t.keyCode &&
                    93 !== t.keyCode &&
                    !t.ctrlKey &&
                    !t.metaKey)
                )
                  if (
                    (13 === t.keyCode && (r.undoTimestamp = 0),
                    (r.selection = S(r.ref)),
                    37 !== t.keyCode &&
                      38 !== t.keyCode &&
                      39 !== t.keyCode &&
                      40 !== t.keyCode)
                  ) {
                    var e = r.getPlain();
                    r.recordChange(e, r.selection), r.updateContent(e);
                  } else r.undoTimestamp = 0;
              }),
              (r.onCompositionStart = function(t) {
                r.props.onCompositionStart && r.props.onCompositionStart(t),
                  (r.compositing = !0);
              }),
              (r.onCompositionEnd = function(t) {
                r.props.onCompositionEnd && r.props.onCompositionEnd(t),
                  (r.compositing = !1);
              }),
              (r.onClick = function(t) {
                r.props.onClick && r.props.onClick(t),
                  (r.undoTimestamp = 0),
                  (r.selection = S(r.ref));
              }),
              I(r, n)
            );
          }
          return (
            O(e, t),
            (e.prototype.componentWillMount = function() {
              var t = m(b(this.props.code), this.props.language);
              this.setState({ html: t });
            }),
            (e.prototype.componentDidMount = function() {
              this.recordChange(this.getPlain()), (this.undoTimestamp = 0);
            }),
            (e.prototype.componentWillReceiveProps = function(t) {
              var e = t.code,
                n = t.language;
              if (e !== this.props.code || n !== this.props.language) {
                var r = m(b(e), n);
                this.setState({ html: r });
              }
            }),
            (e.prototype.componentDidUpdate = function() {
              var t = this.selection;
              t && S(this.ref, t);
            }),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.contentEditable,
                n = t.className,
                r = t.style,
                i = (t.code,
                t.ignoreTabKey,
                t.language,
                R(t, [
                  'contentEditable',
                  'className',
                  'style',
                  'code',
                  'ignoreTabKey',
                  'language',
                ])),
                a = this.state.html;
              return h.a.createElement(
                'pre',
                L({}, i, {
                  ref: this.onRef,
                  className: g('prism-code', n),
                  style: r,
                  spellCheck: 'false',
                  contentEditable: e,
                  onCompositionEnd: e ? this.onCompositionEnd : void 0,
                  onCompositionStart: e ? this.onCompositionStart : void 0,
                  onKeyDown: e ? this.onKeyDown : void 0,
                  onKeyUp: e ? this.onKeyUp : void 0,
                  onClick: e ? this.onClick : void 0,
                  dangerouslySetInnerHTML: { __html: a },
                })
              );
            }),
            e
          );
        })(p.Component);
      N.defaultProps = { contentEditable: !0, language: 'jsx' };
      var j = { assign: l.a },
        M = {
          objectAssign: '_poly.assign',
          transforms: { dangerousForOf: !0, dangerousTaggedTemplateString: !0 },
        },
        B = function(t) {
          return Object(c.a)(t, M).code;
        },
        D = function(t, e) {
          return (function(n) {
            function r() {
              return P(this, r), I(this, n.apply(this, arguments));
            }
            return (
              O(r, n),
              (r.prototype.componentDidCatch = function(t) {
                e(t);
              }),
              (r.prototype.render = function() {
                return 'function' == typeof t ? h.a.createElement(t, null) : t;
              }),
              r
            );
          })(h.a.Component);
        },
        U = function(t, e) {
          var n = Object.keys(e),
            r = n.map(function(t) {
              return e[t];
            });
          return new (Function.prototype.bind.apply(
            Function,
            [null].concat(['_poly', 'React'], n, [t])
          ))().apply(void 0, [j, h.a].concat(r));
        },
        F = function(t, e) {
          var n = t.code,
            r = void 0 === n ? '' : n,
            i = t.scope,
            a = void 0 === i ? {} : i,
            s = r.trim().replace(/;$/, ''),
            o = B('(' + s + ')').trim();
          return D(U('return ' + o, a), e);
        },
        V = function(t, e, n) {
          var r = t.code,
            i = void 0 === r ? '' : r,
            a = t.scope,
            s = void 0 === a ? {} : a;
          if (!/render\s*\(/.test(i))
            return n(
              new SyntaxError('No-Inline evaluations must call `render`.')
            );
          U(
            B(i),
            L({}, s, {
              render: function(t) {
                e(D(t, n));
              },
            })
          );
        },
        H = h.a.createElement('style', {
          dangerouslySetInnerHTML: {
            __html:
              '\n.prism-code {\n  display: block;\n  white-space: pre;\n\n  background-color: #1D1F21;\n  color: #C5C8C6;\n\n  padding: 0.5rem;\n  margin: 0;\n\n  box-sizing: border-box;\n  vertical-align: baseline;\n  outline: none;\n  text-shadow: none;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  word-wrap: normal;\n  word-break: normal;\n  text-align: left;\n  word-spacing: normal;\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n  tab-size: 2;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: hsl(30, 20%, 50%);\n}\n\n.token.punctuation {\n  opacity: .7;\n}\n\n.namespace {\n  opacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol {\n  color: hsl(350, 40%, 70%);\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: hsl(75, 70%, 60%);\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: hsl(40, 90%, 60%);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: hsl(350, 40%, 70%);\n}\n\n.token.regex,\n.token.important {\n  color: #e90;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.deleted {\n  color: red;\n}\n',
          },
        }),
        G = function() {
          return H;
        },
        W = {
          live: f.a.shape({
            code: f.a.string,
            error: f.a.string,
            onError: f.a.func,
            onChange: f.a.func,
            element: f.a.oneOfType([
              f.a.string,
              f.a.number,
              f.a.element,
              f.a.func,
            ]),
          }),
        },
        K = (function(t) {
          function e() {
            var n, r;
            P(this, e);
            for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
              a[s] = arguments[s];
            return (
              (n = r = I(this, t.call.apply(t, [this].concat(a)))),
              (r.onChange = function(t) {
                var e = r.props,
                  n = e.scope,
                  i = e.transformCode,
                  a = e.noInline;
                r.transpile({
                  code: t,
                  scope: n,
                  transformCode: i,
                  noInline: a,
                });
              }),
              (r.onError = function(t) {
                r.setState({ error: t.toString() });
              }),
              (r.transpile = function(t) {
                var e = t.code,
                  n = t.scope,
                  i = t.transformCode,
                  a = t.noInline,
                  s = void 0 !== a && a,
                  o = { code: i ? i(e) : e, scope: n },
                  p = function(t) {
                    return r.setState({ element: void 0, error: t.toString() });
                  },
                  h = function(t) {
                    return r.setState(L({}, c, { element: t }));
                  },
                  c = { unsafeWrapperError: void 0, error: void 0 };
                try {
                  s
                    ? (r.setState(L({}, c, { element: null })), V(o, h, p))
                    : h(F(o, p));
                } catch (t) {
                  r.setState(L({}, c, { error: t.toString() }));
                }
              }),
              (r.getChildContext = function() {
                return {
                  live: L({}, r.state, {
                    code: r.props.code,
                    onError: r.onError,
                    onChange: r.onChange,
                  }),
                };
              }),
              I(r, n)
            );
          }
          return (
            O(e, t),
            (e.prototype.componentWillMount = function() {
              var t = this.props,
                e = t.code,
                n = t.scope,
                r = t.transformCode,
                i = t.noInline;
              this.transpile({
                code: e,
                scope: n,
                transformCode: r,
                noInline: i,
              });
            }),
            (e.prototype.componentWillReceiveProps = function(t) {
              var e = t.code,
                n = t.scope,
                r = t.noInline,
                i = t.transformCode;
              (e === this.props.code &&
                n === this.props.scope &&
                r === this.props.noInline &&
                i === this.props.transformCode) ||
                this.transpile({
                  code: e,
                  scope: n,
                  transformCode: i,
                  noInline: r,
                });
            }),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.children,
                n = t.className,
                r = (t.code, t.mountStylesheet),
                i = (t.noInline,
                t.transformCode,
                t.scope,
                R(t, [
                  'children',
                  'className',
                  'code',
                  'mountStylesheet',
                  'noInline',
                  'transformCode',
                  'scope',
                ]));
              return h.a.createElement(
                'div',
                L({ className: g('react-live', n) }, i),
                r && h.a.createElement(G, null),
                e
              );
            }),
            e
          );
        })(p.Component);
      (K.childContextTypes = W),
        (K.defaultProps = { code: '', mountStylesheet: !0, noInline: !1 });
      var q = function(t, e) {
        var n = e.live;
        return h.a.createElement(
          N,
          L({}, t, {
            code: n.code,
            onChange: function(e) {
              n.onChange(e), 'function' == typeof t.onChange && t.onChange(e);
            },
          })
        );
      };
      q.contextTypes = W;
      var z = function(t, e) {
        var n = e.live,
          r = t.className,
          i = R(t, ['className']);
        return n.error
          ? h.a.createElement(
              'div',
              L({}, i, { className: g('react-live-error', r) }),
              n.error
            )
          : null;
      };
      z.contextTypes = W;
      var Y = function(t, e) {
        var n = e.live.element,
          r = t.className,
          i = R(t, ['className']),
          a = n;
        return h.a.createElement(
          'div',
          L({}, i, { className: g('react-live-preview', r) }),
          a && h.a.createElement(a, null)
        );
      };
      Y.contextTypes = W;
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.withMDXComponents = void 0);
      var r =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        i = o(n(0)),
        a = o(n(73)),
        s = o(n(8));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var p = (0, a.default)({}),
        h = p.Provider,
        c = p.Consumer;
      e.withMDXComponents = function(t) {
        return function(e) {
          var n = e.components,
            a = (function(t, e) {
              var n = {};
              for (var r in t)
                e.indexOf(r) >= 0 ||
                  (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
              return n;
            })(e, ['components']);
          return i.default.createElement(c, null, function(e) {
            return i.default.createElement(t, r({ components: n || e }, a));
          });
        };
      };
      var u = function(t) {
        var e = t.components,
          n = t.children;
        return i.default.createElement(h, { value: e }, n);
      };
      (u.propTypes = {
        components: s.default.object.isRequired,
        children: s.default.element.isRequired,
      }),
        (e.default = u);
    },
    function(t, e) {
      (e.__esModule = !0),
        (e.ATTRIBUTE_NAMES = {
          BODY: 'bodyAttributes',
          HTML: 'htmlAttributes',
          TITLE: 'titleAttributes',
        });
      var n = (e.TAG_NAMES = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title',
        }),
        r = ((e.VALID_TAG_NAMES = Object.keys(n).map(function(t) {
          return n[t];
        })),
        (e.TAG_PROPERTIES = {
          CHARSET: 'charset',
          CSS_TEXT: 'cssText',
          HREF: 'href',
          HTTPEQUIV: 'http-equiv',
          INNER_HTML: 'innerHTML',
          ITEM_PROP: 'itemprop',
          NAME: 'name',
          PROPERTY: 'property',
          REL: 'rel',
          SRC: 'src',
        }),
        (e.REACT_TAG_MAP = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex',
        }));
      (e.HELMET_PROPS = {
        DEFAULT_TITLE: 'defaultTitle',
        DEFER: 'defer',
        ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
        ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
        TITLE_TEMPLATE: 'titleTemplate',
      }),
        (e.HTML_TAG_MAP = Object.keys(r).reduce(function(t, e) {
          return (t[r[e]] = e), t;
        }, {})),
        (e.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE]),
        (e.HELMET_ATTRIBUTE = 'data-react-helmet');
    },
    function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        i = (function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        a = n(0),
        s = h(a),
        o = h(n(179)),
        p = n(176);
      function h(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = { inlineCode: 'code', wrapper: 'div' },
        u = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ('object' != typeof e && 'function' != typeof e)
                  ? t
                  : e;
              })(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            (function(t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, a.Component),
            i(e, [
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    e = t.name,
                    n = t.parentName,
                    i = t.props,
                    a = void 0 === i ? {} : i,
                    p = t.children,
                    h = t.components,
                    u = void 0 === h ? {} : h,
                    l = t.Layout,
                    d = t.layoutProps,
                    f = u[n + '.' + e] || u[e] || c[e] || e;
                  return l
                    ? ((0, o.default)(this, l),
                      s.default.createElement(
                        l,
                        r({ components: u }, d),
                        s.default.createElement(f, a, p)
                      ))
                    : s.default.createElement(f, a, p);
                },
              },
            ]),
            e
          );
        })();
      e.default = (0, p.withMDXComponents)(u);
    },
    function(t, e, n) {
      'use strict';
      var r = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        o = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        c = h && h(Object);
      t.exports = function t(e, n, u) {
        if ('string' != typeof n) {
          if (c) {
            var l = h(n);
            l && l !== c && t(e, l, u);
          }
          var d = s(n);
          o && (d = d.concat(o(n)));
          for (var f = 0; f < d.length; ++f) {
            var g = d[f];
            if (!(r[g] || i[g] || (u && u[g]))) {
              var m = p(n, g);
              try {
                a(e, g, m);
              } catch (t) {}
            }
          }
          return e;
        }
        return e;
      };
    },
    function(t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          n.apply(this, arguments)
        );
      }
      t.exports = n;
    },
    function(t, e, n) {
      'use strict';
      function r(t) {
        return t && 'object' == typeof t && 'default' in t ? t.default : t;
      }
      var i = n(0),
        a = r(i),
        s = r(n(182)),
        o = r(n(183));
      t.exports = function(t, e, n) {
        if ('function' != typeof t)
          throw new Error('Expected reducePropsToState to be a function.');
        if ('function' != typeof e)
          throw new Error(
            'Expected handleStateChangeOnClient to be a function.'
          );
        if (void 0 !== n && 'function' != typeof n)
          throw new Error(
            'Expected mapStateOnServer to either be undefined or a function.'
          );
        return function(r) {
          if ('function' != typeof r)
            throw new Error(
              'Expected WrappedComponent to be a React component.'
            );
          var p = [],
            h = void 0;
          function c() {
            (h = t(
              p.map(function(t) {
                return t.props;
              })
            )),
              u.canUseDOM ? e(h) : n && (h = n(h));
          }
          var u = (function(t) {
            function e() {
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError('Cannot call a class as a function');
                })(this, e),
                (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ('object' != typeof e && 'function' != typeof e)
                    ? t
                    : e;
                })(this, t.apply(this, arguments))
              );
            }
            return (
              (function(t, e) {
                if ('function' != typeof e && null !== e)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              })(e, t),
              (e.peek = function() {
                return h;
              }),
              (e.rewind = function() {
                if (e.canUseDOM)
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.'
                  );
                var t = h;
                return (h = void 0), (p = []), t;
              }),
              (e.prototype.shouldComponentUpdate = function(t) {
                return !o(t, this.props);
              }),
              (e.prototype.componentWillMount = function() {
                p.push(this), c();
              }),
              (e.prototype.componentDidUpdate = function() {
                c();
              }),
              (e.prototype.componentWillUnmount = function() {
                var t = p.indexOf(this);
                p.splice(t, 1), c();
              }),
              (e.prototype.render = function() {
                return a.createElement(r, this.props);
              }),
              e
            );
          })(i.Component);
          return (
            (u.displayName =
              'SideEffect(' +
              (function(t) {
                return t.displayName || t.name || 'Component';
              })(r) +
              ')'),
            (u.canUseDOM = s.canUseDOM),
            u
          );
        };
      };
    },
    function(t, e, n) {
      var r;
      /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
      /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ !(function() {
        'use strict';
        var i = !(
            'undefined' == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          a = {
            canUseDOM: i,
            canUseWorkers: 'undefined' != typeof Worker,
            canUseEventListeners:
              i && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: i && !!window.screen,
          };
        void 0 ===
          (r = function() {
            return a;
          }.call(e, n, e, t)) || (t.exports = r);
      })();
    },
    function(t, e) {
      t.exports = function(t, e, n, r) {
        var i = n ? n.call(r, t, e) : void 0;
        if (void 0 !== i) return !!i;
        if (t === e) return !0;
        if ('object' != typeof t || !t || 'object' != typeof e || !e) return !1;
        var a = Object.keys(t),
          s = Object.keys(e);
        if (a.length !== s.length) return !1;
        for (
          var o = Object.prototype.hasOwnProperty.bind(e), p = 0;
          p < a.length;
          p++
        ) {
          var h = a[p];
          if (!o(h)) return !1;
          var c = t[h],
            u = e[h];
          if (
            !1 === (i = n ? n.call(r, c, u, h) : void 0) ||
            (void 0 === i && c !== u)
          )
            return !1;
        }
        return !0;
      };
    },
    function(t, e, n) {
      var r = Array.prototype.slice,
        i = n(185),
        a = n(186),
        s = (t.exports = function(t, e, n) {
          return (
            n || (n = {}),
            t === e ||
              (t instanceof Date && e instanceof Date
                ? t.getTime() === e.getTime()
                : !t || !e || ('object' != typeof t && 'object' != typeof e)
                  ? n.strict
                    ? t === e
                    : t == e
                  : (function(t, e, n) {
                      var h, c;
                      if (o(t) || o(e)) return !1;
                      if (t.prototype !== e.prototype) return !1;
                      if (a(t))
                        return (
                          !!a(e) &&
                          ((t = r.call(t)), (e = r.call(e)), s(t, e, n))
                        );
                      if (p(t)) {
                        if (!p(e)) return !1;
                        if (t.length !== e.length) return !1;
                        for (h = 0; h < t.length; h++)
                          if (t[h] !== e[h]) return !1;
                        return !0;
                      }
                      try {
                        var u = i(t),
                          l = i(e);
                      } catch (t) {
                        return !1;
                      }
                      if (u.length != l.length) return !1;
                      for (u.sort(), l.sort(), h = u.length - 1; h >= 0; h--)
                        if (u[h] != l[h]) return !1;
                      for (h = u.length - 1; h >= 0; h--)
                        if (((c = u[h]), !s(t[c], e[c], n))) return !1;
                      return typeof t == typeof e;
                    })(t, e, n))
          );
        });
      function o(t) {
        return null === t || void 0 === t;
      }
      function p(t) {
        return !(
          !t ||
          'object' != typeof t ||
          'number' != typeof t.length ||
          'function' != typeof t.copy ||
          'function' != typeof t.slice ||
          (t.length > 0 && 'number' != typeof t[0])
        );
      }
    },
    function(t, e) {
      function n(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e;
      }
      (t.exports = 'function' == typeof Object.keys ? Object.keys : n).shim = n;
    },
    function(t, e) {
      var n =
        '[object Arguments]' ==
        (function() {
          return Object.prototype.toString.call(arguments);
        })();
      function r(t) {
        return '[object Arguments]' == Object.prototype.toString.call(t);
      }
      function i(t) {
        return (
          (t &&
            'object' == typeof t &&
            'number' == typeof t.length &&
            Object.prototype.hasOwnProperty.call(t, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(t, 'callee')) ||
          !1
        );
      }
      ((e = t.exports = n ? r : i).supported = r), (e.unsupported = i);
    },
    function(t, e, n) {
      (function(t) {
        (e.__esModule = !0),
          (e.warn = e.requestAnimationFrame = e.reducePropsToState = e.mapStateOnServer = e.handleClientStateChange = e.convertReactPropstoHtmlAttributes = void 0);
        var r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                },
          i =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            },
          a = p(n(0)),
          s = p(n(55)),
          o = n(177);
        function p(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var h,
          c = function(t) {
            return !1 ===
              (!(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1])
              ? String(t)
              : String(t)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;');
          },
          u = function(t, e) {
            return e
              .filter(function(e) {
                return void 0 !== e[t];
              })
              .map(function(e) {
                return e[t];
              })
              .reduce(function(t, e) {
                return i({}, t, e);
              }, {});
          },
          l = function(t, e, n) {
            var i = {};
            return n
              .filter(function(e) {
                return (
                  !!Array.isArray(e[t]) ||
                  (void 0 !== e[t] &&
                    v(
                      'Helmet: ' +
                        t +
                        ' should be of type "Array". Instead found type "' +
                        r(e[t]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function(e) {
                return e[t];
              })
              .reverse()
              .reduce(function(t, n) {
                var r = {};
                n.filter(function(t) {
                  for (
                    var n = void 0, a = Object.keys(t), s = 0;
                    s < a.length;
                    s++
                  ) {
                    var p = a[s],
                      h = p.toLowerCase();
                    -1 === e.indexOf(h) ||
                      (n === o.TAG_PROPERTIES.REL &&
                        'canonical' === t[n].toLowerCase()) ||
                      (h === o.TAG_PROPERTIES.REL &&
                        'stylesheet' === t[h].toLowerCase()) ||
                      (n = h),
                      -1 === e.indexOf(p) ||
                        (p !== o.TAG_PROPERTIES.INNER_HTML &&
                          p !== o.TAG_PROPERTIES.CSS_TEXT &&
                          p !== o.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = p);
                  }
                  if (!n || !t[n]) return !1;
                  var c = t[n].toLowerCase();
                  return (
                    i[n] || (i[n] = {}),
                    r[n] || (r[n] = {}),
                    !i[n][c] && ((r[n][c] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function(e) {
                    return t.push(e);
                  });
                for (var a = Object.keys(r), p = 0; p < a.length; p++) {
                  var h = a[p],
                    c = (0, s.default)({}, i[h], r[h]);
                  i[h] = c;
                }
                return t;
              }, [])
              .reverse();
          },
          d = function(t, e) {
            for (var n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (r.hasOwnProperty(e)) return r[e];
            }
            return null;
          },
          f = ((h = Date.now()),
          function(t) {
            var e = Date.now();
            e - h > 16
              ? ((h = e), t(e))
              : setTimeout(function() {
                  f(t);
                }, 0);
          }),
          g = function(t) {
            return clearTimeout(t);
          },
          m =
            'undefined' != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                f
              : t.requestAnimationFrame || f,
          y =
            'undefined' != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                g
              : t.cancelAnimationFrame || g,
          v = function(t) {
            return (
              console && 'function' == typeof console.warn && console.warn(t)
            );
          },
          b = null,
          _ = function(t, e) {
            var n = t.baseTag,
              r = t.bodyAttributes,
              i = t.htmlAttributes,
              a = t.linkTags,
              s = t.metaTags,
              p = t.noscriptTags,
              h = t.onChangeClientState,
              c = t.scriptTags,
              u = t.styleTags,
              l = t.title,
              d = t.titleAttributes;
            w(o.TAG_NAMES.BODY, r), w(o.TAG_NAMES.HTML, i), S(l, d);
            var f = {
                baseTag: E(o.TAG_NAMES.BASE, n),
                linkTags: E(o.TAG_NAMES.LINK, a),
                metaTags: E(o.TAG_NAMES.META, s),
                noscriptTags: E(o.TAG_NAMES.NOSCRIPT, p),
                scriptTags: E(o.TAG_NAMES.SCRIPT, c),
                styleTags: E(o.TAG_NAMES.STYLE, u),
              },
              g = {},
              m = {};
            Object.keys(f).forEach(function(t) {
              var e = f[t],
                n = e.newTags,
                r = e.oldTags;
              n.length && (g[t] = n), r.length && (m[t] = f[t].oldTags);
            }),
              e && e(),
              h(t, g, m);
          },
          x = function(t) {
            return Array.isArray(t) ? t.join('') : t;
          },
          S = function(t, e) {
            void 0 !== t && document.title !== t && (document.title = x(t)),
              w(o.TAG_NAMES.TITLE, e);
          },
          w = function(t, e) {
            var n = document.getElementsByTagName(t)[0];
            if (n) {
              for (
                var r = n.getAttribute(o.HELMET_ATTRIBUTE),
                  i = r ? r.split(',') : [],
                  a = [].concat(i),
                  s = Object.keys(e),
                  p = 0;
                p < s.length;
                p++
              ) {
                var h = s[p],
                  c = e[h] || '';
                n.getAttribute(h) !== c && n.setAttribute(h, c),
                  -1 === i.indexOf(h) && i.push(h);
                var u = a.indexOf(h);
                -1 !== u && a.splice(u, 1);
              }
              for (var l = a.length - 1; l >= 0; l--) n.removeAttribute(a[l]);
              i.length === a.length
                ? n.removeAttribute(o.HELMET_ATTRIBUTE)
                : n.getAttribute(o.HELMET_ATTRIBUTE) !== s.join(',') &&
                  n.setAttribute(o.HELMET_ATTRIBUTE, s.join(','));
            }
          },
          E = function(t, e) {
            var n = document.head || document.querySelector(o.TAG_NAMES.HEAD),
              r = n.querySelectorAll(t + '[' + o.HELMET_ATTRIBUTE + ']'),
              i = Array.prototype.slice.call(r),
              a = [],
              s = void 0;
            return (
              e &&
                e.length &&
                e.forEach(function(e) {
                  var n = document.createElement(t);
                  for (var r in e)
                    if (e.hasOwnProperty(r))
                      if (r === o.TAG_PROPERTIES.INNER_HTML)
                        n.innerHTML = e.innerHTML;
                      else if (r === o.TAG_PROPERTIES.CSS_TEXT)
                        n.styleSheet
                          ? (n.styleSheet.cssText = e.cssText)
                          : n.appendChild(document.createTextNode(e.cssText));
                      else {
                        var p = void 0 === e[r] ? '' : e[r];
                        n.setAttribute(r, p);
                      }
                  n.setAttribute(o.HELMET_ATTRIBUTE, 'true'),
                    i.some(function(t, e) {
                      return (s = e), n.isEqualNode(t);
                    })
                      ? i.splice(s, 1)
                      : a.push(n);
                }),
              i.forEach(function(t) {
                return t.parentNode.removeChild(t);
              }),
              a.forEach(function(t) {
                return n.appendChild(t);
              }),
              { oldTags: i, newTags: a }
            );
          },
          k = function(t) {
            return Object.keys(t).reduce(function(e, n) {
              var r = void 0 !== t[n] ? n + '="' + t[n] + '"' : '' + n;
              return e ? e + ' ' + r : r;
            }, '');
          },
          C = function(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(t).reduce(function(e, n) {
              return (e[o.REACT_TAG_MAP[n] || n] = t[n]), e;
            }, e);
          },
          T = function(t, e, n) {
            switch (t) {
              case o.TAG_NAMES.TITLE:
                return {
                  toComponent: function() {
                    return (
                      (t = e.title),
                      (n = e.titleAttributes),
                      ((r = { key: t })[o.HELMET_ATTRIBUTE] = !0),
                      (i = C(n, r)),
                      [a.default.createElement(o.TAG_NAMES.TITLE, i, t)]
                    );
                    var t, n, r, i;
                  },
                  toString: function() {
                    return (function(t, e, n, r) {
                      var i = k(n),
                        a = x(e);
                      return i
                        ? '<' +
                            t +
                            ' ' +
                            o.HELMET_ATTRIBUTE +
                            '="true" ' +
                            i +
                            '>' +
                            c(a, r) +
                            '</' +
                            t +
                            '>'
                        : '<' +
                            t +
                            ' ' +
                            o.HELMET_ATTRIBUTE +
                            '="true">' +
                            c(a, r) +
                            '</' +
                            t +
                            '>';
                    })(t, e.title, e.titleAttributes, n);
                  },
                };
              case o.ATTRIBUTE_NAMES.BODY:
              case o.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function() {
                    return C(e);
                  },
                  toString: function() {
                    return k(e);
                  },
                };
              default:
                return {
                  toComponent: function() {
                    return (function(t, e) {
                      return e.map(function(e, n) {
                        var r,
                          i = (((r = { key: n })[o.HELMET_ATTRIBUTE] = !0), r);
                        return (
                          Object.keys(e).forEach(function(t) {
                            var n = o.REACT_TAG_MAP[t] || t;
                            if (
                              n === o.TAG_PROPERTIES.INNER_HTML ||
                              n === o.TAG_PROPERTIES.CSS_TEXT
                            ) {
                              var r = e.innerHTML || e.cssText;
                              i.dangerouslySetInnerHTML = { __html: r };
                            } else i[n] = e[t];
                          }),
                          a.default.createElement(t, i)
                        );
                      });
                    })(t, e);
                  },
                  toString: function() {
                    return (function(t, e, n) {
                      return e.reduce(function(e, r) {
                        var i = Object.keys(r)
                            .filter(function(t) {
                              return !(
                                t === o.TAG_PROPERTIES.INNER_HTML ||
                                t === o.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function(t, e) {
                              var i =
                                void 0 === r[e]
                                  ? e
                                  : e + '="' + c(r[e], n) + '"';
                              return t ? t + ' ' + i : i;
                            }, ''),
                          a = r.innerHTML || r.cssText || '',
                          s = -1 === o.SELF_CLOSING_TAGS.indexOf(t);
                        return (
                          e +
                          '<' +
                          t +
                          ' ' +
                          o.HELMET_ATTRIBUTE +
                          '="true" ' +
                          i +
                          (s ? '/>' : '>' + a + '</' + t + '>')
                        );
                      }, '');
                    })(t, e, n);
                  },
                };
            }
          };
        (e.convertReactPropstoHtmlAttributes = function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(t).reduce(function(e, n) {
            return (e[o.HTML_TAG_MAP[n] || n] = t[n]), e;
          }, e);
        }),
          (e.handleClientStateChange = function(t) {
            b && y(b),
              t.defer
                ? (b = m(function() {
                    _(t, function() {
                      b = null;
                    });
                  }))
                : (_(t), (b = null));
          }),
          (e.mapStateOnServer = function(t) {
            var e = t.baseTag,
              n = t.bodyAttributes,
              r = t.encode,
              i = t.htmlAttributes,
              a = t.linkTags,
              s = t.metaTags,
              p = t.noscriptTags,
              h = t.scriptTags,
              c = t.styleTags,
              u = t.title,
              l = void 0 === u ? '' : u,
              d = t.titleAttributes;
            return {
              base: T(o.TAG_NAMES.BASE, e, r),
              bodyAttributes: T(o.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: T(o.ATTRIBUTE_NAMES.HTML, i, r),
              link: T(o.TAG_NAMES.LINK, a, r),
              meta: T(o.TAG_NAMES.META, s, r),
              noscript: T(o.TAG_NAMES.NOSCRIPT, p, r),
              script: T(o.TAG_NAMES.SCRIPT, h, r),
              style: T(o.TAG_NAMES.STYLE, c, r),
              title: T(o.TAG_NAMES.TITLE, { title: l, titleAttributes: d }, r),
            };
          }),
          (e.reducePropsToState = function(t) {
            return {
              baseTag: (function(t, e) {
                return e
                  .filter(function(t) {
                    return void 0 !== t[o.TAG_NAMES.BASE];
                  })
                  .map(function(t) {
                    return t[o.TAG_NAMES.BASE];
                  })
                  .reverse()
                  .reduce(function(e, n) {
                    if (!e.length)
                      for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var a = r[i].toLowerCase();
                        if (-1 !== t.indexOf(a) && n[a]) return e.concat(n);
                      }
                    return e;
                  }, []);
              })([o.TAG_PROPERTIES.HREF], t),
              bodyAttributes: u(o.ATTRIBUTE_NAMES.BODY, t),
              defer: d(t, o.HELMET_PROPS.DEFER),
              encode: d(t, o.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: u(o.ATTRIBUTE_NAMES.HTML, t),
              linkTags: l(
                o.TAG_NAMES.LINK,
                [o.TAG_PROPERTIES.REL, o.TAG_PROPERTIES.HREF],
                t
              ),
              metaTags: l(
                o.TAG_NAMES.META,
                [
                  o.TAG_PROPERTIES.NAME,
                  o.TAG_PROPERTIES.CHARSET,
                  o.TAG_PROPERTIES.HTTPEQUIV,
                  o.TAG_PROPERTIES.PROPERTY,
                  o.TAG_PROPERTIES.ITEM_PROP,
                ],
                t
              ),
              noscriptTags: l(
                o.TAG_NAMES.NOSCRIPT,
                [o.TAG_PROPERTIES.INNER_HTML],
                t
              ),
              onChangeClientState: (function(t) {
                return (
                  d(t, o.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {}
                );
              })(t),
              scriptTags: l(
                o.TAG_NAMES.SCRIPT,
                [o.TAG_PROPERTIES.SRC, o.TAG_PROPERTIES.INNER_HTML],
                t
              ),
              styleTags: l(o.TAG_NAMES.STYLE, [o.TAG_PROPERTIES.CSS_TEXT], t),
              title: (function(t) {
                var e = d(t, o.TAG_NAMES.TITLE),
                  n = d(t, o.HELMET_PROPS.TITLE_TEMPLATE);
                if (n && e)
                  return n.replace(/%s/g, function() {
                    return e;
                  });
                var r = d(t, o.HELMET_PROPS.DEFAULT_TITLE);
                return e || r || void 0;
              })(t),
              titleAttributes: u(o.ATTRIBUTE_NAMES.TITLE, t),
            };
          }),
          (e.requestAnimationFrame = m),
          (e.warn = v);
      }.call(this, n(84)));
    },
    function(t, e, n) {
      var r = n(87),
        i = n(28);
      t.exports = function(t, e, n) {
        if (r(e)) throw TypeError('String#' + n + " doesn't accept regex!");
        return String(i(t));
      };
    },
    function(t, e, n) {
      var r = n(3)('match');
      t.exports = function(t) {
        var e = /./;
        try {
          '/./'[t](e);
        } catch (n) {
          try {
            return (e[r] = !1), !'/./'[t](e);
          } catch (t) {}
        }
        return !0;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(54),
        i = n(191),
        a = n(192),
        s = n(35),
        o = n(39),
        p = Object.assign;
      t.exports =
        !p ||
        n(26)(function() {
          var t = {},
            e = {},
            n = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (t[n] = 7),
            r.split('').forEach(function(t) {
              e[t] = t;
            }),
            7 != p({}, t)[n] || Object.keys(p({}, e)).join('') != r
          );
        })
          ? function(t, e) {
              for (
                var n = s(t), p = arguments.length, h = 1, c = i.f, u = a.f;
                p > h;

              )
                for (
                  var l,
                    d = o(arguments[h++]),
                    f = c ? r(d).concat(c(d)) : r(d),
                    g = f.length,
                    m = 0;
                  g > m;

                )
                  u.call(d, (l = f[m++])) && (n[l] = d[l]);
              return n;
            }
          : p;
    },
    function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function(t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function(t, e, n) {
      var r =
          (function() {
            return this;
          })() || Function('return this')(),
        i =
          r.regeneratorRuntime &&
          Object.getOwnPropertyNames(r).indexOf('regeneratorRuntime') >= 0,
        a = i && r.regeneratorRuntime;
      if (((r.regeneratorRuntime = void 0), (t.exports = n(165)), i))
        r.regeneratorRuntime = a;
      else
        try {
          delete r.regeneratorRuntime;
        } catch (t) {
          r.regeneratorRuntime = void 0;
        }
    },
    function(t, e, n) {
      var r = n(6),
        i = n(16),
        a = n(26);
      t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
          s = {};
        (s[t] = e(n)),
          r(
            r.S +
              r.F *
                a(function() {
                  n(1);
                }),
            'Object',
            s
          );
      };
    },
    function(t, e, n) {
      (function(e) {
        var n =
            'undefined' != typeof window
              ? window
              : 'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope
                ? self
                : {},
          r = (function() {
            var t = /\blang(?:uage)?-(\w+)\b/i,
              e = 0,
              r = (n.Prism = {
                util: {
                  encode: function(t) {
                    return t instanceof i
                      ? new i(t.type, r.util.encode(t.content), t.alias)
                      : 'Array' === r.util.type(t)
                        ? t.map(r.util.encode)
                        : t
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/\u00a0/g, ' ');
                  },
                  type: function(t) {
                    return Object.prototype.toString
                      .call(t)
                      .match(/\[object (\w+)\]/)[1];
                  },
                  objId: function(t) {
                    return (
                      t.__id ||
                        Object.defineProperty(t, '__id', { value: ++e }),
                      t.__id
                    );
                  },
                  clone: function(t) {
                    switch (r.util.type(t)) {
                      case 'Object':
                        var e = {};
                        for (var n in t)
                          t.hasOwnProperty(n) && (e[n] = r.util.clone(t[n]));
                        return e;
                      case 'Array':
                        return (
                          t.map &&
                          t.map(function(t) {
                            return r.util.clone(t);
                          })
                        );
                    }
                    return t;
                  },
                },
                languages: {
                  extend: function(t, e) {
                    var n = r.util.clone(r.languages[t]);
                    for (var i in e) n[i] = e[i];
                    return n;
                  },
                  insertBefore: function(t, e, n, i) {
                    var a = (i = i || r.languages)[t];
                    if (2 == arguments.length) {
                      for (var s in (n = arguments[1]))
                        n.hasOwnProperty(s) && (a[s] = n[s]);
                      return a;
                    }
                    var o = {};
                    for (var p in a)
                      if (a.hasOwnProperty(p)) {
                        if (p == e)
                          for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
                        o[p] = a[p];
                      }
                    return (
                      r.languages.DFS(r.languages, function(e, n) {
                        n === i[t] && e != t && (this[e] = o);
                      }),
                      (i[t] = o)
                    );
                  },
                  DFS: function(t, e, n, i) {
                    for (var a in ((i = i || {}), t))
                      t.hasOwnProperty(a) &&
                        (e.call(t, a, t[a], n || a),
                        'Object' !== r.util.type(t[a]) || i[r.util.objId(t[a])]
                          ? 'Array' !== r.util.type(t[a]) ||
                            i[r.util.objId(t[a])] ||
                            ((i[r.util.objId(t[a])] = !0),
                            r.languages.DFS(t[a], e, a, i))
                          : ((i[r.util.objId(t[a])] = !0),
                            r.languages.DFS(t[a], e, null, i)));
                  },
                },
                plugins: {},
                highlightAll: function(t, e) {
                  var n = {
                    callback: e,
                    selector:
                      'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                  };
                  r.hooks.run('before-highlightall', n);
                  for (
                    var i,
                      a = n.elements || document.querySelectorAll(n.selector),
                      s = 0;
                    (i = a[s++]);

                  )
                    r.highlightElement(i, !0 === t, n.callback);
                },
                highlightElement: function(e, i, a) {
                  for (var s, o, p = e; p && !t.test(p.className); )
                    p = p.parentNode;
                  p &&
                    ((s = (p.className.match(t) || [, ''])[1].toLowerCase()),
                    (o = r.languages[s])),
                    (e.className =
                      e.className.replace(t, '').replace(/\s+/g, ' ') +
                      ' language-' +
                      s),
                    (p = e.parentNode),
                    /pre/i.test(p.nodeName) &&
                      (p.className =
                        p.className.replace(t, '').replace(/\s+/g, ' ') +
                        ' language-' +
                        s);
                  var h = {
                    element: e,
                    language: s,
                    grammar: o,
                    code: e.textContent,
                  };
                  if (
                    (r.hooks.run('before-sanity-check', h),
                    !h.code || !h.grammar)
                  )
                    return (
                      h.code && (h.element.textContent = h.code),
                      void r.hooks.run('complete', h)
                    );
                  if ((r.hooks.run('before-highlight', h), i && n.Worker)) {
                    var c = new Worker(r.filename);
                    (c.onmessage = function(t) {
                      (h.highlightedCode = t.data),
                        r.hooks.run('before-insert', h),
                        (h.element.innerHTML = h.highlightedCode),
                        a && a.call(h.element),
                        r.hooks.run('after-highlight', h),
                        r.hooks.run('complete', h);
                    }),
                      c.postMessage(
                        JSON.stringify({
                          language: h.language,
                          code: h.code,
                          immediateClose: !0,
                        })
                      );
                  } else
                    (h.highlightedCode = r.highlight(
                      h.code,
                      h.grammar,
                      h.language
                    )),
                      r.hooks.run('before-insert', h),
                      (h.element.innerHTML = h.highlightedCode),
                      a && a.call(e),
                      r.hooks.run('after-highlight', h),
                      r.hooks.run('complete', h);
                },
                highlight: function(t, e, n) {
                  var a = r.tokenize(t, e);
                  return i.stringify(r.util.encode(a), n);
                },
                tokenize: function(t, e, n) {
                  var i = r.Token,
                    a = [t],
                    s = e.rest;
                  if (s) {
                    for (var o in s) e[o] = s[o];
                    delete e.rest;
                  }
                  t: for (var o in e)
                    if (e.hasOwnProperty(o) && e[o]) {
                      var p = e[o];
                      p = 'Array' === r.util.type(p) ? p : [p];
                      for (var h = 0; h < p.length; ++h) {
                        var c = p[h],
                          u = c.inside,
                          l = !!c.lookbehind,
                          d = !!c.greedy,
                          f = 0,
                          g = c.alias;
                        if (d && !c.pattern.global) {
                          var m = c.pattern.toString().match(/[imuy]*$/)[0];
                          c.pattern = RegExp(c.pattern.source, m + 'g');
                        }
                        c = c.pattern || c;
                        for (
                          var y = 0, v = 0;
                          y < a.length;
                          v += a[y].length, ++y
                        ) {
                          var b = a[y];
                          if (a.length > t.length) break t;
                          if (!(b instanceof i)) {
                            c.lastIndex = 0;
                            var _ = 1;
                            if (!(C = c.exec(b)) && d && y != a.length - 1) {
                              if (((c.lastIndex = v), !(C = c.exec(t)))) break;
                              for (
                                var x = C.index + (l ? C[1].length : 0),
                                  S = C.index + C[0].length,
                                  w = y,
                                  E = v,
                                  k = a.length;
                                w < k && E < S;
                                ++w
                              )
                                x >= (E += a[w].length) && (++y, (v = E));
                              if (a[y] instanceof i || a[w - 1].greedy)
                                continue;
                              (_ = w - y), (b = t.slice(v, E)), (C.index -= v);
                            }
                            if (C) {
                              l && (f = C[1].length),
                                (S =
                                  (x = C.index + f) +
                                  (C = C[0].slice(f)).length);
                              var C,
                                T = b.slice(0, x),
                                A = b.slice(S),
                                P = [y, _];
                              T && P.push(T);
                              var L = new i(
                                o,
                                u ? r.tokenize(C, u) : C,
                                g,
                                C,
                                d
                              );
                              P.push(L),
                                A && P.push(A),
                                Array.prototype.splice.apply(a, P);
                            }
                          }
                        }
                      }
                    }
                  return a;
                },
                hooks: {
                  all: {},
                  add: function(t, e) {
                    var n = r.hooks.all;
                    (n[t] = n[t] || []), n[t].push(e);
                  },
                  run: function(t, e) {
                    var n = r.hooks.all[t];
                    if (n && n.length) for (var i, a = 0; (i = n[a++]); ) i(e);
                  },
                },
              }),
              i = (r.Token = function(t, e, n, r, i) {
                (this.type = t),
                  (this.content = e),
                  (this.alias = n),
                  (this.length = 0 | (r || '').length),
                  (this.greedy = !!i);
              });
            if (
              ((i.stringify = function(t, e, n) {
                if ('string' == typeof t) return t;
                if ('Array' === r.util.type(t))
                  return t
                    .map(function(n) {
                      return i.stringify(n, e, t);
                    })
                    .join('');
                var a = {
                  type: t.type,
                  content: i.stringify(t.content, e, n),
                  tag: 'span',
                  classes: ['token', t.type],
                  attributes: {},
                  language: e,
                  parent: n,
                };
                if (
                  ('comment' == a.type && (a.attributes.spellcheck = 'true'),
                  t.alias)
                ) {
                  var s =
                    'Array' === r.util.type(t.alias) ? t.alias : [t.alias];
                  Array.prototype.push.apply(a.classes, s);
                }
                r.hooks.run('wrap', a);
                var o = Object.keys(a.attributes)
                  .map(function(t) {
                    return (
                      t +
                      '="' +
                      (a.attributes[t] || '').replace(/"/g, '&quot;') +
                      '"'
                    );
                  })
                  .join(' ');
                return (
                  '<' +
                  a.tag +
                  ' class="' +
                  a.classes.join(' ') +
                  '"' +
                  (o ? ' ' + o : '') +
                  '>' +
                  a.content +
                  '</' +
                  a.tag +
                  '>'
                );
              }),
              !n.document)
            )
              return n.addEventListener
                ? (n.addEventListener(
                    'message',
                    function(t) {
                      var e = JSON.parse(t.data),
                        i = e.language,
                        a = e.code,
                        s = e.immediateClose;
                      n.postMessage(r.highlight(a, r.languages[i], i)),
                        s && n.close();
                    },
                    !1
                  ),
                  n.Prism)
                : n.Prism;
            var a =
              document.currentScript ||
              [].slice.call(document.getElementsByTagName('script')).pop();
            return (
              a &&
                ((r.filename = a.src),
                document.addEventListener &&
                  !a.hasAttribute('data-manual') &&
                  ('loading' !== document.readyState
                    ? window.requestAnimationFrame
                      ? window.requestAnimationFrame(r.highlightAll)
                      : window.setTimeout(r.highlightAll, 16)
                    : document.addEventListener(
                        'DOMContentLoaded',
                        r.highlightAll
                      ))),
              n.Prism
            );
          })();
        void 0 !== t && t.exports && (t.exports = r),
          void 0 !== e && (e.Prism = r);
      }.call(this, n(84)));
    },
    function(t, e) {
      Prism.languages.clike = {
        comment: [
          { pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 },
          { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
        ],
        string: {
          pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0,
        },
        'class-name': {
          pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
          lookbehind: !0,
          inside: { punctuation: /(\.|\\)/ },
        },
        keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/,
      };
    },
    function(t, e) {
      (Prism.languages.javascript = Prism.languages.extend('clike', {
        keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
        function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/,
      })),
        Prism.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0,
          },
        }),
        Prism.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\\\|\\?[^\\])*?`/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\$\{|\}$/,
                    alias: 'punctuation',
                  },
                  rest: Prism.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        Prism.languages.markup &&
          Prism.languages.insertBefore('markup', 'tag', {
            script: {
              pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
              lookbehind: !0,
              inside: Prism.languages.javascript,
              alias: 'language-javascript',
            },
          }),
        (Prism.languages.js = Prism.languages.javascript);
    },
    function(t, e) {
      (Prism.languages.markup = {
        comment: /<!--[\w\W]*?-->/,
        prolog: /<\?[\w\W]+?\?>/,
        doctype: /<!DOCTYPE[\w\W]+?>/i,
        cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/i,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
              inside: { punctuation: /[=>"']/ },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: /&#?[\da-z]{1,8};/i,
      }),
        Prism.hooks.add('wrap', function(t) {
          'entity' === t.type &&
            (t.attributes.title = t.content.replace(/&amp;/, '&'));
        }),
        (Prism.languages.xml = Prism.languages.markup),
        (Prism.languages.html = Prism.languages.markup),
        (Prism.languages.mathml = Prism.languages.markup),
        (Prism.languages.svg = Prism.languages.markup);
    },
    function(t, e) {
      !(function(t) {
        var e = t.util.clone(t.languages.javascript);
        (t.languages.jsx = t.languages.extend('markup', e)),
          (t.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i),
          (t.languages.jsx.tag.inside[
            'attr-value'
          ].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i);
        var n = t.util.clone(t.languages.jsx);
        delete n.punctuation,
          (n = t.languages.insertBefore(
            'jsx',
            'operator',
            { punctuation: /=(?={)|[{}[\];(),.:]/ },
            { jsx: n }
          )),
          t.languages.insertBefore(
            'inside',
            'attr-value',
            {
              script: {
                pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                inside: n,
                alias: 'language-javascript',
              },
            },
            t.languages.jsx.tag
          );
      })(Prism);
    },
    function(t, e, n) {
      'use strict';
      var r,
        i = ((t.exports = function(t) {
          if (null == t) return '';
          var e =
            r || (r = new RegExp('(' + Object.keys(i).join('|') + ')', 'g'));
          return String(t).replace(e, function(t) {
            return i[t];
          });
        }).chars = {
          '&apos;': "'",
          '&#39;': "'",
          '&amp;': '&',
          '&gt;': '>',
          '&lt;': '<',
          '&quot;': '"',
        });
    },
    function(t, e, n) {
      var r = n(202),
        i = n(203);
      function a(t, e) {
        if (!(this instanceof a)) return new a(t, e);
        if (
          ((this.node = this.start = this.peeked = t),
          (this.root = e),
          (this.closingTag = !1),
          (this._revisit = !0),
          (this._selects = []),
          (this._rejects = []),
          t && this.higher(t))
        )
          throw new Error('root must be a parent or ancestor to node');
      }
      function s(t, e) {
        var n = 'nextSibling' == t;
        return function(i, a, s) {
          (i = this.compile(i)), (a = a && a > 0 ? a : 1);
          for (var o = this.node, p = this.closingTag, h = this._revisit; o; ) {
            if (r(n, p) && o[e]) (o = o[e]), (p = !n);
            else if (1 == o.nodeType && !o[e] && r(n, p)) {
              if (((p = n), !h)) continue;
            } else if (o[t]) (o = o[t]), (p = !n);
            else if (((o = o.parentNode), (p = n), !h)) continue;
            if (!o || this.higher(o, this.root)) break;
            if (i(o) && this.selects(o, s) && this.rejects(o, s)) {
              if (--a) continue;
              return s || (this.node = o), (this.closingTag = p), o;
            }
          }
          return null;
        };
      }
      (t.exports = a),
        (a.prototype.reset = function(t) {
          return (this.node = t || this.start), this;
        }),
        (a.prototype.revisit = function(t) {
          return (this._revisit = void 0 == t || t), this;
        }),
        (a.prototype.opening = function() {
          return 1 == this.node.nodeType && (this.closingTag = !1), this;
        }),
        (a.prototype.atOpening = function() {
          return !this.closingTag;
        }),
        (a.prototype.closing = function() {
          return 1 == this.node.nodeType && (this.closingTag = !0), this;
        }),
        (a.prototype.atClosing = function() {
          return this.closingTag;
        }),
        (a.prototype.next = s('nextSibling', 'firstChild')),
        (a.prototype.previous = a.prototype.prev = s(
          'previousSibling',
          'lastChild'
        )),
        (a.prototype.select = function(t) {
          return (t = this.compile(t)), this._selects.push(t), this;
        }),
        (a.prototype.selects = function(t, e) {
          var n = this._selects,
            r = n.length;
          if (!r) return !0;
          for (var i = 0; i < r; i++) if (n[i].call(this, t, e)) return !0;
          return !1;
        }),
        (a.prototype.reject = function(t) {
          return (t = this.compile(t)), this._rejects.push(t), this;
        }),
        (a.prototype.rejects = function(t, e) {
          var n = this._rejects,
            r = n.length;
          if (!r) return !0;
          for (var i = 0; i < r; i++) if (n[i].call(this, t, e)) return !1;
          return !0;
        }),
        (a.prototype.higher = function(t) {
          var e = this.root;
          if (!e) return !1;
          for (t = t.parentNode; t && t != e; ) t = t.parentNode;
          return t != e;
        }),
        (a.prototype.compile = function(t) {
          switch (typeof t) {
            case 'number':
              return function(e) {
                return t == e.nodeType;
              };
            case 'string':
              return new Function('node', 'return ' + i(t, 'node.'));
            case 'function':
              return t;
            default:
              return function() {
                return !0;
              };
          }
        }),
        (a.prototype.peak = a.prototype.peek = function(t, e) {
          return (
            1 == arguments.length && ((e = t), (t = !0)),
            (e = void 0 == e ? 1 : e)
              ? e > 0
                ? this.next(t, e, !0)
                : this.prev(t, Math.abs(e), !0)
              : this.node
          );
        }),
        (a.prototype.use = function(t) {
          return t(this), this;
        });
    },
    function(t, e) {
      t.exports = function(t, e) {
        return t ^ e;
      };
    },
    function(t, e) {
      var n = /\b(Array|Date|Object|Math|JSON)\b/g;
      t.exports = function(t, e) {
        var r = (function(t) {
          for (var e = [], n = 0; n < t.length; n++)
            ~e.indexOf(t[n]) || e.push(t[n]);
          return e;
        })(
          (function(t) {
            return (
              t
                .replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\//g, '')
                .replace(n, '')
                .match(/[a-zA-Z_]\w*/g) || []
            );
          })(t)
        );
        return (
          e &&
            'string' == typeof e &&
            (e = (function(t) {
              return function(e) {
                return t + e;
              };
            })(e)),
          e
            ? (function(t, e, n) {
                return t.replace(
                  /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g,
                  function(t) {
                    return '(' == t[t.length - 1]
                      ? n(t)
                      : ~e.indexOf(t)
                        ? n(t)
                        : t;
                  }
                );
              })(t, r, e)
            : r
        );
      };
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        n.d(e, 'a', function() {
          return Rt;
        });
        var r = n(205),
          i = n(212),
          a = {
            quot: '"',
            amp: '&',
            apos: "'",
            lt: '<',
            gt: '>',
            nbsp: ' ',
            iexcl: '¡',
            cent: '¢',
            pound: '£',
            curren: '¤',
            yen: '¥',
            brvbar: '¦',
            sect: '§',
            uml: '¨',
            copy: '©',
            ordf: 'ª',
            laquo: '«',
            not: '¬',
            shy: '­',
            reg: '®',
            macr: '¯',
            deg: '°',
            plusmn: '±',
            sup2: '²',
            sup3: '³',
            acute: '´',
            micro: 'µ',
            para: '¶',
            middot: '·',
            cedil: '¸',
            sup1: '¹',
            ordm: 'º',
            raquo: '»',
            frac14: '¼',
            frac12: '½',
            frac34: '¾',
            iquest: '¿',
            Agrave: 'À',
            Aacute: 'Á',
            Acirc: 'Â',
            Atilde: 'Ã',
            Auml: 'Ä',
            Aring: 'Å',
            AElig: 'Æ',
            Ccedil: 'Ç',
            Egrave: 'È',
            Eacute: 'É',
            Ecirc: 'Ê',
            Euml: 'Ë',
            Igrave: 'Ì',
            Iacute: 'Í',
            Icirc: 'Î',
            Iuml: 'Ï',
            ETH: 'Ð',
            Ntilde: 'Ñ',
            Ograve: 'Ò',
            Oacute: 'Ó',
            Ocirc: 'Ô',
            Otilde: 'Õ',
            Ouml: 'Ö',
            times: '×',
            Oslash: 'Ø',
            Ugrave: 'Ù',
            Uacute: 'Ú',
            Ucirc: 'Û',
            Uuml: 'Ü',
            Yacute: 'Ý',
            THORN: 'Þ',
            szlig: 'ß',
            agrave: 'à',
            aacute: 'á',
            acirc: 'â',
            atilde: 'ã',
            auml: 'ä',
            aring: 'å',
            aelig: 'æ',
            ccedil: 'ç',
            egrave: 'è',
            eacute: 'é',
            ecirc: 'ê',
            euml: 'ë',
            igrave: 'ì',
            iacute: 'í',
            icirc: 'î',
            iuml: 'ï',
            eth: 'ð',
            ntilde: 'ñ',
            ograve: 'ò',
            oacute: 'ó',
            ocirc: 'ô',
            otilde: 'õ',
            ouml: 'ö',
            divide: '÷',
            oslash: 'ø',
            ugrave: 'ù',
            uacute: 'ú',
            ucirc: 'û',
            uuml: 'ü',
            yacute: 'ý',
            thorn: 'þ',
            yuml: 'ÿ',
            OElig: 'Œ',
            oelig: 'œ',
            Scaron: 'Š',
            scaron: 'š',
            Yuml: 'Ÿ',
            fnof: 'ƒ',
            circ: 'ˆ',
            tilde: '˜',
            Alpha: 'Α',
            Beta: 'Β',
            Gamma: 'Γ',
            Delta: 'Δ',
            Epsilon: 'Ε',
            Zeta: 'Ζ',
            Eta: 'Η',
            Theta: 'Θ',
            Iota: 'Ι',
            Kappa: 'Κ',
            Lambda: 'Λ',
            Mu: 'Μ',
            Nu: 'Ν',
            Xi: 'Ξ',
            Omicron: 'Ο',
            Pi: 'Π',
            Rho: 'Ρ',
            Sigma: 'Σ',
            Tau: 'Τ',
            Upsilon: 'Υ',
            Phi: 'Φ',
            Chi: 'Χ',
            Psi: 'Ψ',
            Omega: 'Ω',
            alpha: 'α',
            beta: 'β',
            gamma: 'γ',
            delta: 'δ',
            epsilon: 'ε',
            zeta: 'ζ',
            eta: 'η',
            theta: 'θ',
            iota: 'ι',
            kappa: 'κ',
            lambda: 'λ',
            mu: 'μ',
            nu: 'ν',
            xi: 'ξ',
            omicron: 'ο',
            pi: 'π',
            rho: 'ρ',
            sigmaf: 'ς',
            sigma: 'σ',
            tau: 'τ',
            upsilon: 'υ',
            phi: 'φ',
            chi: 'χ',
            psi: 'ψ',
            omega: 'ω',
            thetasym: 'ϑ',
            upsih: 'ϒ',
            piv: 'ϖ',
            ensp: ' ',
            emsp: ' ',
            thinsp: ' ',
            zwnj: '‌',
            zwj: '‍',
            lrm: '‎',
            rlm: '‏',
            ndash: '–',
            mdash: '—',
            lsquo: '‘',
            rsquo: '’',
            sbquo: '‚',
            ldquo: '“',
            rdquo: '”',
            bdquo: '„',
            dagger: '†',
            Dagger: '‡',
            bull: '•',
            hellip: '…',
            permil: '‰',
            prime: '′',
            Prime: '″',
            lsaquo: '‹',
            rsaquo: '›',
            oline: '‾',
            frasl: '⁄',
            euro: '€',
            image: 'ℑ',
            weierp: '℘',
            real: 'ℜ',
            trade: '™',
            alefsym: 'ℵ',
            larr: '←',
            uarr: '↑',
            rarr: '→',
            darr: '↓',
            harr: '↔',
            crarr: '↵',
            lArr: '⇐',
            uArr: '⇑',
            rArr: '⇒',
            dArr: '⇓',
            hArr: '⇔',
            forall: '∀',
            part: '∂',
            exist: '∃',
            empty: '∅',
            nabla: '∇',
            isin: '∈',
            notin: '∉',
            ni: '∋',
            prod: '∏',
            sum: '∑',
            minus: '−',
            lowast: '∗',
            radic: '√',
            prop: '∝',
            infin: '∞',
            ang: '∠',
            and: '∧',
            or: '∨',
            cap: '∩',
            cup: '∪',
            int: '∫',
            there4: '∴',
            sim: '∼',
            cong: '≅',
            asymp: '≈',
            ne: '≠',
            equiv: '≡',
            le: '≤',
            ge: '≥',
            sub: '⊂',
            sup: '⊃',
            nsub: '⊄',
            sube: '⊆',
            supe: '⊇',
            oplus: '⊕',
            otimes: '⊗',
            perp: '⊥',
            sdot: '⋅',
            lceil: '⌈',
            rceil: '⌉',
            lfloor: '⌊',
            rfloor: '⌋',
            lang: '〈',
            rang: '〉',
            loz: '◊',
            spades: '♠',
            clubs: '♣',
            hearts: '♥',
            diams: '♦',
          },
          s = /^[\da-fA-F]+$/,
          o = /^\d+$/,
          p =
            'undefined' != typeof window
              ? window
              : void 0 !== t
                ? t
                : 'undefined' != typeof self
                  ? self
                  : {};
        function h(t, e) {
          return t((e = { exports: {} }), e.exports), e.exports;
        }
        var c,
          u = h(function(t, e) {
            Object.defineProperty(e, '__esModule', { value: !0 }),
              (e.default = function(t) {
                var e = t.tokTypes;
                return (
                  (e._import.startsExpr = !0),
                  (t.plugins.dynamicImport = function(t) {
                    t.extend('parseStatement', function(t) {
                      return function() {
                        var n = this.startNode();
                        if (
                          this.type === e._import &&
                          function() {
                            return this.input[this.pos];
                          }.call(this) === e.parenL.label
                        ) {
                          var r = this.parseExpression();
                          return this.parseExpressionStatement(n, r);
                        }
                        for (
                          var i = arguments.length, a = Array(i), s = 0;
                          s < i;
                          s++
                        )
                          a[s] = arguments[s];
                        return t.apply(this, a);
                      };
                    }),
                      t.extend('parseExprAtom', function(t) {
                        return function(r) {
                          return this.type === e._import
                            ? function() {
                                var t = this.startNode();
                                return (
                                  this.next(),
                                  this.type !== e.parenL && this.unexpected(),
                                  this.finishNode(t, n)
                                );
                              }.call(this)
                            : t.call(this, r);
                        };
                      });
                  }),
                  t
                );
              });
            var n = (e.DynamicImportKey = 'Import');
          }),
          l =
            (c = u) &&
            c.__esModule &&
            Object.prototype.hasOwnProperty.call(c, 'default')
              ? c.default
              : c;
        function d(t) {
          var e = {};
          return (
            Object.keys(t).forEach(function(n) {
              'parent' !== n &&
                'program' !== n &&
                'keys' !== n &&
                '__wrapped' !== n &&
                (Array.isArray(t[n])
                  ? (e[n] = t[n].map(d))
                  : t[n] && t[n].toJSON
                    ? (e[n] = t[n].toJSON())
                    : (e[n] = t[n]));
            }),
            e
          );
        }
        u.DynamicImportKey;
        var f = function() {};
        function g(t) {
          var e = [];
          return m[t.type](e, t), e;
        }
        (f.prototype.ancestor = function(t) {
          for (var e = this; t--; ) if (!(e = e.parent)) return null;
          return e;
        }),
          (f.prototype.contains = function(t) {
            for (; t; ) {
              if (t === this) return !0;
              t = t.parent;
            }
            return !1;
          }),
          (f.prototype.findLexicalBoundary = function() {
            return this.parent.findLexicalBoundary();
          }),
          (f.prototype.findNearest = function(t) {
            return (
              'string' == typeof t && (t = new RegExp('^' + t + '$')),
              t.test(this.type) ? this : this.parent.findNearest(t)
            );
          }),
          (f.prototype.unparenthesizedParent = function() {
            for (
              var t = this.parent;
              t && 'ParenthesizedExpression' === t.type;

            )
              t = t.parent;
            return t;
          }),
          (f.prototype.unparenthesize = function() {
            for (var t = this; 'ParenthesizedExpression' === t.type; )
              t = t.expression;
            return t;
          }),
          (f.prototype.findScope = function(t) {
            return this.parent.findScope(t);
          }),
          (f.prototype.getIndentation = function() {
            return this.parent.getIndentation();
          }),
          (f.prototype.initialise = function(t) {
            for (var e = 0, n = this.keys; e < n.length; e += 1) {
              var r = this[n[e]];
              Array.isArray(r)
                ? r.forEach(function(e) {
                    return e && e.initialise(t);
                  })
                : r && 'object' == typeof r && r.initialise(t);
            }
          }),
          (f.prototype.toJSON = function() {
            return d(this);
          }),
          (f.prototype.toString = function() {
            return this.program.magicString.original.slice(
              this.start,
              this.end
            );
          }),
          (f.prototype.transpile = function(t, e) {
            for (var n = 0, r = this.keys; n < r.length; n += 1) {
              var i = this[r[n]];
              Array.isArray(i)
                ? i.forEach(function(n) {
                    return n && n.transpile(t, e);
                  })
                : i && 'object' == typeof i && i.transpile(t, e);
            }
          });
        var m = {
            Identifier: function(t, e) {
              t.push(e);
            },
            ObjectPattern: function(t, e) {
              for (var n = 0, r = e.properties; n < r.length; n += 1) {
                var i = r[n];
                m[i.type](t, i);
              }
            },
            Property: function(t, e) {
              m[e.value.type](t, e.value);
            },
            ArrayPattern: function(t, e) {
              for (var n = 0, r = e.elements; n < r.length; n += 1) {
                var i = r[n];
                i && m[i.type](t, i);
              }
            },
            RestElement: function(t, e) {
              m[e.argument.type](t, e.argument);
            },
            AssignmentPattern: function(t, e) {
              m[e.left.type](t, e.left);
            },
          },
          y = Object.create(null);
        function v(t) {
          (t = t || {}),
            (this.parent = t.parent),
            (this.isBlockScope = !!t.block),
            (this.createDeclarationCallback = t.declare);
          for (var e = this; e.isBlockScope; ) e = e.parent;
          (this.functionScope = e),
            (this.identifiers = []),
            (this.declarations = Object.create(null)),
            (this.references = Object.create(null)),
            (this.blockScopedDeclarations = this.isBlockScope
              ? null
              : Object.create(null)),
            (this.aliases = Object.create(null));
        }
        function b(t, e) {
          for (var n = ''; e--; ) n += t;
          return n;
        }
        function _(t, e, n) {
          void 0 === n && (n = 1);
          var r = Math.max(e.line - 5, 0),
            i = e.line,
            a = String(i).length,
            s = t.split('\n').slice(r, i),
            o = s[s.length - 1].slice(0, e.column).replace(/\t/g, '  ').length;
          return (
            s
              .map(function(t, e) {
                return (
                  (n = a),
                  (i = String(e + r + 1)) +
                    b(' ', n - i.length) +
                    ' : ' +
                    t.replace(/\t/g, '  ')
                );
                var n, i;
              })
              .join('\n') +
            '\n' +
            b(' ', a + 3 + o) +
            b('^', n)
          );
        }
        'do if in for let new try var case else enum eval null this true void with await break catch class const false super throw while yield delete export import public return static switch typeof default extends finally package private continue debugger function arguments interface protected implements instanceof'
          .split(' ')
          .forEach(function(t) {
            return (y[t] = !0);
          }),
          (v.prototype = {
            addDeclaration: function(t, e) {
              for (var n = 0, r = g(t); n < r.length; n += 1) {
                var i = r[n],
                  a = i.name,
                  s = { name: a, node: i, kind: e, instances: [] };
                (this.declarations[a] = s),
                  this.isBlockScope &&
                    (this.functionScope.blockScopedDeclarations[a] ||
                      (this.functionScope.blockScopedDeclarations[a] = []),
                    this.functionScope.blockScopedDeclarations[a].push(s));
              }
            },
            addReference: function(t) {
              this.consolidated
                ? this.consolidateReference(t)
                : this.identifiers.push(t);
            },
            consolidate: function() {
              for (var t = 0; t < this.identifiers.length; t += 1) {
                var e = this.identifiers[t];
                this.consolidateReference(e);
              }
              this.consolidated = !0;
            },
            consolidateReference: function(t) {
              var e = this.declarations[t.name];
              e
                ? e.instances.push(t)
                : ((this.references[t.name] = !0),
                  this.parent && this.parent.addReference(t));
            },
            contains: function(t) {
              return (
                this.declarations[t] ||
                (!!this.parent && this.parent.contains(t))
              );
            },
            createIdentifier: function(t) {
              'number' == typeof t && (t = t.toString());
              for (
                var e = (t = t
                    .replace(/\s/g, '')
                    .replace(/\[([^\]]+)\]/g, '_$1')
                    .replace(/[^a-zA-Z0-9_$]/g, '_')
                    .replace(/_{2,}/, '_')),
                  n = 1;
                this.declarations[e] ||
                this.references[e] ||
                this.aliases[e] ||
                e in y;

              )
                e = t + '$' + n++;
              return (this.aliases[e] = !0), e;
            },
            createDeclaration: function(t) {
              var e = this.createIdentifier(t);
              return this.createDeclarationCallback(e), e;
            },
            findDeclaration: function(t) {
              return (
                this.declarations[t] ||
                (this.parent && this.parent.findDeclaration(t))
              );
            },
            resolveName: function(t) {
              var e = this.findDeclaration(t);
              return e ? e.name : t;
            },
          });
        var x = (function(t) {
          function e(e, n) {
            if ((t.call(this, e), (this.name = 'CompileError'), n)) {
              var r = n.program.magicString.original,
                i = (function(t, e) {
                  var n,
                    r = t.split('\n'),
                    i = r.length,
                    a = 0;
                  for (n = 0; n < i; n += 1) {
                    var s = a + r[n].length + 1;
                    if (s > e) return { line: n + 1, column: e - a, char: n };
                    a = s;
                  }
                  throw new Error('Could not determine location of character');
                })(r, n.start);
              (this.message = e + ' (' + i.line + ':' + i.column + ')'),
                (this.stack = new t().stack.replace(
                  new RegExp('.+new ' + this.name + '.+\\n', 'm'),
                  ''
                )),
                (this.loc = i),
                (this.snippet = _(r, i, n.end - n.start));
            }
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.toString = function() {
              return this.name + ': ' + this.message + '\n' + this.snippet;
            }),
            e
          );
        })(Error);
        function S(t, e) {
          for (var n = 0; n < t.length; n += 1) if (e(t[n], n)) return n;
          return -1;
        }
        var w = {
          Identifier: k,
          AssignmentPattern: function(t, e, n, r, i, a, s) {
            var o = 'Identifier' === r.left.type,
              p = o ? r.left.name : i;
            a ||
              s.push(function(e, n, i) {
                t.prependRight(
                  r.left.end,
                  n + 'if ( ' + p + ' === void 0 ) ' + p
                ),
                  t.move(r.left.end, r.right.end, e),
                  t.appendLeft(r.right.end, i);
              }),
              o || E(t, e, n, r.left, i, a, s);
          },
          ArrayPattern: function(t, e, n, r, i, a, s) {
            var o = r.start;
            r.elements.forEach(function(r, p) {
              r &&
                ('RestElement' === r.type
                  ? T(t, e, n, o, r.argument, i + '.slice(' + p + ')', a, s)
                  : T(t, e, n, o, r, i + '[' + p + ']', a, s),
                (o = r.end));
            }),
              t.remove(o, r.end);
          },
          ObjectPattern: C,
        };
        function E(t, e, n, r, i, a, s) {
          w[r.type](t, e, n, r, i, a, s);
        }
        function k(t, e, n, r, i, a, s) {
          s.push(function(e, s, o) {
            t.overwrite(
              r.start,
              r.end,
              (a ? s : s + 'var ') + n(r) + ' = ' + i + o
            ),
              t.move(r.start, r.end, e);
          });
        }
        function C(t, e, n, r, i, a, s) {
          var o = this,
            p = r.start,
            h = [];
          r.properties.forEach(function(r) {
            var c, u;
            if ('Property' === r.type) {
              var l = r.computed || 'Identifier' !== r.key.type,
                d = l ? t.slice(r.key.start, r.key.end) : r.key.name;
              (c = l ? i + '[' + d + ']' : i + '.' + d),
                (u = r.value),
                h.push(l ? d : '"' + d + '"');
            } else {
              if ('RestElement' !== r.type)
                throw new x(
                  o,
                  'Unexpected node of type ' + r.type + ' in object pattern'
                );
              (u = r.argument),
                (c = e('rest')),
                s.push(function(e, n, s) {
                  var o = r.program.getObjectWithoutPropertiesHelper(t);
                  t.overwrite(
                    r.start,
                    (p = r.argument.start),
                    (a ? n : n + 'var ') +
                      c +
                      ' = ' +
                      o +
                      '( ' +
                      i +
                      ', [' +
                      h.join(', ') +
                      '] )' +
                      s
                  ),
                    t.move(r.start, p, e);
                });
            }
            T(t, e, n, p, u, c, a, s), (p = r.end);
          }),
            t.remove(p, r.end);
        }
        function T(t, e, n, r, i, a, s, o) {
          switch (i.type) {
            case 'Identifier':
              t.remove(r, i.start), k(t, 0, n, i, a, s, o);
              break;
            case 'MemberExpression':
              t.remove(r, i.start),
                (function(t, e, n, r, i, a, s) {
                  o.push(function(e, n, a) {
                    t.prependRight(r.start, n),
                      t.appendLeft(r.end, ' = ' + i + a),
                      t.move(r.start, r.end, e);
                  });
                })(t, 0, 0, i, a);
              break;
            case 'AssignmentPattern':
              var p,
                h = 'Identifier' === i.left.type;
              (p = h ? n(i.left) : e(a)),
                o.push(function(e, n, r) {
                  s
                    ? (t.prependRight(
                        i.right.start,
                        p + ' = ' + a + ', ' + p + ' = ' + p + ' === void 0 ? '
                      ),
                      t.appendLeft(i.right.end, ' : ' + p + r))
                    : (t.prependRight(
                        i.right.start,
                        n +
                          'var ' +
                          p +
                          ' = ' +
                          a +
                          '; if ( ' +
                          p +
                          ' === void 0 ) ' +
                          p +
                          ' = '
                      ),
                      t.appendLeft(i.right.end, r)),
                    t.move(i.right.start, i.right.end, e);
                }),
                h
                  ? t.remove(r, i.right.start)
                  : (t.remove(r, i.left.start),
                    t.remove(i.left.end, i.right.start),
                    T(t, e, n, r, i.left, p, s, o));
              break;
            case 'ObjectPattern':
              t.remove(r, (r = i.start));
              var c = a;
              i.properties.length > 1 &&
                ((c = e(a)),
                o.push(function(e, n, o) {
                  t.prependRight(i.start, (s ? '' : n + 'var ') + c + ' = '),
                    t.overwrite(i.start, (r = i.start + 1), a),
                    t.appendLeft(r, o),
                    t.overwrite(
                      i.start,
                      (r = i.start + 1),
                      (s ? '' : n + 'var ') + c + ' = ' + a + o
                    ),
                    t.move(i.start, r, e);
                })),
                C(t, e, n, i, c, s, o);
              break;
            case 'ArrayPattern':
              if (
                (t.remove(r, (r = i.start)),
                i.elements.filter(Boolean).length > 1)
              ) {
                var u = e(a);
                o.push(function(e, n, o) {
                  t.prependRight(i.start, (s ? '' : n + 'var ') + u + ' = '),
                    t.overwrite(i.start, (r = i.start + 1), a, {
                      contentOnly: !0,
                    }),
                    t.appendLeft(r, o),
                    t.move(i.start, r, e);
                }),
                  i.elements.forEach(function(i, a) {
                    i &&
                      ('RestElement' === i.type
                        ? T(
                            t,
                            e,
                            n,
                            r,
                            i.argument,
                            u + '.slice(' + a + ')',
                            s,
                            o
                          )
                        : T(t, e, n, r, i, u + '[' + a + ']', s, o),
                      (r = i.end));
                  });
              } else {
                var l = S(i.elements, Boolean),
                  d = i.elements[l];
                'RestElement' === d.type
                  ? T(t, e, n, r, d.argument, a + '.slice(' + l + ')', s, o)
                  : T(t, e, n, r, d, a + '[' + l + ']', s, o),
                  (r = d.end);
              }
              t.remove(r, i.end);
              break;
            default:
              throw new Error(
                'Unexpected node type in destructuring (' + i.type + ')'
              );
          }
        }
        var A = (function(t) {
          function e() {
            t.apply(this, arguments);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.createScope = function() {
              var t = this;
              (this.parentIsFunction = /Function/.test(this.parent.type)),
                (this.isFunctionBlock =
                  this.parentIsFunction || 'Root' === this.parent.type),
                (this.scope = new v({
                  block: !this.isFunctionBlock,
                  parent: this.parent.findScope(!1),
                  declare: function(e) {
                    return t.createdDeclarations.push(e);
                  },
                })),
                this.parentIsFunction &&
                  this.parent.params.forEach(function(e) {
                    t.scope.addDeclaration(e, 'param');
                  });
            }),
            (e.prototype.initialise = function(t) {
              (this.thisAlias = null),
                (this.argumentsAlias = null),
                (this.defaultParameters = []),
                (this.createdDeclarations = []),
                this.scope || this.createScope(),
                this.body.forEach(function(e) {
                  return e.initialise(t);
                }),
                this.scope.consolidate();
            }),
            (e.prototype.findLexicalBoundary = function() {
              return 'Program' === this.type
                ? this
                : /^Function/.test(this.parent.type)
                  ? this
                  : this.parent.findLexicalBoundary();
            }),
            (e.prototype.findScope = function(t) {
              return t && !this.isFunctionBlock
                ? this.parent.findScope(t)
                : this.scope;
            }),
            (e.prototype.getArgumentsAlias = function() {
              return (
                this.argumentsAlias ||
                  (this.argumentsAlias = this.scope.createIdentifier(
                    'arguments'
                  )),
                this.argumentsAlias
              );
            }),
            (e.prototype.getArgumentsArrayAlias = function() {
              return (
                this.argumentsArrayAlias ||
                  (this.argumentsArrayAlias = this.scope.createIdentifier(
                    'argsArray'
                  )),
                this.argumentsArrayAlias
              );
            }),
            (e.prototype.getThisAlias = function() {
              return (
                this.thisAlias ||
                  (this.thisAlias = this.scope.createIdentifier('this')),
                this.thisAlias
              );
            }),
            (e.prototype.getIndentation = function() {
              if (void 0 === this.indentation) {
                for (
                  var t = this.program.magicString.original,
                    e = this.synthetic || !this.body.length,
                    n = e ? this.start : this.body[0].start;
                  n && '\n' !== t[n];

                )
                  n -= 1;
                for (this.indentation = ''; ; ) {
                  var r = t[(n += 1)];
                  if (' ' !== r && '\t' !== r) break;
                  this.indentation += r;
                }
                for (
                  var i = this.program.magicString.getIndentString(),
                    a = this.parent;
                  a;

                )
                  'constructor' !== a.kind ||
                    a.parent.parent.superClass ||
                    (this.indentation = this.indentation.replace(i, '')),
                    (a = a.parent);
                e && (this.indentation += i);
              }
              return this.indentation;
            }),
            (e.prototype.transpile = function(e, n) {
              var r,
                i,
                a = this,
                s = this.getIndentation(),
                o = [];
              if (
                (this.argumentsAlias &&
                  o.push(function(t, n, r) {
                    var i = n + 'var ' + a.argumentsAlias + ' = arguments' + r;
                    e.appendLeft(t, i);
                  }),
                this.thisAlias &&
                  o.push(function(t, n, r) {
                    var i = n + 'var ' + a.thisAlias + ' = this' + r;
                    e.appendLeft(t, i);
                  }),
                this.argumentsArrayAlias &&
                  o.push(function(t, n, r) {
                    var i = a.scope.createIdentifier('i'),
                      o =
                        n +
                        'var ' +
                        i +
                        ' = arguments.length, ' +
                        a.argumentsArrayAlias +
                        ' = Array(' +
                        i +
                        ');\n' +
                        s +
                        'while ( ' +
                        i +
                        '-- ) ' +
                        a.argumentsArrayAlias +
                        '[' +
                        i +
                        '] = arguments[' +
                        i +
                        ']' +
                        r;
                    e.appendLeft(t, o);
                  }),
                /Function/.test(this.parent.type)
                  ? this.transpileParameters(this.parent.params, e, n, s, o)
                  : 'CatchClause' === this.parent.type &&
                    this.transpileParameters([this.parent.param], e, n, s, o),
                n.letConst &&
                  this.isFunctionBlock &&
                  this.transpileBlockScopedIdentifiers(e),
                t.prototype.transpile.call(this, e, n),
                this.createdDeclarations.length &&
                  o.push(function(t, n, r) {
                    var i = n + 'var ' + a.createdDeclarations.join(', ') + r;
                    e.appendLeft(t, i);
                  }),
                this.synthetic)
              )
                if ('ArrowFunctionExpression' === this.parent.type) {
                  var p = this.body[0];
                  o.length
                    ? (e
                        .appendLeft(this.start, '{')
                        .prependRight(
                          this.end,
                          this.parent.getIndentation() + '}'
                        ),
                      e.prependRight(p.start, '\n' + s + 'return '),
                      e.appendLeft(p.end, ';\n'))
                    : n.arrow &&
                      (e.prependRight(p.start, '{ return '),
                      e.appendLeft(p.end, '; }'));
                } else
                  o.length &&
                    e.prependRight(this.start, '{').appendLeft(this.end, '}');
              (i = this.body[0]),
                (r =
                  i &&
                  'ExpressionStatement' === i.type &&
                  'Literal' === i.expression.type &&
                  'use strict' === i.expression.value
                    ? this.body[0].end
                    : this.synthetic || 'Root' === this.parent.type
                      ? this.start
                      : this.start + 1);
              var h = '\n' + s,
                c = ';';
              o.forEach(function(t, e) {
                e === o.length - 1 && (c = ';\n'), t(r, h, c);
              });
            }),
            (e.prototype.transpileParameters = function(t, e, n, r, i) {
              var a = this;
              t.forEach(function(s) {
                if (
                  'AssignmentPattern' === s.type &&
                  'Identifier' === s.left.type
                )
                  n.defaultParameter &&
                    i.push(function(t, n, r) {
                      var i =
                        n +
                        'if ( ' +
                        s.left.name +
                        ' === void 0 ) ' +
                        s.left.name;
                      e.prependRight(s.left.end, i)
                        .move(s.left.end, s.right.end, t)
                        .appendLeft(s.right.end, r);
                    });
                else if ('RestElement' === s.type)
                  n.spreadRest &&
                    i.push(function(n, i, o) {
                      var p = t[t.length - 2];
                      if (p) e.remove(p ? p.end : s.start, s.end);
                      else {
                        for (
                          var h = s.start, c = s.end;
                          /\s/.test(e.original[h - 1]);

                        )
                          h -= 1;
                        for (; /\s/.test(e.original[c]); ) c += 1;
                        e.remove(h, c);
                      }
                      var u = s.argument.name,
                        l = a.scope.createIdentifier('len'),
                        d = t.length - 1;
                      d
                        ? e.prependRight(
                            n,
                            i +
                              'var ' +
                              u +
                              ' = [], ' +
                              l +
                              ' = arguments.length - ' +
                              d +
                              ';\n' +
                              r +
                              'while ( ' +
                              l +
                              '-- > 0 ) ' +
                              u +
                              '[ ' +
                              l +
                              ' ] = arguments[ ' +
                              l +
                              ' + ' +
                              d +
                              ' ]' +
                              o
                          )
                        : e.prependRight(
                            n,
                            i +
                              'var ' +
                              u +
                              ' = [], ' +
                              l +
                              ' = arguments.length;\n' +
                              r +
                              'while ( ' +
                              l +
                              '-- ) ' +
                              u +
                              '[ ' +
                              l +
                              ' ] = arguments[ ' +
                              l +
                              ' ]' +
                              o
                          );
                    });
                else if ('Identifier' !== s.type && n.parameterDestructuring) {
                  var o = a.scope.createIdentifier('ref');
                  E(
                    e,
                    function(t) {
                      return a.scope.createIdentifier(t);
                    },
                    function(t) {
                      var e = t.name;
                      return a.scope.resolveName(e);
                    },
                    s,
                    o,
                    !1,
                    i
                  ),
                    e.prependRight(s.start, o);
                }
              });
            }),
            (e.prototype.transpileBlockScopedIdentifiers = function(t) {
              var e = this;
              Object.keys(this.scope.blockScopedDeclarations).forEach(function(
                n
              ) {
                for (
                  var r = 0, i = e.scope.blockScopedDeclarations[n];
                  r < i.length;
                  r += 1
                ) {
                  var a = i[r],
                    s = !1;
                  if ('for.let' === a.kind) {
                    var o = a.node.findNearest('ForStatement');
                    if (o.shouldRewriteAsFunction) {
                      var p = e.scope.createIdentifier(n),
                        h = o.reassigned[n] ? e.scope.createIdentifier(n) : n;
                      (a.name = p),
                        t.overwrite(a.node.start, a.node.end, p, {
                          storeName: !0,
                        }),
                        (o.aliases[n] = { outer: p, inner: h });
                      for (var c = 0, u = a.instances; c < u.length; c += 1) {
                        var l = u[c],
                          d = o.body.contains(l) ? h : p;
                        n !== d &&
                          t.overwrite(l.start, l.end, d, { storeName: !0 });
                      }
                      s = !0;
                    }
                  }
                  if (!s) {
                    var f = e.scope.createIdentifier(n);
                    if (n !== f) {
                      (a.name = f),
                        t.overwrite(a.node.start, a.node.end, f, {
                          storeName: !0,
                        });
                      for (var g = 0, m = a.instances; g < m.length; g += 1) {
                        var y = m[g];
                        (y.rewritten = !0),
                          t.overwrite(y.start, y.end, f, { storeName: !0 });
                      }
                    }
                  }
                }
              });
            }),
            e
          );
        })(f);
        function P(t) {
          return 'Identifier' === t.type && 'arguments' === t.name;
        }
        function L(t, e, n, r, i) {
          for (var a = e.length, s = -1; a--; ) {
            var o = e[a];
            o &&
              'SpreadElement' === o.type &&
              (P(o.argument) &&
                t.overwrite(o.argument.start, o.argument.end, r),
              (s = a));
          }
          if (-1 === s) return !1;
          if (i) {
            for (a = 0; a < e.length; a += 1) {
              var p = e[a];
              'SpreadElement' === p.type
                ? t.remove(p.start, p.argument.start)
                : (t.prependRight(p.start, '['), t.prependRight(p.end, ']'));
            }
            return !0;
          }
          var h = e[s],
            c = e[s - 1];
          for (
            c
              ? t.overwrite(c.end, h.start, ' ].concat( ')
              : (t.remove(n, h.start),
                t.overwrite(h.end, e[1].start, '.concat( ')),
              a = s;
            a < e.length;
            a += 1
          )
            (h = e[a]) &&
              ('SpreadElement' === h.type
                ? t.remove(h.start, h.argument.start)
                : (t.appendLeft(h.start, '['), t.appendLeft(h.end, ']')));
          return !0;
        }
        var O = (function(t) {
          function e() {
            t.apply(this, arguments);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.initialise = function(e) {
              if (e.spreadRest && this.elements.length)
                for (
                  var n = this.findLexicalBoundary(), r = this.elements.length;
                  r--;

                ) {
                  var i = this.elements[r];
                  i &&
                    'SpreadElement' === i.type &&
                    P(i.argument) &&
                    (this.argumentsArrayAlias = n.getArgumentsArrayAlias());
                }
              t.prototype.initialise.call(this, e);
            }),
            (e.prototype.transpile = function(e, n) {
              if ((t.prototype.transpile.call(this, e, n), n.spreadRest)) {
                if (this.elements.length) {
                  var r = this.elements[this.elements.length - 1];
                  r &&
                    /\s*,/.test(e.original.slice(r.end, this.end)) &&
                    e.overwrite(r.end, this.end - 1, ' ');
                }
                if (1 === this.elements.length) {
                  var i = this.elements[0];
                  i &&
                    'SpreadElement' === i.type &&
                    (P(i.argument)
                      ? e.overwrite(
                          this.start,
                          this.end,
                          '[].concat( ' + this.argumentsArrayAlias + ' )'
                        )
                      : (e.overwrite(
                          this.start,
                          i.argument.start,
                          '[].concat( '
                        ),
                        e.overwrite(i.end, this.end, ' )')));
                } else
                  L(e, this.elements, this.start, this.argumentsArrayAlias) &&
                    e.overwrite(this.end - 1, this.end, ')');
              }
            }),
            e
          );
        })(f);
        function R(t, e) {
          for (; ')' !== t.original[e]; ) {
            if (',' === t.original[e]) return void t.remove(e, e + 1);
            '/' === t.original[e] &&
              (e =
                t.original.indexOf('/' === t.original[e + 1] ? '\n' : '*/', e) +
                1),
              (e += 1);
          }
        }
        var I = (function(t) {
          function e() {
            t.apply(this, arguments);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.initialise = function(e) {
              this.body.createScope(), t.prototype.initialise.call(this, e);
            }),
            (e.prototype.transpile = function(e, n) {
              var r =
                1 === this.params.length && this.start === this.params[0].start;
              if (n.arrow || this.needsArguments(n)) {
                for (var i = this.body.start; '=' !== e.original[i]; ) i -= 1;
                e.remove(i, this.body.start),
                  t.prototype.transpile.call(this, e, n),
                  r &&
                    (e.prependRight(this.params[0].start, '('),
                    e.appendLeft(this.params[0].end, ')')),
                  this.parent && 'ExpressionStatement' === this.parent.type
                    ? e.prependRight(this.start, '!function')
                    : e.prependRight(this.start, 'function ');
              } else t.prototype.transpile.call(this, e, n);
              n.trailingFunctionCommas &&
                this.params.length &&
                !r &&
                R(e, this.params[this.params.length - 1].end);
            }),
            (e.prototype.needsArguments = function(t) {
              return (
                t.spreadRest &&
                this.params.filter(function(t) {
                  return 'RestElement' === t.type;
                }).length > 0
              );
            }),
            e
          );
        })(f);
        function N(t, e) {
          var n = e.findDeclaration(t.name);
          if (n && 'const' === n.kind) throw new x(t.name + ' is read-only', t);
        }
        var j = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if ('Identifier' === this.left.type) {
                  var n = this.findScope(!1).findDeclaration(this.left.name),
                    r = n && n.node.ancestor(3);
                  r &&
                    'ForStatement' === r.type &&
                    r.body.contains(this) &&
                    (r.reassigned[this.left.name] = !0);
                }
                t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(e, n) {
                'Identifier' === this.left.type &&
                  N(this.left, this.findScope(!1)),
                  '**=' === this.operator && n.exponentiation
                    ? this.transpileExponentiation(e, n)
                    : /Pattern/.test(this.left.type) &&
                      n.destructuring &&
                      this.transpileDestructuring(e, n),
                  t.prototype.transpile.call(this, e, n);
              }),
              (e.prototype.transpileDestructuring = function(t) {
                var e = this,
                  n = this.findScope(!0),
                  r = this.findScope(!1),
                  i = n.createDeclaration('assign');
                t.appendRight(this.left.end, '(' + i),
                  t.appendLeft(this.right.end, ', ');
                var a = [];
                E(
                  t,
                  function(t) {
                    return n.createDeclaration(t);
                  },
                  function(t) {
                    var e = r.resolveName(t.name);
                    return N(t, r), e;
                  },
                  this.left,
                  i,
                  !0,
                  a
                );
                var s = ', ';
                a.forEach(function(t, n) {
                  n === a.length - 1 && (s = ''), t(e.end, '', s);
                }),
                  'ExpressionStatement' === this.unparenthesizedParent().type
                    ? t.appendRight(this.end, ')')
                    : t.appendRight(this.end, ', ' + i + ')');
              }),
              (e.prototype.transpileExponentiation = function(t) {
                for (
                  var e, n = this.findScope(!1), r = this.left.end;
                  '*' !== t.original[r];

                )
                  r += 1;
                t.remove(r, r + 2);
                var i = this.left.unparenthesize();
                if ('Identifier' === i.type) e = n.resolveName(i.name);
                else if ('MemberExpression' === i.type) {
                  var a,
                    s,
                    o = !1,
                    p = !1,
                    h = this.findNearest(/(?:Statement|Declaration)$/),
                    c = h.getIndentation();
                  'Identifier' === i.property.type
                    ? (s = i.computed
                        ? n.resolveName(i.property.name)
                        : i.property.name)
                    : ((s = n.createDeclaration('property')), (p = !0)),
                    'Identifier' === i.object.type
                      ? (a = n.resolveName(i.object.name))
                      : ((a = n.createDeclaration('object')), (o = !0)),
                    i.start === h.start
                      ? o && p
                        ? (t.prependRight(h.start, a + ' = '),
                          t.overwrite(
                            i.object.end,
                            i.property.start,
                            ';\n' + c + s + ' = '
                          ),
                          t.overwrite(
                            i.property.end,
                            i.end,
                            ';\n' + c + a + '[' + s + ']'
                          ))
                        : o
                          ? (t.prependRight(h.start, a + ' = '),
                            t.appendLeft(i.object.end, ';\n' + c),
                            t.appendLeft(i.object.end, a))
                          : p &&
                            (t.prependRight(i.property.start, s + ' = '),
                            t.appendLeft(i.property.end, ';\n' + c),
                            t.move(
                              i.property.start,
                              i.property.end,
                              this.start
                            ),
                            t.appendLeft(i.object.end, '[' + s + ']'),
                            t.remove(i.object.end, i.property.start),
                            t.remove(i.property.end, i.end))
                      : (o && p
                          ? (t.prependRight(i.start, '( ' + a + ' = '),
                            t.overwrite(
                              i.object.end,
                              i.property.start,
                              ', ' + s + ' = '
                            ),
                            t.overwrite(
                              i.property.end,
                              i.end,
                              ', ' + a + '[' + s + ']'
                            ))
                          : o
                            ? (t.prependRight(i.start, '( ' + a + ' = '),
                              t.appendLeft(i.object.end, ', ' + a))
                            : p &&
                              (t.prependRight(
                                i.property.start,
                                '( ' + s + ' = '
                              ),
                              t.appendLeft(i.property.end, ', '),
                              t.move(i.property.start, i.property.end, i.start),
                              t.overwrite(
                                i.object.end,
                                i.property.start,
                                '[' + s + ']'
                              ),
                              t.remove(i.property.end, i.end)),
                        p && t.appendLeft(this.end, ' )')),
                    (e = a + (i.computed || p ? '[' + s + ']' : '.' + s));
                }
                t.prependRight(this.right.start, 'Math.pow( ' + e + ', '),
                  t.appendLeft(this.right.end, ' )');
              }),
              e
            );
          })(f),
          M = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n) {
                '**' === this.operator &&
                  n.exponentiation &&
                  (e.prependRight(this.start, 'Math.pow( '),
                  e.overwrite(this.left.end, this.right.start, ', '),
                  e.appendLeft(this.end, ' )')),
                  t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          B = /(?:For(?:In|Of)?|While)Statement/,
          D = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function() {
                var t = this.findNearest(B),
                  e = this.findNearest('SwitchCase');
                t &&
                  (!e || t.depth > e.depth) &&
                  ((t.canBreak = !0), (this.loop = t));
              }),
              (e.prototype.transpile = function(t) {
                if (this.loop && this.loop.shouldRewriteAsFunction) {
                  if (this.label)
                    throw new x(
                      'Labels are not currently supported in a loop with locally-scoped variables',
                      this
                    );
                  t.overwrite(this.start, this.start + 5, "return 'break'");
                }
              }),
              e
            );
          })(f),
          U = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (e.spreadRest && this.arguments.length > 1)
                  for (
                    var n = this.findLexicalBoundary(),
                      r = this.arguments.length;
                    r--;

                  ) {
                    var i = this.arguments[r];
                    'SpreadElement' === i.type &&
                      P(i.argument) &&
                      (this.argumentsArrayAlias = n.getArgumentsArrayAlias());
                  }
                t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(e, n) {
                if (n.spreadRest && this.arguments.length) {
                  var r,
                    i = !1,
                    a = this.arguments[0];
                  if (
                    (1 === this.arguments.length
                      ? 'SpreadElement' === a.type &&
                        (e.remove(a.start, a.argument.start), (i = !0))
                      : (i = L(
                          e,
                          this.arguments,
                          a.start,
                          this.argumentsArrayAlias
                        )),
                    i)
                  ) {
                    var s = null;
                    if (
                      ('Super' === this.callee.type
                        ? (s = this.callee)
                        : 'MemberExpression' === this.callee.type &&
                          'Super' === this.callee.object.type &&
                          (s = this.callee.object),
                      s || 'MemberExpression' !== this.callee.type)
                    )
                      r = 'void 0';
                    else if ('Identifier' === this.callee.object.type)
                      r = this.callee.object.name;
                    else {
                      r = this.findScope(!0).createDeclaration('ref');
                      var o = this.callee.object;
                      e.prependRight(o.start, '(' + r + ' = '),
                        e.appendLeft(o.end, ')');
                    }
                    e.appendLeft(this.callee.end, '.apply'),
                      s
                        ? ((s.noCall = !0),
                          this.arguments.length > 1 &&
                            ('SpreadElement' !== a.type &&
                              e.prependRight(a.start, '[ '),
                            e.appendLeft(
                              this.arguments[this.arguments.length - 1].end,
                              ' )'
                            )))
                        : 1 === this.arguments.length
                          ? e.prependRight(a.start, r + ', ')
                          : ('SpreadElement' === a.type
                              ? e.appendLeft(a.start, r + ', ')
                              : e.appendLeft(a.start, r + ', [ '),
                            e.appendLeft(
                              this.arguments[this.arguments.length - 1].end,
                              ' )'
                            ));
                  }
                }
                n.trailingFunctionCommas &&
                  this.arguments.length &&
                  R(e, this.arguments[this.arguments.length - 1].end),
                  t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          F = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n, r, i) {
                var a = this;
                if (n.classes) {
                  var s = this.parent.name,
                    o = e.getIndentString(),
                    p = this.getIndentation() + (r ? o : ''),
                    h = p + o,
                    c = S(this.body, function(t) {
                      return 'constructor' === t.kind;
                    }),
                    u = this.body[c],
                    l = '',
                    d = '';
                  if (
                    (this.body.length
                      ? (e.remove(this.start, this.body[0].start),
                        e.remove(this.body[this.body.length - 1].end, this.end))
                      : e.remove(this.start, this.end),
                    u)
                  ) {
                    u.value.body.isConstructorBody = !0;
                    var f = this.body[c - 1],
                      g = this.body[c + 1];
                    c > 0 &&
                      (e.remove(f.end, u.start),
                      e.move(
                        u.start,
                        g ? g.start : this.end - 1,
                        this.body[0].start
                      )),
                      r || e.appendLeft(u.end, ';');
                  }
                  var m = !1 !== this.program.options.namedFunctionExpressions,
                    v =
                      m ||
                      this.parent.superClass ||
                      'ClassDeclaration' !== this.parent.type;
                  if (this.parent.superClass) {
                    var b =
                      'if ( ' +
                      i +
                      ' ) ' +
                      s +
                      '.__proto__ = ' +
                      i +
                      ';\n' +
                      p +
                      s +
                      '.prototype = Object.create( ' +
                      i +
                      ' && ' +
                      i +
                      '.prototype );\n' +
                      p +
                      s +
                      '.prototype.constructor = ' +
                      s +
                      ';';
                    l += u
                      ? '\n\n' + p + b
                      : (b =
                          'function ' +
                          s +
                          ' () {' +
                          (i
                            ? '\n' +
                              h +
                              i +
                              '.apply(this, arguments);\n' +
                              p +
                              '}'
                            : '}') +
                          (r ? '' : ';') +
                          (this.body.length ? '\n\n' + p : '') +
                          b) +
                        '\n\n' +
                        p;
                  } else if (!u) {
                    var _ = 'function ' + (v ? s + ' ' : '') + '() {}';
                    'ClassDeclaration' === this.parent.type && (_ += ';'),
                      this.body.length && (_ += '\n\n' + p),
                      (l += _);
                  }
                  var x,
                    w,
                    E = this.findScope(!1),
                    k = [],
                    C = [];
                  if (
                    (this.body.forEach(function(t, n) {
                      if ('constructor' !== t.kind) {
                        if (t.static) {
                          var r = ' ' == e.original[t.start + 6] ? 7 : 6;
                          e.remove(t.start, t.start + r);
                        }
                        var i,
                          o = 'method' !== t.kind,
                          h = t.key.name;
                        (y[h] || t.value.body.scope.references[h]) &&
                          (h = E.createIdentifier(h));
                        var u = !1;
                        if (
                          (t.computed ||
                            'Literal' !== t.key.type ||
                            ((u = !0), (t.computed = !0)),
                          o)
                        ) {
                          if (t.computed)
                            throw new Error(
                              'Computed accessor properties are not currently supported'
                            );
                          e.remove(t.start, t.key.start),
                            t.static
                              ? (~C.indexOf(t.key.name) || C.push(t.key.name),
                                w ||
                                  (w = E.createIdentifier('staticAccessors')),
                                (i = '' + w))
                              : (~k.indexOf(t.key.name) || k.push(t.key.name),
                                x ||
                                  (x = E.createIdentifier(
                                    'prototypeAccessors'
                                  )),
                                (i = '' + x));
                        } else i = t.static ? '' + s : s + '.prototype';
                        t.computed || (i += '.'),
                          ((c > 0 && n === c + 1) ||
                            (0 === n && c === a.body.length - 1)) &&
                            (i = '\n\n' + p + i);
                        var l = t.key.end;
                        if (t.computed)
                          if (u)
                            e.prependRight(t.key.start, '['),
                              e.appendLeft(t.key.end, ']');
                          else {
                            for (; ']' !== e.original[l]; ) l += 1;
                            l += 1;
                          }
                        var d = t.computed || o || !m ? '' : h + ' ',
                          f =
                            (o ? '.' + t.kind : '') +
                            ' = function' +
                            (t.value.generator ? '* ' : ' ') +
                            d;
                        e.remove(l, t.value.start),
                          e.prependRight(t.value.start, f),
                          e.appendLeft(t.end, ';'),
                          t.value.generator && e.remove(t.start, t.key.start),
                          e.prependRight(t.start, i);
                      } else {
                        var g = v ? ' ' + s : '';
                        e.overwrite(t.key.start, t.key.end, 'function' + g);
                      }
                    }),
                    k.length || C.length)
                  ) {
                    var T = [],
                      A = [];
                    k.length &&
                      (T.push(
                        'var ' +
                          x +
                          ' = { ' +
                          k
                            .map(function(t) {
                              return t + ': { configurable: true }';
                            })
                            .join(',') +
                          ' };'
                      ),
                      A.push(
                        'Object.defineProperties( ' +
                          s +
                          '.prototype, ' +
                          x +
                          ' );'
                      )),
                      C.length &&
                        (T.push(
                          'var ' +
                            w +
                            ' = { ' +
                            C.map(function(t) {
                              return t + ': { configurable: true }';
                            }).join(',') +
                            ' };'
                        ),
                        A.push(
                          'Object.defineProperties( ' + s + ', ' + w + ' );'
                        )),
                      u && (l += '\n\n' + p),
                      (l += T.join('\n' + p)),
                      u || (l += '\n\n' + p),
                      (d += '\n\n' + p + A.join('\n' + p));
                  }
                  u ? e.appendLeft(u.end, l) : e.prependRight(this.start, l),
                    e.appendLeft(this.end, d);
                }
                t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          V = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                this.id
                  ? ((this.name = this.id.name),
                    this.findScope(!0).addDeclaration(this.id, 'class'))
                  : (this.name = this.findScope(!0).createIdentifier(
                      'defaultExport'
                    )),
                  t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(t, e) {
                if (e.classes) {
                  this.superClass ||
                    (function(t, e) {
                      var n = t.start,
                        r = t.end,
                        i = e.getIndentString(),
                        a = i.length,
                        s = n - a;
                      t.program.indentExclusions[s] ||
                        e.original.slice(s, n) !== i ||
                        e.remove(s, n);
                      for (
                        var o,
                          p = new RegExp(i + '\\S', 'g'),
                          h = e.original.slice(n, r);
                        (o = p.exec(h));

                      ) {
                        var c = n + o.index;
                        t.program.indentExclusions[c] || e.remove(c, c + a);
                      }
                    })(this.body, t);
                  var n =
                      this.superClass && (this.superClass.name || 'superclass'),
                    r = this.getIndentation(),
                    i = r + t.getIndentString(),
                    a = 'ExportDefaultDeclaration' === this.parent.type;
                  a && t.remove(this.parent.start, this.start);
                  var s = this.start;
                  this.id
                    ? (t.overwrite(s, this.id.start, 'var '), (s = this.id.end))
                    : t.prependLeft(s, 'var ' + this.name),
                    this.superClass
                      ? this.superClass.end === this.body.start
                        ? (t.remove(s, this.superClass.start),
                          t.appendLeft(s, ' = (function (' + n + ') {\n' + i))
                        : (t.overwrite(s, this.superClass.start, ' = '),
                          t.overwrite(
                            this.superClass.end,
                            this.body.start,
                            '(function (' + n + ') {\n' + i
                          ))
                      : s === this.body.start
                        ? t.appendLeft(s, ' = ')
                        : t.overwrite(s, this.body.start, ' = '),
                    this.body.transpile(t, e, !!this.superClass, n);
                  var o = a
                    ? '\n\n' + r + 'export default ' + this.name + ';'
                    : '';
                  this.superClass
                    ? (t.appendLeft(
                        this.end,
                        '\n\n' + i + 'return ' + this.name + ';\n' + r + '}('
                      ),
                      t.move(
                        this.superClass.start,
                        this.superClass.end,
                        this.end
                      ),
                      t.prependRight(this.end, '));' + o))
                    : o && t.prependRight(this.end, o);
                } else this.body.transpile(t, e, !1, null);
              }),
              e
            );
          })(f),
          H = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                (this.name =
                  (this.id
                    ? this.id.name
                    : 'VariableDeclarator' === this.parent.type
                      ? this.parent.id.name
                      : 'AssignmentExpression' !== this.parent.type
                        ? null
                        : 'Identifier' === this.parent.left.type
                          ? this.parent.left.name
                          : 'MemberExpression' === this.parent.left.type
                            ? this.parent.left.property.name
                            : null) ||
                  this.findScope(!0).createIdentifier('anonymous')),
                  t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(t, e) {
                if (e.classes) {
                  var n =
                      this.superClass && (this.superClass.name || 'superclass'),
                    r = this.getIndentation(),
                    i = r + t.getIndentString();
                  this.superClass
                    ? (t.remove(this.start, this.superClass.start),
                      t.remove(this.superClass.end, this.body.start),
                      t.appendLeft(this.start, '(function (' + n + ') {\n' + i))
                    : t.overwrite(
                        this.start,
                        this.body.start,
                        '(function () {\n' + i
                      ),
                    this.body.transpile(t, e, !0, n);
                  var a = '\n\n' + i + 'return ' + this.name + ';\n' + r + '}(';
                  this.superClass
                    ? (t.appendLeft(this.end, a),
                      t.move(
                        this.superClass.start,
                        this.superClass.end,
                        this.end
                      ),
                      t.prependRight(this.end, '))'))
                    : t.appendLeft(
                        this.end,
                        '\n\n' + i + 'return ' + this.name + ';\n' + r + '}())'
                      );
                } else this.body.transpile(t, e, !1);
              }),
              e
            );
          })(f),
          G = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(t) {
                if (this.findNearest(B).shouldRewriteAsFunction) {
                  if (this.label)
                    throw new x(
                      'Labels are not currently supported in a loop with locally-scoped variables',
                      this
                    );
                  t.overwrite(this.start, this.start + 8, 'return');
                }
              }),
              e
            );
          })(f),
          W = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (e.moduleExport)
                  throw new x('export is not supported', this);
                t.prototype.initialise.call(this, e);
              }),
              e
            );
          })(f),
          K = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (e.moduleExport)
                  throw new x('export is not supported', this);
                t.prototype.initialise.call(this, e);
              }),
              e
            );
          })(f),
          q = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.findScope = function(t) {
                return t || !this.createdScope
                  ? this.parent.findScope(t)
                  : this.body.scope;
              }),
              (e.prototype.initialise = function(e) {
                if (
                  (this.body.createScope(),
                  (this.createdScope = !0),
                  (this.reassigned = Object.create(null)),
                  (this.aliases = Object.create(null)),
                  t.prototype.initialise.call(this, e),
                  e.letConst)
                )
                  for (
                    var n = Object.keys(this.body.scope.declarations),
                      r = n.length;
                    r--;

                  ) {
                    for (
                      var i = n[r],
                        a = this.body.scope.declarations[i],
                        s = a.instances.length;
                      s--;

                    ) {
                      var o = a.instances[s].findNearest(/Function/);
                      if (o && o.depth > this.depth) {
                        this.shouldRewriteAsFunction = !0;
                        break;
                      }
                    }
                    if (this.shouldRewriteAsFunction) break;
                  }
              }),
              (e.prototype.transpile = function(e, n) {
                var r =
                  'ForOfStatement' != this.type &&
                  ('BlockStatement' !== this.body.type ||
                    ('BlockStatement' === this.body.type &&
                      this.body.synthetic));
                if (this.shouldRewriteAsFunction) {
                  var i = this.getIndentation(),
                    a = i + e.getIndentString(),
                    s = this.args ? ' ' + this.args.join(', ') + ' ' : '',
                    o = this.params ? ' ' + this.params.join(', ') + ' ' : '',
                    p = this.findScope(!0),
                    h = p.createIdentifier('loop'),
                    c =
                      'var ' +
                      h +
                      ' = function (' +
                      o +
                      ') ' +
                      (this.body.synthetic
                        ? '{\n' + i + e.getIndentString()
                        : ''),
                    u =
                      (this.body.synthetic ? '\n' + i + '}' : '') + ';\n\n' + i;
                  if (
                    (e.prependRight(this.body.start, c),
                    e.appendLeft(this.body.end, u),
                    e.move(this.start, this.body.start, this.body.end),
                    this.canBreak || this.canReturn)
                  ) {
                    var l = p.createIdentifier('returned'),
                      d = '{\n' + a + 'var ' + l + ' = ' + h + '(' + s + ');\n';
                    this.canBreak &&
                      (d += '\n' + a + 'if ( ' + l + " === 'break' ) break;"),
                      this.canReturn &&
                        (d +=
                          '\n' + a + 'if ( ' + l + ' ) return ' + l + '.v;'),
                      (d += '\n' + i + '}'),
                      e.prependRight(this.body.end, d);
                  } else {
                    var f = h + '(' + s + ');';
                    'DoWhileStatement' === this.type
                      ? e.overwrite(
                          this.start,
                          this.body.start,
                          'do {\n' + a + f + '\n' + i + '}'
                        )
                      : e.prependRight(this.body.end, f);
                  }
                } else
                  r &&
                    (e.appendLeft(this.body.start, '{ '),
                    e.prependRight(this.body.end, ' }'));
                t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          z = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.findScope = function(t) {
                return t || !this.createdScope
                  ? this.parent.findScope(t)
                  : this.body.scope;
              }),
              (e.prototype.transpile = function(e, n) {
                var r = this,
                  i = this.getIndentation() + e.getIndentString();
                if (this.shouldRewriteAsFunction) {
                  var a =
                      'VariableDeclaration' === this.init.type
                        ? [].concat.apply(
                            [],
                            this.init.declarations.map(function(t) {
                              return g(t.id);
                            })
                          )
                        : [],
                    s = this.aliases;
                  (this.args = a.map(function(t) {
                    return t in r.aliases ? r.aliases[t].outer : t;
                  })),
                    (this.params = a.map(function(t) {
                      return t in r.aliases ? r.aliases[t].inner : t;
                    }));
                  var o = Object.keys(this.reassigned).map(function(t) {
                    return s[t].outer + ' = ' + s[t].inner + ';';
                  });
                  if (o.length)
                    if (this.body.synthetic)
                      e.appendLeft(this.body.body[0].end, '; ' + o.join(' '));
                    else {
                      var p = this.body.body[this.body.body.length - 1];
                      e.appendLeft(p.end, '\n\n' + i + o.join('\n' + i));
                    }
                }
                t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(q),
          Y = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.findScope = function(t) {
                return t || !this.createdScope
                  ? this.parent.findScope(t)
                  : this.body.scope;
              }),
              (e.prototype.transpile = function(e, n) {
                var r = this,
                  i = 'VariableDeclaration' === this.left.type;
                if (this.shouldRewriteAsFunction) {
                  var a = i
                    ? [].concat.apply(
                        [],
                        this.left.declarations.map(function(t) {
                          return g(t.id);
                        })
                      )
                    : [];
                  (this.args = a.map(function(t) {
                    return t in r.aliases ? r.aliases[t].outer : t;
                  })),
                    (this.params = a.map(function(t) {
                      return t in r.aliases ? r.aliases[t].inner : t;
                    }));
                }
                t.prototype.transpile.call(this, e, n);
                var s = i ? this.left.declarations[0].id : this.left;
                'Identifier' !== s.type && this.destructurePattern(e, s, i);
              }),
              (e.prototype.destructurePattern = function(t, e, n) {
                var r = this.findScope(!0),
                  i = this.getIndentation() + t.getIndentString(),
                  a = r.createIdentifier('ref'),
                  s = this.body.body.length
                    ? this.body.body[0].start
                    : this.body.start + 1;
                t.move(e.start, e.end, s),
                  t.prependRight(e.end, n ? a : 'var ' + a);
                var o = [];
                E(
                  t,
                  function(t) {
                    return r.createIdentifier(t);
                  },
                  function(t) {
                    var e = t.name;
                    return r.resolveName(e);
                  },
                  e,
                  a,
                  !1,
                  o
                );
                var p = ';\n' + i;
                o.forEach(function(t, e) {
                  e === o.length - 1 && (p = ';\n\n' + i), t(s, '', p);
                });
              }),
              e
            );
          })(q),
          X = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (e.forOf && !e.dangerousForOf)
                  throw new x(
                    "for...of statements are not supported. Use `transforms: { forOf: false }` to skip transformation and disable this error, or `transforms: { dangerousForOf: true }` if you know what you're doing",
                    this
                  );
                t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(e, n) {
                if ((t.prototype.transpile.call(this, e, n), n.dangerousForOf))
                  if (this.body.body[0]) {
                    var r = this.findScope(!0),
                      i = this.getIndentation(),
                      a = i + e.getIndentString(),
                      s = r.createIdentifier('i'),
                      o = r.createIdentifier('list');
                    this.body.synthetic &&
                      (e.prependRight(this.left.start, '{\n' + a),
                      e.appendLeft(this.body.body[0].end, '\n' + i + '}'));
                    var p = this.body.body[0].start;
                    e.remove(this.left.end, this.right.start),
                      e.move(this.left.start, this.left.end, p),
                      e.prependRight(
                        this.right.start,
                        'var ' + s + ' = 0, ' + o + ' = '
                      ),
                      e.appendLeft(
                        this.right.end,
                        '; ' + s + ' < ' + o + '.length; ' + s + ' += 1'
                      );
                    var h = 'VariableDeclaration' === this.left.type,
                      c = h ? this.left.declarations[0].id : this.left;
                    if ('Identifier' !== c.type) {
                      var u = [],
                        l = r.createIdentifier('ref');
                      E(
                        e,
                        function(t) {
                          return r.createIdentifier(t);
                        },
                        function(t) {
                          var e = t.name;
                          return r.resolveName(e);
                        },
                        c,
                        l,
                        !h,
                        u
                      );
                      var d = ';\n' + a;
                      u.forEach(function(t, e) {
                        e === u.length - 1 && (d = ';\n\n' + a), t(p, '', d);
                      }),
                        h
                          ? (e.appendLeft(
                              this.left.start + this.left.kind.length + 1,
                              l
                            ),
                            e.appendLeft(
                              this.left.end,
                              ' = ' + o + '[' + s + '];\n' + a
                            ))
                          : e.appendLeft(
                              this.left.end,
                              'var ' + l + ' = ' + o + '[' + s + '];\n' + a
                            );
                    } else
                      e.appendLeft(
                        this.left.end,
                        ' = ' + o + '[' + s + '];\n\n' + a
                      );
                  } else
                    'VariableDeclaration' === this.left.type &&
                    'var' === this.left.kind
                      ? (e.remove(this.start, this.left.start),
                        e.appendLeft(this.left.end, ';'),
                        e.remove(this.left.end, this.end))
                      : e.remove(this.start, this.end);
              }),
              e
            );
          })(q),
          J = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (this.generator && e.generator)
                  throw new x('Generators are not supported', this);
                this.body.createScope(),
                  this.id &&
                    this.findScope(!0).addDeclaration(this.id, 'function'),
                  t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(e, n) {
                t.prototype.transpile.call(this, e, n),
                  n.trailingFunctionCommas &&
                    this.params.length &&
                    R(e, this.params[this.params.length - 1].end);
              }),
              e
            );
          })(f),
          $ = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (this.generator && e.generator)
                  throw new x('Generators are not supported', this);
                this.body.createScope(),
                  this.id &&
                    this.body.scope.addDeclaration(this.id, 'function'),
                  t.prototype.initialise.call(this, e);
                var n,
                  r = this.parent;
                if (
                  (e.conciseMethodProperty &&
                  'Property' === r.type &&
                  'init' === r.kind &&
                  r.method &&
                  'Identifier' === r.key.type
                    ? (n = r.key.name)
                    : e.classes &&
                      'MethodDefinition' === r.type &&
                      'method' === r.kind &&
                      'Identifier' === r.key.type
                      ? (n = r.key.name)
                      : this.id &&
                        'Identifier' === this.id.type &&
                        (n = this.id.alias || this.id.name),
                  n)
                )
                  for (var i = 0, a = this.params; i < a.length; i += 1) {
                    var s = a[i];
                    if ('Identifier' === s.type && n === s.name) {
                      var o = this.body.scope,
                        p = o.declarations[n],
                        h = o.createIdentifier(n);
                      s.alias = h;
                      for (var c = 0, u = p.instances; c < u.length; c += 1)
                        u[c].alias = h;
                      break;
                    }
                  }
              }),
              (e.prototype.transpile = function(e, n) {
                t.prototype.transpile.call(this, e, n),
                  n.trailingFunctionCommas &&
                    this.params.length &&
                    R(e, this.params[this.params.length - 1].end);
              }),
              e
            );
          })(f),
          Q = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.findScope = function(t) {
                return this.parent.params && ~this.parent.params.indexOf(this)
                  ? this.parent.body.scope
                  : 'FunctionExpression' === this.parent.type &&
                    this === this.parent.id
                    ? this.parent.body.scope
                    : this.parent.findScope(t);
              }),
              (e.prototype.initialise = function(t) {
                if (
                  (function t(e, n) {
                    return 'MemberExpression' === e.type
                      ? !e.computed && t(e.object, e)
                      : 'Identifier' === e.type
                        ? !n ||
                          (!/(Function|Class)Expression/.test(n.type) &&
                            ('VariableDeclarator' === n.type
                              ? e === n.init
                              : 'MemberExpression' === n.type ||
                                'MethodDefinition' === n.type
                                ? n.computed || e === n.object
                                : 'ArrayPattern' !== n.type &&
                                  ('Property' === n.type
                                    ? 'ObjectPattern' !== n.parent.type &&
                                      (n.computed || e === n.value)
                                    : 'MethodDefinition' !== n.type &&
                                      ('ExportSpecifier' !== n.type ||
                                        e === n.local))))
                        : void 0;
                  })(this, this.parent)
                ) {
                  if (
                    t.arrow &&
                    'arguments' === this.name &&
                    !this.findScope(!1).contains(this.name)
                  ) {
                    var e = this.findLexicalBoundary(),
                      n = this.findNearest('ArrowFunctionExpression'),
                      r = this.findNearest(B);
                    n &&
                      n.depth > e.depth &&
                      (this.alias = e.getArgumentsAlias()),
                      r &&
                        r.body.contains(this) &&
                        r.depth > e.depth &&
                        (this.alias = e.getArgumentsAlias());
                  }
                  this.findScope(!1).addReference(this);
                }
              }),
              (e.prototype.transpile = function(t) {
                this.alias &&
                  t.overwrite(this.start, this.end, this.alias, {
                    storeName: !0,
                    contentOnly: !0,
                  });
              }),
              e
            );
          })(f),
          Z = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                t.prototype.initialise.call(this, e);
              }),
              (e.prototype.transpile = function(e, n) {
                ('BlockStatement' !== this.consequent.type ||
                  ('BlockStatement' === this.consequent.type &&
                    this.consequent.synthetic)) &&
                  (e.appendLeft(this.consequent.start, '{ '),
                  e.prependRight(this.consequent.end, ' }')),
                  this.alternate &&
                    'IfStatement' !== this.alternate.type &&
                    ('BlockStatement' !== this.alternate.type ||
                      ('BlockStatement' === this.alternate.type &&
                        this.alternate.synthetic)) &&
                    (e.appendLeft(this.alternate.start, '{ '),
                    e.prependRight(this.alternate.end, ' }')),
                  t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          tt = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                if (e.moduleImport)
                  throw new x('import is not supported', this);
                t.prototype.initialise.call(this, e);
              }),
              e
            );
          })(f),
          et = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                this.findScope(!0).addDeclaration(this.local, 'import'),
                  t.prototype.initialise.call(this, e);
              }),
              e
            );
          })(f),
          nt = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.initialise = function(e) {
                this.findScope(!0).addDeclaration(this.local, 'import'),
                  t.prototype.initialise.call(this, e);
              }),
              e
            );
          })(f),
          rt = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n) {
                var r,
                  i = this.name,
                  a = i.start,
                  s = i.name,
                  o = this.value ? this.value.start : this.name.end;
                e.overwrite(
                  a,
                  o,
                  (/-/.test((r = s)) ? "'" + r + "'" : r) +
                    ': ' +
                    (this.value ? '' : 'true')
                ),
                  t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          it = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(t) {
                var e,
                  n = !0,
                  r = this.parent.children[this.parent.children.length - 1];
                ((r &&
                  'JSXText' === (e = r).type &&
                  !/\S/.test(e.value) &&
                  /\n/.test(e.value)) ||
                  this.parent.openingElement.attributes.length) &&
                  (n = !1),
                  t.overwrite(this.start, this.end, n ? ' )' : ')');
              }),
              e
            );
          })(f),
          at = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(t) {
                var e,
                  n = !0,
                  r = this.parent.children[this.parent.children.length - 1];
                r &&
                  'JSXText' === (e = r).type &&
                  !/\S/.test(e.value) &&
                  /\n/.test(e.value) &&
                  (n = !1),
                  t.overwrite(this.start, this.end, n ? ' )' : ')');
              }),
              e
            );
          })(f);
        function st(t, e) {
          return (
            (t = t.replace(/\u00a0/g, '&nbsp;')),
            e && /\n/.test(t) && (t = t.replace(/\s+$/, '')),
            (t = t.replace(/^\n\r?\s+/, '').replace(/\s*\n\r?\s*/gm, ' ')),
            JSON.stringify(t)
          );
        }
        var ot = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n) {
                t.prototype.transpile.call(this, e, n);
                var r = this.children.filter(function(t) {
                  return (
                    'JSXText' !== t.type ||
                    /\S/.test(t.raw) ||
                    !/\n/.test(t.raw)
                  );
                });
                if (r.length) {
                  var i,
                    a = this.openingElement.end;
                  for (i = 0; i < r.length; i += 1) {
                    var s = r[i];
                    if (
                      'JSXExpressionContainer' === s.type &&
                      'JSXEmptyExpression' === s.expression.type
                    );
                    else {
                      var o =
                        '\n' === e.original[a] && 'JSXText' !== s.type
                          ? ''
                          : ' ';
                      e.appendLeft(a, ',' + o);
                    }
                    if ('JSXText' === s.type) {
                      var p = st(s.value, i === r.length - 1);
                      e.overwrite(s.start, s.end, p);
                    }
                    a = s.end;
                  }
                }
              }),
              e
            );
          })(f),
          pt = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n) {
                e.remove(this.start, this.expression.start),
                  e.remove(this.expression.end, this.end),
                  t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          ht = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              e
            );
          })(ot),
          ct = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n) {
                t.prototype.transpile.call(this, e, n),
                  e.overwrite(
                    this.start,
                    this.name.start,
                    this.program.jsx + '( '
                  );
                var r =
                  'JSXIdentifier' === this.name.type &&
                  this.name.name[0] === this.name.name[0].toLowerCase();
                r && e.prependRight(this.name.start, "'");
                var i = this.attributes.length,
                  a = this.name.end;
                if (i) {
                  var s,
                    o,
                    p,
                    h = !1;
                  for (s = 0; s < i; s += 1)
                    if ('JSXSpreadAttribute' === this.attributes[s].type) {
                      h = !0;
                      break;
                    }
                  for (a = this.attributes[0].end, s = 0; s < i; s += 1) {
                    var c = this.attributes[s];
                    if (
                      (s > 0 &&
                        (c.start === a
                          ? e.prependRight(a, ', ')
                          : e.overwrite(a, c.start, ', ')),
                      h && 'JSXSpreadAttribute' !== c.type)
                    ) {
                      var u = this.attributes[s - 1],
                        l = this.attributes[s + 1];
                      (u && 'JSXSpreadAttribute' !== u.type) ||
                        e.prependRight(c.start, '{ '),
                        (l && 'JSXSpreadAttribute' !== l.type) ||
                          e.appendLeft(c.end, ' }');
                    }
                    a = c.end;
                  }
                  if (h)
                    if (1 === i) p = r ? "'," : ',';
                    else {
                      if (!this.program.options.objectAssign)
                        throw new x(
                          "Mixed JSX attributes ending in spread requires specified objectAssign option with 'Object.assign' or polyfill helper.",
                          this
                        );
                      (p = r
                        ? "', " + this.program.options.objectAssign + '({},'
                        : ', ' + this.program.options.objectAssign + '({},'),
                        (o = ')');
                    }
                  else (p = r ? "', {" : ', {'), (o = ' }');
                  e.prependRight(this.name.end, p),
                    o && e.appendLeft(this.attributes[i - 1].end, o);
                } else
                  e.appendLeft(this.name.end, r ? "', null" : ', null'),
                    (a = this.name.end);
                this.selfClosing
                  ? e.overwrite(
                      a,
                      this.end,
                      this.attributes.length ? ')' : ' )'
                    )
                  : e.remove(a, this.end);
              }),
              e
            );
          })(f),
          ut = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(t, e) {
                t.overwrite(
                  this.start,
                  this.end,
                  this.program.jsx + '( React.Fragment, null'
                );
              }),
              e
            );
          })(f),
          lt = (function(t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              t && (e.__proto__ = t),
              (e.prototype = Object.create(t && t.prototype)),
              (e.prototype.constructor = e),
              (e.prototype.transpile = function(e, n) {
                e.remove(this.start, this.argument.start),
                  e.remove(this.argument.end, this.end),
                  t.prototype.transpile.call(this, e, n);
              }),
              e
            );
          })(f),
          dt = h(function(t, e) {
            /*!
 * regjsgen 0.3.0
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Available under MIT license <https://github.com/demoneaux/regjsgen/blob/master/LICENSE>
 */
            (function() {
              var n = { function: !0, object: !0 },
                r = (n[typeof window] && window) || this,
                i = n.object && e,
                a = n.object && t && !t.nodeType && t,
                s = i && a && 'object' == typeof p && p;
              !s ||
                (s.global !== s && s.window !== s && s.self !== s) ||
                (r = s);
              var o = Object.prototype.hasOwnProperty,
                h = String.fromCharCode,
                c = Math.floor;
              function u() {
                var t,
                  e,
                  n = [],
                  r = -1,
                  i = arguments.length;
                if (!i) return '';
                for (var a = ''; ++r < i; ) {
                  var s = Number(arguments[r]);
                  if (!isFinite(s) || s < 0 || s > 1114111 || c(s) != s)
                    throw RangeError('Invalid code point: ' + s);
                  s <= 65535
                    ? n.push(s)
                    : ((t = 55296 + ((s -= 65536) >> 10)),
                      (e = (s % 1024) + 56320),
                      n.push(t, e)),
                    (r + 1 == i || n.length > 16384) &&
                      ((a += h.apply(null, n)), (n.length = 0));
                }
                return a;
              }
              var l = {};
              function d(t, e) {
                if (-1 == e.indexOf('|')) {
                  if (t == e) return;
                  throw Error(
                    'Invalid node type: ' + t + '; expected type: ' + e
                  );
                }
                if (
                  !(e = o.call(l, e)
                    ? l[e]
                    : (l[e] = RegExp('^(?:' + e + ')$'))).test(t)
                )
                  throw Error(
                    'Invalid node type: ' + t + '; expected types: ' + e
                  );
              }
              function f(t) {
                var e = t.type;
                if (o.call(y, e)) return y[e](t);
                throw Error('Invalid node type: ' + e);
              }
              function g(t) {
                return (
                  d(
                    t.type,
                    'anchor|characterClassEscape|characterClassRange|dot|value'
                  ),
                  f(t)
                );
              }
              function m(t) {
                return (
                  d(
                    t.type,
                    'anchor|characterClass|characterClassEscape|empty|group|quantifier|reference|unicodePropertyEscape|value'
                  ),
                  f(t)
                );
              }
              var y = {
                alternative: function(t) {
                  d(t.type, 'alternative');
                  for (var e = t.body, n = -1, r = e.length, i = ''; ++n < r; )
                    i += m(e[n]);
                  return i;
                },
                anchor: function(t) {
                  switch ((d(t.type, 'anchor'), t.kind)) {
                    case 'start':
                      return '^';
                    case 'end':
                      return '$';
                    case 'boundary':
                      return '\\b';
                    case 'not-boundary':
                      return '\\B';
                    default:
                      throw Error('Invalid assertion');
                  }
                },
                characterClass: function(t) {
                  d(t.type, 'characterClass');
                  var e = t.body,
                    n = -1,
                    r = e.length,
                    i = '';
                  for (t.negative && (i += '^'); ++n < r; ) i += g(e[n]);
                  return '[' + i + ']';
                },
                characterClassEscape: function(t) {
                  return d(t.type, 'characterClassEscape'), '\\' + t.value;
                },
                characterClassRange: function(t) {
                  d(t.type, 'characterClassRange');
                  var e = t.min,
                    n = t.max;
                  if (
                    'characterClassRange' == e.type ||
                    'characterClassRange' == n.type
                  )
                    throw Error('Invalid character class range');
                  return g(e) + '-' + g(n);
                },
                unicodePropertyEscape: function(t) {
                  return (
                    d(t.type, 'unicodePropertyEscape'),
                    '\\' + (t.negative ? 'P' : 'p') + '{' + t.value + '}'
                  );
                },
                disjunction: function(t) {
                  d(t.type, 'disjunction');
                  for (var e = t.body, n = -1, r = e.length, i = ''; ++n < r; )
                    0 != n && (i += '|'), (i += f(e[n]));
                  return i;
                },
                dot: function(t) {
                  return d(t.type, 'dot'), '.';
                },
                group: function(t) {
                  d(t.type, 'group');
                  var e = '';
                  switch (t.behavior) {
                    case 'normal':
                      break;
                    case 'ignore':
                      e += '?:';
                      break;
                    case 'lookahead':
                      e += '?=';
                      break;
                    case 'negativeLookahead':
                      e += '?!';
                      break;
                    default:
                      throw Error('Invalid behaviour: ' + t.behaviour);
                  }
                  for (var n = t.body, r = -1, i = n.length; ++r < i; )
                    e += f(n[r]);
                  return '(' + e + ')';
                },
                quantifier: function(t) {
                  d(t.type, 'quantifier');
                  var e = '',
                    n = t.min,
                    r = t.max;
                  return (
                    (e =
                      null == r
                        ? 0 == n
                          ? '*'
                          : 1 == n
                            ? '+'
                            : '{' + n + ',}'
                        : n == r
                          ? '{' + n + '}'
                          : 0 == n && 1 == r
                            ? '?'
                            : '{' + n + ',' + r + '}'),
                    t.greedy || (e += '?'),
                    (function(t) {
                      return (
                        d(
                          t.type,
                          'anchor|characterClass|characterClassEscape|dot|group|reference|value'
                        ),
                        f(t)
                      );
                    })(t.body[0]) + e
                  );
                },
                reference: function(t) {
                  return d(t.type, 'reference'), '\\' + t.matchIndex;
                },
                value: function(t) {
                  d(t.type, 'value');
                  var e = t.kind,
                    n = t.codePoint;
                  switch (e) {
                    case 'controlLetter':
                      return '\\c' + u(n + 64);
                    case 'hexadecimalEscape':
                      return (
                        '\\x' + ('00' + n.toString(16).toUpperCase()).slice(-2)
                      );
                    case 'identifier':
                      return '\\' + u(n);
                    case 'null':
                      return '\\' + n;
                    case 'octal':
                      return '\\' + n.toString(8);
                    case 'singleEscape':
                      switch (n) {
                        case 8:
                          return '\\b';
                        case 9:
                          return '\\t';
                        case 10:
                          return '\\n';
                        case 11:
                          return '\\v';
                        case 12:
                          return '\\f';
                        case 13:
                          return '\\r';
                        default:
                          throw Error('Invalid codepoint: ' + n);
                      }
                    case 'symbol':
                      return u(n);
                    case 'unicodeEscape':
                      return (
                        '\\u' +
                        ('0000' + n.toString(16).toUpperCase()).slice(-4)
                      );
                    case 'unicodeCodePointEscape':
                      return '\\u{' + n.toString(16).toUpperCase() + '}';
                    default:
                      throw Error('Unsupported node kind: ' + e);
                  }
                },
              };
              i && a ? (i.generate = f) : (r.regjsgen = { generate: f });
            }.call(p));
          }),
          ft = h(function(t) {
            !(function() {
              var e = {
                parse: function(t, e, n) {
                  function r(e) {
                    return (e.raw = t.substring(e.range[0], e.range[1])), e;
                  }
                  function i(t, e) {
                    return (t.range[0] = e), r(t);
                  }
                  function a(t, e) {
                    return r({ type: 'anchor', kind: t, range: [N - e, N] });
                  }
                  function s(t, e, n, i) {
                    return r({
                      type: 'value',
                      kind: t,
                      codePoint: e,
                      range: [n, i],
                    });
                  }
                  function o(t, e, n, r) {
                    return (r = r || 0), s(t, e, N - (n.length + r), N);
                  }
                  function p(t) {
                    var e,
                      n = t[0],
                      r = n.charCodeAt(0);
                    return I &&
                      1 === n.length &&
                      r >= 55296 &&
                      r <= 56319 &&
                      (e = m().charCodeAt(0)) >= 56320 &&
                      e <= 57343
                      ? s(
                          'symbol',
                          1024 * (r - 55296) + e - 56320 + 65536,
                          ++N - 2,
                          N
                        )
                      : s('symbol', r, N - 1, N);
                  }
                  function h(t, e, n, i) {
                    return (
                      null == i && ((n = N - 1), (i = N)),
                      r({
                        type: 'quantifier',
                        min: t,
                        max: e,
                        greedy: !0,
                        body: null,
                        range: [n, i],
                      })
                    );
                  }
                  function c(t, e, n, i) {
                    return r({
                      type: 'characterClass',
                      body: t,
                      negative: e,
                      range: [n, i],
                    });
                  }
                  function u(t, e, n, i) {
                    return (
                      t.codePoint > e.codePoint &&
                        P(
                          'invalid range in character class',
                          t.raw + '-' + e.raw,
                          n,
                          i
                        ),
                      r({
                        type: 'characterClassRange',
                        min: t,
                        max: e,
                        range: [n, i],
                      })
                    );
                  }
                  function l(t) {
                    return 'alternative' === t.type ? t.body : [t];
                  }
                  function d(e) {
                    e = e || 1;
                    var n = t.substring(N, N + e);
                    return (N += e || 1), n;
                  }
                  function f(t) {
                    g(t) || P('character', t);
                  }
                  function g(e) {
                    if (t.indexOf(e, N) === N) return d(e.length);
                  }
                  function m() {
                    return t[N];
                  }
                  function y(e) {
                    return t.indexOf(e, N) === N;
                  }
                  function v(e) {
                    return t[N + 1] === e;
                  }
                  function b(e) {
                    var n = t.substring(N).match(e);
                    return (
                      n &&
                        ((n.range = []),
                        (n.range[0] = N),
                        d(n[0].length),
                        (n.range[1] = N)),
                      n
                    );
                  }
                  function _() {
                    var t = [],
                      e = N;
                    for (t.push(x()); g('|'); ) t.push(x());
                    return 1 === t.length
                      ? t[0]
                      : (function(t, e, n) {
                          return r({
                            type: 'disjunction',
                            body: t,
                            range: [e, N],
                          });
                        })(t, e);
                  }
                  function x() {
                    for (var t, e = [], n = N; (t = S()); ) e.push(t);
                    return 1 === e.length
                      ? e[0]
                      : (function(t, e, n) {
                          return r({
                            type: 'alternative',
                            body: t,
                            range: [e, N],
                          });
                        })(e, n);
                  }
                  function S() {
                    if (N >= t.length || y('|') || y(')')) return null;
                    var e = g('^')
                      ? a('start', 1)
                      : g('$')
                        ? a('end', 1)
                        : g('\\b')
                          ? a('boundary', 2)
                          : g('\\B')
                            ? a('not-boundary', 2)
                            : w('(?=', 'lookahead', '(?!', 'negativeLookahead');
                    if (e) return e;
                    var n,
                      s = (n = b(/^[^^$\\.*+?(){[|]/))
                        ? p(n)
                        : g('.')
                          ? r({ type: 'dot', range: [N - 1, N] })
                          : g('\\')
                            ? ((n = C()) || P('atomEscape'), n)
                            : (n = (function() {
                                var t,
                                  e = N;
                                return (t = b(/^\[\^/))
                                  ? ((t = T()), f(']'), c(t, !0, e, N))
                                  : g('[')
                                    ? ((t = T()), f(']'), c(t, !1, e, N))
                                    : null;
                              })())
                              ? n
                              : w('(?:', 'ignore', '(', 'normal');
                    s || P('Expected atom');
                    var o =
                      (function() {
                        var t,
                          e,
                          n,
                          r,
                          i = N;
                        return (
                          g('*')
                            ? (e = h(0))
                            : g('+')
                              ? (e = h(1))
                              : g('?')
                                ? (e = h(0, 1))
                                : (t = b(/^\{([0-9]+)\}/))
                                  ? (e = h(
                                      (n = parseInt(t[1], 10)),
                                      n,
                                      t.range[0],
                                      t.range[1]
                                    ))
                                  : (t = b(/^\{([0-9]+),\}/))
                                    ? (e = h(
                                        (n = parseInt(t[1], 10)),
                                        void 0,
                                        t.range[0],
                                        t.range[1]
                                      ))
                                    : (t = b(/^\{([0-9]+),([0-9]+)\}/)) &&
                                      ((n = parseInt(t[1], 10)) >
                                        (r = parseInt(t[2], 10)) &&
                                        P(
                                          'numbers out of order in {} quantifier',
                                          '',
                                          i,
                                          N
                                        ),
                                      (e = h(n, r, t.range[0], t.range[1]))),
                          e && g('?') && ((e.greedy = !1), (e.range[1] += 1)),
                          e
                        );
                      })() || !1;
                    return o ? ((o.body = l(s)), i(o, s.range[0]), o) : s;
                  }
                  function w(t, e, n, i) {
                    var a = null,
                      s = N;
                    if (g(t)) a = e;
                    else {
                      if (!g(n)) return !1;
                      a = i;
                    }
                    var o = _();
                    o || P('Expected disjunction'), f(')');
                    var p = r({
                      type: 'group',
                      behavior: a,
                      body: l(o),
                      range: [s, N],
                    });
                    return 'normal' == a && R && O++, p;
                  }
                  function E(t) {
                    var e, n;
                    if (
                      I &&
                      'unicodeEscape' == t.kind &&
                      (e = t.codePoint) >= 55296 &&
                      e <= 56319 &&
                      y('\\') &&
                      v('u')
                    ) {
                      var i = N;
                      N++;
                      var a = k();
                      'unicodeEscape' == a.kind &&
                      (n = a.codePoint) >= 56320 &&
                      n <= 57343
                        ? ((t.range[1] = a.range[1]),
                          (t.codePoint =
                            1024 * (e - 55296) + n - 56320 + 65536),
                          (t.type = 'value'),
                          (t.kind = 'unicodeCodePointEscape'),
                          r(t))
                        : (N = i);
                    }
                    return t;
                  }
                  function k() {
                    return C(!0);
                  }
                  function C(t) {
                    var e,
                      a = N;
                    if (
                      (e = (function() {
                        var t, e, n;
                        if ((t = b(/^(?!0)\d+/))) {
                          e = t[0];
                          var a = parseInt(t[0], 10);
                          return a <= O
                            ? ((n = t[0]),
                              r({
                                type: 'reference',
                                matchIndex: parseInt(n, 10),
                                range: [N - 1 - n.length, N],
                              }))
                            : (L.push(a),
                              d(-t[0].length),
                              (t = b(/^[0-7]{1,3}/))
                                ? o('octal', parseInt(t[0], 8), t[0], 1)
                                : i((t = p(b(/^[89]/))), t.range[0] - 1));
                        }
                        return (t = b(/^[0-7]{1,3}/))
                          ? ((e = t[0]),
                            /^0{1,3}$/.test(e)
                              ? o('null', 0, '0', e.length + 1)
                              : o('octal', parseInt(e, 8), e, 1))
                          : !!(t = b(/^[dDsSwW]/)) &&
                              r({
                                type: 'characterClassEscape',
                                value: t[0],
                                range: [N - 2, N],
                              });
                      })())
                    )
                      return e;
                    if (t) {
                      if (g('b')) return o('singleEscape', 8, '\\b');
                      g('B') &&
                        P('\\B not possible inside of CharacterClass', '', a);
                    }
                    return (function() {
                      var t, e, i, a;
                      if ((t = b(/^[fnrtv]/))) {
                        var s = 0;
                        switch (t[0]) {
                          case 't':
                            s = 9;
                            break;
                          case 'n':
                            s = 10;
                            break;
                          case 'v':
                            s = 11;
                            break;
                          case 'f':
                            s = 12;
                            break;
                          case 'r':
                            s = 13;
                        }
                        return o('singleEscape', s, '\\' + t[0]);
                      }
                      return (t = b(/^c([a-zA-Z])/))
                        ? o('controlLetter', t[1].charCodeAt(0) % 32, t[1], 2)
                        : (t = b(/^x([0-9a-fA-F]{2})/))
                          ? o('hexadecimalEscape', parseInt(t[1], 16), t[1], 2)
                          : (t = b(/^u([0-9a-fA-F]{4})/))
                            ? E(o('unicodeEscape', parseInt(t[1], 16), t[1], 2))
                            : I && (t = b(/^u\{([0-9a-fA-F]+)\}/))
                              ? o(
                                  'unicodeCodePointEscape',
                                  parseInt(t[1], 16),
                                  t[1],
                                  4
                                )
                              : n.unicodePropertyEscape &&
                                I &&
                                (t = b(/^([pP])\{([^\}]+)\}/))
                                ? r({
                                    type: 'unicodePropertyEscape',
                                    negative: 'P' === t[1],
                                    value: t[2],
                                    range: [t.range[0] - 1, t.range[1]],
                                    raw: t[0],
                                  })
                                : ((i = m()),
                                  (a = new RegExp(
                                    '[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԯԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠ-ࢲࣤ-ॣ०-९ॱ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧ᪰-᪽ᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶ᳸᳹ᴀ-᷵᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚝꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꧠ-ꧾꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︭︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]'
                                  )),
                                  36 === i ||
                                  95 === i ||
                                  (i >= 65 && i <= 90) ||
                                  (i >= 97 && i <= 122) ||
                                  (i >= 48 && i <= 57) ||
                                  92 === i ||
                                  (i >= 128 && a.test(String.fromCharCode(i)))
                                    ? g('‌')
                                      ? o('identifier', 8204, '‌')
                                      : g('‍')
                                        ? o('identifier', 8205, '‍')
                                        : null
                                    : o(
                                        'identifier',
                                        (e = d()).charCodeAt(0),
                                        e,
                                        1
                                      ));
                    })();
                  }
                  function T() {
                    var t, e;
                    return y(']')
                      ? []
                      : ((e = A()) || P('classAtom'),
                        (t = y(']')
                          ? [e]
                          : (function t(e) {
                              var n, r, i;
                              if (y('-') && !v(']')) {
                                f('-'), (i = A()) || P('classAtom'), (r = N);
                                var a = T();
                                return (
                                  a || P('classRanges'),
                                  (n = e.range[0]),
                                  'empty' === a.type
                                    ? [u(e, i, n, r)]
                                    : [u(e, i, n, r)].concat(a)
                                );
                              }
                              return (
                                (i = (function() {
                                  var e = A();
                                  return e || P('classAtom'), y(']') ? e : t(e);
                                })()) || P('nonEmptyClassRangesNoDash'),
                                [e].concat(i)
                              );
                            })(e)) || P('nonEmptyClassRanges'),
                        t);
                  }
                  function A() {
                    return g('-')
                      ? p('-')
                      : (t = b(/^[^\\\]-]/))
                        ? p(t[0])
                        : g('\\')
                          ? ((t = k()) || P('classEscape'), E(t))
                          : void 0;
                    var t;
                  }
                  function P(e, n, r, i) {
                    (r = null == r ? N : r), (i = null == i ? r : i);
                    var a = Math.max(0, r - 10),
                      s = Math.min(i + 10, t.length),
                      o = '    ' + t.substring(a, s),
                      p = '    ' + new Array(r - a + 1).join(' ') + '^';
                    throw SyntaxError(
                      e +
                        ' at position ' +
                        r +
                        (n ? ': ' + n : '') +
                        '\n' +
                        o +
                        '\n' +
                        p
                    );
                  }
                  n || (n = {});
                  var L = [],
                    O = 0,
                    R = !0,
                    I = -1 !== (e || '').indexOf('u'),
                    N = 0;
                  '' === (t = String(t)) && (t = '(?:)');
                  var j = _();
                  j.range[1] !== t.length &&
                    P(
                      'Could not parse entire input - got stuck',
                      '',
                      j.range[1]
                    );
                  for (var M = 0; M < L.length; M++)
                    if (L[M] <= O) return (N = 0), (R = !1), _();
                  return j;
                },
              };
              t.exports ? (t.exports = e) : (window.regjsparser = e);
            })();
          }),
          gt = h(function(t, e) {
            /*! https://mths.be/regenerate v1.3.3 by @mathias | MIT license */
            !(function(n) {
              var r = e,
                i = t && t.exports == r && t,
                a = 'object' == typeof p && p;
              (a.global !== a && a.window !== a) || (n = a);
              var s =
                  'A range’s `stop` value must be greater than or equal to the `start` value.',
                o =
                  'Invalid code point value. Code points range from U+000000 to U+10FFFF.',
                h = /\\x00([^0123456789]|$)/g,
                c = {},
                u = c.hasOwnProperty,
                l = function(t, e) {
                  for (var n = -1, r = t.length; ++n < r; ) e(t[n], n);
                },
                d = c.toString,
                f = function(t) {
                  return '[object Array]' == d.call(t);
                },
                g = function(t) {
                  return 'number' == typeof t || '[object Number]' == d.call(t);
                },
                m = function(t, e) {
                  var n = String(t);
                  return n.length < e ? ('0000' + n).slice(-e) : n;
                },
                y = function(t) {
                  return Number(t)
                    .toString(16)
                    .toUpperCase();
                },
                v = [].slice,
                b = function(t, e) {
                  for (var n, r, i = 0, a = t.length; i < a; ) {
                    if (((n = t[i]), (r = t[i + 1]), e >= n && e < r))
                      return e == n
                        ? r == n + 1
                          ? (t.splice(i, 2), t)
                          : ((t[i] = e + 1), t)
                        : e == r - 1
                          ? ((t[i + 1] = e), t)
                          : (t.splice(i, 2, n, e, e + 1, r), t);
                    i += 2;
                  }
                  return t;
                },
                _ = function(t, e, n) {
                  if (n < e) throw Error(s);
                  for (var r, i, a = 0; a < t.length; ) {
                    if (((r = t[a]), (i = t[a + 1] - 1), r > n)) return t;
                    if (e <= r && n >= i) t.splice(a, 2);
                    else {
                      if (e >= r && n < i)
                        return e == r
                          ? ((t[a] = n + 1), (t[a + 1] = i + 1), t)
                          : (t.splice(a, 2, r, e, n + 1, i + 1), t);
                      if (e >= r && e <= i) t[a + 1] = e;
                      else if (n >= r && n <= i) return (t[a] = n + 1), t;
                      a += 2;
                    }
                  }
                  return t;
                },
                x = function(t, e) {
                  var n,
                    r,
                    i = 0,
                    a = null,
                    s = t.length;
                  if (e < 0 || e > 1114111) throw RangeError(o);
                  for (; i < s; ) {
                    if (((n = t[i]), (r = t[i + 1]), e >= n && e < r)) return t;
                    if (e == n - 1) return (t[i] = e), t;
                    if (n > e)
                      return t.splice(null != a ? a + 2 : 0, 0, e, e + 1), t;
                    if (e == r)
                      return e + 1 == t[i + 2]
                        ? (t.splice(i, 4, n, t[i + 3]), t)
                        : ((t[i + 1] = e + 1), t);
                    (a = i), (i += 2);
                  }
                  return t.push(e, e + 1), t;
                },
                S = function(t, e) {
                  for (var n, r, i = 0, a = t.slice(), s = e.length; i < s; )
                    (a =
                      (n = e[i]) == (r = e[i + 1] - 1) ? x(a, n) : w(a, n, r)),
                      (i += 2);
                  return a;
                },
                w = function(t, e, n) {
                  if (n < e) throw Error(s);
                  if (e < 0 || e > 1114111 || n < 0 || n > 1114111)
                    throw RangeError(o);
                  for (var r, i, a = 0, p = !1, h = t.length; a < h; ) {
                    if (((r = t[a]), (i = t[a + 1]), p)) {
                      if (r == n + 1) return t.splice(a - 1, 2), t;
                      if (r > n) return t;
                      r >= e &&
                        r <= n &&
                        (i > e && i - 1 <= n
                          ? (t.splice(a, 2), (a -= 2))
                          : (t.splice(a - 1, 2), (a -= 2)));
                    } else {
                      if (r == n + 1) return (t[a] = e), t;
                      if (r > n) return t.splice(a, 0, e, n + 1), t;
                      if (e >= r && e < i && n + 1 <= i) return t;
                      (e >= r && e < i) || i == e
                        ? ((t[a + 1] = n + 1), (p = !0))
                        : e <= r &&
                          n + 1 >= i &&
                          ((t[a] = e), (t[a + 1] = n + 1), (p = !0));
                    }
                    a += 2;
                  }
                  return p || t.push(e, n + 1), t;
                },
                E = function(t, e) {
                  var n = 0,
                    r = t.length,
                    i = t[n],
                    a = t[r - 1];
                  if (r >= 2 && (e < i || e > a)) return !1;
                  for (; n < r; ) {
                    if (((i = t[n]), (a = t[n + 1]), e >= i && e < a))
                      return !0;
                    n += 2;
                  }
                  return !1;
                },
                k = function(t) {
                  return !t.length;
                },
                C = function(t) {
                  return 2 == t.length && t[0] + 1 == t[1];
                },
                T = function(t) {
                  for (var e, n, r = 0, i = [], a = t.length; r < a; ) {
                    for (e = t[r], n = t[r + 1]; e < n; ) i.push(e), ++e;
                    r += 2;
                  }
                  return i;
                },
                A = Math.floor,
                P = function(t) {
                  return parseInt(A((t - 65536) / 1024) + 55296, 10);
                },
                L = function(t) {
                  return parseInt(((t - 65536) % 1024) + 56320, 10);
                },
                O = String.fromCharCode,
                R = function(t) {
                  return 9 == t
                    ? '\\t'
                    : 10 == t
                      ? '\\n'
                      : 12 == t
                        ? '\\f'
                        : 13 == t
                          ? '\\r'
                          : 92 == t
                            ? '\\\\'
                            : 36 == t ||
                              (t >= 40 && t <= 43) ||
                              (t >= 45 && t <= 47) ||
                              63 == t ||
                              (t >= 91 && t <= 94) ||
                              (t >= 123 && t <= 125)
                              ? '\\' + O(t)
                              : t >= 32 && t <= 126
                                ? O(t)
                                : t <= 255
                                  ? '\\x' + m(y(t), 2)
                                  : '\\u' + m(y(t), 4);
                },
                I = function(t) {
                  return t <= 65535
                    ? R(t)
                    : '\\u{' + t.toString(16).toUpperCase() + '}';
                },
                N = function(t) {
                  var e = t.length,
                    n = t.charCodeAt(0);
                  return n >= 55296 && n <= 56319 && e > 1
                    ? 1024 * (n - 55296) + t.charCodeAt(1) - 56320 + 65536
                    : n;
                },
                j = function(t) {
                  var e,
                    n,
                    r = '',
                    i = 0,
                    a = t.length;
                  if (C(t)) return R(t[0]);
                  for (; i < a; )
                    (r +=
                      (e = t[i]) == (n = t[i + 1] - 1)
                        ? R(e)
                        : e + 1 == n
                          ? R(e) + R(n)
                          : R(e) + '-' + R(n)),
                      (i += 2);
                  return '[' + r + ']';
                },
                M = function(t) {
                  if (!t.length) return [];
                  for (
                    var e, n, r, i, a, s, o = 0, p = [], h = t.length;
                    o < h;

                  ) {
                    (e = t[o]),
                      (n = t[o + 1] - 1),
                      (r = P(e)),
                      (i = L(e)),
                      (a = P(n));
                    var c = 57343 == (s = L(n)),
                      u = !1;
                    r == a || (56320 == i && c)
                      ? (p.push([[r, a + 1], [i, s + 1]]), (u = !0))
                      : p.push([[r, r + 1], [i, 57344]]),
                      !u &&
                        r + 1 < a &&
                        (c
                          ? (p.push([[r + 1, a + 1], [56320, s + 1]]), (u = !0))
                          : p.push([[r + 1, a], [56320, 57344]])),
                      u || p.push([[a, a + 1], [56320, s + 1]]),
                      (o += 2);
                  }
                  return (function(t) {
                    for (
                      var e,
                        n,
                        r,
                        i,
                        a,
                        s,
                        o = [],
                        p = [],
                        h = !1,
                        c = -1,
                        u = t.length;
                      ++c < u;

                    )
                      if (((e = t[c]), (n = t[c + 1]))) {
                        for (
                          r = e[0], i = e[1], a = n[0], s = n[1], p = i;
                          a && r[0] == a[0] && r[1] == a[1];

                        )
                          (p = C(s) ? x(p, s[0]) : w(p, s[0], s[1] - 1)),
                            (r = (e = t[++c])[0]),
                            (i = e[1]),
                            (a = (n = t[c + 1]) && n[0]),
                            (s = n && n[1]),
                            (h = !0);
                        o.push([r, h ? p : i]), (h = !1);
                      } else o.push(e);
                    return (function(t) {
                      if (1 == t.length) return t;
                      for (var e = -1, n = -1; ++e < t.length; ) {
                        var r = t[e],
                          i = r[1],
                          a = i[0],
                          s = i[1];
                        for (n = e; ++n < t.length; ) {
                          var o = t[n],
                            p = o[1],
                            h = p[0],
                            c = p[1];
                          a == h &&
                            s == c &&
                            (C(o[0])
                              ? (r[0] = x(r[0], o[0][0]))
                              : (r[0] = w(r[0], o[0][0], o[0][1] - 1)),
                            t.splice(n, 1),
                            --n);
                        }
                      }
                      return t;
                    })(o);
                  })(p);
                },
                B = function(t) {
                  return (
                    arguments.length > 1 && (t = v.call(arguments)),
                    this instanceof B
                      ? ((this.data = []), t ? this.add(t) : this)
                      : new B().add(t)
                  );
                };
              B.version = '1.3.3';
              var D = B.prototype;
              !(function(t, e) {
                var n;
                for (n in e) u.call(e, n) && (t[n] = e[n]);
              })(D, {
                add: function(t) {
                  var e = this;
                  return null == t
                    ? e
                    : t instanceof B
                      ? ((e.data = S(e.data, t.data)), e)
                      : (arguments.length > 1 && (t = v.call(arguments)),
                        f(t)
                          ? (l(t, function(t) {
                              e.add(t);
                            }),
                            e)
                          : ((e.data = x(e.data, g(t) ? t : N(t))), e));
                },
                remove: function(t) {
                  var e = this;
                  return null == t
                    ? e
                    : t instanceof B
                      ? ((e.data = (function(t, e) {
                          for (
                            var n, r, i = 0, a = t.slice(), s = e.length;
                            i < s;

                          )
                            (a =
                              (n = e[i]) == (r = e[i + 1] - 1)
                                ? b(a, n)
                                : _(a, n, r)),
                              (i += 2);
                          return a;
                        })(e.data, t.data)),
                        e)
                      : (arguments.length > 1 && (t = v.call(arguments)),
                        f(t)
                          ? (l(t, function(t) {
                              e.remove(t);
                            }),
                            e)
                          : ((e.data = b(e.data, g(t) ? t : N(t))), e));
                },
                addRange: function(t, e) {
                  return (
                    (this.data = w(
                      this.data,
                      g(t) ? t : N(t),
                      g(e) ? e : N(e)
                    )),
                    this
                  );
                },
                removeRange: function(t, e) {
                  var n = g(t) ? t : N(t),
                    r = g(e) ? e : N(e);
                  return (this.data = _(this.data, n, r)), this;
                },
                intersection: function(t) {
                  var e = t instanceof B ? T(t.data) : t;
                  return (
                    (this.data = (function(t, e) {
                      for (var n, r = 0, i = e.length, a = []; r < i; )
                        (n = e[r]), E(t, n) && a.push(n), ++r;
                      return (function(t) {
                        for (
                          var e,
                            n = -1,
                            r = t.length,
                            i = r - 1,
                            a = [],
                            s = !0,
                            o = 0;
                          ++n < r;

                        )
                          if (((e = t[n]), s)) a.push(e), (o = e), (s = !1);
                          else if (e == o + 1) {
                            if (n != i) {
                              o = e;
                              continue;
                            }
                            (s = !0), a.push(e + 1);
                          } else a.push(o + 1, e), (o = e);
                        return s || a.push(e + 1), a;
                      })(a);
                    })(this.data, e)),
                    this
                  );
                },
                contains: function(t) {
                  return E(this.data, g(t) ? t : N(t));
                },
                clone: function() {
                  var t = new B();
                  return (t.data = this.data.slice(0)), t;
                },
                toString: function(t) {
                  var e = (function(t, e, n) {
                    if (n)
                      return (function(t) {
                        var e,
                          n,
                          r = '',
                          i = 0,
                          a = t.length;
                        if (C(t)) return I(t[0]);
                        for (; i < a; )
                          (r +=
                            (e = t[i]) == (n = t[i + 1] - 1)
                              ? I(e)
                              : e + 1 == n
                                ? I(e) + I(n)
                                : I(e) + '-' + I(n)),
                            (i += 2);
                        return '[' + r + ']';
                      })(t);
                    var r = [],
                      i = (function(t) {
                        for (
                          var e,
                            n,
                            r = [],
                            i = [],
                            a = [],
                            s = [],
                            o = 0,
                            p = t.length;
                          o < p;

                        )
                          (e = t[o]),
                            (n = t[o + 1] - 1),
                            e < 55296
                              ? (n < 55296 && a.push(e, n + 1),
                                n >= 55296 &&
                                  n <= 56319 &&
                                  (a.push(e, 55296), r.push(55296, n + 1)),
                                n >= 56320 &&
                                  n <= 57343 &&
                                  (a.push(e, 55296),
                                  r.push(55296, 56320),
                                  i.push(56320, n + 1)),
                                n > 57343 &&
                                  (a.push(e, 55296),
                                  r.push(55296, 56320),
                                  i.push(56320, 57344),
                                  n <= 65535
                                    ? a.push(57344, n + 1)
                                    : (a.push(57344, 65536),
                                      s.push(65536, n + 1))))
                              : e >= 55296 && e <= 56319
                                ? (n >= 55296 && n <= 56319 && r.push(e, n + 1),
                                  n >= 56320 &&
                                    n <= 57343 &&
                                    (r.push(e, 56320), i.push(56320, n + 1)),
                                  n > 57343 &&
                                    (r.push(e, 56320),
                                    i.push(56320, 57344),
                                    n <= 65535
                                      ? a.push(57344, n + 1)
                                      : (a.push(57344, 65536),
                                        s.push(65536, n + 1))))
                                : e >= 56320 && e <= 57343
                                  ? (n >= 56320 &&
                                      n <= 57343 &&
                                      i.push(e, n + 1),
                                    n > 57343 &&
                                      (i.push(e, 57344),
                                      n <= 65535
                                        ? a.push(57344, n + 1)
                                        : (a.push(57344, 65536),
                                          s.push(65536, n + 1))))
                                  : e > 57343 && e <= 65535
                                    ? n <= 65535
                                      ? a.push(e, n + 1)
                                      : (a.push(e, 65536), s.push(65536, n + 1))
                                    : s.push(e, n + 1),
                            (o += 2);
                        return {
                          loneHighSurrogates: r,
                          loneLowSurrogates: i,
                          bmp: a,
                          astral: s,
                        };
                      })(t),
                      a = i.loneHighSurrogates,
                      s = i.loneLowSurrogates,
                      o = i.bmp,
                      p = i.astral,
                      h = !k(a),
                      c = !k(s),
                      u = M(p);
                    return (
                      e && ((o = S(o, a)), (h = !1), (o = S(o, s)), (c = !1)),
                      k(o) || r.push(j(o)),
                      u.length &&
                        r.push(
                          (function(t) {
                            var e = [];
                            return (
                              l(u, function(t) {
                                var n = t[0],
                                  r = t[1];
                                e.push(j(n) + j(r));
                              }),
                              e.join('|')
                            );
                          })()
                        ),
                      h && r.push(j(a) + '(?![\\uDC00-\\uDFFF])'),
                      c && r.push('(?:[^\\uD800-\\uDBFF]|^)' + j(s)),
                      r.join('|')
                    );
                  })(this.data, !!t && t.bmpOnly, !!t && t.hasUnicodeFlag);
                  return e ? e.replace(h, '\\0$1') : '[]';
                },
                toRegExp: function(t) {
                  var e = this.toString(
                    t && -1 != t.indexOf('u') ? { hasUnicodeFlag: !0 } : null
                  );
                  return RegExp(e, t || '');
                },
                valueOf: function() {
                  return T(this.data);
                },
              }),
                (D.toArray = D.valueOf),
                r && !r.nodeType
                  ? i
                    ? (i.exports = B)
                    : (r.regenerate = B)
                  : (n.regenerate = B);
            })(p);
          }),
          mt = new Set([
            'General_Category',
            'Script',
            'Script_Extensions',
            'Alphabetic',
            'Any',
            'ASCII',
            'ASCII_Hex_Digit',
            'Assigned',
            'Bidi_Control',
            'Bidi_Mirrored',
            'Case_Ignorable',
            'Cased',
            'Changes_When_Casefolded',
            'Changes_When_Casemapped',
            'Changes_When_Lowercased',
            'Changes_When_NFKC_Casefolded',
            'Changes_When_Titlecased',
            'Changes_When_Uppercased',
            'Dash',
            'Default_Ignorable_Code_Point',
            'Deprecated',
            'Diacritic',
            'Emoji',
            'Emoji_Component',
            'Emoji_Modifier',
            'Emoji_Modifier_Base',
            'Emoji_Presentation',
            'Extender',
            'Grapheme_Base',
            'Grapheme_Extend',
            'Hex_Digit',
            'ID_Continue',
            'ID_Start',
            'Ideographic',
            'IDS_Binary_Operator',
            'IDS_Trinary_Operator',
            'Join_Control',
            'Logical_Order_Exception',
            'Lowercase',
            'Math',
            'Noncharacter_Code_Point',
            'Pattern_Syntax',
            'Pattern_White_Space',
            'Quotation_Mark',
            'Radical',
            'Regional_Indicator',
            'Sentence_Terminal',
            'Soft_Dotted',
            'Terminal_Punctuation',
            'Unified_Ideograph',
            'Uppercase',
            'Variation_Selector',
            'White_Space',
            'XID_Continue',
            'XID_Start',
          ]),
          yt = new Map([
            ['scx', 'Script_Extensions'],
            ['sc', 'Script'],
            ['gc', 'General_Category'],
            ['AHex', 'ASCII_Hex_Digit'],
            ['Alpha', 'Alphabetic'],
            ['Bidi_C', 'Bidi_Control'],
            ['Bidi_M', 'Bidi_Mirrored'],
            ['Cased', 'Cased'],
            ['CI', 'Case_Ignorable'],
            ['CWCF', 'Changes_When_Casefolded'],
            ['CWCM', 'Changes_When_Casemapped'],
            ['CWKCF', 'Changes_When_NFKC_Casefolded'],
            ['CWL', 'Changes_When_Lowercased'],
            ['CWT', 'Changes_When_Titlecased'],
            ['CWU', 'Changes_When_Uppercased'],
            ['Dash', 'Dash'],
            ['Dep', 'Deprecated'],
            ['DI', 'Default_Ignorable_Code_Point'],
            ['Dia', 'Diacritic'],
            ['Ext', 'Extender'],
            ['Gr_Base', 'Grapheme_Base'],
            ['Gr_Ext', 'Grapheme_Extend'],
            ['Hex', 'Hex_Digit'],
            ['IDC', 'ID_Continue'],
            ['Ideo', 'Ideographic'],
            ['IDS', 'ID_Start'],
            ['IDSB', 'IDS_Binary_Operator'],
            ['IDST', 'IDS_Trinary_Operator'],
            ['Join_C', 'Join_Control'],
            ['LOE', 'Logical_Order_Exception'],
            ['Lower', 'Lowercase'],
            ['Math', 'Math'],
            ['NChar', 'Noncharacter_Code_Point'],
            ['Pat_Syn', 'Pattern_Syntax'],
            ['Pat_WS', 'Pattern_White_Space'],
            ['QMark', 'Quotation_Mark'],
            ['Radical', 'Radical'],
            ['RI', 'Regional_Indicator'],
            ['SD', 'Soft_Dotted'],
            ['STerm', 'Sentence_Terminal'],
            ['Term', 'Terminal_Punctuation'],
            ['UIdeo', 'Unified_Ideograph'],
            ['Upper', 'Uppercase'],
            ['VS', 'Variation_Selector'],
            ['WSpace', 'White_Space'],
            ['space', 'White_Space'],
            ['XIDC', 'XID_Continue'],
            ['XIDS', 'XID_Start'],
          ]),
          vt = function(t) {
            if (mt.has(t)) return t;
            if (yt.has(t)) return yt.get(t);
            throw new Error('Unknown property: ' + t);
          },
          bt = new Map([
            [
              'General_Category',
              new Map([
                ['C', 'Other'],
                ['Cc', 'Control'],
                ['cntrl', 'Control'],
                ['Cf', 'Format'],
                ['Cn', 'Unassigned'],
                ['Co', 'Private_Use'],
                ['Cs', 'Surrogate'],
                ['L', 'Letter'],
                ['LC', 'Cased_Letter'],
                ['Ll', 'Lowercase_Letter'],
                ['Lm', 'Modifier_Letter'],
                ['Lo', 'Other_Letter'],
                ['Lt', 'Titlecase_Letter'],
                ['Lu', 'Uppercase_Letter'],
                ['M', 'Mark'],
                ['Combining_Mark', 'Mark'],
                ['Mc', 'Spacing_Mark'],
                ['Me', 'Enclosing_Mark'],
                ['Mn', 'Nonspacing_Mark'],
                ['N', 'Number'],
                ['Nd', 'Decimal_Number'],
                ['digit', 'Decimal_Number'],
                ['Nl', 'Letter_Number'],
                ['No', 'Other_Number'],
                ['P', 'Punctuation'],
                ['punct', 'Punctuation'],
                ['Pc', 'Connector_Punctuation'],
                ['Pd', 'Dash_Punctuation'],
                ['Pe', 'Close_Punctuation'],
                ['Pf', 'Final_Punctuation'],
                ['Pi', 'Initial_Punctuation'],
                ['Po', 'Other_Punctuation'],
                ['Ps', 'Open_Punctuation'],
                ['S', 'Symbol'],
                ['Sc', 'Currency_Symbol'],
                ['Sk', 'Modifier_Symbol'],
                ['Sm', 'Math_Symbol'],
                ['So', 'Other_Symbol'],
                ['Z', 'Separator'],
                ['Zl', 'Line_Separator'],
                ['Zp', 'Paragraph_Separator'],
                ['Zs', 'Space_Separator'],
                ['Other', 'Other'],
                ['Control', 'Control'],
                ['Format', 'Format'],
                ['Unassigned', 'Unassigned'],
                ['Private_Use', 'Private_Use'],
                ['Surrogate', 'Surrogate'],
                ['Letter', 'Letter'],
                ['Cased_Letter', 'Cased_Letter'],
                ['Lowercase_Letter', 'Lowercase_Letter'],
                ['Modifier_Letter', 'Modifier_Letter'],
                ['Other_Letter', 'Other_Letter'],
                ['Titlecase_Letter', 'Titlecase_Letter'],
                ['Uppercase_Letter', 'Uppercase_Letter'],
                ['Mark', 'Mark'],
                ['Spacing_Mark', 'Spacing_Mark'],
                ['Enclosing_Mark', 'Enclosing_Mark'],
                ['Nonspacing_Mark', 'Nonspacing_Mark'],
                ['Number', 'Number'],
                ['Decimal_Number', 'Decimal_Number'],
                ['Letter_Number', 'Letter_Number'],
                ['Other_Number', 'Other_Number'],
                ['Punctuation', 'Punctuation'],
                ['Connector_Punctuation', 'Connector_Punctuation'],
                ['Dash_Punctuation', 'Dash_Punctuation'],
                ['Close_Punctuation', 'Close_Punctuation'],
                ['Final_Punctuation', 'Final_Punctuation'],
                ['Initial_Punctuation', 'Initial_Punctuation'],
                ['Other_Punctuation', 'Other_Punctuation'],
                ['Open_Punctuation', 'Open_Punctuation'],
                ['Symbol', 'Symbol'],
                ['Currency_Symbol', 'Currency_Symbol'],
                ['Modifier_Symbol', 'Modifier_Symbol'],
                ['Math_Symbol', 'Math_Symbol'],
                ['Other_Symbol', 'Other_Symbol'],
                ['Separator', 'Separator'],
                ['Line_Separator', 'Line_Separator'],
                ['Paragraph_Separator', 'Paragraph_Separator'],
                ['Space_Separator', 'Space_Separator'],
              ]),
            ],
            [
              'Script',
              new Map([
                ['Adlm', 'Adlam'],
                ['Aghb', 'Caucasian_Albanian'],
                ['Ahom', 'Ahom'],
                ['Arab', 'Arabic'],
                ['Armi', 'Imperial_Aramaic'],
                ['Armn', 'Armenian'],
                ['Avst', 'Avestan'],
                ['Bali', 'Balinese'],
                ['Bamu', 'Bamum'],
                ['Bass', 'Bassa_Vah'],
                ['Batk', 'Batak'],
                ['Beng', 'Bengali'],
                ['Bhks', 'Bhaiksuki'],
                ['Bopo', 'Bopomofo'],
                ['Brah', 'Brahmi'],
                ['Brai', 'Braille'],
                ['Bugi', 'Buginese'],
                ['Buhd', 'Buhid'],
                ['Cakm', 'Chakma'],
                ['Cans', 'Canadian_Aboriginal'],
                ['Cari', 'Carian'],
                ['Cham', 'Cham'],
                ['Cher', 'Cherokee'],
                ['Copt', 'Coptic'],
                ['Qaac', 'Coptic'],
                ['Cprt', 'Cypriot'],
                ['Cyrl', 'Cyrillic'],
                ['Deva', 'Devanagari'],
                ['Dsrt', 'Deseret'],
                ['Dupl', 'Duployan'],
                ['Egyp', 'Egyptian_Hieroglyphs'],
                ['Elba', 'Elbasan'],
                ['Ethi', 'Ethiopic'],
                ['Geor', 'Georgian'],
                ['Glag', 'Glagolitic'],
                ['Gonm', 'Masaram_Gondi'],
                ['Goth', 'Gothic'],
                ['Gran', 'Grantha'],
                ['Grek', 'Greek'],
                ['Gujr', 'Gujarati'],
                ['Guru', 'Gurmukhi'],
                ['Hang', 'Hangul'],
                ['Hani', 'Han'],
                ['Hano', 'Hanunoo'],
                ['Hatr', 'Hatran'],
                ['Hebr', 'Hebrew'],
                ['Hira', 'Hiragana'],
                ['Hluw', 'Anatolian_Hieroglyphs'],
                ['Hmng', 'Pahawh_Hmong'],
                ['Hrkt', 'Katakana_Or_Hiragana'],
                ['Hung', 'Old_Hungarian'],
                ['Ital', 'Old_Italic'],
                ['Java', 'Javanese'],
                ['Kali', 'Kayah_Li'],
                ['Kana', 'Katakana'],
                ['Khar', 'Kharoshthi'],
                ['Khmr', 'Khmer'],
                ['Khoj', 'Khojki'],
                ['Knda', 'Kannada'],
                ['Kthi', 'Kaithi'],
                ['Lana', 'Tai_Tham'],
                ['Laoo', 'Lao'],
                ['Latn', 'Latin'],
                ['Lepc', 'Lepcha'],
                ['Limb', 'Limbu'],
                ['Lina', 'Linear_A'],
                ['Linb', 'Linear_B'],
                ['Lisu', 'Lisu'],
                ['Lyci', 'Lycian'],
                ['Lydi', 'Lydian'],
                ['Mahj', 'Mahajani'],
                ['Mand', 'Mandaic'],
                ['Mani', 'Manichaean'],
                ['Marc', 'Marchen'],
                ['Mend', 'Mende_Kikakui'],
                ['Merc', 'Meroitic_Cursive'],
                ['Mero', 'Meroitic_Hieroglyphs'],
                ['Mlym', 'Malayalam'],
                ['Modi', 'Modi'],
                ['Mong', 'Mongolian'],
                ['Mroo', 'Mro'],
                ['Mtei', 'Meetei_Mayek'],
                ['Mult', 'Multani'],
                ['Mymr', 'Myanmar'],
                ['Narb', 'Old_North_Arabian'],
                ['Nbat', 'Nabataean'],
                ['Newa', 'Newa'],
                ['Nkoo', 'Nko'],
                ['Nshu', 'Nushu'],
                ['Ogam', 'Ogham'],
                ['Olck', 'Ol_Chiki'],
                ['Orkh', 'Old_Turkic'],
                ['Orya', 'Oriya'],
                ['Osge', 'Osage'],
                ['Osma', 'Osmanya'],
                ['Palm', 'Palmyrene'],
                ['Pauc', 'Pau_Cin_Hau'],
                ['Perm', 'Old_Permic'],
                ['Phag', 'Phags_Pa'],
                ['Phli', 'Inscriptional_Pahlavi'],
                ['Phlp', 'Psalter_Pahlavi'],
                ['Phnx', 'Phoenician'],
                ['Plrd', 'Miao'],
                ['Prti', 'Inscriptional_Parthian'],
                ['Rjng', 'Rejang'],
                ['Runr', 'Runic'],
                ['Samr', 'Samaritan'],
                ['Sarb', 'Old_South_Arabian'],
                ['Saur', 'Saurashtra'],
                ['Sgnw', 'SignWriting'],
                ['Shaw', 'Shavian'],
                ['Shrd', 'Sharada'],
                ['Sidd', 'Siddham'],
                ['Sind', 'Khudawadi'],
                ['Sinh', 'Sinhala'],
                ['Sora', 'Sora_Sompeng'],
                ['Soyo', 'Soyombo'],
                ['Sund', 'Sundanese'],
                ['Sylo', 'Syloti_Nagri'],
                ['Syrc', 'Syriac'],
                ['Tagb', 'Tagbanwa'],
                ['Takr', 'Takri'],
                ['Tale', 'Tai_Le'],
                ['Talu', 'New_Tai_Lue'],
                ['Taml', 'Tamil'],
                ['Tang', 'Tangut'],
                ['Tavt', 'Tai_Viet'],
                ['Telu', 'Telugu'],
                ['Tfng', 'Tifinagh'],
                ['Tglg', 'Tagalog'],
                ['Thaa', 'Thaana'],
                ['Thai', 'Thai'],
                ['Tibt', 'Tibetan'],
                ['Tirh', 'Tirhuta'],
                ['Ugar', 'Ugaritic'],
                ['Vaii', 'Vai'],
                ['Wara', 'Warang_Citi'],
                ['Xpeo', 'Old_Persian'],
                ['Xsux', 'Cuneiform'],
                ['Yiii', 'Yi'],
                ['Zanb', 'Zanabazar_Square'],
                ['Zinh', 'Inherited'],
                ['Qaai', 'Inherited'],
                ['Zyyy', 'Common'],
                ['Zzzz', 'Unknown'],
                ['Adlam', 'Adlam'],
                ['Caucasian_Albanian', 'Caucasian_Albanian'],
                ['Arabic', 'Arabic'],
                ['Imperial_Aramaic', 'Imperial_Aramaic'],
                ['Armenian', 'Armenian'],
                ['Avestan', 'Avestan'],
                ['Balinese', 'Balinese'],
                ['Bamum', 'Bamum'],
                ['Bassa_Vah', 'Bassa_Vah'],
                ['Batak', 'Batak'],
                ['Bengali', 'Bengali'],
                ['Bhaiksuki', 'Bhaiksuki'],
                ['Bopomofo', 'Bopomofo'],
                ['Brahmi', 'Brahmi'],
                ['Braille', 'Braille'],
                ['Buginese', 'Buginese'],
                ['Buhid', 'Buhid'],
                ['Chakma', 'Chakma'],
                ['Canadian_Aboriginal', 'Canadian_Aboriginal'],
                ['Carian', 'Carian'],
                ['Cherokee', 'Cherokee'],
                ['Coptic', 'Coptic'],
                ['Cypriot', 'Cypriot'],
                ['Cyrillic', 'Cyrillic'],
                ['Devanagari', 'Devanagari'],
                ['Deseret', 'Deseret'],
                ['Duployan', 'Duployan'],
                ['Egyptian_Hieroglyphs', 'Egyptian_Hieroglyphs'],
                ['Elbasan', 'Elbasan'],
                ['Ethiopic', 'Ethiopic'],
                ['Georgian', 'Georgian'],
                ['Glagolitic', 'Glagolitic'],
                ['Masaram_Gondi', 'Masaram_Gondi'],
                ['Gothic', 'Gothic'],
                ['Grantha', 'Grantha'],
                ['Greek', 'Greek'],
                ['Gujarati', 'Gujarati'],
                ['Gurmukhi', 'Gurmukhi'],
                ['Hangul', 'Hangul'],
                ['Han', 'Han'],
                ['Hanunoo', 'Hanunoo'],
                ['Hatran', 'Hatran'],
                ['Hebrew', 'Hebrew'],
                ['Hiragana', 'Hiragana'],
                ['Anatolian_Hieroglyphs', 'Anatolian_Hieroglyphs'],
                ['Pahawh_Hmong', 'Pahawh_Hmong'],
                ['Katakana_Or_Hiragana', 'Katakana_Or_Hiragana'],
                ['Old_Hungarian', 'Old_Hungarian'],
                ['Old_Italic', 'Old_Italic'],
                ['Javanese', 'Javanese'],
                ['Kayah_Li', 'Kayah_Li'],
                ['Katakana', 'Katakana'],
                ['Kharoshthi', 'Kharoshthi'],
                ['Khmer', 'Khmer'],
                ['Khojki', 'Khojki'],
                ['Kannada', 'Kannada'],
                ['Kaithi', 'Kaithi'],
                ['Tai_Tham', 'Tai_Tham'],
                ['Lao', 'Lao'],
                ['Latin', 'Latin'],
                ['Lepcha', 'Lepcha'],
                ['Limbu', 'Limbu'],
                ['Linear_A', 'Linear_A'],
                ['Linear_B', 'Linear_B'],
                ['Lycian', 'Lycian'],
                ['Lydian', 'Lydian'],
                ['Mahajani', 'Mahajani'],
                ['Mandaic', 'Mandaic'],
                ['Manichaean', 'Manichaean'],
                ['Marchen', 'Marchen'],
                ['Mende_Kikakui', 'Mende_Kikakui'],
                ['Meroitic_Cursive', 'Meroitic_Cursive'],
                ['Meroitic_Hieroglyphs', 'Meroitic_Hieroglyphs'],
                ['Malayalam', 'Malayalam'],
                ['Mongolian', 'Mongolian'],
                ['Mro', 'Mro'],
                ['Meetei_Mayek', 'Meetei_Mayek'],
                ['Multani', 'Multani'],
                ['Myanmar', 'Myanmar'],
                ['Old_North_Arabian', 'Old_North_Arabian'],
                ['Nabataean', 'Nabataean'],
                ['Nko', 'Nko'],
                ['Nushu', 'Nushu'],
                ['Ogham', 'Ogham'],
                ['Ol_Chiki', 'Ol_Chiki'],
                ['Old_Turkic', 'Old_Turkic'],
                ['Oriya', 'Oriya'],
                ['Osage', 'Osage'],
                ['Osmanya', 'Osmanya'],
                ['Palmyrene', 'Palmyrene'],
                ['Pau_Cin_Hau', 'Pau_Cin_Hau'],
                ['Old_Permic', 'Old_Permic'],
                ['Phags_Pa', 'Phags_Pa'],
                ['Inscriptional_Pahlavi', 'Inscriptional_Pahlavi'],
                ['Psalter_Pahlavi', 'Psalter_Pahlavi'],
                ['Phoenician', 'Phoenician'],
                ['Miao', 'Miao'],
                ['Inscriptional_Parthian', 'Inscriptional_Parthian'],
                ['Rejang', 'Rejang'],
                ['Runic', 'Runic'],
                ['Samaritan', 'Samaritan'],
                ['Old_South_Arabian', 'Old_South_Arabian'],
                ['Saurashtra', 'Saurashtra'],
                ['SignWriting', 'SignWriting'],
                ['Shavian', 'Shavian'],
                ['Sharada', 'Sharada'],
                ['Siddham', 'Siddham'],
                ['Khudawadi', 'Khudawadi'],
                ['Sinhala', 'Sinhala'],
                ['Sora_Sompeng', 'Sora_Sompeng'],
                ['Soyombo', 'Soyombo'],
                ['Sundanese', 'Sundanese'],
                ['Syloti_Nagri', 'Syloti_Nagri'],
                ['Syriac', 'Syriac'],
                ['Tagbanwa', 'Tagbanwa'],
                ['Takri', 'Takri'],
                ['Tai_Le', 'Tai_Le'],
                ['New_Tai_Lue', 'New_Tai_Lue'],
                ['Tamil', 'Tamil'],
                ['Tangut', 'Tangut'],
                ['Tai_Viet', 'Tai_Viet'],
                ['Telugu', 'Telugu'],
                ['Tifinagh', 'Tifinagh'],
                ['Tagalog', 'Tagalog'],
                ['Thaana', 'Thaana'],
                ['Tibetan', 'Tibetan'],
                ['Tirhuta', 'Tirhuta'],
                ['Ugaritic', 'Ugaritic'],
                ['Vai', 'Vai'],
                ['Warang_Citi', 'Warang_Citi'],
                ['Old_Persian', 'Old_Persian'],
                ['Cuneiform', 'Cuneiform'],
                ['Yi', 'Yi'],
                ['Zanabazar_Square', 'Zanabazar_Square'],
                ['Inherited', 'Inherited'],
                ['Common', 'Common'],
                ['Unknown', 'Unknown'],
              ]),
            ],
            [
              'Script_Extensions',
              new Map([
                ['Adlm', 'Adlam'],
                ['Aghb', 'Caucasian_Albanian'],
                ['Ahom', 'Ahom'],
                ['Arab', 'Arabic'],
                ['Armi', 'Imperial_Aramaic'],
                ['Armn', 'Armenian'],
                ['Avst', 'Avestan'],
                ['Bali', 'Balinese'],
                ['Bamu', 'Bamum'],
                ['Bass', 'Bassa_Vah'],
                ['Batk', 'Batak'],
                ['Beng', 'Bengali'],
                ['Bhks', 'Bhaiksuki'],
                ['Bopo', 'Bopomofo'],
                ['Brah', 'Brahmi'],
                ['Brai', 'Braille'],
                ['Bugi', 'Buginese'],
                ['Buhd', 'Buhid'],
                ['Cakm', 'Chakma'],
                ['Cans', 'Canadian_Aboriginal'],
                ['Cari', 'Carian'],
                ['Cham', 'Cham'],
                ['Cher', 'Cherokee'],
                ['Copt', 'Coptic'],
                ['Qaac', 'Coptic'],
                ['Cprt', 'Cypriot'],
                ['Cyrl', 'Cyrillic'],
                ['Deva', 'Devanagari'],
                ['Dsrt', 'Deseret'],
                ['Dupl', 'Duployan'],
                ['Egyp', 'Egyptian_Hieroglyphs'],
                ['Elba', 'Elbasan'],
                ['Ethi', 'Ethiopic'],
                ['Geor', 'Georgian'],
                ['Glag', 'Glagolitic'],
                ['Gonm', 'Masaram_Gondi'],
                ['Goth', 'Gothic'],
                ['Gran', 'Grantha'],
                ['Grek', 'Greek'],
                ['Gujr', 'Gujarati'],
                ['Guru', 'Gurmukhi'],
                ['Hang', 'Hangul'],
                ['Hani', 'Han'],
                ['Hano', 'Hanunoo'],
                ['Hatr', 'Hatran'],
                ['Hebr', 'Hebrew'],
                ['Hira', 'Hiragana'],
                ['Hluw', 'Anatolian_Hieroglyphs'],
                ['Hmng', 'Pahawh_Hmong'],
                ['Hrkt', 'Katakana_Or_Hiragana'],
                ['Hung', 'Old_Hungarian'],
                ['Ital', 'Old_Italic'],
                ['Java', 'Javanese'],
                ['Kali', 'Kayah_Li'],
                ['Kana', 'Katakana'],
                ['Khar', 'Kharoshthi'],
                ['Khmr', 'Khmer'],
                ['Khoj', 'Khojki'],
                ['Knda', 'Kannada'],
                ['Kthi', 'Kaithi'],
                ['Lana', 'Tai_Tham'],
                ['Laoo', 'Lao'],
                ['Latn', 'Latin'],
                ['Lepc', 'Lepcha'],
                ['Limb', 'Limbu'],
                ['Lina', 'Linear_A'],
                ['Linb', 'Linear_B'],
                ['Lisu', 'Lisu'],
                ['Lyci', 'Lycian'],
                ['Lydi', 'Lydian'],
                ['Mahj', 'Mahajani'],
                ['Mand', 'Mandaic'],
                ['Mani', 'Manichaean'],
                ['Marc', 'Marchen'],
                ['Mend', 'Mende_Kikakui'],
                ['Merc', 'Meroitic_Cursive'],
                ['Mero', 'Meroitic_Hieroglyphs'],
                ['Mlym', 'Malayalam'],
                ['Modi', 'Modi'],
                ['Mong', 'Mongolian'],
                ['Mroo', 'Mro'],
                ['Mtei', 'Meetei_Mayek'],
                ['Mult', 'Multani'],
                ['Mymr', 'Myanmar'],
                ['Narb', 'Old_North_Arabian'],
                ['Nbat', 'Nabataean'],
                ['Newa', 'Newa'],
                ['Nkoo', 'Nko'],
                ['Nshu', 'Nushu'],
                ['Ogam', 'Ogham'],
                ['Olck', 'Ol_Chiki'],
                ['Orkh', 'Old_Turkic'],
                ['Orya', 'Oriya'],
                ['Osge', 'Osage'],
                ['Osma', 'Osmanya'],
                ['Palm', 'Palmyrene'],
                ['Pauc', 'Pau_Cin_Hau'],
                ['Perm', 'Old_Permic'],
                ['Phag', 'Phags_Pa'],
                ['Phli', 'Inscriptional_Pahlavi'],
                ['Phlp', 'Psalter_Pahlavi'],
                ['Phnx', 'Phoenician'],
                ['Plrd', 'Miao'],
                ['Prti', 'Inscriptional_Parthian'],
                ['Rjng', 'Rejang'],
                ['Runr', 'Runic'],
                ['Samr', 'Samaritan'],
                ['Sarb', 'Old_South_Arabian'],
                ['Saur', 'Saurashtra'],
                ['Sgnw', 'SignWriting'],
                ['Shaw', 'Shavian'],
                ['Shrd', 'Sharada'],
                ['Sidd', 'Siddham'],
                ['Sind', 'Khudawadi'],
                ['Sinh', 'Sinhala'],
                ['Sora', 'Sora_Sompeng'],
                ['Soyo', 'Soyombo'],
                ['Sund', 'Sundanese'],
                ['Sylo', 'Syloti_Nagri'],
                ['Syrc', 'Syriac'],
                ['Tagb', 'Tagbanwa'],
                ['Takr', 'Takri'],
                ['Tale', 'Tai_Le'],
                ['Talu', 'New_Tai_Lue'],
                ['Taml', 'Tamil'],
                ['Tang', 'Tangut'],
                ['Tavt', 'Tai_Viet'],
                ['Telu', 'Telugu'],
                ['Tfng', 'Tifinagh'],
                ['Tglg', 'Tagalog'],
                ['Thaa', 'Thaana'],
                ['Thai', 'Thai'],
                ['Tibt', 'Tibetan'],
                ['Tirh', 'Tirhuta'],
                ['Ugar', 'Ugaritic'],
                ['Vaii', 'Vai'],
                ['Wara', 'Warang_Citi'],
                ['Xpeo', 'Old_Persian'],
                ['Xsux', 'Cuneiform'],
                ['Yiii', 'Yi'],
                ['Zanb', 'Zanabazar_Square'],
                ['Zinh', 'Inherited'],
                ['Qaai', 'Inherited'],
                ['Zyyy', 'Common'],
                ['Zzzz', 'Unknown'],
                ['Adlam', 'Adlam'],
                ['Caucasian_Albanian', 'Caucasian_Albanian'],
                ['Arabic', 'Arabic'],
                ['Imperial_Aramaic', 'Imperial_Aramaic'],
                ['Armenian', 'Armenian'],
                ['Avestan', 'Avestan'],
                ['Balinese', 'Balinese'],
                ['Bamum', 'Bamum'],
                ['Bassa_Vah', 'Bassa_Vah'],
                ['Batak', 'Batak'],
                ['Bengali', 'Bengali'],
                ['Bhaiksuki', 'Bhaiksuki'],
                ['Bopomofo', 'Bopomofo'],
                ['Brahmi', 'Brahmi'],
                ['Braille', 'Braille'],
                ['Buginese', 'Buginese'],
                ['Buhid', 'Buhid'],
                ['Chakma', 'Chakma'],
                ['Canadian_Aboriginal', 'Canadian_Aboriginal'],
                ['Carian', 'Carian'],
                ['Cherokee', 'Cherokee'],
                ['Coptic', 'Coptic'],
                ['Cypriot', 'Cypriot'],
                ['Cyrillic', 'Cyrillic'],
                ['Devanagari', 'Devanagari'],
                ['Deseret', 'Deseret'],
                ['Duployan', 'Duployan'],
                ['Egyptian_Hieroglyphs', 'Egyptian_Hieroglyphs'],
                ['Elbasan', 'Elbasan'],
                ['Ethiopic', 'Ethiopic'],
                ['Georgian', 'Georgian'],
                ['Glagolitic', 'Glagolitic'],
                ['Masaram_Gondi', 'Masaram_Gondi'],
                ['Gothic', 'Gothic'],
                ['Grantha', 'Grantha'],
                ['Greek', 'Greek'],
                ['Gujarati', 'Gujarati'],
                ['Gurmukhi', 'Gurmukhi'],
                ['Hangul', 'Hangul'],
                ['Han', 'Han'],
                ['Hanunoo', 'Hanunoo'],
                ['Hatran', 'Hatran'],
                ['Hebrew', 'Hebrew'],
                ['Hiragana', 'Hiragana'],
                ['Anatolian_Hieroglyphs', 'Anatolian_Hieroglyphs'],
                ['Pahawh_Hmong', 'Pahawh_Hmong'],
                ['Katakana_Or_Hiragana', 'Katakana_Or_Hiragana'],
                ['Old_Hungarian', 'Old_Hungarian'],
                ['Old_Italic', 'Old_Italic'],
                ['Javanese', 'Javanese'],
                ['Kayah_Li', 'Kayah_Li'],
                ['Katakana', 'Katakana'],
                ['Kharoshthi', 'Kharoshthi'],
                ['Khmer', 'Khmer'],
                ['Khojki', 'Khojki'],
                ['Kannada', 'Kannada'],
                ['Kaithi', 'Kaithi'],
                ['Tai_Tham', 'Tai_Tham'],
                ['Lao', 'Lao'],
                ['Latin', 'Latin'],
                ['Lepcha', 'Lepcha'],
                ['Limbu', 'Limbu'],
                ['Linear_A', 'Linear_A'],
                ['Linear_B', 'Linear_B'],
                ['Lycian', 'Lycian'],
                ['Lydian', 'Lydian'],
                ['Mahajani', 'Mahajani'],
                ['Mandaic', 'Mandaic'],
                ['Manichaean', 'Manichaean'],
                ['Marchen', 'Marchen'],
                ['Mende_Kikakui', 'Mende_Kikakui'],
                ['Meroitic_Cursive', 'Meroitic_Cursive'],
                ['Meroitic_Hieroglyphs', 'Meroitic_Hieroglyphs'],
                ['Malayalam', 'Malayalam'],
                ['Mongolian', 'Mongolian'],
                ['Mro', 'Mro'],
                ['Meetei_Mayek', 'Meetei_Mayek'],
                ['Multani', 'Multani'],
                ['Myanmar', 'Myanmar'],
                ['Old_North_Arabian', 'Old_North_Arabian'],
                ['Nabataean', 'Nabataean'],
                ['Nko', 'Nko'],
                ['Nushu', 'Nushu'],
                ['Ogham', 'Ogham'],
                ['Ol_Chiki', 'Ol_Chiki'],
                ['Old_Turkic', 'Old_Turkic'],
                ['Oriya', 'Oriya'],
                ['Osage', 'Osage'],
                ['Osmanya', 'Osmanya'],
                ['Palmyrene', 'Palmyrene'],
                ['Pau_Cin_Hau', 'Pau_Cin_Hau'],
                ['Old_Permic', 'Old_Permic'],
                ['Phags_Pa', 'Phags_Pa'],
                ['Inscriptional_Pahlavi', 'Inscriptional_Pahlavi'],
                ['Psalter_Pahlavi', 'Psalter_Pahlavi'],
                ['Phoenician', 'Phoenician'],
                ['Miao', 'Miao'],
                ['Inscriptional_Parthian', 'Inscriptional_Parthian'],
                ['Rejang', 'Rejang'],
                ['Runic', 'Runic'],
                ['Samaritan', 'Samaritan'],
                ['Old_South_Arabian', 'Old_South_Arabian'],
                ['Saurashtra', 'Saurashtra'],
                ['SignWriting', 'SignWriting'],
                ['Shavian', 'Shavian'],
                ['Sharada', 'Sharada'],
                ['Siddham', 'Siddham'],
                ['Khudawadi', 'Khudawadi'],
                ['Sinhala', 'Sinhala'],
                ['Sora_Sompeng', 'Sora_Sompeng'],
                ['Soyombo', 'Soyombo'],
                ['Sundanese', 'Sundanese'],
                ['Syloti_Nagri', 'Syloti_Nagri'],
                ['Syriac', 'Syriac'],
                ['Tagbanwa', 'Tagbanwa'],
                ['Takri', 'Takri'],
                ['Tai_Le', 'Tai_Le'],
                ['New_Tai_Lue', 'New_Tai_Lue'],
                ['Tamil', 'Tamil'],
                ['Tangut', 'Tangut'],
                ['Tai_Viet', 'Tai_Viet'],
                ['Telugu', 'Telugu'],
                ['Tifinagh', 'Tifinagh'],
                ['Tagalog', 'Tagalog'],
                ['Thaana', 'Thaana'],
                ['Tibetan', 'Tibetan'],
                ['Tirhuta', 'Tirhuta'],
                ['Ugaritic', 'Ugaritic'],
                ['Vai', 'Vai'],
                ['Warang_Citi', 'Warang_Citi'],
                ['Old_Persian', 'Old_Persian'],
                ['Cuneiform', 'Cuneiform'],
                ['Yi', 'Yi'],
                ['Zanabazar_Square', 'Zanabazar_Square'],
                ['Inherited', 'Inherited'],
                ['Common', 'Common'],
                ['Unknown', 'Unknown'],
              ]),
            ],
          ]),
          _t = function(t, e) {
            var n = bt.get(t);
            if (!n) throw new Error('Unknown property `' + t + '`.');
            var r = n.get(e);
            if (r) return r;
            throw new Error(
              'Unknown value `' + e + '` for property `' + t + '`.'
            );
          },
          xt = new Map([
            [75, 8490],
            [83, 383],
            [107, 8490],
            [115, 383],
            [181, 924],
            [197, 8491],
            [223, 7838],
            [229, 8491],
            [383, 83],
            [452, 453],
            [453, 452],
            [455, 456],
            [456, 455],
            [458, 459],
            [459, 458],
            [497, 498],
            [498, 497],
            [618, 42926],
            [669, 42930],
            [837, 8126],
            [914, 976],
            [917, 1013],
            [920, 1012],
            [921, 8126],
            [922, 1008],
            [924, 181],
            [928, 982],
            [929, 1009],
            [931, 962],
            [934, 981],
            [937, 8486],
            [952, 1012],
            [962, 931],
            [969, 8486],
            [976, 914],
            [977, 1012],
            [981, 934],
            [982, 928],
            [1008, 922],
            [1009, 929],
            [1012, [920, 977, 952]],
            [1013, 917],
            [1042, 7296],
            [1044, 7297],
            [1054, 7298],
            [1057, 7299],
            [1058, 7301],
            [1066, 7302],
            [1074, 7296],
            [1076, 7297],
            [1086, 7298],
            [1089, 7299],
            [1090, [7300, 7301]],
            [1098, 7302],
            [1122, 7303],
            [1123, 7303],
            [5024, 43888],
            [5025, 43889],
            [5026, 43890],
            [5027, 43891],
            [5028, 43892],
            [5029, 43893],
            [5030, 43894],
            [5031, 43895],
            [5032, 43896],
            [5033, 43897],
            [5034, 43898],
            [5035, 43899],
            [5036, 43900],
            [5037, 43901],
            [5038, 43902],
            [5039, 43903],
            [5040, 43904],
            [5041, 43905],
            [5042, 43906],
            [5043, 43907],
            [5044, 43908],
            [5045, 43909],
            [5046, 43910],
            [5047, 43911],
            [5048, 43912],
            [5049, 43913],
            [5050, 43914],
            [5051, 43915],
            [5052, 43916],
            [5053, 43917],
            [5054, 43918],
            [5055, 43919],
            [5056, 43920],
            [5057, 43921],
            [5058, 43922],
            [5059, 43923],
            [5060, 43924],
            [5061, 43925],
            [5062, 43926],
            [5063, 43927],
            [5064, 43928],
            [5065, 43929],
            [5066, 43930],
            [5067, 43931],
            [5068, 43932],
            [5069, 43933],
            [5070, 43934],
            [5071, 43935],
            [5072, 43936],
            [5073, 43937],
            [5074, 43938],
            [5075, 43939],
            [5076, 43940],
            [5077, 43941],
            [5078, 43942],
            [5079, 43943],
            [5080, 43944],
            [5081, 43945],
            [5082, 43946],
            [5083, 43947],
            [5084, 43948],
            [5085, 43949],
            [5086, 43950],
            [5087, 43951],
            [5088, 43952],
            [5089, 43953],
            [5090, 43954],
            [5091, 43955],
            [5092, 43956],
            [5093, 43957],
            [5094, 43958],
            [5095, 43959],
            [5096, 43960],
            [5097, 43961],
            [5098, 43962],
            [5099, 43963],
            [5100, 43964],
            [5101, 43965],
            [5102, 43966],
            [5103, 43967],
            [5104, 5112],
            [5105, 5113],
            [5106, 5114],
            [5107, 5115],
            [5108, 5116],
            [5109, 5117],
            [5112, 5104],
            [5113, 5105],
            [5114, 5106],
            [5115, 5107],
            [5116, 5108],
            [5117, 5109],
            [7296, [1042, 1074]],
            [7297, [1044, 1076]],
            [7298, [1054, 1086]],
            [7299, [1057, 1089]],
            [7300, [7301, 1090]],
            [7301, [1058, 7300, 1090]],
            [7302, [1066, 1098]],
            [7303, [1122, 1123]],
            [7304, [42570, 42571]],
            [7776, 7835],
            [7835, 7776],
            [7838, 223],
            [8064, 8072],
            [8065, 8073],
            [8066, 8074],
            [8067, 8075],
            [8068, 8076],
            [8069, 8077],
            [8070, 8078],
            [8071, 8079],
            [8072, 8064],
            [8073, 8065],
            [8074, 8066],
            [8075, 8067],
            [8076, 8068],
            [8077, 8069],
            [8078, 8070],
            [8079, 8071],
            [8080, 8088],
            [8081, 8089],
            [8082, 8090],
            [8083, 8091],
            [8084, 8092],
            [8085, 8093],
            [8086, 8094],
            [8087, 8095],
            [8088, 8080],
            [8089, 8081],
            [8090, 8082],
            [8091, 8083],
            [8092, 8084],
            [8093, 8085],
            [8094, 8086],
            [8095, 8087],
            [8096, 8104],
            [8097, 8105],
            [8098, 8106],
            [8099, 8107],
            [8100, 8108],
            [8101, 8109],
            [8102, 8110],
            [8103, 8111],
            [8104, 8096],
            [8105, 8097],
            [8106, 8098],
            [8107, 8099],
            [8108, 8100],
            [8109, 8101],
            [8110, 8102],
            [8111, 8103],
            [8115, 8124],
            [8124, 8115],
            [8126, [837, 921]],
            [8131, 8140],
            [8140, 8131],
            [8179, 8188],
            [8188, 8179],
            [8486, [937, 969]],
            [8490, 75],
            [8491, [197, 229]],
            [42570, 7304],
            [42571, 7304],
            [42926, 618],
            [42930, 669],
            [42931, 43859],
            [42932, 42933],
            [42933, 42932],
            [42934, 42935],
            [42935, 42934],
            [43859, 42931],
            [43888, 5024],
            [43889, 5025],
            [43890, 5026],
            [43891, 5027],
            [43892, 5028],
            [43893, 5029],
            [43894, 5030],
            [43895, 5031],
            [43896, 5032],
            [43897, 5033],
            [43898, 5034],
            [43899, 5035],
            [43900, 5036],
            [43901, 5037],
            [43902, 5038],
            [43903, 5039],
            [43904, 5040],
            [43905, 5041],
            [43906, 5042],
            [43907, 5043],
            [43908, 5044],
            [43909, 5045],
            [43910, 5046],
            [43911, 5047],
            [43912, 5048],
            [43913, 5049],
            [43914, 5050],
            [43915, 5051],
            [43916, 5052],
            [43917, 5053],
            [43918, 5054],
            [43919, 5055],
            [43920, 5056],
            [43921, 5057],
            [43922, 5058],
            [43923, 5059],
            [43924, 5060],
            [43925, 5061],
            [43926, 5062],
            [43927, 5063],
            [43928, 5064],
            [43929, 5065],
            [43930, 5066],
            [43931, 5067],
            [43932, 5068],
            [43933, 5069],
            [43934, 5070],
            [43935, 5071],
            [43936, 5072],
            [43937, 5073],
            [43938, 5074],
            [43939, 5075],
            [43940, 5076],
            [43941, 5077],
            [43942, 5078],
            [43943, 5079],
            [43944, 5080],
            [43945, 5081],
            [43946, 5082],
            [43947, 5083],
            [43948, 5084],
            [43949, 5085],
            [43950, 5086],
            [43951, 5087],
            [43952, 5088],
            [43953, 5089],
            [43954, 5090],
            [43955, 5091],
            [43956, 5092],
            [43957, 5093],
            [43958, 5094],
            [43959, 5095],
            [43960, 5096],
            [43961, 5097],
            [43962, 5098],
            [43963, 5099],
            [43964, 5100],
            [43965, 5101],
            [43966, 5102],
            [43967, 5103],
            [66560, 66600],
            [66561, 66601],
            [66562, 66602],
            [66563, 66603],
            [66564, 66604],
            [66565, 66605],
            [66566, 66606],
            [66567, 66607],
            [66568, 66608],
            [66569, 66609],
            [66570, 66610],
            [66571, 66611],
            [66572, 66612],
            [66573, 66613],
            [66574, 66614],
            [66575, 66615],
            [66576, 66616],
            [66577, 66617],
            [66578, 66618],
            [66579, 66619],
            [66580, 66620],
            [66581, 66621],
            [66582, 66622],
            [66583, 66623],
            [66584, 66624],
            [66585, 66625],
            [66586, 66626],
            [66587, 66627],
            [66588, 66628],
            [66589, 66629],
            [66590, 66630],
            [66591, 66631],
            [66592, 66632],
            [66593, 66633],
            [66594, 66634],
            [66595, 66635],
            [66596, 66636],
            [66597, 66637],
            [66598, 66638],
            [66599, 66639],
            [66600, 66560],
            [66601, 66561],
            [66602, 66562],
            [66603, 66563],
            [66604, 66564],
            [66605, 66565],
            [66606, 66566],
            [66607, 66567],
            [66608, 66568],
            [66609, 66569],
            [66610, 66570],
            [66611, 66571],
            [66612, 66572],
            [66613, 66573],
            [66614, 66574],
            [66615, 66575],
            [66616, 66576],
            [66617, 66577],
            [66618, 66578],
            [66619, 66579],
            [66620, 66580],
            [66621, 66581],
            [66622, 66582],
            [66623, 66583],
            [66624, 66584],
            [66625, 66585],
            [66626, 66586],
            [66627, 66587],
            [66628, 66588],
            [66629, 66589],
            [66630, 66590],
            [66631, 66591],
            [66632, 66592],
            [66633, 66593],
            [66634, 66594],
            [66635, 66595],
            [66636, 66596],
            [66637, 66597],
            [66638, 66598],
            [66639, 66599],
            [66736, 66776],
            [66737, 66777],
            [66738, 66778],
            [66739, 66779],
            [66740, 66780],
            [66741, 66781],
            [66742, 66782],
            [66743, 66783],
            [66744, 66784],
            [66745, 66785],
            [66746, 66786],
            [66747, 66787],
            [66748, 66788],
            [66749, 66789],
            [66750, 66790],
            [66751, 66791],
            [66752, 66792],
            [66753, 66793],
            [66754, 66794],
            [66755, 66795],
            [66756, 66796],
            [66757, 66797],
            [66758, 66798],
            [66759, 66799],
            [66760, 66800],
            [66761, 66801],
            [66762, 66802],
            [66763, 66803],
            [66764, 66804],
            [66765, 66805],
            [66766, 66806],
            [66767, 66807],
            [66768, 66808],
            [66769, 66809],
            [66770, 66810],
            [66771, 66811],
            [66776, 66736],
            [66777, 66737],
            [66778, 66738],
            [66779, 66739],
            [66780, 66740],
            [66781, 66741],
            [66782, 66742],
            [66783, 66743],
            [66784, 66744],
            [66785, 66745],
            [66786, 66746],
            [66787, 66747],
            [66788, 66748],
            [66789, 66749],
            [66790, 66750],
            [66791, 66751],
            [66792, 66752],
            [66793, 66753],
            [66794, 66754],
            [66795, 66755],
            [66796, 66756],
            [66797, 66757],
            [66798, 66758],
            [66799, 66759],
            [66800, 66760],
            [66801, 66761],
            [66802, 66762],
            [66803, 66763],
            [66804, 66764],
            [66805, 66765],
            [66806, 66766],
            [66807, 66767],
            [66808, 66768],
            [66809, 66769],
            [66810, 66770],
            [66811, 66771],
            [68736, 68800],
            [68737, 68801],
            [68738, 68802],
            [68739, 68803],
            [68740, 68804],
            [68741, 68805],
            [68742, 68806],
            [68743, 68807],
            [68744, 68808],
            [68745, 68809],
            [68746, 68810],
            [68747, 68811],
            [68748, 68812],
            [68749, 68813],
            [68750, 68814],
            [68751, 68815],
            [68752, 68816],
            [68753, 68817],
            [68754, 68818],
            [68755, 68819],
            [68756, 68820],
            [68757, 68821],
            [68758, 68822],
            [68759, 68823],
            [68760, 68824],
            [68761, 68825],
            [68762, 68826],
            [68763, 68827],
            [68764, 68828],
            [68765, 68829],
            [68766, 68830],
            [68767, 68831],
            [68768, 68832],
            [68769, 68833],
            [68770, 68834],
            [68771, 68835],
            [68772, 68836],
            [68773, 68837],
            [68774, 68838],
            [68775, 68839],
            [68776, 68840],
            [68777, 68841],
            [68778, 68842],
            [68779, 68843],
            [68780, 68844],
            [68781, 68845],
            [68782, 68846],
            [68783, 68847],
            [68784, 68848],
            [68785, 68849],
            [68786, 68850],
            [68800, 68736],
            [68801, 68737],
            [68802, 68738],
            [68803, 68739],
            [68804, 68740],
            [68805, 68741],
            [68806, 68742],
            [68807, 68743],
            [68808, 68744],
            [68809, 68745],
            [68810, 68746],
            [68811, 68747],
            [68812, 68748],
            [68813, 68749],
            [68814, 68750],
            [68815, 68751],
            [68816, 68752],
            [68817, 68753],
            [68818, 68754],
            [68819, 68755],
            [68820, 68756],
            [68821, 68757],
            [68822, 68758],
            [68823, 68759],
            [68824, 68760],
            [68825, 68761],
            [68826, 68762],
            [68827, 68763],
            [68828, 68764],
            [68829, 68765],
            [68830, 68766],
            [68831, 68767],
            [68832, 68768],
            [68833, 68769],
            [68834, 68770],
            [68835, 68771],
            [68836, 68772],
            [68837, 68773],
            [68838, 68774],
            [68839, 68775],
            [68840, 68776],
            [68841, 68777],
            [68842, 68778],
            [68843, 68779],
            [68844, 68780],
            [68845, 68781],
            [68846, 68782],
            [68847, 68783],
            [68848, 68784],
            [68849, 68785],
            [68850, 68786],
            [71840, 71872],
            [71841, 71873],
            [71842, 71874],
            [71843, 71875],
            [71844, 71876],
            [71845, 71877],
            [71846, 71878],
            [71847, 71879],
            [71848, 71880],
            [71849, 71881],
            [71850, 71882],
            [71851, 71883],
            [71852, 71884],
            [71853, 71885],
            [71854, 71886],
            [71855, 71887],
            [71856, 71888],
            [71857, 71889],
            [71858, 71890],
            [71859, 71891],
            [71860, 71892],
            [71861, 71893],
            [71862, 71894],
            [71863, 71895],
            [71864, 71896],
            [71865, 71897],
            [71866, 71898],
            [71867, 71899],
            [71868, 71900],
            [71869, 71901],
            [71870, 71902],
            [71871, 71903],
            [71872, 71840],
            [71873, 71841],
            [71874, 71842],
            [71875, 71843],
            [71876, 71844],
            [71877, 71845],
            [71878, 71846],
            [71879, 71847],
            [71880, 71848],
            [71881, 71849],
            [71882, 71850],
            [71883, 71851],
            [71884, 71852],
            [71885, 71853],
            [71886, 71854],
            [71887, 71855],
            [71888, 71856],
            [71889, 71857],
            [71890, 71858],
            [71891, 71859],
            [71892, 71860],
            [71893, 71861],
            [71894, 71862],
            [71895, 71863],
            [71896, 71864],
            [71897, 71865],
            [71898, 71866],
            [71899, 71867],
            [71900, 71868],
            [71901, 71869],
            [71902, 71870],
            [71903, 71871],
            [125184, 125218],
            [125185, 125219],
            [125186, 125220],
            [125187, 125221],
            [125188, 125222],
            [125189, 125223],
            [125190, 125224],
            [125191, 125225],
            [125192, 125226],
            [125193, 125227],
            [125194, 125228],
            [125195, 125229],
            [125196, 125230],
            [125197, 125231],
            [125198, 125232],
            [125199, 125233],
            [125200, 125234],
            [125201, 125235],
            [125202, 125236],
            [125203, 125237],
            [125204, 125238],
            [125205, 125239],
            [125206, 125240],
            [125207, 125241],
            [125208, 125242],
            [125209, 125243],
            [125210, 125244],
            [125211, 125245],
            [125212, 125246],
            [125213, 125247],
            [125214, 125248],
            [125215, 125249],
            [125216, 125250],
            [125217, 125251],
            [125218, 125184],
            [125219, 125185],
            [125220, 125186],
            [125221, 125187],
            [125222, 125188],
            [125223, 125189],
            [125224, 125190],
            [125225, 125191],
            [125226, 125192],
            [125227, 125193],
            [125228, 125194],
            [125229, 125195],
            [125230, 125196],
            [125231, 125197],
            [125232, 125198],
            [125233, 125199],
            [125234, 125200],
            [125235, 125201],
            [125236, 125202],
            [125237, 125203],
            [125238, 125204],
            [125239, 125205],
            [125240, 125206],
            [125241, 125207],
            [125242, 125208],
            [125243, 125209],
            [125244, 125210],
            [125245, 125211],
            [125246, 125212],
            [125247, 125213],
            [125248, 125214],
            [125249, 125215],
            [125250, 125216],
            [125251, 125217],
          ]),
          St = {
            REGULAR: new Map([
              ['d', gt().addRange(48, 57)],
              [
                'D',
                gt()
                  .addRange(0, 47)
                  .addRange(58, 65535),
              ],
              [
                's',
                gt(32, 160, 5760, 8239, 8287, 12288, 65279)
                  .addRange(9, 13)
                  .addRange(8192, 8202)
                  .addRange(8232, 8233),
              ],
              [
                'S',
                gt()
                  .addRange(0, 8)
                  .addRange(14, 31)
                  .addRange(33, 159)
                  .addRange(161, 5759)
                  .addRange(5761, 8191)
                  .addRange(8203, 8231)
                  .addRange(8234, 8238)
                  .addRange(8240, 8286)
                  .addRange(8288, 12287)
                  .addRange(12289, 65278)
                  .addRange(65280, 65535),
              ],
              [
                'w',
                gt(95)
                  .addRange(48, 57)
                  .addRange(65, 90)
                  .addRange(97, 122),
              ],
              [
                'W',
                gt(96)
                  .addRange(0, 47)
                  .addRange(58, 64)
                  .addRange(91, 94)
                  .addRange(123, 65535),
              ],
            ]),
            UNICODE: new Map([
              ['d', gt().addRange(48, 57)],
              [
                'D',
                gt()
                  .addRange(0, 47)
                  .addRange(58, 1114111),
              ],
              [
                's',
                gt(32, 160, 5760, 8239, 8287, 12288, 65279)
                  .addRange(9, 13)
                  .addRange(8192, 8202)
                  .addRange(8232, 8233),
              ],
              [
                'S',
                gt()
                  .addRange(0, 8)
                  .addRange(14, 31)
                  .addRange(33, 159)
                  .addRange(161, 5759)
                  .addRange(5761, 8191)
                  .addRange(8203, 8231)
                  .addRange(8234, 8238)
                  .addRange(8240, 8286)
                  .addRange(8288, 12287)
                  .addRange(12289, 65278)
                  .addRange(65280, 1114111),
              ],
              [
                'w',
                gt(95)
                  .addRange(48, 57)
                  .addRange(65, 90)
                  .addRange(97, 122),
              ],
              [
                'W',
                gt(96)
                  .addRange(0, 47)
                  .addRange(58, 64)
                  .addRange(91, 94)
                  .addRange(123, 1114111),
              ],
            ]),
            UNICODE_IGNORE_CASE: new Map([
              ['d', gt().addRange(48, 57)],
              [
                'D',
                gt()
                  .addRange(0, 47)
                  .addRange(58, 1114111),
              ],
              [
                's',
                gt(32, 160, 5760, 8239, 8287, 12288, 65279)
                  .addRange(9, 13)
                  .addRange(8192, 8202)
                  .addRange(8232, 8233),
              ],
              [
                'S',
                gt()
                  .addRange(0, 8)
                  .addRange(14, 31)
                  .addRange(33, 159)
                  .addRange(161, 5759)
                  .addRange(5761, 8191)
                  .addRange(8203, 8231)
                  .addRange(8234, 8238)
                  .addRange(8240, 8286)
                  .addRange(8288, 12287)
                  .addRange(12289, 65278)
                  .addRange(65280, 1114111),
              ],
              [
                'w',
                gt(95, 383, 8490)
                  .addRange(48, 57)
                  .addRange(65, 90)
                  .addRange(97, 122),
              ],
              [
                'W',
                gt(96)
                  .addRange(0, 47)
                  .addRange(58, 64)
                  .addRange(91, 94)
                  .addRange(123, 382)
                  .addRange(384, 8489)
                  .addRange(8491, 1114111),
              ],
            ]),
          },
          wt = h(function(t) {
            var e = dt.generate,
              n = ft.parse,
              r = gt().addRange(0, 1114111),
              i = gt().addRange(0, 65535),
              a = r.clone().remove(10, 13, 8232, 8233),
              s = a.clone().intersection(i),
              o = function(t, e, n) {
                return e
                  ? n
                    ? St.UNICODE_IGNORE_CASE.get(t)
                    : St.UNICODE.get(t)
                  : St.REGULAR.get(t);
              },
              p = function(t, e) {
                try {
                  return (function() {
                    throw new Error(
                      'Dynamic requires are not currently supported by rollup-plugin-commonjs'
                    );
                  })();
                } catch (n) {
                  throw new Error(
                    'Failed to recognize value `' +
                      e +
                      '` for property `' +
                      t +
                      '`.'
                  );
                }
              },
              h = function(t, e) {
                var n,
                  i = t.split('='),
                  a = i[0];
                if (1 == i.length)
                  n = (function(t) {
                    try {
                      var e = _t('General_Category', t);
                      return p('General_Category', e);
                    } catch (t) {}
                    var n = vt(t);
                    return p(n);
                  })(a);
                else {
                  var s = vt(a),
                    o = _t(s, i[1]);
                  n = p(s, o);
                }
                return e ? r.clone().remove(n) : n.clone();
              };
            gt.prototype.iuAddRange = function(t, e) {
              do {
                var n = l(t);
                n && this.add(n);
              } while (++t <= e);
              return this;
            };
            var c = function(t, e) {
                var r = n(e, f.useUnicodeFlag ? 'u' : '');
                switch (r.type) {
                  case 'characterClass':
                  case 'group':
                  case 'value':
                    break;
                  default:
                    r = u(r, e);
                }
                Object.assign(t, r);
              },
              u = function(t, e) {
                return {
                  type: 'group',
                  behavior: 'ignore',
                  body: [t],
                  raw: '(?:' + e + ')',
                };
              },
              l = function(t) {
                return xt.get(t) || !1;
              },
              d = function(t, e) {
                switch (t.type) {
                  case 'dot':
                    c(
                      t,
                      ((g = f.unicode),
                      (m = f.dotAll),
                      m ? (g ? r : i) : g ? a : s).toString(e)
                    );
                    break;
                  case 'characterClass':
                    t = (function(t, e) {
                      for (
                        var n = gt(), a = 0, s = t.body;
                        a < s.length;
                        a += 1
                      ) {
                        var p = s[a];
                        switch (p.type) {
                          case 'value':
                            if (
                              (n.add(p.codePoint),
                              f.ignoreCase && f.unicode && !f.useUnicodeFlag)
                            ) {
                              var u = l(p.codePoint);
                              u && n.add(u);
                            }
                            break;
                          case 'characterClassRange':
                            var d = p.min.codePoint,
                              g = p.max.codePoint;
                            n.addRange(d, g),
                              f.ignoreCase &&
                                f.unicode &&
                                !f.useUnicodeFlag &&
                                n.iuAddRange(d, g);
                            break;
                          case 'characterClassEscape':
                            n.add(o(p.value, f.unicode, f.ignoreCase));
                            break;
                          case 'unicodePropertyEscape':
                            n.add(h(p.value, p.negative));
                            break;
                          default:
                            throw new Error('Unknown term type: ' + p.type);
                        }
                      }
                      return (
                        t.negative &&
                          (n = (f.unicode ? r : i).clone().remove(n)),
                        c(t, n.toString(e)),
                        t
                      );
                    })(t, e);
                    break;
                  case 'unicodePropertyEscape':
                    c(t, h(t.value, t.negative).toString(e));
                    break;
                  case 'characterClassEscape':
                    c(t, o(t.value, f.unicode, f.ignoreCase).toString(e));
                    break;
                  case 'alternative':
                  case 'disjunction':
                  case 'group':
                  case 'quantifier':
                    t.body = t.body.map(function(t) {
                      return d(t, e);
                    });
                    break;
                  case 'value':
                    var n = t.codePoint,
                      p = gt(n);
                    if (f.ignoreCase && f.unicode && !f.useUnicodeFlag) {
                      var u = l(n);
                      u && p.add(u);
                    }
                    c(t, p.toString(e));
                    break;
                  case 'anchor':
                  case 'empty':
                  case 'group':
                  case 'reference':
                    break;
                  default:
                    throw new Error('Unknown term type: ' + t.type);
                }
                var g, m;
                return t;
              },
              f = {
                ignoreCase: !1,
                unicode: !1,
                dotAll: !1,
                useUnicodeFlag: !1,
              };
            t.exports = function(t, r, i) {
              var a = { unicodePropertyEscape: i && i.unicodePropertyEscape };
              (f.ignoreCase = r && r.includes('i')),
                (f.unicode = r && r.includes('u'));
              var s = i && i.dotAllFlag;
              (f.dotAll = s && r && r.includes('s')),
                (f.useUnicodeFlag = i && i.useUnicodeFlag);
              var o = { hasUnicodeFlag: f.useUnicodeFlag, bmpOnly: !f.unicode },
                p = n(t, r, a);
              return d(p, o), e(p);
            };
          }),
          Et = {
            ArrayExpression: O,
            ArrowFunctionExpression: I,
            AssignmentExpression: j,
            BinaryExpression: M,
            BreakStatement: D,
            CallExpression: U,
            ClassBody: F,
            ClassDeclaration: V,
            ClassExpression: H,
            ContinueStatement: G,
            DoWhileStatement: q,
            ExportNamedDeclaration: K,
            ExportDefaultDeclaration: W,
            ForStatement: z,
            ForInStatement: Y,
            ForOfStatement: X,
            FunctionDeclaration: J,
            FunctionExpression: $,
            Identifier: Q,
            IfStatement: Z,
            ImportDeclaration: tt,
            ImportDefaultSpecifier: et,
            ImportSpecifier: nt,
            JSXAttribute: rt,
            JSXClosingElement: it,
            JSXClosingFragment: at,
            JSXElement: ot,
            JSXExpressionContainer: pt,
            JSXFragment: ht,
            JSXOpeningElement: ct,
            JSXOpeningFragment: ut,
            JSXSpreadAttribute: lt,
            Literal: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function() {
                  'string' == typeof this.value &&
                    this.program.indentExclusionElements.push(this);
                }),
                (e.prototype.transpile = function(t, e) {
                  if (e.numericLiteral) {
                    var n = this.raw.slice(0, 2);
                    ('0b' !== n && '0o' !== n) ||
                      t.overwrite(this.start, this.end, String(this.value), {
                        storeName: !0,
                        contentOnly: !0,
                      });
                  }
                  if (this.regex) {
                    var r = this.regex,
                      i = r.pattern,
                      a = r.flags;
                    if (e.stickyRegExp && /y/.test(a))
                      throw new x(
                        'Regular expression sticky flag is not supported',
                        this
                      );
                    e.unicodeRegExp &&
                      /u/.test(a) &&
                      t.overwrite(
                        this.start,
                        this.end,
                        '/' + wt(i, a) + '/' + a.replace('u', ''),
                        { contentOnly: !0 }
                      );
                  }
                }),
                e
              );
            })(f),
            MemberExpression: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.transpile = function(e, n) {
                  n.reservedProperties &&
                    y[this.property.name] &&
                    (e.overwrite(this.object.end, this.property.start, "['"),
                    e.appendLeft(this.property.end, "']")),
                    t.prototype.transpile.call(this, e, n);
                }),
                e
              );
            })(f),
            NewExpression: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(e) {
                  if (e.spreadRest && this.arguments.length)
                    for (
                      var n = this.findLexicalBoundary(),
                        r = this.arguments.length;
                      r--;

                    ) {
                      var i = this.arguments[r];
                      if ('SpreadElement' === i.type && P(i.argument)) {
                        this.argumentsArrayAlias = n.getArgumentsArrayAlias();
                        break;
                      }
                    }
                  t.prototype.initialise.call(this, e);
                }),
                (e.prototype.transpile = function(e, n) {
                  if (
                    (t.prototype.transpile.call(this, e, n),
                    n.spreadRest && this.arguments.length)
                  ) {
                    var r = this.arguments[0];
                    L(
                      e,
                      this.arguments,
                      r.start,
                      this.argumentsArrayAlias,
                      !0
                    ) &&
                      (e.prependRight(
                        this.start + 'new'.length,
                        ' (Function.prototype.bind.apply('
                      ),
                      e.overwrite(
                        this.callee.end,
                        r.start,
                        ', [ null ].concat( '
                      ),
                      e.appendLeft(this.end, ' ))'));
                  }
                  this.arguments.length &&
                    R(e, this.arguments[this.arguments.length - 1].end);
                }),
                e
              );
            })(f),
            ObjectExpression: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.transpile = function(e, n) {
                  t.prototype.transpile.call(this, e, n);
                  for (
                    var r = this.start + 1,
                      i = 0,
                      a = 0,
                      s = 0,
                      o = null,
                      p = null,
                      h = 0;
                    h < this.properties.length;
                    ++h
                  ) {
                    var c = this.properties[h];
                    'SpreadElement' === c.type
                      ? ((a += 1), null === o && (o = h))
                      : c.computed
                        ? ((s += 1), null === p && (p = h))
                        : 'Property' === c.type && (i += 1);
                  }
                  if (a) {
                    if (!this.program.options.objectAssign)
                      throw new x(
                        "Object spread operator requires specified objectAssign option with 'Object.assign' or polyfill helper.",
                        this
                      );
                    var u = this.properties.length;
                    if (i && !s)
                      for (; u--; ) {
                        var l = this.properties[u];
                        if ('Property' === l.type && !l.computed) {
                          var d = this.properties[u - 1],
                            f = this.properties[u + 1];
                          (d && 'Property' === d.type && !d.computed) ||
                            e.prependRight(l.start, '{'),
                            (f && 'Property' === f.type && !f.computed) ||
                              e.appendLeft(l.end, '}');
                        }
                      }
                    (r = this.properties[0].start),
                      s
                        ? 'SpreadElement' === this.properties[0].type
                          ? (e.overwrite(
                              this.start,
                              r,
                              this.program.options.objectAssign + '({}, '
                            ),
                            e.remove(this.end - 1, this.end),
                            e.appendRight(this.end, ')'))
                          : (e.prependLeft(
                              this.start,
                              this.program.options.objectAssign + '('
                            ),
                            e.appendRight(this.end, ')'))
                        : (e.overwrite(
                            this.start,
                            r,
                            this.program.options.objectAssign + '({}, '
                          ),
                          e.overwrite(
                            this.properties[this.properties.length - 1].end,
                            this.end,
                            ')'
                          ));
                  }
                  if (s && n.computedProperty) {
                    var g,
                      m,
                      y = this.getIndentation();
                    'VariableDeclarator' === this.parent.type &&
                    1 === this.parent.parent.declarations.length &&
                    'Identifier' === this.parent.id.type
                      ? ((g = !0),
                        (m = this.parent.id.alias || this.parent.id.name))
                      : 'AssignmentExpression' === this.parent.type &&
                        'ExpressionStatement' === this.parent.parent.type &&
                        'Identifier' === this.parent.left.type
                        ? ((g = !0),
                          (m = this.parent.left.alias || this.parent.left.name))
                        : 'AssignmentPattern' === this.parent.type &&
                          'Identifier' === this.parent.left.type &&
                          ((g = !0),
                          (m =
                            this.parent.left.alias || this.parent.left.name)),
                      a && (g = !1),
                      (m = this.findScope(!1).resolveName(m));
                    var v = r,
                      b = this.end;
                    g ||
                      (null === o || p < o
                        ? ((m = this.findScope(!0).createDeclaration('obj')),
                          e.prependRight(this.start, '( ' + m + ' = '))
                        : (m = null));
                    for (
                      var _, S = this.properties.length, w = !1, E = !0, k = 0;
                      k < S;
                      k += 1
                    ) {
                      var C = this.properties[k],
                        T = k > 0 ? this.properties[k - 1].end : v;
                      if ('Property' === C.type && (C.computed || (_ && !a))) {
                        if ((0 === k && (T = this.start + 1), (_ = C), m)) {
                          var A =
                            (g ? ';\n' + y + m : ', ' + m) +
                            ('Literal' === C.key.type || C.computed ? '' : '.');
                          T < C.start
                            ? e.overwrite(T, C.start, A)
                            : e.prependRight(C.start, A);
                        } else {
                          var P =
                            (m = this.findScope(!0).createDeclaration('obj')) +
                            (C.computed ? '' : '.');
                          e.appendRight(C.start, '( ' + m + ' = {}, ' + P);
                        }
                        var L = C.key.end;
                        if (C.computed) {
                          for (; ']' !== e.original[L]; ) L += 1;
                          L += 1;
                        }
                        'Literal' !== C.key.type || C.computed
                          ? C.shorthand ||
                            (C.method && !C.computed && n.conciseMethodProperty)
                            ? e.overwrite(
                                C.key.start,
                                C.key.end,
                                e
                                  .slice(C.key.start, C.key.end)
                                  .replace(/:/, ' =')
                              )
                            : (C.value.start > L && e.remove(L, C.value.start),
                              e.prependLeft(L, ' = '))
                          : e.overwrite(
                              C.start,
                              C.key.end + 1,
                              '[' + e.slice(C.start, C.key.end) + '] = '
                            ),
                          !C.method ||
                            (!C.computed && n.conciseMethodProperty) ||
                            (C.value.generator &&
                              e.remove(C.start, C.key.start),
                            e.prependRight(
                              C.value.start,
                              'function' + (C.value.generator ? '*' : '') + ' '
                            ));
                      } else
                        'SpreadElement' === C.type
                          ? m &&
                            k > 0 &&
                            (_ || (_ = this.properties[k - 1]),
                            e.appendLeft(_.end, ', ' + m + ' )'),
                            (_ = null),
                            (m = null))
                          : (!E &&
                              a &&
                              (e.prependRight(C.start, '{'),
                              e.appendLeft(C.end, '}')),
                            (w = !0));
                      if (E && ('SpreadElement' === C.type || C.computed)) {
                        var O = w
                          ? this.properties[this.properties.length - 1].end
                          : this.end - 1;
                        ',' == e.original[O] && ++O;
                        var R = e.slice(O, b);
                        e.prependLeft(T, R), e.remove(O, b), (E = !1);
                      }
                      var I = C.end;
                      if (k < S - 1 && !w)
                        for (; ',' !== e.original[I]; ) I += 1;
                      else k == S - 1 && (I = this.end);
                      e.remove(C.end, I);
                    }
                    s === S &&
                      e.remove(this.properties[S - 1].end, this.end - 1),
                      !g && m && e.appendLeft(_.end, ', ' + m + ' )');
                  }
                }),
                e
              );
            })(f),
            Property: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.transpile = function(e, n) {
                  if (
                    (t.prototype.transpile.call(this, e, n),
                    n.conciseMethodProperty &&
                      !this.computed &&
                      'ObjectPattern' !== this.parent.type)
                  )
                    if (this.shorthand)
                      e.prependRight(this.start, this.key.name + ': ');
                    else if (this.method) {
                      var r = '';
                      !1 !== this.program.options.namedFunctionExpressions &&
                        (r =
                          ' ' +
                          (r =
                            'Literal' === this.key.type &&
                            'number' == typeof this.key.value
                              ? ''
                              : 'Identifier' === this.key.type
                                ? y[this.key.name] ||
                                  !/^[a-z_$][a-z0-9_$]*$/i.test(
                                    this.key.name
                                  ) ||
                                  this.value.body.scope.references[
                                    this.key.name
                                  ]
                                  ? this.findScope(!0).createIdentifier(
                                      this.key.name
                                    )
                                  : this.key.name
                                : this.findScope(!0).createIdentifier(
                                    this.key.value
                                  ))),
                        this.value.generator &&
                          e.remove(this.start, this.key.start),
                        e.appendLeft(
                          this.key.end,
                          ': function' + (this.value.generator ? '*' : '') + r
                        );
                    }
                  n.reservedProperties &&
                    y[this.key.name] &&
                    (e.prependRight(this.key.start, "'"),
                    e.appendLeft(this.key.end, "'"));
                }),
                e
              );
            })(f),
            ReturnStatement: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(t) {
                  (this.loop = this.findNearest(B)),
                    (this.nearestFunction = this.findNearest(/Function/)),
                    this.loop &&
                      (!this.nearestFunction ||
                        this.loop.depth > this.nearestFunction.depth) &&
                      ((this.loop.canReturn = !0), (this.shouldWrap = !0)),
                    this.argument && this.argument.initialise(t);
                }),
                (e.prototype.transpile = function(t, e) {
                  var n =
                    this.shouldWrap &&
                    this.loop &&
                    this.loop.shouldRewriteAsFunction;
                  this.argument
                    ? (n && t.prependRight(this.argument.start, '{ v: '),
                      this.argument.transpile(t, e),
                      n && t.appendLeft(this.argument.end, ' }'))
                    : n && t.appendLeft(this.start + 6, ' {}');
                }),
                e
              );
            })(f),
            SpreadElement: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.transpile = function(e, n) {
                  'ObjectExpression' == this.parent.type &&
                    (e.remove(this.start, this.argument.start),
                    e.remove(this.argument.end, this.end)),
                    t.prototype.transpile.call(this, e, n);
                }),
                e
              );
            })(f),
            Super: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(t) {
                  if (t.classes) {
                    if (
                      ((this.method = this.findNearest('MethodDefinition')),
                      !this.method)
                    )
                      throw new x('use of super outside class method', this);
                    var e = this.findNearest('ClassBody').parent;
                    if (
                      ((this.superClassName =
                        e.superClass && (e.superClass.name || 'superclass')),
                      !this.superClassName)
                    )
                      throw new x('super used in base class', this);
                    if (
                      ((this.isCalled =
                        'CallExpression' === this.parent.type &&
                        this === this.parent.callee),
                      'constructor' !== this.method.kind && this.isCalled)
                    )
                      throw new x(
                        'super() not allowed outside class constructor',
                        this
                      );
                    if (
                      ((this.isMember =
                        'MemberExpression' === this.parent.type),
                      !this.isCalled && !this.isMember)
                    )
                      throw new x(
                        'Unexpected use of `super` (expected `super(...)` or `super.*`)',
                        this
                      );
                  }
                  if (t.arrow) {
                    var n = this.findLexicalBoundary(),
                      r = this.findNearest('ArrowFunctionExpression'),
                      i = this.findNearest(B);
                    r &&
                      r.depth > n.depth &&
                      (this.thisAlias = n.getThisAlias()),
                      i &&
                        i.body.contains(this) &&
                        i.depth > n.depth &&
                        (this.thisAlias = n.getThisAlias());
                  }
                }),
                (e.prototype.transpile = function(t, e) {
                  if (e.classes) {
                    var n =
                      this.isCalled || this.method.static
                        ? this.superClassName
                        : this.superClassName + '.prototype';
                    t.overwrite(this.start, this.end, n, {
                      storeName: !0,
                      contentOnly: !0,
                    });
                    var r = this.isCalled ? this.parent : this.parent.parent;
                    if (r && 'CallExpression' === r.type) {
                      this.noCall || t.appendLeft(r.callee.end, '.call');
                      var i = this.thisAlias || 'this';
                      r.arguments.length
                        ? t.appendLeft(r.arguments[0].start, i + ', ')
                        : t.appendLeft(r.end - 1, '' + i);
                    }
                  }
                }),
                e
              );
            })(f),
            TaggedTemplateExpression: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(e) {
                  if (e.templateString && !e.dangerousTaggedTemplateString)
                    throw new x(
                      "Tagged template strings are not supported. Use `transforms: { templateString: false }` to skip transformation and disable this error, or `transforms: { dangerousTaggedTemplateString: true }` if you know what you're doing",
                      this
                    );
                  t.prototype.initialise.call(this, e);
                }),
                (e.prototype.transpile = function(e, n) {
                  if (n.templateString && n.dangerousTaggedTemplateString) {
                    var r = this.quasi.expressions
                        .concat(this.quasi.quasis)
                        .sort(function(t, e) {
                          return t.start - e.start;
                        }),
                      i = this.program.body.scope,
                      a = this.quasi.quasis
                        .map(function(t) {
                          return JSON.stringify(t.value.cooked);
                        })
                        .join(', '),
                      s = this.program.templateLiteralQuasis[a];
                    s ||
                      ((s = i.createIdentifier('templateObject')),
                      e.prependRight(
                        this.program.prependAt,
                        'var ' + s + ' = Object.freeze([' + a + ']);\n'
                      ),
                      (this.program.templateLiteralQuasis[a] = s)),
                      e.overwrite(this.tag.end, r[0].start, '(' + s);
                    var o = r[0].start;
                    r.forEach(function(t) {
                      'TemplateElement' === t.type
                        ? e.remove(o, t.end)
                        : e.overwrite(o, t.start, ', '),
                        (o = t.end);
                    }),
                      e.overwrite(o, this.end, ')');
                  }
                  t.prototype.transpile.call(this, e, n);
                }),
                e
              );
            })(f),
            TemplateElement: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function() {
                  this.program.indentExclusionElements.push(this);
                }),
                e
              );
            })(f),
            TemplateLiteral: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.transpile = function(e, n) {
                  if (
                    (t.prototype.transpile.call(this, e, n),
                    n.templateString &&
                      'TaggedTemplateExpression' !== this.parent.type)
                  ) {
                    var r = this.expressions
                      .concat(this.quasis)
                      .sort(function(t, e) {
                        return t.start - e.start || t.end - e.end;
                      })
                      .filter(function(t, e) {
                        return (
                          'TemplateElement' !== t.type || !!t.value.raw || !e
                        );
                      });
                    if (r.length >= 3) {
                      var i = r[0],
                        a = r[2];
                      'TemplateElement' === i.type &&
                        '' === i.value.raw &&
                        'TemplateElement' === a.type &&
                        r.shift();
                    }
                    var s = !(
                      (1 === this.quasis.length &&
                        0 === this.expressions.length) ||
                      'TemplateLiteral' === this.parent.type ||
                      'AssignmentExpression' === this.parent.type ||
                      'AssignmentPattern' === this.parent.type ||
                      'VariableDeclarator' === this.parent.type ||
                      ('BinaryExpression' === this.parent.type &&
                        '+' === this.parent.operator)
                    );
                    s && e.appendRight(this.start, '(');
                    var o = this.start;
                    r.forEach(function(t, n) {
                      var r = 0 === n ? (s ? '(' : '') : ' + ';
                      if ('TemplateElement' === t.type)
                        e.overwrite(
                          o,
                          t.end,
                          r + JSON.stringify(t.value.cooked)
                        );
                      else {
                        var i = 'Identifier' !== t.type;
                        i && (r += '('),
                          e.remove(o, t.start),
                          r && e.prependRight(t.start, r),
                          i && e.appendLeft(t.end, ')');
                      }
                      o = t.end;
                    }),
                      s && e.appendLeft(o, ')'),
                      e.overwrite(o, this.end, '', { contentOnly: !0 });
                  }
                }),
                e
              );
            })(f),
            ThisExpression: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(t) {
                  if (t.arrow) {
                    var e = this.findLexicalBoundary(),
                      n = this.findNearest('ArrowFunctionExpression'),
                      r = this.findNearest(B);
                    ((n && n.depth > e.depth) ||
                      (r && r.body.contains(this) && r.depth > e.depth) ||
                      (r && r.right && r.right.contains(this))) &&
                      (this.alias = e.getThisAlias());
                  }
                }),
                (e.prototype.transpile = function(t) {
                  this.alias &&
                    t.overwrite(this.start, this.end, this.alias, {
                      storeName: !0,
                      contentOnly: !0,
                    });
                }),
                e
              );
            })(f),
            UpdateExpression: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(e) {
                  if ('Identifier' === this.argument.type) {
                    var n = this.findScope(!1).findDeclaration(
                        this.argument.name
                      ),
                      r = n && n.node.ancestor(3);
                    r &&
                      'ForStatement' === r.type &&
                      r.body.contains(this) &&
                      (r.reassigned[this.argument.name] = !0);
                  }
                  t.prototype.initialise.call(this, e);
                }),
                (e.prototype.transpile = function(e, n) {
                  'Identifier' === this.argument.type &&
                    N(this.argument, this.findScope(!1)),
                    t.prototype.transpile.call(this, e, n);
                }),
                e
              );
            })(f),
            VariableDeclaration: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(t) {
                  (this.scope = this.findScope('var' === this.kind)),
                    this.declarations.forEach(function(e) {
                      return e.initialise(t);
                    });
                }),
                (e.prototype.transpile = function(t, e) {
                  var n = this,
                    r = this.getIndentation(),
                    i = this.kind;
                  if (
                    (e.letConst &&
                      'var' !== i &&
                      ((i = 'var'),
                      t.overwrite(
                        this.start,
                        this.start + this.kind.length,
                        i,
                        { storeName: !0 }
                      )),
                    e.destructuring &&
                      'ForOfStatement' !== this.parent.type &&
                      'ForInStatement' !== this.parent.type)
                  ) {
                    var a,
                      s = this.start;
                    this.declarations.forEach(function(i, o) {
                      if ((i.transpile(t, e), 'Identifier' === i.id.type))
                        o > 0 &&
                          'Identifier' !== n.declarations[o - 1].id.type &&
                          t.overwrite(s, i.id.start, 'var ');
                      else {
                        var p = B.test(n.parent.type);
                        0 === o
                          ? t.remove(s, i.id.start)
                          : t.overwrite(s, i.id.start, ';\n' + r);
                        var h =
                            'Identifier' === i.init.type && !i.init.rewritten,
                          c = h
                            ? i.init.alias || i.init.name
                            : i.findScope(!0).createIdentifier('ref');
                        s = i.start;
                        var u = [];
                        h
                          ? t.remove(i.id.end, i.end)
                          : u.push(function(e, n, r) {
                              t.prependRight(i.id.end, 'var ' + c),
                                t.appendLeft(i.init.end, '' + r),
                                t.move(i.id.end, i.end, e);
                            });
                        var l = i.findScope(!1);
                        E(
                          t,
                          function(t) {
                            return l.createIdentifier(t);
                          },
                          function(t) {
                            var e = t.name;
                            return l.resolveName(e);
                          },
                          i.id,
                          c,
                          p,
                          u
                        );
                        var d = p ? 'var ' : '',
                          f = p ? ', ' : ';\n' + r;
                        u.forEach(function(t, e) {
                          o === n.declarations.length - 1 &&
                            e === u.length - 1 &&
                            (f = p ? '' : ';'),
                            t(i.start, 0 === e ? d : '', f);
                        });
                      }
                      (s = i.end), (a = 'Identifier' !== i.id.type);
                    }),
                      a &&
                        this.end > s &&
                        t.overwrite(s, this.end, '', { contentOnly: !0 });
                  } else
                    this.declarations.forEach(function(n) {
                      n.transpile(t, e);
                    });
                }),
                e
              );
            })(f),
            VariableDeclarator: (function(t) {
              function e() {
                t.apply(this, arguments);
              }
              return (
                t && (e.__proto__ = t),
                (e.prototype = Object.create(t && t.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.initialise = function(e) {
                  var n = this.parent.kind;
                  'let' === n &&
                    'ForStatement' === this.parent.parent.type &&
                    (n = 'for.let'),
                    this.parent.scope.addDeclaration(this.id, n),
                    t.prototype.initialise.call(this, e);
                }),
                (e.prototype.transpile = function(t, e) {
                  if (!this.init && e.letConst && 'var' !== this.parent.kind) {
                    var n = this.findNearest(
                      /Function|^For(In|Of)?Statement|^(?:Do)?WhileStatement/
                    );
                    !n ||
                      /Function/.test(n.type) ||
                      this.isLeftDeclaratorOfLoop() ||
                      t.appendLeft(this.id.end, ' = (void 0)');
                  }
                  this.id && this.id.transpile(t, e),
                    this.init && this.init.transpile(t, e);
                }),
                (e.prototype.isLeftDeclaratorOfLoop = function() {
                  return (
                    this.parent &&
                    'VariableDeclaration' === this.parent.type &&
                    this.parent.parent &&
                    ('ForInStatement' === this.parent.parent.type ||
                      'ForOfStatement' === this.parent.parent.type) &&
                    this.parent.parent.left &&
                    this.parent.parent.left.declarations[0] === this
                  );
                }),
                e
              );
            })(f),
            WhileStatement: q,
          },
          kt = { Program: ['body'], Literal: [] },
          Ct = {
            IfStatement: 'consequent',
            ForStatement: 'body',
            ForInStatement: 'body',
            ForOfStatement: 'body',
            WhileStatement: 'body',
            DoWhileStatement: 'body',
            ArrowFunctionExpression: 'body',
          };
        function Tt(t, e, n, i) {
          (this.type = 'Root'),
            (this.jsx = i.jsx || 'React.createElement'),
            (this.options = i),
            (this.source = t),
            (this.magicString = new r.a(t)),
            (this.ast = e),
            (this.depth = 0),
            (function t(e, n) {
              if (e)
                if ('length' in e) for (var r = e.length; r--; ) t(e[r], n);
                else if (!e.__wrapped) {
                  (e.__wrapped = !0),
                    kt[e.type] ||
                      (kt[e.type] = Object.keys(e).filter(function(t) {
                        return 'object' == typeof e[t];
                      }));
                  var i = Ct[e.type];
                  if (i && 'BlockStatement' !== e[i].type) {
                    var a = e[i];
                    e[i] = {
                      start: a.start,
                      end: a.end,
                      type: 'BlockStatement',
                      body: [a],
                      synthetic: !0,
                    };
                  }
                  (e.parent = n),
                    (e.program = n.program || n),
                    (e.depth = n.depth + 1),
                    (e.keys = kt[e.type]),
                    (e.indentation = void 0);
                  for (var s = 0, o = kt[e.type]; s < o.length; s += 1) {
                    var p = o[s];
                    t(e[p], e);
                  }
                  e.program.magicString.addSourcemapLocation(e.start),
                    e.program.magicString.addSourcemapLocation(e.end);
                  var h = ('BlockStatement' === e.type ? A : Et[e.type]) || f;
                  e.__proto__ = h.prototype;
                }
            })((this.body = e), this),
            (this.body.__proto__ = A.prototype),
            (this.templateLiteralQuasis = Object.create(null));
          for (var a = 0; a < this.body.body.length; ++a)
            if (!this.body.body[a].directive) {
              this.prependAt = this.body.body[a].start;
              break;
            }
          (this.objectWithoutPropertiesHelper = null),
            (this.indentExclusionElements = []),
            this.body.initialise(n),
            (this.indentExclusions = Object.create(null));
          for (
            var s = 0, o = this.indentExclusionElements;
            s < o.length;
            s += 1
          )
            for (var p = o[s], h = p.start; h < p.end; h += 1)
              this.indentExclusions[h] = !0;
          this.body.transpile(this.magicString, n);
        }
        Tt.prototype = {
          export: function(t) {
            return (
              void 0 === t && (t = {}),
              {
                code: this.magicString.toString(),
                map: this.magicString.generateMap({
                  file: t.file,
                  source: t.source,
                  includeContent: !1 !== t.includeContent,
                }),
              }
            );
          },
          findNearest: function() {
            return null;
          },
          findScope: function() {
            return null;
          },
          getObjectWithoutPropertiesHelper: function(t) {
            return (
              this.objectWithoutPropertiesHelper ||
                ((this.objectWithoutPropertiesHelper = this.body.scope.createIdentifier(
                  'objectWithoutProperties'
                )),
                t.prependLeft(
                  this.prependAt,
                  'function ' +
                    this.objectWithoutPropertiesHelper +
                    ' (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }\n'
                )),
              this.objectWithoutPropertiesHelper
            );
          },
        };
        var At = {
            chrome: {
              48: 305357,
              49: 326143,
              50: 391679,
              51: 391679,
              52: 522751,
              53: 522751,
              54: 522751,
              55: 522751,
              56: 522751,
              57: 522751,
              58: 1047039,
              59: 1047039,
              60: 1047039,
              61: 1047039,
              62: 1047039,
              63: 1047039,
            },
            firefox: {
              43: 325853,
              44: 326109,
              45: 326111,
              46: 391647,
              47: 391679,
              48: 391679,
              49: 387583,
              50: 387583,
              51: 387583,
              52: 1047039,
              53: 1047039,
              54: 1047039,
              55: 1047039,
              56: 1047039,
              57: 1047039,
              58: 1047039,
            },
            safari: {
              8: 262148,
              9: 301166,
              10: 915967,
              10.1: 1047039,
              11: 1047039,
            },
            ie: { 8: 0, 9: 262144, 10: 262144, 11: 262400 },
            edge: {
              12: 305485,
              13: 387535,
              14: 1042943,
              15: 1042943,
              16: 1042943,
            },
            node: {
              '0.10': 262144,
              0.12: 262208,
              4: 297167,
              5: 297167,
              6: 391679,
              8: 1047039,
              8.3: 1047039,
              8.7: 1047039,
            },
          },
          Pt = [
            'arrow',
            'classes',
            'computedProperty',
            'conciseMethodProperty',
            'defaultParameter',
            'destructuring',
            'forOf',
            'generator',
            'letConst',
            'moduleExport',
            'moduleImport',
            'numericLiteral',
            'parameterDestructuring',
            'spreadRest',
            'stickyRegExp',
            'templateString',
            'unicodeRegExp',
            'exponentiation',
            'reservedProperties',
            'trailingFunctionCommas',
          ],
          Lt = [
            function(t) {
              var e = t.tokTypes,
                n = t.tokContexts;
              (n.j_oTag = new t.TokContext('<tag', !1)),
                (n.j_cTag = new t.TokContext('</tag', !1)),
                (n.j_expr = new t.TokContext('<tag>...</tag>', !0, !0)),
                (e.jsxName = new t.TokenType('jsxName')),
                (e.jsxText = new t.TokenType('jsxText', { beforeExpr: !0 })),
                (e.jsxTagStart = new t.TokenType('jsxTagStart')),
                (e.jsxTagEnd = new t.TokenType('jsxTagEnd')),
                (e.jsxTagStart.updateContext = function() {
                  this.context.push(n.j_expr),
                    this.context.push(n.j_oTag),
                    (this.exprAllowed = !1);
                }),
                (e.jsxTagEnd.updateContext = function(t) {
                  var r = this.context.pop();
                  (r === n.j_oTag && t === e.slash) || r === n.j_cTag
                    ? (this.context.pop(),
                      (this.exprAllowed = this.curContext() === n.j_expr))
                    : (this.exprAllowed = !0);
                });
              var r = t.Parser.prototype;
              function i(t) {
                return t
                  ? 'JSXIdentifier' === t.type
                    ? t.name
                    : 'JSXNamespacedName' === t.type
                      ? t.namespace.name + ':' + t.name.name
                      : 'JSXMemberExpression' === t.type
                        ? i(t.object) + '.' + i(t.property)
                        : void 0
                  : t;
              }
              return (
                (r.jsx_readToken = function() {
                  for (var n = '', r = this.pos; ; ) {
                    this.pos >= this.input.length &&
                      this.raise(this.start, 'Unterminated JSX contents');
                    var i = this.input.charCodeAt(this.pos);
                    switch (i) {
                      case 60:
                      case 123:
                        return this.pos === this.start
                          ? 60 === i && this.exprAllowed
                            ? (++this.pos, this.finishToken(e.jsxTagStart))
                            : this.getTokenFromCode(i)
                          : ((n += this.input.slice(r, this.pos)),
                            this.finishToken(e.jsxText, n));
                      case 38:
                        (n += this.input.slice(r, this.pos)),
                          (n += this.jsx_readEntity()),
                          (r = this.pos);
                        break;
                      default:
                        t.isNewLine(i)
                          ? ((n += this.input.slice(r, this.pos)),
                            (n += this.jsx_readNewLine(!0)),
                            (r = this.pos))
                          : ++this.pos;
                    }
                  }
                }),
                (r.jsx_readNewLine = function(t) {
                  var e,
                    n = this.input.charCodeAt(this.pos);
                  return (
                    ++this.pos,
                    13 === n && 10 === this.input.charCodeAt(this.pos)
                      ? (++this.pos, (e = t ? '\n' : '\r\n'))
                      : (e = String.fromCharCode(n)),
                    this.options.locations &&
                      (++this.curLine, (this.lineStart = this.pos)),
                    e
                  );
                }),
                (r.jsx_readString = function(n) {
                  for (var r = '', i = ++this.pos; ; ) {
                    this.pos >= this.input.length &&
                      this.raise(this.start, 'Unterminated string constant');
                    var a = this.input.charCodeAt(this.pos);
                    if (a === n) break;
                    38 === a
                      ? ((r += this.input.slice(i, this.pos)),
                        (r += this.jsx_readEntity()),
                        (i = this.pos))
                      : t.isNewLine(a)
                        ? ((r += this.input.slice(i, this.pos)),
                          (r += this.jsx_readNewLine(!1)),
                          (i = this.pos))
                        : ++this.pos;
                  }
                  return (
                    (r += this.input.slice(i, this.pos++)),
                    this.finishToken(e.string, r)
                  );
                }),
                (r.jsx_readEntity = function() {
                  var t,
                    e = '',
                    n = 0,
                    r = this.input[this.pos];
                  '&' !== r &&
                    this.raise(this.pos, 'Entity must start with an ampersand');
                  for (
                    var i = ++this.pos;
                    this.pos < this.input.length && n++ < 10;

                  ) {
                    if (';' === (r = this.input[this.pos++])) {
                      '#' === e[0]
                        ? 'x' === e[1]
                          ? ((e = e.substr(2)),
                            s.test(e) &&
                              (t = String.fromCharCode(parseInt(e, 16))))
                          : ((e = e.substr(1)),
                            o.test(e) &&
                              (t = String.fromCharCode(parseInt(e, 10))))
                        : (t = a[e]);
                      break;
                    }
                    e += r;
                  }
                  return t || ((this.pos = i), '&');
                }),
                (r.jsx_readWord = function() {
                  var n,
                    r = this.pos;
                  do {
                    n = this.input.charCodeAt(++this.pos);
                  } while (t.isIdentifierChar(n) || 45 === n);
                  return this.finishToken(
                    e.jsxName,
                    this.input.slice(r, this.pos)
                  );
                }),
                (r.jsx_parseIdentifier = function() {
                  var t = this.startNode();
                  return (
                    this.type === e.jsxName
                      ? (t.name = this.value)
                      : this.type.keyword
                        ? (t.name = this.type.keyword)
                        : this.unexpected(),
                    this.next(),
                    this.finishNode(t, 'JSXIdentifier')
                  );
                }),
                (r.jsx_parseNamespacedName = function() {
                  var t = this.start,
                    n = this.startLoc,
                    r = this.jsx_parseIdentifier();
                  if (
                    !this.options.plugins.jsx.allowNamespaces ||
                    !this.eat(e.colon)
                  )
                    return r;
                  var i = this.startNodeAt(t, n);
                  return (
                    (i.namespace = r),
                    (i.name = this.jsx_parseIdentifier()),
                    this.finishNode(i, 'JSXNamespacedName')
                  );
                }),
                (r.jsx_parseElementName = function() {
                  if (this.type === e.jsxTagEnd) return '';
                  var t = this.start,
                    n = this.startLoc,
                    r = this.jsx_parseNamespacedName();
                  for (
                    this.type !== e.dot ||
                    'JSXNamespacedName' !== r.type ||
                    this.options.plugins.jsx.allowNamespacedObjects ||
                    this.unexpected();
                    this.eat(e.dot);

                  ) {
                    var i = this.startNodeAt(t, n);
                    (i.object = r),
                      (i.property = this.jsx_parseIdentifier()),
                      (r = this.finishNode(i, 'JSXMemberExpression'));
                  }
                  return r;
                }),
                (r.jsx_parseAttributeValue = function() {
                  switch (this.type) {
                    case e.braceL:
                      var t = this.jsx_parseExpressionContainer();
                      return (
                        'JSXEmptyExpression' === t.expression.type &&
                          this.raise(
                            t.start,
                            'JSX attributes must only be assigned a non-empty expression'
                          ),
                        t
                      );
                    case e.jsxTagStart:
                    case e.string:
                      return this.parseExprAtom();
                    default:
                      this.raise(
                        this.start,
                        'JSX value should be either an expression or a quoted JSX text'
                      );
                  }
                }),
                (r.jsx_parseEmptyExpression = function() {
                  var t = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
                  return this.finishNodeAt(
                    t,
                    'JSXEmptyExpression',
                    this.start,
                    this.startLoc
                  );
                }),
                (r.jsx_parseExpressionContainer = function() {
                  var t = this.startNode();
                  return (
                    this.next(),
                    (t.expression =
                      this.type === e.braceR
                        ? this.jsx_parseEmptyExpression()
                        : this.parseExpression()),
                    this.expect(e.braceR),
                    this.finishNode(t, 'JSXExpressionContainer')
                  );
                }),
                (r.jsx_parseAttribute = function() {
                  var t = this.startNode();
                  return this.eat(e.braceL)
                    ? (this.expect(e.ellipsis),
                      (t.argument = this.parseMaybeAssign()),
                      this.expect(e.braceR),
                      this.finishNode(t, 'JSXSpreadAttribute'))
                    : ((t.name = this.jsx_parseNamespacedName()),
                      (t.value = this.eat(e.eq)
                        ? this.jsx_parseAttributeValue()
                        : null),
                      this.finishNode(t, 'JSXAttribute'));
                }),
                (r.jsx_parseOpeningElementAt = function(t, n) {
                  var r = this.startNodeAt(t, n);
                  r.attributes = [];
                  var i = this.jsx_parseElementName();
                  for (
                    i && (r.name = i);
                    this.type !== e.slash && this.type !== e.jsxTagEnd;

                  )
                    r.attributes.push(this.jsx_parseAttribute());
                  return (
                    (r.selfClosing = this.eat(e.slash)),
                    this.expect(e.jsxTagEnd),
                    this.finishNode(
                      r,
                      i ? 'JSXOpeningElement' : 'JSXOpeningFragment'
                    )
                  );
                }),
                (r.jsx_parseClosingElementAt = function(t, n) {
                  var r = this.startNodeAt(t, n),
                    i = this.jsx_parseElementName();
                  return (
                    i && (r.name = i),
                    this.expect(e.jsxTagEnd),
                    this.finishNode(
                      r,
                      i ? 'JSXClosingElement' : 'JSXClosingFragment'
                    )
                  );
                }),
                (r.jsx_parseElementAt = function(t, n) {
                  var r = this.startNodeAt(t, n),
                    a = [],
                    s = this.jsx_parseOpeningElementAt(t, n),
                    o = null;
                  if (!s.selfClosing) {
                    t: for (;;)
                      switch (this.type) {
                        case e.jsxTagStart:
                          if (
                            ((t = this.start),
                            (n = this.startLoc),
                            this.next(),
                            this.eat(e.slash))
                          ) {
                            o = this.jsx_parseClosingElementAt(t, n);
                            break t;
                          }
                          a.push(this.jsx_parseElementAt(t, n));
                          break;
                        case e.jsxText:
                          a.push(this.parseExprAtom());
                          break;
                        case e.braceL:
                          a.push(this.jsx_parseExpressionContainer());
                          break;
                        default:
                          this.unexpected();
                      }
                    i(o.name) !== i(s.name) &&
                      this.raise(
                        o.start,
                        'Expected corresponding JSX closing tag for <' +
                          i(s.name) +
                          '>'
                      );
                  }
                  return (
                    (r.openingElement = s),
                    (r.closingElement = o),
                    (r.children = a),
                    this.type === e.relational &&
                      '<' === this.value &&
                      this.raise(
                        this.start,
                        'Adjacent JSX elements must be wrapped in an enclosing tag'
                      ),
                    this.finishNode(r, s.name ? 'JSXElement' : 'JSXFragment')
                  );
                }),
                (r.jsx_parseText = function(t) {
                  var e = this.parseLiteral(t);
                  return (e.type = 'JSXText'), e;
                }),
                (r.jsx_parseElement = function() {
                  var t = this.start,
                    e = this.startLoc;
                  return this.next(), this.jsx_parseElementAt(t, e);
                }),
                (t.plugins.jsx = function(r, i) {
                  i &&
                    ('object' != typeof i && (i = {}),
                    (r.options.plugins.jsx = {
                      allowNamespaces: !1 !== i.allowNamespaces,
                      allowNamespacedObjects: !!i.allowNamespacedObjects,
                    }),
                    r.extend('parseExprAtom', function(t) {
                      return function(n) {
                        return this.type === e.jsxText
                          ? this.jsx_parseText(this.value)
                          : this.type === e.jsxTagStart
                            ? this.jsx_parseElement()
                            : t.call(this, n);
                      };
                    }),
                    r.extend('readToken', function(r) {
                      return function(i) {
                        var a = this.curContext();
                        if (a === n.j_expr) return this.jsx_readToken();
                        if (a === n.j_oTag || a === n.j_cTag) {
                          if (t.isIdentifierStart(i))
                            return this.jsx_readWord();
                          if (62 == i)
                            return ++this.pos, this.finishToken(e.jsxTagEnd);
                          if ((34 === i || 39 === i) && a == n.j_oTag)
                            return this.jsx_readString(i);
                        }
                        return 60 === i &&
                          this.exprAllowed &&
                          33 !== this.input.charCodeAt(this.pos + 1)
                          ? (++this.pos, this.finishToken(e.jsxTagStart))
                          : r.call(this, i);
                      };
                    }),
                    r.extend('updateContext', function(t) {
                      return function(r) {
                        if (this.type == e.braceL) {
                          var i = this.curContext();
                          i == n.j_oTag
                            ? this.context.push(n.b_expr)
                            : i == n.j_expr
                              ? this.context.push(n.b_tmpl)
                              : t.call(this, r),
                            (this.exprAllowed = !0);
                        } else {
                          if (this.type !== e.slash || r !== e.jsxTagStart)
                            return t.call(this, r);
                          (this.context.length -= 2),
                            this.context.push(n.j_cTag),
                            (this.exprAllowed = !1);
                        }
                      };
                    }));
                }),
                t
              );
            },
            l,
          ].reduce(function(t, e) {
            return e(t);
          }, i).parse,
          Ot = ['dangerousTaggedTemplateString', 'dangerousForOf'];
        function Rt(t, e) {
          var n;
          void 0 === e && (e = {});
          var r = null;
          try {
            (n = Lt(t, {
              ecmaVersion: 9,
              preserveParens: !0,
              sourceType: 'module',
              onComment: function(t, e) {
                if (!r) {
                  var n = /@jsx\s+([^\s]+)/.exec(e);
                  n && (r = n[1]);
                }
              },
              plugins: { jsx: !0, dynamicImport: !0 },
            })),
              (e.jsx = r || e.jsx);
          } catch (e) {
            throw ((e.snippet = _(t, e.loc)),
            (e.toString = function() {
              return e.name + ': ' + e.message + '\n' + e.snippet;
            }),
            e);
          }
          var i = (function(t) {
            var e = Object.keys(t).length ? 1048575 : 262144;
            Object.keys(t).forEach(function(n) {
              var r = At[n];
              if (!r)
                throw new Error(
                  "Unknown environment '" +
                    n +
                    "'. Please raise an issue at https://github.com/Rich-Harris/buble/issues"
                );
              var i = t[n];
              if (!(i in r))
                throw new Error(
                  'Support data exists for the following versions of ' +
                    n +
                    ': ' +
                    Object.keys(r).join(', ') +
                    '. Please raise an issue at https://github.com/Rich-Harris/buble/issues'
                );
              var a = r[i];
              e &= a;
            });
            var n = Object.create(null);
            return (
              Pt.forEach(function(t, r) {
                n[t] = !(e & (1 << r));
              }),
              Ot.forEach(function(t) {
                n[t] = !1;
              }),
              n
            );
          })(e.target || {});
          return (
            Object.keys(e.transforms || {}).forEach(function(t) {
              if ('modules' === t)
                return (
                  'moduleImport' in e.transforms ||
                    (i.moduleImport = e.transforms.modules),
                  void (
                    'moduleExport' in e.transforms ||
                    (i.moduleExport = e.transforms.modules)
                  )
                );
              if (!(t in i)) throw new Error("Unknown transform '" + t + "'");
              i[t] = e.transforms[t];
            }),
            new Tt(t, n, i, e).export(e)
          );
        }
      }.call(this, n(84)));
    },
    function(t, e, n) {
      'use strict';
      (function(t, r) {
        var i = n(211);
        function a(t, e, n) {
          (this.start = t),
            (this.end = e),
            (this.original = n),
            (this.intro = ''),
            (this.outro = ''),
            (this.content = n),
            (this.storeName = !1),
            (this.edited = !1),
            Object.defineProperties(this, {
              previous: { writable: !0, value: null },
              next: { writable: !0, value: null },
            });
        }
        a.prototype = {
          appendLeft: function(t) {
            this.outro += t;
          },
          appendRight: function(t) {
            this.intro = this.intro + t;
          },
          clone: function() {
            var t = new a(this.start, this.end, this.original);
            return (
              (t.intro = this.intro),
              (t.outro = this.outro),
              (t.content = this.content),
              (t.storeName = this.storeName),
              (t.edited = this.edited),
              t
            );
          },
          contains: function(t) {
            return this.start < t && t < this.end;
          },
          eachNext: function(t) {
            for (var e = this; e; ) t(e), (e = e.next);
          },
          eachPrevious: function(t) {
            for (var e = this; e; ) t(e), (e = e.previous);
          },
          edit: function(t, e, n) {
            return (
              (this.content = t),
              n || ((this.intro = ''), (this.outro = '')),
              (this.storeName = e),
              (this.edited = !0),
              this
            );
          },
          prependLeft: function(t) {
            this.outro = t + this.outro;
          },
          prependRight: function(t) {
            this.intro = t + this.intro;
          },
          split: function(t) {
            var e = t - this.start,
              n = this.original.slice(0, e),
              r = this.original.slice(e);
            this.original = n;
            var i = new a(t, this.end, r);
            return (
              (i.outro = this.outro),
              (this.outro = ''),
              (this.end = t),
              this.edited
                ? (i.edit('', !1), (this.content = ''))
                : (this.content = n),
              (i.next = this.next),
              i.next && (i.next.previous = i),
              (i.previous = this),
              (this.next = i),
              i
            );
          },
          toString: function() {
            return this.intro + this.content + this.outro;
          },
          trimEnd: function(t) {
            if (((this.outro = this.outro.replace(t, '')), this.outro.length))
              return !0;
            var e = this.content.replace(t, '');
            return e.length
              ? (e !== this.content &&
                  this.split(this.start + e.length).edit('', !1),
                !0)
              : (this.edit('', !1),
                (this.intro = this.intro.replace(t, '')),
                !!this.intro.length || void 0);
          },
          trimStart: function(t) {
            if (((this.intro = this.intro.replace(t, '')), this.intro.length))
              return !0;
            var e = this.content.replace(t, '');
            return e.length
              ? (e !== this.content &&
                  (this.split(this.end - e.length), this.edit('', !1)),
                !0)
              : (this.edit('', !1),
                (this.outro = this.outro.replace(t, '')),
                !!this.outro.length || void 0);
          },
        };
        var s =
          'undefined' != typeof window && 'function' == typeof window.btoa
            ? window.btoa
            : 'function' == typeof t
              ? function(e) {
                  return new t(e).toString('base64');
                }
              : function() {
                  throw new Error(
                    'Unsupported environment: `window.btoa` or `Buffer` should be supported.'
                  );
                };
        function o(t) {
          (this.version = 3),
            (this.file = t.file),
            (this.sources = t.sources),
            (this.sourcesContent = t.sourcesContent),
            (this.names = t.names),
            (this.mappings = t.mappings);
        }
        function p(t, e) {
          var n = t.split(/[\/\\]/),
            r = e.split(/[\/\\]/);
          for (n.pop(); n[0] === r[0]; ) n.shift(), r.shift();
          if (n.length) for (var i = n.length; i--; ) n[i] = '..';
          return n.concat(r).join('/');
        }
        o.prototype = {
          toString: function() {
            return JSON.stringify(this);
          },
          toUrl: function() {
            return (
              'data:application/json;charset=utf-8;base64,' + s(this.toString())
            );
          },
        };
        var h = Object.prototype.toString;
        function c(t) {
          return '[object Object]' === h.call(t);
        }
        function u(t) {
          var e = 0,
            n = t.split('\n').map(function(t, n) {
              var r = e + t.length + 1,
                i = { start: e, end: r, line: n };
              return (e = r), i;
            }),
            r = 0;
          function i(t, e) {
            return t.start <= e && e < t.end;
          }
          function a(t, e) {
            return { line: t.line, column: e - t.start };
          }
          return function(t) {
            for (var e = n[r], s = t >= e.end ? 1 : -1; e; ) {
              if (i(e, t)) return a(e, t);
              e = n[(r += s)];
            }
          };
        }
        function l(t) {
          var e = this,
            n = {
              generatedCodeColumn: 0,
              sourceIndex: 0,
              sourceCodeLine: 0,
              sourceCodeColumn: 0,
              sourceCodeName: 0,
            },
            r = 0,
            a = 0;
          this.raw = [];
          var s = (this.raw[r] = []),
            o = null;
          (this.addEdit = function(t, n, r, i, p) {
            n.length ? s.push([a, t, i.line, i.column, p]) : o && s.push(o),
              e.advance(n),
              (o = null);
          }),
            (this.addUneditedChunk = function(n, i, p, h, c) {
              for (var u = i.start, l = !0; u < i.end; )
                (t || l || c[u]) && s.push([a, n, h.line, h.column, -1]),
                  '\n' === p[u]
                    ? ((h.line += 1),
                      (h.column = 0),
                      (r += 1),
                      (e.raw[r] = s = []),
                      (a = 0))
                    : ((h.column += 1), (a += 1)),
                  (u += 1),
                  (l = !1);
              o = [a, n, h.line, h.column, -1];
            }),
            (this.advance = function(t) {
              if (t) {
                var n = t.split('\n'),
                  i = n.pop();
                n.length
                  ? ((r += n.length), (e.raw[r] = s = []), (a = i.length))
                  : (a += i.length);
              }
            }),
            (this.encode = function() {
              return e.raw
                .map(function(t) {
                  var e = 0;
                  return t
                    .map(function(t) {
                      var r = [
                        t[0] - e,
                        t[1] - n.sourceIndex,
                        t[2] - n.sourceCodeLine,
                        t[3] - n.sourceCodeColumn,
                      ];
                      return (
                        (e = t[0]),
                        (n.sourceIndex = t[1]),
                        (n.sourceCodeLine = t[2]),
                        (n.sourceCodeColumn = t[3]),
                        ~t[4] &&
                          (r.push(t[4] - n.sourceCodeName),
                          (n.sourceCodeName = t[4])),
                        Object(i.a)(r)
                      );
                    })
                    .join(',');
                })
                .join(';');
            });
        }
        var d = function() {
          Object.defineProperties(this, { startTimes: { value: {} } });
        };
        (d.prototype.time = function(t) {
          this.startTimes[t] = r.hrtime();
        }),
          (d.prototype.timeEnd = function(t) {
            var e = r.hrtime(this.startTimes[t]);
            this[t] || (this[t] = 0), (this[t] += 1e3 * e[0] + 1e-6 * e[1]);
          });
        var f = { insertLeft: !1, insertRight: !1, storeName: !1 };
        function g(t, e) {
          void 0 === e && (e = {});
          var n = new a(0, t.length, t);
          Object.defineProperties(this, {
            original: { writable: !0, value: t },
            outro: { writable: !0, value: '' },
            intro: { writable: !0, value: '' },
            firstChunk: { writable: !0, value: n },
            lastChunk: { writable: !0, value: n },
            lastSearchedChunk: { writable: !0, value: n },
            byStart: { writable: !0, value: {} },
            byEnd: { writable: !0, value: {} },
            filename: { writable: !0, value: e.filename },
            indentExclusionRanges: {
              writable: !0,
              value: e.indentExclusionRanges,
            },
            sourcemapLocations: { writable: !0, value: {} },
            storedNames: { writable: !0, value: {} },
            indentStr: {
              writable: !0,
              value: (function(t) {
                var e = t.split('\n'),
                  n = e.filter(function(t) {
                    return /^\t+/.test(t);
                  }),
                  r = e.filter(function(t) {
                    return /^ {2,}/.test(t);
                  });
                if (0 === n.length && 0 === r.length) return null;
                if (n.length >= r.length) return '\t';
                var i = r.reduce(function(t, e) {
                  var n = /^ +/.exec(e)[0].length;
                  return Math.min(n, t);
                }, 1 / 0);
                return new Array(i + 1).join(' ');
              })(t),
            },
          }),
            (this.byStart[0] = n),
            (this.byEnd[t.length] = n);
        }
        g.prototype = {
          addSourcemapLocation: function(t) {
            this.sourcemapLocations[t] = !0;
          },
          append: function(t) {
            if ('string' != typeof t)
              throw new TypeError('outro content must be a string');
            return (this.outro += t), this;
          },
          appendLeft: function(t, e) {
            if ('string' != typeof e)
              throw new TypeError('inserted content must be a string');
            this._split(t);
            var n = this.byEnd[t];
            return n ? n.appendLeft(e) : (this.intro += e), this;
          },
          appendRight: function(t, e) {
            if ('string' != typeof e)
              throw new TypeError('inserted content must be a string');
            this._split(t);
            var n = this.byStart[t];
            return n ? n.appendRight(e) : (this.outro += e), this;
          },
          clone: function() {
            for (
              var t = new g(this.original, { filename: this.filename }),
                e = this.firstChunk,
                n = (t.firstChunk = t.lastSearchedChunk = e.clone());
              e;

            ) {
              (t.byStart[n.start] = n), (t.byEnd[n.end] = n);
              var r = e.next,
                i = r && r.clone();
              i && ((n.next = i), (i.previous = n), (n = i)), (e = r);
            }
            return (
              (t.lastChunk = n),
              this.indentExclusionRanges &&
                (t.indentExclusionRanges = this.indentExclusionRanges.slice()),
              Object.keys(this.sourcemapLocations).forEach(function(e) {
                t.sourcemapLocations[e] = !0;
              }),
              t
            );
          },
          generateMap: function(t) {
            var e = this;
            t = t || {};
            var n = Object.keys(this.storedNames),
              r = new l(t.hires),
              i = u(this.original);
            return (
              this.intro && r.advance(this.intro),
              this.firstChunk.eachNext(function(t) {
                var a = i(t.start);
                t.intro.length && r.advance(t.intro),
                  t.edited
                    ? r.addEdit(
                        0,
                        t.content,
                        t.original,
                        a,
                        t.storeName ? n.indexOf(t.original) : -1
                      )
                    : r.addUneditedChunk(
                        0,
                        t,
                        e.original,
                        a,
                        e.sourcemapLocations
                      ),
                  t.outro.length && r.advance(t.outro);
              }),
              new o({
                file: t.file ? t.file.split(/[\/\\]/).pop() : null,
                sources: [t.source ? p(t.file || '', t.source) : null],
                sourcesContent: t.includeContent ? [this.original] : [null],
                names: n,
                mappings: r.encode(),
              })
            );
          },
          getIndentString: function() {
            return null === this.indentStr ? '\t' : this.indentStr;
          },
          indent: function(t, e) {
            var n = /^[^\r\n]/gm;
            if (
              (c(t) && ((e = t), (t = void 0)),
              '' === (t = void 0 !== t ? t : this.indentStr || '\t'))
            )
              return this;
            var r = {};
            (e = e || {}).exclude &&
              ('number' == typeof e.exclude[0]
                ? [e.exclude]
                : e.exclude
              ).forEach(function(t) {
                for (var e = t[0]; e < t[1]; e += 1) r[e] = !0;
              });
            var i = !1 !== e.indentStart,
              a = function(e) {
                return i ? '' + t + e : ((i = !0), e);
              };
            this.intro = this.intro.replace(n, a);
            for (var s = 0, o = this.firstChunk; o; ) {
              var p = o.end;
              if (o.edited)
                r[s] ||
                  ((o.content = o.content.replace(n, a)),
                  o.content.length &&
                    (i = '\n' === o.content[o.content.length - 1]));
              else
                for (s = o.start; s < p; ) {
                  if (!r[s]) {
                    var h = this.original[s];
                    '\n' === h
                      ? (i = !0)
                      : '\r' !== h &&
                        i &&
                        ((i = !1),
                        s === o.start
                          ? o.prependRight(t)
                          : (this._splitChunk(o, s),
                            (o = o.next).prependRight(t)));
                  }
                  s += 1;
                }
              (s = o.end), (o = o.next);
            }
            return (this.outro = this.outro.replace(n, a)), this;
          },
          insert: function() {
            throw new Error(
              'magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)'
            );
          },
          insertLeft: function(t, e) {
            return (
              f.insertLeft ||
                (console.warn(
                  'magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead'
                ),
                (f.insertLeft = !0)),
              this.appendLeft(t, e)
            );
          },
          insertRight: function(t, e) {
            return (
              f.insertRight ||
                (console.warn(
                  'magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead'
                ),
                (f.insertRight = !0)),
              this.prependRight(t, e)
            );
          },
          move: function(t, e, n) {
            if (n >= t && n <= e)
              throw new Error('Cannot move a selection inside itself');
            this._split(t), this._split(e), this._split(n);
            var r = this.byStart[t],
              i = this.byEnd[e],
              a = r.previous,
              s = i.next,
              o = this.byStart[n];
            if (!o && i === this.lastChunk) return this;
            var p = o ? o.previous : this.lastChunk;
            return (
              a && (a.next = s),
              s && (s.previous = a),
              p && (p.next = r),
              o && (o.previous = i),
              r.previous || (this.firstChunk = i.next),
              i.next ||
                ((this.lastChunk = r.previous), (this.lastChunk.next = null)),
              (r.previous = p),
              (i.next = o || null),
              p || (this.firstChunk = r),
              o || (this.lastChunk = i),
              this
            );
          },
          overwrite: function(t, e, n, r) {
            if ('string' != typeof n)
              throw new TypeError('replacement content must be a string');
            for (; t < 0; ) t += this.original.length;
            for (; e < 0; ) e += this.original.length;
            if (e > this.original.length)
              throw new Error('end is out of bounds');
            if (t === e)
              throw new Error(
                'Cannot overwrite a zero-length range – use appendLeft or prependRight instead'
              );
            this._split(t),
              this._split(e),
              !0 === r &&
                (f.storeName ||
                  (console.warn(
                    'The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string'
                  ),
                  (f.storeName = !0)),
                (r = { storeName: !0 }));
            var i = void 0 !== r && r.storeName,
              s = void 0 !== r && r.contentOnly;
            if (i) {
              var o = this.original.slice(t, e);
              this.storedNames[o] = !0;
            }
            var p = this.byStart[t],
              h = this.byEnd[e];
            if (p) {
              if (e > p.end && p.next !== this.byStart[p.end])
                throw new Error('Cannot overwrite across a split point');
              if ((p.edit(n, i, s), p !== h)) {
                for (var c = p.next; c !== h; ) c.edit('', !1), (c = c.next);
                c.edit('', !1);
              }
            } else {
              var u = new a(t, e, '').edit(n, i);
              (h.next = u), (u.previous = h);
            }
            return this;
          },
          prepend: function(t) {
            if ('string' != typeof t)
              throw new TypeError('outro content must be a string');
            return (this.intro = t + this.intro), this;
          },
          prependLeft: function(t, e) {
            if ('string' != typeof e)
              throw new TypeError('inserted content must be a string');
            this._split(t);
            var n = this.byEnd[t];
            return n ? n.prependLeft(e) : (this.intro = e + this.intro), this;
          },
          prependRight: function(t, e) {
            if ('string' != typeof e)
              throw new TypeError('inserted content must be a string');
            this._split(t);
            var n = this.byStart[t];
            return n ? n.prependRight(e) : (this.outro = e + this.outro), this;
          },
          remove: function(t, e) {
            for (; t < 0; ) t += this.original.length;
            for (; e < 0; ) e += this.original.length;
            if (t === e) return this;
            if (t < 0 || e > this.original.length)
              throw new Error('Character is out of bounds');
            if (t > e) throw new Error('end must be greater than start');
            this._split(t), this._split(e);
            for (var n = this.byStart[t]; n; )
              (n.intro = ''),
                (n.outro = ''),
                n.edit(''),
                (n = e > n.end ? this.byStart[n.end] : null);
            return this;
          },
          slice: function(t, e) {
            for (
              void 0 === t && (t = 0),
                void 0 === e && (e = this.original.length);
              t < 0;

            )
              t += this.original.length;
            for (; e < 0; ) e += this.original.length;
            for (
              var n = '', r = this.firstChunk;
              r && (r.start > t || r.end <= t);

            ) {
              if (r.start < e && r.end >= e) return n;
              r = r.next;
            }
            if (r && r.edited && r.start !== t)
              throw new Error(
                'Cannot use replaced character ' + t + ' as slice start anchor.'
              );
            for (var i = r; r; ) {
              !r.intro || (i === r && r.start !== t) || (n += r.intro);
              var a = r.start < e && r.end >= e;
              if (a && r.edited && r.end !== e)
                throw new Error(
                  'Cannot use replaced character ' + e + ' as slice end anchor.'
                );
              var s = i === r ? t - r.start : 0,
                o = a ? r.content.length + e - r.end : r.content.length;
              if (
                ((n += r.content.slice(s, o)),
                !r.outro || (a && r.end !== e) || (n += r.outro),
                a)
              )
                break;
              r = r.next;
            }
            return n;
          },
          snip: function(t, e) {
            var n = this.clone();
            return n.remove(0, t), n.remove(e, n.original.length), n;
          },
          _split: function(t) {
            if (!this.byStart[t] && !this.byEnd[t])
              for (var e = this.lastSearchedChunk, n = t > e.end; ; ) {
                if (e.contains(t)) return this._splitChunk(e, t);
                e = n ? this.byStart[e.end] : this.byEnd[e.start];
              }
          },
          _splitChunk: function(t, e) {
            if (t.edited && t.content.length) {
              var n = u(this.original)(e);
              throw new Error(
                'Cannot split a chunk that has already been edited (' +
                  n.line +
                  ':' +
                  n.column +
                  ' – "' +
                  t.original +
                  '")'
              );
            }
            var r = t.split(e);
            return (
              (this.byEnd[e] = t),
              (this.byStart[e] = r),
              (this.byEnd[r.end] = r),
              t === this.lastChunk && (this.lastChunk = r),
              (this.lastSearchedChunk = t),
              !0
            );
          },
          toString: function() {
            for (var t = this.intro, e = this.firstChunk; e; )
              (t += e.toString()), (e = e.next);
            return t + this.outro;
          },
          trimLines: function() {
            return this.trim('[\\r\\n]');
          },
          trim: function(t) {
            return this.trimStart(t).trimEnd(t);
          },
          trimEnd: function(t) {
            var e = new RegExp((t || '\\s') + '+$');
            if (((this.outro = this.outro.replace(e, '')), this.outro.length))
              return this;
            var n = this.lastChunk;
            do {
              var r = n.end,
                i = n.trimEnd(e);
              if (
                (n.end !== r &&
                  (this.lastChunk === n && (this.lastChunk = n.next),
                  (this.byEnd[n.end] = n),
                  (this.byStart[n.next.start] = n.next),
                  (this.byEnd[n.next.end] = n.next)),
                i)
              )
                return this;
              n = n.previous;
            } while (n);
            return this;
          },
          trimStart: function(t) {
            var e = new RegExp('^' + (t || '\\s') + '+');
            if (((this.intro = this.intro.replace(e, '')), this.intro.length))
              return this;
            var n = this.firstChunk;
            do {
              var r = n.end,
                i = n.trimStart(e);
              if (
                (n.end !== r &&
                  (n === this.lastChunk && (this.lastChunk = n.next),
                  (this.byEnd[n.end] = n),
                  (this.byStart[n.next.start] = n.next),
                  (this.byEnd[n.next.end] = n.next)),
                i)
              )
                return this;
              n = n.next;
            } while (n);
            return this;
          },
        };
        var m = Object.prototype.hasOwnProperty;
        function y(t) {
          void 0 === t && (t = {}),
            (this.intro = t.intro || ''),
            (this.separator = void 0 !== t.separator ? t.separator : '\n'),
            (this.sources = []),
            (this.uniqueSources = []),
            (this.uniqueSourceIndexByFilename = {});
        }
        (y.prototype = {
          addSource: function(t) {
            if (t instanceof g)
              return this.addSource({
                content: t,
                filename: t.filename,
                separator: this.separator,
              });
            if (!c(t) || !t.content)
              throw new Error(
                'bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`'
              );
            if (
              (['filename', 'indentExclusionRanges', 'separator'].forEach(
                function(e) {
                  m.call(t, e) || (t[e] = t.content[e]);
                }
              ),
              void 0 === t.separator && (t.separator = this.separator),
              t.filename)
            )
              if (m.call(this.uniqueSourceIndexByFilename, t.filename)) {
                var e = this.uniqueSources[
                  this.uniqueSourceIndexByFilename[t.filename]
                ];
                if (t.content.original !== e.content)
                  throw new Error(
                    'Illegal source: same filename (' +
                      t.filename +
                      '), different contents'
                  );
              } else
                (this.uniqueSourceIndexByFilename[
                  t.filename
                ] = this.uniqueSources.length),
                  this.uniqueSources.push({
                    filename: t.filename,
                    content: t.content.original,
                  });
            return this.sources.push(t), this;
          },
          append: function(t, e) {
            return (
              this.addSource({
                content: new g(t),
                separator: (e && e.separator) || '',
              }),
              this
            );
          },
          clone: function() {
            var t = new y({ intro: this.intro, separator: this.separator });
            return (
              this.sources.forEach(function(e) {
                t.addSource({
                  filename: e.filename,
                  content: e.content.clone(),
                  separator: e.separator,
                });
              }),
              t
            );
          },
          generateMap: function(t) {
            var e = this;
            void 0 === t && (t = {});
            var n = [];
            this.sources.forEach(function(t) {
              Object.keys(t.content.storedNames).forEach(function(t) {
                ~n.indexOf(t) || n.push(t);
              });
            });
            var r = new l(t.hires);
            return (
              this.intro && r.advance(this.intro),
              this.sources.forEach(function(t, i) {
                i > 0 && r.advance(e.separator);
                var a = t.filename
                    ? e.uniqueSourceIndexByFilename[t.filename]
                    : -1,
                  s = t.content,
                  o = u(s.original);
                s.intro && r.advance(s.intro),
                  s.firstChunk.eachNext(function(e) {
                    var i = o(e.start);
                    e.intro.length && r.advance(e.intro),
                      t.filename
                        ? e.edited
                          ? r.addEdit(
                              a,
                              e.content,
                              e.original,
                              i,
                              e.storeName ? n.indexOf(e.original) : -1
                            )
                          : r.addUneditedChunk(
                              a,
                              e,
                              s.original,
                              i,
                              s.sourcemapLocations
                            )
                        : r.advance(e.content),
                      e.outro.length && r.advance(e.outro);
                  }),
                  s.outro && r.advance(s.outro);
              }),
              new o({
                file: t.file ? t.file.split(/[\/\\]/).pop() : null,
                sources: this.uniqueSources.map(function(e) {
                  return t.file ? p(t.file, e.filename) : e.filename;
                }),
                sourcesContent: this.uniqueSources.map(function(e) {
                  return t.includeContent ? e.content : null;
                }),
                names: n,
                mappings: r.encode(),
              })
            );
          },
          getIndentString: function() {
            var t = {};
            return (
              this.sources.forEach(function(e) {
                var n = e.content.indentStr;
                null !== n && (t[n] || (t[n] = 0), (t[n] += 1));
              }),
              Object.keys(t).sort(function(e, n) {
                return t[e] - t[n];
              })[0] || '\t'
            );
          },
          indent: function(t) {
            var e = this;
            if ((arguments.length || (t = this.getIndentString()), '' === t))
              return this;
            var n = !this.intro || '\n' === this.intro.slice(-1);
            return (
              this.sources.forEach(function(r, i) {
                var a = void 0 !== r.separator ? r.separator : e.separator,
                  s = n || (i > 0 && /\r?\n$/.test(a));
                r.content.indent(t, {
                  exclude: r.indentExclusionRanges,
                  indentStart: s,
                }),
                  (n = '\n' === r.content.toString().slice(0, -1));
              }),
              this.intro &&
                (this.intro =
                  t +
                  this.intro.replace(/^[^\n]/gm, function(e, n) {
                    return n > 0 ? t + e : e;
                  })),
              this
            );
          },
          prepend: function(t) {
            return (this.intro = t + this.intro), this;
          },
          toString: function() {
            var t = this,
              e = this.sources
                .map(function(e, n) {
                  var r = void 0 !== e.separator ? e.separator : t.separator;
                  return (n > 0 ? r : '') + e.content.toString();
                })
                .join('');
            return this.intro + e;
          },
          trimLines: function() {
            return this.trim('[\\r\\n]');
          },
          trim: function(t) {
            return this.trimStart(t).trimEnd(t);
          },
          trimStart: function(t) {
            var e = new RegExp('^' + (t || '\\s') + '+');
            if (((this.intro = this.intro.replace(e, '')), !this.intro)) {
              var n,
                r = 0;
              do {
                if (!(n = this.sources[r])) break;
                n.content.trimStart(t), (r += 1);
              } while ('' === n.content.toString());
            }
            return this;
          },
          trimEnd: function(t) {
            var e,
              n = new RegExp((t || '\\s') + '+$'),
              r = this.sources.length - 1;
            do {
              if (!(e = this.sources[r])) {
                this.intro = this.intro.replace(n, '');
                break;
              }
              e.content.trimEnd(t), (r -= 1);
            } while ('' === e.content.toString());
            return this;
          },
        }),
          (e.a = g);
      }.call(this, n(206).Buffer, n(210)));
    },
    function(t, e, n) {
      'use strict';
      (function(t) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var r = n(207),
          i = n(208),
          a = n(209);
        function s() {
          return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function o(t, e) {
          if (s() < e) throw new RangeError('Invalid typed array length');
          return (
            p.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = p.prototype)
              : (null === t && (t = new p(e)), (t.length = e)),
            t
          );
        }
        function p(t, e, n) {
          if (!(p.TYPED_ARRAY_SUPPORT || this instanceof p))
            return new p(t, e, n);
          if ('number' == typeof t) {
            if ('string' == typeof e)
              throw new Error(
                'If encoding is specified then the first argument must be a string'
              );
            return u(this, t);
          }
          return h(this, t, e, n);
        }
        function h(t, e, n, r) {
          if ('number' == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function(t, e, n, r) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                return (
                  (e =
                    void 0 === n && void 0 === r
                      ? new Uint8Array(e)
                      : void 0 === r
                        ? new Uint8Array(e, n)
                        : new Uint8Array(e, n, r)),
                  p.TYPED_ARRAY_SUPPORT
                    ? ((t = e).__proto__ = p.prototype)
                    : (t = l(t, e)),
                  t
                );
              })(t, e, n, r)
            : 'string' == typeof e
              ? (function(t, e, n) {
                  if (
                    (('string' == typeof n && '' !== n) || (n = 'utf8'),
                    !p.isEncoding(n))
                  )
                    throw new TypeError(
                      '"encoding" must be a valid string encoding'
                    );
                  var r = 0 | f(e, n),
                    i = (t = o(t, r)).write(e, n);
                  return i !== r && (t = t.slice(0, i)), t;
                })(t, e, n)
              : (function(t, e) {
                  if (p.isBuffer(e)) {
                    var n = 0 | d(e.length);
                    return 0 === (t = o(t, n)).length
                      ? t
                      : (e.copy(t, 0, 0, n), t);
                  }
                  if (e) {
                    if (
                      ('undefined' != typeof ArrayBuffer &&
                        e.buffer instanceof ArrayBuffer) ||
                      'length' in e
                    )
                      return 'number' != typeof e.length || (r = e.length) != r
                        ? o(t, 0)
                        : l(t, e);
                    if ('Buffer' === e.type && a(e.data)) return l(t, e.data);
                  }
                  var r;
                  throw new TypeError(
                    'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                  );
                })(t, e);
        }
        function c(t) {
          if ('number' != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function u(t, e) {
          if ((c(e), (t = o(t, e < 0 ? 0 : 0 | d(e))), !p.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function l(t, e) {
          var n = e.length < 0 ? 0 : 0 | d(e.length);
          t = o(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t;
        }
        function d(t) {
          if (t >= s())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                s().toString(16) +
                ' bytes'
            );
          return 0 | t;
        }
        function f(t, e) {
          if (p.isBuffer(t)) return t.length;
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          'string' != typeof t && (t = '' + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (e) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return F(t).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n;
              case 'hex':
                return n >>> 1;
              case 'base64':
                return V(t).length;
              default:
                if (r) return F(t).length;
                (e = ('' + e).toLowerCase()), (r = !0);
            }
        }
        function g(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function m(t, e, n, r, i) {
          if (0 === t.length) return -1;
          if (
            ('string' == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
                ? (n = 2147483647)
                : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (i) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (('string' == typeof e && (e = p.from(e, r)), p.isBuffer(e)))
            return 0 === e.length ? -1 : y(t, e, n, r, i);
          if ('number' == typeof e)
            return (
              (e &= 255),
              p.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : y(t, [e], n, r, i)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function y(t, e, n, r, i) {
          var a,
            s = 1,
            o = t.length,
            p = e.length;
          if (
            void 0 !== r &&
            ('ucs2' === (r = String(r).toLowerCase()) ||
              'ucs-2' === r ||
              'utf16le' === r ||
              'utf-16le' === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (s = 2), (o /= 2), (p /= 2), (n /= 2);
          }
          function h(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }
          if (i) {
            var c = -1;
            for (a = n; a < o; a++)
              if (h(t, a) === h(e, -1 === c ? 0 : a - c)) {
                if ((-1 === c && (c = a), a - c + 1 === p)) return c * s;
              } else -1 !== c && (a -= a - c), (c = -1);
          } else
            for (n + p > o && (n = o - p), a = n; a >= 0; a--) {
              for (var u = !0, l = 0; l < p; l++)
                if (h(t, a + l) !== h(e, l)) {
                  u = !1;
                  break;
                }
              if (u) return a;
            }
          return -1;
        }
        function v(t, e, n, r) {
          n = Number(n) || 0;
          var i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var a = e.length;
          if (a % 2 != 0) throw new TypeError('Invalid hex string');
          r > a / 2 && (r = a / 2);
          for (var s = 0; s < r; ++s) {
            var o = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(o)) return s;
            t[n + s] = o;
          }
          return s;
        }
        function b(t, e, n, r) {
          return H(F(e, t.length - n), t, n, r);
        }
        function _(t, e, n, r) {
          return H(
            (function(t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function x(t, e, n, r) {
          return _(t, e, n, r);
        }
        function S(t, e, n, r) {
          return H(V(e), t, n, r);
        }
        function w(t, e, n, r) {
          return H(
            (function(t, e) {
              for (
                var n, r, i, a = [], s = 0;
                s < t.length && !((e -= 2) < 0);
                ++s
              )
                (r = (n = t.charCodeAt(s)) >> 8),
                  (i = n % 256),
                  a.push(i),
                  a.push(r);
              return a;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function E(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function k(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], i = e; i < n; ) {
            var a,
              s,
              o,
              p,
              h = t[i],
              c = null,
              u = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
            if (i + u <= n)
              switch (u) {
                case 1:
                  h < 128 && (c = h);
                  break;
                case 2:
                  128 == (192 & (a = t[i + 1])) &&
                    (p = ((31 & h) << 6) | (63 & a)) > 127 &&
                    (c = p);
                  break;
                case 3:
                  (a = t[i + 1]),
                    (s = t[i + 2]),
                    128 == (192 & a) &&
                      128 == (192 & s) &&
                      (p = ((15 & h) << 12) | ((63 & a) << 6) | (63 & s)) >
                        2047 &&
                      (p < 55296 || p > 57343) &&
                      (c = p);
                  break;
                case 4:
                  (a = t[i + 1]),
                    (s = t[i + 2]),
                    (o = t[i + 3]),
                    128 == (192 & a) &&
                      128 == (192 & s) &&
                      128 == (192 & o) &&
                      (p =
                        ((15 & h) << 18) |
                        ((63 & a) << 12) |
                        ((63 & s) << 6) |
                        (63 & o)) > 65535 &&
                      p < 1114112 &&
                      (c = p);
              }
            null === c
              ? ((c = 65533), (u = 1))
              : c > 65535 &&
                ((c -= 65536),
                r.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              r.push(c),
              (i += u);
          }
          return (function(t) {
            var e = t.length;
            if (e <= C) return String.fromCharCode.apply(String, t);
            for (var n = '', r = 0; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += C)));
            return n;
          })(r);
        }
        (e.Buffer = p),
          (e.SlowBuffer = function(t) {
            return +t != t && (t = 0), p.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (p.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function() {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        'function' == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = s()),
          (p.poolSize = 8192),
          (p._augment = function(t) {
            return (t.__proto__ = p.prototype), t;
          }),
          (p.from = function(t, e, n) {
            return h(null, t, e, n);
          }),
          p.TYPED_ARRAY_SUPPORT &&
            ((p.prototype.__proto__ = Uint8Array.prototype),
            (p.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              p[Symbol.species] === p &&
              Object.defineProperty(p, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (p.alloc = function(t, e, n) {
            return (function(t, e, n, r) {
              return (
                c(e),
                e <= 0
                  ? o(t, e)
                  : void 0 !== n
                    ? 'string' == typeof r
                      ? o(t, e).fill(n, r)
                      : o(t, e).fill(n)
                    : o(t, e)
              );
            })(null, t, e, n);
          }),
          (p.allocUnsafe = function(t) {
            return u(null, t);
          }),
          (p.allocUnsafeSlow = function(t) {
            return u(null, t);
          }),
          (p.isBuffer = function(t) {
            return !(null == t || !t._isBuffer);
          }),
          (p.compare = function(t, e) {
            if (!p.isBuffer(t) || !p.isBuffer(e))
              throw new TypeError('Arguments must be Buffers');
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, i = 0, a = Math.min(n, r);
              i < a;
              ++i
            )
              if (t[i] !== e[i]) {
                (n = t[i]), (r = e[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (p.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (p.concat = function(t, e) {
            if (!a(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return p.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = p.allocUnsafe(e),
              i = 0;
            for (n = 0; n < t.length; ++n) {
              var s = t[n];
              if (!p.isBuffer(s))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              s.copy(r, i), (i += s.length);
            }
            return r;
          }),
          (p.byteLength = f),
          (p.prototype._isBuffer = !0),
          (p.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var e = 0; e < t; e += 2) g(this, e, e + 1);
            return this;
          }),
          (p.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var e = 0; e < t; e += 4)
              g(this, e, e + 3), g(this, e + 1, e + 2);
            return this;
          }),
          (p.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var e = 0; e < t; e += 8)
              g(this, e, e + 7),
                g(this, e + 1, e + 6),
                g(this, e + 2, e + 5),
                g(this, e + 3, e + 4);
            return this;
          }),
          (p.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t
              ? ''
              : 0 === arguments.length
                ? k(this, 0, t)
                : function(t, e, n) {
                    var r = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                      return '';
                    if (
                      ((void 0 === n || n > this.length) && (n = this.length),
                      n <= 0)
                    )
                      return '';
                    if ((n >>>= 0) <= (e >>>= 0)) return '';
                    for (t || (t = 'utf8'); ; )
                      switch (t) {
                        case 'hex':
                          return P(this, e, n);
                        case 'utf8':
                        case 'utf-8':
                          return k(this, e, n);
                        case 'ascii':
                          return T(this, e, n);
                        case 'latin1':
                        case 'binary':
                          return A(this, e, n);
                        case 'base64':
                          return E(this, e, n);
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                          return L(this, e, n);
                        default:
                          if (r) throw new TypeError('Unknown encoding: ' + t);
                          (t = (t + '').toLowerCase()), (r = !0);
                      }
                  }.apply(this, arguments);
          }),
          (p.prototype.equals = function(t) {
            if (!p.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            return this === t || 0 === p.compare(this, t);
          }),
          (p.prototype.inspect = function() {
            var t = '',
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString('hex', 0, n)
                  .match(/.{2}/g)
                  .join(' ')),
                this.length > n && (t += ' ... ')),
              '<Buffer ' + t + '>'
            );
          }),
          (p.prototype.compare = function(t, e, n, r, i) {
            if (!p.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              e < 0 || n > t.length || r < 0 || i > this.length)
            )
              throw new RangeError('out of range index');
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (((e >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === t))
              return 0;
            for (
              var a = i - r,
                s = n - e,
                o = Math.min(a, s),
                h = this.slice(r, i),
                c = t.slice(e, n),
                u = 0;
              u < o;
              ++u
            )
              if (h[u] !== c[u]) {
                (a = h[u]), (s = c[u]);
                break;
              }
            return a < s ? -1 : s < a ? 1 : 0;
          }),
          (p.prototype.includes = function(t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (p.prototype.indexOf = function(t, e, n) {
            return m(this, t, e, n, !0);
          }),
          (p.prototype.lastIndexOf = function(t, e, n) {
            return m(this, t, e, n, !1);
          }),
          (p.prototype.write = function(t, e, n, r) {
            if (void 0 === e) (r = 'utf8'), (n = this.length), (e = 0);
            else if (void 0 === n && 'string' == typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = 'utf8'))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === n || n > i) && (n = i),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            r || (r = 'utf8');
            for (var a = !1; ; )
              switch (r) {
                case 'hex':
                  return v(this, t, e, n);
                case 'utf8':
                case 'utf-8':
                  return b(this, t, e, n);
                case 'ascii':
                  return _(this, t, e, n);
                case 'latin1':
                case 'binary':
                  return x(this, t, e, n);
                case 'base64':
                  return S(this, t, e, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return w(this, t, e, n);
                default:
                  if (a) throw new TypeError('Unknown encoding: ' + r);
                  (r = ('' + r).toLowerCase()), (a = !0);
              }
          }),
          (p.prototype.toJSON = function() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var C = 4096;
        function T(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
          return r;
        }
        function A(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
          return r;
        }
        function P(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = '', a = e; a < n; ++a) i += U(t[a]);
          return i;
        }
        function L(t, e, n) {
          for (var r = t.slice(e, n), i = '', a = 0; a < r.length; a += 2)
            i += String.fromCharCode(r[a] + 256 * r[a + 1]);
          return i;
        }
        function O(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
          if (t + e > n)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function R(t, e, n, r, i, a) {
          if (!p.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < a)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError('Index out of range');
        }
        function I(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, a = Math.min(t.length - n, 2); i < a; ++i)
            t[n + i] =
              (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function N(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, a = Math.min(t.length - n, 4); i < a; ++i)
            t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function j(t, e, n, r, i, a) {
          if (n + r > t.length) throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('Index out of range');
        }
        function M(t, e, n, r, a) {
          return a || j(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
        }
        function B(t, e, n, r, a) {
          return a || j(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
        }
        (p.prototype.slice = function(t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t),
            p.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = p.prototype;
          else {
            var i = e - t;
            n = new p(i, void 0);
            for (var a = 0; a < i; ++a) n[a] = this[a + t];
          }
          return n;
        }),
          (p.prototype.readUIntLE = function(t, e, n) {
            (t |= 0), (e |= 0), n || O(t, e, this.length);
            for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
              r += this[t + a] * i;
            return r;
          }),
          (p.prototype.readUIntBE = function(t, e, n) {
            (t |= 0), (e |= 0), n || O(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); )
              r += this[t + --e] * i;
            return r;
          }),
          (p.prototype.readUInt8 = function(t, e) {
            return e || O(t, 1, this.length), this[t];
          }),
          (p.prototype.readUInt16LE = function(t, e) {
            return e || O(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (p.prototype.readUInt16BE = function(t, e) {
            return e || O(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (p.prototype.readUInt32LE = function(t, e) {
            return (
              e || O(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (p.prototype.readUInt32BE = function(t, e) {
            return (
              e || O(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (p.prototype.readIntLE = function(t, e, n) {
            (t |= 0), (e |= 0), n || O(t, e, this.length);
            for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256); )
              r += this[t + a] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }),
          (p.prototype.readIntBE = function(t, e, n) {
            (t |= 0), (e |= 0), n || O(t, e, this.length);
            for (var r = e, i = 1, a = this[t + --r]; r > 0 && (i *= 256); )
              a += this[t + --r] * i;
            return a >= (i *= 128) && (a -= Math.pow(2, 8 * e)), a;
          }),
          (p.prototype.readInt8 = function(t, e) {
            return (
              e || O(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (p.prototype.readInt16LE = function(t, e) {
            e || O(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (p.prototype.readInt16BE = function(t, e) {
            e || O(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (p.prototype.readInt32LE = function(t, e) {
            return (
              e || O(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (p.prototype.readInt32BE = function(t, e) {
            return (
              e || O(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (p.prototype.readFloatLE = function(t, e) {
            return e || O(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (p.prototype.readFloatBE = function(t, e) {
            return e || O(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (p.prototype.readDoubleLE = function(t, e) {
            return e || O(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (p.prototype.readDoubleBE = function(t, e) {
            return e || O(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (p.prototype.writeUIntLE = function(t, e, n, r) {
            (t = +t),
              (e |= 0),
              (n |= 0),
              r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              a = 0;
            for (this[e] = 255 & t; ++a < n && (i *= 256); )
              this[e + a] = (t / i) & 255;
            return e + n;
          }),
          (p.prototype.writeUIntBE = function(t, e, n, r) {
            (t = +t),
              (e |= 0),
              (n |= 0),
              r || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              a = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
              this[e + i] = (t / a) & 255;
            return e + n;
          }),
          (p.prototype.writeUInt8 = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 1, 255, 0),
              p.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (p.prototype.writeUInt16LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 65535, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : I(this, t, e, !0),
              e + 2
            );
          }),
          (p.prototype.writeUInt16BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 65535, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : I(this, t, e, !1),
              e + 2
            );
          }),
          (p.prototype.writeUInt32LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 4294967295, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : N(this, t, e, !0),
              e + 4
            );
          }),
          (p.prototype.writeUInt32BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 4294967295, 0),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : N(this, t, e, !1),
              e + 4
            );
          }),
          (p.prototype.writeIntLE = function(t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, i - 1, -i);
            }
            var a = 0,
              s = 1,
              o = 0;
            for (this[e] = 255 & t; ++a < n && (s *= 256); )
              t < 0 && 0 === o && 0 !== this[e + a - 1] && (o = 1),
                (this[e + a] = (((t / s) >> 0) - o) & 255);
            return e + n;
          }),
          (p.prototype.writeIntBE = function(t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, i - 1, -i);
            }
            var a = n - 1,
              s = 1,
              o = 0;
            for (this[e + a] = 255 & t; --a >= 0 && (s *= 256); )
              t < 0 && 0 === o && 0 !== this[e + a + 1] && (o = 1),
                (this[e + a] = (((t / s) >> 0) - o) & 255);
            return e + n;
          }),
          (p.prototype.writeInt8 = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 1, 127, -128),
              p.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (p.prototype.writeInt16LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 32767, -32768),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : I(this, t, e, !0),
              e + 2
            );
          }),
          (p.prototype.writeInt16BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 32767, -32768),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : I(this, t, e, !1),
              e + 2
            );
          }),
          (p.prototype.writeInt32LE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : N(this, t, e, !0),
              e + 4
            );
          }),
          (p.prototype.writeInt32BE = function(t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              p.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : N(this, t, e, !1),
              e + 4
            );
          }),
          (p.prototype.writeFloatLE = function(t, e, n) {
            return M(this, t, e, !0, n);
          }),
          (p.prototype.writeFloatBE = function(t, e, n) {
            return M(this, t, e, !1, n);
          }),
          (p.prototype.writeDoubleLE = function(t, e, n) {
            return B(this, t, e, !0, n);
          }),
          (p.prototype.writeDoubleBE = function(t, e, n) {
            return B(this, t, e, !1, n);
          }),
          (p.prototype.copy = function(t, e, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError('targetStart out of bounds');
            if (n < 0 || n >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (r < 0) throw new RangeError('sourceEnd out of bounds');
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            var i,
              a = r - n;
            if (this === t && n < e && e < r)
              for (i = a - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (a < 1e3 || !p.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < a; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
            return a;
          }),
          (p.prototype.fill = function(t, e, n, r) {
            if ('string' == typeof t) {
              if (
                ('string' == typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : 'string' == typeof n && ((r = n), (n = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== r && 'string' != typeof r)
                throw new TypeError('encoding must be a string');
              if ('string' == typeof r && !p.isEncoding(r))
                throw new TypeError('Unknown encoding: ' + r);
            } else 'number' == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError('Out of range index');
            if (n <= e) return this;
            var a;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              'number' == typeof t)
            )
              for (a = e; a < n; ++a) this[a] = t;
            else {
              var s = p.isBuffer(t) ? t : F(new p(t, r).toString()),
                o = s.length;
              for (a = 0; a < n - e; ++a) this[a + e] = s[a % o];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function U(t) {
          return t < 16 ? '0' + t.toString(16) : t.toString(16);
        }
        function F(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, i = null, a = [], s = 0; s < r; ++s) {
            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && a.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === r) {
                  (e -= 3) > -1 && a.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && a.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (e -= 3) > -1 && a.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((e -= 1) < 0) break;
              a.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              a.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point');
              if ((e -= 4) < 0) break;
              a.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return a;
        }
        function V(t) {
          return r.toByteArray(
            (function(t) {
              if (
                (t = (function(t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
                })(t).replace(D, '')).length < 2
              )
                return '';
              for (; t.length % 4 != 0; ) t += '=';
              return t;
            })(t)
          );
        }
        function H(t, e, n, r) {
          for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
      }.call(this, n(84)));
    },
    function(t, e, n) {
      'use strict';
      (e.byteLength = function(t) {
        var e = h(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function(t) {
          for (
            var e,
              n = h(t),
              r = n[0],
              s = n[1],
              o = new a((3 * (r + s)) / 4 - s),
              p = 0,
              c = s > 0 ? r - 4 : r,
              u = 0;
            u < c;
            u += 4
          )
            (e =
              (i[t.charCodeAt(u)] << 18) |
              (i[t.charCodeAt(u + 1)] << 12) |
              (i[t.charCodeAt(u + 2)] << 6) |
              i[t.charCodeAt(u + 3)]),
              (o[p++] = (e >> 16) & 255),
              (o[p++] = (e >> 8) & 255),
              (o[p++] = 255 & e);
          return (
            2 === s &&
              ((e = (i[t.charCodeAt(u)] << 2) | (i[t.charCodeAt(u + 1)] >> 4)),
              (o[p++] = 255 & e)),
            1 === s &&
              ((e =
                (i[t.charCodeAt(u)] << 10) |
                (i[t.charCodeAt(u + 1)] << 4) |
                (i[t.charCodeAt(u + 2)] >> 2)),
              (o[p++] = (e >> 8) & 255),
              (o[p++] = 255 & e)),
            o
          );
        }),
        (e.fromByteArray = function(t) {
          for (
            var e, n = t.length, i = n % 3, a = [], s = 0, o = n - i;
            s < o;
            s += 16383
          )
            a.push(c(t, s, s + 16383 > o ? o : s + 16383));
          return (
            1 === i
              ? ((e = t[n - 1]), a.push(r[e >> 2] + r[(e << 4) & 63] + '=='))
              : 2 === i &&
                ((e = (t[n - 2] << 8) + t[n - 1]),
                a.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + '=')),
            a.join('')
          );
        });
      for (
        var r = [],
          i = [],
          a = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          s =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          o = 0,
          p = s.length;
        o < p;
        ++o
      )
        (r[o] = s[o]), (i[s.charCodeAt(o)] = o);
      function h(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var n = t.indexOf('=');
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function c(t, e, n) {
        for (var i, a, s = [], o = e; o < n; o += 3)
          (i =
            ((t[o] << 16) & 16711680) +
            ((t[o + 1] << 8) & 65280) +
            (255 & t[o + 2])),
            s.push(
              r[((a = i) >> 18) & 63] +
                r[(a >> 12) & 63] +
                r[(a >> 6) & 63] +
                r[63 & a]
            );
        return s.join('');
      }
      (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
    },
    function(t, e) {
      (e.read = function(t, e, n, r, i) {
        var a,
          s,
          o = 8 * i - r - 1,
          p = (1 << o) - 1,
          h = p >> 1,
          c = -7,
          u = n ? i - 1 : 0,
          l = n ? -1 : 1,
          d = t[e + u];
        for (
          u += l, a = d & ((1 << -c) - 1), d >>= -c, c += o;
          c > 0;
          a = 256 * a + t[e + u], u += l, c -= 8
        );
        for (
          s = a & ((1 << -c) - 1), a >>= -c, c += r;
          c > 0;
          s = 256 * s + t[e + u], u += l, c -= 8
        );
        if (0 === a) a = 1 - h;
        else {
          if (a === p) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, r)), (a -= h);
        }
        return (d ? -1 : 1) * s * Math.pow(2, a - r);
      }),
        (e.write = function(t, e, n, r, i, a) {
          var s,
            o,
            p,
            h = 8 * a - i - 1,
            c = (1 << h) - 1,
            u = c >> 1,
            l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : a - 1,
            f = r ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((o = isNaN(e) ? 1 : 0), (s = c))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (p = Math.pow(2, -s)) < 1 && (s--, (p *= 2)),
                  (e += s + u >= 1 ? l / p : l * Math.pow(2, 1 - u)) * p >= 2 &&
                    (s++, (p /= 2)),
                  s + u >= c
                    ? ((o = 0), (s = c))
                    : s + u >= 1
                      ? ((o = (e * p - 1) * Math.pow(2, i)), (s += u))
                      : ((o = e * Math.pow(2, u - 1) * Math.pow(2, i)),
                        (s = 0)));
            i >= 8;
            t[n + d] = 255 & o, d += f, o /= 256, i -= 8
          );
          for (
            s = (s << i) | o, h += i;
            h > 0;
            t[n + d] = 255 & s, d += f, s /= 256, h -= 8
          );
          t[n + d - f] |= 128 * g;
        });
    },
    function(t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function(t) {
          return '[object Array]' == n.call(t);
        };
    },
    function(t, e) {
      var n,
        r,
        i = (t.exports = {});
      function a() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      function o(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === a || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function() {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : a;
        } catch (t) {
          n = a;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
          r = s;
        }
      })();
      var p,
        h = [],
        c = !1,
        u = -1;
      function l() {
        c &&
          p &&
          ((c = !1), p.length ? (h = p.concat(h)) : (u = -1), h.length && d());
      }
      function d() {
        if (!c) {
          var t = o(l);
          c = !0;
          for (var e = h.length; e; ) {
            for (p = h, h = []; ++u < e; ) p && p[u].run();
            (u = -1), (e = h.length);
          }
          (p = null),
            (c = !1),
            (function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === s || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function f(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        h.push(new f(t, e)), 1 !== h.length || c || o(d);
      }),
        (f.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function(t) {
          return [];
        }),
        (i.binding = function(t) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function() {
          return '/';
        }),
        (i.chdir = function(t) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function() {
          return 0;
        });
    },
    function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      });
      var r = {},
        i = {};
      function a(t) {
        var e;
        if ('number' == typeof t) e = s(t);
        else {
          e = '';
          for (var n = 0; n < t.length; n += 1) e += s(t[n]);
        }
        return e;
      }
      function s(t) {
        var e = '';
        t < 0 ? (t = (-t << 1) | 1) : (t <<= 1);
        do {
          var n = 31 & t;
          (t >>= 5) > 0 && (n |= 32), (e += i[n]);
        } while (t > 0);
        return e;
      }
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        .split('')
        .forEach(function(t, e) {
          (r[t] = e), (i[e] = t);
        });
    },
    function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'version', function() {
          return Et;
        }),
        n.d(e, 'parse', function() {
          return kt;
        }),
        n.d(e, 'parseExpressionAt', function() {
          return Ct;
        }),
        n.d(e, 'tokenizer', function() {
          return Tt;
        }),
        n.d(e, 'parse_dammit', function() {
          return xt;
        }),
        n.d(e, 'LooseParser', function() {
          return St;
        }),
        n.d(e, 'pluginsLoose', function() {
          return wt;
        }),
        n.d(e, 'addLooseExports', function() {
          return At;
        }),
        n.d(e, 'Parser', function() {
          return U;
        }),
        n.d(e, 'plugins', function() {
          return B;
        }),
        n.d(e, 'defaultOptions', function() {
          return M;
        }),
        n.d(e, 'Position', function() {
          return I;
        }),
        n.d(e, 'SourceLocation', function() {
          return N;
        }),
        n.d(e, 'getLineInfo', function() {
          return j;
        }),
        n.d(e, 'Node', function() {
          return Z;
        }),
        n.d(e, 'TokenType', function() {
          return m;
        }),
        n.d(e, 'tokTypes', function() {
          return S;
        }),
        n.d(e, 'keywordTypes', function() {
          return _;
        }),
        n.d(e, 'TokContext', function() {
          return nt;
        }),
        n.d(e, 'tokContexts', function() {
          return rt;
        }),
        n.d(e, 'isIdentifierChar', function() {
          return g;
        }),
        n.d(e, 'isIdentifierStart', function() {
          return f;
        }),
        n.d(e, 'Token', function() {
          return yt;
        }),
        n.d(e, 'isNewLine', function() {
          return k;
        }),
        n.d(e, 'lineBreak', function() {
          return w;
        }),
        n.d(e, 'lineBreakG', function() {
          return E;
        }),
        n.d(e, 'nonASCIIwhitespace', function() {
          return C;
        });
      var r = {
          3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
          5: 'class enum extends super const export import',
          6: 'enum',
          strict:
            'implements interface let package private protected public static yield',
          strictBind: 'eval arguments',
        },
        i =
          'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
        a = { 5: i, 6: i + ' const class extends export import super' },
        s = /^in(stanceof)?$/,
        o =
          'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
        p =
          '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
        h = new RegExp('[' + o + ']'),
        c = new RegExp('[' + o + p + ']');
      o = p = null;
      var u = [
          0,
          11,
          2,
          25,
          2,
          18,
          2,
          1,
          2,
          14,
          3,
          13,
          35,
          122,
          70,
          52,
          268,
          28,
          4,
          48,
          48,
          31,
          14,
          29,
          6,
          37,
          11,
          29,
          3,
          35,
          5,
          7,
          2,
          4,
          43,
          157,
          19,
          35,
          5,
          35,
          5,
          39,
          9,
          51,
          157,
          310,
          10,
          21,
          11,
          7,
          153,
          5,
          3,
          0,
          2,
          43,
          2,
          1,
          4,
          0,
          3,
          22,
          11,
          22,
          10,
          30,
          66,
          18,
          2,
          1,
          11,
          21,
          11,
          25,
          71,
          55,
          7,
          1,
          65,
          0,
          16,
          3,
          2,
          2,
          2,
          28,
          43,
          28,
          4,
          28,
          36,
          7,
          2,
          27,
          28,
          53,
          11,
          21,
          11,
          18,
          14,
          17,
          111,
          72,
          56,
          50,
          14,
          50,
          14,
          35,
          477,
          28,
          11,
          0,
          9,
          21,
          190,
          52,
          76,
          44,
          33,
          24,
          27,
          35,
          30,
          0,
          12,
          34,
          4,
          0,
          13,
          47,
          15,
          3,
          22,
          0,
          2,
          0,
          36,
          17,
          2,
          24,
          85,
          6,
          2,
          0,
          2,
          3,
          2,
          14,
          2,
          9,
          8,
          46,
          39,
          7,
          3,
          1,
          3,
          21,
          2,
          6,
          2,
          1,
          2,
          4,
          4,
          0,
          19,
          0,
          13,
          4,
          159,
          52,
          19,
          3,
          54,
          47,
          21,
          1,
          2,
          0,
          185,
          46,
          42,
          3,
          37,
          47,
          21,
          0,
          60,
          42,
          86,
          26,
          230,
          43,
          117,
          63,
          32,
          0,
          257,
          0,
          11,
          39,
          8,
          0,
          22,
          0,
          12,
          39,
          3,
          3,
          20,
          0,
          35,
          56,
          264,
          8,
          2,
          36,
          18,
          0,
          50,
          29,
          113,
          6,
          2,
          1,
          2,
          37,
          22,
          0,
          26,
          5,
          2,
          1,
          2,
          31,
          15,
          0,
          328,
          18,
          270,
          921,
          103,
          110,
          18,
          195,
          2749,
          1070,
          4050,
          582,
          8634,
          568,
          8,
          30,
          114,
          29,
          19,
          47,
          17,
          3,
          32,
          20,
          6,
          18,
          689,
          63,
          129,
          68,
          12,
          0,
          67,
          12,
          65,
          1,
          31,
          6129,
          15,
          754,
          9486,
          286,
          82,
          395,
          2309,
          106,
          6,
          12,
          4,
          8,
          8,
          9,
          5991,
          84,
          2,
          70,
          2,
          1,
          3,
          0,
          3,
          1,
          3,
          3,
          2,
          11,
          2,
          0,
          2,
          6,
          2,
          64,
          2,
          3,
          3,
          7,
          2,
          6,
          2,
          27,
          2,
          3,
          2,
          4,
          2,
          0,
          4,
          6,
          2,
          339,
          3,
          24,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          7,
          4149,
          196,
          60,
          67,
          1213,
          3,
          2,
          26,
          2,
          1,
          2,
          0,
          3,
          0,
          2,
          9,
          2,
          3,
          2,
          0,
          2,
          0,
          7,
          0,
          5,
          0,
          2,
          0,
          2,
          0,
          2,
          2,
          2,
          1,
          2,
          0,
          3,
          0,
          2,
          0,
          2,
          0,
          2,
          0,
          2,
          0,
          2,
          1,
          2,
          0,
          3,
          3,
          2,
          6,
          2,
          3,
          2,
          3,
          2,
          0,
          2,
          9,
          2,
          16,
          6,
          2,
          2,
          4,
          2,
          16,
          4421,
          42710,
          42,
          4148,
          12,
          221,
          3,
          5761,
          15,
          7472,
          3104,
          541,
        ],
        l = [
          509,
          0,
          227,
          0,
          150,
          4,
          294,
          9,
          1368,
          2,
          2,
          1,
          6,
          3,
          41,
          2,
          5,
          0,
          166,
          1,
          574,
          3,
          9,
          9,
          525,
          10,
          176,
          2,
          54,
          14,
          32,
          9,
          16,
          3,
          46,
          10,
          54,
          9,
          7,
          2,
          37,
          13,
          2,
          9,
          6,
          1,
          45,
          0,
          13,
          2,
          49,
          13,
          9,
          3,
          4,
          9,
          83,
          11,
          7,
          0,
          161,
          11,
          6,
          9,
          7,
          3,
          56,
          1,
          2,
          6,
          3,
          1,
          3,
          2,
          10,
          0,
          11,
          1,
          3,
          6,
          4,
          4,
          193,
          17,
          10,
          9,
          5,
          0,
          82,
          19,
          13,
          9,
          214,
          6,
          3,
          8,
          28,
          1,
          83,
          16,
          16,
          9,
          82,
          12,
          9,
          9,
          84,
          14,
          5,
          9,
          243,
          14,
          166,
          9,
          280,
          9,
          41,
          6,
          2,
          3,
          9,
          0,
          10,
          10,
          47,
          15,
          406,
          7,
          2,
          7,
          17,
          9,
          57,
          21,
          2,
          13,
          123,
          5,
          4,
          0,
          2,
          1,
          2,
          6,
          2,
          0,
          9,
          9,
          49,
          4,
          2,
          1,
          2,
          4,
          9,
          9,
          330,
          3,
          19306,
          9,
          135,
          4,
          60,
          6,
          26,
          9,
          1016,
          45,
          17,
          3,
          19723,
          1,
          5319,
          4,
          4,
          5,
          9,
          7,
          3,
          6,
          31,
          3,
          149,
          2,
          1418,
          49,
          513,
          54,
          5,
          49,
          9,
          0,
          15,
          0,
          23,
          4,
          2,
          14,
          1361,
          6,
          2,
          16,
          3,
          6,
          2,
          1,
          2,
          4,
          2214,
          6,
          110,
          6,
          6,
          9,
          792487,
          239,
        ];
      function d(t, e) {
        for (var n = 65536, r = 0; r < e.length; r += 2) {
          if ((n += e[r]) > t) return !1;
          if ((n += e[r + 1]) >= t) return !0;
        }
      }
      function f(t, e) {
        return t < 65
          ? 36 === t
          : t < 91 ||
              (t < 97
                ? 95 === t
                : t < 123 ||
                  (t <= 65535
                    ? t >= 170 && h.test(String.fromCharCode(t))
                    : !1 !== e && d(t, u)));
      }
      function g(t, e) {
        return t < 48
          ? 36 === t
          : t < 58 ||
              (!(t < 65) &&
                (t < 91 ||
                  (t < 97
                    ? 95 === t
                    : t < 123 ||
                      (t <= 65535
                        ? t >= 170 && c.test(String.fromCharCode(t))
                        : !1 !== e && (d(t, u) || d(t, l))))));
      }
      var m = function(t, e) {
        void 0 === e && (e = {}),
          (this.label = t),
          (this.keyword = e.keyword),
          (this.beforeExpr = !!e.beforeExpr),
          (this.startsExpr = !!e.startsExpr),
          (this.isLoop = !!e.isLoop),
          (this.isAssign = !!e.isAssign),
          (this.prefix = !!e.prefix),
          (this.postfix = !!e.postfix),
          (this.binop = e.binop || null),
          (this.updateContext = null);
      };
      function y(t, e) {
        return new m(t, { beforeExpr: !0, binop: e });
      }
      var v = { beforeExpr: !0 },
        b = { startsExpr: !0 },
        _ = {};
      function x(t, e) {
        return void 0 === e && (e = {}), (e.keyword = t), (_[t] = new m(t, e));
      }
      var S = {
          num: new m('num', b),
          regexp: new m('regexp', b),
          string: new m('string', b),
          name: new m('name', b),
          eof: new m('eof'),
          bracketL: new m('[', { beforeExpr: !0, startsExpr: !0 }),
          bracketR: new m(']'),
          braceL: new m('{', { beforeExpr: !0, startsExpr: !0 }),
          braceR: new m('}'),
          parenL: new m('(', { beforeExpr: !0, startsExpr: !0 }),
          parenR: new m(')'),
          comma: new m(',', v),
          semi: new m(';', v),
          colon: new m(':', v),
          dot: new m('.'),
          question: new m('?', v),
          arrow: new m('=>', v),
          template: new m('template'),
          invalidTemplate: new m('invalidTemplate'),
          ellipsis: new m('...', v),
          backQuote: new m('`', b),
          dollarBraceL: new m('${', { beforeExpr: !0, startsExpr: !0 }),
          eq: new m('=', { beforeExpr: !0, isAssign: !0 }),
          assign: new m('_=', { beforeExpr: !0, isAssign: !0 }),
          incDec: new m('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
          prefix: new m('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          logicalOR: y('||', 1),
          logicalAND: y('&&', 2),
          bitwiseOR: y('|', 3),
          bitwiseXOR: y('^', 4),
          bitwiseAND: y('&', 5),
          equality: y('==/!=/===/!==', 6),
          relational: y('</>/<=/>=', 7),
          bitShift: y('<</>>/>>>', 8),
          plusMin: new m('+/-', {
            beforeExpr: !0,
            binop: 9,
            prefix: !0,
            startsExpr: !0,
          }),
          modulo: y('%', 10),
          star: y('*', 10),
          slash: y('/', 10),
          starstar: new m('**', { beforeExpr: !0 }),
          _break: x('break'),
          _case: x('case', v),
          _catch: x('catch'),
          _continue: x('continue'),
          _debugger: x('debugger'),
          _default: x('default', v),
          _do: x('do', { isLoop: !0, beforeExpr: !0 }),
          _else: x('else', v),
          _finally: x('finally'),
          _for: x('for', { isLoop: !0 }),
          _function: x('function', b),
          _if: x('if'),
          _return: x('return', v),
          _switch: x('switch'),
          _throw: x('throw', v),
          _try: x('try'),
          _var: x('var'),
          _const: x('const'),
          _while: x('while', { isLoop: !0 }),
          _with: x('with'),
          _new: x('new', { beforeExpr: !0, startsExpr: !0 }),
          _this: x('this', b),
          _super: x('super', b),
          _class: x('class', b),
          _extends: x('extends', v),
          _export: x('export'),
          _import: x('import'),
          _null: x('null', b),
          _true: x('true', b),
          _false: x('false', b),
          _in: x('in', { beforeExpr: !0, binop: 7 }),
          _instanceof: x('instanceof', { beforeExpr: !0, binop: 7 }),
          _typeof: x('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _void: x('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _delete: x('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        },
        w = /\r\n?|\n|\u2028|\u2029/,
        E = new RegExp(w.source, 'g');
      function k(t, e) {
        return 10 === t || 13 === t || (!e && (8232 === t || 8233 === t));
      }
      var C = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
        T = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        A = Object.prototype,
        P = A.hasOwnProperty,
        L = A.toString;
      function O(t, e) {
        return P.call(t, e);
      }
      var R =
          Array.isArray ||
          function(t) {
            return '[object Array]' === L.call(t);
          },
        I = function(t, e) {
          (this.line = t), (this.column = e);
        };
      I.prototype.offset = function(t) {
        return new I(this.line, this.column + t);
      };
      var N = function(t, e, n) {
        (this.start = e),
          (this.end = n),
          null !== t.sourceFile && (this.source = t.sourceFile);
      };
      function j(t, e) {
        for (var n = 1, r = 0; ; ) {
          E.lastIndex = r;
          var i = E.exec(t);
          if (!(i && i.index < e)) return new I(n, e - r);
          ++n, (r = i.index + i[0].length);
        }
      }
      var M = {
        ecmaVersion: 7,
        sourceType: 'script',
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: !1,
        allowImportExportEverywhere: !1,
        allowAwaitOutsideFunction: !1,
        allowHashBang: !1,
        locations: !1,
        onToken: null,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: !1,
        plugins: {},
      };
      var B = {};
      function D(t) {
        return new RegExp('^(?:' + t.replace(/ /g, '|') + ')$');
      }
      var U = function(t, e, n) {
        (this.options = t = (function(t) {
          var e = {};
          for (var n in M) e[n] = t && O(t, n) ? t[n] : M[n];
          if (
            (e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009),
            null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5),
            R(e.onToken))
          ) {
            var r = e.onToken;
            e.onToken = function(t) {
              return r.push(t);
            };
          }
          return (
            R(e.onComment) &&
              (e.onComment = (function(t, e) {
                return function(n, r, i, a, s, o) {
                  var p = {
                    type: n ? 'Block' : 'Line',
                    value: r,
                    start: i,
                    end: a,
                  };
                  t.locations && (p.loc = new N(this, s, o)),
                    t.ranges && (p.range = [i, a]),
                    e.push(p);
                };
              })(e, e.onComment)),
            e
          );
        })(t)),
          (this.sourceFile = t.sourceFile),
          (this.keywords = D(a[t.ecmaVersion >= 6 ? 6 : 5]));
        var i = '';
        if (!t.allowReserved) {
          for (var s = t.ecmaVersion; !(i = r[s]); s--);
          'module' === t.sourceType && (i += ' await');
        }
        this.reservedWords = D(i);
        var o = (i ? i + ' ' : '') + r.strict;
        (this.reservedWordsStrict = D(o)),
          (this.reservedWordsStrictBind = D(o + ' ' + r.strictBind)),
          (this.input = String(e)),
          (this.containsEsc = !1),
          this.loadPlugins(t.plugins),
          n
            ? ((this.pos = n),
              (this.lineStart = this.input.lastIndexOf('\n', n - 1) + 1),
              (this.curLine = this.input
                .slice(0, this.lineStart)
                .split(w).length))
            : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
          (this.type = S.eof),
          (this.value = null),
          (this.start = this.end = this.pos),
          (this.startLoc = this.endLoc = this.curPosition()),
          (this.lastTokEndLoc = this.lastTokStartLoc = null),
          (this.lastTokStart = this.lastTokEnd = this.pos),
          (this.context = this.initialContext()),
          (this.exprAllowed = !0),
          (this.inModule = 'module' === t.sourceType),
          (this.strict = this.inModule || this.strictDirective(this.pos)),
          (this.potentialArrowAt = -1),
          (this.inFunction = this.inGenerator = this.inAsync = !1),
          (this.yieldPos = this.awaitPos = 0),
          (this.labels = []),
          0 === this.pos &&
            t.allowHashBang &&
            '#!' === this.input.slice(0, 2) &&
            this.skipLineComment(2),
          (this.scopeStack = []),
          this.enterFunctionScope(),
          (this.regexpState = null);
      };
      (U.prototype.isKeyword = function(t) {
        return this.keywords.test(t);
      }),
        (U.prototype.isReservedWord = function(t) {
          return this.reservedWords.test(t);
        }),
        (U.prototype.extend = function(t, e) {
          this[t] = e(this[t]);
        }),
        (U.prototype.loadPlugins = function(t) {
          for (var e in t) {
            var n = B[e];
            if (!n) throw new Error("Plugin '" + e + "' not found");
            n(this, t[e]);
          }
        }),
        (U.prototype.parse = function() {
          var t = this.options.program || this.startNode();
          return this.nextToken(), this.parseTopLevel(t);
        });
      var F = U.prototype,
        V = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
      function H() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      }
      (F.strictDirective = function(t) {
        for (;;) {
          (T.lastIndex = t), (t += T.exec(this.input)[0].length);
          var e = V.exec(this.input.slice(t));
          if (!e) return !1;
          if ('use strict' === (e[1] || e[2])) return !0;
          t += e[0].length;
        }
      }),
        (F.eat = function(t) {
          return this.type === t && (this.next(), !0);
        }),
        (F.isContextual = function(t) {
          return this.type === S.name && this.value === t && !this.containsEsc;
        }),
        (F.eatContextual = function(t) {
          return !!this.isContextual(t) && (this.next(), !0);
        }),
        (F.expectContextual = function(t) {
          this.eatContextual(t) || this.unexpected();
        }),
        (F.canInsertSemicolon = function() {
          return (
            this.type === S.eof ||
            this.type === S.braceR ||
            w.test(this.input.slice(this.lastTokEnd, this.start))
          );
        }),
        (F.insertSemicolon = function() {
          if (this.canInsertSemicolon())
            return (
              this.options.onInsertedSemicolon &&
                this.options.onInsertedSemicolon(
                  this.lastTokEnd,
                  this.lastTokEndLoc
                ),
              !0
            );
        }),
        (F.semicolon = function() {
          this.eat(S.semi) || this.insertSemicolon() || this.unexpected();
        }),
        (F.afterTrailingComma = function(t, e) {
          if (this.type === t)
            return (
              this.options.onTrailingComma &&
                this.options.onTrailingComma(
                  this.lastTokStart,
                  this.lastTokStartLoc
                ),
              e || this.next(),
              !0
            );
        }),
        (F.expect = function(t) {
          this.eat(t) || this.unexpected();
        }),
        (F.unexpected = function(t) {
          this.raise(null != t ? t : this.start, 'Unexpected token');
        }),
        (F.checkPatternErrors = function(t, e) {
          if (t) {
            t.trailingComma > -1 &&
              this.raiseRecoverable(
                t.trailingComma,
                'Comma is not permitted after the rest element'
              );
            var n = e ? t.parenthesizedAssign : t.parenthesizedBind;
            n > -1 && this.raiseRecoverable(n, 'Parenthesized pattern');
          }
        }),
        (F.checkExpressionErrors = function(t, e) {
          if (!t) return !1;
          var n = t.shorthandAssign,
            r = t.doubleProto;
          if (!e) return n >= 0 || r >= 0;
          n >= 0 &&
            this.raise(
              n,
              'Shorthand property assignments are valid only in destructuring patterns'
            ),
            r >= 0 &&
              this.raiseRecoverable(r, 'Redefinition of __proto__ property');
        }),
        (F.checkYieldAwaitInDefaultParams = function() {
          this.yieldPos &&
            (!this.awaitPos || this.yieldPos < this.awaitPos) &&
            this.raise(
              this.yieldPos,
              'Yield expression cannot be a default value'
            ),
            this.awaitPos &&
              this.raise(
                this.awaitPos,
                'Await expression cannot be a default value'
              );
        }),
        (F.isSimpleAssignTarget = function(t) {
          return 'ParenthesizedExpression' === t.type
            ? this.isSimpleAssignTarget(t.expression)
            : 'Identifier' === t.type || 'MemberExpression' === t.type;
        });
      var G = U.prototype;
      G.parseTopLevel = function(t) {
        var e = {};
        for (t.body || (t.body = []); this.type !== S.eof; ) {
          var n = this.parseStatement(!0, !0, e);
          t.body.push(n);
        }
        return (
          this.adaptDirectivePrologue(t.body),
          this.next(),
          this.options.ecmaVersion >= 6 &&
            (t.sourceType = this.options.sourceType),
          this.finishNode(t, 'Program')
        );
      };
      var W = { kind: 'loop' },
        K = { kind: 'switch' };
      (G.isLet = function() {
        if (this.options.ecmaVersion < 6 || !this.isContextual('let'))
          return !1;
        T.lastIndex = this.pos;
        var t = T.exec(this.input),
          e = this.pos + t[0].length,
          n = this.input.charCodeAt(e);
        if (91 === n || 123 === n) return !0;
        if (f(n, !0)) {
          for (var r = e + 1; g(this.input.charCodeAt(r), !0); ) ++r;
          var i = this.input.slice(e, r);
          if (!s.test(i)) return !0;
        }
        return !1;
      }),
        (G.isAsyncFunction = function() {
          if (this.options.ecmaVersion < 8 || !this.isContextual('async'))
            return !1;
          T.lastIndex = this.pos;
          var t = T.exec(this.input),
            e = this.pos + t[0].length;
          return !(
            w.test(this.input.slice(this.pos, e)) ||
            'function' !== this.input.slice(e, e + 8) ||
            (e + 8 !== this.input.length && g(this.input.charAt(e + 8)))
          );
        }),
        (G.parseStatement = function(t, e, n) {
          var r,
            i = this.type,
            a = this.startNode();
          switch ((this.isLet() && ((i = S._var), (r = 'let')), i)) {
            case S._break:
            case S._continue:
              return this.parseBreakContinueStatement(a, i.keyword);
            case S._debugger:
              return this.parseDebuggerStatement(a);
            case S._do:
              return this.parseDoStatement(a);
            case S._for:
              return this.parseForStatement(a);
            case S._function:
              return (
                !t && this.options.ecmaVersion >= 6 && this.unexpected(),
                this.parseFunctionStatement(a, !1)
              );
            case S._class:
              return t || this.unexpected(), this.parseClass(a, !0);
            case S._if:
              return this.parseIfStatement(a);
            case S._return:
              return this.parseReturnStatement(a);
            case S._switch:
              return this.parseSwitchStatement(a);
            case S._throw:
              return this.parseThrowStatement(a);
            case S._try:
              return this.parseTryStatement(a);
            case S._const:
            case S._var:
              return (
                (r = r || this.value),
                t || 'var' === r || this.unexpected(),
                this.parseVarStatement(a, r)
              );
            case S._while:
              return this.parseWhileStatement(a);
            case S._with:
              return this.parseWithStatement(a);
            case S.braceL:
              return this.parseBlock();
            case S.semi:
              return this.parseEmptyStatement(a);
            case S._export:
            case S._import:
              return (
                this.options.allowImportExportEverywhere ||
                  (e ||
                    this.raise(
                      this.start,
                      "'import' and 'export' may only appear at the top level"
                    ),
                  this.inModule ||
                    this.raise(
                      this.start,
                      "'import' and 'export' may appear only with 'sourceType: module'"
                    )),
                i === S._import ? this.parseImport(a) : this.parseExport(a, n)
              );
            default:
              if (this.isAsyncFunction())
                return (
                  t || this.unexpected(),
                  this.next(),
                  this.parseFunctionStatement(a, !0)
                );
              var s = this.value,
                o = this.parseExpression();
              return i === S.name &&
                'Identifier' === o.type &&
                this.eat(S.colon)
                ? this.parseLabeledStatement(a, s, o)
                : this.parseExpressionStatement(a, o);
          }
        }),
        (G.parseBreakContinueStatement = function(t, e) {
          var n = 'break' === e;
          this.next(),
            this.eat(S.semi) || this.insertSemicolon()
              ? (t.label = null)
              : this.type !== S.name
                ? this.unexpected()
                : ((t.label = this.parseIdent()), this.semicolon());
          for (var r = 0; r < this.labels.length; ++r) {
            var i = this.labels[r];
            if (null == t.label || i.name === t.label.name) {
              if (null != i.kind && (n || 'loop' === i.kind)) break;
              if (t.label && n) break;
            }
          }
          return (
            r === this.labels.length && this.raise(t.start, 'Unsyntactic ' + e),
            this.finishNode(t, n ? 'BreakStatement' : 'ContinueStatement')
          );
        }),
        (G.parseDebuggerStatement = function(t) {
          return (
            this.next(),
            this.semicolon(),
            this.finishNode(t, 'DebuggerStatement')
          );
        }),
        (G.parseDoStatement = function(t) {
          return (
            this.next(),
            this.labels.push(W),
            (t.body = this.parseStatement(!1)),
            this.labels.pop(),
            this.expect(S._while),
            (t.test = this.parseParenExpression()),
            this.options.ecmaVersion >= 6 ? this.eat(S.semi) : this.semicolon(),
            this.finishNode(t, 'DoWhileStatement')
          );
        }),
        (G.parseForStatement = function(t) {
          this.next();
          var e =
            this.options.ecmaVersion >= 9 &&
            (this.inAsync ||
              (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
            this.eatContextual('await')
              ? this.lastTokStart
              : -1;
          if (
            (this.labels.push(W),
            this.enterLexicalScope(),
            this.expect(S.parenL),
            this.type === S.semi)
          )
            return e > -1 && this.unexpected(e), this.parseFor(t, null);
          var n = this.isLet();
          if (this.type === S._var || this.type === S._const || n) {
            var r = this.startNode(),
              i = n ? 'let' : this.value;
            return (
              this.next(),
              this.parseVar(r, !0, i),
              this.finishNode(r, 'VariableDeclaration'),
              !(
                this.type === S._in ||
                (this.options.ecmaVersion >= 6 && this.isContextual('of'))
              ) ||
              1 !== r.declarations.length ||
              ('var' !== i && r.declarations[0].init)
                ? (e > -1 && this.unexpected(e), this.parseFor(t, r))
                : (this.options.ecmaVersion >= 9 &&
                    (this.type === S._in
                      ? e > -1 && this.unexpected(e)
                      : (t.await = e > -1)),
                  this.parseForIn(t, r))
            );
          }
          var a = new H(),
            s = this.parseExpression(!0, a);
          return this.type === S._in ||
            (this.options.ecmaVersion >= 6 && this.isContextual('of'))
            ? (this.options.ecmaVersion >= 9 &&
                (this.type === S._in
                  ? e > -1 && this.unexpected(e)
                  : (t.await = e > -1)),
              this.toAssignable(s, !1, a),
              this.checkLVal(s),
              this.parseForIn(t, s))
            : (this.checkExpressionErrors(a, !0),
              e > -1 && this.unexpected(e),
              this.parseFor(t, s));
        }),
        (G.parseFunctionStatement = function(t, e) {
          return this.next(), this.parseFunction(t, !0, !1, e);
        }),
        (G.parseIfStatement = function(t) {
          return (
            this.next(),
            (t.test = this.parseParenExpression()),
            (t.consequent = this.parseStatement(
              !this.strict && this.type === S._function
            )),
            (t.alternate = this.eat(S._else)
              ? this.parseStatement(!this.strict && this.type === S._function)
              : null),
            this.finishNode(t, 'IfStatement')
          );
        }),
        (G.parseReturnStatement = function(t) {
          return (
            this.inFunction ||
              this.options.allowReturnOutsideFunction ||
              this.raise(this.start, "'return' outside of function"),
            this.next(),
            this.eat(S.semi) || this.insertSemicolon()
              ? (t.argument = null)
              : ((t.argument = this.parseExpression()), this.semicolon()),
            this.finishNode(t, 'ReturnStatement')
          );
        }),
        (G.parseSwitchStatement = function(t) {
          var e;
          this.next(),
            (t.discriminant = this.parseParenExpression()),
            (t.cases = []),
            this.expect(S.braceL),
            this.labels.push(K),
            this.enterLexicalScope();
          for (var n = !1; this.type !== S.braceR; )
            if (this.type === S._case || this.type === S._default) {
              var r = this.type === S._case;
              e && this.finishNode(e, 'SwitchCase'),
                t.cases.push((e = this.startNode())),
                (e.consequent = []),
                this.next(),
                r
                  ? (e.test = this.parseExpression())
                  : (n &&
                      this.raiseRecoverable(
                        this.lastTokStart,
                        'Multiple default clauses'
                      ),
                    (n = !0),
                    (e.test = null)),
                this.expect(S.colon);
            } else
              e || this.unexpected(),
                e.consequent.push(this.parseStatement(!0));
          return (
            this.exitLexicalScope(),
            e && this.finishNode(e, 'SwitchCase'),
            this.next(),
            this.labels.pop(),
            this.finishNode(t, 'SwitchStatement')
          );
        }),
        (G.parseThrowStatement = function(t) {
          return (
            this.next(),
            w.test(this.input.slice(this.lastTokEnd, this.start)) &&
              this.raise(this.lastTokEnd, 'Illegal newline after throw'),
            (t.argument = this.parseExpression()),
            this.semicolon(),
            this.finishNode(t, 'ThrowStatement')
          );
        });
      var q = [];
      (G.parseTryStatement = function(t) {
        if (
          (this.next(),
          (t.block = this.parseBlock()),
          (t.handler = null),
          this.type === S._catch)
        ) {
          var e = this.startNode();
          this.next(),
            this.eat(S.parenL)
              ? ((e.param = this.parseBindingAtom()),
                this.enterLexicalScope(),
                this.checkLVal(e.param, 'let'),
                this.expect(S.parenR))
              : (this.options.ecmaVersion < 10 && this.unexpected(),
                (e.param = null),
                this.enterLexicalScope()),
            (e.body = this.parseBlock(!1)),
            this.exitLexicalScope(),
            (t.handler = this.finishNode(e, 'CatchClause'));
        }
        return (
          (t.finalizer = this.eat(S._finally) ? this.parseBlock() : null),
          t.handler ||
            t.finalizer ||
            this.raise(t.start, 'Missing catch or finally clause'),
          this.finishNode(t, 'TryStatement')
        );
      }),
        (G.parseVarStatement = function(t, e) {
          return (
            this.next(),
            this.parseVar(t, !1, e),
            this.semicolon(),
            this.finishNode(t, 'VariableDeclaration')
          );
        }),
        (G.parseWhileStatement = function(t) {
          return (
            this.next(),
            (t.test = this.parseParenExpression()),
            this.labels.push(W),
            (t.body = this.parseStatement(!1)),
            this.labels.pop(),
            this.finishNode(t, 'WhileStatement')
          );
        }),
        (G.parseWithStatement = function(t) {
          return (
            this.strict && this.raise(this.start, "'with' in strict mode"),
            this.next(),
            (t.object = this.parseParenExpression()),
            (t.body = this.parseStatement(!1)),
            this.finishNode(t, 'WithStatement')
          );
        }),
        (G.parseEmptyStatement = function(t) {
          return this.next(), this.finishNode(t, 'EmptyStatement');
        }),
        (G.parseLabeledStatement = function(t, e, n) {
          for (var r = 0, i = this.labels; r < i.length; r += 1)
            i[r].name === e &&
              this.raise(n.start, "Label '" + e + "' is already declared");
          for (
            var a = this.type.isLoop
                ? 'loop'
                : this.type === S._switch
                  ? 'switch'
                  : null,
              s = this.labels.length - 1;
            s >= 0;
            s--
          ) {
            var o = this.labels[s];
            if (o.statementStart !== t.start) break;
            (o.statementStart = this.start), (o.kind = a);
          }
          return (
            this.labels.push({ name: e, kind: a, statementStart: this.start }),
            (t.body = this.parseStatement(!0)),
            ('ClassDeclaration' === t.body.type ||
              ('VariableDeclaration' === t.body.type &&
                'var' !== t.body.kind) ||
              ('FunctionDeclaration' === t.body.type &&
                (this.strict || t.body.generator || t.body.async))) &&
              this.raiseRecoverable(
                t.body.start,
                'Invalid labeled declaration'
              ),
            this.labels.pop(),
            (t.label = n),
            this.finishNode(t, 'LabeledStatement')
          );
        }),
        (G.parseExpressionStatement = function(t, e) {
          return (
            (t.expression = e),
            this.semicolon(),
            this.finishNode(t, 'ExpressionStatement')
          );
        }),
        (G.parseBlock = function(t) {
          void 0 === t && (t = !0);
          var e = this.startNode();
          for (
            e.body = [], this.expect(S.braceL), t && this.enterLexicalScope();
            !this.eat(S.braceR);

          ) {
            var n = this.parseStatement(!0);
            e.body.push(n);
          }
          return (
            t && this.exitLexicalScope(), this.finishNode(e, 'BlockStatement')
          );
        }),
        (G.parseFor = function(t, e) {
          return (
            (t.init = e),
            this.expect(S.semi),
            (t.test = this.type === S.semi ? null : this.parseExpression()),
            this.expect(S.semi),
            (t.update = this.type === S.parenR ? null : this.parseExpression()),
            this.expect(S.parenR),
            this.exitLexicalScope(),
            (t.body = this.parseStatement(!1)),
            this.labels.pop(),
            this.finishNode(t, 'ForStatement')
          );
        }),
        (G.parseForIn = function(t, e) {
          var n = this.type === S._in ? 'ForInStatement' : 'ForOfStatement';
          return (
            this.next(),
            'ForInStatement' === n &&
              ('AssignmentPattern' === e.type ||
                ('VariableDeclaration' === e.type &&
                  null != e.declarations[0].init &&
                  (this.strict ||
                    'Identifier' !== e.declarations[0].id.type))) &&
              this.raise(e.start, 'Invalid assignment in for-in loop head'),
            (t.left = e),
            (t.right =
              'ForInStatement' === n
                ? this.parseExpression()
                : this.parseMaybeAssign()),
            this.expect(S.parenR),
            this.exitLexicalScope(),
            (t.body = this.parseStatement(!1)),
            this.labels.pop(),
            this.finishNode(t, n)
          );
        }),
        (G.parseVar = function(t, e, n) {
          for (t.declarations = [], t.kind = n; ; ) {
            var r = this.startNode();
            if (
              (this.parseVarId(r, n),
              this.eat(S.eq)
                ? (r.init = this.parseMaybeAssign(e))
                : 'const' !== n ||
                  this.type === S._in ||
                  (this.options.ecmaVersion >= 6 && this.isContextual('of'))
                  ? 'Identifier' === r.id.type ||
                    (e && (this.type === S._in || this.isContextual('of')))
                    ? (r.init = null)
                    : this.raise(
                        this.lastTokEnd,
                        'Complex binding patterns require an initialization value'
                      )
                  : this.unexpected(),
              t.declarations.push(this.finishNode(r, 'VariableDeclarator')),
              !this.eat(S.comma))
            )
              break;
          }
          return t;
        }),
        (G.parseVarId = function(t, e) {
          (t.id = this.parseBindingAtom(e)), this.checkLVal(t.id, e, !1);
        }),
        (G.parseFunction = function(t, e, n, r) {
          this.initFunction(t),
            (this.options.ecmaVersion >= 9 ||
              (this.options.ecmaVersion >= 6 && !r)) &&
              (t.generator = this.eat(S.star)),
            this.options.ecmaVersion >= 8 && (t.async = !!r),
            e &&
              ((t.id =
                'nullableID' === e && this.type !== S.name
                  ? null
                  : this.parseIdent()),
              t.id &&
                this.checkLVal(
                  t.id,
                  this.inModule && !this.inFunction ? 'let' : 'var'
                ));
          var i = this.inGenerator,
            a = this.inAsync,
            s = this.yieldPos,
            o = this.awaitPos,
            p = this.inFunction;
          return (
            (this.inGenerator = t.generator),
            (this.inAsync = t.async),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.inFunction = !0),
            this.enterFunctionScope(),
            e || (t.id = this.type === S.name ? this.parseIdent() : null),
            this.parseFunctionParams(t),
            this.parseFunctionBody(t, n),
            (this.inGenerator = i),
            (this.inAsync = a),
            (this.yieldPos = s),
            (this.awaitPos = o),
            (this.inFunction = p),
            this.finishNode(t, e ? 'FunctionDeclaration' : 'FunctionExpression')
          );
        }),
        (G.parseFunctionParams = function(t) {
          this.expect(S.parenL),
            (t.params = this.parseBindingList(
              S.parenR,
              !1,
              this.options.ecmaVersion >= 8
            )),
            this.checkYieldAwaitInDefaultParams();
        }),
        (G.parseClass = function(t, e) {
          this.next(), this.parseClassId(t, e), this.parseClassSuper(t);
          var n = this.startNode(),
            r = !1;
          for (n.body = [], this.expect(S.braceL); !this.eat(S.braceR); ) {
            var i = this.parseClassMember(n);
            i &&
              'MethodDefinition' === i.type &&
              'constructor' === i.kind &&
              (r &&
                this.raise(i.start, 'Duplicate constructor in the same class'),
              (r = !0));
          }
          return (
            (t.body = this.finishNode(n, 'ClassBody')),
            this.finishNode(t, e ? 'ClassDeclaration' : 'ClassExpression')
          );
        }),
        (G.parseClassMember = function(t) {
          var e = this;
          if (this.eat(S.semi)) return null;
          var n = this.startNode(),
            r = function(t, r) {
              void 0 === r && (r = !1);
              var i = e.start,
                a = e.startLoc;
              return !(
                !e.eatContextual(t) ||
                ((e.type === S.parenL || (r && e.canInsertSemicolon())) &&
                  (n.key && e.unexpected(),
                  (n.computed = !1),
                  (n.key = e.startNodeAt(i, a)),
                  (n.key.name = t),
                  e.finishNode(n.key, 'Identifier'),
                  1))
              );
            };
          (n.kind = 'method'), (n.static = r('static'));
          var i = this.eat(S.star),
            a = !1;
          i ||
            (this.options.ecmaVersion >= 8 && r('async', !0)
              ? ((a = !0),
                (i = this.options.ecmaVersion >= 9 && this.eat(S.star)))
              : r('get')
                ? (n.kind = 'get')
                : r('set') && (n.kind = 'set')),
            n.key || this.parsePropertyName(n);
          var s = n.key;
          return (
            n.computed ||
            n.static ||
            !(
              ('Identifier' === s.type && 'constructor' === s.name) ||
              ('Literal' === s.type && 'constructor' === s.value)
            )
              ? n.static &&
                'Identifier' === s.type &&
                'prototype' === s.name &&
                this.raise(
                  s.start,
                  'Classes may not have a static property named prototype'
                )
              : ('method' !== n.kind &&
                  this.raise(
                    s.start,
                    "Constructor can't have get/set modifier"
                  ),
                i && this.raise(s.start, "Constructor can't be a generator"),
                a &&
                  this.raise(s.start, "Constructor can't be an async method"),
                (n.kind = 'constructor')),
            this.parseClassMethod(t, n, i, a),
            'get' === n.kind &&
              0 !== n.value.params.length &&
              this.raiseRecoverable(
                n.value.start,
                'getter should have no params'
              ),
            'set' === n.kind &&
              1 !== n.value.params.length &&
              this.raiseRecoverable(
                n.value.start,
                'setter should have exactly one param'
              ),
            'set' === n.kind &&
              'RestElement' === n.value.params[0].type &&
              this.raiseRecoverable(
                n.value.params[0].start,
                'Setter cannot use rest params'
              ),
            n
          );
        }),
        (G.parseClassMethod = function(t, e, n, r) {
          (e.value = this.parseMethod(n, r)),
            t.body.push(this.finishNode(e, 'MethodDefinition'));
        }),
        (G.parseClassId = function(t, e) {
          t.id =
            this.type === S.name
              ? this.parseIdent()
              : !0 === e
                ? this.unexpected()
                : null;
        }),
        (G.parseClassSuper = function(t) {
          t.superClass = this.eat(S._extends)
            ? this.parseExprSubscripts()
            : null;
        }),
        (G.parseExport = function(t, e) {
          if ((this.next(), this.eat(S.star)))
            return (
              this.expectContextual('from'),
              this.type !== S.string && this.unexpected(),
              (t.source = this.parseExprAtom()),
              this.semicolon(),
              this.finishNode(t, 'ExportAllDeclaration')
            );
          if (this.eat(S._default)) {
            var n;
            if (
              (this.checkExport(e, 'default', this.lastTokStart),
              this.type === S._function || (n = this.isAsyncFunction()))
            ) {
              var r = this.startNode();
              this.next(),
                n && this.next(),
                (t.declaration = this.parseFunction(r, 'nullableID', !1, n));
            } else if (this.type === S._class) {
              var i = this.startNode();
              t.declaration = this.parseClass(i, 'nullableID');
            } else (t.declaration = this.parseMaybeAssign()), this.semicolon();
            return this.finishNode(t, 'ExportDefaultDeclaration');
          }
          if (this.shouldParseExportStatement())
            (t.declaration = this.parseStatement(!0)),
              'VariableDeclaration' === t.declaration.type
                ? this.checkVariableExport(e, t.declaration.declarations)
                : this.checkExport(
                    e,
                    t.declaration.id.name,
                    t.declaration.id.start
                  ),
              (t.specifiers = []),
              (t.source = null);
          else {
            if (
              ((t.declaration = null),
              (t.specifiers = this.parseExportSpecifiers(e)),
              this.eatContextual('from'))
            )
              this.type !== S.string && this.unexpected(),
                (t.source = this.parseExprAtom());
            else {
              for (var a = 0, s = t.specifiers; a < s.length; a += 1) {
                var o = s[a];
                this.checkUnreserved(o.local);
              }
              t.source = null;
            }
            this.semicolon();
          }
          return this.finishNode(t, 'ExportNamedDeclaration');
        }),
        (G.checkExport = function(t, e, n) {
          t &&
            (O(t, e) &&
              this.raiseRecoverable(n, "Duplicate export '" + e + "'"),
            (t[e] = !0));
        }),
        (G.checkPatternExport = function(t, e) {
          var n = e.type;
          if ('Identifier' === n) this.checkExport(t, e.name, e.start);
          else if ('ObjectPattern' === n)
            for (var r = 0, i = e.properties; r < i.length; r += 1) {
              var a = i[r];
              this.checkPatternExport(t, a);
            }
          else if ('ArrayPattern' === n)
            for (var s = 0, o = e.elements; s < o.length; s += 1) {
              var p = o[s];
              p && this.checkPatternExport(t, p);
            }
          else
            'Property' === n
              ? this.checkPatternExport(t, e.value)
              : 'AssignmentPattern' === n
                ? this.checkPatternExport(t, e.left)
                : 'RestElement' === n
                  ? this.checkPatternExport(t, e.argument)
                  : 'ParenthesizedExpression' === n &&
                    this.checkPatternExport(t, e.expression);
        }),
        (G.checkVariableExport = function(t, e) {
          if (t)
            for (var n = 0, r = e; n < r.length; n += 1) {
              var i = r[n];
              this.checkPatternExport(t, i.id);
            }
        }),
        (G.shouldParseExportStatement = function() {
          return (
            'var' === this.type.keyword ||
            'const' === this.type.keyword ||
            'class' === this.type.keyword ||
            'function' === this.type.keyword ||
            this.isLet() ||
            this.isAsyncFunction()
          );
        }),
        (G.parseExportSpecifiers = function(t) {
          var e = [],
            n = !0;
          for (this.expect(S.braceL); !this.eat(S.braceR); ) {
            if (n) n = !1;
            else if ((this.expect(S.comma), this.afterTrailingComma(S.braceR)))
              break;
            var r = this.startNode();
            (r.local = this.parseIdent(!0)),
              (r.exported = this.eatContextual('as')
                ? this.parseIdent(!0)
                : r.local),
              this.checkExport(t, r.exported.name, r.exported.start),
              e.push(this.finishNode(r, 'ExportSpecifier'));
          }
          return e;
        }),
        (G.parseImport = function(t) {
          return (
            this.next(),
            this.type === S.string
              ? ((t.specifiers = q), (t.source = this.parseExprAtom()))
              : ((t.specifiers = this.parseImportSpecifiers()),
                this.expectContextual('from'),
                (t.source =
                  this.type === S.string
                    ? this.parseExprAtom()
                    : this.unexpected())),
            this.semicolon(),
            this.finishNode(t, 'ImportDeclaration')
          );
        }),
        (G.parseImportSpecifiers = function() {
          var t = [],
            e = !0;
          if (this.type === S.name) {
            var n = this.startNode();
            if (
              ((n.local = this.parseIdent()),
              this.checkLVal(n.local, 'let'),
              t.push(this.finishNode(n, 'ImportDefaultSpecifier')),
              !this.eat(S.comma))
            )
              return t;
          }
          if (this.type === S.star) {
            var r = this.startNode();
            return (
              this.next(),
              this.expectContextual('as'),
              (r.local = this.parseIdent()),
              this.checkLVal(r.local, 'let'),
              t.push(this.finishNode(r, 'ImportNamespaceSpecifier')),
              t
            );
          }
          for (this.expect(S.braceL); !this.eat(S.braceR); ) {
            if (e) e = !1;
            else if ((this.expect(S.comma), this.afterTrailingComma(S.braceR)))
              break;
            var i = this.startNode();
            (i.imported = this.parseIdent(!0)),
              this.eatContextual('as')
                ? (i.local = this.parseIdent())
                : (this.checkUnreserved(i.imported), (i.local = i.imported)),
              this.checkLVal(i.local, 'let'),
              t.push(this.finishNode(i, 'ImportSpecifier'));
          }
          return t;
        }),
        (G.adaptDirectivePrologue = function(t) {
          for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
            t[e].directive = t[e].expression.raw.slice(1, -1);
        }),
        (G.isDirectiveCandidate = function(t) {
          return (
            'ExpressionStatement' === t.type &&
            'Literal' === t.expression.type &&
            'string' == typeof t.expression.value &&
            ('"' === this.input[t.start] || "'" === this.input[t.start])
          );
        });
      var z = U.prototype;
      (z.toAssignable = function(t, e, n) {
        if (this.options.ecmaVersion >= 6 && t)
          switch (t.type) {
            case 'Identifier':
              this.inAsync &&
                'await' === t.name &&
                this.raise(
                  t.start,
                  "Can not use 'await' as identifier inside an async function"
                );
              break;
            case 'ObjectPattern':
            case 'ArrayPattern':
            case 'RestElement':
              break;
            case 'ObjectExpression':
              (t.type = 'ObjectPattern'), n && this.checkPatternErrors(n, !0);
              for (var r = 0, i = t.properties; r < i.length; r += 1) {
                var a = i[r];
                this.toAssignable(a, e),
                  'RestElement' !== a.type ||
                    ('ArrayPattern' !== a.argument.type &&
                      'ObjectPattern' !== a.argument.type) ||
                    this.raise(a.argument.start, 'Unexpected token');
              }
              break;
            case 'Property':
              'init' !== t.kind &&
                this.raise(
                  t.key.start,
                  "Object pattern can't contain getter or setter"
                ),
                this.toAssignable(t.value, e);
              break;
            case 'ArrayExpression':
              (t.type = 'ArrayPattern'),
                n && this.checkPatternErrors(n, !0),
                this.toAssignableList(t.elements, e);
              break;
            case 'SpreadElement':
              (t.type = 'RestElement'),
                this.toAssignable(t.argument, e),
                'AssignmentPattern' === t.argument.type &&
                  this.raise(
                    t.argument.start,
                    'Rest elements cannot have a default value'
                  );
              break;
            case 'AssignmentExpression':
              '=' !== t.operator &&
                this.raise(
                  t.left.end,
                  "Only '=' operator can be used for specifying default value."
                ),
                (t.type = 'AssignmentPattern'),
                delete t.operator,
                this.toAssignable(t.left, e);
            case 'AssignmentPattern':
              break;
            case 'ParenthesizedExpression':
              this.toAssignable(t.expression, e);
              break;
            case 'MemberExpression':
              if (!e) break;
            default:
              this.raise(t.start, 'Assigning to rvalue');
          }
        else n && this.checkPatternErrors(n, !0);
        return t;
      }),
        (z.toAssignableList = function(t, e) {
          for (var n = t.length, r = 0; r < n; r++) {
            var i = t[r];
            i && this.toAssignable(i, e);
          }
          if (n) {
            var a = t[n - 1];
            6 === this.options.ecmaVersion &&
              e &&
              a &&
              'RestElement' === a.type &&
              'Identifier' !== a.argument.type &&
              this.unexpected(a.argument.start);
          }
          return t;
        }),
        (z.parseSpread = function(t) {
          var e = this.startNode();
          return (
            this.next(),
            (e.argument = this.parseMaybeAssign(!1, t)),
            this.finishNode(e, 'SpreadElement')
          );
        }),
        (z.parseRestBinding = function() {
          var t = this.startNode();
          return (
            this.next(),
            6 === this.options.ecmaVersion &&
              this.type !== S.name &&
              this.unexpected(),
            (t.argument = this.parseBindingAtom()),
            this.finishNode(t, 'RestElement')
          );
        }),
        (z.parseBindingAtom = function() {
          if (this.options.ecmaVersion >= 6)
            switch (this.type) {
              case S.bracketL:
                var t = this.startNode();
                return (
                  this.next(),
                  (t.elements = this.parseBindingList(S.bracketR, !0, !0)),
                  this.finishNode(t, 'ArrayPattern')
                );
              case S.braceL:
                return this.parseObj(!0);
            }
          return this.parseIdent();
        }),
        (z.parseBindingList = function(t, e, n) {
          for (var r = [], i = !0; !this.eat(t); )
            if (
              (i ? (i = !1) : this.expect(S.comma), e && this.type === S.comma)
            )
              r.push(null);
            else {
              if (n && this.afterTrailingComma(t)) break;
              if (this.type === S.ellipsis) {
                var a = this.parseRestBinding();
                this.parseBindingListItem(a),
                  r.push(a),
                  this.type === S.comma &&
                    this.raise(
                      this.start,
                      'Comma is not permitted after the rest element'
                    ),
                  this.expect(t);
                break;
              }
              var s = this.parseMaybeDefault(this.start, this.startLoc);
              this.parseBindingListItem(s), r.push(s);
            }
          return r;
        }),
        (z.parseBindingListItem = function(t) {
          return t;
        }),
        (z.parseMaybeDefault = function(t, e, n) {
          if (
            ((n = n || this.parseBindingAtom()),
            this.options.ecmaVersion < 6 || !this.eat(S.eq))
          )
            return n;
          var r = this.startNodeAt(t, e);
          return (
            (r.left = n),
            (r.right = this.parseMaybeAssign()),
            this.finishNode(r, 'AssignmentPattern')
          );
        }),
        (z.checkLVal = function(t, e, n) {
          switch (t.type) {
            case 'Identifier':
              this.strict &&
                this.reservedWordsStrictBind.test(t.name) &&
                this.raiseRecoverable(
                  t.start,
                  (e ? 'Binding ' : 'Assigning to ') +
                    t.name +
                    ' in strict mode'
                ),
                n &&
                  (O(n, t.name) &&
                    this.raiseRecoverable(t.start, 'Argument name clash'),
                  (n[t.name] = !0)),
                e &&
                  'none' !== e &&
                  ((('var' === e && !this.canDeclareVarName(t.name)) ||
                    ('var' !== e && !this.canDeclareLexicalName(t.name))) &&
                    this.raiseRecoverable(
                      t.start,
                      "Identifier '" + t.name + "' has already been declared"
                    ),
                  'var' === e
                    ? this.declareVarName(t.name)
                    : this.declareLexicalName(t.name));
              break;
            case 'MemberExpression':
              e && this.raiseRecoverable(t.start, 'Binding member expression');
              break;
            case 'ObjectPattern':
              for (var r = 0, i = t.properties; r < i.length; r += 1) {
                var a = i[r];
                this.checkLVal(a, e, n);
              }
              break;
            case 'Property':
              this.checkLVal(t.value, e, n);
              break;
            case 'ArrayPattern':
              for (var s = 0, o = t.elements; s < o.length; s += 1) {
                var p = o[s];
                p && this.checkLVal(p, e, n);
              }
              break;
            case 'AssignmentPattern':
              this.checkLVal(t.left, e, n);
              break;
            case 'RestElement':
              this.checkLVal(t.argument, e, n);
              break;
            case 'ParenthesizedExpression':
              this.checkLVal(t.expression, e, n);
              break;
            default:
              this.raise(t.start, (e ? 'Binding' : 'Assigning to') + ' rvalue');
          }
        });
      var Y = U.prototype;
      (Y.checkPropClash = function(t, e, n) {
        if (
          !(
            (this.options.ecmaVersion >= 9 && 'SpreadElement' === t.type) ||
            (this.options.ecmaVersion >= 6 &&
              (t.computed || t.method || t.shorthand))
          )
        ) {
          var r,
            i = t.key;
          switch (i.type) {
            case 'Identifier':
              r = i.name;
              break;
            case 'Literal':
              r = String(i.value);
              break;
            default:
              return;
          }
          var a = t.kind;
          if (this.options.ecmaVersion >= 6)
            '__proto__' === r &&
              'init' === a &&
              (e.proto &&
                (n && n.doubleProto < 0
                  ? (n.doubleProto = i.start)
                  : this.raiseRecoverable(
                      i.start,
                      'Redefinition of __proto__ property'
                    )),
              (e.proto = !0));
          else {
            var s = e[(r = '$' + r)];
            s
              ? ('init' === a
                  ? (this.strict && s.init) || s.get || s.set
                  : s.init || s[a]) &&
                this.raiseRecoverable(i.start, 'Redefinition of property')
              : (s = e[r] = { init: !1, get: !1, set: !1 }),
              (s[a] = !0);
          }
        }
      }),
        (Y.parseExpression = function(t, e) {
          var n = this.start,
            r = this.startLoc,
            i = this.parseMaybeAssign(t, e);
          if (this.type === S.comma) {
            var a = this.startNodeAt(n, r);
            for (a.expressions = [i]; this.eat(S.comma); )
              a.expressions.push(this.parseMaybeAssign(t, e));
            return this.finishNode(a, 'SequenceExpression');
          }
          return i;
        }),
        (Y.parseMaybeAssign = function(t, e, n) {
          if (this.inGenerator && this.isContextual('yield'))
            return this.parseYield();
          var r = !1,
            i = -1,
            a = -1;
          e
            ? ((i = e.parenthesizedAssign),
              (a = e.trailingComma),
              (e.parenthesizedAssign = e.trailingComma = -1))
            : ((e = new H()), (r = !0));
          var s = this.start,
            o = this.startLoc;
          (this.type !== S.parenL && this.type !== S.name) ||
            (this.potentialArrowAt = this.start);
          var p = this.parseMaybeConditional(t, e);
          if ((n && (p = n.call(this, p, s, o)), this.type.isAssign)) {
            var h = this.startNodeAt(s, o);
            return (
              (h.operator = this.value),
              (h.left = this.type === S.eq ? this.toAssignable(p, !1, e) : p),
              r || H.call(e),
              (e.shorthandAssign = -1),
              this.checkLVal(p),
              this.next(),
              (h.right = this.parseMaybeAssign(t)),
              this.finishNode(h, 'AssignmentExpression')
            );
          }
          return (
            r && this.checkExpressionErrors(e, !0),
            i > -1 && (e.parenthesizedAssign = i),
            a > -1 && (e.trailingComma = a),
            p
          );
        }),
        (Y.parseMaybeConditional = function(t, e) {
          var n = this.start,
            r = this.startLoc,
            i = this.parseExprOps(t, e);
          if (this.checkExpressionErrors(e)) return i;
          if (this.eat(S.question)) {
            var a = this.startNodeAt(n, r);
            return (
              (a.test = i),
              (a.consequent = this.parseMaybeAssign()),
              this.expect(S.colon),
              (a.alternate = this.parseMaybeAssign(t)),
              this.finishNode(a, 'ConditionalExpression')
            );
          }
          return i;
        }),
        (Y.parseExprOps = function(t, e) {
          var n = this.start,
            r = this.startLoc,
            i = this.parseMaybeUnary(e, !1);
          return this.checkExpressionErrors(e)
            ? i
            : i.start === n && 'ArrowFunctionExpression' === i.type
              ? i
              : this.parseExprOp(i, n, r, -1, t);
        }),
        (Y.parseExprOp = function(t, e, n, r, i) {
          var a = this.type.binop;
          if (null != a && (!i || this.type !== S._in) && a > r) {
            var s = this.type === S.logicalOR || this.type === S.logicalAND,
              o = this.value;
            this.next();
            var p = this.start,
              h = this.startLoc,
              c = this.parseExprOp(this.parseMaybeUnary(null, !1), p, h, a, i),
              u = this.buildBinary(e, n, t, c, o, s);
            return this.parseExprOp(u, e, n, r, i);
          }
          return t;
        }),
        (Y.buildBinary = function(t, e, n, r, i, a) {
          var s = this.startNodeAt(t, e);
          return (
            (s.left = n),
            (s.operator = i),
            (s.right = r),
            this.finishNode(s, a ? 'LogicalExpression' : 'BinaryExpression')
          );
        }),
        (Y.parseMaybeUnary = function(t, e) {
          var n,
            r = this.start,
            i = this.startLoc;
          if (
            this.isContextual('await') &&
            (this.inAsync ||
              (!this.inFunction && this.options.allowAwaitOutsideFunction))
          )
            (n = this.parseAwait()), (e = !0);
          else if (this.type.prefix) {
            var a = this.startNode(),
              s = this.type === S.incDec;
            (a.operator = this.value),
              (a.prefix = !0),
              this.next(),
              (a.argument = this.parseMaybeUnary(null, !0)),
              this.checkExpressionErrors(t, !0),
              s
                ? this.checkLVal(a.argument)
                : this.strict &&
                  'delete' === a.operator &&
                  'Identifier' === a.argument.type
                  ? this.raiseRecoverable(
                      a.start,
                      'Deleting local variable in strict mode'
                    )
                  : (e = !0),
              (n = this.finishNode(
                a,
                s ? 'UpdateExpression' : 'UnaryExpression'
              ));
          } else {
            if (
              ((n = this.parseExprSubscripts(t)), this.checkExpressionErrors(t))
            )
              return n;
            for (; this.type.postfix && !this.canInsertSemicolon(); ) {
              var o = this.startNodeAt(r, i);
              (o.operator = this.value),
                (o.prefix = !1),
                (o.argument = n),
                this.checkLVal(n),
                this.next(),
                (n = this.finishNode(o, 'UpdateExpression'));
            }
          }
          return !e && this.eat(S.starstar)
            ? this.buildBinary(
                r,
                i,
                n,
                this.parseMaybeUnary(null, !1),
                '**',
                !1
              )
            : n;
        }),
        (Y.parseExprSubscripts = function(t) {
          var e = this.start,
            n = this.startLoc,
            r = this.parseExprAtom(t),
            i =
              'ArrowFunctionExpression' === r.type &&
              ')' !== this.input.slice(this.lastTokStart, this.lastTokEnd);
          if (this.checkExpressionErrors(t) || i) return r;
          var a = this.parseSubscripts(r, e, n);
          return (
            t &&
              'MemberExpression' === a.type &&
              (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1),
              t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1)),
            a
          );
        }),
        (Y.parseSubscripts = function(t, e, n, r) {
          for (
            var i =
                this.options.ecmaVersion >= 8 &&
                'Identifier' === t.type &&
                'async' === t.name &&
                this.lastTokEnd === t.end &&
                !this.canInsertSemicolon() &&
                'async' === this.input.slice(t.start, t.end),
              a = void 0;
            ;

          )
            if ((a = this.eat(S.bracketL)) || this.eat(S.dot)) {
              var s = this.startNodeAt(e, n);
              (s.object = t),
                (s.property = a ? this.parseExpression() : this.parseIdent(!0)),
                (s.computed = !!a),
                a && this.expect(S.bracketR),
                (t = this.finishNode(s, 'MemberExpression'));
            } else if (!r && this.eat(S.parenL)) {
              var o = new H(),
                p = this.yieldPos,
                h = this.awaitPos;
              (this.yieldPos = 0), (this.awaitPos = 0);
              var c = this.parseExprList(
                S.parenR,
                this.options.ecmaVersion >= 8,
                !1,
                o
              );
              if (i && !this.canInsertSemicolon() && this.eat(S.arrow))
                return (
                  this.checkPatternErrors(o, !1),
                  this.checkYieldAwaitInDefaultParams(),
                  (this.yieldPos = p),
                  (this.awaitPos = h),
                  this.parseArrowExpression(this.startNodeAt(e, n), c, !0)
                );
              this.checkExpressionErrors(o, !0),
                (this.yieldPos = p || this.yieldPos),
                (this.awaitPos = h || this.awaitPos);
              var u = this.startNodeAt(e, n);
              (u.callee = t),
                (u.arguments = c),
                (t = this.finishNode(u, 'CallExpression'));
            } else {
              if (this.type !== S.backQuote) return t;
              var l = this.startNodeAt(e, n);
              (l.tag = t),
                (l.quasi = this.parseTemplate({ isTagged: !0 })),
                (t = this.finishNode(l, 'TaggedTemplateExpression'));
            }
        }),
        (Y.parseExprAtom = function(t) {
          var e,
            n = this.potentialArrowAt === this.start;
          switch (this.type) {
            case S._super:
              return (
                this.inFunction ||
                  this.raise(
                    this.start,
                    "'super' outside of function or class"
                  ),
                (e = this.startNode()),
                this.next(),
                this.type !== S.dot &&
                  this.type !== S.bracketL &&
                  this.type !== S.parenL &&
                  this.unexpected(),
                this.finishNode(e, 'Super')
              );
            case S._this:
              return (
                (e = this.startNode()),
                this.next(),
                this.finishNode(e, 'ThisExpression')
              );
            case S.name:
              var r = this.start,
                i = this.startLoc,
                a = this.containsEsc,
                s = this.parseIdent(this.type !== S.name);
              if (
                this.options.ecmaVersion >= 8 &&
                !a &&
                'async' === s.name &&
                !this.canInsertSemicolon() &&
                this.eat(S._function)
              )
                return this.parseFunction(this.startNodeAt(r, i), !1, !1, !0);
              if (n && !this.canInsertSemicolon()) {
                if (this.eat(S.arrow))
                  return this.parseArrowExpression(
                    this.startNodeAt(r, i),
                    [s],
                    !1
                  );
                if (
                  this.options.ecmaVersion >= 8 &&
                  'async' === s.name &&
                  this.type === S.name &&
                  !a
                )
                  return (
                    (s = this.parseIdent()),
                    (!this.canInsertSemicolon() && this.eat(S.arrow)) ||
                      this.unexpected(),
                    this.parseArrowExpression(this.startNodeAt(r, i), [s], !0)
                  );
              }
              return s;
            case S.regexp:
              var o = this.value;
              return (
                ((e = this.parseLiteral(o.value)).regex = {
                  pattern: o.pattern,
                  flags: o.flags,
                }),
                e
              );
            case S.num:
            case S.string:
              return this.parseLiteral(this.value);
            case S._null:
            case S._true:
            case S._false:
              return (
                ((e = this.startNode()).value =
                  this.type === S._null ? null : this.type === S._true),
                (e.raw = this.type.keyword),
                this.next(),
                this.finishNode(e, 'Literal')
              );
            case S.parenL:
              var p = this.start,
                h = this.parseParenAndDistinguishExpression(n);
              return (
                t &&
                  (t.parenthesizedAssign < 0 &&
                    !this.isSimpleAssignTarget(h) &&
                    (t.parenthesizedAssign = p),
                  t.parenthesizedBind < 0 && (t.parenthesizedBind = p)),
                h
              );
            case S.bracketL:
              return (
                (e = this.startNode()),
                this.next(),
                (e.elements = this.parseExprList(S.bracketR, !0, !0, t)),
                this.finishNode(e, 'ArrayExpression')
              );
            case S.braceL:
              return this.parseObj(!1, t);
            case S._function:
              return (
                (e = this.startNode()), this.next(), this.parseFunction(e, !1)
              );
            case S._class:
              return this.parseClass(this.startNode(), !1);
            case S._new:
              return this.parseNew();
            case S.backQuote:
              return this.parseTemplate();
            default:
              this.unexpected();
          }
        }),
        (Y.parseLiteral = function(t) {
          var e = this.startNode();
          return (
            (e.value = t),
            (e.raw = this.input.slice(this.start, this.end)),
            this.next(),
            this.finishNode(e, 'Literal')
          );
        }),
        (Y.parseParenExpression = function() {
          this.expect(S.parenL);
          var t = this.parseExpression();
          return this.expect(S.parenR), t;
        }),
        (Y.parseParenAndDistinguishExpression = function(t) {
          var e,
            n = this.start,
            r = this.startLoc,
            i = this.options.ecmaVersion >= 8;
          if (this.options.ecmaVersion >= 6) {
            this.next();
            var a,
              s = this.start,
              o = this.startLoc,
              p = [],
              h = !0,
              c = !1,
              u = new H(),
              l = this.yieldPos,
              d = this.awaitPos;
            for (
              this.yieldPos = 0, this.awaitPos = 0;
              this.type !== S.parenR;

            ) {
              if (
                (h ? (h = !1) : this.expect(S.comma),
                i && this.afterTrailingComma(S.parenR, !0))
              ) {
                c = !0;
                break;
              }
              if (this.type === S.ellipsis) {
                (a = this.start),
                  p.push(this.parseParenItem(this.parseRestBinding())),
                  this.type === S.comma &&
                    this.raise(
                      this.start,
                      'Comma is not permitted after the rest element'
                    );
                break;
              }
              p.push(this.parseMaybeAssign(!1, u, this.parseParenItem));
            }
            var f = this.start,
              g = this.startLoc;
            if (
              (this.expect(S.parenR),
              t && !this.canInsertSemicolon() && this.eat(S.arrow))
            )
              return (
                this.checkPatternErrors(u, !1),
                this.checkYieldAwaitInDefaultParams(),
                (this.yieldPos = l),
                (this.awaitPos = d),
                this.parseParenArrowList(n, r, p)
              );
            (p.length && !c) || this.unexpected(this.lastTokStart),
              a && this.unexpected(a),
              this.checkExpressionErrors(u, !0),
              (this.yieldPos = l || this.yieldPos),
              (this.awaitPos = d || this.awaitPos),
              p.length > 1
                ? (((e = this.startNodeAt(s, o)).expressions = p),
                  this.finishNodeAt(e, 'SequenceExpression', f, g))
                : (e = p[0]);
          } else e = this.parseParenExpression();
          if (this.options.preserveParens) {
            var m = this.startNodeAt(n, r);
            return (
              (m.expression = e), this.finishNode(m, 'ParenthesizedExpression')
            );
          }
          return e;
        }),
        (Y.parseParenItem = function(t) {
          return t;
        }),
        (Y.parseParenArrowList = function(t, e, n) {
          return this.parseArrowExpression(this.startNodeAt(t, e), n);
        });
      var X = [];
      (Y.parseNew = function() {
        var t = this.startNode(),
          e = this.parseIdent(!0);
        if (this.options.ecmaVersion >= 6 && this.eat(S.dot)) {
          t.meta = e;
          var n = this.containsEsc;
          return (
            (t.property = this.parseIdent(!0)),
            ('target' !== t.property.name || n) &&
              this.raiseRecoverable(
                t.property.start,
                'The only valid meta property for new is new.target'
              ),
            this.inFunction ||
              this.raiseRecoverable(
                t.start,
                'new.target can only be used in functions'
              ),
            this.finishNode(t, 'MetaProperty')
          );
        }
        var r = this.start,
          i = this.startLoc;
        return (
          (t.callee = this.parseSubscripts(this.parseExprAtom(), r, i, !0)),
          this.eat(S.parenL)
            ? (t.arguments = this.parseExprList(
                S.parenR,
                this.options.ecmaVersion >= 8,
                !1
              ))
            : (t.arguments = X),
          this.finishNode(t, 'NewExpression')
        );
      }),
        (Y.parseTemplateElement = function(t) {
          var e = t.isTagged,
            n = this.startNode();
          return (
            this.type === S.invalidTemplate
              ? (e ||
                  this.raiseRecoverable(
                    this.start,
                    'Bad escape sequence in untagged template literal'
                  ),
                (n.value = { raw: this.value, cooked: null }))
              : (n.value = {
                  raw: this.input
                    .slice(this.start, this.end)
                    .replace(/\r\n?/g, '\n'),
                  cooked: this.value,
                }),
            this.next(),
            (n.tail = this.type === S.backQuote),
            this.finishNode(n, 'TemplateElement')
          );
        }),
        (Y.parseTemplate = function(t) {
          void 0 === t && (t = {});
          var e = t.isTagged;
          void 0 === e && (e = !1);
          var n = this.startNode();
          this.next(), (n.expressions = []);
          var r = this.parseTemplateElement({ isTagged: e });
          for (n.quasis = [r]; !r.tail; )
            this.expect(S.dollarBraceL),
              n.expressions.push(this.parseExpression()),
              this.expect(S.braceR),
              n.quasis.push((r = this.parseTemplateElement({ isTagged: e })));
          return this.next(), this.finishNode(n, 'TemplateLiteral');
        }),
        (Y.isAsyncProp = function(t) {
          return (
            !t.computed &&
            'Identifier' === t.key.type &&
            'async' === t.key.name &&
            (this.type === S.name ||
              this.type === S.num ||
              this.type === S.string ||
              this.type === S.bracketL ||
              this.type.keyword ||
              (this.options.ecmaVersion >= 9 && this.type === S.star)) &&
            !w.test(this.input.slice(this.lastTokEnd, this.start))
          );
        }),
        (Y.parseObj = function(t, e) {
          var n = this.startNode(),
            r = !0,
            i = {};
          for (n.properties = [], this.next(); !this.eat(S.braceR); ) {
            if (r) r = !1;
            else if ((this.expect(S.comma), this.afterTrailingComma(S.braceR)))
              break;
            var a = this.parseProperty(t, e);
            t || this.checkPropClash(a, i, e), n.properties.push(a);
          }
          return this.finishNode(n, t ? 'ObjectPattern' : 'ObjectExpression');
        }),
        (Y.parseProperty = function(t, e) {
          var n,
            r,
            i,
            a,
            s = this.startNode();
          if (this.options.ecmaVersion >= 9 && this.eat(S.ellipsis))
            return t
              ? ((s.argument = this.parseIdent(!1)),
                this.type === S.comma &&
                  this.raise(
                    this.start,
                    'Comma is not permitted after the rest element'
                  ),
                this.finishNode(s, 'RestElement'))
              : (this.type === S.parenL &&
                  e &&
                  (e.parenthesizedAssign < 0 &&
                    (e.parenthesizedAssign = this.start),
                  e.parenthesizedBind < 0 &&
                    (e.parenthesizedBind = this.start)),
                (s.argument = this.parseMaybeAssign(!1, e)),
                this.type === S.comma &&
                  e &&
                  e.trailingComma < 0 &&
                  (e.trailingComma = this.start),
                this.finishNode(s, 'SpreadElement'));
          this.options.ecmaVersion >= 6 &&
            ((s.method = !1),
            (s.shorthand = !1),
            (t || e) && ((i = this.start), (a = this.startLoc)),
            t || (n = this.eat(S.star)));
          var o = this.containsEsc;
          return (
            this.parsePropertyName(s),
            !t &&
            !o &&
            this.options.ecmaVersion >= 8 &&
            !n &&
            this.isAsyncProp(s)
              ? ((r = !0),
                (n = this.options.ecmaVersion >= 9 && this.eat(S.star)),
                this.parsePropertyName(s, e))
              : (r = !1),
            this.parsePropertyValue(s, t, n, r, i, a, e, o),
            this.finishNode(s, 'Property')
          );
        }),
        (Y.parsePropertyValue = function(t, e, n, r, i, a, s, o) {
          if (
            ((n || r) && this.type === S.colon && this.unexpected(),
            this.eat(S.colon))
          )
            (t.value = e
              ? this.parseMaybeDefault(this.start, this.startLoc)
              : this.parseMaybeAssign(!1, s)),
              (t.kind = 'init');
          else if (this.options.ecmaVersion >= 6 && this.type === S.parenL)
            e && this.unexpected(),
              (t.kind = 'init'),
              (t.method = !0),
              (t.value = this.parseMethod(n, r));
          else if (
            e ||
            o ||
            !(this.options.ecmaVersion >= 5) ||
            t.computed ||
            'Identifier' !== t.key.type ||
            ('get' !== t.key.name && 'set' !== t.key.name) ||
            this.type === S.comma ||
            this.type === S.braceR
          )
            this.options.ecmaVersion >= 6 &&
            !t.computed &&
            'Identifier' === t.key.type
              ? (this.checkUnreserved(t.key),
                (t.kind = 'init'),
                e
                  ? (t.value = this.parseMaybeDefault(i, a, t.key))
                  : this.type === S.eq && s
                    ? (s.shorthandAssign < 0 &&
                        (s.shorthandAssign = this.start),
                      (t.value = this.parseMaybeDefault(i, a, t.key)))
                    : (t.value = t.key),
                (t.shorthand = !0))
              : this.unexpected();
          else {
            (n || r) && this.unexpected(),
              (t.kind = t.key.name),
              this.parsePropertyName(t),
              (t.value = this.parseMethod(!1));
            var p = 'get' === t.kind ? 0 : 1;
            if (t.value.params.length !== p) {
              var h = t.value.start;
              'get' === t.kind
                ? this.raiseRecoverable(h, 'getter should have no params')
                : this.raiseRecoverable(
                    h,
                    'setter should have exactly one param'
                  );
            } else
              'set' === t.kind &&
                'RestElement' === t.value.params[0].type &&
                this.raiseRecoverable(
                  t.value.params[0].start,
                  'Setter cannot use rest params'
                );
          }
        }),
        (Y.parsePropertyName = function(t) {
          if (this.options.ecmaVersion >= 6) {
            if (this.eat(S.bracketL))
              return (
                (t.computed = !0),
                (t.key = this.parseMaybeAssign()),
                this.expect(S.bracketR),
                t.key
              );
            t.computed = !1;
          }
          return (t.key =
            this.type === S.num || this.type === S.string
              ? this.parseExprAtom()
              : this.parseIdent(!0));
        }),
        (Y.initFunction = function(t) {
          (t.id = null),
            this.options.ecmaVersion >= 6 &&
              ((t.generator = !1), (t.expression = !1)),
            this.options.ecmaVersion >= 8 && (t.async = !1);
        }),
        (Y.parseMethod = function(t, e) {
          var n = this.startNode(),
            r = this.inGenerator,
            i = this.inAsync,
            a = this.yieldPos,
            s = this.awaitPos,
            o = this.inFunction;
          return (
            this.initFunction(n),
            this.options.ecmaVersion >= 6 && (n.generator = t),
            this.options.ecmaVersion >= 8 && (n.async = !!e),
            (this.inGenerator = n.generator),
            (this.inAsync = n.async),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.inFunction = !0),
            this.enterFunctionScope(),
            this.expect(S.parenL),
            (n.params = this.parseBindingList(
              S.parenR,
              !1,
              this.options.ecmaVersion >= 8
            )),
            this.checkYieldAwaitInDefaultParams(),
            this.parseFunctionBody(n, !1),
            (this.inGenerator = r),
            (this.inAsync = i),
            (this.yieldPos = a),
            (this.awaitPos = s),
            (this.inFunction = o),
            this.finishNode(n, 'FunctionExpression')
          );
        }),
        (Y.parseArrowExpression = function(t, e, n) {
          var r = this.inGenerator,
            i = this.inAsync,
            a = this.yieldPos,
            s = this.awaitPos,
            o = this.inFunction;
          return (
            this.enterFunctionScope(),
            this.initFunction(t),
            this.options.ecmaVersion >= 8 && (t.async = !!n),
            (this.inGenerator = !1),
            (this.inAsync = t.async),
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.inFunction = !0),
            (t.params = this.toAssignableList(e, !0)),
            this.parseFunctionBody(t, !0),
            (this.inGenerator = r),
            (this.inAsync = i),
            (this.yieldPos = a),
            (this.awaitPos = s),
            (this.inFunction = o),
            this.finishNode(t, 'ArrowFunctionExpression')
          );
        }),
        (Y.parseFunctionBody = function(t, e) {
          var n = e && this.type !== S.braceL,
            r = this.strict,
            i = !1;
          if (n)
            (t.body = this.parseMaybeAssign()),
              (t.expression = !0),
              this.checkParams(t, !1);
          else {
            var a =
              this.options.ecmaVersion >= 7 &&
              !this.isSimpleParamList(t.params);
            (r && !a) ||
              ((i = this.strictDirective(this.end)) &&
                a &&
                this.raiseRecoverable(
                  t.start,
                  "Illegal 'use strict' directive in function with non-simple parameter list"
                ));
            var s = this.labels;
            (this.labels = []),
              i && (this.strict = !0),
              this.checkParams(
                t,
                !r && !i && !e && this.isSimpleParamList(t.params)
              ),
              (t.body = this.parseBlock(!1)),
              (t.expression = !1),
              this.adaptDirectivePrologue(t.body.body),
              (this.labels = s);
          }
          this.exitFunctionScope(),
            this.strict && t.id && this.checkLVal(t.id, 'none'),
            (this.strict = r);
        }),
        (Y.isSimpleParamList = function(t) {
          for (var e = 0, n = t; e < n.length; e += 1)
            if ('Identifier' !== n[e].type) return !1;
          return !0;
        }),
        (Y.checkParams = function(t, e) {
          for (var n = {}, r = 0, i = t.params; r < i.length; r += 1) {
            var a = i[r];
            this.checkLVal(a, 'var', e ? null : n);
          }
        }),
        (Y.parseExprList = function(t, e, n, r) {
          for (var i = [], a = !0; !this.eat(t); ) {
            if (a) a = !1;
            else if ((this.expect(S.comma), e && this.afterTrailingComma(t)))
              break;
            var s = void 0;
            n && this.type === S.comma
              ? (s = null)
              : this.type === S.ellipsis
                ? ((s = this.parseSpread(r)),
                  r &&
                    this.type === S.comma &&
                    r.trailingComma < 0 &&
                    (r.trailingComma = this.start))
                : (s = this.parseMaybeAssign(!1, r)),
              i.push(s);
          }
          return i;
        }),
        (Y.checkUnreserved = function(t) {
          var e = t.start,
            n = t.end,
            r = t.name;
          this.inGenerator &&
            'yield' === r &&
            this.raiseRecoverable(
              e,
              "Can not use 'yield' as identifier inside a generator"
            ),
            this.inAsync &&
              'await' === r &&
              this.raiseRecoverable(
                e,
                "Can not use 'await' as identifier inside an async function"
              ),
            this.isKeyword(r) &&
              this.raise(e, "Unexpected keyword '" + r + "'"),
            (this.options.ecmaVersion < 6 &&
              -1 !== this.input.slice(e, n).indexOf('\\')) ||
              ((this.strict
                ? this.reservedWordsStrict
                : this.reservedWords
              ).test(r) &&
                (this.inAsync ||
                  'await' !== r ||
                  this.raiseRecoverable(
                    e,
                    "Can not use keyword 'await' outside an async function"
                  ),
                this.raiseRecoverable(
                  e,
                  "The keyword '" + r + "' is reserved"
                )));
        }),
        (Y.parseIdent = function(t, e) {
          var n = this.startNode();
          return (
            t && 'never' === this.options.allowReserved && (t = !1),
            this.type === S.name
              ? (n.name = this.value)
              : this.type.keyword
                ? ((n.name = this.type.keyword),
                  ('class' !== n.name && 'function' !== n.name) ||
                    (this.lastTokEnd === this.lastTokStart + 1 &&
                      46 === this.input.charCodeAt(this.lastTokStart)) ||
                    this.context.pop())
                : this.unexpected(),
            this.next(),
            this.finishNode(n, 'Identifier'),
            t || this.checkUnreserved(n),
            n
          );
        }),
        (Y.parseYield = function() {
          this.yieldPos || (this.yieldPos = this.start);
          var t = this.startNode();
          return (
            this.next(),
            this.type === S.semi ||
            this.canInsertSemicolon() ||
            (this.type !== S.star && !this.type.startsExpr)
              ? ((t.delegate = !1), (t.argument = null))
              : ((t.delegate = this.eat(S.star)),
                (t.argument = this.parseMaybeAssign())),
            this.finishNode(t, 'YieldExpression')
          );
        }),
        (Y.parseAwait = function() {
          this.awaitPos || (this.awaitPos = this.start);
          var t = this.startNode();
          return (
            this.next(),
            (t.argument = this.parseMaybeUnary(null, !0)),
            this.finishNode(t, 'AwaitExpression')
          );
        });
      var J = U.prototype;
      (J.raise = function(t, e) {
        var n = j(this.input, t);
        e += ' (' + n.line + ':' + n.column + ')';
        var r = new SyntaxError(e);
        throw ((r.pos = t), (r.loc = n), (r.raisedAt = this.pos), r);
      }),
        (J.raiseRecoverable = J.raise),
        (J.curPosition = function() {
          if (this.options.locations)
            return new I(this.curLine, this.pos - this.lineStart);
        });
      var $ = U.prototype,
        Q =
          Object.assign ||
          function(t) {
            for (var e = [], n = arguments.length - 1; n-- > 0; )
              e[n] = arguments[n + 1];
            for (var r = 0, i = e; r < i.length; r += 1) {
              var a = i[r];
              for (var s in a) O(a, s) && (t[s] = a[s]);
            }
            return t;
          };
      ($.enterFunctionScope = function() {
        this.scopeStack.push({
          var: {},
          lexical: {},
          childVar: {},
          parentLexical: {},
        });
      }),
        ($.exitFunctionScope = function() {
          this.scopeStack.pop();
        }),
        ($.enterLexicalScope = function() {
          var t = this.scopeStack[this.scopeStack.length - 1],
            e = { var: {}, lexical: {}, childVar: {}, parentLexical: {} };
          this.scopeStack.push(e),
            Q(e.parentLexical, t.lexical, t.parentLexical);
        }),
        ($.exitLexicalScope = function() {
          var t = this.scopeStack.pop(),
            e = this.scopeStack[this.scopeStack.length - 1];
          Q(e.childVar, t.var, t.childVar);
        }),
        ($.canDeclareVarName = function(t) {
          var e = this.scopeStack[this.scopeStack.length - 1];
          return !O(e.lexical, t) && !O(e.parentLexical, t);
        }),
        ($.canDeclareLexicalName = function(t) {
          var e = this.scopeStack[this.scopeStack.length - 1];
          return !O(e.lexical, t) && !O(e.var, t) && !O(e.childVar, t);
        }),
        ($.declareVarName = function(t) {
          this.scopeStack[this.scopeStack.length - 1].var[t] = !0;
        }),
        ($.declareLexicalName = function(t) {
          this.scopeStack[this.scopeStack.length - 1].lexical[t] = !0;
        });
      var Z = function(t, e, n) {
          (this.type = ''),
            (this.start = e),
            (this.end = 0),
            t.options.locations && (this.loc = new N(t, n)),
            t.options.directSourceFile &&
              (this.sourceFile = t.options.directSourceFile),
            t.options.ranges && (this.range = [e, 0]);
        },
        tt = U.prototype;
      function et(t, e, n, r) {
        return (
          (t.type = e),
          (t.end = n),
          this.options.locations && (t.loc.end = r),
          this.options.ranges && (t.range[1] = n),
          t
        );
      }
      (tt.startNode = function() {
        return new Z(this, this.start, this.startLoc);
      }),
        (tt.startNodeAt = function(t, e) {
          return new Z(this, t, e);
        }),
        (tt.finishNode = function(t, e) {
          return et.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
        }),
        (tt.finishNodeAt = function(t, e, n, r) {
          return et.call(this, t, e, n, r);
        });
      var nt = function(t, e, n, r, i) {
          (this.token = t),
            (this.isExpr = !!e),
            (this.preserveSpace = !!n),
            (this.override = r),
            (this.generator = !!i);
        },
        rt = {
          b_stat: new nt('{', !1),
          b_expr: new nt('{', !0),
          b_tmpl: new nt('${', !1),
          p_stat: new nt('(', !1),
          p_expr: new nt('(', !0),
          q_tmpl: new nt('`', !0, !0, function(t) {
            return t.tryReadTemplateToken();
          }),
          f_stat: new nt('function', !1),
          f_expr: new nt('function', !0),
          f_expr_gen: new nt('function', !0, !1, null, !0),
          f_gen: new nt('function', !1, !1, null, !0),
        },
        it = U.prototype;
      (it.initialContext = function() {
        return [rt.b_stat];
      }),
        (it.braceIsBlock = function(t) {
          var e = this.curContext();
          return (
            e === rt.f_expr ||
            e === rt.f_stat ||
            (t !== S.colon || (e !== rt.b_stat && e !== rt.b_expr)
              ? t === S._return || (t === S.name && this.exprAllowed)
                ? w.test(this.input.slice(this.lastTokEnd, this.start))
                : t === S._else ||
                  t === S.semi ||
                  t === S.eof ||
                  t === S.parenR ||
                  t === S.arrow ||
                  (t === S.braceL
                    ? e === rt.b_stat
                    : t !== S._var && t !== S.name && !this.exprAllowed)
              : !e.isExpr)
          );
        }),
        (it.inGeneratorContext = function() {
          for (var t = this.context.length - 1; t >= 1; t--) {
            var e = this.context[t];
            if ('function' === e.token) return e.generator;
          }
          return !1;
        }),
        (it.updateContext = function(t) {
          var e,
            n = this.type;
          n.keyword && t === S.dot
            ? (this.exprAllowed = !1)
            : (e = n.updateContext)
              ? e.call(this, t)
              : (this.exprAllowed = n.beforeExpr);
        }),
        (S.parenR.updateContext = S.braceR.updateContext = function() {
          if (1 !== this.context.length) {
            var t = this.context.pop();
            t === rt.b_stat &&
              'function' === this.curContext().token &&
              (t = this.context.pop()),
              (this.exprAllowed = !t.isExpr);
          } else this.exprAllowed = !0;
        }),
        (S.braceL.updateContext = function(t) {
          this.context.push(this.braceIsBlock(t) ? rt.b_stat : rt.b_expr),
            (this.exprAllowed = !0);
        }),
        (S.dollarBraceL.updateContext = function() {
          this.context.push(rt.b_tmpl), (this.exprAllowed = !0);
        }),
        (S.parenL.updateContext = function(t) {
          var e =
            t === S._if || t === S._for || t === S._with || t === S._while;
          this.context.push(e ? rt.p_stat : rt.p_expr), (this.exprAllowed = !0);
        }),
        (S.incDec.updateContext = function() {}),
        (S._function.updateContext = S._class.updateContext = function(t) {
          t.beforeExpr &&
          t !== S.semi &&
          t !== S._else &&
          ((t !== S.colon && t !== S.braceL) || this.curContext() !== rt.b_stat)
            ? this.context.push(rt.f_expr)
            : this.context.push(rt.f_stat),
            (this.exprAllowed = !1);
        }),
        (S.backQuote.updateContext = function() {
          this.curContext() === rt.q_tmpl
            ? this.context.pop()
            : this.context.push(rt.q_tmpl),
            (this.exprAllowed = !1);
        }),
        (S.star.updateContext = function(t) {
          if (t === S._function) {
            var e = this.context.length - 1;
            this.context[e] === rt.f_expr
              ? (this.context[e] = rt.f_expr_gen)
              : (this.context[e] = rt.f_gen);
          }
          this.exprAllowed = !0;
        }),
        (S.name.updateContext = function(t) {
          var e = !1;
          this.options.ecmaVersion >= 6 &&
            (('of' === this.value && !this.exprAllowed) ||
              ('yield' === this.value && this.inGeneratorContext())) &&
            (e = !0),
            (this.exprAllowed = e);
        });
      var at = {
        $LONE: [
          'ASCII',
          'ASCII_Hex_Digit',
          'AHex',
          'Alphabetic',
          'Alpha',
          'Any',
          'Assigned',
          'Bidi_Control',
          'Bidi_C',
          'Bidi_Mirrored',
          'Bidi_M',
          'Case_Ignorable',
          'CI',
          'Cased',
          'Changes_When_Casefolded',
          'CWCF',
          'Changes_When_Casemapped',
          'CWCM',
          'Changes_When_Lowercased',
          'CWL',
          'Changes_When_NFKC_Casefolded',
          'CWKCF',
          'Changes_When_Titlecased',
          'CWT',
          'Changes_When_Uppercased',
          'CWU',
          'Dash',
          'Default_Ignorable_Code_Point',
          'DI',
          'Deprecated',
          'Dep',
          'Diacritic',
          'Dia',
          'Emoji',
          'Emoji_Component',
          'Emoji_Modifier',
          'Emoji_Modifier_Base',
          'Emoji_Presentation',
          'Extender',
          'Ext',
          'Grapheme_Base',
          'Gr_Base',
          'Grapheme_Extend',
          'Gr_Ext',
          'Hex_Digit',
          'Hex',
          'IDS_Binary_Operator',
          'IDSB',
          'IDS_Trinary_Operator',
          'IDST',
          'ID_Continue',
          'IDC',
          'ID_Start',
          'IDS',
          'Ideographic',
          'Ideo',
          'Join_Control',
          'Join_C',
          'Logical_Order_Exception',
          'LOE',
          'Lowercase',
          'Lower',
          'Math',
          'Noncharacter_Code_Point',
          'NChar',
          'Pattern_Syntax',
          'Pat_Syn',
          'Pattern_White_Space',
          'Pat_WS',
          'Quotation_Mark',
          'QMark',
          'Radical',
          'Regional_Indicator',
          'RI',
          'Sentence_Terminal',
          'STerm',
          'Soft_Dotted',
          'SD',
          'Terminal_Punctuation',
          'Term',
          'Unified_Ideograph',
          'UIdeo',
          'Uppercase',
          'Upper',
          'Variation_Selector',
          'VS',
          'White_Space',
          'space',
          'XID_Continue',
          'XIDC',
          'XID_Start',
          'XIDS',
        ],
        General_Category: [
          'Cased_Letter',
          'LC',
          'Close_Punctuation',
          'Pe',
          'Connector_Punctuation',
          'Pc',
          'Control',
          'Cc',
          'cntrl',
          'Currency_Symbol',
          'Sc',
          'Dash_Punctuation',
          'Pd',
          'Decimal_Number',
          'Nd',
          'digit',
          'Enclosing_Mark',
          'Me',
          'Final_Punctuation',
          'Pf',
          'Format',
          'Cf',
          'Initial_Punctuation',
          'Pi',
          'Letter',
          'L',
          'Letter_Number',
          'Nl',
          'Line_Separator',
          'Zl',
          'Lowercase_Letter',
          'Ll',
          'Mark',
          'M',
          'Combining_Mark',
          'Math_Symbol',
          'Sm',
          'Modifier_Letter',
          'Lm',
          'Modifier_Symbol',
          'Sk',
          'Nonspacing_Mark',
          'Mn',
          'Number',
          'N',
          'Open_Punctuation',
          'Ps',
          'Other',
          'C',
          'Other_Letter',
          'Lo',
          'Other_Number',
          'No',
          'Other_Punctuation',
          'Po',
          'Other_Symbol',
          'So',
          'Paragraph_Separator',
          'Zp',
          'Private_Use',
          'Co',
          'Punctuation',
          'P',
          'punct',
          'Separator',
          'Z',
          'Space_Separator',
          'Zs',
          'Spacing_Mark',
          'Mc',
          'Surrogate',
          'Cs',
          'Symbol',
          'S',
          'Titlecase_Letter',
          'Lt',
          'Unassigned',
          'Cn',
          'Uppercase_Letter',
          'Lu',
        ],
        Script: [
          'Adlam',
          'Adlm',
          'Ahom',
          'Anatolian_Hieroglyphs',
          'Hluw',
          'Arabic',
          'Arab',
          'Armenian',
          'Armn',
          'Avestan',
          'Avst',
          'Balinese',
          'Bali',
          'Bamum',
          'Bamu',
          'Bassa_Vah',
          'Bass',
          'Batak',
          'Batk',
          'Bengali',
          'Beng',
          'Bhaiksuki',
          'Bhks',
          'Bopomofo',
          'Bopo',
          'Brahmi',
          'Brah',
          'Braille',
          'Brai',
          'Buginese',
          'Bugi',
          'Buhid',
          'Buhd',
          'Canadian_Aboriginal',
          'Cans',
          'Carian',
          'Cari',
          'Caucasian_Albanian',
          'Aghb',
          'Chakma',
          'Cakm',
          'Cham',
          'Cherokee',
          'Cher',
          'Common',
          'Zyyy',
          'Coptic',
          'Copt',
          'Qaac',
          'Cuneiform',
          'Xsux',
          'Cypriot',
          'Cprt',
          'Cyrillic',
          'Cyrl',
          'Deseret',
          'Dsrt',
          'Devanagari',
          'Deva',
          'Duployan',
          'Dupl',
          'Egyptian_Hieroglyphs',
          'Egyp',
          'Elbasan',
          'Elba',
          'Ethiopic',
          'Ethi',
          'Georgian',
          'Geor',
          'Glagolitic',
          'Glag',
          'Gothic',
          'Goth',
          'Grantha',
          'Gran',
          'Greek',
          'Grek',
          'Gujarati',
          'Gujr',
          'Gurmukhi',
          'Guru',
          'Han',
          'Hani',
          'Hangul',
          'Hang',
          'Hanunoo',
          'Hano',
          'Hatran',
          'Hatr',
          'Hebrew',
          'Hebr',
          'Hiragana',
          'Hira',
          'Imperial_Aramaic',
          'Armi',
          'Inherited',
          'Zinh',
          'Qaai',
          'Inscriptional_Pahlavi',
          'Phli',
          'Inscriptional_Parthian',
          'Prti',
          'Javanese',
          'Java',
          'Kaithi',
          'Kthi',
          'Kannada',
          'Knda',
          'Katakana',
          'Kana',
          'Kayah_Li',
          'Kali',
          'Kharoshthi',
          'Khar',
          'Khmer',
          'Khmr',
          'Khojki',
          'Khoj',
          'Khudawadi',
          'Sind',
          'Lao',
          'Laoo',
          'Latin',
          'Latn',
          'Lepcha',
          'Lepc',
          'Limbu',
          'Limb',
          'Linear_A',
          'Lina',
          'Linear_B',
          'Linb',
          'Lisu',
          'Lycian',
          'Lyci',
          'Lydian',
          'Lydi',
          'Mahajani',
          'Mahj',
          'Malayalam',
          'Mlym',
          'Mandaic',
          'Mand',
          'Manichaean',
          'Mani',
          'Marchen',
          'Marc',
          'Masaram_Gondi',
          'Gonm',
          'Meetei_Mayek',
          'Mtei',
          'Mende_Kikakui',
          'Mend',
          'Meroitic_Cursive',
          'Merc',
          'Meroitic_Hieroglyphs',
          'Mero',
          'Miao',
          'Plrd',
          'Modi',
          'Mongolian',
          'Mong',
          'Mro',
          'Mroo',
          'Multani',
          'Mult',
          'Myanmar',
          'Mymr',
          'Nabataean',
          'Nbat',
          'New_Tai_Lue',
          'Talu',
          'Newa',
          'Nko',
          'Nkoo',
          'Nushu',
          'Nshu',
          'Ogham',
          'Ogam',
          'Ol_Chiki',
          'Olck',
          'Old_Hungarian',
          'Hung',
          'Old_Italic',
          'Ital',
          'Old_North_Arabian',
          'Narb',
          'Old_Permic',
          'Perm',
          'Old_Persian',
          'Xpeo',
          'Old_South_Arabian',
          'Sarb',
          'Old_Turkic',
          'Orkh',
          'Oriya',
          'Orya',
          'Osage',
          'Osge',
          'Osmanya',
          'Osma',
          'Pahawh_Hmong',
          'Hmng',
          'Palmyrene',
          'Palm',
          'Pau_Cin_Hau',
          'Pauc',
          'Phags_Pa',
          'Phag',
          'Phoenician',
          'Phnx',
          'Psalter_Pahlavi',
          'Phlp',
          'Rejang',
          'Rjng',
          'Runic',
          'Runr',
          'Samaritan',
          'Samr',
          'Saurashtra',
          'Saur',
          'Sharada',
          'Shrd',
          'Shavian',
          'Shaw',
          'Siddham',
          'Sidd',
          'SignWriting',
          'Sgnw',
          'Sinhala',
          'Sinh',
          'Sora_Sompeng',
          'Sora',
          'Soyombo',
          'Soyo',
          'Sundanese',
          'Sund',
          'Syloti_Nagri',
          'Sylo',
          'Syriac',
          'Syrc',
          'Tagalog',
          'Tglg',
          'Tagbanwa',
          'Tagb',
          'Tai_Le',
          'Tale',
          'Tai_Tham',
          'Lana',
          'Tai_Viet',
          'Tavt',
          'Takri',
          'Takr',
          'Tamil',
          'Taml',
          'Tangut',
          'Tang',
          'Telugu',
          'Telu',
          'Thaana',
          'Thaa',
          'Thai',
          'Tibetan',
          'Tibt',
          'Tifinagh',
          'Tfng',
          'Tirhuta',
          'Tirh',
          'Ugaritic',
          'Ugar',
          'Vai',
          'Vaii',
          'Warang_Citi',
          'Wara',
          'Yi',
          'Yiii',
          'Zanabazar_Square',
          'Zanb',
        ],
      };
      Array.prototype.push.apply(at.$LONE, at.General_Category),
        (at.gc = at.General_Category),
        (at.sc = at.Script_Extensions = at.scx = at.Script);
      var st = U.prototype,
        ot = function(t) {
          (this.parser = t),
            (this.validFlags =
              'gim' +
              (t.options.ecmaVersion >= 6 ? 'uy' : '') +
              (t.options.ecmaVersion >= 9 ? 's' : '')),
            (this.source = ''),
            (this.flags = ''),
            (this.start = 0),
            (this.switchU = !1),
            (this.switchN = !1),
            (this.pos = 0),
            (this.lastIntValue = 0),
            (this.lastStringValue = ''),
            (this.lastAssertionIsQuantifiable = !1),
            (this.numCapturingParens = 0),
            (this.maxBackReference = 0),
            (this.groupNames = []),
            (this.backReferenceNames = []);
        };
      function pt(t) {
        return t <= 65535
          ? String.fromCharCode(t)
          : ((t -= 65536),
            String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
      }
      function ht(t) {
        return (
          36 === t ||
          (t >= 40 && t <= 43) ||
          46 === t ||
          63 === t ||
          (t >= 91 && t <= 94) ||
          (t >= 123 && t <= 125)
        );
      }
      function ct(t) {
        return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
      }
      function ut(t) {
        return ct(t) || 95 === t;
      }
      function lt(t) {
        return ut(t) || dt(t);
      }
      function dt(t) {
        return t >= 48 && t <= 57;
      }
      function ft(t) {
        return (
          (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
        );
      }
      function gt(t) {
        return t >= 65 && t <= 70
          ? t - 65 + 10
          : t >= 97 && t <= 102
            ? t - 97 + 10
            : t - 48;
      }
      function mt(t) {
        return t >= 48 && t <= 55;
      }
      (ot.prototype.reset = function(t, e, n) {
        var r = -1 !== n.indexOf('u');
        (this.start = 0 | t),
          (this.source = e + ''),
          (this.flags = n),
          (this.switchU = r && this.parser.options.ecmaVersion >= 6),
          (this.switchN = r && this.parser.options.ecmaVersion >= 9);
      }),
        (ot.prototype.raise = function(t) {
          this.parser.raiseRecoverable(
            this.start,
            'Invalid regular expression: /' + this.source + '/: ' + t
          );
        }),
        (ot.prototype.at = function(t) {
          var e = this.source,
            n = e.length;
          if (t >= n) return -1;
          var r = e.charCodeAt(t);
          return !this.switchU || r <= 55295 || r >= 57344 || t + 1 >= n
            ? r
            : (r << 10) + e.charCodeAt(t + 1) - 56613888;
        }),
        (ot.prototype.nextIndex = function(t) {
          var e = this.source,
            n = e.length;
          if (t >= n) return n;
          var r = e.charCodeAt(t);
          return !this.switchU || r <= 55295 || r >= 57344 || t + 1 >= n
            ? t + 1
            : t + 2;
        }),
        (ot.prototype.current = function() {
          return this.at(this.pos);
        }),
        (ot.prototype.lookahead = function() {
          return this.at(this.nextIndex(this.pos));
        }),
        (ot.prototype.advance = function() {
          this.pos = this.nextIndex(this.pos);
        }),
        (ot.prototype.eat = function(t) {
          return this.current() === t && (this.advance(), !0);
        }),
        (st.validateRegExpFlags = function(t) {
          for (var e = t.validFlags, n = t.flags, r = 0; r < n.length; r++) {
            var i = n.charAt(r);
            -1 === e.indexOf(i) &&
              this.raise(t.start, 'Invalid regular expression flag'),
              n.indexOf(i, r + 1) > -1 &&
                this.raise(t.start, 'Duplicate regular expression flag');
          }
        }),
        (st.validateRegExpPattern = function(t) {
          this.regexp_pattern(t),
            !t.switchN &&
              this.options.ecmaVersion >= 9 &&
              t.groupNames.length > 0 &&
              ((t.switchN = !0), this.regexp_pattern(t));
        }),
        (st.regexp_pattern = function(t) {
          (t.pos = 0),
            (t.lastIntValue = 0),
            (t.lastStringValue = ''),
            (t.lastAssertionIsQuantifiable = !1),
            (t.numCapturingParens = 0),
            (t.maxBackReference = 0),
            (t.groupNames.length = 0),
            (t.backReferenceNames.length = 0),
            this.regexp_disjunction(t),
            t.pos !== t.source.length &&
              (t.eat(41) && t.raise("Unmatched ')'"),
              (t.eat(93) || t.eat(125)) && t.raise('Lone quantifier brackets')),
            t.maxBackReference > t.numCapturingParens &&
              t.raise('Invalid escape');
          for (var e = 0, n = t.backReferenceNames; e < n.length; e += 1) {
            var r = n[e];
            -1 === t.groupNames.indexOf(r) &&
              t.raise('Invalid named capture referenced');
          }
        }),
        (st.regexp_disjunction = function(t) {
          for (this.regexp_alternative(t); t.eat(124); )
            this.regexp_alternative(t);
          this.regexp_eatQuantifier(t, !0) && t.raise('Nothing to repeat'),
            t.eat(123) && t.raise('Lone quantifier brackets');
        }),
        (st.regexp_alternative = function(t) {
          for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
        }),
        (st.regexp_eatTerm = function(t) {
          return this.regexp_eatAssertion(t)
            ? (t.lastAssertionIsQuantifiable &&
                this.regexp_eatQuantifier(t) &&
                t.switchU &&
                t.raise('Invalid quantifier'),
              !0)
            : !(t.switchU
                ? !this.regexp_eatAtom(t)
                : !this.regexp_eatExtendedAtom(t)) &&
                (this.regexp_eatQuantifier(t), !0);
        }),
        (st.regexp_eatAssertion = function(t) {
          var e = t.pos;
          if (((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36)))
            return !0;
          if (t.eat(92)) {
            if (t.eat(66) || t.eat(98)) return !0;
            t.pos = e;
          }
          if (t.eat(40) && t.eat(63)) {
            var n = !1;
            if (
              (this.options.ecmaVersion >= 9 && (n = t.eat(60)),
              t.eat(61) || t.eat(33))
            )
              return (
                this.regexp_disjunction(t),
                t.eat(41) || t.raise('Unterminated group'),
                (t.lastAssertionIsQuantifiable = !n),
                !0
              );
          }
          return (t.pos = e), !1;
        }),
        (st.regexp_eatQuantifier = function(t, e) {
          return (
            void 0 === e && (e = !1),
            !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
          );
        }),
        (st.regexp_eatQuantifierPrefix = function(t, e) {
          return (
            t.eat(42) ||
            t.eat(43) ||
            t.eat(63) ||
            this.regexp_eatBracedQuantifier(t, e)
          );
        }),
        (st.regexp_eatBracedQuantifier = function(t, e) {
          var n = t.pos;
          if (t.eat(123)) {
            var r = 0,
              i = -1;
            if (
              this.regexp_eatDecimalDigits(t) &&
              ((r = t.lastIntValue),
              t.eat(44) &&
                this.regexp_eatDecimalDigits(t) &&
                (i = t.lastIntValue),
              t.eat(125))
            )
              return (
                -1 !== i &&
                  i < r &&
                  !e &&
                  t.raise('numbers out of order in {} quantifier'),
                !0
              );
            t.switchU && !e && t.raise('Incomplete quantifier'), (t.pos = n);
          }
          return !1;
        }),
        (st.regexp_eatAtom = function(t) {
          return (
            this.regexp_eatPatternCharacters(t) ||
            t.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(t) ||
            this.regexp_eatCharacterClass(t) ||
            this.regexp_eatUncapturingGroup(t) ||
            this.regexp_eatCapturingGroup(t)
          );
        }),
        (st.regexp_eatReverseSolidusAtomEscape = function(t) {
          var e = t.pos;
          if (t.eat(92)) {
            if (this.regexp_eatAtomEscape(t)) return !0;
            t.pos = e;
          }
          return !1;
        }),
        (st.regexp_eatUncapturingGroup = function(t) {
          var e = t.pos;
          if (t.eat(40)) {
            if (t.eat(63) && t.eat(58)) {
              if ((this.regexp_disjunction(t), t.eat(41))) return !0;
              t.raise('Unterminated group');
            }
            t.pos = e;
          }
          return !1;
        }),
        (st.regexp_eatCapturingGroup = function(t) {
          if (t.eat(40)) {
            if (
              (this.options.ecmaVersion >= 9
                ? this.regexp_groupSpecifier(t)
                : 63 === t.current() && t.raise('Invalid group'),
              this.regexp_disjunction(t),
              t.eat(41))
            )
              return (t.numCapturingParens += 1), !0;
            t.raise('Unterminated group');
          }
          return !1;
        }),
        (st.regexp_eatExtendedAtom = function(t) {
          return (
            t.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(t) ||
            this.regexp_eatCharacterClass(t) ||
            this.regexp_eatUncapturingGroup(t) ||
            this.regexp_eatCapturingGroup(t) ||
            this.regexp_eatInvalidBracedQuantifier(t) ||
            this.regexp_eatExtendedPatternCharacter(t)
          );
        }),
        (st.regexp_eatInvalidBracedQuantifier = function(t) {
          return (
            this.regexp_eatBracedQuantifier(t, !0) &&
              t.raise('Nothing to repeat'),
            !1
          );
        }),
        (st.regexp_eatSyntaxCharacter = function(t) {
          var e = t.current();
          return !!ht(e) && ((t.lastIntValue = e), t.advance(), !0);
        }),
        (st.regexp_eatPatternCharacters = function(t) {
          for (var e = t.pos, n = 0; -1 !== (n = t.current()) && !ht(n); )
            t.advance();
          return t.pos !== e;
        }),
        (st.regexp_eatExtendedPatternCharacter = function(t) {
          var e = t.current();
          return !(
            -1 === e ||
            36 === e ||
            (e >= 40 && e <= 43) ||
            46 === e ||
            63 === e ||
            91 === e ||
            94 === e ||
            124 === e ||
            (t.advance(), 0)
          );
        }),
        (st.regexp_groupSpecifier = function(t) {
          if (t.eat(63)) {
            if (this.regexp_eatGroupName(t))
              return (
                -1 !== t.groupNames.indexOf(t.lastStringValue) &&
                  t.raise('Duplicate capture group name'),
                void t.groupNames.push(t.lastStringValue)
              );
            t.raise('Invalid group');
          }
        }),
        (st.regexp_eatGroupName = function(t) {
          if (((t.lastStringValue = ''), t.eat(60))) {
            if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
            t.raise('Invalid capture group name');
          }
          return !1;
        }),
        (st.regexp_eatRegExpIdentifierName = function(t) {
          if (
            ((t.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(t))
          ) {
            for (
              t.lastStringValue += pt(t.lastIntValue);
              this.regexp_eatRegExpIdentifierPart(t);

            )
              t.lastStringValue += pt(t.lastIntValue);
            return !0;
          }
          return !1;
        }),
        (st.regexp_eatRegExpIdentifierStart = function(t) {
          var e = t.pos,
            n = t.current();
          return (
            t.advance(),
            92 === n &&
              this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
              (n = t.lastIntValue),
            (function(t) {
              return f(t, !0) || 36 === t || 95 === t;
            })(n)
              ? ((t.lastIntValue = n), !0)
              : ((t.pos = e), !1)
          );
        }),
        (st.regexp_eatRegExpIdentifierPart = function(t) {
          var e = t.pos,
            n = t.current();
          return (
            t.advance(),
            92 === n &&
              this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
              (n = t.lastIntValue),
            (function(t) {
              return (
                g(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t
              );
            })(n)
              ? ((t.lastIntValue = n), !0)
              : ((t.pos = e), !1)
          );
        }),
        (st.regexp_eatAtomEscape = function(t) {
          return (
            !!(
              this.regexp_eatBackReference(t) ||
              this.regexp_eatCharacterClassEscape(t) ||
              this.regexp_eatCharacterEscape(t) ||
              (t.switchN && this.regexp_eatKGroupName(t))
            ) ||
            (t.switchU &&
              (99 === t.current() && t.raise('Invalid unicode escape'),
              t.raise('Invalid escape')),
            !1)
          );
        }),
        (st.regexp_eatBackReference = function(t) {
          var e = t.pos;
          if (this.regexp_eatDecimalEscape(t)) {
            var n = t.lastIntValue;
            if (t.switchU)
              return n > t.maxBackReference && (t.maxBackReference = n), !0;
            if (n <= t.numCapturingParens) return !0;
            t.pos = e;
          }
          return !1;
        }),
        (st.regexp_eatKGroupName = function(t) {
          if (t.eat(107)) {
            if (this.regexp_eatGroupName(t))
              return t.backReferenceNames.push(t.lastStringValue), !0;
            t.raise('Invalid named reference');
          }
          return !1;
        }),
        (st.regexp_eatCharacterEscape = function(t) {
          return (
            this.regexp_eatControlEscape(t) ||
            this.regexp_eatCControlLetter(t) ||
            this.regexp_eatZero(t) ||
            this.regexp_eatHexEscapeSequence(t) ||
            this.regexp_eatRegExpUnicodeEscapeSequence(t) ||
            (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
            this.regexp_eatIdentityEscape(t)
          );
        }),
        (st.regexp_eatCControlLetter = function(t) {
          var e = t.pos;
          if (t.eat(99)) {
            if (this.regexp_eatControlLetter(t)) return !0;
            t.pos = e;
          }
          return !1;
        }),
        (st.regexp_eatZero = function(t) {
          return (
            48 === t.current() &&
            !dt(t.lookahead()) &&
            ((t.lastIntValue = 0), t.advance(), !0)
          );
        }),
        (st.regexp_eatControlEscape = function(t) {
          var e = t.current();
          return 116 === e
            ? ((t.lastIntValue = 9), t.advance(), !0)
            : 110 === e
              ? ((t.lastIntValue = 10), t.advance(), !0)
              : 118 === e
                ? ((t.lastIntValue = 11), t.advance(), !0)
                : 102 === e
                  ? ((t.lastIntValue = 12), t.advance(), !0)
                  : 114 === e && ((t.lastIntValue = 13), t.advance(), !0);
        }),
        (st.regexp_eatControlLetter = function(t) {
          var e = t.current();
          return !!ct(e) && ((t.lastIntValue = e % 32), t.advance(), !0);
        }),
        (st.regexp_eatRegExpUnicodeEscapeSequence = function(t) {
          var e,
            n = t.pos;
          if (t.eat(117)) {
            if (this.regexp_eatFixedHexDigits(t, 4)) {
              var r = t.lastIntValue;
              if (t.switchU && r >= 55296 && r <= 56319) {
                var i = t.pos;
                if (
                  t.eat(92) &&
                  t.eat(117) &&
                  this.regexp_eatFixedHexDigits(t, 4)
                ) {
                  var a = t.lastIntValue;
                  if (a >= 56320 && a <= 57343)
                    return (
                      (t.lastIntValue =
                        1024 * (r - 55296) + (a - 56320) + 65536),
                      !0
                    );
                }
                (t.pos = i), (t.lastIntValue = r);
              }
              return !0;
            }
            if (
              t.switchU &&
              t.eat(123) &&
              this.regexp_eatHexDigits(t) &&
              t.eat(125) &&
              (e = t.lastIntValue) >= 0 &&
              e <= 1114111
            )
              return !0;
            t.switchU && t.raise('Invalid unicode escape'), (t.pos = n);
          }
          return !1;
        }),
        (st.regexp_eatIdentityEscape = function(t) {
          if (t.switchU)
            return (
              !!this.regexp_eatSyntaxCharacter(t) ||
              (!!t.eat(47) && ((t.lastIntValue = 47), !0))
            );
          var e = t.current();
          return !(
            99 === e ||
            (t.switchN && 107 === e) ||
            ((t.lastIntValue = e), t.advance(), 0)
          );
        }),
        (st.regexp_eatDecimalEscape = function(t) {
          t.lastIntValue = 0;
          var e = t.current();
          if (e >= 49 && e <= 57) {
            do {
              (t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance();
            } while ((e = t.current()) >= 48 && e <= 57);
            return !0;
          }
          return !1;
        }),
        (st.regexp_eatCharacterClassEscape = function(t) {
          var e = t.current();
          if (
            100 === e ||
            68 === e ||
            115 === e ||
            83 === e ||
            119 === e ||
            87 === e
          )
            return (t.lastIntValue = -1), t.advance(), !0;
          if (
            t.switchU &&
            this.options.ecmaVersion >= 9 &&
            (80 === e || 112 === e)
          ) {
            if (
              ((t.lastIntValue = -1),
              t.advance(),
              t.eat(123) &&
                this.regexp_eatUnicodePropertyValueExpression(t) &&
                t.eat(125))
            )
              return !0;
            t.raise('Invalid property name');
          }
          return !1;
        }),
        (st.regexp_eatUnicodePropertyValueExpression = function(t) {
          var e = t.pos;
          if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
            var n = t.lastStringValue;
            if (this.regexp_eatUnicodePropertyValue(t)) {
              var r = t.lastStringValue;
              return (
                this.regexp_validateUnicodePropertyNameAndValue(t, n, r), !0
              );
            }
          }
          if (((t.pos = e), this.regexp_eatLoneUnicodePropertyNameOrValue(t))) {
            var i = t.lastStringValue;
            return this.regexp_validateUnicodePropertyNameOrValue(t, i), !0;
          }
          return !1;
        }),
        (st.regexp_validateUnicodePropertyNameAndValue = function(t, e, n) {
          (at.hasOwnProperty(e) && -1 !== at[e].indexOf(n)) ||
            t.raise('Invalid property name');
        }),
        (st.regexp_validateUnicodePropertyNameOrValue = function(t, e) {
          -1 === at.$LONE.indexOf(e) && t.raise('Invalid property name');
        }),
        (st.regexp_eatUnicodePropertyName = function(t) {
          var e = 0;
          for (t.lastStringValue = ''; ut((e = t.current())); )
            (t.lastStringValue += pt(e)), t.advance();
          return '' !== t.lastStringValue;
        }),
        (st.regexp_eatUnicodePropertyValue = function(t) {
          var e = 0;
          for (t.lastStringValue = ''; lt((e = t.current())); )
            (t.lastStringValue += pt(e)), t.advance();
          return '' !== t.lastStringValue;
        }),
        (st.regexp_eatLoneUnicodePropertyNameOrValue = function(t) {
          return this.regexp_eatUnicodePropertyValue(t);
        }),
        (st.regexp_eatCharacterClass = function(t) {
          if (t.eat(91)) {
            if ((t.eat(94), this.regexp_classRanges(t), t.eat(93))) return !0;
            t.raise('Unterminated character class');
          }
          return !1;
        }),
        (st.regexp_classRanges = function(t) {
          for (; this.regexp_eatClassAtom(t); ) {
            var e = t.lastIntValue;
            if (t.eat(45) && this.regexp_eatClassAtom(t)) {
              var n = t.lastIntValue;
              !t.switchU ||
                (-1 !== e && -1 !== n) ||
                t.raise('Invalid character class'),
                -1 !== e &&
                  -1 !== n &&
                  e > n &&
                  t.raise('Range out of order in character class');
            }
          }
        }),
        (st.regexp_eatClassAtom = function(t) {
          var e = t.pos;
          if (t.eat(92)) {
            if (this.regexp_eatClassEscape(t)) return !0;
            if (t.switchU) {
              var n = t.current();
              (99 === n || mt(n)) && t.raise('Invalid class escape'),
                t.raise('Invalid escape');
            }
            t.pos = e;
          }
          var r = t.current();
          return 93 !== r && ((t.lastIntValue = r), t.advance(), !0);
        }),
        (st.regexp_eatClassEscape = function(t) {
          var e = t.pos;
          if (t.eat(98)) return (t.lastIntValue = 8), !0;
          if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
          if (!t.switchU && t.eat(99)) {
            if (this.regexp_eatClassControlLetter(t)) return !0;
            t.pos = e;
          }
          return (
            this.regexp_eatCharacterClassEscape(t) ||
            this.regexp_eatCharacterEscape(t)
          );
        }),
        (st.regexp_eatClassControlLetter = function(t) {
          var e = t.current();
          return !(
            (!dt(e) && 95 !== e) ||
            ((t.lastIntValue = e % 32), t.advance(), 0)
          );
        }),
        (st.regexp_eatHexEscapeSequence = function(t) {
          var e = t.pos;
          if (t.eat(120)) {
            if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
            t.switchU && t.raise('Invalid escape'), (t.pos = e);
          }
          return !1;
        }),
        (st.regexp_eatDecimalDigits = function(t) {
          var e = t.pos,
            n = 0;
          for (t.lastIntValue = 0; dt((n = t.current())); )
            (t.lastIntValue = 10 * t.lastIntValue + (n - 48)), t.advance();
          return t.pos !== e;
        }),
        (st.regexp_eatHexDigits = function(t) {
          var e = t.pos,
            n = 0;
          for (t.lastIntValue = 0; ft((n = t.current())); )
            (t.lastIntValue = 16 * t.lastIntValue + gt(n)), t.advance();
          return t.pos !== e;
        }),
        (st.regexp_eatLegacyOctalEscapeSequence = function(t) {
          if (this.regexp_eatOctalDigit(t)) {
            var e = t.lastIntValue;
            if (this.regexp_eatOctalDigit(t)) {
              var n = t.lastIntValue;
              e <= 3 && this.regexp_eatOctalDigit(t)
                ? (t.lastIntValue = 64 * e + 8 * n + t.lastIntValue)
                : (t.lastIntValue = 8 * e + n);
            } else t.lastIntValue = e;
            return !0;
          }
          return !1;
        }),
        (st.regexp_eatOctalDigit = function(t) {
          var e = t.current();
          return mt(e)
            ? ((t.lastIntValue = e - 48), t.advance(), !0)
            : ((t.lastIntValue = 0), !1);
        }),
        (st.regexp_eatFixedHexDigits = function(t, e) {
          var n = t.pos;
          t.lastIntValue = 0;
          for (var r = 0; r < e; ++r) {
            var i = t.current();
            if (!ft(i)) return (t.pos = n), !1;
            (t.lastIntValue = 16 * t.lastIntValue + gt(i)), t.advance();
          }
          return !0;
        });
      var yt = function(t) {
          (this.type = t.type),
            (this.value = t.value),
            (this.start = t.start),
            (this.end = t.end),
            t.options.locations && (this.loc = new N(t, t.startLoc, t.endLoc)),
            t.options.ranges && (this.range = [t.start, t.end]);
        },
        vt = U.prototype;
      function bt(t) {
        return t <= 65535
          ? String.fromCharCode(t)
          : ((t -= 65536),
            String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
      }
      (vt.next = function() {
        this.options.onToken && this.options.onToken(new yt(this)),
          (this.lastTokEnd = this.end),
          (this.lastTokStart = this.start),
          (this.lastTokEndLoc = this.endLoc),
          (this.lastTokStartLoc = this.startLoc),
          this.nextToken();
      }),
        (vt.getToken = function() {
          return this.next(), new yt(this);
        }),
        'undefined' != typeof Symbol &&
          (vt[Symbol.iterator] = function() {
            var t = this;
            return {
              next: function() {
                var e = t.getToken();
                return { done: e.type === S.eof, value: e };
              },
            };
          }),
        (vt.curContext = function() {
          return this.context[this.context.length - 1];
        }),
        (vt.nextToken = function() {
          var t = this.curContext();
          return (
            (t && t.preserveSpace) || this.skipSpace(),
            (this.start = this.pos),
            this.options.locations && (this.startLoc = this.curPosition()),
            this.pos >= this.input.length
              ? this.finishToken(S.eof)
              : t.override
                ? t.override(this)
                : void this.readToken(this.fullCharCodeAtPos())
          );
        }),
        (vt.readToken = function(t) {
          return f(t, this.options.ecmaVersion >= 6) || 92 === t
            ? this.readWord()
            : this.getTokenFromCode(t);
        }),
        (vt.fullCharCodeAtPos = function() {
          var t = this.input.charCodeAt(this.pos);
          return t <= 55295 || t >= 57344
            ? t
            : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
        }),
        (vt.skipBlockComment = function() {
          var t,
            e = this.options.onComment && this.curPosition(),
            n = this.pos,
            r = this.input.indexOf('*/', (this.pos += 2));
          if (
            (-1 === r && this.raise(this.pos - 2, 'Unterminated comment'),
            (this.pos = r + 2),
            this.options.locations)
          )
            for (
              E.lastIndex = n;
              (t = E.exec(this.input)) && t.index < this.pos;

            )
              ++this.curLine, (this.lineStart = t.index + t[0].length);
          this.options.onComment &&
            this.options.onComment(
              !0,
              this.input.slice(n + 2, r),
              n,
              this.pos,
              e,
              this.curPosition()
            );
        }),
        (vt.skipLineComment = function(t) {
          for (
            var e = this.pos,
              n = this.options.onComment && this.curPosition(),
              r = this.input.charCodeAt((this.pos += t));
            this.pos < this.input.length && !k(r);

          )
            r = this.input.charCodeAt(++this.pos);
          this.options.onComment &&
            this.options.onComment(
              !1,
              this.input.slice(e + t, this.pos),
              e,
              this.pos,
              n,
              this.curPosition()
            );
        }),
        (vt.skipSpace = function() {
          t: for (; this.pos < this.input.length; ) {
            var t = this.input.charCodeAt(this.pos);
            switch (t) {
              case 32:
              case 160:
                ++this.pos;
                break;
              case 13:
                10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
              case 10:
              case 8232:
              case 8233:
                ++this.pos,
                  this.options.locations &&
                    (++this.curLine, (this.lineStart = this.pos));
                break;
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment();
                    break;
                  case 47:
                    this.skipLineComment(2);
                    break;
                  default:
                    break t;
                }
                break;
              default:
                if (
                  !(
                    (t > 8 && t < 14) ||
                    (t >= 5760 && C.test(String.fromCharCode(t)))
                  )
                )
                  break t;
                ++this.pos;
            }
          }
        }),
        (vt.finishToken = function(t, e) {
          (this.end = this.pos),
            this.options.locations && (this.endLoc = this.curPosition());
          var n = this.type;
          (this.type = t), (this.value = e), this.updateContext(n);
        }),
        (vt.readToken_dot = function() {
          var t = this.input.charCodeAt(this.pos + 1);
          if (t >= 48 && t <= 57) return this.readNumber(!0);
          var e = this.input.charCodeAt(this.pos + 2);
          return this.options.ecmaVersion >= 6 && 46 === t && 46 === e
            ? ((this.pos += 3), this.finishToken(S.ellipsis))
            : (++this.pos, this.finishToken(S.dot));
        }),
        (vt.readToken_slash = function() {
          var t = this.input.charCodeAt(this.pos + 1);
          return this.exprAllowed
            ? (++this.pos, this.readRegexp())
            : 61 === t
              ? this.finishOp(S.assign, 2)
              : this.finishOp(S.slash, 1);
        }),
        (vt.readToken_mult_modulo_exp = function(t) {
          var e = this.input.charCodeAt(this.pos + 1),
            n = 1,
            r = 42 === t ? S.star : S.modulo;
          return (
            this.options.ecmaVersion >= 7 &&
              42 === t &&
              42 === e &&
              (++n,
              (r = S.starstar),
              (e = this.input.charCodeAt(this.pos + 2))),
            61 === e ? this.finishOp(S.assign, n + 1) : this.finishOp(r, n)
          );
        }),
        (vt.readToken_pipe_amp = function(t) {
          var e = this.input.charCodeAt(this.pos + 1);
          return e === t
            ? this.finishOp(124 === t ? S.logicalOR : S.logicalAND, 2)
            : 61 === e
              ? this.finishOp(S.assign, 2)
              : this.finishOp(124 === t ? S.bitwiseOR : S.bitwiseAND, 1);
        }),
        (vt.readToken_caret = function() {
          return 61 === this.input.charCodeAt(this.pos + 1)
            ? this.finishOp(S.assign, 2)
            : this.finishOp(S.bitwiseXOR, 1);
        }),
        (vt.readToken_plus_min = function(t) {
          var e = this.input.charCodeAt(this.pos + 1);
          return e === t
            ? 45 !== e ||
              this.inModule ||
              62 !== this.input.charCodeAt(this.pos + 2) ||
              (0 !== this.lastTokEnd &&
                !w.test(this.input.slice(this.lastTokEnd, this.pos)))
              ? this.finishOp(S.incDec, 2)
              : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
            : 61 === e
              ? this.finishOp(S.assign, 2)
              : this.finishOp(S.plusMin, 1);
        }),
        (vt.readToken_lt_gt = function(t) {
          var e = this.input.charCodeAt(this.pos + 1),
            n = 1;
          return e === t
            ? ((n =
                62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2),
              61 === this.input.charCodeAt(this.pos + n)
                ? this.finishOp(S.assign, n + 1)
                : this.finishOp(S.bitShift, n))
            : 33 !== e ||
              60 !== t ||
              this.inModule ||
              45 !== this.input.charCodeAt(this.pos + 2) ||
              45 !== this.input.charCodeAt(this.pos + 3)
              ? (61 === e && (n = 2), this.finishOp(S.relational, n))
              : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
        }),
        (vt.readToken_eq_excl = function(t) {
          var e = this.input.charCodeAt(this.pos + 1);
          return 61 === e
            ? this.finishOp(
                S.equality,
                61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2
              )
            : 61 === t && 62 === e && this.options.ecmaVersion >= 6
              ? ((this.pos += 2), this.finishToken(S.arrow))
              : this.finishOp(61 === t ? S.eq : S.prefix, 1);
        }),
        (vt.getTokenFromCode = function(t) {
          switch (t) {
            case 46:
              return this.readToken_dot();
            case 40:
              return ++this.pos, this.finishToken(S.parenL);
            case 41:
              return ++this.pos, this.finishToken(S.parenR);
            case 59:
              return ++this.pos, this.finishToken(S.semi);
            case 44:
              return ++this.pos, this.finishToken(S.comma);
            case 91:
              return ++this.pos, this.finishToken(S.bracketL);
            case 93:
              return ++this.pos, this.finishToken(S.bracketR);
            case 123:
              return ++this.pos, this.finishToken(S.braceL);
            case 125:
              return ++this.pos, this.finishToken(S.braceR);
            case 58:
              return ++this.pos, this.finishToken(S.colon);
            case 63:
              return ++this.pos, this.finishToken(S.question);
            case 96:
              if (this.options.ecmaVersion < 6) break;
              return ++this.pos, this.finishToken(S.backQuote);
            case 48:
              var e = this.input.charCodeAt(this.pos + 1);
              if (120 === e || 88 === e) return this.readRadixNumber(16);
              if (this.options.ecmaVersion >= 6) {
                if (111 === e || 79 === e) return this.readRadixNumber(8);
                if (98 === e || 66 === e) return this.readRadixNumber(2);
              }
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return this.readNumber(!1);
            case 34:
            case 39:
              return this.readString(t);
            case 47:
              return this.readToken_slash();
            case 37:
            case 42:
              return this.readToken_mult_modulo_exp(t);
            case 124:
            case 38:
              return this.readToken_pipe_amp(t);
            case 94:
              return this.readToken_caret();
            case 43:
            case 45:
              return this.readToken_plus_min(t);
            case 60:
            case 62:
              return this.readToken_lt_gt(t);
            case 61:
            case 33:
              return this.readToken_eq_excl(t);
            case 126:
              return this.finishOp(S.prefix, 1);
          }
          this.raise(this.pos, "Unexpected character '" + bt(t) + "'");
        }),
        (vt.finishOp = function(t, e) {
          var n = this.input.slice(this.pos, this.pos + e);
          return (this.pos += e), this.finishToken(t, n);
        }),
        (vt.readRegexp = function() {
          for (var t, e, n = this.pos; ; ) {
            this.pos >= this.input.length &&
              this.raise(n, 'Unterminated regular expression');
            var r = this.input.charAt(this.pos);
            if (
              (w.test(r) && this.raise(n, 'Unterminated regular expression'), t)
            )
              t = !1;
            else {
              if ('[' === r) e = !0;
              else if (']' === r && e) e = !1;
              else if ('/' === r && !e) break;
              t = '\\' === r;
            }
            ++this.pos;
          }
          var i = this.input.slice(n, this.pos);
          ++this.pos;
          var a = this.pos,
            s = this.readWord1();
          this.containsEsc && this.unexpected(a);
          var o = this.regexpState || (this.regexpState = new ot(this));
          o.reset(n, i, s),
            this.validateRegExpFlags(o),
            this.validateRegExpPattern(o);
          var p = null;
          try {
            p = new RegExp(i, s);
          } catch (t) {}
          return this.finishToken(S.regexp, { pattern: i, flags: s, value: p });
        }),
        (vt.readInt = function(t, e) {
          for (
            var n = this.pos, r = 0, i = 0, a = null == e ? 1 / 0 : e;
            i < a;
            ++i
          ) {
            var s,
              o = this.input.charCodeAt(this.pos);
            if (
              (s =
                o >= 97
                  ? o - 97 + 10
                  : o >= 65
                    ? o - 65 + 10
                    : o >= 48 && o <= 57
                      ? o - 48
                      : 1 / 0) >= t
            )
              break;
            ++this.pos, (r = r * t + s);
          }
          return this.pos === n || (null != e && this.pos - n !== e) ? null : r;
        }),
        (vt.readRadixNumber = function(t) {
          this.pos += 2;
          var e = this.readInt(t);
          return (
            null == e &&
              this.raise(this.start + 2, 'Expected number in radix ' + t),
            f(this.fullCharCodeAtPos()) &&
              this.raise(this.pos, 'Identifier directly after number'),
            this.finishToken(S.num, e)
          );
        }),
        (vt.readNumber = function(t) {
          var e = this.pos;
          t || null !== this.readInt(10) || this.raise(e, 'Invalid number');
          var n = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
          n && this.strict && this.raise(e, 'Invalid number'),
            n && /[89]/.test(this.input.slice(e, this.pos)) && (n = !1);
          var r = this.input.charCodeAt(this.pos);
          46 !== r ||
            n ||
            (++this.pos,
            this.readInt(10),
            (r = this.input.charCodeAt(this.pos))),
            (69 !== r && 101 !== r) ||
              n ||
              ((43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r) ||
                ++this.pos,
              null === this.readInt(10) && this.raise(e, 'Invalid number')),
            f(this.fullCharCodeAtPos()) &&
              this.raise(this.pos, 'Identifier directly after number');
          var i = this.input.slice(e, this.pos),
            a = n ? parseInt(i, 8) : parseFloat(i);
          return this.finishToken(S.num, a);
        }),
        (vt.readCodePoint = function() {
          var t;
          if (123 === this.input.charCodeAt(this.pos)) {
            this.options.ecmaVersion < 6 && this.unexpected();
            var e = ++this.pos;
            (t = this.readHexChar(
              this.input.indexOf('}', this.pos) - this.pos
            )),
              ++this.pos,
              t > 1114111 &&
                this.invalidStringToken(e, 'Code point out of bounds');
          } else t = this.readHexChar(4);
          return t;
        }),
        (vt.readString = function(t) {
          for (var e = '', n = ++this.pos; ; ) {
            this.pos >= this.input.length &&
              this.raise(this.start, 'Unterminated string constant');
            var r = this.input.charCodeAt(this.pos);
            if (r === t) break;
            92 === r
              ? ((e += this.input.slice(n, this.pos)),
                (e += this.readEscapedChar(!1)),
                (n = this.pos))
              : (k(r, this.options.ecmaVersion >= 10) &&
                  this.raise(this.start, 'Unterminated string constant'),
                ++this.pos);
          }
          return (
            (e += this.input.slice(n, this.pos++)),
            this.finishToken(S.string, e)
          );
        });
      var _t = {};
      (vt.tryReadTemplateToken = function() {
        this.inTemplateElement = !0;
        try {
          this.readTmplToken();
        } catch (t) {
          if (t !== _t) throw t;
          this.readInvalidTemplateToken();
        }
        this.inTemplateElement = !1;
      }),
        (vt.invalidStringToken = function(t, e) {
          if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw _t;
          this.raise(t, e);
        }),
        (vt.readTmplToken = function() {
          for (var t = '', e = this.pos; ; ) {
            this.pos >= this.input.length &&
              this.raise(this.start, 'Unterminated template');
            var n = this.input.charCodeAt(this.pos);
            if (
              96 === n ||
              (36 === n && 123 === this.input.charCodeAt(this.pos + 1))
            )
              return this.pos !== this.start ||
                (this.type !== S.template && this.type !== S.invalidTemplate)
                ? ((t += this.input.slice(e, this.pos)),
                  this.finishToken(S.template, t))
                : 36 === n
                  ? ((this.pos += 2), this.finishToken(S.dollarBraceL))
                  : (++this.pos, this.finishToken(S.backQuote));
            if (92 === n)
              (t += this.input.slice(e, this.pos)),
                (t += this.readEscapedChar(!0)),
                (e = this.pos);
            else if (k(n)) {
              switch (((t += this.input.slice(e, this.pos)), ++this.pos, n)) {
                case 13:
                  10 === this.input.charCodeAt(this.pos) && ++this.pos;
                case 10:
                  t += '\n';
                  break;
                default:
                  t += String.fromCharCode(n);
              }
              this.options.locations &&
                (++this.curLine, (this.lineStart = this.pos)),
                (e = this.pos);
            } else ++this.pos;
          }
        }),
        (vt.readInvalidTemplateToken = function() {
          for (; this.pos < this.input.length; this.pos++)
            switch (this.input[this.pos]) {
              case '\\':
                ++this.pos;
                break;
              case '$':
                if ('{' !== this.input[this.pos + 1]) break;
              case '`':
                return this.finishToken(
                  S.invalidTemplate,
                  this.input.slice(this.start, this.pos)
                );
            }
          this.raise(this.start, 'Unterminated template');
        }),
        (vt.readEscapedChar = function(t) {
          var e = this.input.charCodeAt(++this.pos);
          switch ((++this.pos, e)) {
            case 110:
              return '\n';
            case 114:
              return '\r';
            case 120:
              return String.fromCharCode(this.readHexChar(2));
            case 117:
              return bt(this.readCodePoint());
            case 116:
              return '\t';
            case 98:
              return '\b';
            case 118:
              return '\v';
            case 102:
              return '\f';
            case 13:
              10 === this.input.charCodeAt(this.pos) && ++this.pos;
            case 10:
              return (
                this.options.locations &&
                  ((this.lineStart = this.pos), ++this.curLine),
                ''
              );
            default:
              if (e >= 48 && e <= 55) {
                var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                  r = parseInt(n, 8);
                return (
                  r > 255 && ((n = n.slice(0, -1)), (r = parseInt(n, 8))),
                  (this.pos += n.length - 1),
                  (e = this.input.charCodeAt(this.pos)),
                  ('0' === n && 56 !== e && 57 !== e) ||
                    (!this.strict && !t) ||
                    this.invalidStringToken(
                      this.pos - 1 - n.length,
                      t
                        ? 'Octal literal in template string'
                        : 'Octal literal in strict mode'
                    ),
                  String.fromCharCode(r)
                );
              }
              return String.fromCharCode(e);
          }
        }),
        (vt.readHexChar = function(t) {
          var e = this.pos,
            n = this.readInt(16, t);
          return (
            null === n &&
              this.invalidStringToken(e, 'Bad character escape sequence'),
            n
          );
        }),
        (vt.readWord1 = function() {
          this.containsEsc = !1;
          for (
            var t = '', e = !0, n = this.pos, r = this.options.ecmaVersion >= 6;
            this.pos < this.input.length;

          ) {
            var i = this.fullCharCodeAtPos();
            if (g(i, r)) this.pos += i <= 65535 ? 1 : 2;
            else {
              if (92 !== i) break;
              (this.containsEsc = !0), (t += this.input.slice(n, this.pos));
              var a = this.pos;
              117 !== this.input.charCodeAt(++this.pos) &&
                this.invalidStringToken(
                  this.pos,
                  'Expecting Unicode escape sequence \\uXXXX'
                ),
                ++this.pos;
              var s = this.readCodePoint();
              (e ? f : g)(s, r) ||
                this.invalidStringToken(a, 'Invalid Unicode escape'),
                (t += bt(s)),
                (n = this.pos);
            }
            e = !1;
          }
          return t + this.input.slice(n, this.pos);
        }),
        (vt.readWord = function() {
          var t = this.readWord1(),
            e = S.name;
          return (
            this.keywords.test(t) &&
              (this.containsEsc &&
                this.raiseRecoverable(
                  this.start,
                  'Escape sequence in keyword ' + t
                ),
              (e = _[t])),
            this.finishToken(e, t)
          );
        });
      var xt,
        St,
        wt,
        Et = '5.7.2';
      function kt(t, e) {
        return new U(e, t).parse();
      }
      function Ct(t, e, n) {
        var r = new U(n, t, e);
        return r.nextToken(), r.parseExpression();
      }
      function Tt(t, e) {
        return new U(e, t);
      }
      function At(t, e, n) {
        (xt = t), (St = e), (wt = n);
      }
    },
    function(t, e, n) {
      n(164), (t.exports = n(16).Object.assign);
    },
  ]),
]);
//# sourceMappingURL=0-28873b08a6fb20405fc0.js.map
