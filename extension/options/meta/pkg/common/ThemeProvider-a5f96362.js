import {
  c as createCommonjsModule,
  R as React,
  r as react,
} from './index-9bbaa05c.js';
import './hoist-non-react-statics.cjs-cb9d1f2a.js';

function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    (module.exports = _extends =
      Object.assign
        ? Object.assign.bind()
        : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          }),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
    return _extends.apply(this, arguments);
  }

  (module.exports = _extends),
    (module.exports.__esModule = true),
    (module.exports['default'] = module.exports);
});

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/ (function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy =
      options.speedy === undefined
        ? 'production' === 'production'
        : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {}
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
})();

var e = '-ms-';
var r = '-moz-';
var a = '-webkit-';
var c = 'comm';
var n = 'rule';
var t = 'decl';
var i = '@import';
var p = '@keyframes';
var k = Math.abs;
var d = String.fromCharCode;
var g = Object.assign;
function m(e2, r2) {
  return (
    (((((((r2 << 2) ^ z(e2, 0)) << 2) ^ z(e2, 1)) << 2) ^ z(e2, 2)) << 2) ^
    z(e2, 3)
  );
}
function x(e2) {
  return e2.trim();
}
function y(e2, r2) {
  return (e2 = r2.exec(e2)) ? e2[0] : e2;
}
function j(e2, r2, a2) {
  return e2.replace(r2, a2);
}
function C(e2, r2) {
  return e2.indexOf(r2);
}
function z(e2, r2) {
  return e2.charCodeAt(r2) | 0;
}
function A(e2, r2, a2) {
  return e2.slice(r2, a2);
}
function O(e2) {
  return e2.length;
}
function M(e2) {
  return e2.length;
}
function S(e2, r2) {
  return r2.push(e2), e2;
}
function q(e2, r2) {
  return e2.map(r2).join('');
}
var B = 1;
var D = 1;
var E = 0;
var F = 0;
var G = 0;
var H = '';
function I(e2, r2, a2, c2, n2, t2, s2) {
  return {
    value: e2,
    root: r2,
    parent: a2,
    type: c2,
    props: n2,
    children: t2,
    line: B,
    column: D,
    length: s2,
    return: '',
  };
}
function J(e2, r2) {
  return g(
    I('', null, null, '', null, null, 0),
    e2,
    { length: -e2.length },
    r2
  );
}
function K() {
  return G;
}
function L() {
  G = F > 0 ? z(H, --F) : 0;
  if ((D--, G === 10)) (D = 1), B--;
  return G;
}
function N() {
  G = F < E ? z(H, F++) : 0;
  if ((D++, G === 10)) (D = 1), B++;
  return G;
}
function P() {
  return z(H, F);
}
function Q() {
  return F;
}
function R(e2, r2) {
  return A(H, e2, r2);
}
function T(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U(e2) {
  return (B = D = 1), (E = O((H = e2))), (F = 0), [];
}
function V(e2) {
  return (H = ''), e2;
}
function W(e2) {
  return x(R(F - 1, ee(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function Y(e2) {
  while ((G = P()))
    if (G < 33) N();
    else break;
  return T(e2) > 2 || T(G) > 3 ? '' : ' ';
}
function _(e2, r2) {
  while (--r2 && N())
    if (G < 48 || G > 102 || (G > 57 && G < 65) || (G > 70 && G < 97)) break;
  return R(e2, Q() + (r2 < 6 && P() == 32 && N() == 32));
}
function ee(e2) {
  while (N())
    switch (G) {
      case e2:
        return F;
      case 34:
      case 39:
        if (e2 !== 34 && e2 !== 39) ee(G);
        break;
      case 40:
        if (e2 === 41) ee(e2);
        break;
      case 92:
        N();
        break;
    }
  return F;
}
function re(e2, r2) {
  while (N())
    if (e2 + G === 47 + 10) break;
    else if (e2 + G === 42 + 42 && P() === 47) break;
  return '/*' + R(r2, F - 1) + '*' + d(e2 === 47 ? e2 : N());
}
function ae(e2) {
  while (!T(P())) N();
  return R(e2, F);
}
function ce(e2) {
  return V(ne('', null, null, null, [''], (e2 = U(e2)), 0, [0], e2));
}
function ne(e2, r2, a2, c2, n2, t2, s2, u2, i2) {
  var f2 = 0;
  var o2 = 0;
  var l2 = s2;
  var v2 = 0;
  var h2 = 0;
  var p2 = 0;
  var b2 = 1;
  var w2 = 1;
  var $2 = 1;
  var k2 = 0;
  var g2 = '';
  var m2 = n2;
  var x2 = t2;
  var y2 = c2;
  var z2 = g2;
  while (w2)
    switch (((p2 = k2), (k2 = N()))) {
      case 40:
        if (p2 != 108 && z2.charCodeAt(l2 - 1) == 58) {
          if (C((z2 += j(W(k2), '&', '&\f')), '&\f') != -1) $2 = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        z2 += W(k2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z2 += Y(p2);
        break;
      case 92:
        z2 += _(Q() - 1, 7);
        continue;
      case 47:
        switch (P()) {
          case 42:
          case 47:
            S(se(re(N(), Q()), r2, a2), i2);
            break;
          default:
            z2 += '/';
        }
        break;
      case 123 * b2:
        u2[f2++] = O(z2) * $2;
      case 125 * b2:
      case 59:
      case 0:
        switch (k2) {
          case 0:
          case 125:
            w2 = 0;
          case 59 + o2:
            if (h2 > 0 && O(z2) - l2)
              S(
                h2 > 32
                  ? ue(z2 + ';', c2, a2, l2 - 1)
                  : ue(j(z2, ' ', '') + ';', c2, a2, l2 - 2),
                i2
              );
            break;
          case 59:
            z2 += ';';
          default:
            S(
              (y2 = te(
                z2,
                r2,
                a2,
                f2,
                o2,
                n2,
                u2,
                g2,
                (m2 = []),
                (x2 = []),
                l2
              )),
              t2
            );
            if (k2 === 123)
              if (o2 === 0) ne(z2, r2, y2, y2, m2, t2, l2, u2, x2);
              else
                switch (v2) {
                  case 100:
                  case 109:
                  case 115:
                    ne(
                      e2,
                      y2,
                      y2,
                      c2 &&
                        S(
                          te(e2, y2, y2, 0, 0, n2, u2, g2, n2, (m2 = []), l2),
                          x2
                        ),
                      n2,
                      x2,
                      l2,
                      u2,
                      c2 ? m2 : x2
                    );
                    break;
                  default:
                    ne(z2, y2, y2, y2, [''], x2, 0, u2, x2);
                }
        }
        (f2 = o2 = h2 = 0), (b2 = $2 = 1), (g2 = z2 = ''), (l2 = s2);
        break;
      case 58:
        (l2 = 1 + O(z2)), (h2 = p2);
      default:
        if (b2 < 1) {
          if (k2 == 123) --b2;
          else if (k2 == 125 && b2++ == 0 && L() == 125) continue;
        }
        switch (((z2 += d(k2)), k2 * b2)) {
          case 38:
            $2 = o2 > 0 ? 1 : ((z2 += '\f'), -1);
            break;
          case 44:
            (u2[f2++] = (O(z2) - 1) * $2), ($2 = 1);
            break;
          case 64:
            if (P() === 45) z2 += W(N());
            (v2 = P()), (o2 = l2 = O((g2 = z2 += ae(Q())))), k2++;
            break;
          case 45:
            if (p2 === 45 && O(z2) == 2) b2 = 0;
        }
    }
  return t2;
}
function te(e2, r2, a2, c2, t2, s2, u2, i2, f2, o2, l2) {
  var v2 = t2 - 1;
  var h2 = t2 === 0 ? s2 : [''];
  var p2 = M(h2);
  for (var b2 = 0, w2 = 0, $2 = 0; b2 < c2; ++b2)
    for (
      var d2 = 0, g2 = A(e2, v2 + 1, (v2 = k((w2 = u2[b2])))), m2 = e2;
      d2 < p2;
      ++d2
    )
      if ((m2 = x(w2 > 0 ? h2[d2] + ' ' + g2 : j(g2, /&\f/g, h2[d2]))))
        f2[$2++] = m2;
  return I(e2, r2, a2, t2 === 0 ? n : i2, f2, o2, l2);
}
function se(e2, r2, a2) {
  return I(e2, r2, a2, c, d(K()), A(e2, 2, -2), 0);
}
function ue(e2, r2, a2, c2) {
  return I(e2, r2, a2, t, A(e2, 0, c2), A(e2, c2 + 1, -1), c2);
}
function ie(c2, n2) {
  switch (m(c2, n2)) {
    case 5103:
      return a + 'print-' + c2 + c2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c2 + c2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c2 + r + c2 + e + c2 + c2;
    case 6828:
    case 4268:
      return a + c2 + e + c2 + c2;
    case 6165:
      return a + c2 + e + 'flex-' + c2 + c2;
    case 5187:
      return (
        a + c2 + j(c2, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + c2
      );
    case 5443:
      return a + c2 + e + 'flex-item-' + j(c2, /flex-|-self/, '') + c2;
    case 4675:
      return (
        a +
        c2 +
        e +
        'flex-line-pack' +
        j(c2, /align-content|flex-|-self/, '') +
        c2
      );
    case 5548:
      return a + c2 + e + j(c2, 'shrink', 'negative') + c2;
    case 5292:
      return a + c2 + e + j(c2, 'basis', 'preferred-size') + c2;
    case 6060:
      return (
        a +
        'box-' +
        j(c2, '-grow', '') +
        a +
        c2 +
        e +
        j(c2, 'grow', 'positive') +
        c2
      );
    case 4554:
      return a + j(c2, /([^-])(transform)/g, '$1' + a + '$2') + c2;
    case 6187:
      return (
        j(j(j(c2, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), c2, '') +
        c2
      );
    case 5495:
    case 3959:
      return j(c2, /(image-set\([^]*)/, a + '$1$`$1');
    case 4968:
      return (
        j(
          j(c2, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        a +
        c2 +
        c2
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(c2, /(.+)-inline(.+)/, a + '$1$2') + c2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (O(c2) - 1 - n2 > 6)
        switch (z(c2, n2 + 1)) {
          case 109:
            if (z(c2, n2 + 4) !== 45) break;
          case 102:
            return (
              j(
                c2,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  a +
                  '$2-$3$1' +
                  r +
                  (z(c2, n2 + 3) == 108 ? '$3' : '$2-$3')
              ) + c2
            );
          case 115:
            return ~C(c2, 'stretch')
              ? ie(j(c2, 'stretch', 'fill-available'), n2) + c2
              : c2;
        }
      break;
    case 4949:
      if (z(c2, n2 + 1) !== 115) break;
    case 6444:
      switch (z(c2, O(c2) - 3 - (~C(c2, '!important') && 10))) {
        case 107:
          return j(c2, ':', ':' + a) + c2;
        case 101:
          return (
            j(
              c2,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                a +
                (z(c2, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                a +
                '$2$3$1' +
                e +
                '$2box$3'
            ) + c2
          );
      }
      break;
    case 5936:
      switch (z(c2, n2 + 11)) {
        case 114:
          return a + c2 + e + j(c2, /[svh]\w+-[tblr]{2}/, 'tb') + c2;
        case 108:
          return a + c2 + e + j(c2, /[svh]\w+-[tblr]{2}/, 'tb-rl') + c2;
        case 45:
          return a + c2 + e + j(c2, /[svh]\w+-[tblr]{2}/, 'lr') + c2;
      }
      return a + c2 + e + c2 + c2;
  }
  return c2;
}
function fe(e2, r2) {
  var a2 = '';
  var c2 = M(e2);
  for (var n2 = 0; n2 < c2; n2++) a2 += r2(e2[n2], n2, e2, r2) || '';
  return a2;
}
function oe(e2, r2, a2, s2) {
  switch (e2.type) {
    case i:
    case t:
      return (e2.return = e2.return || e2.value);
    case c:
      return '';
    case p:
      return (e2.return = e2.value + '{' + fe(e2.children, s2) + '}');
    case n:
      e2.value = e2.props.join(',');
  }
  return O((a2 = fe(e2.children, s2)))
    ? (e2.return = e2.value + '{' + a2 + '}')
    : '';
}
function le(e2) {
  var r2 = M(e2);
  return function (a2, c2, n2, t2) {
    var s2 = '';
    for (var u2 = 0; u2 < r2; u2++) s2 += e2[u2](a2, c2, n2, t2) || '';
    return s2;
  };
}
function ve(e2) {
  return function (r2) {
    if (!r2.root) {
      if ((r2 = r2.return)) e2(r2);
    }
  };
}
function he(c2, s2, u2, i2) {
  if (c2.length > -1) {
    if (!c2.return)
      switch (c2.type) {
        case t:
          c2.return = ie(c2.value, c2.length);
          break;
        case p:
          return fe([J(c2, { value: j(c2.value, '@', '@' + a) })], i2);
        case n:
          if (c2.length)
            return q(c2.props, function (n2) {
              switch (y(n2, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return fe(
                    [J(c2, { props: [j(n2, /:(read-\w+)/, ':' + r + '$1')] })],
                    i2
                  );
                case '::placeholder':
                  return fe(
                    [
                      J(c2, {
                        props: [j(n2, /:(plac\w+)/, ':' + a + 'input-$1')],
                      }),
                      J(c2, { props: [j(n2, /:(plac\w+)/, ':' + r + '$1')] }),
                      J(c2, { props: [j(n2, /:(plac\w+)/, e + 'input-$1')] }),
                    ],
                    i2
                  );
              }
              return '';
            });
      }
  }
}

var identifierWithPointTracking = function identifierWithPointTracking(
  begin,
  points,
  index
) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (T(character)) {
      break;
    }

    N();
  }

  return R(begin, F);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(F - 1, points, index);
        break;

      case 2:
        parsed[index] += W(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while ((character = N()));

  return parsed;
};

var getRules = function getRules(value, points) {
  return V(toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */ new WeakMap();
var compat = function compat(element) {
  if (
    element.type !== 'rule' ||
    !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1
  ) {
    return;
  }

  var value = element.value,
    parent = element.parent;
  var isImplicitRule =
    element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (
    element.props.length === 1 &&
    value.charCodeAt(0) !== 58 &&
    /* colon */
    !fixedElements.get(parent)
  ) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i]
        ? rules[i].replace(/&\f/g, parentRules[j])
        : parentRules[j] + ' ' + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      // this ignores label
      element['return'] = '';
      element.value = '';
    }
  }
};

var defaultStylisPlugins = [he];

var createCache = function createCache(options) {
  var key = options.key;

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll(
      'style[data-emotion]:not([data-s])'
    ); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function (node) {
        var attrib = node.getAttribute('data-emotion').split(' '); // $FlowFixMe

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      }
    );
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [
      oe,
      ve(function (rule) {
        currentSheet.insert(rule);
      }),
    ];
    var serializer = le(
      omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)
    );

    var stylis = function stylis(styles) {
      return fe(ce(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(
        selector ? selector + '{' + serialized.styles + '}' : serialized.styles
      );

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint,
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert,
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var isBrowser = 'object' !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ';');
    } else {
      rawClassName += className + ' ';
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + '-' + serialized.name;

  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false) &&
    cache.registered[className] === undefined
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + '-' + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(
        serialized === current ? '.' + className : '',
        current,
        cache.sheet,
        true
      );

      current = current.next;
    } while (current !== undefined);
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 0xff) |
      ((str.charCodeAt(++i) & 0xff) << 8) |
      ((str.charCodeAt(++i) & 0xff) << 16) |
      ((str.charCodeAt(++i) & 0xff) << 24);
    k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16);
    k ^=
      /* k >>> r: */
      k >>> 24;
    h =
      /* Math.imul(k, m): */
      ((k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16)) ^
      /* Math.imul(h, m): */
      ((h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16));
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);
  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */ memoize(function (styleName) {
  return isCustomProperty(styleName)
    ? styleName
    : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName': {
      if (typeof value === 'string') {
        return value.replace(animationRegex, function (match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor,
          };
          return p1;
        });
      }
    }
  }

  if (
    unitlessKeys[key] !== 1 &&
    !isCustomProperty(key) &&
    typeof value === 'number' &&
    value !== 0
  ) {
    return value + 'px';
  }

  return value;
};

var noComponentSelectorMessage =
  'Component selectors can only be used in conjunction with ' +
  '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' +
  'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean': {
      return '';
    }

    case 'object': {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor,
        };
        return interpolation.name;
      }

      if (interpolation.styles !== undefined) {
        var next = interpolation.next;

        if (next !== undefined) {
          // not the most efficient thing ever but this is a pretty rare case
          // and there will be very few iterations of this generally
          while (next !== undefined) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor,
            };
            next = next.next;
          }
        }

        var styles = interpolation.styles + ';';

        return styles;
      }

      return createStringFromObject(mergedProps, registered, interpolation);
    }

    case 'function': {
      if (mergedProps !== undefined) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }

      break;
    }
  } // finalize string values (regular strings and functions interpolated into css calls)

  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ';';
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + '{' + registered[value] + '}';
        } else if (isProcessableValue(value)) {
          string +=
            processStyleName(_key) + ':' + processStyleValue(_key, value) + ';';
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && 'production' !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (
          Array.isArray(value) &&
          typeof value[0] === 'string' &&
          (registered == null || registered[value[0]] === undefined)
        ) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string +=
                processStyleName(_key) +
                ':' +
                processStyleValue(_key, value[_i]) +
                ';';
            }
          }
        } else {
          var interpolated = handleInterpolation(
            mergedProps,
            registered,
            value
          );

          switch (_key) {
            case 'animation':
            case 'animationName': {
              string += processStyleName(_key) + ':' + interpolated + ';';
              break;
            }

            default: {
              string += _key + '{' + interpolated + '}';
            }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (
    args.length === 1 &&
    typeof args[0] === 'object' &&
    args[0] !== null &&
    args[0].styles !== undefined
  ) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      styles += strings[i];
    }
  }

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName +=
      '-' + // $FlowFixMe we know it's not null
      match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor,
  };
};

