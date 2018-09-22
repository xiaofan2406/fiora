(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    153: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return l;
        });
      var r = n(163),
        a = n.n(r),
        i = n(0),
        o = n.n(i),
        s = n(166),
        u = n(172);
      t.default = function(e) {
        var t = e.components,
          n = a()(e, ['components']);
        return o.a.createElement(
          s.MDXTag,
          { name: 'wrapper', Layout: u.a, layoutProps: n, components: t },
          o.a.createElement(
            s.MDXTag,
            { name: 'h2', components: t },
            'placeholder'
          )
        );
      };
      var l = {};
    },
    160: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'graphql', function() {
          return h;
        }),
        n.d(t, 'StaticQueryContext', function() {
          return f;
        }),
        n.d(t, 'StaticQuery', function() {
          return m;
        });
      var r = n(0),
        a = n.n(r),
        i = n(8),
        o = n.n(i),
        s = n(157),
        u = n.n(s);
      n.d(t, 'Link', function() {
        return u.a;
      }),
        n.d(t, 'withPrefix', function() {
          return s.withPrefix;
        }),
        n.d(t, 'navigate', function() {
          return s.navigate;
        }),
        n.d(t, 'push', function() {
          return s.push;
        }),
        n.d(t, 'replace', function() {
          return s.replace;
        }),
        n.d(t, 'navigateTo', function() {
          return s.navigateTo;
        });
      var l = n(33);
      n.d(t, 'waitForRouteChange', function() {
        return l.c;
      });
      var c = n(162),
        d = n.n(c);
      n.d(t, 'PageRenderer', function() {
        return d.a;
      });
      var p = n(34);
      n.d(t, 'parsePath', function() {
        return p.a;
      });
      var f = a.a.createContext({}),
        m = function(e) {
          return a.a.createElement(f.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : a.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
      m.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      };
    },
    162: function(e, t, n) {
      var r;
      e.exports = ((r = n(171)) && r.default) || r;
    },
    170: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Fiora',
              description: 'Fiora documentation website',
              keywords: ['fiora', 'react', 'documentation', 'forms'],
            },
          },
        },
      };
    },
    171: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        i = n(8),
        o = n.n(i),
        s = n(37),
        u = n(1),
        l = function(e) {
          var t = e.location,
            n = u.default.getResourcesForPathname(t.pathname);
          return a.a.createElement(s.a, { location: t, pageResources: n });
        };
      (l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = l);
    },
    172: function(e, t, n) {
      'use strict';
      var r = n(170),
        a = n(0),
        i = n.n(a),
        o = n(8),
        s = n.n(o),
        u = n(160),
        l = n(161),
        c = n(166),
        d = n(173),
        p = n.n(d);
      function f(e) {
        var t = e.metadata;
        return i.a.createElement(
          p.a,
          {
            title: t.title,
            meta: [
              { name: 'description', content: t.description },
              { name: 'keywords', content: t.keywords.join(', ') },
            ],
          },
          i.a.createElement('html', { lang: 'en' })
        );
      }
      f.propTypes = {
        metadata: s.a.shape({
          title: s.a.string.isRequired,
          description: s.a.string.isRequired,
          keywords: s.a.array.isRequired,
        }).isRequired,
      };
      var m = f,
        h = Object(l.a)(
          'position:fixed;left:0;width:240px;height:100vh;background:#f04242;display:flex;flex-direction:column;'
        ),
        v = Object(l.a)('flex:1;'),
        g = Object(l.a)(
          'margin-top:12px;font-size:54px;color:#fff;text-align:center;cursor:default;'
        ),
        b = Object(l.a)(
          'color:#fff;display:block;font-size:18px;font-weight:200;padding:4px 24px;text-decoration:none;&:hover{background-color:rgba(255,255,255,0.24);}'
        ),
        y = { backgroundColor: ' rgba(255, 255, 255, 0.24)' };
      function x(e) {
        var t = e.siteTitle;
        return i.a.createElement(
          'div',
          { className: h },
          i.a.createElement(
            'div',
            { className: v },
            i.a.createElement('h1', { className: g }, t),
            i.a.createElement(
              u.Link,
              { to: '/', className: b, activeStyle: y },
              'Get Started'
            ),
            i.a.createElement(
              u.Link,
              { to: '/tutorial', className: b, activeStyle: y },
              'Tutorial'
            ),
            i.a.createElement(
              u.Link,
              { to: '/api', className: b, activeStyle: y },
              'API'
            )
          ),
          i.a.createElement('div', null, 'footer')
        );
      }
      x.propTypes = { siteTitle: s.a.string.isRequired };
      var E = x,
        V = (n(174), n(12)),
        k = n.n(V),
        S = n(175),
        w = (n(164), n(163)),
        F = n.n(w),
        j = n(167),
        O = n.n(j),
        T = (n(52), n(83), n(25), n(85), n(53), n(165), n(168)),
        R = n.n(T),
        q = (n(158), n(51), n(159), n(82), n(81), n(169), n(15)),
        P = n.n(q),
        C = function(e) {
          return Object.keys(e).reduce(function(t, n) {
            var r;
            return P()({}, t, (((r = {})[n] = e[n].value), r));
          }, {});
        },
        N = function(e, t) {
          return t.fields[e] ? t.fields[e].value : void 0;
        },
        I = function(e) {
          return e
            ? Object.keys(e).reduce(function(t, n) {
                var r;
                return P()({}, t, (((r = {})[n] = { value: e[n] }), r));
              }, {})
            : {};
        },
        M = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).state = {
                isValidating: !1,
              }),
              (t.updateValue = function(e) {
                var n = t.props;
                (0, n.updateValue)(n.name, e);
              }),
              (t.validator = (function() {
                var e = R()(
                  O.a.mark(function e(n) {
                    var r, a;
                    return O.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(r = t.props.onValidate)) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                t.setState({ isValidating: !0 }),
                                (e.next = 6),
                                r(n)
                              );
                            case 6:
                              return (
                                (a = e.sent),
                                t.setState({ isValidating: !1 }),
                                e.abrupt('return', a)
                              );
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(2)),
                                t.setState({ isValidating: !1 });
                            case 14:
                              return e.abrupt('return', null);
                            case 15:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 11]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.validate = function() {
                var e = t.props,
                  n = e.name;
                (0, e.validateField)(n);
              }),
              t
            );
          }
          k()(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function(e, t) {
              var n = this,
                r = !1;
              return (
                Object.keys(e).forEach(function(t) {
                  e[t] !== n.props[t] &&
                    (console.log('[FioraField]: Props ' + t), (r = !0));
                }),
                Object.keys(t).forEach(function(e) {
                  t[e] !== n.state[e] &&
                    (console.log('[FioraField]: State ' + e), (r = !0));
                }),
                r
              );
            }),
            (n.componentDidMount = function() {
              var e = this.props,
                t = e.name;
              (0, e.registerField)(t, { validator: this.validator });
            }),
            (n.render = function() {
              var e = this.props,
                t = e.children,
                n = e.value,
                r = e.error,
                a = e.isTouched,
                i = this.state.isValidating;
              return (
                console.log('[FioraField]: render'),
                t({
                  value: n,
                  error: r,
                  isTouched: !!a,
                  isValidating: i,
                  updateValue: this.updateValue,
                  validate: this.validate,
                })
              );
            }),
            t
          );
        })(a.Component);
      M.defaultProps = { value: '' };
      var L = M,
        D = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            k()(t, e),
            (t.prototype.render = function() {
              var e = this.props;
              return (0, e.children)({
                error: e.error,
                isValidating: e.isValidating,
                isSubmitting: e.isSubmitting,
                isTouched: e.isTouched,
                isValid: e.isValid,
              });
            }),
            t
          );
        })(a.PureComponent),
        G = function() {
          var e = a.createContext(),
            t = e.Provider,
            n = e.Consumer;
          return {
            Form: (function(e) {
              return (function(t) {
                function n() {
                  for (
                    var e, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(r)) ||
                      this).fieldsInfo = {}),
                    (e.registerField = function(t, n) {
                      e.fieldsInfo[t] || (e.fieldsInfo[t] = n);
                    }),
                    (e.updateValue = function(t, n) {
                      e.setState(function(e) {
                        var r;
                        return e.fields[t] && e.fields[t].value === n
                          ? null
                          : {
                              fields: P()(
                                {},
                                e.fields,
                                ((r = {}),
                                (r[t] = P()({}, e.fields[t], {
                                  value: n,
                                  error: null,
                                  isTouched: !0,
                                })),
                                r)
                              ),
                            };
                      });
                    }),
                    (e.validateField = function(t) {
                      e.setState(function(n) {
                        return (
                          e.fieldsInfo[t].validator(N(t, n)).then(function(n) {
                            e.setState(function(e) {
                              var r;
                              return !n ||
                                (e.fields[t] && e.fields[t].error === n)
                                ? null
                                : {
                                    fields: P()(
                                      {},
                                      e.fields,
                                      ((r = {}),
                                      (r[t] = P()({}, e.fields[t], {
                                        error: n,
                                        isTouched: !0,
                                      })),
                                      r)
                                    ),
                                  };
                            });
                          }),
                          null
                        );
                      });
                    }),
                    (e._updateErrors = function(t) {
                      var n = !1,
                        r = t || {},
                        a = {
                          fields: e.state.fields,
                          isSubmitting: !1,
                          isValidating: !1,
                        };
                      return (
                        Object.keys(r)
                          .filter(function(e) {
                            return !!r[e];
                          })
                          .forEach(function(t) {
                            var i;
                            'form' === t &&
                              e.state.error !== r[t] &&
                              ((n = !0), (a = P()({}, a, { error: r[t] }))),
                              'form' === t ||
                                (e.state.fields[t] &&
                                  e.state.fields[t].error === r[t]) ||
                                ((n = !0),
                                (a = P()({}, a, {
                                  fields: P()(
                                    {},
                                    a.fields,
                                    ((i = {}),
                                    (i[t] = P()({}, e.state.fields[t], {
                                      error: r[t],
                                      isTouched: !0,
                                    })),
                                    i)
                                  ),
                                })));
                          }),
                        n && e.setState(a),
                        n
                      );
                    }),
                    (e.handleSubmit = ((i = R()(
                      O.a.mark(function t(n) {
                        var r, a, i, o, s, u, l, c, d, p, f;
                        return O.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (n.preventDefault(),
                                    (r = e.props),
                                    (a = r.onSubmit),
                                    (i = r.onValidate),
                                    (o = e.state.fields),
                                    e.setState({
                                      isSubmitting: !0,
                                      isValidating: !0,
                                    }),
                                    !Object.keys(o).some(function(e) {
                                      return o[e].error;
                                    }))
                                  ) {
                                    t.next = 8;
                                    break;
                                  }
                                  return (
                                    e.setState({
                                      isSubmitting: !1,
                                      isValidating: !1,
                                    }),
                                    t.abrupt('return', !1)
                                  );
                                case 8:
                                  return (
                                    (s = Object.keys(e.fieldsInfo)),
                                    (t.next = 11),
                                    Promise.all(
                                      s.map(function(t) {
                                        return e.fieldsInfo[t].validator(
                                          N(t, e.state)
                                        );
                                      })
                                    )
                                  );
                                case 11:
                                  if (
                                    ((u = t.sent),
                                    (l = s.reduce(function(e, t, n) {
                                      var r;
                                      return P()(
                                        {},
                                        e,
                                        (((r = {})[t] = u[n]), r)
                                      );
                                    }, {})),
                                    !e._updateErrors(l))
                                  ) {
                                    t.next = 16;
                                    break;
                                  }
                                  return t.abrupt('return', !1);
                                case 16:
                                  if (((c = C(o)), !i)) {
                                    t.next = 26;
                                    break;
                                  }
                                  return (t.next = 20), i(c);
                                case 20:
                                  if (((d = t.sent), !e._updateErrors(d))) {
                                    t.next = 24;
                                    break;
                                  }
                                  return t.abrupt('return', !1);
                                case 24:
                                  t.next = 27;
                                  break;
                                case 26:
                                  e.setState({ isValidating: !1 });
                                case 27:
                                  return (t.next = 29), a(c);
                                case 29:
                                  return (
                                    (p = t.sent),
                                    (f = e._updateErrors(p)),
                                    t.abrupt('return', f)
                                  );
                                case 32:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function(e) {
                      return i.apply(this, arguments);
                    })),
                    (e.handleReset = function() {
                      var t = e.props,
                        n = t.initialValues,
                        r = t.onReset;
                      e.setState({ fields: I(n) }), r && r();
                    }),
                    (e.state = {
                      error: null,
                      isValidating: !1,
                      isSubmitting: !1,
                      fields: I(e.props.initialValues),
                      updateValue: e.updateValue,
                      registerField: e.registerField,
                      validateField: e.validateField,
                    }),
                    e
                  );
                  var i;
                }
                k()(n, t);
                var r = n.prototype;
                return (
                  (r.shouldComponentUpdate = function(e, t) {
                    var n = this;
                    return (
                      Object.keys(e).forEach(function(t) {
                        e[t] !== n.props[t] &&
                          console.log('[Form]: Props ' + t);
                      }),
                      Object.keys(t).forEach(function(e) {
                        t[e] !== n.state[e] &&
                          console.log('[Form]: State ' + e);
                      }),
                      !0
                    );
                  }),
                  (r.render = function() {
                    var t = this.props,
                      n = t.children,
                      r = (t.onSubmit,
                      t.onReset,
                      t.onValidate,
                      t.initialValues,
                      F()(t, [
                        'children',
                        'onSubmit',
                        'onReset',
                        'onValidate',
                        'initialValues',
                      ]));
                    return (
                      console.log('[Form]: render'),
                      a.createElement(
                        e,
                        { value: this.state },
                        a.createElement(
                          'form',
                          Object.assign({}, r, {
                            onSubmit: this.handleSubmit,
                            onReset: this.handleReset,
                          }),
                          n
                        )
                      )
                    );
                  }),
                  n
                );
              })(a.Component);
            })(t),
            Field: (function(e) {
              return function(t) {
                var n = t.name,
                  r = t.onValidate,
                  i = t.children;
                return a.createElement(e, null, function(e) {
                  var t = e.fields,
                    o = e.registerField,
                    s = e.updateValue,
                    u = e.validateField;
                  return a.createElement(
                    L,
                    Object.assign(
                      {
                        name: n,
                        onValidate: r,
                        updateValue: s,
                        registerField: o,
                        validateField: u,
                      },
                      t[n]
                    ),
                    i
                  );
                });
              };
            })(n),
            FormMeta: (function(e) {
              return function(t) {
                var n = t.children;
                return a.createElement(e, null, function(e) {
                  var t = e.fields,
                    r = e.error,
                    i = e.isValidating,
                    o = e.isSubmitting;
                  return a.createElement(
                    D,
                    {
                      error: r,
                      isValidating: i,
                      isSubmitting: o,
                      isTouched: Object.keys(t).some(function(e) {
                        return t[e].isTouched;
                      }),
                      isValid: !Object.keys(t).some(function(e) {
                        return t[e].error;
                      }),
                    },
                    n
                  );
                });
              };
            })(n),
          };
        },
        _ = Object(l.a)(
          'display:flex;justify-content:space-between;margin-bottom:24px;'
        ),
        A = Object(l.a)('width:480px;padding:24px;position:relative;'),
        Q = Object(l.a)('padding:24px;width:396px;background-color:#fafafa;'),
        U = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).instance = G()),
              t
            );
          }
          return (
            k()(t, e),
            (t.prototype.render = function() {
              var e = this.props.children,
                t =
                  e.props.props && !e.props.props.className.endsWith('-static');
              return i.a.createElement(
                S.d,
                {
                  code: e.props.children,
                  scope: this.instance,
                  mountStylesheet: !1,
                  className: t ? _ : '',
                },
                i.a.createElement(S.a, {
                  contentEditable: t,
                  className: t ? A : '',
                }),
                t ? i.a.createElement(S.b, null) : null,
                t ? i.a.createElement(S.c, { className: Q }) : null
              );
            }),
            t
          );
        })(i.a.Component);
      U.propTypes = { children: s.a.node.isRequired };
      var X = U,
        z = Object(l.a)(),
        J = Object(l.a)('margin-left:240px;'),
        W = Object(l.a)(
          'margin:auto;width:1020px;padding:36px 72px 72px 72px;'
        );
      function B(e) {
        var t = e.children;
        return i.a.createElement(
          u.StaticQuery,
          { query: '2913518534', data: r },
          function(e) {
            var n = e.site;
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(m, { metadata: n.siteMetadata }),
              i.a.createElement(
                'div',
                { className: z },
                i.a.createElement(E, { siteTitle: n.siteMetadata.title }),
                i.a.createElement(
                  'main',
                  { className: J },
                  i.a.createElement(
                    c.MDXProvider,
                    { components: { pre: X } },
                    i.a.createElement('section', { className: W }, t)
                  )
                )
              )
            );
          }
        );
      }
      B.propTypes = { children: s.a.node.isRequired };
      var H = B;
      n.d(t, 'a', function() {
        return H;
      });
    },
  },
]);
//# sourceMappingURL=component---src-pages-api-mdx-5970f876b42a1a1a6dd2.js.map
