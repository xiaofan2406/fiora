(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    155: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '_frontmatter', function() {
          return u;
        });
      var a = n(163),
        r = n.n(a),
        i = n(0),
        o = n.n(i),
        s = n(166),
        l = n(172);
      t.default = function(e) {
        var t = e.components,
          n = r()(e, ['components']);
        return o.a.createElement(
          s.MDXTag,
          { name: 'wrapper', Layout: l.a, layoutProps: n, components: t },
          o.a.createElement(
            s.MDXTag,
            { name: 'h2', components: t },
            'Tutorial'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            'This tutorial will demonstrate how to build a simple user registration form with Fiora.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'h4', components: t },
            'Create a form'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            'First thing we will need to do is to import the factory function and create an instance of the fiora form.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'pre', components: t },
            o.a.createElement(
              s.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { className: 'language-js-static' },
              },
              "import createFiora from 'fiora';\n\nconst { Form, Field } = createFiora();\n"
            )
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'Form'
            ),
            ' and ',
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'Field'
            ),
            ' are the two essential components we need to start building.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'h4', components: t },
            'Add a username field'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            'Now lets add a username field, by simply using the Field component with a render function.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'pre', components: t },
            o.a.createElement(
              s.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { className: 'language-jsx' },
              },
              '<Form>\n  <Field name="username">\n    {({ value, updateValue }) =>\n      <>\n        <label>Username: </label>\n        <input\n          type="text"\n          value={value}\n          onChange={({ target: { value } }) => {\n            updateValue(value); // updates the value\n          }}\n        />\n      </>\n    }\n  </Field>\n</Form>\n'
            )
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            'To render a simplest field, you will want to use ',
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'value'
            ),
            ' together with ',
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'updateValue'
            ),
            '.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            'The ',
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'updateValue'
            ),
            ' function is expecting a param as the new value to update the field with.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'h4', components: t },
            'Add validation to the field'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            "Now we have the username field in place, we can add some validation to it. For now let's just disallow all usernames with length less than 5 characters, and we can specifify that we want the validation to be trigger whenever the value is changed."
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'p', components: t },
            'To do this, we will just use the ',
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'onValidate'
            ),
            ' prop on the Field component, and use the ',
            o.a.createElement(
              s.MDXTag,
              { name: 'inlineCode', components: t, parentName: 'p' },
              'validate'
            ),
            ' render prop.'
          ),
          o.a.createElement(
            s.MDXTag,
            { name: 'pre', components: t },
            o.a.createElement(
              s.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { className: 'language-jsx' },
              },
              '<Form>\n  <Field\n    name="username"\n    onValidate={username =>\n      username.length < 5 ? \'Invalid username\' : null\n    }\n  >\n    {({ value, updateValue, validate }) => (\n      <>\n        <label>Username: </label>\n        <input\n          type="text"\n          value={value}\n          onChange={({ target: { value } }) => {\n            updateValue(value); // updates the value\n            validate(); // triggers the validation\n          }}\n        />\n      </>\n    )}\n  </Field>\n</Form>\n'
            )
          )
        );
      };
      var u = {};
    },
    160: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'graphql', function() {
          return h;
        }),
        n.d(t, 'StaticQueryContext', function() {
          return m;
        }),
        n.d(t, 'StaticQuery', function() {
          return f;
        });
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        s = n(157),
        l = n.n(s);
      n.d(t, 'Link', function() {
        return l.a;
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
      var u = n(33);
      n.d(t, 'waitForRouteChange', function() {
        return u.c;
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
      var m = r.a.createContext({}),
        f = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
      f.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      };
    },
    162: function(e, t, n) {
      var a;
      e.exports = ((a = n(171)) && a.default) || a;
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
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        s = n(37),
        l = n(1),
        u = function(e) {
          var t = e.location,
            n = l.default.getResourcesForPathname(t.pathname);
          return r.a.createElement(s.a, { location: t, pageResources: n });
        };
      (u.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = u);
    },
    172: function(e, t, n) {
      'use strict';
      var a = n(170),
        r = n(0),
        i = n.n(r),
        o = n(8),
        s = n.n(o),
        l = n(160),
        u = n(161),
        c = n(166),
        d = n(173),
        p = n.n(d);
      function m(e) {
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
      m.propTypes = {
        metadata: s.a.shape({
          title: s.a.string.isRequired,
          description: s.a.string.isRequired,
          keywords: s.a.array.isRequired,
        }).isRequired,
      };
      var f = m,
        h = Object(u.a)(
          'position:fixed;left:0;width:240px;height:100vh;background:#f04242;display:flex;flex-direction:column;'
        ),
        g = Object(u.a)('flex:1;'),
        v = Object(u.a)(
          'margin-top:12px;font-size:54px;color:#fff;text-align:center;cursor:default;'
        ),
        b = Object(u.a)(
          'color:#fff;display:block;font-size:18px;font-weight:200;padding:4px 24px;text-decoration:none;&:hover{background-color:rgba(255,255,255,0.24);}'
        ),
        y = { backgroundColor: ' rgba(255, 255, 255, 0.24)' };
      function E(e) {
        var t = e.siteTitle;
        return i.a.createElement(
          'div',
          { className: h },
          i.a.createElement(
            'div',
            { className: g },
            i.a.createElement('h1', { className: v }, t),
            i.a.createElement(
              l.Link,
              { to: '/', className: b, activeStyle: y },
              'Get Started'
            ),
            i.a.createElement(
              l.Link,
              { to: '/tutorial', className: b, activeStyle: y },
              'Tutorial'
            ),
            i.a.createElement(
              l.Link,
              { to: '/api', className: b, activeStyle: y },
              'API'
            )
          ),
          i.a.createElement('div', null, 'footer')
        );
      }
      E.propTypes = { siteTitle: s.a.string.isRequired };
      var w = E,
        T = (n(174), n(12)),
        x = n.n(T),
        F = n(175),
        V = (n(164), n(163)),
        k = n.n(V),
        S = n(167),
        M = n.n(S),
        j = (n(52), n(83), n(25), n(85), n(53), n(165), n(168)),
        D = n.n(j),
        N = (n(158), n(51), n(159), n(82), n(81), n(169), n(15)),
        X = n.n(N),
        C = function(e) {
          return Object.keys(e).reduce(function(t, n) {
            var a;
            return X()({}, t, (((a = {})[n] = e[n].value), a));
          }, {});
        },
        O = function(e, t) {
          return t.fields[e] ? t.fields[e].value : void 0;
        },
        R = function(e) {
          return e
            ? Object.keys(e).reduce(function(t, n) {
                var a;
                return X()({}, t, (((a = {})[n] = { value: e[n] }), a));
              }, {})
            : {};
        },
        q = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), r = 0;
              r < n;
              r++
            )
              a[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).state = {
                isValidating: !1,
              }),
              (t.updateValue = function(e) {
                var n = t.props;
                (0, n.updateValue)(n.name, e);
              }),
              (t.validator = (function() {
                var e = D()(
                  M.a.mark(function e(n) {
                    var a, r;
                    return M.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(a = t.props.onValidate)) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                t.setState({ isValidating: !0 }),
                                (e.next = 6),
                                a(n)
                              );
                            case 6:
                              return (
                                (r = e.sent),
                                t.setState({ isValidating: !1 }),
                                e.abrupt('return', r)
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
          x()(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function(e, t) {
              var n = this,
                a = !1;
              return (
                Object.keys(e).forEach(function(t) {
                  e[t] !== n.props[t] &&
                    (console.log('[FioraField]: Props ' + t), (a = !0));
                }),
                Object.keys(t).forEach(function(e) {
                  t[e] !== n.state[e] &&
                    (console.log('[FioraField]: State ' + e), (a = !0));
                }),
                a
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
                a = e.error,
                r = e.isTouched,
                i = this.state.isValidating;
              return (
                console.log('[FioraField]: render'),
                t({
                  value: n,
                  error: a,
                  isTouched: !!r,
                  isValidating: i,
                  updateValue: this.updateValue,
                  validate: this.validate,
                })
              );
            }),
            t
          );
        })(r.Component);
      q.defaultProps = { value: '' };
      var P = q,
        I = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            x()(t, e),
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
        })(r.PureComponent),
        A = function() {
          var e = r.createContext(),
            t = e.Provider,
            n = e.Consumer;
          return {
            Form: (function(e) {
              return (function(t) {
                function n() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(a)) ||
                      this).fieldsInfo = {}),
                    (e.registerField = function(t, n) {
                      e.fieldsInfo[t] || (e.fieldsInfo[t] = n);
                    }),
                    (e.updateValue = function(t, n) {
                      e.setState(function(e) {
                        var a;
                        return e.fields[t] && e.fields[t].value === n
                          ? null
                          : {
                              fields: X()(
                                {},
                                e.fields,
                                ((a = {}),
                                (a[t] = X()({}, e.fields[t], {
                                  value: n,
                                  error: null,
                                  isTouched: !0,
                                })),
                                a)
                              ),
                            };
                      });
                    }),
                    (e.validateField = function(t) {
                      e.setState(function(n) {
                        return (
                          e.fieldsInfo[t].validator(O(t, n)).then(function(n) {
                            e.setState(function(e) {
                              var a;
                              return !n ||
                                (e.fields[t] && e.fields[t].error === n)
                                ? null
                                : {
                                    fields: X()(
                                      {},
                                      e.fields,
                                      ((a = {}),
                                      (a[t] = X()({}, e.fields[t], {
                                        error: n,
                                        isTouched: !0,
                                      })),
                                      a)
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
                        a = t || {},
                        r = {
                          fields: e.state.fields,
                          isSubmitting: !1,
                          isValidating: !1,
                        };
                      return (
                        Object.keys(a)
                          .filter(function(e) {
                            return !!a[e];
                          })
                          .forEach(function(t) {
                            var i;
                            'form' === t &&
                              e.state.error !== a[t] &&
                              ((n = !0), (r = X()({}, r, { error: a[t] }))),
                              'form' === t ||
                                (e.state.fields[t] &&
                                  e.state.fields[t].error === a[t]) ||
                                ((n = !0),
                                (r = X()({}, r, {
                                  fields: X()(
                                    {},
                                    r.fields,
                                    ((i = {}),
                                    (i[t] = X()({}, e.state.fields[t], {
                                      error: a[t],
                                      isTouched: !0,
                                    })),
                                    i)
                                  ),
                                })));
                          }),
                        n && e.setState(r),
                        n
                      );
                    }),
                    (e.handleSubmit = ((i = D()(
                      M.a.mark(function t(n) {
                        var a, r, i, o, s, l, u, c, d, p, m;
                        return M.a.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (n.preventDefault(),
                                    (a = e.props),
                                    (r = a.onSubmit),
                                    (i = a.onValidate),
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
                                          O(t, e.state)
                                        );
                                      })
                                    )
                                  );
                                case 11:
                                  if (
                                    ((l = t.sent),
                                    (u = s.reduce(function(e, t, n) {
                                      var a;
                                      return X()(
                                        {},
                                        e,
                                        (((a = {})[t] = l[n]), a)
                                      );
                                    }, {})),
                                    !e._updateErrors(u))
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
                                  return (t.next = 29), r(c);
                                case 29:
                                  return (
                                    (p = t.sent),
                                    (m = e._updateErrors(p)),
                                    t.abrupt('return', m)
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
                        a = t.onReset;
                      e.setState({ fields: R(n) }), a && a();
                    }),
                    (e.state = {
                      error: null,
                      isValidating: !1,
                      isSubmitting: !1,
                      fields: R(e.props.initialValues),
                      updateValue: e.updateValue,
                      registerField: e.registerField,
                      validateField: e.validateField,
                    }),
                    e
                  );
                  var i;
                }
                x()(n, t);
                var a = n.prototype;
                return (
                  (a.shouldComponentUpdate = function(e, t) {
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
                  (a.render = function() {
                    var t = this.props,
                      n = t.children,
                      a = (t.onSubmit,
                      t.onReset,
                      t.onValidate,
                      t.initialValues,
                      k()(t, [
                        'children',
                        'onSubmit',
                        'onReset',
                        'onValidate',
                        'initialValues',
                      ]));
                    return (
                      console.log('[Form]: render'),
                      r.createElement(
                        e,
                        { value: this.state },
                        r.createElement(
                          'form',
                          Object.assign({}, a, {
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
              })(r.Component);
            })(t),
            Field: (function(e) {
              return function(t) {
                var n = t.name,
                  a = t.onValidate,
                  i = t.children;
                return r.createElement(e, null, function(e) {
                  var t = e.fields,
                    o = e.registerField,
                    s = e.updateValue,
                    l = e.validateField;
                  return r.createElement(
                    P,
                    Object.assign(
                      {
                        name: n,
                        onValidate: a,
                        updateValue: s,
                        registerField: o,
                        validateField: l,
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
                return r.createElement(e, null, function(e) {
                  var t = e.fields,
                    a = e.error,
                    i = e.isValidating,
                    o = e.isSubmitting;
                  return r.createElement(
                    I,
                    {
                      error: a,
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
        L = Object(u.a)(
          'display:flex;justify-content:space-between;margin-bottom:24px;'
        ),
        U = Object(u.a)('width:480px;padding:24px;position:relative;'),
        G = Object(u.a)('padding:24px;width:396px;background-color:#fafafa;'),
        _ = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), r = 0;
              r < n;
              r++
            )
              a[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).instance = A()),
              t
            );
          }
          return (
            x()(t, e),
            (t.prototype.render = function() {
              var e = this.props.children,
                t =
                  e.props.props && !e.props.props.className.endsWith('-static');
              return i.a.createElement(
                F.d,
                {
                  code: e.props.children,
                  scope: this.instance,
                  mountStylesheet: !1,
                  className: t ? L : '',
                },
                i.a.createElement(F.a, {
                  contentEditable: t,
                  className: t ? U : '',
                }),
                t ? i.a.createElement(F.b, null) : null,
                t ? i.a.createElement(F.c, { className: G }) : null
              );
            }),
            t
          );
        })(i.a.Component);
      _.propTypes = { children: s.a.node.isRequired };
      var Q = _,
        z = Object(u.a)(),
        J = Object(u.a)('margin-left:240px;'),
        W = Object(u.a)(
          'margin:auto;width:1020px;padding:36px 72px 72px 72px;'
        );
      function B(e) {
        var t = e.children;
        return i.a.createElement(
          l.StaticQuery,
          { query: '2913518534', data: a },
          function(e) {
            var n = e.site;
            return i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(f, { metadata: n.siteMetadata }),
              i.a.createElement(
                'div',
                { className: z },
                i.a.createElement(w, { siteTitle: n.siteMetadata.title }),
                i.a.createElement(
                  'main',
                  { className: J },
                  i.a.createElement(
                    c.MDXProvider,
                    { components: { pre: Q } },
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
//# sourceMappingURL=component---src-pages-tutorial-mdx-a208c49f158d075e3faf.js.map