var EmotionCacheContext = /* #__PURE__ */ react.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined'
    ? /* #__PURE__ */ createCache({
        key: 'css',
      })
    : null
);

var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/ react.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */ react.createContext({});

var useInsertionEffect = React['useInsertion' + 'Effect']
  ? React['useInsertion' + 'Effect']
  : function useInsertionEffect(create) {
      create();
    };

var useInsertionEffect$1 = React['useInsertion' + 'Effect']
  ? React['useInsertion' + 'Effect']
  : react.useLayoutEffect;
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */ withEmotionCache(function (props, cache) {
  var styles = props.styles;
  var serialized = serializeStyles(
    [styles],
    undefined,
    react.useContext(ThemeContext)
  );
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything

  var sheetRef = react.useRef();
  useInsertionEffect$1(
    function () {
      var key = cache.key + '-global'; // use case of https://github.com/emotion-js/emotion/issues/2675

      var sheet = new cache.sheet.constructor({
        key: key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy,
      });
      var rehydrating = false; // $FlowFixMe

      var node = document.querySelector(
        'style[data-emotion="' + key + ' ' + serialized.name + '"]'
      );

      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }

      if (node !== null) {
        rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

        node.setAttribute('data-emotion', key);
        sheet.hydrate([node]);
      }

      sheetRef.current = [sheet, rehydrating];
      return function () {
        sheet.flush();
      };
    },
    [cache]
  );
  useInsertionEffect$1(
    function () {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }

      if (serialized.next !== undefined) {
        // insert keyframes
        insertStyles(cache, serialized.next, true);
      }

      if (sheet.tags.length) {
        // if this doesn't exist then it will be null so the style element will be appended
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }

      cache.insert('', serialized, sheet, false);
    },
    [cache, serialized.name]
  );
  return null;
});

