webpackJsonp(
  ['main'],
  {
    './docs/src/assets/logo.svg': function(e, t, n) {
      e.exports = n.p + 'media/logo.5d5d9eef.svg';
    },
    './docs/src/components/Aux.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e.children;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = r);
    },
    './docs/src/components/Input.emotion.css': function(e, t) {},
    './docs/src/components/Input.js': function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function o(e) {
        var t = e.error,
          n = e.feedback,
          o = r(e, ['error', 'feedback']);
        return (
          console.log('render Input'),
          u.default.createElement(
            'div',
            { className: a },
            u.default.createElement('input', o),
            u.default.createElement('div', { className: c }, t || n)
          )
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        n('./docs/src/components/Input.emotion.css');
      var s = n('./node_modules/react/index.js'),
        u = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s),
        a = (n('./node_modules/emotion/dist/index.es.js'),
        'css-wrapperStyle-xxbjn'),
        c = 'css-helperStyle-936ra7';
      (o.defaultProps = { error: '', feedback: '' }), (t.default = o);
    },
    './docs/src/components/Layout/Brand.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function u(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Component = void 0);
      var a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        c = n('./node_modules/react/index.js'),
        d = r(c),
        i = n('./node_modules/emotion/dist/index.es.js'),
        l = n('./docs/src/styles/index.js'),
        f = n('./docs/src/configs/index.js'),
        m = n('./docs/src/assets/logo.svg'),
        p = r(m),
        v = (0, i.css)(
          'display:flex;align-items:center;& img{animation:spin infinite 10s linear;height:',
          l.variables.Brand.logoHeight,
          'px;}& span{animation:fadeIn 2s ease;font-size:',
          l.fontSizes.large,
          'px;color:',
          l.theme.inverseColor,
          ';}'
        ),
        y = (function(e) {
          function t() {
            return (
              o(this, t),
              s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            u(t, e),
            a(t, [
              {
                key: 'shouldComponentUpdate',
                value: function() {
                  return !1;
                }
              },
              {
                key: 'render',
                value: function() {
                  return d.default.createElement(
                    'div',
                    { className: v },
                    d.default.createElement('img', {
                      src: p.default,
                      alt: 'logo'
                    }),
                    d.default.createElement('span', null, f.APP_TITLE)
                  );
                }
              }
            ]),
            t
          );
        })(d.default.Component);
      (t.Component = y), (t.default = y);
    },
    './docs/src/components/Layout/Layout.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e) {
        var t = e.children;
        return u.default.createElement(
          'div',
          { className: m },
          u.default.createElement(
            'div',
            { className: p },
            u.default.createElement(i.default, null),
            u.default.createElement(f.default, { height: 100 })
          ),
          t
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Component = void 0);
      var s = n('./node_modules/react/index.js'),
        u = r(s),
        a = n('./node_modules/emotion/dist/index.es.js'),
        c = n('./docs/src/styles/index.js');
      n('./docs/src/styles/reset.css'), n('./docs/src/styles/animation.css');
      var d = n('./docs/src/components/Layout/Brand.js'),
        i = r(d),
        l = n('./docs/src/components/Layout/Navigation.js'),
        f = r(l),
        m = (0, a.css)(
          'font-family:',
          c.theme.fontFamily,
          ';font-size:',
          c.theme.fontSize,
          'px;'
        ),
        p = (0, a.css)(
          'height:',
          c.variables.Layout.headerHeight,
          'px;background-color:',
          c.theme.bgColor,
          ';display:flex;align-items:center;justify-content:space-between;'
        );
      (t.Component = o), (t.default = o);
    },
    './docs/src/components/Layout/Navigation.js': function(e, t, n) {
      'use strict';
      function r() {
        return s.default.createElement(
          'div',
          null,
          Object.values(c.ROUTES).map(function(e) {
            return s.default.createElement(
              a.NavLink,
              {
                className: i,
                activeClassName: l,
                key: e.path,
                exact: e.exact,
                to: e.path
              },
              e.name
            );
          })
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Component = void 0);
      var o = n('./node_modules/react/index.js'),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = n('./node_modules/emotion/dist/index.es.js'),
        a = n('./node_modules/react-router-dom/es/index.js'),
        c = n('./docs/src/configs/index.js'),
        d = n('./docs/src/styles/index.js'),
        i = (0, u.css)(
          'color:',
          d.theme.inverseColor,
          ';text-decoration:none;padding:0 0.5em;display:inline-block;line-height:',
          d.variables.Layout.headerHeight,
          'px;height:',
          d.variables.Layout.headerHeight,
          'px;&:hover{background-color:',
          d.theme.bgAccentColor,
          ';}'
        ),
        l = (0, u.css)('border-bottom:2px solid ', d.theme.primaryColor, ';');
      (t.Component = r), (t.default = r);
    },
    './docs/src/components/Layout/index.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var r = n('./docs/src/components/Layout/Layout.js'),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      t.default = o.default;
    },
    './docs/src/components/Login.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e) {
        return function() {
          var t = e.apply(this, arguments);
          return new Promise(function(e, n) {
            function r(o, s) {
              try {
                var u = t[o](s),
                  a = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(a).then(
                  function(e) {
                    r('next', e);
                  },
                  function(e) {
                    r('throw', e);
                  }
                );
              e(a);
            }
            return r('next');
          });
        };
      }
      function s() {
        var e = this;
        return d.default.createElement(
          l.default,
          {
            name: 'Login',
            onValidate: (function() {
              var t = o(
                a.default.mark(function t(n) {
                  return a.default.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (n.username !== n.email) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return', {
                              form: 'username and email cannot be the same'
                            });
                          case 2:
                            return e.abrupt('return', {});
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              );
              return function(e) {
                return t.apply(this, arguments);
              };
            })(),
            onSubmit: (function() {
              var t = o(
                a.default.mark(function t(n) {
                  var r;
                  return a.default.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, f.login)(n);
                          case 2:
                            if (
                              ((r = e.sent),
                              console.log(r.error),
                              !r.error || !r.error.match('username'))
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt('return', { username: r.error });
                          case 6:
                            return e.abrupt('return', {});
                          case 7:
                          case 'end':
                            return e.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              );
              return function(e) {
                return t.apply(this, arguments);
              };
            })()
          },
          function(t) {
            var n = t.handleSubmit;
            return d.default.createElement(
              p.default,
              null,
              d.default.createElement(i.FormError, null, function(e) {
                var t = e.formError;
                return d.default.createElement(
                  'div',
                  null,
                  t && d.default.createElement('span', null, 'Error: ', t)
                );
              }),
              d.default.createElement(
                i.Field,
                {
                  name: 'username',
                  onValidate: (function() {
                    var t = o(
                      a.default.mark(function t(n) {
                        return a.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    n.length < 5
                                      ? 'hum...need more than 5 characters'
                                      : null
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          t,
                          e
                        );
                      })
                    );
                    return function(e) {
                      return t.apply(this, arguments);
                    };
                  })()
                },
                function(e) {
                  var t = e.value,
                    n = e.error,
                    r = e.handleChange,
                    o = e.handleValidate;
                  return (
                    console.log('render username Field'),
                    d.default.createElement(y.default, {
                      type: 'text',
                      value: t,
                      error: n,
                      onBlur: o,
                      onChange: function(e) {
                        r(e.target.value);
                      }
                    })
                  );
                }
              ),
              d.default.createElement(
                i.Field,
                {
                  name: 'email',
                  onValidate: (function() {
                    var t = o(
                      a.default.mark(function t(n) {
                        return a.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    'return',
                                    -1 === n.indexOf('@')
                                      ? 'hum...need a valid email'
                                      : null
                                  );
                                case 1:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          t,
                          e
                        );
                      })
                    );
                    return function(e) {
                      return t.apply(this, arguments);
                    };
                  })()
                },
                function(e) {
                  var t = e.value,
                    n = e.error,
                    r = e.handleChange,
                    o = e.handleValidate;
                  return (
                    console.log('render email Field'),
                    d.default.createElement(y.default, {
                      type: 'email',
                      value: t,
                      error: n,
                      onBlur: o,
                      onChange: function(e) {
                        r(e.target.value);
                      }
                    })
                  );
                }
              ),
              d.default.createElement('button', { onClick: n }, 'Submit')
            );
          }
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = n('./node_modules/babel-runtime/regenerator/index.js'),
        a = r(u),
        c = n('./node_modules/react/index.js'),
        d = r(c),
        i = n('./lib/index.js'),
        l = r(i),
        f = n('./docs/src/utils/api.js'),
        m = n('./docs/src/components/Aux.js'),
        p = r(m),
        v = n('./docs/src/components/Input.js'),
        y = r(v);
      t.default = s;
    },
    './docs/src/components/index.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Login = t.Layout = void 0);
      var o = n('./docs/src/components/Layout/index.js'),
        s = r(o),
        u = n('./docs/src/components/Login.js'),
        a = r(u);
      (t.Layout = s.default), (t.Login = a.default);
    },
    './docs/src/configs/index.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = ((t.APP_TITLE = 'Fiora'), 'https://xiaofan2406.github.io/fiora');
      t.ROUTES = {
        HOME: { path: r, name: 'Home', exact: !0 },
        ABOUT: { path: r + '/about', name: 'About' },
        CONTACT: { path: r + '/contact', name: 'Contact' }
      };
    },
    './docs/src/index.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = n('./node_modules/react/index.js'),
        s = r(o),
        u = n('./node_modules/react-dom/index.js'),
        a = r(u),
        c = n('./node_modules/react-redux/es/index.js'),
        d = n('./docs/src/router/index.js'),
        i = r(d),
        l = n('./docs/src/store/index.js'),
        f = r(l),
        m = (0, f.default)(),
        p = document.getElementById('root');
      a.default.render(
        s.default.createElement(
          c.Provider,
          { store: m },
          s.default.createElement(i.default, null)
        ),
        p
      );
    },
    './docs/src/router/About.js': function(e, t, n) {
      'use strict';
      function r() {
        return s.default.createElement('div', null, 'About');
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('./node_modules/react/index.js'),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      t.default = r;
    },
    './docs/src/router/Contact.js': function(e, t, n) {
      'use strict';
      function r() {
        return s.default.createElement(u.Loader, null);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('./node_modules/react/index.js'),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = n('./docs/src/widgets/index.js');
      t.default = r;
    },
    './docs/src/router/Home.js': function(e, t, n) {
      'use strict';
      function r() {
        return s.default.createElement(u.Login, null);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('./node_modules/react/index.js'),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = n('./docs/src/components/index.js');
      t.default = r;
    },
    './docs/src/router/index.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o() {
        return u.default.createElement(
          a.BrowserRouter,
          null,
          u.default.createElement(
            c.Layout,
            null,
            u.default.createElement(
              a.Switch,
              null,
              u.default.createElement(a.Route, {
                path: d.ROUTES.HOME.path,
                exact: d.ROUTES.HOME.exact,
                component: l.default
              }),
              u.default.createElement(a.Route, {
                path: d.ROUTES.ABOUT.path,
                exact: d.ROUTES.ABOUT.exact,
                component: m.default
              }),
              u.default.createElement(a.Route, {
                path: d.ROUTES.CONTACT.path,
                exact: d.ROUTES.CONTACT.exact,
                component: v.default
              })
            )
          )
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = n('./node_modules/react/index.js'),
        u = r(s),
        a = n('./node_modules/react-router-dom/es/index.js'),
        c = n('./docs/src/components/index.js'),
        d = n('./docs/src/configs/index.js'),
        i = n('./docs/src/router/Home.js'),
        l = r(i),
        f = n('./docs/src/router/About.js'),
        m = r(f),
        p = n('./docs/src/router/Contact.js'),
        v = r(p);
      t.default = o;
    },
    './docs/src/store/index.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = [c.default],
          n = (0, u.createStore)(
            i.default,
            e,
            (0, u.compose)(
              u.applyMiddleware.apply(void 0, t),
              'object' ===
                ('undefined' === typeof window ? 'undefined' : s(window)) &&
              'undefined' !== typeof window.devToolsExtension
                ? window.devToolsExtension()
                : function(e) {
                    return e;
                  }
            )
          );
        return n;
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        u = n('./node_modules/redux/es/index.js'),
        a = n('./node_modules/redux-thunk/lib/index.js'),
        c = r(a),
        d = n('./docs/src/store/reducer.js'),
        i = r(d);
      t.default = o;
    },
    './docs/src/store/reducer.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('./node_modules/redux/es/index.js'),
        o = n('./lib/index.js');
      t.default = (0, r.combineReducers)({ fiora: o.reducer });
    },
    './docs/src/styles/animation.css': function(e, t) {},
    './docs/src/styles/index.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (t.colors = {
          blue: '#00BCD4',
          black: '#242729',
          white: '#FFFFFF',
          grey: '#3B4045'
        }),
        o = (t.fontSizes = { small: 12, regular: 14, large: 18 });
      (t.spacing = {
        unit: 2,
        internal: 6,
        internalBreak: 12,
        external: 8,
        externalBreak: 24
      }),
        (t.variables = {
          Layout: { headerHeight: 42 },
          Brand: { logoHeight: 34 }
        }),
        (t.theme = {
          primaryColor: r.blue,
          bgColor: r.black,
          inverseColor: r.white,
          bgAccentColor: r.grey,
          fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif',
          fontSize: o.regular
        });
    },
    './docs/src/styles/reset.css': function(e, t) {},
    './docs/src/utils/api.js': function(e, t, n) {
      'use strict';
      function r(e) {
        return function() {
          var t = e.apply(this, arguments);
          return new Promise(function(e, n) {
            function r(o, s) {
              try {
                var u = t[o](s),
                  a = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return Promise.resolve(a).then(
                  function(e) {
                    r('next', e);
                  },
                  function(e) {
                    r('throw', e);
                  }
                );
              e(a);
            }
            return r('next');
          });
        };
      }
      function o(e) {
        return new Promise(function(t) {
          setTimeout(t, e);
        });
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createUser = t.login = void 0);
      var s = n('./node_modules/babel-runtime/regenerator/index.js'),
        u = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(s);
      (t.login = (function() {
        var e = r(
          u.default.mark(function e(t) {
            var n;
            return u.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        console.log('[Server] - Processing login request...'),
                        (e.next = 3),
                        o(500)
                      );
                    case 3:
                      return (
                        (n = { success: 'admin' === t.username }),
                        'admin' !== t.username &&
                          (n.error = 'Invalid username'),
                        e.abrupt('return', n)
                      );
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        );
        return function(t) {
          return e.apply(this, arguments);
        };
      })()),
        (t.createUser = (function() {
          var e = r(
            u.default.mark(function e(t) {
              return u.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log(
                            '[Server] - Processing create user request...'
                          ),
                          (e.next = 3),
                          o(500)
                        );
                      case 3:
                        return e.abrupt(
                          'return',
                          Object.assign({}, t, { success: !0 })
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })());
    },
    './docs/src/widgets/Loader.emotion.css': function(e, t) {},
    './docs/src/widgets/Loader.js': function(e, t, n) {
      'use strict';
      function r() {
        return s.default.createElement(
          'div',
          { className: u },
          s.default.createElement(
            'div',
            null,
            s.default.createElement('div', null),
            s.default.createElement('div', null)
          )
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Component = void 0),
        n('./docs/src/widgets/Loader.emotion.css');
      var o = n('./node_modules/react/index.js'),
        s = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        u = (n('./node_modules/emotion/dist/index.es.js'),
        'css-loaderStyle-12gr8ap');
      (t.Component = r), (t.default = r);
    },
    './docs/src/widgets/index.js': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Loader = void 0);
      var r = n('./docs/src/widgets/Loader.js'),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(r);
      t.Loader = o.default;
    }
  },
  ['./docs/src/index.js']
);
//# sourceMappingURL=main.9dd59c40.js.map
