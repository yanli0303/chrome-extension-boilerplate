var r, e, n;
(r = 'content'),
  (e = {
    alert: function (r) {
      return window.alert(r.body), !1;
    },
  }),
  (n = {}),
  chrome.runtime.onMessage.addListener(function (o, t, a) {
    if (
      !(function (r, e) {
        var n = r.to;
        return Array.isArray(n) ? 0 === n.length || n.includes(e) : n === e;
      })(o, r)
    )
      return !1;
    var s = o.type;
    if (o.isReply) {
      var i = n[s];
      return (
        i
          ? i(o, t)
          : console.error('[' + r + '] No handler for response message ' + s),
        !1
      );
    }
    var u = e[s];
    return u
      ? u(o, t, a)
      : (console.error('[' + r + '] No handler for request message ' + s), !1);
  });
//# sourceMappingURL=index.js.map