function css() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = 'animation-' + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: '@keyframes ' + name + '{' + insertable.styles + '}',
    anim: 1,
    toString: function toString() {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
};

var k$1 = Symbol.for('react.element'),
  l = Symbol.for('react.fragment'),
  m$1 = Object.prototype.hasOwnProperty,
  n$1 =
    react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q$1(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = '' + g);
  void 0 !== a.key && (e = '' + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in ((a = c.defaultProps), a)) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k$1,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n$1.current,
  };
}
var Fragment = l;
var jsx = q$1;
var jsxs = q$1;

var reactJsxRuntime_production_min = {
  Fragment: Fragment,
  jsx: jsx,
  jsxs: jsxs,
};

var jsxRuntime = createCommonjsModule(function (module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
});

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles(props) {
  const { styles, defaultTheme = {} } = props;
  const globalStyles =
    typeof styles === 'function'
      ? (themeInput) => styles(isEmpty(themeInput) ? defaultTheme : themeInput)
      : styles;
  return /*#__PURE__*/ jsxRuntime.jsx(Global, {
    styles: globalStyles,
  });
}

function isPlainObject(item) {
  return (
    item !== null && typeof item === 'object' && item.constructor === Object
  );
}
function deepmerge(
  target,
  source,
  options = {
    clone: true,
  }
) {
  const output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (
        isPlainObject(source[key]) &&
        key in target &&
        isPlainObject(target[key])
      ) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return (
    'Minified MUI error #' + code + '; visit ' + url + ' for the full message.'
  );
  /* eslint-enable prefer-template */
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
function resolveProps(defaultProps, props) {
  const output = _extends({}, props);

  Object.keys(defaultProps).forEach((propName) => {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  });
}

// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536, // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: (key) => `@media (min-width:${values[key]}px)`,
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] =
        styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (
        Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !==
        -1
      ) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }

      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  const newStyleFunction = (props) => {
    const theme = props.theme || {};
    const base = styleFunction(props);
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(
          _extends(
            {
              theme,
            },
            props[key]
          )
        );
      }

      return acc;
    }, null);
    return merge(base, extended);
  };

  newStyleFunction.propTypes = {};
  newStyleFunction.filterProps = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    ...styleFunction.filterProps,
  ];
  return newStyleFunction;
}

