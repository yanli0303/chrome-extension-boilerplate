var e, r, o;
(e = 'background'),
  (r = {
    login: function (e) {
      var r = e.body;
      return (
        'string' == typeof r && r
          ? chrome.tabs
              .query({ active: !0, lastFocusedWindow: !0 })
              .then(function (e) {
                var o = e[0];
                o &&
                  o.id &&
                  chrome.tabs.sendMessage(o.id, {
                    from: 'background',
                    to: 'content',
                    type: 'alert',
                    body: 'logged in as ' + r,
                  });
              })
          : console.error('[background] login: invalid body', r),
        !1
      );
    },
    logout: function () {
      return (
        chrome.tabs
          .query({ active: !0, lastFocusedWindow: !0 })
          .then(function (e) {
            var r = e[0];
            r &&
              r.id &&
              chrome.tabs.sendMessage(r.id, {
                from: 'background',
                to: 'content',
                type: 'alert',
                body: 'logged out',
              });
          }),
        !1
      );
    },
  }),
  (o = {}),
  chrome.runtime.onMessage.addListener(function (n, t, a) {
    if (
      !(function (e, r) {
        var o = e.to;
        return Array.isArray(o) ? 0 === o.length || o.includes(r) : o === r;
      })(n, e)
    )
      return !1;
    var s = n.type;
    if (n.isReply) {
      var i = o[s];
      return (
        i
          ? i(n, t)
          : console.error('[' + e + '] No handler for response message ' + s),
        !1
      );
    }
    var d = r[s];
    return d
      ? d(n, t, a)
      : (console.error('[' + e + '] No handler for request message ' + s), !1);
  });
//# sourceMappingURL=index.js.map
