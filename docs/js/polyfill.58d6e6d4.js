webpackJsonp(
  ['polyfill'],
  {
    './docs/config/polyfills.js': function(t, e, r) {
      'undefined' === typeof Promise &&
        (r('./node_modules/promise/lib/rejection-tracking.js').enable(),
        (window.Promise = r('./node_modules/promise/lib/es6-extensions.js'))),
        r('./node_modules/whatwg-fetch/fetch.js'),
        (Object.assign = r('./node_modules/object-assign/index.js'));
    },
    './node_modules/asap/browser-raw.js': function(t, e, r) {
      'use strict';
      (function(e) {
        function r(t) {
          s.length || (i(), (a = !0)), (s[s.length] = t);
        }
        function n() {
          for (; u < s.length; ) {
            var t = u;
            if (((u += 1), s[t].call(), u > f)) {
              for (var e = 0, r = s.length - u; e < r; e++) s[e] = s[e + u];
              (s.length -= u), (u = 0);
            }
          }
          (s.length = 0), (u = 0), (a = !1);
        }
        function o(t) {
          return function() {
            function e() {
              clearTimeout(r), clearInterval(n), t();
            }
            var r = setTimeout(e, 0),
              n = setInterval(e, 50);
          };
        }
        t.exports = r;
        var i,
          s = [],
          a = !1,
          u = 0,
          f = 1024,
          c = 'undefined' !== typeof e ? e : self,
          l = c.MutationObserver || c.WebKitMutationObserver;
        (i =
          'function' === typeof l
            ? (function(t) {
                var e = 1,
                  r = new l(t),
                  n = document.createTextNode('');
                return (
                  r.observe(n, { characterData: !0 }),
                  function() {
                    (e = -e), (n.data = e);
                  }
                );
              })(n)
            : o(n)),
          (r.requestFlush = i),
          (r.makeRequestCallFromTimer = o);
      }.call(e, r('./node_modules/webpack/buildin/global.js')));
    },
    './node_modules/promise/lib/core.js': function(t, e, r) {
      'use strict';
      function n() {}
      function o(t) {
        try {
          return t.then;
        } catch (t) {
          return (m = t), _;
        }
      }
      function i(t, e) {
        try {
          return t(e);
        } catch (t) {
          return (m = t), _;
        }
      }
      function s(t, e, r) {
        try {
          t(e, r);
        } catch (t) {
          return (m = t), _;
        }
      }
      function a(t) {
        if ('object' !== typeof this)
          throw new TypeError('Promises must be constructed via new');
        if ('function' !== typeof t)
          throw new TypeError(
            "Promise constructor's argument is not a function"
          );
        (this._75 = 0),
          (this._83 = 0),
          (this._18 = null),
          (this._38 = null),
          t !== n && y(t, this);
      }
      function u(t, e, r) {
        return new t.constructor(function(o, i) {
          var s = new a(n);
          s.then(o, i), f(t, new p(e, r, s));
        });
      }
      function f(t, e) {
        for (; 3 === t._83; ) t = t._18;
        if ((a._47 && a._47(t), 0 === t._83))
          return 0 === t._75
            ? ((t._75 = 1), void (t._38 = e))
            : 1 === t._75
              ? ((t._75 = 2), void (t._38 = [t._38, e]))
              : void t._38.push(e);
        c(t, e);
      }
      function c(t, e) {
        b(function() {
          var r = 1 === t._83 ? e.onFulfilled : e.onRejected;
          if (null === r)
            return void (1 === t._83
              ? l(e.promise, t._18)
              : d(e.promise, t._18));
          var n = i(r, t._18);
          n === _ ? d(e.promise, m) : l(e.promise, n);
        });
      }
      function l(t, e) {
        if (e === t)
          return d(
            t,
            new TypeError('A promise cannot be resolved with itself.')
          );
        if (e && ('object' === typeof e || 'function' === typeof e)) {
          var r = o(e);
          if (r === _) return d(t, m);
          if (r === t.then && e instanceof a)
            return (t._83 = 3), (t._18 = e), void h(t);
          if ('function' === typeof r) return void y(r.bind(e), t);
        }
        (t._83 = 1), (t._18 = e), h(t);
      }
      function d(t, e) {
        (t._83 = 2), (t._18 = e), a._71 && a._71(t, e), h(t);
      }
      function h(t) {
        if ((1 === t._75 && (f(t, t._38), (t._38 = null)), 2 === t._75)) {
          for (var e = 0; e < t._38.length; e++) f(t, t._38[e]);
          t._38 = null;
        }
      }
      function p(t, e, r) {
        (this.onFulfilled = 'function' === typeof t ? t : null),
          (this.onRejected = 'function' === typeof e ? e : null),
          (this.promise = r);
      }
      function y(t, e) {
        var r = !1,
          n = s(
            t,
            function(t) {
              r || ((r = !0), l(e, t));
            },
            function(t) {
              r || ((r = !0), d(e, t));
            }
          );
        r || n !== _ || ((r = !0), d(e, m));
      }
      var b = r('./node_modules/asap/browser-raw.js'),
        m = null,
        _ = {};
      (t.exports = a),
        (a._47 = null),
        (a._71 = null),
        (a._44 = n),
        (a.prototype.then = function(t, e) {
          if (this.constructor !== a) return u(this, t, e);
          var r = new a(n);
          return f(this, new p(t, e, r)), r;
        });
    },
    './node_modules/promise/lib/es6-extensions.js': function(t, e, r) {
      'use strict';
      function n(t) {
        var e = new o(o._44);
        return (e._83 = 1), (e._18 = t), e;
      }
      var o = r('./node_modules/promise/lib/core.js');
      t.exports = o;
      var i = n(!0),
        s = n(!1),
        a = n(null),
        u = n(void 0),
        f = n(0),
        c = n('');
      (o.resolve = function(t) {
        if (t instanceof o) return t;
        if (null === t) return a;
        if (void 0 === t) return u;
        if (!0 === t) return i;
        if (!1 === t) return s;
        if (0 === t) return f;
        if ('' === t) return c;
        if ('object' === typeof t || 'function' === typeof t)
          try {
            var e = t.then;
            if ('function' === typeof e) return new o(e.bind(t));
          } catch (t) {
            return new o(function(e, r) {
              r(t);
            });
          }
        return n(t);
      }),
        (o.all = function(t) {
          var e = Array.prototype.slice.call(t);
          return new o(function(t, r) {
            function n(s, a) {
              if (a && ('object' === typeof a || 'function' === typeof a)) {
                if (a instanceof o && a.then === o.prototype.then) {
                  for (; 3 === a._83; ) a = a._18;
                  return 1 === a._83
                    ? n(s, a._18)
                    : (2 === a._83 && r(a._18),
                      void a.then(function(t) {
                        n(s, t);
                      }, r));
                }
                var u = a.then;
                if ('function' === typeof u) {
                  return void new o(u.bind(a)).then(function(t) {
                    n(s, t);
                  }, r);
                }
              }
              (e[s] = a), 0 === --i && t(e);
            }
            if (0 === e.length) return t([]);
            for (var i = e.length, s = 0; s < e.length; s++) n(s, e[s]);
          });
        }),
        (o.reject = function(t) {
          return new o(function(e, r) {
            r(t);
          });
        }),
        (o.race = function(t) {
          return new o(function(e, r) {
            t.forEach(function(t) {
              o.resolve(t).then(e, r);
            });
          });
        }),
        (o.prototype.catch = function(t) {
          return this.then(null, t);
        });
    },
    './node_modules/promise/lib/rejection-tracking.js': function(t, e, r) {
      'use strict';
      function n() {
        (f = !1), (a._47 = null), (a._71 = null);
      }
      function o(t) {
        function e(e) {
          (t.allRejections || s(l[e].error, t.whitelist || u)) &&
            ((l[e].displayId = c++),
            t.onUnhandled
              ? ((l[e].logged = !0), t.onUnhandled(l[e].displayId, l[e].error))
              : ((l[e].logged = !0), i(l[e].displayId, l[e].error)));
        }
        function r(e) {
          l[e].logged &&
            (t.onHandled
              ? t.onHandled(l[e].displayId, l[e].error)
              : l[e].onUnhandled ||
                (console.warn(
                  'Promise Rejection Handled (id: ' + l[e].displayId + '):'
                ),
                console.warn(
                  '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
                    l[e].displayId +
                    '.'
                )));
        }
        (t = t || {}), f && n(), (f = !0);
        var o = 0,
          c = 0,
          l = {};
        (a._47 = function(t) {
          2 === t._83 &&
            l[t._56] &&
            (l[t._56].logged ? r(t._56) : clearTimeout(l[t._56].timeout),
            delete l[t._56]);
        }),
          (a._71 = function(t, r) {
            0 === t._75 &&
              ((t._56 = o++),
              (l[t._56] = {
                displayId: null,
                error: r,
                timeout: setTimeout(e.bind(null, t._56), s(r, u) ? 100 : 2e3),
                logged: !1
              }));
          });
      }
      function i(t, e) {
        console.warn('Possible Unhandled Promise Rejection (id: ' + t + '):'),
          ((e && (e.stack || e)) + '').split('\n').forEach(function(t) {
            console.warn('  ' + t);
          });
      }
      function s(t, e) {
        return e.some(function(e) {
          return t instanceof e;
        });
      }
      var a = r('./node_modules/promise/lib/core.js'),
        u = [ReferenceError, TypeError, RangeError],
        f = !1;
      (e.disable = n), (e.enable = o);
    },
    './node_modules/whatwg-fetch/fetch.js': function(t, e) {
      !(function(t) {
        'use strict';
        function e(t) {
          if (
            ('string' !== typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
          )
            throw new TypeError('Invalid character in header field name');
          return t.toLowerCase();
        }
        function r(t) {
          return 'string' !== typeof t && (t = String(t)), t;
        }
        function n(t) {
          var e = {
            next: function() {
              var e = t.shift();
              return { done: void 0 === e, value: e };
            }
          };
          return (
            m.iterable &&
              (e[Symbol.iterator] = function() {
                return e;
              }),
            e
          );
        }
        function o(t) {
          (this.map = {}),
            t instanceof o
              ? t.forEach(function(t, e) {
                  this.append(e, t);
                }, this)
              : Array.isArray(t)
                ? t.forEach(function(t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e]);
                  }, this);
        }
        function i(t) {
          if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
          t.bodyUsed = !0;
        }
        function s(t) {
          return new Promise(function(e, r) {
            (t.onload = function() {
              e(t.result);
            }),
              (t.onerror = function() {
                r(t.error);
              });
          });
        }
        function a(t) {
          var e = new FileReader(),
            r = s(e);
          return e.readAsArrayBuffer(t), r;
        }
        function u(t) {
          var e = new FileReader(),
            r = s(e);
          return e.readAsText(t), r;
        }
        function f(t) {
          for (
            var e = new Uint8Array(t), r = new Array(e.length), n = 0;
            n < e.length;
            n++
          )
            r[n] = String.fromCharCode(e[n]);
          return r.join('');
        }
        function c(t) {
          if (t.slice) return t.slice(0);
          var e = new Uint8Array(t.byteLength);
          return e.set(new Uint8Array(t)), e.buffer;
        }
        function l() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function(t) {
              if (((this._bodyInit = t), t))
                if ('string' === typeof t) this._bodyText = t;
                else if (m.blob && Blob.prototype.isPrototypeOf(t))
                  this._bodyBlob = t;
                else if (m.formData && FormData.prototype.isPrototypeOf(t))
                  this._bodyFormData = t;
                else if (
                  m.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(t)
                )
                  this._bodyText = t.toString();
                else if (m.arrayBuffer && m.blob && w(t))
                  (this._bodyArrayBuffer = c(t.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                else {
                  if (
                    !m.arrayBuffer ||
                    (!ArrayBuffer.prototype.isPrototypeOf(t) && !v(t))
                  )
                    throw new Error('unsupported BodyInit type');
                  this._bodyArrayBuffer = c(t);
                }
              else this._bodyText = '';
              this.headers.get('content-type') ||
                ('string' === typeof t
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : m.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(t) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      ));
            }),
            m.blob &&
              ((this.blob = function() {
                var t = i(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as blob');
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function() {
                return this._bodyArrayBuffer
                  ? i(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(a);
              })),
            (this.text = function() {
              var t = i(this);
              if (t) return t;
              if (this._bodyBlob) return u(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(f(this._bodyArrayBuffer));
              if (this._bodyFormData)
                throw new Error('could not read FormData body as text');
              return Promise.resolve(this._bodyText);
            }),
            m.formData &&
              (this.formData = function() {
                return this.text().then(p);
              }),
            (this.json = function() {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        function d(t) {
          var e = t.toUpperCase();
          return g.indexOf(e) > -1 ? e : t;
        }
        function h(t, e) {
          e = e || {};
          var r = e.body;
          if (t instanceof h) {
            if (t.bodyUsed) throw new TypeError('Already read');
            (this.url = t.url),
              (this.credentials = t.credentials),
              e.headers || (this.headers = new o(t.headers)),
              (this.method = t.method),
              (this.mode = t.mode),
              r ||
                null == t._bodyInit ||
                ((r = t._bodyInit), (t.bodyUsed = !0));
          } else this.url = String(t);
          if (
            ((this.credentials = e.credentials || this.credentials || 'omit'),
            (!e.headers && this.headers) || (this.headers = new o(e.headers)),
            (this.method = d(e.method || this.method || 'GET')),
            (this.mode = e.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && r)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(r);
        }
        function p(t) {
          var e = new FormData();
          return (
            t
              .trim()
              .split('&')
              .forEach(function(t) {
                if (t) {
                  var r = t.split('='),
                    n = r.shift().replace(/\+/g, ' '),
                    o = r.join('=').replace(/\+/g, ' ');
                  e.append(decodeURIComponent(n), decodeURIComponent(o));
                }
              }),
            e
          );
        }
        function y(t) {
          var e = new o();
          return (
            t.split(/\r?\n/).forEach(function(t) {
              var r = t.split(':'),
                n = r.shift().trim();
              if (n) {
                var o = r.join(':').trim();
                e.append(n, o);
              }
            }),
            e
          );
        }
        function b(t, e) {
          e || (e = {}),
            (this.type = 'default'),
            (this.status = 'status' in e ? e.status : 200),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
            (this.headers = new o(e.headers)),
            (this.url = e.url || ''),
            this._initBody(t);
        }
        if (!t.fetch) {
          var m = {
            searchParams: 'URLSearchParams' in t,
            iterable: 'Symbol' in t && 'iterator' in Symbol,
            blob:
              'FileReader' in t &&
              'Blob' in t &&
              (function() {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            formData: 'FormData' in t,
            arrayBuffer: 'ArrayBuffer' in t
          };
          if (m.arrayBuffer)
            var _ = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
              ],
              w = function(t) {
                return t && DataView.prototype.isPrototypeOf(t);
              },
              v =
                ArrayBuffer.isView ||
                function(t) {
                  return t && _.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          (o.prototype.append = function(t, n) {
            (t = e(t)), (n = r(n));
            var o = this.map[t];
            this.map[t] = o ? o + ',' + n : n;
          }),
            (o.prototype.delete = function(t) {
              delete this.map[e(t)];
            }),
            (o.prototype.get = function(t) {
              return (t = e(t)), this.has(t) ? this.map[t] : null;
            }),
            (o.prototype.has = function(t) {
              return this.map.hasOwnProperty(e(t));
            }),
            (o.prototype.set = function(t, n) {
              this.map[e(t)] = r(n);
            }),
            (o.prototype.forEach = function(t, e) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
            }),
            (o.prototype.keys = function() {
              var t = [];
              return (
                this.forEach(function(e, r) {
                  t.push(r);
                }),
                n(t)
              );
            }),
            (o.prototype.values = function() {
              var t = [];
              return (
                this.forEach(function(e) {
                  t.push(e);
                }),
                n(t)
              );
            }),
            (o.prototype.entries = function() {
              var t = [];
              return (
                this.forEach(function(e, r) {
                  t.push([r, e]);
                }),
                n(t)
              );
            }),
            m.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
          var g = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
          (h.prototype.clone = function() {
            return new h(this, { body: this._bodyInit });
          }),
            l.call(h.prototype),
            l.call(b.prototype),
            (b.prototype.clone = function() {
              return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new o(this.headers),
                url: this.url
              });
            }),
            (b.error = function() {
              var t = new b(null, { status: 0, statusText: '' });
              return (t.type = 'error'), t;
            });
          var j = [301, 302, 303, 307, 308];
          (b.redirect = function(t, e) {
            if (-1 === j.indexOf(e))
              throw new RangeError('Invalid status code');
            return new b(null, { status: e, headers: { location: t } });
          }),
            (t.Headers = o),
            (t.Request = h),
            (t.Response = b),
            (t.fetch = function(t, e) {
              return new Promise(function(r, n) {
                var o = new h(t, e),
                  i = new XMLHttpRequest();
                (i.onload = function() {
                  var t = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: y(i.getAllResponseHeaders() || '')
                  };
                  t.url =
                    'responseURL' in i
                      ? i.responseURL
                      : t.headers.get('X-Request-URL');
                  var e = 'response' in i ? i.response : i.responseText;
                  r(new b(e, t));
                }),
                  (i.onerror = function() {
                    n(new TypeError('Network request failed'));
                  }),
                  (i.ontimeout = function() {
                    n(new TypeError('Network request failed'));
                  }),
                  i.open(o.method, o.url, !0),
                  'include' === o.credentials && (i.withCredentials = !0),
                  'responseType' in i && m.blob && (i.responseType = 'blob'),
                  o.headers.forEach(function(t, e) {
                    i.setRequestHeader(e, t);
                  }),
                  i.send(
                    'undefined' === typeof o._bodyInit ? null : o._bodyInit
                  );
              });
            }),
            (t.fetch.polyfill = !0);
        }
      })('undefined' !== typeof self ? self : this);
    }
  },
  ['./docs/config/polyfills.js']
);
//# sourceMappingURL=polyfill.58d6e6d4.js.map