function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;

  const breakpointsInOrder =
    breakpointsInput == null
      ? void 0
      : (_breakpointsInput$key = breakpointsInput.keys) == null
      ? void 0
      : _breakpointsInput$key.reduce((acc, key) => {
          const breakpointStyleKey = breakpointsInput.up(key);
          acc[breakpointStyleKey] = {};
          return acc;
        }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused =
      !breakpointOutput || Object.keys(breakpointOutput).length === 0;

    if (isBreakpointUnused) {
      delete acc[key];
    }

    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce(
    (prev, next) => deepmerge(prev, next),
    {}
  );
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
} // compute base for responsive values; e.g.,
// [1,2,3] => {xs: true, sm: true, md: true}
// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}

function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  // fixed value
  if (typeof breakpointValues !== 'object') {
    return {};
  }

  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);

  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }

  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase,
}) {
  const base =
    customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);

  if (keys.length === 0) {
    return breakpointValues;
  }

  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] =
        breakpointValues[i] != null
          ? breakpointValues[i]
          : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === 'object') {
      acc[breakpoint] =
        breakpointValues[breakpoint] != null
          ? breakpointValues[breakpoint]
          : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }

    return acc;
  }, {});
}

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  } // Check if CSS variables are used

  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`
      .split('.')
      .reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);

    if (val != null) {
      return val;
    }
  }

  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }

    return null;
  }, obj);
}

function getValue(
  themeMapping,
  transform,
  propValueFinal,
  userValue = propValueFinal
) {
  let value;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }

  if (transform) {
    value = transform(value);
  }

  return value;
}

function style(options) {
  const { prop, cssProperty = options.prop, themeKey, transform } = options;

  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = (propValueFinal) => {
      let value = getValue(themeMapping, transform, propValueFinal);

      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getValue(
          themeMapping,
          transform,
          `${prop}${
            propValueFinal === 'default' ? '' : capitalize(propValueFinal)
          }`,
          propValueFinal
        );
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value,
      };
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}

function memoize$1(fn) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding',
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py',
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = memoize$1((prop) => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction)
    ? direction.map((dir) => property + dir)
    : [property + direction];
});
const marginKeys = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
];
const paddingKeys = [
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;

  const themeSpacing =
    (_getPath = getPath(theme, themeKey, false)) != null
      ? _getPath
      : defaultValue;

  if (typeof themeSpacing === 'number') {
    return (abs) => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return (abs) => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8);
}
function getValue$1(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) =>
    cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue$1(transformer, propValue);
      return acc;
    }, {});
}

function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }

  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}

function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props)
    .map((prop) => resolveCssProperty(props, keys, prop, transformer))
    .reduce(merge, {});
}

function margin(props) {
  return style$1(props, marginKeys);
}
margin.propTypes = {};
margin.filterProps = marginKeys;
function padding(props) {
  return style$1(props, paddingKeys);
}
padding.propTypes = {};
padding.filterProps = paddingKeys;

function spacing(props) {
  return style$1(props, spacingKeys);
}

spacing.propTypes = {};
spacing.filterProps = spacingKeys;

const _excluded = ['values', 'unit', 'step'];

const sortBreakpointsValues = (values) => {
  const breakpointsAsArray =
    Object.keys(values).map((key) => ({
      key,
      val: values[key],
    })) || []; // Sort in ascending order

  breakpointsAsArray.sort(
    (breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val
  );
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val,
    });
  }, {});
}; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536, // large screen
      },
      unit = 'px',
      step = 5,
    } = breakpoints,
    other = _objectWithoutPropertiesLoose(breakpoints, _excluded);

  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return (
      `@media (min-width:${
        typeof values[start] === 'number' ? values[start] : start
      }${unit}) and ` +
      `(max-width:${
        (endIndex !== -1 && typeof values[keys[endIndex]] === 'number'
          ? values[keys[endIndex]]
          : end) -
        step / 100
      }${unit})`
    );
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);

    if (keyIndex === 0) {
      return up(keys[1]);
    }

    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }

    return between(key, keys[keys.indexOf(key) + 1]).replace(
      '@media',
      '@media not all and'
    );
  }

  return _extends(
    {
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit,
    },
    other
  );
}

const shape = {
  borderRadius: 4,
};

/* tslint:enable:unified-signatures */
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage

  const transform = createUnarySpacing({
    spacing: spacingInput,
  });

  const spacing = (...argsInput) => {
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args
      .map((argument) => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      })
      .join(' ');
  };

  spacing.mui = true;
  return spacing;
}

const _excluded$1 = ['breakpoints', 'palette', 'spacing', 'shape'];

function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {},
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded$1);

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge(
    {
      breakpoints,
      direction: 'ltr',
      components: {},
      // Inject component definitions.
      palette: _extends(
        {
          mode: 'light',
        },
        paletteInput
      ),
      spacing,
      shape: _extends({}, shape, shapeInput),
    },
    other
  );
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

const ThemeContext$1 = /*#__PURE__*/ react.createContext(null);

function useTheme() {
  const theme = react.useContext(ThemeContext$1);

  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return _extends({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */

function ThemeProvider(props) {
  const { children, theme: localTheme } = props;
  const outerTheme = useTheme();

  const theme = react.useMemo(() => {
    const output =
      outerTheme === null
        ? localTheme
        : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/ jsxRuntime.jsx(ThemeContext$1.Provider, {
    value: theme,
    children: children,
  });
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme$1(defaultTheme = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme)
    ? defaultTheme
    : contextTheme;
}

const systemDefaultTheme = createTheme();

function useTheme$2(defaultTheme = systemDefaultTheme) {
  return useTheme$1(defaultTheme);
}

function getThemeProps(params) {
  const { theme, name, props } = params;

  if (
    !theme ||
    !theme.components ||
    !theme.components[name] ||
    !theme.components[name].defaultProps
  ) {
    return props;
  }

  return resolveProps(theme.components[name].defaultProps, props);
}

function useThemeProps({ props, name, defaultTheme }) {
  const theme = useTheme$2(defaultTheme);
  const mergedProps = getThemeProps({
    theme,
    name,
    props,
  });
  return mergedProps;
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */

function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n, index) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
        })
        .join(', ')})`
    : '';
}

function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color));
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }

    if (
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        colorSpace
      ) === -1
    ) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }

  values = values.map((value) => parseFloat(value));
  return {
    type,
    values,
    colorSpace,
  };
}
/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */

const colorChannel = (color) => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values
    .slice(0, 3)
    .map((val, idx) =>
      decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val
    )
    .join(' ');
};
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const { type, colorSpace } = color;
  let { values } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }

  return `${type}(${values})`;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */

function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const { values } = decomposeColor(color);
  return `#${values
    .map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n))
    .join('')}`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const { values } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb,
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb =
    color.type === 'hsl'
      ? decomposeColor(hslToRgb(color)).values
      : color.values;
  rgb = rgb.map((val) => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  );
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (
    color.type.indexOf('rgb') !== -1 ||
    color.type.indexOf('color') !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5
    ? darken(color, coefficient)
    : lighten(color, coefficient);
}

function InnerThemeProvider(props) {
  const theme = useTheme$2();
  return /*#__PURE__*/ jsxRuntime.jsx(ThemeContext.Provider, {
    value: typeof theme === 'object' ? theme : {},
    children: props.children,
  });
}
/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 */

function ThemeProvider$1(props) {
  const { children, theme: localTheme } = props;
  return /*#__PURE__*/ jsxRuntime.jsx(ThemeProvider, {
    theme: localTheme,
    children: /*#__PURE__*/ jsxRuntime.jsx(InnerThemeProvider, {
      children: children,
    }),
  });
}

export {
  rgbToHex as $,
  spacing as A,
  createEmptyBreakpointObject as B,
  CacheProvider as C,
  removeUnusedBreakpoints as D,
  useTheme$2 as E,
  css as F,
  GlobalStyles as G,
  keyframes as H,
  breakpoints as I,
  mergeBreakpointsInOrder as J,
  resolveBreakpointValues as K,
  getPath as L,
  createBreakpoints as M,
  createSpacing as N,
  shape as O,
  getThemeProps as P,
  useTheme$1 as Q,
  createUnarySpacing as R,
  getStyleFromPropValue as S,
  ThemeProvider$1 as T,
  margin as U,
  padding as V,
  hexToRgb as W,
  decomposeColor as X,
  colorChannel as Y,
  recomposeColor as Z,
  _extends as _,
  _objectWithoutPropertiesLoose as a,
  hslToRgb as a0,
  getLuminance as a1,
  alpha as a2,
  emphasize as a3,
  _extends_1 as a4,
  darken as b,
  createTheme as c,
  deepmerge as d,
  ThemeContext as e,
  formatMuiErrorMessage as f,
  getContrastRatio as g,
  getRegisteredStyles as h,
  insertStyles as i,
  jsxRuntime as j,
  createCache as k,
  lighten as l,
  memoize as m,
  isPlainObject as n,
  capitalize as o,
  resolveProps as p,
  merge as q,
  registerStyles as r,
  serializeStyles as s,
  style as t,
  useThemeProps as u,
  createUnaryUnit as v,
  withEmotionCache as w,
  handleBreakpoints as x,
  getValue$1 as y,
  values as z,
};
