/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(c) {
  throw c;
}
var i = void 0, k = !0, m = null, A = !1;
function M() {
  return function() {
  }
}
var N = {ck:this};
(function() {
  function c(b, c) {
    for(var d = 0, j = b.length;d < j;d++) {
      if(b[d].label == c) {
        return b[d]
      }
    }
  }
  N.ha = function(b) {
    this.type = "none";
    this.root = this;
    this.tb = [];
    this.Lf = [];
    this.Qf = [];
    if(b !== i) {
      for(var c in b) {
        b.hasOwnProperty(c) && (b[c].label = c, b[c] instanceof N.ac ? this.tb.push(b[c]) : b[c] instanceof N.Ya ? this.Lf.push(b[c]) : b[c] instanceof N.ce && this.Qf.push(b[c]))
      }
      b = 0;
      for(c = this.tb.length;b < c;b++) {
        this.tb[b].oc(this)
      }
      b = 0;
      for(c = this.Lf.length;b < c;b++) {
        this.Lf[b].oc(this)
      }
      b = 0;
      for(c = this.Qf.length;b < c;b++) {
        this.Qf[b].oc(this)
      }
    }
  };
  N.ha.prototype.cj = function(b) {
    return c(this.tb, b)
  };
  N.ha.prototype.nl = function() {
    for(var b = [], c = 0, d = this.tb.length;c < d;c++) {
      var j = this.tb[c];
      j.label && 0 === j.label.indexOf("top") && (b[b.length] = j.label)
    }
    return b
  };
  N.ha.prototype.cl = function(b) {
    var c;
    if(c = this.cj(b)) {
      return c
    }
    h(Error("action labeled '" + b + "' is undefined."))
  };
  N.ha.prototype.dl = function(b) {
    return c(this.Lf, b)
  };
  N.ha.prototype.el = function(b) {
    var c;
    if(c = this.dl(b)) {
      return c
    }
    h(Error("bullet labeled '" + b + "' is undefined."))
  };
  N.ha.prototype.fl = function(b) {
    return c(this.Qf, b)
  };
  N.ha.prototype.gl = function(b) {
    var c;
    if(c = this.fl(b)) {
      return c
    }
    h(Error("fire labeled '" + b + "' is undefined."))
  };
  N.Ya = function() {
    this.root = this.label = m;
    this.direction = new N.Rc(0);
    this.speed = new N.Xc(1);
    this.tb = [];
    this.fb = {};
    this.Ga = {}
  };
  N.Ya.prototype.clone = function(b) {
    var c = new N.Ya;
    c.label = this.label;
    c.root = this.root;
    c.tb = this.tb;
    c.direction = new N.Rc(b.nb(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new N.Xc(b.nb(this.speed.value));
    c.speed.type = this.speed.type;
    c.fb = this.fb;
    c.Ga = b.Ga;
    return c
  };
  N.Ya.prototype.oc = function(b) {
    this.root = b;
    for(var c = 0, d = this.tb.length;c < d;c++) {
      this.tb[c].oc(b)
    }
  };
  N.uf = function(b) {
    this.root = m;
    this.label = b;
    this.pb = []
  };
  N.uf.prototype.clone = function(b) {
    var c = b.Ga;
    b.Ga = b.Zg(this.pb);
    var d = this.root.el(this.label).clone(b);
    b.Ga = c;
    return d
  };
  N.uf.prototype.oc = function(b) {
    this.root = b
  };
  N.sb = function() {
    this.Pb = ""
  };
  N.sb.prototype.oc = function(b) {
    this.root = b
  };
  N.ac = function() {
    this.Pb = "action";
    this.root = this.label = m;
    this.tc = [];
    this.pb = []
  };
  N.ac.prototype = new N.sb;
  N.ac.prototype.oc = function(b) {
    this.root = b;
    for(var c = 0, d = this.tc.length;c < d;c++) {
      this.tc[c].oc(b)
    }
  };
  N.ac.prototype.clone = function() {
    var b = new N.ac;
    b.label = this.label;
    b.root = this.root;
    b.tc = this.tc;
    return b
  };
  N.be = function(b) {
    this.Pb = "actionRef";
    this.label = b;
    this.root = m;
    this.pb = []
  };
  N.be.prototype = new N.sb;
  N.be.prototype.clone = function() {
    var b = new N.ac;
    b.root = this.root;
    b.tc.push(this);
    return b
  };
  N.ce = function() {
    this.Pb = "fire";
    this.Ha = this.speed = this.direction = this.root = this.label = m;
    this.fb = new N.yf
  };
  N.ce.prototype = new N.sb;
  N.ce.prototype.oc = function(b) {
    this.root = b;
    this.Ha && this.Ha.oc(b)
  };
  N.qg = function(b) {
    this.Pb = "fireRef";
    this.label = b;
    this.pb = []
  };
  N.qg.prototype = new N.sb;
  N.wf = function() {
    this.Pb = "changeDirection";
    this.direction = new N.Rc;
    this.Mb = 0
  };
  N.wf.prototype = new N.sb;
  N.xf = function() {
    this.Pb = "changeSpeed";
    this.speed = new N.Xc;
    this.Mb = 0
  };
  N.xf.prototype = new N.sb;
  N.sf = function() {
    this.Pb = "accel";
    this.Nc = new N.vg;
    this.Qc = new N.Wg;
    this.Mb = 0
  };
  N.sf.prototype = new N.sb;
  N.Ef = function(b) {
    this.Pb = "wait";
    this.value = b || 0
  };
  N.Ef.prototype = new N.sb;
  N.Vg = function() {
    this.Pb = "vanish"
  };
  N.Vg.prototype = new N.sb;
  N.Cf = function() {
    this.Pb = "repeat";
    this.Jj = 0;
    this.action = m;
    this.pb = []
  };
  N.Cf.prototype = new N.sb;
  N.Cf.prototype.oc = function(b) {
    this.root = b;
    this.action && this.action.oc(b)
  };
  N.lg = function(b, c) {
    this.Pb = "bind";
    this.gm = b;
    this.bl = c
  };
  N.lg.prototype = new N.sb;
  N.Lg = function(b, c) {
    this.Pb = "notify";
    this.Zk = b;
    this.pb = c || m
  };
  N.Lg.prototype = new N.sb;
  N.ak = new N.sb;
  N.Rc = function(b) {
    this.type = "aim";
    this.value = b || 0
  };
  N.Xc = function(b) {
    this.type = "absolute";
    this.value = b === i ? 1 : b
  };
  N.vg = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  N.Wg = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  N.yf = function(b) {
    b = b || {};
    this.offsetX = b.offsetX || 0;
    this.offsetY = b.offsetY || 0;
    this.ra = k;
    b.ra !== i && (this.ra = !!b.ra)
  };
  N.Di = function(b) {
    this.value = b || 0
  };
  N.Ei = function(b) {
    this.value = b || 0
  };
  N.mi = function(b) {
    this.value = !!b
  }
})();
N.Qa = function(c) {
  this.Mi = c;
  this.Ff = [];
  this.ld = -1;
  this.Cb = m;
  this.Ga = {}
};
N.Qa.prototype.next = function() {
  this.ld += 1;
  if(this.Cb !== m) {
    var c = this.Cb.tc[this.ld];
    if(c !== i) {
      if(c instanceof N.ac) {
        return this.Oe(), this.Cb = c, this.Ga = this.Xg(), this.next()
      }
      if(c instanceof N.be) {
        return this.Oe(), this.Cb = this.Mi.cl(c.label), this.Ga = this.Zg(c.pb), this.next()
      }
      if(c instanceof N.Cf) {
        return this.Ga.ye = 0, this.Ga.rj = this.nb(c.Jj) | 0, this.Oe(), this.Cb = c.action.clone(), this.Ga = this.Xg(), this.next()
      }
      if(c instanceof N.ce) {
        var b = new N.ce;
        b.Ha = c.Ha.clone(this);
        c.direction !== m && (b.direction = new N.Rc(this.nb(c.direction.value)), b.direction.type = c.direction.type);
        c.speed !== m && (b.speed = new N.Xc(this.nb(c.speed.value)), b.speed.type = c.speed.type);
        b.fb = new N.yf;
        b.fb.offsetX = this.nb(c.fb.offsetX);
        b.fb.offsetY = this.nb(c.fb.offsetY);
        b.fb.ra = c.fb.ra;
        return b
      }
      return c instanceof N.qg ? (this.Oe(), this.Cb = new N.ac, this.Cb.tc = [this.Mi.gl(c.label)], this.Ga = this.Zg(c.pb), this.next()) : c instanceof N.wf ? (b = new N.wf, b.direction.type = c.direction.type, b.direction.value = this.nb(c.direction.value), b.Mb = this.nb(c.Mb), b) : c instanceof N.xf ? (b = new N.xf, b.speed.type = c.speed.type, b.speed.value = this.nb(c.speed.value), b.Mb = this.nb(c.Mb), b) : c instanceof N.sf ? (b = new N.sf, b.Nc.type = c.Nc.type, b.Nc.value = this.nb(c.Nc.value), 
      b.Qc.type = c.Qc.type, b.Qc.value = this.nb(c.Qc.value), b.Mb = this.nb(c.Mb), b) : c instanceof N.Ef ? new N.Ef(this.nb(c.value)) : c instanceof N.Vg ? c : c instanceof N.lg ? (this.Ga["$" + c.gm] = this.nb(c.bl), N.ak) : c instanceof N.Lg ? c : m
    }
    this.Lk();
    if(this.Cb === m) {
      return m
    }
    if((c = this.Cb.tc[this.ld]) && "repeat" == c.Pb) {
      this.Ga.ye++, this.Ga.ye < this.Ga.rj && (this.Oe(), this.Cb = c.action.clone(), this.Ga = this.Xg())
    }
    return this.next()
  }
  return m
};
N.Qa.prototype.Oe = function() {
  this.Ff.push({action:this.Cb, cursor:this.ld, scope:this.Ga});
  this.ld = -1
};
N.Qa.prototype.Lk = function() {
  var c = this.Ff.pop();
  c ? (this.ld = c.cursor, this.Cb = c.action, this.Ga = c.scope) : (this.ld = -1, this.Cb = m, this.Ga = {})
};
N.Qa.prototype.nb = function(c) {
  var b;
  if("boolean" === typeof c || "number" === typeof c) {
    return c
  }
  if(isNaN(b = Number(c))) {
    if((b = this.Ga[c]) || (b = N.Qa.ob[c])) {
      return b
    }
    if("$rand" === c) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var f in N.Qa.ob) {
    N.Qa.ob.hasOwnProperty(f) && (b[f] = N.Qa.ob[f])
  }
  for(f in this.Ga) {
    this.Ga.hasOwnProperty(f) && (b[f] = this.Ga[f])
  }
  b.$rand = Math.random();
  (f = this.Ff[this.Ff.length - 1]) && (b.$loop = {index:f.scope.ye, count:f.scope.ye + 1, first:0 === f.scope.ye, last:f.scope.ye + 1 >= f.scope.rj});
  return(new Function("return " + c.split("$").join("this.$"))).apply(b)
};
N.Qa.prototype.Zg = function(c) {
  var b = {};
  if(c) {
    for(var f = 0, d = c.length;f < d;f++) {
      b["$" + (f + 1)] = this.nb(c[f])
    }
  }else {
    for(f in this.Ga) {
      this.Ga.hasOwnProperty(f) && (b[f] = this.Ga[f])
    }
  }
  return b
};
N.Qa.prototype.Xg = function() {
  var c = {}, b;
  for(b in this.Ga) {
    this.Ga.hasOwnProperty(b) && (c[b] = this.Ga[b])
  }
  return c
};
N.ha.prototype.Ah = function(c) {
  var b = new N.Qa(this);
  if(c = this.cj(c)) {
    b.Cb = c
  }
  return b
};
N.Ya.prototype.Ah = function() {
  var c = new N.Qa(this.root), b = new N.ac;
  b.root = this.root;
  b.tc = this.tb;
  c.Cb = b;
  c.Ga = this.Ga;
  return c
};
N.Qa.ob = {};
N.La = function(c) {
  c = c || "";
  for(var b in N.La) {
    N.La.hasOwnProperty(b) && (N.ck[c + b] = N.La[b])
  }
};
N.La.action = function(c) {
  if(0 < arguments.length) {
    for(var b = 0, f = arguments.length;b < f;b++) {
      arguments[b] instanceof Function && (arguments[b] = arguments[b]())
    }
  }
  if(c instanceof Array) {
    b = 0;
    for(f = c.length;b < f;b++) {
      c[b] instanceof Function && (c[b] = c[b]())
    }
  }
  var d = new N.ac;
  if(c instanceof Array) {
    c.some(function(b) {
      return!(b instanceof N.sb)
    }) && h(Error("argument type error.")), d.tc = c
  }else {
    b = 0;
    for(f = arguments.length;b < f;b++) {
      arguments[b] instanceof N.sb ? d.tc[b] = arguments[b] : h(Error("argument type error."))
    }
  }
  return d
};
N.La.ga = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new N.be(c);
  if(b instanceof Array) {
    d.pb = b
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.pb.push(arguments[f])
    }
  }
  return d
};
N.La.Ha = function(c, b, f, d) {
  for(var j = 0, n = arguments.length;j < n;j++) {
    arguments[j] instanceof Function && (arguments[j] = arguments[j]())
  }
  n = new N.Ya;
  for(j = 0;j < arguments.length;j++) {
    arguments[j] instanceof N.Rc ? n.direction = arguments[j] : arguments[j] instanceof N.Xc ? n.speed = arguments[j] : arguments[j] instanceof N.ac ? n.tb.push(arguments[j]) : arguments[j] instanceof N.be ? n.tb.push(arguments[j]) : arguments[j] instanceof Array ? n.tb.push(N.La.action(arguments[j])) : arguments[j] instanceof Object ? n.fb = arguments[j] : "string" === typeof arguments[j] && (n.label = arguments[j])
  }
  return n
};
N.La.km = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new N.uf(c);
  if(b instanceof Array) {
    d.pb = b
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.pb.push(arguments[f])
    }
  }
  return d
};
N.La.fire = function(c, b, f, d) {
  for(var j = 0, n = arguments.length;j < n;j++) {
    arguments[j] instanceof Function && (arguments[j] = arguments[j]())
  }
  n = new N.ce;
  for(j = 0;j < arguments.length;j++) {
    arguments[j] instanceof N.Rc ? n.direction = arguments[j] : arguments[j] instanceof N.Xc ? n.speed = arguments[j] : arguments[j] instanceof N.Ya ? n.Ha = arguments[j] : arguments[j] instanceof N.uf ? n.Ha = arguments[j] : arguments[j] instanceof N.yf ? n.fb = arguments[j] : arguments[j] instanceof N.Di ? n.fb.offsetX = arguments[j].value : arguments[j] instanceof N.Ei ? n.fb.offsetY = arguments[j].value : arguments[j] instanceof N.mi && (n.fb.ra = arguments[j].value)
  }
  n.Ha === i && h(Error("bullet (or bulletRef) is required."));
  return n
};
N.La.qm = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new N.qg(c);
  if(b instanceof Array) {
    d.pb = b
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.pb.push(arguments[f])
    }
  }
  return d
};
N.La.lm = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  f = new N.wf;
  f.direction = c instanceof N.Rc ? c : new N.Rc(c);
  f.Mb = b;
  return f
};
N.La.pd = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  f = new N.xf;
  f.speed = c instanceof N.Xc ? c : new N.Xc(c);
  f.Mb = b;
  return f
};
N.La.im = function(c, b, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new N.sf;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof N.vg ? j.Nc = c : arguments[d] instanceof N.Wg ? j.Qc = b : j.Mb = arguments[d]
  }
  j.Nc === i && j.Qc === i && h(Error("horizontal or vertical is required."));
  j.Mb === i && h(Error("term is required."));
  return j
};
N.La.wait = function(c) {
  for(var b = 0, f = arguments.length;b < f;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  c === i && h(Error("value is required."));
  return new N.Ef(c)
};
N.La.va = function() {
  return new N.Vg
};
N.La.repeat = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  d = new N.Cf;
  d.Jj = c;
  if(b instanceof N.ac || b instanceof N.be) {
    d.action = b
  }else {
    if(b instanceof Array) {
      d.action = N.La.action(b)
    }else {
      for(var j = [], f = 1;f < arguments.length;f++) {
        j.push(arguments[f])
      }
      d.action = N.La.action(j)
    }
  }
  return d
};
N.La.la = function(c, b) {
  return new N.lg(c, b)
};
N.La.ym = function(c, b) {
  return new N.Lg(c, b)
};
N.La.direction = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new N.Rc(c);
  b !== i && (f.type = b);
  return f
};
N.La.speed = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new N.Xc(c);
  b && (f.type = b);
  return f
};
N.La.Nc = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new N.vg(c);
  b && (f.type = b);
  return f
};
N.La.Qc = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new N.Wg(c);
  b && (f.type = b);
  return f
};
N.La.pm = function(c) {
  return new N.yf(c)
};
N.La.offsetX = function(c) {
  return new N.Di(c)
};
N.La.offsetY = function(c) {
  return new N.Ei(c)
};
N.La.ra = function(c) {
  return new N.mi(c)
};
tm.Ob = tm.Ob || {};
(function() {
  function c(b) {
    for(;b <= -Math.PI;) {
      b += 2 * Math.PI
    }
    for(;Math.PI < b;) {
      b -= 2 * Math.PI
    }
    return b
  }
  function b(b, c) {
    return Math.atan2(c.y - b.y, c.x - b.x)
  }
  tm.Ob.Ed = tm.createClass({init:function(b) {
    b || h(Error("argument is invalid.", b));
    this.Ki = b
  }, Xe:function(b, c) {
    var d = this.Ki.nl();
    if(c === i && 0 < d.length) {
      for(var f = [], D = 0, F = d.length;D < F;D++) {
        f[f.length] = this.Li(b, d[D])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var b = f.length;b--;) {
            f[b].call(this)
          }
          p.qh == f.length && (p.We = k, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, D = f.length;D--;) {
        f[D].cg = p
      }
      p.qh = 0;
      p.Vi = function() {
        this.qh++
      };
      p.qh = 0;
      p.We = A;
      p.Xf = k;
      p.stop = A;
      return p
    }
    return this.Li(b, c)
  }, Li:function(b, c) {
    function d() {
      if(!d.stop) {
        d.pa += 1;
        this.pa = d.pa;
        var b = d.Mf, c = d.Kk;
        if(c) {
          if(d.pa < d.oh ? d.direction += d.pe : d.pa === d.oh && (d.direction = d.rd), d.pa < d.ph ? d.speed += d.qf : d.pa === d.ph && (d.speed = d.Ee), d.pa < d.bh ? (d.Yd += d.If, d.$d += d.Jf) : d.pa === d.bh && (d.Yd = d.Gf, d.$d = d.Hf), this.x += Math.cos(d.direction) * d.speed * b.Zd, this.y += Math.sin(d.direction) * d.speed * b.Zd, this.x += d.Yd * b.Zd, this.y += d.$d * b.Zd, b.Dh(this)) {
            if(b.Bd || this.Bd) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.pa < d.Rj || d.We)) {
              for(var f;f = d.Sj.next();) {
                switch(f.Pb) {
                  case "fire":
                    c.Hk.call(this, f, b, d, c);
                    break;
                  case "wait":
                    b = 0;
                    d.Rj = "number" === typeof f.value ? d.pa + f.value : 0 !== (b = ~~f.value) ? d.pa + b : d.pa + eval(f.value);
                    return;
                  case "changeDirection":
                    c.Ck.call(this, f, b, d);
                    break;
                  case "changeSpeed":
                    c.Dk.call(this, f, d);
                    break;
                  case "accel":
                    c.Ak.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    c.Ik.call(this, f)
                }
              }
              d.We = k;
              d.cg ? d.cg.Vi() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.We = k, d.cg ? d.cg.Vi() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    b = function(b) {
      var c = {}, d = tm.Ob.Ed.Ye, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      return c
    }(b);
    b.target || h(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? d.Sj = this.Ki.Ah(c) : c instanceof N.Ya ? d.Sj = c.Ah() : (window.console.error(b, c), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Kk = this;
    d.Mf = b;
    d.Rj = -1;
    d.We = A;
    d.direction = 0;
    d.oj = 0;
    d.speed = 0;
    d.qj = 0;
    d.Yd = 0;
    d.$d = 0;
    d.pe = 0;
    d.rd = 0;
    d.oh = -1;
    d.qf = 0;
    d.Ee = 0;
    d.ph = -1;
    d.If = 0;
    d.Gf = 0;
    d.Jf = 0;
    d.Hf = 0;
    d.bh = -1;
    d.pa = -1;
    d.stop = A;
    d.Xf = k;
    return d
  }, Gk:function(b) {
    function c() {
      c.stop || (this.x += c.Zi, this.y += c.$i, c.Mf.Dh(this) || this.remove())
    }
    b = function(b) {
      var c = {}, d = tm.Ob.Ed.Ye, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      return c
    }(b);
    b.target || h(Error("target is undefined in config."));
    c.Mf = b;
    c.direction = 0;
    c.speed = 0;
    c.Zi = 0;
    c.$i = 0;
    c.stop = A;
    c.Xf = k;
    return c
  }, Hk:function(c, d, f, H) {
    if(this.Ml === i || this.Qb) {
      var D = {label:c.Ha.label}, F;
      for(F in c.Ha.fb) {
        D[F] = c.Ha.fb[F]
      }
      if(D = d.Qi(D)) {
        H = (F = 0 === c.Ha.tb.length) ? H.Gk(d) : H.Xe(d, c.Ha);
        var p = this, q = {x:this.x + c.fb.offsetX, y:this.y + c.fb.offsetY};
        f.oj = H.direction = function(r) {
          var l = eval(r.value) * Math.DEG_TO_RAD;
          switch(r.type) {
            case "aim":
              return d.target ? c.fb.ra ? b(q, d.target) + l : b(p, d.target) + l : l - Math.PI / 2;
            case "absolute":
              return l - Math.PI / 2;
            case "relative":
              return f.direction + l;
            default:
              return f.oj + l
          }
        }(c.direction || c.Ha.direction);
        f.qj = H.speed = function(b) {
          var c = eval(b.value);
          switch(b.type) {
            case "relative":
              return f.speed + c;
            case "sequence":
              return f.qj + c;
            default:
              return c
          }
        }(c.speed || c.Ha.speed);
        D.x = q.x;
        D.y = q.y;
        F && (H.Zi = Math.cos(H.direction) * H.speed * d.Zd, H.$i = Math.sin(H.direction) * H.speed * d.Zd);
        D.Bd = !!D.Bd;
        if(d.Bd || D.Bd) {
          D.rotation = (H.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, D.speed = H.speed
        }
        D.addEventListener("enterframe", H);
        d.je ? d.je.addChild(D) : this.parent && this.parent.addChild(D)
      }
    }
  }, Ck:function(d, f, u) {
    var H = eval(d.direction.value) * Math.DEG_TO_RAD, D = eval(d.Mb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        u.rd = b(this, d) + H;
        u.pe = c(u.rd - u.direction) / D;
        break;
      case "absolute":
        u.rd = H - Math.PI / 2;
        u.pe = c(u.rd - u.direction) / D;
        break;
      case "relative":
        u.rd = u.direction + H;
        u.pe = c(u.rd - u.direction) / D;
        break;
      case "sequence":
        u.pe = H, u.rd = u.direction + u.pe * (D - 1)
    }
    u.oh = u.pa + D
  }, Dk:function(b, c) {
    var d = eval(b.speed.value), f = eval(b.Mb);
    switch(b.speed.type) {
      case "absolute":
        c.Ee = d;
        c.qf = (c.Ee - c.speed) / f;
        break;
      case "relative":
        c.Ee = d + c.speed;
        c.qf = (c.Ee - c.speed) / f;
        break;
      case "sequence":
        c.qf = d, c.Ee = c.speed + c.qf * f
    }
    c.ph = c.pa + f
  }, Ak:function(b, c) {
    var d = eval(b.Mb);
    c.bh = c.pa + d;
    if(b.Nc) {
      var f = eval(b.Nc.value);
      switch(b.Nc.type) {
        case "absolute":
        ;
        case "sequence":
          c.If = (f - c.Yd) / d;
          c.Gf = f;
          break;
        case "relative":
          c.If = f, c.Gf = (f - c.Yd) * d
      }
    }else {
      c.If = 0, c.Gf = c.Yd
    }
    if(b.Qc) {
      switch(f = eval(b.Qc.value), b.Qc.type) {
        case "absolute":
        ;
        case "sequence":
          c.Jf = (f - c.$d) / d;
          c.Hf = f;
          break;
        case "relative":
          c.Jf = f, c.Hf = (f - c.$d) * d
      }
    }else {
      c.Jf = 0, c.Hf = c.$d
    }
  }, Ik:function(b) {
    var c = tm.event.Event(b.Zk);
    if(b.pb) {
      for(var d in b.pb) {
        c[d] = b.pb[d]
      }
    }
    this.dispatchEvent(c)
  }});
  var f = function() {
    var b = tm.graphics.Canvas();
    b.resize(8, 8);
    b.setTransformCenter();
    b.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    b.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(b.canvas.toDataURL())
  }();
  tm.Ob.Uk = function(b) {
    var c = tm.app.Sprite(f, 8, 8);
    c.label = b.label;
    return c
  };
  var d = m;
  tm.Ob.Yi = function(b) {
    if(d === m) {
      if(!b.getRoot().app) {
        return k
      }
      d = b.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= b.x && b.x < d.width && 0 <= b.y && b.y < d.height
  };
  tm.Ob.mm = function() {
    return k
  };
  tm.Ob.Ed.Ye = {Qi:tm.Ob.Uk, Dh:tm.Ob.Yi, Dm:0, Bd:A, Zd:2, target:m};
  N.ha.prototype.Xe = function(b) {
    return tm.Ob.Ed(this).Xe(b)
  }
})();
/*
 TM-Shooter

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(M());
tm.main(function() {
  gls2.dk("#canvas2d");
  gls2.core.run()
});
gls2.dk = tm.createClass({superClass:tm.display.CanvasApp, mode:0, ci:0, af:0, ql:0, sl:0, rl:0, ol:0, pl:m, nd:3, zc:3, Pc:0, Db:A, aa:m, init:function(c) {
  gls2.core !== m && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(c);
  gls2.core = this;
  this.resize(480, 640);
  this.fitWindow();
  this.fps = FPS;
  this.background = "rgba(0,0,0,0)";
  this.ji = [];
  this.keyboard = tm.input.Keyboard(window);
  this.yh = tm.input.GamepadManager();
  this.gamepad = m;
  this.Rf = {}.$extend(gls2.gamepadConfigDefault);
  this.jg = [];
  c = tm.ui.LoadingScene({assets:{tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex5:"assets/tex5.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", "kanade-cannon":"assets/kanade-cannon.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", 
  laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", keyDown:"assets/arrow-down-icon.png", keyLeft:"assets/arrow-left-icon.png", keyRight:"assets/arrow-right-icon.png", keyUp:"assets/arrow-up-icon.png", keyC:"assets/letter-uppercase-C-icon.png", keyZ:"assets/letter-uppercase-Z-icon.png", 
  keyX:"assets/letter-uppercase-X-icon.png", exboss:"assets/exboss.png", bgmShipSelect:"assets2/nc99963.mp3", bgm1:"assets2/nc99049.mp3", bgmBoss:"assets2/nc66543.mp3", bgmResult:"assets2/nc66558.mp3", bgmEnding:"assets2/nc70056.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/explode4":"assets2/sen_ge_bom14.mp3", "sound/explode5":"assets2/sen_ge_bom17.mp3", "sound/explode6":"assets2/nc17909.mp3", 
  "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", 
  "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_machine.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, width:480, height:640, nextScene:function() {
    this.Jk();
    return gls2.TitleScene()
  }.bind(this)});
  c.bg.canvas.clearColor("black");
  this.replaceScene(c);
  if(c = localStorage.getItem("tmshooter.config")) {
    c = JSON.parse(c), this.nd = c.bgmVolume, this.zc = c.seVolume, this.Pc = c.particleEffectLevel, this.Db = c.bulletBig
  }
}, Ri:function() {
  var c = 0, b = window.achievementData, f;
  for(f in b) {
    b.hasOwnProperty(f) && (c += ~~b[f].unlocked)
  }
  return 3 + ~~(0.2 * c)
}, update:function() {
  this.yh._update();
  if(this.gamepad === m) {
    for(var c = 0;4 > c;c++) {
      if(this.yh.isConnected(c)) {
        this.gamepad = this.yh.get(c);
        break
      }
    }
  }
  for(var b = [].concat(this.ji), c = 0;c < b.length;c++) {
    b[c].frame === this.frame ? b[c].fn() : this.ji.erase(b[c])
  }
  0 === this.frame % 6 && this.Mk()
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Jk:function() {
  gls2.ya.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon exboss".split(" ").forEach(function(c) {
    var b = tm.asset.AssetManager.get(c), f = tm.graphics.Canvas();
    f.resize(b.width, b.height);
    f.drawTexture(b, 0, 0);
    var d = f.getBitmap();
    d.filter({calc:function(b, c, d, f, j) {
      j.setPixelIndex(c, b[0], 0, 0)
    }});
    var j = tm.graphics.Canvas();
    j.resize(b.width, b.height);
    j.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(c + "Red", j);
    f = f.getBitmap();
    f.filter({calc:function(b, c, d, f, j) {
      j.setPixelIndex(c, b[2], b[0], b[1])
    }});
    d = tm.graphics.Canvas();
    d.resize(b.width, b.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(c, d)
  });
  gls2.fa.setup();
  gls2.na.setup();
  this.aa = gls2.cb()
}, om:function() {
  this.stop()
}, xm:A, Aj:function(c, b) {
  if(0 === this.mode && gapi.client.games.scores.submit) {
    console.log("postScore", c, b);
    var f = gapi.client.games.scores.submit({leaderboardId:c, score:~~b, language:"ja"});
    this.jg.push({Cj:f, data:m})
  }
}, ji:m, setTimeoutF:function(c, b) {
  timeoutTasks.push({frame:this.frame + b, fn:c})
}, jg:m, li:A, ta:function(c) {
  if(0 === this.mode && window.achievementData && gapi.client.games.achievements.unlock) {
    var b = window.achievementData[c];
    b && (!b.unlocked && !b.waiting) && (b.waiting = k, c = gapi.client.games.achievements.unlock({achievementId:c}), this.jg.push({data:b, Cj:c}))
  }
}, Mk:function() {
  var c = this;
  if(!c.li) {
    var b = c.jg.shift();
    b && (c.li = k, b.Cj.execute(function(f) {
      c.li = A;
      b.data && (b.data.waiting = A);
      if(f.error) {
        console.warn(f)
      }else {
        if(f.unbeatenScores) {
          for(var d = 0, j = f.unbeatenScores.length;d < j;d++) {
            if("ALL_TIME" === f.unbeatenScores[d].timeSpan) {
              console.log("\u30cf\u30a4\u30b9\u30b3\u30a2\u66f4\u65b0\uff01");
              break
            }
          }
        }else {
          f.newlyUnlocked && b.data && (b.data.unlocked = k, gls2.xa("achevement"), c.aa.lj.addChild(gls2.wi(b.data.name)))
        }
      }
    }))
  }
}, Rf:m, getKeyDirection:function() {
  var c = tm.geom.Vector2(0, 0);
  this.gamepad !== m && (c.add(this.gamepad.getStickDirection()), 0.0625 > c.lengthSquared() && c.set(0, 0), c.add(this.gamepad.getKeyDirection()));
  c.add(this.keyboard.getKeyDirection());
  return c.normalize()
}, getKey:function(c) {
  var b = A;
  this.gamepad !== m && (b = this.gamepad.getKey(this.Rf[c]));
  return this.keyboard.getKey(c) || b
}, getKeyDown:function(c) {
  var b = A;
  this.gamepad !== m && (b = this.gamepad.getKeyDown(this.Rf[c]));
  return this.keyboard.getKeyDown(c) || b
}, getKeyUp:function(c) {
  var b = A;
  this.gamepad !== m && (b = this.gamepad.getKeyUp(this.Rf[c]));
  return this.keyboard.getKeyUp(c) || b
}});
gls2.gamepadConfigDefault = {z:"r2", x:"a", c:"x", up:"up", down:"down", left:"left", right:"right", space:"start"};
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Ub = function(c, b) {
  return(c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.cb.Le && gls2.cb.Le.jf(0)
};
var FPS = 60, O = [2E9, 2E10], U = [3, 2, 1, 5], V = [6, 4, 2, 99], Y = [1, 10, 20, 30, 45, 60, 85, 110, 150, 180, 300], aa = [1, 2, 4, 8, 10, 15, 20, 25, 30, 35, 40];
(function() {
  var c = m;
  gls2.Fi = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, bb:0, Lc:k, ke:k, eb:A, aa:m, speed:0, Tb:m, ne:m, uj:m, Vf:m, Xb:m, sd:m, Jc:m, Bh:m, Ch:m, frame:0, Aa:0, init:function(b, f, d) {
    this.superInit("fighter", 64, 64);
    this.aa = b;
    this.type = f;
    this.style = d;
    tm.Ob.Ed.Ye.target = this;
    this.speed = 1.2 * [6, 5, 4.5][f];
    this.boundingRadius = 2 === d || 3 === d ? 3 : 6;
    this.altitude = 10;
    this.ne = this.uj = gls2.Ii(f, 100);
    this.Vf = gls2.Ii(3, 100);
    this.Xb = gls2.Bi(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Xb.visible = A;
    this.Fk();
    this.Tb = this.Ek();
    1 === this.style && (this.Tb = [this.Tb[1], this.Tb[2]]);
    this.Jc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(d = this.Tb.length;f < d;f++) {
      var j = this.Tb[f];
      gls2.Xj(this, j).setPosition(j.x, j.y).addChildTo(this.Jc)
    }
    this.zl = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.zl.blendMode = "lighter";
    this.Bh = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Bh.blendMode = "lighter";
    this.Bh.update = function() {
      this.rotation += 2;
      this.visible = 0 < b.Wa && !b.ab
    };
    this.Ch = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ch.blendMode = "lighter";
    this.Ch.update = function() {
      this.rotation -= 2;
      this.visible = 0 < b.Wa && !b.ab
    };
    this.Wb = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.Wb.blendMode = "lighter";
    this.Wb.rotation = -90;
    this.Wb.strokeStyle = "rgba(180,180,255,0.4)";
    this.Wb.update = function() {
      this.visible = b.ab
    };
    this.Wb.draw = function(c) {
      c.lineCap = "round";
      var d = b.we / 600;
      c.strokeStyle = "rgba(50,50,255,0.4)";
      c.lineWidth = "15";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, A);
      c.strokeStyle = "rgba(100,100,255,0.4)";
      c.lineWidth = "8";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, A);
      c.strokeStyle = "rgba(180,180,255,0.4)";
      c.lineWidth = "4";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, A)
    };
    this.Td = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Td.update = function() {
      this.visible = b.ab
    };
    c === m && (c = gls2.ni(this.aa.ka))
  }, Ek:function() {
    if(0 === this.type) {
      return[{x:0, Pd:0, y:40, d:0, pc:k, ic:-0.7, v:k}, {x:0, Pd:0, y:40, d:0, pc:k, ic:0.5, v:k}, {x:0, Pd:0, y:40, d:0, pc:k, ic:-0.5, v:k}, {x:0, Pd:0, y:40, d:0, pc:k, ic:0.7, v:k}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, pc:A, ic:-0.7, v:k}, {x:-40, y:40, d:0.1, pc:A, ic:-0.5, v:k}, {x:40, y:40, d:0.1, pc:k, ic:0.5, v:k}, {x:70, y:20, d:0.1, pc:k, ic:0.7, v:k}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, pc:A, ic:-0.7, v:k}, {x:-30, y:20, d:0.4, pc:A, ic:-0.5, v:k}, {x:30, y:20, d:0.4, pc:k, ic:0.5, v:k}, {x:60, y:40, d:0.6, pc:k, ic:0.7, v:k}]
    }
  }, Fk:function() {
    this.sd = tm.display.Sprite("tex0", 20, 20);
    this.sd.setFrameIndex(5);
    this.sd.position = this.position;
    this.sd.update = function(b) {
      b = 1.2 + 0.15 * Math.sin(0.2 * b.frame);
      this.scale.set(b, b)
    }
  }, xd:-1, Rd:A, Vb:A, update:function(b) {
    this.alpha = this.eb ? 0 === b.frame / 2 % 2 ? 0.5 : 1 : 1;
    var f = 2 === gls2.core.mode ? this.aa.wa.keyboard : b, d = this.x;
    if(this.Lc || 2 === gls2.core.mode) {
      var j = f.getKeyDirection();
      this.x += j.x * this.speed * (this.Vb ? 0.5 : 1);
      this.y += j.y * this.speed * (this.Vb ? 0.5 : 1);
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var n = f.getKey("c") && this.ke;
      if(j = f.getKey("z") && this.ke) {
        this.aa.$h = k
      }
      this.xd = n ? this.xd + 1 : this.xd - 1;
      this.xd = gls2.ma.clamp(this.xd, -1, 1);
      this.Vb = j && n || 1 === this.xd;
      n = this.aa.ab ? 3 : 4;
      this.Rd = !this.Vb && (0 <= this.xd || j) && 0 === b.frame % n;
      j && (this.xd = 0);
      3 === this.style && this.Vb && (this.Rd = 0 === b.frame % n);
      this.Xb.x = this.x;
      this.Xb.y = this.y - 40;
      if(f.getKeyDown("x") && this.ke) {
        if(0 < this.aa.Wa && !this.aa.ab) {
          this.aa.$l(), gls2.vk(this).addChildTo(this.aa)
        }else {
          if(!this.aa.td && 0 < this.aa.hc) {
            this.Fb = gls2.ma.clamp(this.Fb - 2, 0, 1);
            this.aa.Pe(-0.02);
            gls2.pi(this, this.aa).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.aa);
            gls2.core.ta(gpgsConstants.ACH_BOMB);
            for(j = 0;j < gls2.Ya.gb.length;j++) {
              n = gls2.Ya.gb[j], n.visible !== A && 225 > (this.x - n.x) * (this.x - n.x) + (this.y - n.y) * (this.y - n.y) && gls2.core.ta(gpgsConstants.ACH_NICE_BOMB)
            }
            this.aa.Se[this.aa.Ba] += 1
          }
        }
      }
    }else {
      this.Vb = this.Rd = A
    }
    this.Aa = this.x - d;
    this.Rd && (d = Math.sin(0.2 * b.frame), j = this.ne.fire(this.x - 7 - 6 * d, this.y - 5, -90), j !== m && j.addChildTo(this.aa), j = this.ne.fire(this.x + 7 + 6 * d, this.y - 5, -90), j !== m && j.addChildTo(this.aa));
    if(this.Vb && 3 !== this.style) {
      j = 0;
      for(d = this.Tb.length;j < d;j++) {
        this.Tb[j].v = A
      }
      this.Jc.rotation = 0
    }else {
      j = 0;
      for(d = this.Tb.length;j < d;j++) {
        this.Tb[j].v = k
      }
    }
    this.Tk(f);
    this.Bk(f, b.frame);
    0 === b.frame % 2 && (c.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.aa), c.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.aa));
    this.frame = b.frame
  }, ad:function() {
    this.Vb = this.Rd = A;
    this.aa.Of();
    this.aa.ub = 0;
    this.aa.vb = 0;
    this.aa.Va = 0
  }, Tk:function() {
    if(0 === this.type) {
      for(var b = this.Tb.length;this.Tb[--b] !== i;) {
        var c = this.Tb[b];
        0 === b ? c.x = c.Pd + 60 * Math.cos(0.1 * this.frame) : 1 === b ? c.x = c.Pd + -60 * Math.cos(0.1 * this.frame) : 2 === b ? c.x = c.Pd + 60 * Math.sin(0.1 * this.frame) : 3 === b && (c.x = c.Pd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Jc, b.rotation = !this.Vb || 3 !== this.style ? this.Lc && 0 > this.Aa ? Math.max(b.rotation - 3, -50) : this.Lc && 0 < this.Aa ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0 : 0)
    }
  }, Bk:function(b, c) {
    (this.Lc || 2 === gls2.core.mode) && 0 > this.Aa ? this.bb = gls2.ma.clamp(this.bb - 0.2, -3, 3) : (this.Lc || 2 === gls2.core.mode) && 0 < this.Aa ? this.bb = gls2.ma.clamp(this.bb + 0.2, -3, 3) : 0 > this.bb ? this.bb = gls2.ma.clamp(this.bb + 0.2, -3, 3) : 0 < this.bb && (this.bb = gls2.ma.clamp(this.bb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.bb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(c / 2) % 3) + ~~this.bb) : 2 === this.type && this.setFrameIndex(31 + ~~this.bb);
    return c
  }});
  gls2.Xj = tm.createClass({superClass:tm.display.AnimationSprite, Nd:m, da:m, init:function(b, c) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Nd = c;
    this.da = b;
    this.altitude = 10;
    this.gotoAndPlay(c.pc ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Nd.v) {
      this.x = this.Nd.x * (this.da.aa.ab ? 1.5 : 1);
      this.y = this.Nd.y * (this.da.aa.ab ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Nd.d * this.Nd.ic);
      var f = this.parent.localToGlobal(this);
      this.Nd.v && 0 === b.frame % 2 && c.clone(40).setPosition(f.x, f.y).addChildTo(this.da.aa);
      this.da.Rd && (f = this.da.ne.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== m && f.addChildTo(b.aa))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var c = m;
  gls2.he = tm.createClass({superClass:tm.display.Sprite, speed:0, Jd:0, Qk:1, kj:0, lb:k, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.Jd = 1.2;
    c === m && (c = gls2.Na(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.of(b)
  }, update:function() {
    this.x += this.gd;
    this.y += this.Bc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, of:function(b) {
    3 === b ? (this.speed = 60, this.boundingRadius = 52) : (this.speed = 45, this.boundingRadius = 36)
  }, Sf:function(b) {
    for(var d = 0;d < b;d++) {
      var j = c.clone().setPosition(this.x, this.y).addChildTo(this.parent), n = gls2.ma.randf(2, 8), u = 2 * Math.random() * Math.PI;
      j.Aa = Math.cos(u) * n;
      j.Fa = Math.sin(u) * n;
      j.scaleX = j.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.Aa;
        this.y += this.Fa;
        this.Aa *= 0.9;
        this.Fa *= 0.9
      })
    }
  }});
  gls2.he.Ve = function() {
    for(var c = [].concat(b), d = 0, j = c.length;d < j;d++) {
      c[d].remove()
    }
  };
  var b = gls2.he.gb = [];
  gls2.Ii = tm.createClass({wd:m, ij:A, color:0, init:function(c, d) {
    this.color = c;
    this.ij = 3 === c;
    this.wd = [];
    for(var j = 0;j < d;j++) {
      var n = gls2.he(c), u = this;
      n.addEventListener("added", function() {
        this.qa = 20;
        b.push(this)
      });
      n.addEventListener("removed", function() {
        var c = b.indexOf(this);
        -1 !== c && b.splice(c, 1);
        u.wd.push(this)
      });
      this.ij && n.addEventListener("enterframe", function(b) {
        this.setScale((this.Qk + this.kj) * (0 === b.app.frame % 2 ? 1 : 1.2))
      });
      this.wd.push(n)
    }
  }, fire:function(b, c, j) {
    var n = this.wd.pop();
    if(n === i) {
      return m
    }
    var u = gls2.ma.degToRad(j);
    n.gd = Math.cos(u) * n.speed;
    n.Bc = Math.sin(u) * n.speed;
    n.setPosition(b, c);
    n.rotation = j + 90;
    n.setFrameIndex(this.color + 4 * gls2.ma.rand(0, 3), 64, 64);
    return n
  }, De:function(b) {
    for(var c = this.wd.length;this.wd[--c] !== i;) {
      this.wd[c].Jd = 1.2 + 0.5 * b, this.wd[c].kj = 0.2 * b
    }
  }})
})();
gls2.Bi = tm.createClass({superClass:tm.display.Sprite, da:m, aa:m, Ic:0, frame:0, Ij:m, color:m, Oi:0, kh:0, Rk:A, head:m, dj:m, hb:m, lb:k, Jd:1.2, ze:m, init:function(c, b) {
  this.da = c;
  this.aa = c.aa;
  this.Oi = 0 === this.da.style ? 1 : 1.2;
  this.kh = 0 === this.da.style ? 50 : 75;
  var f = this;
  this.Ij = b;
  this.superInit(b.redBody, this.kh, 100);
  this.boundingHeightBottom = 1;
  this.Gm = 0;
  this.origin.y = 1;
  var d = this.hb = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:1}, green:{frames:[4, 5, 6, 7], next:"green", frequency:1}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:1}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:1}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.dj = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:1}, green:{frames:[4, 5, 6, 7], next:"green", frequency:1}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:1}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:1}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:1}, green:{frames:[4, 5, 6, 7], next:"green", frequency:1}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:1}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:1}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.Ic - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.Ic
  };
  this.of(["red", "green", "blue"][this.da.type]);
  this.De(0)
}, of:function(c) {
  this.color = c;
  this.image = tm.asset.AssetManager.get(this.Ij[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.hb.gotoAndPlay(this.color);
  this.dj.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.ze = m;
  return this
}, De:function(c) {
  this.boundingWidth = this.width = this.kh + 30 * c / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.Jd = 1.2 * this.Oi + 0.25 * c;
  0 === c ? this.of(["red", "green", "blue"][this.da.type]) : this.of("hyper")
}, Sf:function(c, b) {
  this.ze === m && this.Wi();
  b = b || this.Ic;
  for(var f = 0;f < c;f++) {
    var d = this.ze.clone().setPosition(this.x, b).addChildTo(this.aa), j = gls2.ma.randf(8, 14), n = gls2.ma.randf(0, Math.PI);
    d.Aa = Math.cos(n) * j;
    d.Fa = Math.sin(n) * j;
    d.scaleX = d.scaleY = (gls2.ma.randf(0.5, 1.5) + gls2.ma.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Aa;
      this.y += this.Fa;
      this.Aa *= 0.95;
      this.Fa *= 0.95
    })
  }
}, jl:function(c, b, f) {
  this.ze === m && this.Wi();
  for(var d = 0;d < c;d++) {
    var j = this.ze.clone().setPosition(b, f).addChildTo(this.aa), n = gls2.ma.randf(12, 20), u = gls2.ma.randf(0, Math.PI);
    j.Aa = Math.cos(u) * n;
    j.Fa = Math.sin(u) * n;
    j.scaleX = j.scaleY = (gls2.ma.randf(1, 3) + gls2.ma.randf(1, 3)) / 2;
    j.addEventListener("enterframe", function() {
      this.x += this.Aa;
      this.y += this.Fa;
      this.Aa *= 0.95;
      this.Fa *= 0.95
    })
  }
}, Wi:function() {
  this.ze = "hyper" === this.color ? gls2.Na(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Na(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(c) {
  (this.visible = this.da.Vb) ? (this.Ic = Math.max(0, this.Ic - 40), this.height = this.y - this.Ic, 0 === c.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Ic = this.y - 40;
  this.Rk = this.visible
}, draw:function(c) {
  var b = this.srcRect, f = this._image.element;
  b.x = b.width * this.frame;
  c.context.drawImage(f, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, sm:function() {
  return this.Ic
}, Ul:function(c) {
  this.Ic = c;
  this.head.update()
}});
gls2.Bi.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Ic
});
(function() {
  gls2.pi = tm.createClass({superClass:tm.app.Object2D, lb:k, aa:m, init:function(b, f) {
    this.superInit();
    this.da = b;
    this.aa = f;
    this.Dj = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Dj.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Dj));
    this.Ni();
    c === m && (c = gls2.Na(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.pa = 0;
    this.kf = 1;
    this.addEventListener("added", function() {
      this.aa.td = k;
      this.da.eb = k;
      this.aa.hc -= 1;
      this.aa.bf = A;
      this.aa.Of();
      this.aa.Jb("drop BOMBER!!", k);
      gls2.xa("bomb");
      gls2.xa("voBomb")
    });
    this.addEventListener("removed", function() {
      this.aa.td = A;
      this.da.eb = A
    })
  }, Ni:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ma.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var f = this.a * this.kf + 2 * b * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.pa;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.pa += 3.6, this.kf = -1) : (this.b = 8, this.pa += 1.8, this.kf = 1)
  }});
  gls2.Ci = tm.createClass({superClass:gls2.pi, init:function(b, c) {
    this.superInit(b, c)
  }, Ni:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ma.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var f = this.a * this.kf + 2 * b * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.02 * this.pa;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.pa += 1.8, this.kf = 1)
  }});
  var c = m
})();
gls2.qi = tm.createClass({superClass:tm.display.Sprite, gd:0, Bc:0, da:m, pa:0, init:function(c, b, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(c, b);
  this.da = f;
  this.Bc = 1;
  this.gd = 0.5 > gls2.ya.random() ? -1 : 1;
  this.pa = 0
}, update:function() {
  this.x += this.gd;
  this.y += 2 * this.Bc;
  if(2025 > gls2.Ub(this, this.da)) {
    this.da.aa.Ok(1), this.remove()
  }else {
    if(3E3 > this.pa) {
      if(30 > this.x || 450 < this.x) {
        this.gd *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.Bc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.pa += 1
}});
gls2.ti = tm.createClass({superClass:tm.display.Sprite, gd:0, Bc:0, da:m, pa:0, labels:m, init:function(c, b, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  this.labels = [];
  for(var d = -1;1 >= d;d++) {
    for(var j = -1;1 >= j;j++) {
      this.labels.push(tm.display.Label("1 up", 30).setFillStyle("hsla(180, 60%, 60%, 0.2)").setPosition(d, j).addChildTo(this))
    }
  }
  this.setPosition(c, b);
  this.da = f
}, update:function(c) {
  this.y += 0.5;
  4096 > gls2.Ub(this, this.da) && (this.da.aa.aj(), gls2.core.ta(gpgsConstants.ACH_PRESENT_FROM_ALICE), this.remove());
  704 < this.y && this.remove();
  this.labels.forEach(function(b) {
    b.setScale(1 + 0.3 * Math.sin(0.2 * c.frame))
  })
}});
gls2.na = {};
gls2.na.setup = function() {
  gls2.Yk = {};
  gls2.na.explosion = Array.range(0, 3).map(function(c) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + c, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:m}}}, 100, 100))
  });
  gls2.Yk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:m, frequency:3}}}, 100, 100));
  gls2.na.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.na.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.na.particle16 = gls2.Na(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.na.Sf = function(c, b, f) {
  c = gls2.na.particle16.clone().setPosition(c, b);
  c.lb = k;
  c.addChildTo(f);
  f = gls2.ma.randf(5, 20);
  b = gls2.ma.randf(Math.PI, 2 * Math.PI);
  c.Aa = Math.cos(b) * f;
  c.Fa = Math.sin(b) * f;
  c.scaleX = c.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
  c.addEventListener("enterframe", function() {
    this.x += this.Aa;
    this.y += this.Fa;
    this.Aa *= 0.9;
    this.Fa *= 0.9
  })
};
gls2.na.zh = function(c, b, f, d) {
  d = d || 1.8;
  var j = tm.display.Sprite().setPosition(c, b).setScale(0.1).setBlendMode("lighter");
  j.lb = k;
  j.addChildTo(f);
  j.image = gls2.na.shockwaveImage;
  j.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    j.remove()
  })
};
gls2.na.ll = function(c, b, f) {
  var d = tm.display.Sprite().setPosition(c, b).setScale(3).setBlendMode("lighter");
  d.lb = k;
  d.addChildTo(f);
  d.image = gls2.na.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.na.kl = function(c, b, f) {
  c = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(c, b).setScale(0.1, 0.1);
  c.lb = k;
  c.addChildTo(f);
  c.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(c))
};
gls2.na.Pf = function(c, b, f, d) {
  gls2.xa("explode");
  var j = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
  j.lb = k;
  if(d !== i) {
    var n = d.x, u = d.y;
    j.addEventListener("enterframe", function() {
      this.x += n;
      this.y += u;
      n *= 0.99;
      u *= 0.99
    })
  }
  j.addChildTo(f);
  gls2.na.zh(c, b, f)
};
gls2.na.al = function(c, b, f) {
  gls2.xa("explode");
  var d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
  d.lb = k;
  d.addChildTo(f);
  d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c + 12, b).setRotation(360 * Math.random()).gotoAndPlay();
  d.lb = k;
  d.addChildTo(f);
  d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c - 12, b).setRotation(360 * Math.random()).gotoAndPlay();
  d.lb = k;
  d.addChildTo(f)
};
gls2.na.kb = function(c, b, f) {
  gls2.xa("explode2");
  gls2.xa("explode3");
  for(var d = ~~(Math.random() * gls2.fc.noise.length), j = 0;20 > j;j++) {
    var n = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
    n.a = 2 * Math.PI * Math.random();
    n.v = 10 * Math.pow(gls2.fc.noise.at(~~(gls2.fc.noise.length * j / 20) + d), 2);
    n.lb = k;
    n.addChildTo(f)
  }
  gls2.na.zh(c, b, f, 5)
};
gls2.na.Eb = function(c, b, f) {
  gls2.xa("explode2");
  gls2.xa("explode3");
  for(var d = ~~(Math.random() * gls2.fc.noise.length), j = 0;20 > j;j++) {
    for(var n = 2 * Math.PI * j / 20, u = Math.pow(gls2.fc.noise.at(~~(gls2.fc.noise.length * j / 20) + d), 2), H = 0;3 > H;H++) {
      var D = 4 * u * (H + 1), F = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.pa += 1
      }).setScale(0.3 * (3 - H)).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
      F.rotation = 2 * Math.random() * Math.PI;
      F.lb = k;
      F.pa = 0;
      F.a = n;
      F.v = D;
      F.addChildTo(f)
    }
  }
};
gls2.Fd = tm.createClass({superClass:tm.app.Object2D, target:m, yc:0, angle:0, lb:k, alpha:1, reverse:A, init:function(c, b) {
  this.superInit();
  this.target = c;
  this.reverse = b;
  this.angle = 0;
  this.yc = b ? 0 : 200;
  this.alpha = b ? 1 : 0;
  this.on("added", function() {
    gls2.Fd.wh ? this.remove() : gls2.Fd.wh = k
  });
  this.on("removed", function() {
    gls2.Fd.wh = A
  })
}, update:function(c) {
  if(this.target.parent === m) {
    this.remove()
  }else {
    if(0 === c.frame % 3) {
      for(c = 0;8 > c;c++) {
        var b = this.angle + 2 * c / 6 * Math.PI;
        gls2.Na(120, this.alpha, 0.9).setPosition(Math.cos(b) * this.yc + this.target.x, Math.sin(b) * this.yc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.yc += 4 * (this.reverse ? 1 : -1);
    this.alpha += 0.02 * (this.reverse ? -1 : 1);
    (0 > this.yc || 600 < this.yc) && this.remove()
  }
}});
gls2.Fd.wh = A;
gls2.vk = tm.createClass({superClass:tm.app.Object2D, target:m, angle:0, lb:k, init:function(c) {
  this.superInit();
  this.target = c;
  this.angle = 0
}, update:function() {
  if(this.target.parent === m) {
    this.remove()
  }else {
    for(var c = 0;5 > c;c++) {
      var b = gls2.Na(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Aa;
        this.y += this.Fa
      }).addChildTo(this.target.parent);
      b.Aa = 3 * Math.cos(this.angle);
      b.Fa = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.wi = tm.createClass({superClass:tm.display.RectangleShape, label:m, init:function(c) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + c + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, onadded:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.alpha = 576 < gls2.core.aa.da.y ? 0.1 : 1;
  this.label.x -= 2;
  -960 > this.label.x && this.remove()
}});
gls2.Af = tm.createClass({superClass:tm.app.Object2D, lb:k, je:m, pa:0, init:function(c, b, f) {
  this.superInit();
  this.je = f;
  this.setPosition(c, b);
  this.addChildTo(f)
}, onadded:function() {
  for(var c = A, b = 0;30 > b;b++) {
    var f = 360 * Math.random(), d = 50 * gls2.fc.noise[Math.floor(gls2.fc.noise.length * f / 360)];
    tm.geom.Vector2(this.x, this.y);
    f = tm.geom.Vector2().setAngle(f, d);
    for(d = 0;7 > d;d++) {
      var j = tm.display.Sprite("explode" + Math.floor(3 * Math.random()), 100, 100).setPosition(this.x, this.y).setScale(1 + 3 * Math.random()).setRotation(360 * Math.random());
      j.Aa = 0.02 * f.x * (8 - d);
      j.Fa = 0.02 * f.y * (8 - d);
      j.se = 3 * -d + Math.floor(-10 * Math.random() - 7);
      j.update = function() {
        this.se += 0.3;
        0 > this.se ? this.visible = A : 64 <= this.se ? this.remove() : (c || (c = k, gls2.xa("explode6")), this.setFrameIndex(Math.floor(this.se)), this.visible = k, this.x += this.Aa, this.y += this.Fa, this.blendMode = 10 > this.se ? "lighter" : "source-over")
      };
      j.lb = k;
      j.addChildTo(this.je)
    }
  }
  j = gls2.Na(500, 0.001, 1.003);
  for(b = 0;80 > b;b++) {
    var f = 360 * Math.random(), d = 15 * gls2.fc.noise[Math.floor(gls2.fc.noise.length * f / 360)], n = j.clone().setPosition(this.x, this.y).addChildTo(this.je);
    n.ae = tm.geom.Vector2().setAngle(f, d);
    n.position.add(tm.geom.Vector2.mul(n.ae, -40));
    n.setScale(0.1, 0.1);
    n.pa = 0;
    n.on("enterframe", function() {
      this.pa += 1;
      this.position.add(this.ae);
      this.scaleX += 0.01;
      this.scaleY += 0.01;
      80 < this.pa && (this.md = 0.99)
    })
  }
  this.remove()
}});
gls2.nk = tm.createClass({superClass:tm.graphics.Canvas, aa:m, me:m, Lb:m, frame:0, init:function(c) {
  this.superInit("#scoreLabel");
  this.aa = c;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.me = gls2.Yj(200);
  this.Lb = gls2.Gi(this)
}, update:function() {
  this.clear();
  if(gls2.core.currentScene === this.aa) {
    this.aa.od !== m && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Lb.Mc - 20, 470 * this.aa.od.qa / this.aa.od.jc, 20), this.strokeRect(5, this.Lb.Mc - 20, 470, 20), this.clear(263.5, this.Lb.Mc - 20 + 2, 2, 16), this.clear(52, this.Lb.Mc - 20 + 2, 2, 16));
    this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
    this.lineWidth = 1;
    var c;
    this.setText("20px 'Ubuntu Mono'", "right", "top");
    score = ("" + Math.floor(this.aa.score)).padding(16, " ");
    c = "";
    for(var b = 0;b < score.length;b += 4) {
      c += score.substring(b, b + 4) + " "
    }
    this.fillText(c, 192, this.Lb.Mc + 5);
    this.setText("18px 'Ubuntu Mono'", "right", "top");
    score = ("+" + Math.floor(this.aa.ub)).padding(8, " ");
    c = "";
    for(b = 0;b < score.length;b += 4) {
      c += score.substring(b, b + 4) + " "
    }
    this.fillText(c + "x " + (~~(this.aa.Va / 500) + 1), this.Lb.$e + 192, 22);
    c = [0, 1, 4][this.aa.da.type];
    for(b = 0;b < this.aa.Cd - 1;b++) {
      this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * c, 64, 64, 5 + 32 * b, 40, 32, 32)
    }
    this.setText("bold 18px Orbitron", "left", "top");
    this.strokeText("rank " + ~~(100 * N.Qa.ob.$rank), 10, 75);
    this.setText("bold 18px Orbitron", "left", "top");
    this.strokeText("max " + ~~this.aa.df + " hit", this.Lb.$e + 10, 95);
    0 < ~~this.aa.Va && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.aa.Va + " HIT!!", 10, 0.5 * -this.Lb.Mc + 115));
    0 === this.frame % 2 && (!this.aa.ab && 0 < this.aa.Wa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.aa.Wa, 5, 637)) : this.aa.ab && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.aa.$c, 5, 637)));
    for(b = 0;b < this.aa.hc;b++) {
      this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (b + 1) - 20, 615, 20, 20)
    }
    0 === this.frame % 2 && this.aa.bf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
    this.me.update();
    this.me.Yh = this.Lb.Mc + 5;
    this.me.draw(this);
    this.frame += 1;
    2 === gls2.core.mode && (this.fillStyle = "rgba(0,0,0, 0.5)", this.aa.wa.lines.forEach(function(b, c) {
      this.fillRect(0, 192 + 32 * c - 18, 480, 30)
    }.bind(this)), this.fillStyle = "rgb(255,255,255)", this.setText("bold 20px Orbitron", "center", "middle"), this.aa.wa.lines.forEach(function(b, c) {
      this.fillText(b, 240, 192 + 32 * c)
    }.bind(this)), this.hh = this.aa.wa.keyboard.getKey("up") ? 1 : Math.max(this.hh - 0.2, 0.2), this.eh = this.aa.wa.keyboard.getKey("down") ? 1 : Math.max(this.eh - 0.2, 0.2), this.fh = this.aa.wa.keyboard.getKey("left") ? 1 : Math.max(this.fh - 0.2, 0.2), this.gh = this.aa.wa.keyboard.getKey("right") ? 1 : Math.max(this.gh - 0.2, 0.2), this.jh = this.aa.wa.keyboard.getKey("z") ? 1 : Math.max(this.jh - 0.2, 0.2), this.ih = this.aa.wa.keyboard.getKey("x") ? 1 : Math.max(this.ih - 0.2, 0.2), this.dh = 
    this.aa.wa.keyboard.getKey("c") ? 1 : Math.max(this.dh - 0.2, 0.2), this.globalAlpha = this.hh, this.drawTexture(tm.asset.AssetManager.get("keyUp"), 328, 224, 64, 64), this.globalAlpha = this.eh, this.drawTexture(tm.asset.AssetManager.get("keyDown"), 328, 288, 64, 64), this.globalAlpha = this.fh, this.drawTexture(tm.asset.AssetManager.get("keyLeft"), 270.4, 288, 64, 64), this.globalAlpha = this.gh, this.drawTexture(tm.asset.AssetManager.get("keyRight"), 385.6, 288, 64, 64), this.globalAlpha = 
    this.jh, this.drawTexture(tm.asset.AssetManager.get("keyZ"), 40, 288, 64, 64), this.globalAlpha = this.ih, this.drawTexture(tm.asset.AssetManager.get("keyX"), 480 * 0.27 - 32, 288, 64, 64), this.globalAlpha = this.dh, this.drawTexture(tm.asset.AssetManager.get("keyC"), 480 * 0.39 - 32, 288, 64, 64), this.globalAlpha = 1)
  }
}, hh:0.2, eh:0.2, fh:0.2, gh:0.2, jh:0.2, ih:0.2, dh:0.2});
gls2.Gi = tm.createClass({superClass:tm.app.Object2D, $b:m, $e:0, Mc:0, init:function(c) {
  this.superInit();
  this.$b = c
}});
(function() {
  var c = Array.range(0, 5).map(function(b) {
    return Math.pow(0.9, b + 1)
  });
  gls2.ek = tm.createClass({superClass:tm.graphics.Canvas, Ia:m, Zb:m, mc:m, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ia = gls2.fk();
    this.Ia.ka = this;
    this.Ia.update = function(b) {
      this.update(b.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Zb = [];
    this.mc = [];
    for(var b = 0;5 > b;b++) {
      this.Zb[b] = 40 * c[b], this.mc[b] = this.Zb[b] / 2 * Math.sqrt(3)
    }
  }, update:function(b) {
    this.Ia.Aa = Math.cos(this.Ia.direction) * this.Ia.speed;
    this.Ia.Fa = Math.sin(this.Ia.direction) * this.Ia.speed;
    for(var c = 0;5 > c;c++) {
      for(this.Ia.vc[c] += this.Ia.Aa * Math.pow(0.8, c);3 * this.Zb[c] < this.Ia.vc[c];) {
        this.Ia.vc[c] -= 3 * this.Zb[c]
      }
      for(;this.Ia.vc[c] < 3 * -this.Zb[c];) {
        this.Ia.vc[c] += 3 * this.Zb[c]
      }
      for(this.Ia.wc[c] += this.Ia.Fa * Math.pow(0.8, c);2 * this.mc[c] < this.Ia.wc[c];) {
        this.Ia.wc[c] -= 2 * this.mc[c]
      }
      for(;this.Ia.wc[c] < 2 * -this.mc[c];) {
        this.Ia.wc[c] += 2 * this.mc[c]
      }
    }
    0 === b % 2 && this.draw()
  }, draw:function() {
    this.Ia.background !== m ? this.clearColor(this.Ia.background, 0, 0) : this.clear();
    for(var b = 0;5 > b;b++) {
      this.lineWidth = 0.3 * Math.pow(0.8, b);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * c[b] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * c[b] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Ia.vc[b] - 3 * this.Zb[b];d < 480 + 3 * this.Zb[b];d += 1.5 * this.Zb[b]) {
        for(var f = 0 === f ? this.mc[b] : 0, j = this.Ia.wc[b] - 2 * this.mc[b] + f;j < 640 + 2 * this.mc[b];j += 2 * this.mc[b]) {
          this.line(d, j, d + this.Zb[b], j), this.line(d, j, d - this.Zb[b] / 2, j + this.mc[b]), this.line(d, j, d - this.Zb[b] / 2, j - this.mc[b])
        }
      }
      this.stroke()
    }
  }});
  gls2.fk = tm.createClass({superClass:tm.app.Object2D, vc:0, wc:0, direction:0, speed:0, Aa:0, Fa:0, background:m, init:function() {
    this.superInit();
    this.vc = [];
    this.wc = [];
    for(var b = 0;5 > b;b++) {
      this.vc[b] = 240, this.wc[b] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Fa = this.Aa = 0
  }})
})();
gls2.Ug = tm.createClass({superClass:tm.display.Sprite, nj:A, aa:m, da:m, bd:A, Sd:A, di:A, Aa:0, Fa:0, init:function(c) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.nj = c) && this.setScale(2.5, 2.5);
  this.aa = gls2.cb.Le;
  this.da = this.aa.da;
  this.addChildTo(this.aa);
  c = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  var b = 10 + 30 * Math.random();
  this.Aa = Math.cos(c) * b;
  this.Fa = Math.sin(c) * b
}, update:function() {
  this.da.Vb && (this.Sd = k);
  if(this.da.parent === m) {
    this.Sd = A
  }else {
    if(100 > gls2.Ub(this, this.da)) {
      this.aa.Bl(this);
      this.remove();
      return
    }
    1E4 > gls2.Ub(this, this.da) && (this.Sd = k);
    if(this.di && this.Sd) {
      var c = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 12 * Math.cos(c);
      this.y += 12 * Math.sin(c)
    }else {
      this.di || (this.x += this.Aa, this.y += this.Fa, this.Aa *= 0.8, this.Fa *= 0.8, -1 < this.Aa && (1 > this.Aa && -1 < this.Fa && 1 > this.Fa) && (this.di = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Ji = tm.createClass({superClass:gls2.Ug, bd:A, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.uk = tm.createClass({superClass:gls2.Ug, bd:k, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.Sd || (this.x += this.aa.ka.Aa, this.y += this.aa.ka.Fa);
  this.superClass.prototype.update.call(this)
}});
gls2.kd = tm.createClass({da:m, aa:m, $:m, frame:0, assets:m, init:function(c) {
  this.aa = c;
  this.da = c.da;
  this.Xd();
  this.$ = gls2.tk();
  this.frame = 0
}, Xd:M(), update:function() {
  this.$k(this.frame);
  this.frame += 1
}, $k:function(c) {
  c = this.$.get(c);
  if(c !== m) {
    if("function" === typeof c.value) {
      c.value.call(this)
    }else {
      if(gls2.pg[c.value] !== i) {
        var b = gls2.pg[c.value];
        if(b !== m) {
          if(b[0].od === k) {
            this.Ma(b[0])
          }else {
            for(var f = 0;f < b.length;f++) {
              var d = this.Ma(b[f]);
              c.stop && d.addEventListener("enemyconsumed", function() {
                this.$.Fe = A
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Ma:function(c) {
  this.aa.qe += 1;
  c = c.hard(this.aa, c.soft).setPosition(c.x, c.y).addChildTo(this.aa);
  c.wa = this;
  c.hf();
  return c
}, Qe:function(c) {
  gls2.re();
  this.aa.oe = k;
  for(var b = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var j = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      j.pa = 0;
      j.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.pa) + 0.5;
        this.pa += 1
      };
      j.addChildTo(b)
    }
  }
  b.tweener.wait(3E3).call(c).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = M();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(b)).wait(1E3).call(function() {
    this.remove()
  }.bind(b));
  b.addChildTo(this.aa.uh);
  gls2.xa("warning");
  gls2.xa("voWarning")
}});
gls2.kd.create = function(c, b) {
  switch(b) {
    case -1:
      return gls2.wk(c);
    case 0:
      return gls2.ok(c);
    case 1:
      return gls2.pk(c);
    case 2:
      return gls2.qk(c);
    case 3:
      return gls2.rk(c);
    case 4:
      return gls2.sk(c);
    default:
      h(Error("stageNumber = " + b))
  }
};
gls2.tk = tm.createClass({index:0, data:m, Fe:A, init:function() {
  this.data = {}
}, add:function(c, b, f) {
  this.index += c;
  this.data[this.index] = {stop:f, value:b}
}, get:function(c) {
  c = this.data[c];
  return c === i ? m : c.stop === k ? (this.Fe = k, c) : this.Fe ? m : c
}});
gls2.wk = tm.createClass({superClass:gls2.kd, keyboard:m, lines:m, init:function(c) {
  function b(b, c) {
    return function() {
      j.clearKey();
      j.setKey(b, c);
      j._update()
    }
  }
  function f(b) {
    return function() {
      d.splice(0);
      for(var c = 0;c < b.length;c++) {
        d.push(b[c])
      }
    }
  }
  this.superInit(c);
  var d = this.lines = [], j = this.keyboard = tm.input.Keyboard(m, k);
  this.$.add(0, function() {
    c.ka.direction = 0.5 * Math.PI;
    c.ka.speed = 1
  });
  this.$.add(300, b("down", k));
  this.$.add(20, b("down", A));
  this.$.add(30, f(["\u30ab\u30fc\u30bd\u30eb\u30ad\u30fc\u3067\u79fb\u52d5\uff01"]));
  this.$.add(1, b("left", k));
  this.$.add(30, b("up", k));
  this.$.add(30, b("right", k));
  this.$.add(30, b("right", k));
  this.$.add(30, b("down", k));
  this.$.add(30, b("left", k));
  this.$.add(30, b("left", k));
  this.$.add(30, b("up", k));
  this.$.add(30, b("right", k));
  this.$.add(30, b("right", k));
  this.$.add(30, b("down", k));
  this.$.add(30, b("left", k));
  this.$.add(30, b("left", k));
  this.$.add(30, b("up", k));
  this.$.add(30, b("right", k));
  this.$.add(30, b("right", k));
  this.$.add(30, b("down", k));
  this.$.add(30, b("left", k));
  this.$.add(30, b("left", A));
  this.$.add(30, f(["C\u30ad\u30fc\u9023\u6253\u3067\u30b7\u30e7\u30c3\u30c8\u767a\u5c04\uff01"]));
  for(var n = 0;40 > n;n++) {
    this.$.add(4, b("c", k)), this.$.add(4, b("c", A))
  }
  this.$.add(1, f([]));
  this.$.add(30, f(["C\u30ad\u30fc\u30db\u30fc\u30eb\u30c9\u3067\u30ec\u30fc\u30b6\u30fc\u767a\u5c04\uff01"]));
  this.$.add(1, b("c", k));
  this.$.add(220, b("c", A));
  this.$.add(1, f([]));
  this.$.add(30, f(["Z\u30ad\u30fc\u30db\u30fc\u30eb\u30c9\u3067\u30b7\u30e7\u30c3\u30c8\u30d5\u30eb\u30aa\u30fc\u30c8\u767a\u5c04"]));
  this.$.add(1, b("z", k));
  this.$.add(220, b("z", A));
  this.$.add(1, f([]));
  this.$.add(50, f(["X\u30ad\u30fc\u3067\u30dc\u30e0\u767a\u5c04\uff01"]));
  this.$.add(10, b("x", k));
  this.$.add(1, b("x", A));
  this.$.add(90, f([]));
  this.$.add(150, f(["\u30fb\u6575\u3092\u5012\u3059", "\u30fb\u661f\u30a2\u30a4\u30c6\u30e0\u3092\u53d6\u308b", "\u306a\u3069\u3067\u30cf\u30a4\u30d1\u30fc\u30b2\u30fc\u30b8\u304c\u4e0a\u6607\uff01"]));
  this.$.add(1, b("c", k));
  for(n = 0;35 > n;n++) {
    this.$.add(20, "heri2-T-center")
  }
  this.$.add(200, b("c", A));
  this.$.add(1, f([]));
  this.$.add(60, b("z", k));
  this.$.add(150, f(["\u30cf\u30a4\u30d1\u30fc\u30b2\u30fc\u30b8\u304c\u6e9c\u307e\u3063\u305f\u72b6\u614b\u3067", "X\u30ad\u30fc\u3092\u62bc\u3059\u3068\u30cf\u30a4\u30d1\u30fc\u30e2\u30fc\u30c9\u767a\u52d5\uff01"]));
  this.$.add(1, b("x", k));
  this.$.add(1, b("x", A));
  this.$.add(1, b("z", k));
  for(n = 0;3 > n;n++) {
    this.$.add(40, "heri1-4-left"), this.$.add(40, "heri1-4-center"), this.$.add(40, "heri1-4-right")
  }
  this.$.add(1, f(["\u30cf\u30a4\u30d1\u30fc\u30e2\u30fc\u30c9\u4e2d\u306f", "\u30b7\u30e7\u30c3\u30c8\u3067\u6575\u5f3e\u3092\u7834\u58ca\u53ef\u80fd\uff01"]));
  for(n = 0;2 > n;n++) {
    this.$.add(40, "heri1-4-left"), this.$.add(40, "heri1-4-center"), this.$.add(40, "heri1-4-right")
  }
  this.$.add(200, b("z", A));
  this.$.add(1, f([]));
  this.$.add(180, function() {
    gls2.core.mode = 0;
    gls2.core.replaceScene(gls2.TitleScene())
  })
}, Xd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.ok = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = m;
  this.$.add(0, function() {
    gls2.wb("bgm1", k);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 8;
    this.aa.ka.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(200, "tankRD-center");
  this.$.add(200, "tankRD-left");
  this.$.add(20, "heri1-right");
  this.$.add(60, "heri1-center");
  this.$.add(10, "cannon-0");
  this.$.add(30, "heri1-left");
  this.$.add(10, "cannon-1");
  this.$.add(30, "tankL-top");
  this.$.add(50, "heri1-right");
  this.$.add(20, "tankRD-center");
  this.$.add(80, "heri1-center");
  this.$.add(150, "komachi-1");
  this.$.add(230, "heri1-right");
  this.$.add(20, "heri1-center");
  this.$.add(1, "heri1-left");
  this.$.add(20, "tankL-top");
  this.$.add(20, "tankRD-left");
  this.$.add(50, "heri1-right");
  this.$.add(1, "heri1-center");
  this.$.add(50, "heri1-center");
  this.$.add(10, "tankRD-center");
  this.$.add(10, "tankRD-left");
  this.$.add(1, "heri1-right");
  this.$.add(10, "cannon-7");
  this.$.add(30, "heri1-center");
  this.$.add(1, "heri1-left");
  this.$.add(20, "tankL-top");
  this.$.add(1, "heri1-right");
  this.$.add(50, "fighter-m-1");
  this.$.add(50, "fighter-m-5");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:4}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "yukishiro", k);
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(50, "fighter-m-0");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "heri2-left");
  this.$.add(1, "cannon-6");
  this.$.add(30, "heri1-left");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-center");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right2");
  this.$.add(50, "heri1-left2");
  this.$.add(60, "heri1-center2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "fighter-m-0");
  this.$.add(50, "fighter-m-1");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left");
  this.$.add(1, "cannon-1");
  this.$.add(30, "heri1-center");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri1-right");
  this.$.add(30, "heri1-center");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri1-right");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-5");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left2");
  this.$.add(50, "heri1-center2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right2");
  this.$.add(50, "heri1-center");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Qe(function() {
      gls2.wb("bgmBoss", k)
    })
  });
  this.$.add(600, "misumi")
}, Xd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,10%)"}, {offset:1, color:"hsl(230,50%, 5%)"}]).toStyle()
}});
gls2.pk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm2:"assets2/nc67881.mp3"};
  this.$.add(0, function() {
    gls2.wb("bgm2", k);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(60, "heri2-left");
  this.$.add(60, "heri2-center");
  this.$.add(60, "heri2-right");
  this.$.add(20, "tankRD-center");
  this.$.add(20, "tankL-top");
  this.$.add(20, "yayoi-R0");
  this.$.add(1, "yayoi-R2");
  this.$.add(40, "heri2-left");
  this.$.add(60, "heri2-center");
  this.$.add(60, "heri2-right");
  this.$.add(60, "yayoi-R1");
  this.$.add(1, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(30, "makoto-R0");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
  });
  this.$.add(600, "tank5-center");
  this.$.add(1, "yayoi-3");
  this.$.add(90, "heri2-left");
  this.$.add(1, "yayoi-2");
  this.$.add(90, "tank5-left");
  this.$.add(1, "yayoi-1");
  this.$.add(90, "heri2-right");
  this.$.add(1, "yayoi-0");
  this.$.add(90, "heri2-left");
  this.$.add(60, "tank5-left");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
  });
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri1-left2");
  this.$.add(40, "tank5-center");
  this.$.add(40, "heri2-right");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri2-left");
  this.$.add(40, "tank5-center");
  this.$.add(40, "heri2-right");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri1-left2");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri2-left");
  this.$.add(40, "tank5-center");
  this.$.add(40, "heri2-right");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri2-left");
  this.$.add(90, "makoto-4");
  this.$.add(1, "tsubomi-0");
  this.$.add(1, "tsubomi-2");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.aa.ka.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.aa.ka.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", k);
  this.$.add(300, "heri2-left");
  for(c = 0;12 > c;c++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
  });
  this.$.add(60, "tank5-left");
  this.$.add(60, "tank5-left");
  this.$.add(60, "tank5-left");
  this.$.add(120, "itsuki-2");
  this.$.add(1, "komachi2-0");
  this.$.add(380, "tsubomi-0");
  this.$.add(1, "komachi2-1");
  this.$.add(380, "itsuki-1");
  this.$.add(380, "makoto-4");
  this.$.add(1, "komachi2-0");
  this.$.add(380, "makoto-1");
  this.$.add(580, "erika");
  this.$.add(520, function() {
    this.Qe(function() {
      gls2.wb("bgmBoss", k)
    })
  });
  this.$.add(300, function() {
    this.aa.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Xd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,10%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.qk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm3:"assets2/nc70057.mp3"};
  this.$.add(0, function() {
    gls2.wb("bgm3", k);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 2;
    this.aa.ka.tweener.clear().to({speed:6}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "nao2-center");
  this.$.add(45, "nao2-left");
  this.$.add(45, "nao2-right");
  this.$.add(45, "nao2-center");
  this.$.add(45, "nao2-left");
  this.$.add(45, "nao2-right");
  for(c = 0;3 > c;c++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(60, function() {
    this.aa.ka.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
  });
  this.$.add(100, "akane-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(100, "akane-right");
  this.$.add(60, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(100, "reika1-left");
  this.$.add(100, "akane-center");
  this.$.add(60, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(100, "reika1-left");
  this.$.add(130, "akane-center");
  this.$.add(60, "reika1-right");
  this.$.add(100, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, function() {
    this.aa.ka.tweener.clear().to({speed:4, direction:0.2 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(100, "akane-center");
  this.$.add(60, "akane-right");
  this.$.add(60, "akane-left");
  for(c = 0;3 > c;c++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-1");
  this.$.add(60, "reika1-right");
  this.$.add(130, "reika1-right");
  this.$.add(100, "nao2-right");
  this.$.add(100, "nao2-left");
  this.$.add(60, function() {
    this.aa.ka.tweener.clear().to({speed:5, direction:0.2 * -Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi3-0");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(100, "madoka-1");
  this.$.add(100, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(100, "reika1-left");
  this.$.add(100, "reika1-left");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:2, direction:0.2 * Math.PI}, 4E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-1");
  this.$.add(100, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-right");
  this.$.add(60, "madoka-0");
  this.$.add(100, "reika1-right");
  this.$.add(100, "reika1-right");
  this.$.add(60, "madoka-0");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(130, "madoka-1");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(100, "erika");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:7, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(300, "higashi", k);
  this.$.add(80, M());
  for(c = 0;10 > c;c++) {
    this.$.add(90, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:2, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-2");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(100, "reika1-left");
  this.$.add(100, "reika1-left");
  this.$.add(100, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(60, "komachi3-0");
  this.$.add(100, "akane-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:4, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(100, "reika1-left");
  this.$.add(100, "reika1-left");
  this.$.add(160, "heri1-left");
  this.$.add(80, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(60, "madoka-1");
  this.$.add(100, "akane-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "komachi3-1");
  this.$.add(240, "komachi3-0");
  this.$.add(30, "heri1-right2");
  this.$.add(30, "heri1-left2");
  this.$.add(30, "heri1-right2");
  this.$.add(30, "heri1-left2");
  this.$.add(100, "alice");
  this.$.add(300, M());
  this.$.add(160, "heri1-left");
  this.$.add(80, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(100, "heri1-left");
  this.$.add(90, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(130, "madoka-1");
  this.$.add(90, "nao2-center");
  this.$.add(90, "nao2-left");
  this.$.add(90, "nao2-right");
  this.$.add(90, "nao2-center");
  this.$.add(90, "nao2-left");
  this.$.add(90, "nao2-right");
  this.$.add(130, "komachi3-0");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:5, direction:0.5 * Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "akane-right");
  this.$.add(100, "reika1-right");
  this.$.add(100, "reika1-right");
  this.$.add(100, "akane-left");
  this.$.add(100, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(130, "komachi3-1");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:7, direction:0.5 * Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(90, "madoka-1");
  this.$.add(100, "reika1-right");
  this.$.add(100, "reika1-right");
  this.$.add(60, "akane-right");
  this.$.add(100, "heri1-left");
  this.$.add(40, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(130, "madoka-0");
  this.$.add(40, "nao2-center");
  this.$.add(40, "nao2-left");
  this.$.add(40, "nao2-right");
  this.$.add(100, "heri1-left");
  this.$.add(40, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(30, "erika");
  this.$.add(300, function() {
    this.Qe(function() {
      gls2.wb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:10, direction:0.5 * Math.PI}, 8E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, Xd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,15%)"}, {offset:1, color:"hsl(30,50%, 7%)"}]).toStyle()
}});
gls2.rk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm4:"assets2/nc67880.mp3"};
  this.$.add(0, function() {
    gls2.wb("bgm4", k);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 1
  });
  this.$.add(200, "tsukikage-r");
  this.$.add(100, "tsukikage-l");
  this.$.add(170, "bukky-4-r");
  this.$.add(150, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(100, "komachi4-0");
  this.$.add(120, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(80, "bukky-4-l");
  this.$.add(200, "bukky-4-r");
  this.$.add(200, "tankRD-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(20, "tankRD-left");
  this.$.add(20, "tank5-left");
  this.$.add(20, "tank5-center");
  this.$.add(20, "tankRD-left");
  this.$.add(20, "tank5-left");
  this.$.add(20, "tank5-center");
  this.$.add(100, "tsukikage-r");
  this.$.add(10, "tankL-top");
  this.$.add(100, "tankL-top");
  this.$.add(50, "tankL-top");
  this.$.add(50, "tankL-top");
  this.$.add(150, "komachi4-0");
  this.$.add(50, "komachi4-1");
  this.$.add(500, "heri2-left");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(c = 0;6 > c;c++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.aa.ka.speed = 3;
    this.aa.ka.tweener.clear().to({speed:0.3}, 5E3)
  });
  this.$.add(180, "karen-3-2");
  this.$.add(300, "karen-3-8");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(100, "karen-3-2");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(100, "karen-3-8");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(100, "karen-3-2");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(200, "karen-3-8");
  this.$.add(60, "karen-3-2");
  this.$.add(52, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(102, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(400, function() {
    this.aa.ka.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", k);
  this.$.add(1200, M());
  for(c = 0;9 > c;c++) {
    this.$.add(50, 0 === c % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:0.6}, 3E3)
  });
  this.$.add(200, "nozomi4-0");
  this.$.add(20, "tankRD-center");
  this.$.add(90, "tankRD-center");
  this.$.add(90, "tankRD-center");
  this.$.add(200, "nozomi4-2");
  this.$.add(90, "tankRD-center");
  this.$.add(300, "bukky-4-l");
  this.$.add(90, "bukky-4-r");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(150, "tsukikage-r");
  this.$.add(15, "tsukikage-l");
  this.$.add(1, "heri2-center");
  this.$.add(1, "heri2-right");
  this.$.add(1, "heri2-left");
  this.$.add(60, "heri2-center");
  this.$.add(60, "heri2-right");
  this.$.add(60, "heri2-left");
  this.$.add(250, "nozomi4-0");
  this.$.add(100, "nozomi4-2");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(80, "erika");
  this.$.add(200, function() {
    this.Qe(function() {
      gls2.wb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Xd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,10%)"}, {offset:1, color:"hsl(30,50%, 2%)"}]).toStyle()
}});
gls2.sk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm5:"assets2/nc86158.mp3", bgmLastBoss:"assets2/nc67538.mp3", bgmExBoss:"assets2/nc104507.mp3"};
  this.$.add(0, function() {
    gls2.wb("bgm5", k);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 1;
    this.aa.ka.Im = k
  });
  this.$.add(150, "urara5-0");
  this.$.add(260, "urara5-7");
  this.$.add(260, "urara5-6");
  this.$.add(380, "nozomi5-1");
  this.$.add(100, "nozomi5-0");
  this.$.add(175, "nozomi5-2");
  this.$.add(325, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(260, "mktn5-0");
  this.$.add(60, "heri1-4-left2");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-left");
  this.$.add(300, "mktn5-1");
  this.$.add(60, "heri1-4-right2");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-right");
  this.$.add(300, "tank5-left");
  for(c = 0;2 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(25, "tank5-left");
  for(c = 0;2 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(25, "tank5-center");
  this.$.add(180, "bukky-5-l");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(180, "bukky-5-r");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(180, "bukky-5-l");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(180, "bukky-5-r");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(300, "urara5-0");
  this.$.add(300, "urara5-7");
  this.$.add(260, "urara5-6");
  this.$.add(260, "urara5-1");
  this.$.add(260, "urara5-0");
  this.$.add(260, "urara5-5");
  this.$.add(1, "kanade");
  this.$.add(300, "milk5-1");
  this.$.add(200, "milk5-0");
  this.$.add(200, "milk5-1");
  this.$.add(450, "komachi5-0");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(80, "komachi5-2");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(80, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(100, "komachi5-0");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(120, "komachi5-2");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(160, "komachi5-1");
  this.$.add(10, "heri1-4-center2");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-center2");
  this.$.add(10, "heri1-4-center");
  this.$.add(400, "ako5-0");
  this.$.add(250, "ako5-1");
  this.$.add(1200, M());
  for(c = 0;22 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(260, "urara5-0");
  this.$.add(300, "urara5-1");
  this.$.add(300, "urara5-6");
  this.$.add(300, "urara5-7");
  this.$.add(300, "urara5-2");
  this.$.add(300, "urara5-5");
  this.$.add(200, "ako5-0");
  this.$.add(200, "komachi5-1");
  this.$.add(200, "milk5-1");
  this.$.add(200, "komachi5-1");
  this.$.add(200, "milk5-2");
  this.$.add(200, "komachi5-0");
  this.$.add(200, "mktn5-0");
  this.$.add(200, "mktn5-1");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-center2");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-center2");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-center2");
  this.$.add(380, "nozomi5-1");
  this.$.add(100, "nozomi5-0");
  this.$.add(175, "nozomi5-2");
  this.$.add(200, "nozomi5-0");
  this.$.add(80, "erika");
  this.$.add(540, M());
  this.$.add(60, function() {
    this.Qe(function() {
      gls2.wb("bgmLastBoss", k)
    })
  });
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "hibiki");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:0}, 1200)
  })
}, Xd:function() {
  this.aa.ka.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 30%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {xe:function(c, b) {
  if(c.parent === m || b.parent === m) {
    return A
  }
  var f = c.x + c.boundingWidthRight, d = c.y - c.boundingHeightTop, j = c.y + c.boundingHeightBottom, n = b.x - b.boundingWidthLeft, u = b.y - b.boundingHeightTop, H = b.y + b.boundingHeightBottom;
  return c.x - c.boundingWidthLeft < b.x + b.boundingWidthRight && f > n && d < H && j > u
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:m, init:function() {
  this.superInit()
}, bm:function(c, b) {
  "function" === typeof c ? this.app.pushScene(c()) : c instanceof tm.app.Scene && this.app.pushScene(c);
  this._sceneResultCallback = b
}, draw:function(c) {
  c.globalCompositeOperation = "source-over";
  this.Qd(c)
}, finish:function(c) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(c)
}});
gls2.$j = tm.createClass({superClass:gls2.Scene, titleText:m, menu:m, descriptions:m, showExit:A, title:m, selections:[], description:m, box:m, cursor:m, Lh:m, _selected:0, _opened:A, _finished:A, init:function(c, b, f) {
  this.superInit();
  this.titleText = c;
  this.menu = b;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (b.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Lh = f.onCursorMove;
  c = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.display.RectangleShape(384, c, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,15%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:c}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.display.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var c = 320 - 25 * this.menu.length;
  this.title = tm.display.Label(this.titleText, 30).setPosition(240, c).addChildTo(this);
  this.selections = this.menu.map(function(b, f) {
    var d = this;
    c += 50;
    var j = tm.display.Label(b).setPosition(240, c).addChildTo(this);
    j.interactive = k;
    j.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
    });
    j.width = 336;
    return j
  }.bind(this));
  this._createCursor();
  this._opened = k
}, _createCursor:function() {
  this.cursor = tm.display.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,100,255,0.0)"}, {offset:0.2, color:"rgba(  0,100,255,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,100,255,0.3)"}, {offset:1, color:"rgba(  0,100,255,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Lh !== m && this.parent.Lh(this.s))
  }
}, update:function(c) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(c.frame / 2) % 2 : this.showExit && c.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : c.getKeyDown("z") || c.getKeyDown("c") || c.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.xa("decision")) : c.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.xa("select")) : c.getKeyDown("up") && (this._selected -= 
  1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.xa("select")))
}, closeDialog:function(c) {
  this._finished = k;
  this.tweener.clear().wait(200).call(function() {
    this.cursor.remove();
    this.title.remove();
    this.selections.each(function(b) {
      b.remove()
    });
    this.box.tweener.clear();
    this.box.tweener.to({width:1, height:1}, 200, "easeInExpo").call(function() {
      this.finish(c)
    }.bind(this))
  }.bind(this))
}, Qd:function(c) {
  c.fillStyle = "rgba(0,0,0,0.8)";
  c.fillRect(0, 0, 480, 640)
}});
function $(c, b, f, d, j) {
  j = {}.$extend({menuDescriptions:[].concat(f), showExit:k, defaultValue:0, onCursorMove:M()}, j);
  c.bm(gls2.$j(b, f, j), d)
}
;gls2.Na = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, md:0.85, size:0, image:m, lb:k, init:function(c, b, f, d) {
  this.superInit();
  b === i && (b = 1);
  f === i && (f = 0.85);
  1 === gls2.core.Pc && (this.size *= 0.7, this.md *= 0.9);
  this.width = this.height = this.size = c;
  this.alpha = b;
  this.md = f;
  this.blendMode = "lighter";
  1 === gls2.core.Pc && (this.md *= 0.9);
  this.image = d ? d : tm.graphics.Canvas().resize(c, c).setFillStyle(tm.graphics.RadialGradient(0.5 * c, 0.5 * c, 0, 0.5 * c, 0.5 * c, 0.5 * c).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, c, c).element;
  if(2 === gls2.core.Pc) {
    this.on("added", function() {
      this.remove()
    })
  }
}, update:function() {
  this.alpha *= this.md;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(c) {
  c.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Na(this.size, this.wm, this.md, this.image)
}});
gls2.ni = tm.createClass({superClass:gls2.Na, ka:m, init:function(c, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.ka = c
}, update:function(c) {
  this.superClass.prototype.update.apply(this, c);
  this.x += this.ka.Aa;
  this.y += this.ka.Fa + 0.3
}, clone:function(c) {
  return gls2.ni(this.ka, c)
}});
gls2.Yj = tm.createClass({width:0, label:m, Nb:m, pa:0, zj:0, Yh:0, init:function(c) {
  this.width = c;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Nb = [];
  this.zj = 480 - this.width - 5;
  this.Yh = 5
}, Pk:function(c, b) {
  b === k && (this.Nb.clear(), this.Nb.push(""));
  5 < this.Nb.length && this.Nb.splice(1, this.Nb.length - 4);
  this.Nb.push(c);
  return this
}, Sk:function() {
  this.Nb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var c = this.label.text, c = c.substring(0, c.length - 1);
  if(0 !== this.Nb.length) {
    if("" !== this.Nb[0]) {
      var b = this.Nb[0][0];
      this.Nb[0] = this.Nb[0].substring(1);
      c += b
    }else {
      this.Nb.shift(), b = c.split("\n"), 3 < b.length && (b.shift(), c = b.join("\n")), c += "\n"
    }
  }
  this.label.text = c + (0 === this.pa % 2 ? "_" : " ");
  this.pa += 1
}, draw:function(c) {
  c.save();
  c.context.globalCompositeOperation = "source-over";
  c.translate(this.zj, this.Yh);
  c.fillStyle = "rgba(1,2,48,0.5)";
  c.fillRect(0, 0, this.width, 64);
  c.translate(5, 5);
  c.fillStyle = "rgba(255,255,255,0.5)";
  c.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(b, f) {
    c.fillText(b, 0, this.label.textSize * f)
  }.bind(this));
  c.restore()
}});
gls2.fc = {noise:m, ml:function(c) {
  function b(b) {
    if(1 > b) {
      return m
    }
    var d = [], j = Math.random(), n, u;
    for(u = 0;u < c;u += ~~b) {
      n = Math.random();
      for(var l = 0;l < b;l++) {
        d[u + l] = f(j, n, l / b)
      }
      j = n
    }
    j = d[c - ~~b];
    n = d[0];
    for(l = 0;l < b;l++) {
      d[c - ~~b + l] = f(j, n, l / b)
    }
    return d
  }
  function f(b, c, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return b * (1 - d) + c * d
  }
  for(var d = [], j = 0, n = Math.pow(2, 4);8 > j;j++, n *= 2) {
    var u = b(c / n);
    if(u === m) {
      break
    }
    d.push(u)
  }
  u = [].concat(d[0]);
  j = 1;
  for(n = 0.5;j < d.length;j++, n *= 0.5) {
    for(var H = 0;H < c;H++) {
      u[H] += d[j][H] * n
    }
  }
  for(j = 0;j < u.length;j++) {
    u[j] /= 2
  }
  return u
}};
gls2.fc.noise = gls2.fc.ml(512);
gls2.ya = {index:-1, data:m, setup:function(c) {
  this.data = [];
  c = new MersenneTwister(c);
  for(var b = 0;1E3 > b;b++) {
    this.data[b] = c.next()
  }
}, random:function() {
  this.index += 1;
  1E3 <= this.index && (this.index %= 1E3);
  return this.data[this.index]
}, rand:function(c, b) {
  return Math.floor(this.random() * (b - c + 1)) + c
}, randf:function(c, b) {
  return this.random() * (b - c) + c
}};
gls2.jb = m;
gls2.wb = function(c, b, f) {
  b || gls2.rf();
  b = tm.asset.AssetManager.get(c);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  b && (gls2.jb = b.clone(), gls2.jb.volume = 0.1 * gls2.core.nd, gls2.jb.loop = !f, gls2.jb.play(), d.data[c] && (gls2.jb.source.loopStart = d.data[c].start, gls2.jb.source.loopEnd = d.data[c].end))
};
gls2.rf = function() {
  gls2.jb !== m && gls2.jb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.jb.stop()
};
gls2.re = function() {
  if(gls2.jb !== m) {
    var c = gls2.jb;
    gls2.jb = m;
    c.loop = A;
    var b = function() {
      c.volume -= 0.001;
      0 >= c.volume ? c.Cm === AudioBufferSourceNode.PLAYING_STATE && c.stop() : setTimeout(b, 10)
    };
    setTimeout(b, 10)
  }
};
gls2.xa = function(c) {
  if(0 !== gls2.core.zc && gls2.xa.played[c] !== gls2.core.frame) {
    var b = tm.asset.AssetManager.get("sound/" + c);
    b && (b = b.clone().play(), "vo" === c.substring(0, 2) ? (b.volume = 0.5 * gls2.core.zc, gls2.xa.ki !== m && gls2.xa.ki.stop(), gls2.xa.ki = b) : b.volume = "explode6" === c ? 0.2 * gls2.core.zc : 0.1 * gls2.core.zc);
    gls2.xa.played[c] = gls2.core.frame
  }
};
gls2.xa.played = {};
gls2.xa.ki = m;
(function() {
  var c = m, b = m, f = m;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:m, pa:0, dd:[], te:A, pj:0, Yf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("cure black label", 40).setPosition(240, 640 * 0.33).addChildTo(this);
    tm.display.Label("version B1.0.0-beta", 22).setPosition(432, 256).setAlign("right").addChildTo(this);
    tm.display.Label("1st ", 22).setPosition(72, 448).setAlign("left").addChildTo(this);
    tm.display.Label(O[0] + " PTS", 22).setPosition(408, 448).setAlign("right").addChildTo(this);
    tm.display.Label("2nd ", 22).setPosition(72, 480).setAlign("left").addChildTo(this);
    tm.display.Label(O[1] + " PTS", 22).setPosition(408, 480).setAlign("right").addChildTo(this);
    tm.display.Label("press button").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      gls2.core.fps = FPS;
      this.te = A
    })
  }, Jm:function() {
    for(var b = ("" + Math.floor(gls2.core.af)).padding(16, " "), c = 0;c < b.length;c += 4) {
    }
  }, Qd:function(b) {
    b.fillStyle = "black";
    b.fillRect(0, 0, 480, 640)
  }, update:function(b) {
    0 === b.frame % 2 && (this.Yg(100 * Math.cos(-0.01 * this.pa) + 240, 100 * Math.sin(-0.01 * this.pa) + 320, 0), this.Yg(100 * Math.cos(-0.01 * this.pa + 2 * Math.PI / 3) + 240, 100 * Math.sin(-0.01 * this.pa + 2 * Math.PI / 3) + 320, 1), this.Yg(100 * Math.cos(-0.01 * this.pa + 4 * Math.PI / 3) + 240, 100 * Math.sin(-0.01 * this.pa + 4 * Math.PI / 3) + 320, 2));
    (b.getKeyDown("z") || b.getKeyDown("c") || b.getKeyDown("space")) && !this.te && this.Uh();
    this.pa += 1
  }, Yg:function(d, j, n) {
    if(!this.te) {
      c === m && (c = gls2.Na(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === m && (b = gls2.Na(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      f === m && (f = gls2.Na(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,155,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      n = [c, b, f][n].clone().addChildTo(this);
      n.speed = 0.7;
      var u = gls2.ma.randf(0, 2 * Math.PI), H = gls2.ma.rand(0, 20);
      n.setPosition(Math.cos(u) * H + d, Math.sin(u) * H + j);
      var D = this;
      n.update = function() {
        this.x += Math.cos(u) * this.speed;
        this.y += Math.sin(u) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var b = D.dd.indexOf(this);
          -1 !== b && D.dd.splice(b, 1)
        }
      };
      this.dd.push(n)
    }
  }, Uh:function() {
    $(this, "MAIN MENU", ["arcade mode", "training mode", "tutorial", "setting"], this.Gl, {defaultValue:this.pj, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, Gl:function(b) {
    2 !== b && (this.pj = b);
    switch(b) {
      case 0:
        gls2.core.mode = 0;
        this.tweener.clear().call(function() {
          this.te = k;
          for(var b = 0, c = this.dd.length;b < c;b++) {
            this.dd[b].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Hi())
        }.bind(this));
        break;
      case 1:
        this.xj();
        break;
      case 2:
        gls2.core.mode = 2;
        this.tweener.clear().call(function() {
          this.te = k;
          for(var b = 0, c = this.dd.length;b < c;b++) {
            this.dd[b].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.core.aa);
          gls2.core.aa.start(2, 0)
        }.bind(this));
        break;
      case 3:
        this.xc()
    }
  }, xj:function(b) {
    $(this, "STAGE", ["stage 1", "stage 2", "stage 3", "stage 4", "stage 5"], this.Kl, {defaultValue:b || 0})
  }, Kl:function(b) {
    5 === b ? this.Uh() : (gls2.core.mode = 1, gls2.core.ci = b, this.Pl())
  }, Pl:function() {
    $(this, "RANK", "0 10 20 30 40 50".split(" "), this.Jl, {})
  }, Jl:function(b) {
    6 === b ? this.xj(gls2.core.ci) : (gls2.core.aa.dg(0.1 * b), this.tweener.clear().call(function() {
      this.te = k;
      for(var b = 0, c = this.dd.length;b < c;b++) {
        this.dd[b].speed = 8
      }
    }.bind(this)).wait(1E3).call(function() {
      gls2.core.replaceScene(gls2.Hi())
    }.bind(this)))
  }, xc:function() {
    $(this, "SETTING", ["bgm volume", "sound volume", "particle", "bullet appearance"], this.Rh, {defaultValue:this.Yf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306eON/OFF\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u6575\u5f3e\u306e\u898b\u305f\u76ee\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059"]})
  }, Rh:function(b) {
    4 !== b && (this.Yf = b);
    switch(b) {
      case 0:
        this.Sh();
        break;
      case 1:
        this.Wh();
        break;
      case 2:
        this.Vh();
        break;
      case 3:
        this.Th();
        break;
      default:
        this.Uh()
    }
  }, Sh:function() {
    $(this, "BGM VOLUME", "012345".split(""), this.Nh, {defaultValue:gls2.core.nd, onCursorMove:function(b) {
      gls2.jb !== m && "exit" !== b && (gls2.jb.volume = 0.1 * b)
    }, showExit:A})
  }, Nh:function(b) {
    6 !== b && (gls2.core.nd = b);
    this.ed();
    this.xc()
  }, Wh:function() {
    $(this, "SE VOLUME", "012345".split(""), this.Qh, {defaultValue:gls2.core.zc, showExit:A})
  }, Qh:function(b) {
    6 !== b && (gls2.core.zc = b);
    this.ed();
    this.xc()
  }, Vh:function() {
    $(this, "PARTICLES", ["ON", "LITE", "OFF"], this.Ph, {defaultValue:gls2.core.Pc, showExit:A})
  }, Ph:function(b) {
    gls2.core.Pc = b;
    this.ed();
    this.xc()
  }, Th:function() {
    $(this, "BULLET", ["NORMAL", "LARGE"], this.Oh, {defaultValue:gls2.core.Db, showExit:A, menuDescriptions:["\u901a\u5e38\u30b5\u30a4\u30ba\u3067\u8868\u793a\u3057\u307e\u3059", "\u5927\u304d\u3081\u306b\u8868\u793a\u3057\u307e\u3059"]})
  }, Oh:function(b) {
    gls2.core.Db = b;
    this.ed();
    this.xc()
  }, ed:function() {
    localStorage.setItem("tmshooter.config", JSON.stringify({bgmVolume:gls2.core.nd, seVolume:gls2.core.zc, particleEffectLevel:gls2.core.Pc, bulletBig:gls2.core.Db}))
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Hi = tm.createClass({superClass:gls2.Scene, mode:0, types:m, ig:m, qc:m, rc:m, sc:m, Gh:m, Eh:m, type:0, style:0, Kd:A, ag:A, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Wl();
    this.ig = this.Vl();
    var b = tm.display.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(48, 320).setRotation(-90);
    b.update = function(b) {
      this.setScale(b.getKey("left") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * b)
    };
    b.addChildTo(this);
    b = tm.display.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(432, 320).setRotation(90);
    b.update = function(b) {
      this.setScale(b.getKey("right") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * b)
    };
    b.addChildTo(this);
    this.mode = 0;
    this.ig.visible = A;
    this.Kh(-1, k);
    this.qc.update();
    this.rc.update();
    this.sc.update();
    gls2.xa("voSelectShip");
    gls2.wb("bgmShipSelect", k)
  }, Wl:function() {
    var b = tm.display.CanvasElement();
    b.addChildTo(this);
    this.Gh = tm.display.Label("Type-A").setPosition(240, 150);
    this.Gh.addChildTo(b);
    var c = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Hh = tm.display.Label(c[0], 16).setPosition(240, 500);
    this.Hh.update = function() {
      this.Hh.text = c[this.type]
    }.bind(this);
    this.Hh.addChildTo(b);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.qc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.rc = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.sc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.qc.rb = 0;
    this.rc.rb = 1;
    this.sc.rb = 2;
    this.qc.setScale(3).setPosition(0, 320).addChildTo(b);
    this.rc.setPosition(0, 320).addChildTo(b);
    this.sc.setPosition(0, 320).addChildTo(b);
    this.qc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.rb / 3 * Math.PI)
    };
    this.rc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.rb / 3 * Math.PI)
    };
    this.sc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.rb / 3 * Math.PI)
    };
    return b
  }, Vl:function() {
    var b = tm.display.CanvasElement();
    b.addChildTo(this);
    this.Eh = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Eh.addChildTo(b);
    this.Ad = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(b);
    this.Jc = tm.app.Object2D();
    this.Jc.addChildTo(this.Ad);
    this.Jc.update = function(b) {
      this.Jc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * b.frame) : 0
    }.bind(this);
    this.Da = [];
    this.Da[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[0].update = function() {
      0 === this.type ? this.Da[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.Da[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.Da[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.Da[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[1].update = function() {
      0 === this.type ? this.Da[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.Da[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.Da[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.Da[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[2].update = function() {
      0 === this.type ? this.Da[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.Da[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.Da[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.Da[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[3].update = function() {
      0 === this.type ? this.Da[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.Da[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.Da[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.Ad.line = c(0, 0, 0, 130, 8);
    this.Ad.line.addChildTo(this.Ad);
    this.Da.each(function(b) {
      b.line = c(0, 0, 0, 130, 5);
      b.line.addChildTo(b);
      b.addChildTo(this.Jc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>", 
    "\u30d3\u30ae\u30ca\u30fc\u990a\u6210\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\u4e21\u65b9\u3092\n\u540c\u6642\u306b\u767a\u5c04\u3067\u304d\u308b\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b9\u30b3\u30a2\u304c1/10\u306b\u306a\u308a\u307e\u3059\uff01>>\n<<\u521d\u5fc3\u8005\u5411\u3051>>"];
    this.Fh = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Fh.update = function() {
      this.Fh.text = f[this.style]
    }.bind(this);
    this.Fh.addChildTo(b);
    return b
  }, update:function(b) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.ig.visible = A, !this.ag && b.getKeyDown("left")) {
        this.Kh(-1, A), gls2.xa("select")
      }else {
        if(!this.ag && b.getKeyDown("right")) {
          this.Kh(1, A), gls2.xa("select")
        }else {
          if(b.getKeyDown("z") || b.getKeyDown("c") || b.getKeyDown("space")) {
            this.mode = 1, gls2.xa("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.ig.visible = k, b.getKeyDown("left") ? (this.style = (this.style - 1 + 4) % 4, gls2.xa("select")) : b.getKeyDown("right") ? (this.style = (this.style + 1 + 4) % 4, gls2.xa("select")) : b.getKeyDown("z") || b.getKeyDown("c") || b.getKeyDown("space") ? (this.Kd = k, this.vj(), gls2.xa("decision")) : b.getKeyDown("x") && (this.mode = 0), this.fm(0 === ~~(b.frame / 60) % 2))
    }
  }, Bm:function() {
    $(this, "AUTO BOMB", ["on", "off"], this.Cl, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:k})
  }, Cl:function(b) {
    2 !== b && (this.Kd = 0 === b, this.vj())
  }, vj:function() {
    $(this, "ARE YOU READY?", ["ok"], this.Dl, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:k})
  }, Dl:function(b) {
    0 === b && this.Zl()
  }, Kh:function(b, c) {
    this.type = (this.type + b + 3) % 3;
    [this.qc, this.rc, this.sc][this.type].remove().addChildTo(this.types);
    c ? (this.qc.rb -= b, this.qc.scaleX = 0 === this.type ? 5 : 1, this.qc.scaleY = 0 === this.type ? 5 : 1, this.rc.rb -= b, this.rc.scaleX = 1 === this.type ? 5 : 1, this.rc.scaleY = 1 === this.type ? 5 : 1, this.sc.rb -= b, this.sc.scaleX = 2 === this.type ? 5 : 1, this.sc.scaleY = 2 === this.type ? 5 : 1) : (this.ag = k, this.qc.tweener.clear().to({rb:this.qc.rb - b, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.rc.tweener.clear().to({rb:this.rc.rb - b, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.sc.tweener.clear().to({rb:this.sc.rb - b, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.ag = A
    }.bind(this)));
    this.Gh.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Zl:function() {
    gls2.core.aa.Kd = this.Kd;
    gls2.core.aa.start(this.type, this.style);
    if(gls2.core.aa.wa.assets) {
      var b = tm.ui.LoadingScene({assets:gls2.core.aa.wa.assets, width:480, height:640, nextScene:function() {
        gls2.core.aa.assets = m;
        return gls2.core.aa
      }.bind(this)});
      b.bg.canvas.clearColor("black");
      gls2.core.replaceScene(b)
    }else {
      gls2.core.replaceScene(gls2.core.aa)
    }
    gls2.re()
  }, fm:function(b) {
    this.Eh.text = ["Shot", "Laser", "Expert", "Beginner"][this.style] + " Style";
    1 === this.style ? (this.Ad.line.Ac = A, this.Da[0].line.Ac = A, this.Da[1].line.Ac = A, this.Da[2].line.Ac = A, this.Da[3].line.Ac = A) : (this.Ad.line.Ac = k, this.Da[0].line.Ac = k, this.Da[1].line.Ac = k, this.Da[2].line.Ac = k, this.Da[3].line.Ac = k);
    b ? (this.Da[0].visible = k, this.Da[1].visible = k, 1 === this.style ? (this.Da[2].visible = A, this.Da[3].visible = A) : (this.Da[2].visible = k, this.Da[3].visible = k), this.Ad.line.lineWidth = 5) : (3 !== this.style && this.Da.each(function(b) {
      b.visible = A
    }), this.Ad.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Qd:M()});
  var c = tm.createClass({superClass:tm.display.CanvasElement, Ac:k, init:function(b, c, d, j, n) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = b + 10 * Math.cos(this.angle);
    this.y = c + 10 * Math.sin(this.angle);
    this.length = j;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = n
  }, update:function(b) {
    this.i = b.frame % 20 / 20
  }, draw:function(b) {
    b.lineWidth = this.lineWidth;
    if(this.Ac && 5 === this.lineWidth) {
      var c = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      b.drawArrow(this.x - c, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - c, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      b.drawArrow(this.x + c, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + c, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      b.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.cb = tm.createClass({superClass:gls2.Scene, da:m, score:0, Zc:0, ub:0, Va:0, df:0, vb:0, qd:0, Ba:0, wa:m, ka:m, Cd:3, fg:0, gg:0, lc:0, qe:0, ef:0, ff:0, Kd:A, hc:0, Od:0, Pi:0, td:A, bf:A, Oc:0, Fb:0, ab:A, ve:0, we:0, Wa:0, $c:0, vm:0, um:0, Tf:m, Ze:m, Xh:m, vh:m, th:m, uh:m, mh:m, lj:m, Yb:m, $b:m, od:m, oe:A, xl:A, zd:m, tl:0, fd:m, xh:m, $f:m, Nf:m, Se:m, Ld:m, ue:m, jj:m, gi:0, ei:0, Fj:0, fi:0, Ce:0, Wd:0, vd:0, Be:0, Vd:0, ud:0, Kf:0, $h:A, init:function() {
  gls2.cb.Le !== m && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.cb.Le = this;
  this.$b = gls2.nk(this);
  this.$b.Lb.addChildTo(this);
  this.ka = gls2.ek().Ia;
  this.ka.addChildTo(this);
  this.Tf = gls2.cb.Layer().addChildTo(this);
  this.Ze = gls2.cb.Layer().addChildTo(this);
  this.vh = gls2.cb.Layer().addChildTo(this);
  this.th = gls2.cb.Layer().addChildTo(this);
  this.Xh = gls2.cb.Layer().addChildTo(this);
  this.uh = gls2.cb.Layer().addChildTo(this);
  this.mh = Array.range(3).map(function() {
    return gls2.cb.Layer().addChildTo(this)
  }.bind(this));
  this.Kj = gls2.cb.Layer().addChildTo(this);
  this.lj = gls2.cb.xi(this).addChildTo(this);
  tm.Ob.Ed.Ye.je = this;
  this.Yb = tm.app.Object2D();
  this.Yb.addChildTo(this);
  this.Yb.update = function(c) {
    this.Ll(c)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.$b.clear()
  })
}, addChild:function(c) {
  c.lb ? this.th.addChild(c) : c instanceof gls2.Ya ? this.mh[c.Xa].addChild(c) : c instanceof gls2.Ug || c instanceof gls2.qi || c instanceof gls2.ti ? this.Tf.addChild(c) : c instanceof gls2.ea ? c.bd ? this.Tf.addChild(c) : this.vh.addChild(c) : c instanceof gls2.Fi ? (this.Xh.addChild(c), c.sd.addChildTo(this.Kj)) : c === this.Yb || c === this.ka || c instanceof gls2.cb.Layer || c instanceof gls2.cb.xi || c instanceof gls2.Gi || c instanceof gls2.wi ? this.superClass.prototype.addChild.apply(this, 
  arguments) : (console.error("unknown type child."), h(Error(c)))
}, update:function(c) {
  this.wa.update(c.frame);
  0 === c.frame % 2 && this.$b.update();
  c.getKeyDown("space") ? this.jf(0) : c.getKeyDown("p") && (this.pf().saveAsImage(), this.jf(0))
}, pf:function(c) {
  c = c || 1;
  var b = tm.graphics.Canvas();
  b.resize(480 * c, 640 * c);
  b.clearColor("black");
  b.drawImage(this.ka.ka.element, 0, 0, 480, 640, 0, 0, 480 * c, 640 * c);
  b.drawImage(this.app.canvas.element, 0, 0, 480, 640, 0, 0, 480 * c, 640 * c);
  b.drawImage(this.$b.element, 0, 0, 480, 640, 0, 0, 480 * c, 640 * c);
  return b
}, Ll:function(c) {
  this.da.Lc === A && 2 !== gls2.core.mode && gls2.fa.erase();
  var b;
  b = [].concat(gls2.ea.gb);
  for(var f = [].concat(gls2.he.gb), d = f.length;f[--d] !== i;) {
    for(var j = b.length;b[--j] !== i;) {
      var n = b[j], u = f[d];
      if(!(0 >= n.qa || n.eb) && gls2.Collision.xe(n, u)) {
        if(u.Sf(1), u.remove(), n.ad(u.Jd)) {
          this.lc += 1;
          this.ab ? this.Sb(0) : this.Sb(0.0025);
          this.Mh(n);
          break
        }
      }
    }
  }
  u = this.da.Xb;
  if(this.da.Vb) {
    b = [].concat(gls2.ea.gb);
    b.sort(function(b, c) {
      return b.y - c.y
    });
    for(j = b.length;b[--j] !== i;) {
      if(n = b[j], !(0 >= n.qa || n.eb) && gls2.Collision.xe(n, u)) {
        u.Ul(n.y + n.boundingHeightBottom);
        n.ad(u.Jd) ? (this.lc += 1, this.ab ? this.Sb(0) : this.Sb(0.005), this.Mh(n)) : (this.vb = Math.min(this.vb + 0.02, 1), this.ab ? (this.ie(0.01 * Y[this.$c]), this.Sb(0)) : (this.ie(0.01), this.Sb(5E-4)));
        u.Sf(2);
        break
      }
    }
    f = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ea.gb);
    for(j = b.length;b[--j] !== i;) {
      if(n = b[j], !(0 >= n.qa || n.eb) && gls2.Collision.xe(n, f)) {
        n.ad(u.Jd) ? (this.lc += 1, this.Sb(0.03), this.Mh(n)) : (this.vb = Math.min(this.vb + 0.02, 1), this.ab ? (this.ie(0.01 * Y[this.$c]), this.Sb(0.008)) : (this.ie(0.01), this.Sb(0.004))), u.jl(2, this.da.x, this.da.y - 30), this.Kf += 1, 300 < this.Kf && gls2.core.ta(gpgsConstants.ACH_CROSS_RANGE)
      }
    }
  }
  if(this.td) {
    gls2.fa.erase();
    b = [].concat(gls2.ea.gb);
    for(j = b.length;b[--j] !== i;) {
      if(n = b[j], !(0 >= n.qa || n.eb) && n.kc() && n.ad(2)) {
        this.Id(n.score), this.lc += 1
      }
    }
  }
  if(this.ab) {
    j = [].concat(gls2.he.gb);
    for(n = j.length;j[--n] !== i;) {
      if(u = j[n], !(0 >= u.qa)) {
        f = [].concat(gls2.Ya.gb);
        for(b = f.length;f[--b] !== i;) {
          if(d = f[b], d.visible !== A && 0 < u.qa && gls2.Collision.xe(u, d)) {
            d.qa -= 6 - this.Fb;
            if(0 > d.qa) {
              var H = d.Ca(), n = this.Fb;
              gls2.ma.rand(0, 40) < n && 14400 < gls2.Ub(H, this.da) && gls2.fa.hl(H);
              this.Id(10);
              this.ie(10);
              this.fj(A, A, d.x, d.y, 1)
            }
            u.qa -= 1
          }
        }
      }
    }
  }
  if(this.oe) {
    gls2.fa.erase()
  }else {
    if(this.da.parent !== m && this.da.eb === A && this.td === A && 0 >= this.ve) {
      u = A;
      for(j = gls2.Ya.gb.length;gls2.Ya.gb[--j] !== i;) {
        if(b = gls2.Ya.gb[j], b.visible !== A && gls2.Collision.xe(b, this.da)) {
          this.da.ad();
          u = k;
          0 < this.hc && this.Kd ? (this.Fb = gls2.ma.clamp(this.Fb - 1, 0, 1), this.Pe(-0.01), gls2.Ci(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.ta(gpgsConstants.ACH_AUTO_BOMB), this.Ld[this.Ba] += 1) : this.sj();
          break
        }
      }
      if(!u) {
        for(j = gls2.ea.gb.length;gls2.ea.gb[--j] !== i;) {
          if(n = gls2.ea.gb[j], !(0 >= n.qa || n.eb) && !n.bd && gls2.Collision.xe(n, this.da)) {
            this.da.ad();
            0 < this.hc && this.Kd ? (this.Fb = gls2.ma.clamp(this.Fb - 1, 0, 1), this.Pe(-0.01), gls2.Ci(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.ta(gpgsConstants.ACH_AUTO_BOMB), this.Ld[this.Ba] += 1) : this.sj();
            break
          }
        }
      }
    }
    this.ab && (this.we -= 1, 0 >= this.we && this.Of());
    this.ve = Math.max(this.ve - 1, 0);
    this.vb -= 0.012;
    0 >= this.vb && (this.vb = 0, 0 < this.Wa ? this.qd = this.Va = this.ub = 0 : (0 < this.Va && (0 >= this.qd && (this.qd = 0.0025 * this.Va), this.ub = this.ub * (this.Va - this.qd) / this.Va, this.Va -= this.qd), 0 >= this.Va && (this.qd = this.Va = this.ub = 0)));
    this.bf && (this.score += 1E3);
    u = gls2.Ya.gb.length;
    c.fps = 500 < u ? Math.floor(gls2.ma.clamp(500 / u, 0.2, 1) * FPS) : FPS
  }
}, Mh:function(c) {
  this.fj(c.bd, 62500 > gls2.Ub(c, this.da), c.x, c.y, c.star * aa[this.$c], c instanceof gls2.hd);
  this.ie(Y[this.$c]);
  for(var b = this.ub, f = ~~(this.Va / 500) + 1, d = 0;d < f;d++) {
    b += c.score, this.Id(b)
  }
  this.ub += c.score * f
}, fj:function(c, b, f, d, j, n) {
  c = c ? gls2.uk : gls2.Ji;
  for(var u = 0;u < j;u++) {
    var H = c(b);
    H.setPosition(f, d);
    n && (H.Sd = k)
  }
}, Bl:function(c) {
  gls2.xa("star");
  c.nj ? (this.gg += 1, this.ub += 1E3, this.Id(1E3 + 0 * this.ub), this.ab ? this.Sb(0) : this.Sb(0.01)) : (this.fg += 1, this.ub += 100, this.Id(100 + 0 * this.ub), this.ab ? this.Sb(0) : this.Sb(5E-4))
}, start:function(c, b) {
  this.$b.me.Sk().clear();
  this.Zc = this.score = 0;
  this.Cd = 3;
  this.hc = this.Od = U[b];
  this.Pi = V[b];
  this.bf = A;
  this.Wa = this.Fb = this.Oc = 0;
  this.Of();
  this.td = A;
  this.ef = this.ff = 0;
  this.fd = [];
  this.xh = [];
  this.$f = [];
  this.Nf = [];
  this.Se = [];
  this.Ld = [];
  this.ue = [];
  for(var f = 0;5 > f;f++) {
    this.fd.push(0), this.xh.push(0), this.$f.push(0), this.Nf.push(0), this.Se.push(0), this.Ld.push(0), this.ue.push(0)
  }
  this.jj = [];
  this.da = gls2.Fi(this, c, b);
  0 === gls2.core.mode && this.dg(0);
  N.Qa.ob.$bg = 3 !== b ? 0 : 1;
  N.Qa.ob.$ex = 2 !== b ? 0 : 1;
  0 === gls2.core.mode ? this.hg(0) : 1 === gls2.core.mode ? this.hg(gls2.core.ci) : 2 === gls2.core.mode && this.hg(-1);
  this.am();
  0 === c ? gls2.core.ta(gpgsConstants.ACH_TYPEA_SALLY) : 1 === c ? gls2.core.ta(gpgsConstants.ACH_TYPEB_SALLY) : 2 === c && gls2.core.ta(gpgsConstants.ACH_TYPEC_SALLY)
}, hg:function(c) {
  this.da.parent !== m && this.da.remove();
  this.da.sd.parent !== m && this.da.sd.remove();
  gls2.ea.Ve();
  gls2.he.Ve();
  gls2.fa.Ve();
  this.Tf.removeChildren();
  this.th.removeChildren();
  this.uh.removeChildren();
  this.Xh.removeChildren();
  this.Kj.removeChildren();
  this.mh.forEach(function(b) {
    b.removeChildren()
  });
  this.Yb.removeChildren();
  this.lc = this.qe = this.gg = this.fg = this.df = this.vb = this.Va = this.ub = 0;
  this.od = m;
  this.xl = this.oe = A;
  this.ef = 0;
  this.$b.Lb.$e = 0;
  this.Fb = this.$b.Lb.Mc = 0;
  this.Ba = c;
  this.wa = gls2.kd.create(this, c);
  this.tweener.clear().wait(1E3).call(function() {
    0 === c && gls2.xa("voLetsGo");
    this.Ih()
  }.bind(this));
  this.ka.tweener.clear();
  this.Kf = this.ud = this.Vd = this.Be = this.vd = this.Wd = this.Ce = this.fi = this.ei = this.gi = 0;
  this.$h = A;
  this.gi = gls2.core.frame;
  this.Fj = Date.now()
}, Ih:function() {
  this.Jb("3...2...1...");
  this.Jb("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Xb.addChildTo(this);
  this.da.Lc = A;
  this.da.eb = k;
  this.da.Rd = A;
  this.da.Vb = A;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    2 !== gls2.core.mode && (this.ke = this.Lc = k)
  }.bind(this.da)).wait(3E3).call(function() {
    this.eb = A
  }.bind(this.da))
}, sj:function() {
  gls2.na.Pf(this.da.x, this.da.y, this);
  this.Jb("I was shot down.");
  this.da.Lc = A;
  this.da.remove();
  this.da.sd.remove();
  this.Cd -= 1;
  this.qd = this.Va = this.vb = 0;
  this.Wa = ~~(this.Wa / 2 + 0.5);
  this.ef += 1;
  this.ff += 1;
  this.$f[this.Ba] += 1;
  this.Fb = gls2.ma.clamp(this.Fb - 3, 0, 1);
  this.Pe(-0.03);
  0 < this.Cd ? this.tweener.clear().wait(1E3).call(function() {
    this.hc = this.Od = Math.min(this.Od + 1, this.Pi);
    this.Ih()
  }.bind(this)) : (this.zd = this.pf(1).canvas.toDataURL("image/png"), gls2.core.af === this.score && (gls2.core.pl = this.zd), this.tweener.clear().wait(2E3).call(function() {
    this.Zc < gls2.core.Ri() || 1 === gls2.core.mode ? this.Ol() : this.ej()
  }.bind(this)))
}, dg:function(c) {
  N.Qa.ob.$rank = 1 * gls2.ma.clamp(c, 0, 0.5);
  N.Qa.ob.$difficulty = 0.5 * N.Qa.ob.$rank
}, Pe:function(c) {
  this.dg(N.Qa.ob.$rank / 1 + c)
}, il:function() {
  this.Wd = Date.now();
  this.vd += this.Wd - this.Ce;
  this.Vd = gls2.core.frame;
  this.ud += this.Vd - this.Be;
  this.Jb("System rebooted.", k);
  for(var c = this.score = 0;c < this.fd.length;c++) {
    this.fd[c] = 0
  }
  this.Zc += 1;
  this.Nf[this.Ba] += 1;
  this.Cd = 3;
  this.hc = this.Od = U[this.da.style];
  this.Fb = 0;
  this.dg(0);
  this.Ih()
}, Ui:function() {
  this.Si();
  gls2.wb("bgmResult");
  var c = tm.app.Object2D();
  c.addChildTo(this.Yb);
  c.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.pf()));
    c.remove()
  }.bind(this))
}, ej:function() {
  this.fd[this.Ba] = 0 === this.Ba ? this.score : this.score - this.fd[this.Ba - 1];
  this.Si();
  gls2.rf();
  this.app.replaceScene(gls2.vi())
}, Si:function() {
  this.fi = Date.now();
  var c = this.fi - this.Fj - this.vd;
  this.ei = gls2.core.frame;
  this.xh[this.Ba] = 1E3 * ((this.ei - this.gi - this.ud) / c)
}, Id:function(c) {
  3 === this.da.style && (c *= 0.1);
  var b = this.score;
  this.score += c;
  for(c = 0;c < O.length;c++) {
    var f = O[c];
    b < f && f <= this.score && (this.aj(), 0 == c && this.app.ta(gpgsConstants.ACH_FIRST_EXTEND), 1 == c && this.app.ta(gpgsConstants.ACH_SECOND_EXTEND))
  }
  gls2.core.af = Math.max(gls2.core.af, this.score);
  gls2.core.af === this.score && (gls2.core.ql = this.Ba, gls2.core.sl = this.da.type, gls2.core.rl = this.da.style, gls2.core.ol = this.Zc);
  1E12 <= this.score ? gls2.core.ta(gpgsConstants.ACH_SCORE1000000000000) : 1E11 <= this.score ? gls2.core.ta(gpgsConstants.ACH_SCORE100000000000) : 5E10 <= this.score ? gls2.core.ta(gpgsConstants.ACH_SCORE50000000000) : 2E10 <= this.score ? gls2.core.ta(gpgsConstants.ACH_SCORE20000000000) : 2E9 <= this.score ? gls2.core.ta(gpgsConstants.ACH_SCORE2000000000) : 1E8 <= this.score && gls2.core.ta(gpgsConstants.ACH_SCORE100000000)
}, ie:function(c) {
  this.qd = 0;
  this.Va += c;
  this.df = Math.max(this.df, this.Va);
  1 <= c && (this.vb = 1);
  1E5 <= this.Va ? this.app.ta(gpgsConstants.ACH_100000HIT) : 1E4 <= this.Va ? this.app.ta(gpgsConstants.ACH_10000HIT) : 1E3 <= this.Va ? this.app.ta(gpgsConstants.ACH_1000HIT) : 100 <= this.Va && this.app.ta(gpgsConstants.ACH_100HIT)
}, Sb:function(c) {
  if(10 !== this.Wa) {
    0 === this.Wa && (this.tl = gls2.core.frame);
    for(c *= 0.75;1 < c;) {
      gls2.Fd(this.da).addChildTo(this), c -= 1, this.Oc = 0, this.Wa += 1, 1 === this.Wa ? (this.Jb("HYPER SYSTEM, stand by.", k), gls2.xa("voHyperStandBy")) : (this.Jb("HYPER SYSTEM, ready.", k), gls2.xa("voHyperReady"))
    }
    this.Oc = gls2.ma.clamp(this.Oc + c, 0, 1);
    1 <= this.Oc && (gls2.Fd(this.da).addChildTo(this), this.Wa += 1, this.Oc -= 1, 1 === this.Wa ? (this.Jb("HYPER SYSTEM, stand by.", k), gls2.xa("voHyperStandBy")) : (this.Jb("HYPER SYSTEM, ready.", k), gls2.xa("voHyperReady")))
  }
}, $l:function() {
  0.5 > Math.random() ? (this.Jb("HYPER SYSTEM start!!", k), gls2.xa("voHyperStart0")) : (this.Jb("start counting to system limit.", k), gls2.xa("voHyperStart1"));
  this.Fb = gls2.ma.clamp(this.Fb + 1, 0, 5);
  this.Pe(0.01 * this.Wa);
  N.Qa.ob.$hyperOff = 0.8 * (2 !== this.da.style ? 1 : 0.5);
  this.we = 600;
  this.ve = 72;
  this.da.Vf.De(this.Wa);
  this.da.Xb.De(this.Wa);
  this.da.ne = this.da.Vf;
  gls2.na.kl(this.da.x, this.da.y, this);
  this.ab = k;
  this.$c = this.Wa;
  this.Oc = this.Wa = 0;
  gls2.fa.erase(k);
  this.app.ta(gpgsConstants.ACH_ACTIVATE_HYPER);
  10 == this.$c && this.app.ta(gpgsConstants.ACH_MAX_HYPER);
  this.ue[this.Ba] += 1;
  this.jj.push(this.$c)
}, Of:function() {
  this.ab !== A && (this.ab = A, gls2.Fd(this.da, k).addChildTo(this), this.da.ne = this.da.uj, N.Qa.ob.$hyperOff = 1 * (2 !== this.da.style ? 1 : 0.5), this.da.Vf.De(0), this.da.Xb.De(0), this.ve = 60, this.$c = this.we = 0, gls2.fa.erase())
}, Ok:function() {
  gls2.xa("decision");
  gls2.xa("voGetBomb");
  this.hc = Math.min(this.hc + 1, this.Od);
  this.bf = this.hc === this.Od
}, aj:function() {
  gls2.fa.erase(k);
  gls2.xa("voExtend");
  gls2.xa("decision");
  this.Jb("extended.");
  this.Cd += 1
}, Jb:function(c, b) {
  this.$b.me.Pk(c, b)
}, jf:function(c) {
  this.Ce = Date.now();
  this.Be = gls2.core.frame;
  $(this, "PAUSE", ["resume", "setting", "exit game"], this.Il, {defaultValue:c, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:A})
}, Il:function(c) {
  switch(c) {
    case 0:
      this.Wd = Date.now();
      this.vd += this.Wd - this.Ce;
      this.Vd = gls2.core.frame;
      this.ud += this.Vd - this.Be;
      break;
    case 1:
      this.xc();
      break;
    case 2:
      this.Nl()
  }
}, xc:function() {
  $(this, "SETTING", ["bgm volume", "sound volume", "particle", "bullet appearance"], this.Rh, {defaultValue:this.Yf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306eON/OFF\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u6575\u5f3e\u306e\u898b\u305f\u76ee\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059"]})
}, Rh:function(c) {
  4 !== c && (this.Yf = c);
  switch(c) {
    case 0:
      this.Sh();
      break;
    case 1:
      this.Wh();
      break;
    case 2:
      this.Vh();
      break;
    case 3:
      this.Th();
      break;
    default:
      this.jf(0)
  }
}, Nl:function() {
  $(this, "REARY?", ["yes", "no"], this.El, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:A})
}, El:function(c) {
  0 === c ? (gls2.rf(), this.app.replaceScene(gls2.TitleScene())) : this.jf(1)
}, Sh:function() {
  $(this, "BGM VOLUME", "012345".split(""), this.Nh, {defaultValue:gls2.core.nd, onCursorMove:function(c) {
    gls2.jb !== m && 6 !== c && (gls2.jb.volume = 0.1 * c)
  }, showExit:A})
}, Nh:function(c) {
  6 !== c && (gls2.core.nd = c);
  this.ed();
  this.xc(1)
}, Wh:function() {
  $(this, "SE VOLUME", "012345".split(""), this.Qh, {defaultValue:gls2.core.zc, showExit:A})
}, Qh:function(c) {
  6 !== c && (gls2.core.zc = c);
  this.ed();
  this.xc(1)
}, Vh:function() {
  $(this, "PARTICLES", ["ON", "LITE", "OFF"], this.Ph, {defaultValue:gls2.core.Pc, showExit:A})
}, Ph:function(c) {
  gls2.core.Pc = c;
  this.ed();
  this.xc(1)
}, Th:function() {
  $(this, "BULLET", ["NORMAL", "LARGE"], this.Oh, {defaultValue:gls2.core.Db, showExit:A, menuDescriptions:["\u901a\u5e38\u30b5\u30a4\u30ba\u3067\u8868\u793a\u3057\u307e\u3059", "\u5927\u304d\u3081\u306b\u8868\u793a\u3057\u307e\u3059"]})
}, Oh:function(c) {
  gls2.core.Db = c;
  this.ed();
  this.xc(1)
}, ed:function() {
  localStorage.setItem("tmshooter.config", JSON.stringify({bgmVolume:gls2.core.nd, seVolume:gls2.core.zc, particleEffectLevel:gls2.core.Pc, bulletBig:gls2.core.Db}))
}, Ol:function() {
  this.Ce = Date.now();
  this.Be = gls2.core.frame;
  $(this, "CONTINUE? (" + this.Zc + "/" + gls2.core.Ri() + ")", ["yes", "no"], this.Fl, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:A})
}, Fl:function(c) {
  switch(c) {
    case 0:
      this.il();
      break;
    case 1:
      this.Wd = Date.now(), this.vd += this.Wd - this.Ce, this.Vd = gls2.core.frame, this.ud += this.Vd - this.Be, this.ej()
  }
}, Qd:M(), Xl:function() {
  this.$b.Lb.tweener.clear().to({$e:-480}, 1600, "easeInBack").to({Mc:30}, 800, "easeInOutBack")
}, hj:function() {
  this.$b.Lb.tweener.clear().to({Mc:0}, 800, "easeInOutBack").to({$e:0}, 1600, "easeOutBack")
}, nh:function() {
  return 3 === gls2.core.aa.da.style ? A : 1 === gls2.core.mode ? k : 0 === gls2.core.mode && 0 === this.Zc && 2 >= this.ff
}, mf:m, nf:0, cf:m, Bf:0, am:function() {
  if(1 === this.Bf) {
    if(localStorage.getItem("recCount") !== i) {
      this.cf = [];
      for(var c = ~~localStorage.getItem("recCount"), b = 0;b < c;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.mf = [];
    this.nf = 0
  }else {
    if(2 === this.Bf && localStorage.getItem("recCount") !== i) {
      this.cf = [];
      c = ~~localStorage.getItem("recCount");
      for(b = 0;b < c;b++) {
        for(var f = localStorage.getItem("rec" + b).split(","), d = 0;d < f.length;d++) {
          this.cf.push(f[d])
        }
      }
    }
  }
}, Em:function(c) {
  if(1 === this.Bf) {
    1E3 < this.mf.length && (localStorage.setItem("rec" + this.nf, this.mf), localStorage.setItem("recCount", this.nf), this.mf = [], this.nf += 1), this.mf.push("" + ~~c.getKey("up") + ~~c.getKey("down") + ~~c.getKey("left") + ~~c.getKey("right") + ~~c.getKey("z") + ~~c.getKey("x") + ~~c.getKey("c"))
  }else {
    if(2 === this.Bf && this.cf) {
      var b = this.cf.shift();
      b !== i && (c.getKey = function(c) {
        return"up" === c ? !!~~b[0] : "down" === c ? !!~~b[1] : "left" === c ? !!~~b[2] : "right" === c ? !!~~b[3] : "z" === c ? !!~~b[4] : "x" === c ? !!~~b[5] : "c" === c ? !!~~b[6] : A
      }, c.getKeyDown = function(c) {
        return"up" === c ? !!~~b[0] : "down" === c ? !!~~b[1] : "left" === c ? !!~~b[2] : "right" === c ? !!~~b[3] : "z" === c ? !!~~b[4] : "x" === c ? !!~~b[5] : "c" === c ? !!~~b[6] : A
      })
    }
  }
}});
gls2.cb.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.cb.xi = tm.createClass({superClass:tm.display.CanvasElement, aa:m, frame:0, init:function(c) {
  this.superInit();
  this.aa = c;
  this.blendMode = "lighter"
}, update:function(c) {
  this.frame = c.frame
}, draw:function(c) {
  this.Wk(c);
  this.Xk(c)
}, Wk:function(c) {
  if(0 < this.aa.vb) {
    c.fillStyle = "rgba(255," + ~~(255 * this.aa.vb) + "," + ~~Math.min(255, 512 * this.aa.vb) + ",0.5)";
    var b = 500 * this.aa.vb;
    c.fillRect(465, 635 - b, 10, b)
  }
}, Xk:function(c) {
  c.fillStyle = "rgba(255,255,0,0.1)";
  c.fillRect(5, 628, 200, 9);
  10 === this.Wa ? 1 === this.frame % 2 && (c.fillStyle = "rgba(255,255,255,0.3)", c.fillRect(5, 628, 200, 9)) : 0 < this.aa.Oc && (c.fillStyle = "rgba(255,255,100,0.3)", c.fillRect(5, 628, 200 * this.aa.Oc, 9))
}});
gls2.cb.Le = m;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, aa:m, zd:m, Yb:m, values:m, labels:m, Wf:m, Bj:[1E3, 2E3, 4E3, 1E4, 1], mj:m, ai:m, cursor:0, wait:0, frame:0, init:function(c, b) {
  this.superInit();
  this.aa = c;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.aa.fg, this.aa.gg, ~~(100 * (this.aa.lc / this.aa.qe)), this.aa.df, 0 === this.aa.ef ? 5E7 * (this.aa.Ba + 1) : 0];
  this.Wf = this.values.map(function(b) {
    return 0.01 * b
  });
  tm.display.Label("RESULT", 40).setPosition(240, 64).addChildTo(this);
  tm.display.Label("STAR (S)").setAlign("right").setBaseline("middle").setPosition(240, 128).addChildTo(this);
  tm.display.Label("STAR (L)").setAlign("right").setBaseline("middle").setPosition(240, 192).addChildTo(this);
  tm.display.Label("KILL RATIO").setAlign("right").setBaseline("middle").setPosition(240, 256).addChildTo(this);
  tm.display.Label("MAX HIT").setAlign("right").setBaseline("middle").setPosition(240, 320).addChildTo(this);
  tm.display.Label("NO MISS BONUS", 20).setAlign("right").setBaseline("middle").setPosition(240, 384).addChildTo(this);
  tm.display.Label("TOTAL SCORE").setAlign("right").setBaseline("middle").setPosition(240, 448).addChildTo(this);
  this.labels = [];
  for(var f = 0;f < this.values.length;f++) {
    this.labels[f] = tm.display.Label("" + Math.floor(this.values[f]) + (2 === f ? "%" : ""), 30).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 640 * (0.2 + 0.1 * f)).addChildTo(this)
  }
  this.mj = tm.display.Label(Math.floor(this.aa.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.ai = tm.display.Label("press button").setPosition(240, 576).addChildTo(this);
  this.ai.visible = A;
  this.zd = b;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var j = 0;16 > j;j++) {
      d[f][j] = {bi:0, yd:0, gd:gls2.ma.randf(-2, 2), Bc:gls2.ma.randf(1, 4)}
    }
  }
  this.Yb = tm.app.Object2D();
  this.Yb.draw = function(b) {
    b.save();
    for(var c = k, f = 0;f < d.length;f++) {
      for(var j = 0;j < d[f].length;j++) {
        var F = d[f][j];
        640 > 40 * j + F.yd && (b.drawImage(this.zd.element, 40 * f, 40 * j, 40, 40, 40 * f + F.bi, 40 * j + F.yd, 40, 40), F.bi += F.gd, F.yd += F.Bc, F.Bc += 0.3, c = A)
      }
    }
    this.wait = 60;
    c && this.Yb.remove();
    b.restore()
  }.bind(this);
  this.Yb.addChildTo(this);
  this.on("enter", function() {
    this.aa.lc === this.aa.qe ? gls2.core.ta(gpgsConstants.ACH_PERFECT) : 0.4 > this.aa.lc / this.aa.qe && gls2.core.ta(gpgsConstants.ACH_MERCY);
    0 === this.aa.ff && 0 === this.aa.Zc && (0 === this.aa.Ba ? gls2.core.ta(gpgsConstants.ACH_STAGE1) : 1 === this.aa.Ba ? gls2.core.ta(gpgsConstants.ACH_STAGE2) : 2 === this.aa.Ba ? gls2.core.ta(gpgsConstants.ACH_STAGE3) : 3 === this.aa.Ba ? gls2.core.ta(gpgsConstants.ACH_STAGE4) : 4 === this.aa.Ba && gls2.core.ta(gpgsConstants.ACH_STAGE5));
    0 === this.aa.ue[this.aa.Ba] ? gls2.core.ta(gpgsConstants.ACH_NO_HYPER) : 5 <= this.aa.ue[this.aa.Ba] && gls2.core.ta(gpgsConstants.ACH_HYPER_AND_HYPER);
    0 === this.aa.Se[this.aa.Ba] && 0 === this.aa.Ld[this.aa.Ba] && gls2.core.ta(gpgsConstants.ACH_NO_BOMB);
    this.aa.$h || gls2.core.ta(gpgsConstants.ACH_HUMAN_POWER)
  });
  this.on("exit", function() {
    gls2.re()
  })
}, update:function(c) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var b = this.cursor;
    if(b < this.values.length) {
      gls2.xa("star"), this.values[b] <= this.Wf[b] || c.getKeyDown("z") || c.getKeyDown("c") || c.getKeyDown("space") ? (this.aa.Id(this.values[b] * this.Bj[b]), this.values[b] = 0, this.cursor += 1, this.wait = 30) : (this.aa.Id(this.Wf[b] * this.Bj[b]), this.values[b] -= this.Wf[b]), this.labels[b].text = "" + Math.floor(this.values[b]) + (2 === b ? "%" : ""), this.mj.text = Math.floor(this.aa.score)
    }else {
      if(this.ai.visible = k, c.getKeyDown("z") || c.getKeyDown("c") || c.getKeyDown("space") || 1800 < this.frame) {
        gls2.xa("decision"), this.aa.fd[this.aa.Ba] = 0 === this.aa.Ba ? this.aa.score : this.aa.score - this.aa.fd[this.aa.Ba - 1], 0 === gls2.core.mode ? (b = this.aa.Ba, gls2.core.Aj([[gpgsConstants.LEAD_SHOTSTYLE_STAGE1, gpgsConstants.LEAD_SHOTSTYLE_STAGE2, gpgsConstants.LEAD_SHOTSTYLE_STAGE3, gpgsConstants.LEAD_SHOTSTYLE_STAGE4, gpgsConstants.LEAD_SHOTSTYLE_STAGE5], [gpgsConstants.LEAD_LASERSTYLE_STAGE1, gpgsConstants.LEAD_LASERSTYLE_STAGE2, gpgsConstants.LEAD_LASERSTYLE_STAGE3, gpgsConstants.LEAD_LASERSTYLE_STAGE4, 
        gpgsConstants.LEAD_LASERSTYLE_STAGE5], [gpgsConstants.LEAD_EXPERTSTYLE_STAGE1, gpgsConstants.LEAD_EXPERTSTYLE_STAGE2, gpgsConstants.LEAD_EXPERTSTYLE_STAGE3, gpgsConstants.LEAD_EXPERTSTYLE_STAGE4, gpgsConstants.LEAD_EXPERTSTYLE_STAGE5], [gpgsConstants.LEAD_BEGINNERSTYLE_STAGE1, gpgsConstants.LEAD_BEGINNERSTYLE_STAGE2, gpgsConstants.LEAD_BEGINNERSTYLE_STAGE3, gpgsConstants.LEAD_BEGINNERSTYLE_STAGE4, gpgsConstants.LEAD_BEGINNERSTYLE_STAGE5]][this.aa.da.style][b], this.aa.fd[b]), 5 == this.aa.Ba + 
        1 ? c.replaceScene(gls2.bk()) : (this.aa.hg(this.aa.Ba + 1), this.aa.wa.assets ? (b = tm.ui.LoadingScene({assets:this.aa.wa.assets, width:480, height:640, nextScene:function() {
          return this.aa
        }.bind(this)}), b.bg.canvas.clearColor("black"), c.replaceScene(b)) : c.replaceScene(this.aa))) : 1 === gls2.core.mode && (gls2.rf(), c.replaceScene(gls2.TitleScene()))
      }
    }
    this.frame += 1
  }
}, Qd:M()});
gls2.vi = tm.createClass({superClass:gls2.Scene, pa:0, yj:A, init:function() {
  this.superInit();
  var c = tm.display.Label("GAME OVER");
  c.fillStyle = "red";
  c.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.one("enter", function() {
    gls2.wb("gameover");
    this.Tl();
    this.wj()
  })
}, update:function(c) {
  (c.getKeyDown("z") || c.getKeyDown("c") || 300 == this.pa && !this.yj) && this.wj();
  this.pa += 1
}, Qd:function(c) {
  c.clearColor("black")
}, Tl:function() {
  var c = gls2.core.aa.da;
  this.app.Aj([[gpgsConstants.LEAD_TYPEA_SHOTSTYLE, gpgsConstants.LEAD_TYPEA_LASERSTYLE, gpgsConstants.LEAD_TYPEA_EXPERTSTYLE, gpgsConstants.LEAD_TYPEA_BEGINNERSTYLE], [gpgsConstants.LEAD_TYPEB_SHOTSTYLE, gpgsConstants.LEAD_TYPEB_LASERSTYLE, gpgsConstants.LEAD_TYPEB_EXPERTSTYLE, gpgsConstants.LEAD_TYPEB_BEGINNERSTYLE], [gpgsConstants.LEAD_TYPEC_SHOTSTYLE, gpgsConstants.LEAD_TYPEC_LASERSTYLE, gpgsConstants.LEAD_TYPEC_EXPERTSTYLE, gpgsConstants.LEAD_TYPEC_BEGINNERSTYLE]][c.type][c.style], gls2.core.aa.score)
}, wj:function() {
  this.wait || (this.yj = k, $(this, "GAME OVER", ["tweet result", "back to title"], this.Hl, {defaultValue:1, menuDescriptions:["\u30d7\u30ec\u30a4\u7d50\u679c\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:A}))
}, Hl:function(c) {
  0 === c ? this.em() : 1 === c && this.app.replaceScene(gls2.TitleScene())
}, em:function() {
  var c = "TM-Shooter CBL SCORE: {score} {stage} {type}-{style} continue:{cont} #{hashtag}".format({score:Math.floor(this.app.aa.score), stage:5 > this.app.aa.Ba ? "Stage" + (this.app.aa.Ba + 1) : "ALL", type:"ABC"[this.app.aa.da.type], style:["S", "L", "EX", "BG"][this.app.aa.da.style], cont:this.app.aa.Zc, hashtag:"tmshooter"}), b = this.app.aa.zd;
  b && (b = b.replace("data:image/png;base64,", ""));
  window.open("", "childWindow", "width=500, height=500, menubar=no, toolbar=no, location=no, status=no, resizable=yes, scrollbars=yes");
  var f = document.createElement("form");
  f.method = "post";
  f.action = "http://commons.dev7.jp/twitters/post-with-image";
  f.target = "childWindow";
  var d = document.createElement("input");
  d.name = "text";
  d.value = c;
  f.appendChild(d);
  c = document.createElement("input");
  c.name = "media";
  c.value = b;
  f.appendChild(c);
  f.submit()
}});
(function() {
  var c = "TM-Shooter cure black label;2D 'DANMAKU' Shooter on HTML5;;MUSIC by \u5cf6\u767d;JUNXXXXX\nas select;flow blue\nas stage1;FORCE\uff08MP3\uff09\nas boss;Stand by\nas result;\u611b\u3057\u3055\u3068\u5207\u306a\u3055\u3068\u30e0\u30fc\u30f3\u30d5\u30a7\u30a4\u30b9\u3068\u9aa8\u7c97\u9b06\u75c7\u3068\nas stage2;C of Cloud\nas stage3;\u5c55\u958b\u30e1\u30ac\u30d1\u30fc\u30bb\u30af\nas stage4;Tearing the stratus\nas stage5;\u65b0\u661f\u30ce\u30f4\u30a1\nas last boss;evoke\nas ex boss;\u307b\u3057\u306e\u3053\u3048\nas ending;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;TEST PLAY;manofac;;SPECIAL THANKS;simiraaaa;;Stage3 PROGRAM AND GRAPHICS;minimo;;(\u4ee5\u4e0a \u656c\u79f0\u7565);;MAIN PROGRAM;daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!;;GOKIGENYO!".split(";");
  gls2.bk = tm.createClass({superClass:gls2.Scene, ka:m, da:m, labels:m, Gj:A, speed:0, bj:A, Xa:m, init:function() {
    this.superInit();
    this.Xa = tm.display.CanvasElement().addChildTo(this);
    this.ka = gls2.core.aa.ka;
    this.ka.addChildTo(this);
    this.ka.direction = 0.5 * Math.PI;
    this.ka.speed = 1;
    var b = this.da = gls2.core.aa.da;
    b.Lc = A;
    b.setPosition(240, 448);
    b.aa = this.Xa;
    [].concat(b.children).forEach(function(c) {
      c != b.Jc && c.remove()
    });
    b.addChildTo(this);
    var f = b.x;
    b.on("enterframe", function() {
      0.2 < b.x - f ? b.bb += 0.3 : -0.2 > b.x - f ? b.bb -= 0.3 : 0 < b.x - f ? b.bb += 0.11 : 0 > b.x - f && (b.bb -= 0.11);
      f = b.x
    });
    var d = function() {
      var c = gls2.ma.randf(0.8, 1.2);
      b.tweener.clear().to({x:gls2.ma.randf(48, 432), y:gls2.ma.randf(192, 512), scaleX:c, scaleY:c}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.aa.Ba += 1;
    var j = this;
    this.labels = c.map(function(b, c) {
      return tm.display.Label(b, 16).setPosition(240, 960 + 64 * c).addChildTo(j).on("enterframe", function() {
        this.y -= j.speed;
        -192 > this.y && this.remove()
      })
    });
    tm.display.Label("dev7.jp", 24).setPosition(240, 960 + 64 * (c.length + 3)).addChildTo(this).on("enterframe", function() {
      320 < this.y && (this.y -= j.speed)
    });
    this.tweener.wait(2E3).call(function() {
      gls2.wb("bgmEnding", k, k);
      this.Gj = k
    }.bind(this))
  }, onenter:function() {
    0 === gls2.core.aa.da.type ? gls2.core.ta(gpgsConstants.ACH_TYPEA) : 1 === gls2.core.aa.da.type ? gls2.core.ta(gpgsConstants.ACH_TYPEB) : 2 === gls2.core.aa.da.type && gls2.core.ta(gpgsConstants.ACH_TYPEC)
  }, onexit:function() {
    this.ka.addChildTo(gls2.core.aa)
  }, update:function(b) {
    b.getKey("z") || b.getKey("x") || b.getKey("c") || this.Gj && gls2.jb && gls2.jb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(b) {
      return!!b.parent
    }) ? this.speed = 8 : this.Yl() : this.speed = 0.5
  }, Yl:function() {
    this.bj || (this.bj = k, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.rf();
      this.app.replaceScene(gls2.vi())
    }.bind(this)), this.ka.tweener.clear().to({speed:9}, 2E3), this.da.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, Qd:M()})
})();
(function() {
  gls2.ea = tm.createClass({superClass:tm.display.CanvasElement, name:m, da:m, aa:m, wa:m, qa:0, jc:0, gj:1, score:0, bd:A, erase:A, star:1, wl:A, Qb:k, $a:A, frame:0, eb:A, Re:A, ae:m, direction:0, speed:0, ia:m, init:function(b, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.$a = A;
      c.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var b = c.indexOf(this);
      -1 !== b && c.splice(b, 1)
    });
    this.Qb = k;
    this.aa = b;
    this.da = b.da;
    this.score = 100;
    this.erase = A;
    this.Nk(d);
    f.setup(this);
    this.altitude = this.bd ? 1 : 10;
    this.ae = {x:0, y:0};
    this.eb = A
  }, hf:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, zm:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.$a === A && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.$a = k, this.dispatchEvent(tm.event.Event("enter")));
    var b = this.x, c = this.y;
    this.bd && (this.x += this.aa.ka.Aa, this.y += this.aa.ka.Fa);
    this.$a && (this.frame += 1);
    this.ae.x = this.x - b;
    this.ae.y = this.y - c
  }, ad:function(b) {
    if(!this.$a || this.Re) {
      return A
    }
    this.qa -= b * this.gj;
    if(0 >= this.qa) {
      return b = gls2.ma.randf(0, 5), 2 > b ? this.aa.Jb("enemy destroy.") : 4 > b ? this.aa.Jb(this.name + " destroy.") : this.aa.Jb("ETR reaction gone."), this.erase && gls2.fa.erase(k, 62500 > gls2.Ub(this, this.da), this instanceof gls2.hd), this.dispatchEvent(tm.event.Event("destroy")), this.Ca(), "yukishiro" === this.name ? gls2.core.ta(gpgsConstants.ACH_YUKISHIRO) : "mishou" === this.name ? gls2.core.ta(gpgsConstants.ACH_MISHOU) : "higashi" === this.name ? gls2.core.ta(gpgsConstants.ACH_HIGASHI) : 
      "hishikawa" === this.name ? gls2.core.ta(gpgsConstants.ACH_HISHIKAWA) : "minamino" === this.name ? gls2.core.ta(gpgsConstants.ACH_MINAMINO) : "misumi" === this.name ? gls2.core.ta(gpgsConstants.ACH_MISUMI) : "hyuga" === this.name ? gls2.core.ta(gpgsConstants.ACH_HYUUGA) : "momozono" === this.name ? gls2.core.ta(gpgsConstants.ACH_MOMOZONO) : "aida" === this.name ? gls2.core.ta(gpgsConstants.ACH_AIDA) : "houjou" === this.name ? gls2.core.ta(gpgsConstants.ACH_HOUJOU) : "sakagami" === this.name && 
      gls2.core.ta(gpgsConstants.ACH_SAKAGAMI), k
    }
    40 > this.qa && this.Ja();
    return A
  }, Ca:function() {
    gls2.na.Pf(this.x, this.y, this.aa, this.ae);
    this.remove()
  }, kc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ml:function() {
    return this.Qb
  }, Ja:M(), Nk:function(b) {
    this.name = b;
    b = gls2.ea.Zj[b];
    this.qa = this.jc = b[0];
    this.score = b[1];
    this.bd = b[2];
    this.erase = b[3];
    this.star = b[4];
    b[5].radius !== i && (this.boundingRadius = b[5].radius);
    b[5].width !== i && (this.boundingWidth = b[5].width);
    b[5].height !== i && (this.boundingHeight = b[5].height);
    b[5].widthLeft !== i && (this.boundingWidthLeft = b[5].widthLeft);
    b[5].widthRight !== i && (this.boundingWidthRight = b[5].widthRight);
    b[5].heightTop !== i && (this.boundingHeightTop = b[5].heightTop);
    b[5].heightBottom !== i && (this.boundingHeightBottom = b[5].heightBottom)
  }, uc:function() {
    this.remove();
    this.aa.Ze.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.na.Pf(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.aa, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.na.Eb(this.x, this.y, this.aa);
      this.remove()
    }.bind(this))
  }, Te:function() {
    function b() {
      (0 === c % 23 || 0 === c % 37) && gls2.na.kb(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.aa);
      c++
    }
    var c = 0;
    this.on("enterframe", b);
    this.on("enterframe", function() {
      this.x += 3 * Math.random() - 1.5;
      this.y += 3 * Math.random() - 1.5 + 1
    });
    this.tweener.clear().wait(2E3).call(function() {
      this.off("enterframe", b)
    }.bind(this)).wait(500).call(function() {
      gls2.Af(this.x, this.y, this.aa)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }, yl:function() {
    function b() {
      (0 === c % 23 || 0 === c % 37 || 0 === c % 53) && gls2.na.Eb(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.aa);
      c++
    }
    var c = 0;
    this.on("enterframe", b);
    var d = this.x, j = this.y, n = 0;
    this.on("enterframe", function() {
      this.x = d + (3 * Math.random() - 1.5);
      this.y = j + (3 * Math.random() - 1.5) + n;
      n += 1
    });
    this.tweener.clear().wait(2E3).call(function() {
      this.off("enterframe", b)
    }.bind(this)).wait(500).call(function() {
      gls2.Af(this.x, this.y, this.aa, k)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }});
  gls2.ea.Ve = function() {
    for(var b = [].concat(c), f = 0, d = b.length;f < d;f++) {
      b[f].remove()
    }
  };
  var c = gls2.ea.gb = []
})();
gls2.hd = tm.createClass({superClass:gls2.ea, wl:k, jc:0, eg:m, init:function(c, b, f) {
  this.eg = b;
  this.superInit(c, this.eg[0], f);
  this.jc = this.qa;
  this.addEventListener("added", function() {
    this.aa.od = this;
    this.aa.Xl();
    this.tweener.wait(1E3).call(function() {
      this.aa.oe = A
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.aa.od = m;
    this.aa.hj();
    var b = tm.app.Object2D();
    b.tweener.wait(7E3).call(function() {
      b.remove();
      this.aa.Ui()
    }.bind(this));
    b.addChildTo(this.aa.Yb)
  })
}, ad:function(c) {
  var b = this.qa;
  if(gls2.ea.prototype.ad.call(this, c)) {
    return this.aa.oe = k, this.aa.da.ke = A, gls2.re(), k
  }
  this.qa <= 0.55 * this.jc && 0.55 * this.jc < b ? (gls2.ba.Ae(this), this.clearEventListener("completeattack"), this.tweener.clear(), this.fire(tm.event.Event("secondform")), gls2.na.kb(this.x, this.y, this.aa), gls2.fa.erase(k, 62500 > gls2.Ub(this, this.da)), this.eg[1].setup(this)) : this.qa <= 0.1 * this.jc && 0.1 * this.jc < b && (gls2.ba.Ae(this), this.clearEventListener("completeattack"), this.tweener.clear(), this.fire(tm.event.Event("hakkyo")), gls2.na.kb(this.x, this.y, this.aa), gls2.fa.erase(k, 
  62500 > gls2.Ub(this, this.da)), this.eg[2].setup(this), gls2.xa("voJacms"))
}});
(function() {
  gls2.ea.Zj = {kujo:[2, 300, A, A, 1, {radius:24}], kiryu:[3, 400, A, A, 1, {radius:24}], natsuki:[5, 900, k, A, 1, {radius:24}], kise:[50, 15E3, k, A, 1, {radius:24}], yamabuki:[100, 15E3, k, A, 1, {width:140, height:70}], hanasaki:[150, 2E5, k, k, 10, {radius:40}], myodoin:[50, 15E3, k, A, 1, {radius:40}], kenzaki:[200, 3E5, k, k, 10, {width:100, height:40}], minazuki:[300, 3E5, k, k, 10, {width:100, height:40}], tsukikage:[8, 1E3, A, A, 5, {width:100, height:20}], kasugano:[6, 1E3, A, A, 1, {radius:24}], 
  kurokawa:[35, 5E3, A, A, 5, {width:100, height:20}], mimino:[35, 5E3, A, A, 5, {width:100, height:20}], shirabe:[35, 5E3, A, A, 5, {width:100, height:20}], akimoto:[250, 3E5, A, k, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[300, 5E5, A, k, 20, {width:180, heightBottom:40, heightTop:120}], aono:[230, 3E5, A, k, 10, {width:280, heightBottom:30, heightTop:60}], hino:[20, 1E4, A, A, 1, {width:64, height:64}], hoshizora:[300, 3E5, A, k, 30, {width:128, height:64}], yotsuba:[300, 5E5, 
  A, k, 40, {width:64, height:64}], yotsubaLeaf:[30, 1E5, A, A, 10, {width:64, height:64}], midorikawa:[5, 2E3, A, A, 1, {width:64, height:64}], aoki:[5, 3200, A, A, 1, {width:64, height:64}], madoka:[250, 4E5, A, k, 10, {width:256, height:64}], yukishiro:[750, 8E5, A, k, 20, {width:240, height:80}], misumi:[3E3, 2E6, A, k, 0, {width:240, height:80}], mishou:[1E3, 1E6, A, k, 20, {width:300, height:80}], higashi:[1E3, 12E5, A, k, 20, {width:256, height:128}], momozono:[5700, 35E5, A, k, 0, {width:256, 
  height:128}], hyuga:[4500, 3E6, A, k, 0, {width:240, height:80}], hishikawa:[1900, 2E6, A, k, 20, {radius:130}], aida:[6E3, 4E6, A, k, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[1500, 5E6, k, k, 30, {width:180, heightTop:375, heightBottom:-325}], houjou:[9E3, 5E8, A, k, 0, {width:220, heightBottom:100, heightTop:60}], dory:[150, 2E3, A, k, 5, {radius:24}], rery:[250, 2E3, k, A, 5, {radius:24}], miry:[150, 2E3, A, k, 5, {radius:24}], fary:[200, 2E3, k, A, 5, {radius:24}], sory:[350, 
  2E3, k, A, 5, {radius:24}], lary:[300, 2E3, k, k, 5, {radius:24}], shiry:[250, 2E3, k, k, 5, {radius:24}], dodory:[120, 2E3, k, A, 5, {radius:24}], sakagami:[9E3, 5E9, A, k, 0, {radius:90}], kurumi:[30, 500, A, A, 1, {width:24, height:48}]};
  gls2.ea.ja = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "kujo");
    this.ca = c("tex1", 64, 64)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(b) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(b)
  }});
  gls2.ea.Ea = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "kiryu");
    this.ca = c("tex1", 64, 64)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(b) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(b)
  }});
  gls2.ea.oa = tm.createClass({superClass:gls2.ea, $g:m, ah:m, init:function(b, f) {
    this.superInit(b, f, "natsuki");
    this.$g = c("tex_tank1", 64, 64);
    this.ah = c("tex_tank1", 64, 64);
    this.Md = this.Md || 0;
    this.Kc = this.Kc || 0
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    for(b = this.Md;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    for(var c = this.Kc;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.$g.setFrameIndex(~~(16 * b / (2 * Math.PI)), 64, 64);
    this.ah.setFrameIndex(~~(16 * c / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(b) {
    this.$g.draw(b);
    this.ah.draw(b)
  }, Ca:function() {
    gls2.na.al(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.tf = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "yamabuki");
    this.ca = c("tex2", 256, 128).setFrameIndex(7)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.dc = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "tsukikage");
    this.ca = c("tex1", 64, 64).setFrameIndex(23)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.mb = tm.createClass({superClass:gls2.ea, ca:m, lh:m, init:function(b, f) {
    this.superInit(b, f, "kasugano");
    this.ca = c("tex5", 64, 64).setFrameIndex(1);
    this.hb = gls2.Na(80, 1, 0.8);
    this.lh = tm.geom.Vector2()
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa);
    this.rotation = tm.geom.Vector2.sub(this.position, this.lh).toAngle() * gls2.ma.RAD_TO_DEG - 90;
    this.lh.set(this.x, this.y)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.jd = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "kurokawa");
    this.ca = c("tex1", 128, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.Ec = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "mimino");
    this.ca = c("tex4", 128, 128).setFrameIndex(10)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.xb = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "shirabe");
    this.ca = c("tex5", 128, 128).setFrameIndex(4)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.ec = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "akimoto");
    this.ca = c("tex1", 256, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.Ke = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "aono");
    this.ca = c("tex1", 256, 128);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 128;
    this.setScale(1.2);
    this.ib = gls2.Na(70, 1, 0.97)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && (this.ib.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.aa), this.ib.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.ge = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "yumehara");
    this.ca = c("tex1", 256, 256);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 256;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 256
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.Ua = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "kise");
    this.ca = c("tex1", 64, 128).setFrameIndex(14)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.Df = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "hanasaki");
    this.ca = c("tex1", 128, 128).setFrameIndex(12)
  }, Ja:M(), Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.wg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "myodoin");
    this.ca = c("tex5", 64, 128).setFrameIndex(0)
  }, Ja:M(), Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Cc = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "kenzaki");
    this.ca = c("tex1", 128, 256);
    this.ca.srcRect.x = 0;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 128;
    this.ca.srcRect.height = 256
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.ng = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "minazuki");
    this.ca = c("tex5", 128, 256);
    this.ca.setFrameIndex(1);
    this.setScale(1.2)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.Za = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "hino");
    this.ca = c("tex4", 64, 32).setFrameIndex(0);
    this.setScale(1.5)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.sa = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "midorikawa");
    this.ca = c("tex4", 64, 64).setFrameIndex(8)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Kb = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "aoki");
    this.ca = c("tex4", 64, 64).setFrameIndex(1)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }, hf:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.cm = this.y + 192;
    this.yd = this.y
  }});
  gls2.ea.Yc = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "madoka");
    this.ca = c("tex4", 256, 128).setFrameIndex(3)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.Ud = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "hoshizora");
    this.ca = c("tex4", 256, 128).setFrameIndex(1);
    this.boundingWidth = 384;
    this.setScale(1.5)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    if(this.$a === A && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.$a = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, hf:function() {
    this.tweener.move(240, this.y, 7E3, "easeInOutQuad").moveBy(0, 64, 5E3, "easeInOutQuad");
    240 < this.x ? (this.scaleX = -1.5, this.tweener.moveBy(-496, 0, 8E3, "easeInOutQuad")) : this.tweener.moveBy(496, 0, 8E3, "easeInOutQuad")
  }, kc:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }, uc:function() {
    this.remove();
    this.aa.Ze.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.na.Pf(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.aa, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.na.Eb(this.x, this.y, this.aa);
      gls2.na.Eb(this.x + 64, this.y, this.aa);
      gls2.na.Eb(this.x - 64, this.y, this.aa);
      this.remove()
    }.bind(this))
  }});
  gls2.ea.kg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "yotsuba");
    this.ca = c("tex4", 128, 128).setFrameIndex(1);
    this.boundingHeight = this.boundingWidth = 192;
    this.setScale(1.5)
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc();
    this.aa.td || gls2.ti(this.x, this.y, this.da).addChildTo(this.aa);
    for(var b = 0;4 > b;b++) {
      this.cd[b] && this.cd[b].Ca()
    }
    delete this.cd;
    this.remove()
  }, hf:function() {
    this.cd = [];
    for(var b = 0;4 > b;b++) {
      var c = 0.5 * Math.PI * b;
      this.cd[b] = this.wa.Ma({hard:gls2.ea.Dd, soft:gls2.ba.Dd[b], x:this.x + 96 * Math.sin(c), y:this.y + 96 * Math.cos(c)});
      this.cd[b].dir = c;
      this.cd[b].rh = this;
      this.cd[b].Al = b;
      this.cd[b].distance = 96
    }
    gls2.ea.prototype.hf.call(this);
    return this
  }});
  gls2.ea.Dd = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "yotsubaLeaf");
    this.ca = c("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingHeight = this.boundingWidth = 96;
    this.setScale(1.5)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.rh.cd[this.Al] = m;
    this.remove()
  }});
  gls2.ea.He = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "kurumi");
    this.ca = c("tex3", 64, 128);
    this.ca.setFrameIndex(8)
  }, Ja:M(), draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    gls2.qi(this.x, this.y, this.da).addChildTo(this.aa);
    this.remove()
  }});
  gls2.ea.ug = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "yukishiro");
    this.ca = c("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Ig = tm.createClass({superClass:gls2.hd, ca:m, init:function(b, f) {
    this.superInit(b, f, "misumi");
    this.ca = c("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    this.Te();
    gls2.core.fps = FPS
  }});
  gls2.ea.Eg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "mishou");
    this.ca = c("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.ib = gls2.Na(80, 1, 0.9);
    this.hb = gls2.Na(256, 1, 0.9)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && (this.ib.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.mk = tm.createClass({superClass:gls2.hd, init:function(b, f) {
    this.superInit(b, f, "hyuga");
    this.ca = c("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Te();
    gls2.core.fps = FPS
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Sg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "higashi");
    this.ca = c("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.ik = tm.createClass({superClass:gls2.hd, init:function(b, f) {
    this.superInit(b, f, "momozono");
    this.ca = c("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Te();
    gls2.core.fps = FPS
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Og = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "hishikawa");
    this.ca = c("tex2", 256, 256).setFrameIndex(2);
    this.ca.setScale(2);
    this.ib = gls2.Na(60, 1, 0.95);
    this.hb = gls2.Na(500, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && (this.ib.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Eb(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.jk = tm.createClass({superClass:gls2.hd, init:function(b, f) {
    this.superInit(b, f, "aida");
    this.ca = c("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.ib = gls2.Na(60, 1, 0.95);
    this.hb = gls2.Na(500, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && (this.ib.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Te();
    gls2.core.fps = FPS
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.hk = tm.createClass({superClass:gls2.ea, Ue:m, Ti:[{x:-60, y:-426}, {x:60, y:-426}, {x:-72, y:-72}, {x:72, y:-72}, {x:-72, y:-348}, {x:72, y:-348}, {x:-48, y:-264}, {x:48, y:-264}, {x:-48, y:108}, {x:48, y:108}, {x:-78, y:-168}, {x:78, y:-168}, {x:-96, y:-228}, {x:96, y:-228}, {x:0, y:-336}, {x:0, y:-168}, {x:-120, y:144}, {x:120, y:144}, {x:-60, y:168}, {x:60, y:168}], init:function(b, f) {
    this.superInit(b, f, "minamino");
    this.altitude = 10;
    this.eb = k;
    this.ca = c("tex5", 256, 512).setFrameIndex(1);
    this.setScale(2.16);
    this.Ue = [];
    this.on("launch", function() {
      Array.prototype.push.apply(this.Ue, [this.wa.Ma({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Rb, soft:gls2.ba.Rb(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Rb, soft:gls2.ba.Rb(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Rb, soft:gls2.ba.Rb(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Rb, soft:gls2.ba.Rb(), 
      x:0, y:0}), this.wa.Ma({hard:gls2.ea.Rb, soft:gls2.ba.Rb(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Rb, soft:gls2.ba.Rb(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Ag, soft:gls2.ba.Ag(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Tg, soft:gls2.ba.Tg(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Sc, 
      soft:gls2.ba.Sc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Sc, soft:gls2.ba.Sc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Sc, soft:gls2.ba.Sc(), x:0, y:0}), this.wa.Ma({hard:gls2.ea.Sc, soft:gls2.ba.Sc(), x:0, y:0})])
    })
  }, update:function() {
    this.Ue.forEach(function(b, c) {
      b.setPosition(this.x + this.Ti[c].x, this.y + this.Ti[c].y)
    }.bind(this))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    function b() {
      (0 === c % 23 || 0 === c % 37) && gls2.na.kb(this.x + gls2.ma.rand(-200, 200), this.y + gls2.ma.rand(-300, 300), this.aa);
      c++
    }
    this.dispatchEvent(tm.event.Event("enemyconsumed"));
    this.Ue.forEach(function(b) {
      b.parent && b.remove()
    }.bind(this));
    this.tweener.clear();
    this.Lj.clear();
    this.Mj.clear();
    var c = 0;
    this.on("enterframe", b);
    this.on("enterframe", function() {
      this.x += 3 * Math.random() - 1.5;
      this.y += 1
    });
    this.tweener.clear().wait(4E3).call(function() {
      this.off("enterframe", b)
    }.bind(this)).call(function() {
      gls2.Af(this.x, this.y - 300, this.aa.Ze);
      gls2.Af(this.x, this.y + 0, this.aa.Ze)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.fe = tm.createClass({superClass:gls2.ea, ca:m, Hj:0, init:function(b, f, d, j, n) {
    this.superInit(b, f, d);
    this.ca = c(j, 64, 64);
    this.Hj = n
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    for(var c = tm.geom.Vector2.sub(this.aa.da.position, this.position).toAngle() + 2 * Math.PI / 32;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.ca.setFrameIndex(16 * this.Hj + Math.floor(16 * (c / (2 * Math.PI))))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Vc = tm.createClass({superClass:gls2.ea.fe, init:function(b, c) {
    this.superInit(b, c, "rery", "kanade-cannon", 0);
    this.setScale(1.92)
  }});
  gls2.ea.Rb = tm.createClass({superClass:gls2.ea.fe, init:function(b, c) {
    this.superInit(b, c, "rery", "kanade-cannon", 1);
    this.setScale(1.2)
  }});
  gls2.ea.Wc = tm.createClass({superClass:gls2.ea.fe, init:function(b, c) {
    this.superInit(b, c, "sory", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.ea.Ag = tm.createClass({superClass:gls2.ea.fe, init:function(b, c) {
    this.superInit(b, c, "lary", "yotsubaLeaf", 0);
    this.setScale(1.44)
  }});
  gls2.ea.Tg = tm.createClass({superClass:gls2.ea.fe, init:function(b, c) {
    this.superInit(b, c, "shiry", "kanade-cannon", 1);
    this.setScale(1.68)
  }});
  gls2.ea.Sc = tm.createClass({superClass:gls2.ea.fe, init:function(b, c) {
    this.superInit(b, c, "dodory", "tex_tank1", 1);
    this.setScale(1.44)
  }});
  gls2.ea.gk = tm.createClass({superClass:gls2.hd, sh:m, Jh:m, init:function(b, f) {
    this.superInit(b, f, "houjou");
    this.ca = c("tex5", 256, 256).setFrameIndex(2);
    this.setScale(1.5);
    this.ib = gls2.Na(60, 1, 0.95);
    this.hb = gls2.Na(500, 1, 0.8);
    this.on("launch", function() {
      this.nh = this.aa.nh()
    });
    this.clearEventListener("removed");
    this.addEventListener("removed", function() {
      this.aa.od = m;
      this.aa.hj();
      if(this.nh) {
        this.aa.wa.Ma(gls2.pg.ayumi[0]), gls2.core.ta(gpgsConstants.ACH_MEETSAKAGAMI), gls2.re(), gls2.wb("bgmExBoss")
      }else {
        var b = tm.app.Object2D();
        b.tweener.wait(7E3).call(function() {
          b.remove();
          this.aa.Ui()
        }.bind(this));
        b.addChildTo(this.aa.Yb)
      }
    })
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && (this.ib.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.yl();
    gls2.core.fps = FPS;
    this.aa.zd = this.aa.pf(1).canvas.toDataURL("image/png")
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Ge = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "dory");
    this.ca = c("tex4", 64, 64).setFrameIndex(48);
    this.setScale(1.5);
    this.hb = gls2.Na(80, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.ca.setFrameIndex(48 + Math.floor(b.frame / 5) % 3);
    0 === b.frame % 2 && 0 < this.qa && this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Je = tm.createClass({superClass:gls2.ea, ca:m, init:function(b, f) {
    this.superInit(b, f, "miry");
    this.ca = c("tex4", 64, 64).setFrameIndex(56);
    this.setScale(1.5);
    this.hb = gls2.Na(80, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.ca.setFrameIndex(56 + Math.floor(b.frame / 5) % 3);
    0 === b.frame % 2 && 0 < this.qa && this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Tj = tm.createClass({superClass:gls2.hd, rm:m, nm:m, tm:m, Re:A, init:function(b, f) {
    this.superInit(b, f, "sakagami");
    var d = this;
    this.ca = c("exboss", 128, 128);
    this.hb = gls2.Na(300, 1, 0.9, tm.graphics.Canvas().resize(32, 32).setFillStyle(tm.graphics.RadialGradient(16, 16, 0, 16, 16, 16).addColorStopList([{offset:0, color:"rgba(255,  0,  0,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 32, 32).element);
    this.Wb = tm.display.CanvasElement(160, 160).addChildTo(this);
    this.Wb.blendMode = "lighter";
    this.Wb.rotation = -90;
    this.Wb.strokeStyle = "rgba(180,180,255,0.4)";
    this.Wb.alpha = 0;
    this.Wb.draw = function(b) {
      b.lineCap = "round";
      var c = d.qa / (0.1 * d.jc);
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "15";
      b.strokeArc(0, 0, 80, 0, 2 * c * Math.PI, A);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 80, 0, 2 * c * Math.PI, A);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 80, 0, 2 * c * Math.PI, A)
    };
    this.Td = tm.display.CircleShape(170, 170, {fillStyle:tm.graphics.RadialGradient(85, 85, 0, 85, 85, 80).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,150,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Td.alpha = 0
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    var c = this.Re;
    (this.Re = this.aa.td || 0 < this.aa.ve || this.da.eb) ? !c && this.qa > 0.1 * this.jc && this.Td.tweener.clear().fadeIn(100) : c && this.qa > 0.1 * this.jc && this.Td.tweener.clear().fadeOut(1E3);
    this.qa < 0.1 * this.jc && (this.Wb.alpha = 1, this.Td.alpha = 1);
    var d = tm.geom.Vector2(0, 0).setRandom(m, m, 6);
    this.hb.clone().on("enterframe", function() {
      this.position.add(d)
    }).setPosition(this.x, this.y).addChildTo(this.aa)
  }, Am:function() {
    this.gj = 0.25
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Wb.alpha = 0;
    this.Td.alpha = 0;
    this.Te();
    gls2.core.fps = FPS;
    this.aa.zd = this.aa.pf(1).canvas.toDataURL("image/png")
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  var c = tm.createClass({superClass:tm.display.Sprite, ii:m, init:function(b, c, d) {
    this.superInit(b, c, d);
    "string" === typeof b && (this.ii = b)
  }, draw:function(b) {
    var c = this.srcRect;
    b.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Pa:function() {
    var b = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, j = this.srcRect.height;
    this.image = this.ii + "Red";
    this.srcRect.x = b;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = j
  }, Oa:function() {
    var b = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, j = this.srcRect.height;
    this.image = this.ii;
    this.srcRect.x = b;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = j
  }})
})();
(function() {
  gls2.ba = tm.createClass({setup:function(b) {
    b.on("destroy", function() {
      gls2.ba.Ae(this)
    })
  }});
  gls2.ba.ua = function(b, c) {
    var f = m, f = 2 === gls2.core.aa.da.style ? gls2.fa[c + "Expert"] !== i ? gls2.fa[c + "Expert"] : gls2.fa[c] : gls2.fa[c];
    if(f === i) {
      console.warn("Danmaku[" + c + "] is undefined!")
    }else {
      var u = f.Xe();
      b.on("enterframe", u);
      b.on("completeattack", function() {
        u.stop = k
      })
    }
  };
  gls2.ba.Ae = function(b) {
    if(b = [].concat(b._listeners.enterframe)) {
      for(var c = 0, f = b.length;c < f;c++) {
        b[c] && b[c].Xf && (b[c].stop = k)
      }
    }
  };
  gls2.ba.Sl = function(b) {
    if(b = [].concat(b._listeners.enterframe)) {
      for(var c = 0, f = b.length;c < f;c++) {
        b[c] && b[c].Xf && (b[c].stop = A)
      }
    }
  };
  gls2.ba.ja = tm.createClass({superClass:gls2.ba, pattern:m, init:function(b, c) {
    this.superInit();
    this.pattern = b;
    this.dm = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    var c = this.pattern, f = this.dm;
    b.on("launch", function() {
      var b = gls2.ya.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.ya.rand(10, 500)).move(this.x, b, 5 * b, "easeOutQuad").call(function() {
        gls2.ba.ua(this, c)
      }.bind(this))
    });
    b.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.ba.Uc = gls2.ba.ja("basic0-0", 0.2);
  gls2.ba.Ab = gls2.ba.ja("basic0-0", 0.4);
  gls2.ba.ee = gls2.ba.ja("basic0-0", 0.6);
  gls2.ba.zb = gls2.ba.ja("basic1-2", 0.2);
  gls2.ba.Tc = gls2.ba.ja("basic1-2", 0.4);
  gls2.ba.de = gls2.ba.ja("basic1-2", 0.6);
  gls2.ba.Ea = tm.createClass({superClass:gls2.ba, qb:m, init:function(b, c) {
    this.superInit();
    this.qb = b;
    this.delay = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.angle = 0.5 * Math.PI;
    b.qb = this.qb;
    b.tweener.wait(this.delay === i ? gls2.ma.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.ba.ua(this, this.qb);
      this.on("enterframe", function() {
        this.y < this.da.y && this.$a && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.kc() && this.$a && this.remove();
        if(22500 > gls2.Ub(this, this.da) || this.y > this.da.y + 150) {
          this.Qb = A
        }
      })
    }.bind(b))
  }});
  gls2.ba.Bb = gls2.ba.Ea("basic1-0");
  gls2.ba.Ie = gls2.ba.Ea("donothing");
  gls2.ba.Ka = function(b) {
    return gls2.ba.Ea("basic1-3", b * (2 * Math.random() + 1))
  };
  var c = tm.createClass({superClass:gls2.ba, init:function(b, c, f) {
    this.superInit();
    this.vl = b;
    this.ul = c;
    this.le = f
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.speed = this.vl;
    b.Md = this.ul;
    this.le && (b.le = [].concat(this.le));
    b.Kc = 0;
    b.on("enter", function() {
      gls2.ba.ua(this, "basic2-0")
    });
    b.on("enterframe", function() {
      this.x += Math.cos(this.Md) * this.speed;
      this.y += Math.sin(this.Md) * this.speed;
      this.$a && !this.kc() && this.remove();
      for(this.Kc = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Kc;) {
        this.Kc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Kc;) {
        this.Kc -= 2 * Math.PI
      }
      this.Qb = this.y < this.da.y && 4E4 < gls2.Ub(this, this.da);
      if(this.le) {
        for(var b = 0;b < this.le.length;b++) {
          var c = this.le[b];
          c.frame === this.frame && this.tweener.to({Md:c.dir !== i ? c.dir : this.Md, speed:c.speed !== i ? c.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.ba.Gc = c(1, 0.25 * Math.PI);
  gls2.ba.hm = c(1, -1.75 * Math.PI);
  gls2.ba.Me = c(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.ba.za = c(1.6, 0.5 * Math.PI);
  gls2.ba.Hc = c(1.6, -0.5 * Math.PI);
  gls2.ba.oi = tm.createClass({superClass:gls2.ba, Sa:m, init:function(b) {
    this.superInit();
    this.Sa = b
  }, setup:function(b) {
    gls2.ba.ua(b, this.Sa);
    b.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.ba.ri = gls2.ba.oi("bukky-4-0");
  gls2.ba.si = gls2.ba.oi("bukky-5-0");
  c = tm.createClass({superClass:gls2.ba, Sa:m, Xi:A, init:function(b, c) {
    this.superInit();
    this.Sa = b;
    this.Xi = !!c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.speed = 1;
    b.dir = Math.PI;
    b.Sa = this.Sa;
    b.on("enter", function() {
      gls2.ba.ua(this, this.Sa)
    });
    b.on("enterframe", function() {
      this.$a && !this.kc() && this.remove()
    });
    if(!this.Xi) {
      b.on("enterframe", function() {
        this.Qb = this.y < this.da.y && 4E4 < gls2.Ub(this, this.da)
      })
    }
  }});
  gls2.ba.bc = c("basic3-0", A);
  gls2.ba.cc = c("basic3-1", A);
  gls2.ba.Dc = c("cannon2-0", k);
  gls2.ba.mg = c("cannon2-3", k);
  gls2.ba.vf = c("cannon3-0", k);
  gls2.ba.og = c("cannon5-0", k);
  var b = tm.createClass({superClass:gls2.ba, velocityY:0, Sa:m, delay:0, init:function(b, c, f) {
    this.superInit();
    this.velocityY = b;
    this.Sa = c;
    this.delay = f || 0
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = this.velocityY;
    b.ia = [this.Sa];
    b.lf = A;
    b.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.ba.ua(this, this.ia[0]);
      this.lf = k
    }.bind(b));
    b.on("enterframe", function() {
      this.lf && (this.y += this.velocityY, 384 < this.y && gls2.ba.Ae(this), this.$a && !this.kc() && this.remove(), this.Qb = this.y < this.da.y)
    })
  }});
  gls2.ba.Gd = b(0.5, "kurokawa-1");
  gls2.ba.kk = b(0.5, "kurokawa-4");
  gls2.ba.Fc = function(c) {
    return b(0.5, "milk-5", c)
  };
  gls2.ba.yb = tm.createClass({superClass:gls2.ba, Nj:0, Pj:0, Oj:0, Qj:0, init:function(b, c, f, u) {
    this.superInit();
    this.Nj = b;
    this.Pj = c;
    this.Oj = f;
    this.Qj = u
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.aa.da.position, this.position).toAngle() * gls2.ma.RAD_TO_DEG - 90
    });
    var c = this;
    b.tweener.clear().to({x:c.Nj, y:c.Pj}, 1400, "easeInOutQuad").call(function() {
      gls2.ba.ua(this, "ako-5")
    }.bind(b));
    b.one("completeattack", function() {
      this.tweener.clear().to({x:c.Oj, y:c.Qj}, 900, "easeInOutQuad").call(function() {
        gls2.ba.ua(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.ba.Hd = tm.createClass({superClass:gls2.ba, delay:0, init:function(b) {
    this.superInit();
    this.delay = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.tweener.wait(this.delay).call(function() {
      gls2.ba.ua(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(b)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(b))
  }});
  gls2.ba.Ne = tm.createClass({superClass:gls2.ba, delay:0, init:function(b) {
    this.superInit();
    this.delay = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.tweener.wait(this.delay).call(function() {
      gls2.ba.ua(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(b)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(b))
  }});
  gls2.ba.mb = tm.createClass({superClass:gls2.ba, tj:0, direction:1, delay:0, init:function(b, c, f) {
    this.superInit();
    this.tj = b;
    this.direction = c;
    this.delay = f
  }, setup:function(b) {
    function c(b) {
      return f ? b : 1 - b
    }
    gls2.ba.prototype.setup.call(this, b);
    tm.app.Tweener(b).wait(this.delay).call(function() {
      gls2.ba.ua(this, "basic1-3")
    }.bind(b));
    var f = 1 == this.direction;
    switch(this.tj) {
      case 0:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.8)}, 1600, "easeOutQuart");
        tm.app.Tweener(b).wait(this.delay).to({y:832}, 2E3, "easeInQuad");
        break;
      case 1:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(700).to({x:480 * c(0.4)}, 800, "easeInOutQuad");
        tm.app.Tweener(b).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:832}, 1840, "easeInQuad");
        break;
      case 2:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * c(0.4)}, 1360, "easeInOutQuad").to({x:480 * c(1.4)}, 1600, "easeInOutQuad");
        tm.app.Tweener(b).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:512}, 1760, "easeInOutQuad");
        break;
      case 3:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * c(0.4)}, 1360, "easeInOutQuad").to({x:480 * c(1.4)}, 1600, "easeInOutQuad"), tm.app.Tweener(b).wait(this.delay).to({y:448}, 1840, "easeInOutQuad").to({y:128}, 1760, "easeInOutQuad")
    }
  }});
  c = tm.createClass({superClass:gls2.ba, velocityY:0, Sa:m, init:function(b, c) {
    this.superInit();
    this.velocityY = b;
    this.Sa = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = this.velocityY;
    b.ia = [this.Sa];
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ia[0]);
      gls2.na.ll(this.x, this.y, this.aa)
    }.bind(b));
    b.on("enterframe", function() {
      this.y += this.velocityY;
      this.$a && !this.kc() && this.remove();
      this.Qb = this.y < this.da.y
    })
  }});
  gls2.ba.Za = c(0.5, "akane");
  gls2.ba.sa = tm.createClass({superClass:gls2.ba, qb:m, init:function(b, c) {
    this.superInit();
    this.qb = "nao-" + c;
    this.speed = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.angle = 0.5 * Math.PI;
    b.qb = this.qb;
    b.speed = this.speed;
    b.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.ba.ua(this, this.qb);
      var b = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.da.y && this.$a && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * b - 90;
        !this.kc() && this.$a && this.remove();
        if(22500 > gls2.Ub(this, this.da) || this.y > this.da.y + 150) {
          this.Qb = A
        }
      })
    }.bind(b))
  }});
  gls2.ba.Gb = gls2.ba.sa(9, 1);
  gls2.ba.Hb = gls2.ba.sa(10, 1);
  gls2.ba.Ib = gls2.ba.sa(11, 1);
  gls2.ba.Kb = tm.createClass({superClass:gls2.ba, qb:m, init:function(b) {
    this.superInit();
    this.qb = "reika";
    this.speed = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.angle = 0.5 * Math.PI;
    b.qb = this.qb;
    b.speed = this.speed;
    b.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.ba.ua(this, this.qb);
      this.yc = 0;
      this.on("enterframe", function() {
        this.y < this.cm && (this.yd += 1);
        this.x += this.speed;
        this.y = this.yd + 8 * Math.sin(this.yc);
        this.yc += 0.06
      })
    }.bind(b))
  }});
  gls2.ba.nc = gls2.ba.Kb(1);
  gls2.ba.Fm = gls2.ba.Kb(2);
  gls2.ba.Yc = tm.createClass({superClass:gls2.ba, velocityY:0, Sa:m, delay:0, init:function() {
    this.superInit();
    this.velocityY = 0.5;
    this.Sa = "aguri";
    this.delay = 0
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = this.velocityY;
    b.ia = [this.Sa];
    b.lf = A;
    b.tweener.clear().wait(this.delay).moveBy(0, 192, 800, "easeOutQuad").call(function() {
      gls2.ba.ua(this, this.ia[0]);
      this.lf = k
    }.bind(b));
    b.on("enterframe", function() {
      this.lf && (this.y += this.velocityY, 384 < this.y && gls2.ba.Ae(this), this.$a && !this.kc() && this.remove(), this.Qb = this.y < this.da.y)
    })
  }});
  gls2.ba.Yc = gls2.ba.Yc();
  gls2.ba.Ud = tm.createClass({superClass:gls2.ba, velocityX:0, Sa:m, init:function(b) {
    this.superInit();
    this.velocityX = b;
    this.Sa = "miyuki"
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [this.Sa];
    b.Hm = b.y;
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ia[0])
    }.bind(b));
    b.on("enterframe", function() {
      this.$a && !this.kc() && this.remove();
      this.Qb = this.y < this.da.y
    })
  }});
  gls2.ba.Ud = gls2.ba.Ud(1);
  c = tm.createClass({superClass:gls2.ba, velocityX:0, Sa:m, init:function() {
    this.superInit();
    this.Sa = "alice"
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = 0.3;
    b.ia = [this.Sa];
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ia[0])
    }.bind(b));
    b.on("enterframe", function() {
      this.y += this.velocityY;
      this.$a && !this.kc() && this.remove();
      this.Qb = this.y < this.da.y
    })
  }});
  gls2.ba.kg = c();
  c = tm.createClass({superClass:gls2.ba, Sa:m, init:function(b) {
    this.superInit();
    this.Sa = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [this.Sa];
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ia[0])
    }.bind(b));
    b.on("enterframe", function() {
      var b = this.rh.x, c = this.rh.y;
      this.dir += 0.01;
      this.x = b + Math.sin(this.dir) * this.distance;
      this.y = c + Math.cos(this.dir) * this.distance;
      b = ~~(180 * Math.atan2(c - this.y, b - this.x) / 3.14159);
      this.ca.setFrameIndex(~~(22.5 * ((0 > b ? b + 360 : b) / 360)) % 16, 64, 64);
      this.$a && !this.kc() && this.remove();
      this.Qb = this.y < this.da.y;
      this.pa++
    })
  }});
  gls2.ba.Dd = [];
  gls2.ba.Dd[0] = c("aliceLeaf-1");
  gls2.ba.Dd[1] = c("aliceLeaf-2");
  gls2.ba.Dd[2] = c("aliceLeaf-1");
  gls2.ba.Dd[3] = c("aliceLeaf-2");
  gls2.ba.yi = b(0.3, "komachi-1");
  gls2.ba.zi = b(0.5, "komachi-2");
  gls2.ba.Ai = b(0.5, "komachi-3");
  gls2.ba.zg = b(0.5, "komachi-4");
  gls2.ba.yg = b(0.5, "komachi-5");
  gls2.ba.Ke = tm.createClass({superClass:gls2.ba, Ej:0, init:function(b) {
    this.superInit();
    this.Ej = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    tm.app.Tweener(b).to({x:480 * this.Ej}, 2800, "easeOutQuad").call(function() {
      gls2.ba.ua(this, "mktn-5")
    }.bind(b));
    b.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.ba.Mg = b(0.1, "nozomi-4");
  gls2.ba.Ng = b(0.3, "nozomi-5");
  gls2.ba.He = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.ua(b, "basic3-0");
    b.on("enterframe", function() {
      this.y += 0.8;
      this.Qb = this.$a
    })
  }});
  gls2.ba.He = gls2.ba.He();
  c = tm.createClass({superClass:gls2.ba, ia:m, Zf:0, init:function(b, c) {
    this.superInit();
    this.ia = b;
    this.Zf = c || 1500
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Zf = this.Zf;
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("enterframe", function() {
      if(!(this.Ra === A || 0 >= this.qa) && this.Zf < this.frame && this.Ta === A) {
        this.Ta = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.ug = c(["honoka-1"]);
  gls2.ba.Ig = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.lk = gls2.ba.Ig();
  gls2.ba.Jg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Jg = gls2.ba.Jg();
  gls2.ba.Kg = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(b));
    b.on("completeattack", function() {
      0 >= this.qa || gls2.ba.ua(this, "nagisa-3-1")
    })
  }});
  gls2.ba.Kg = gls2.ba.Kg();
  gls2.ba.Eg = c(["mai-1", "mai-2"]);
  gls2.ba.Pg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Pg = gls2.ba.Pg();
  gls2.ba.Qg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Qg = gls2.ba.Qg();
  gls2.ba.Rg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["saki-3-1", "saki-3-2"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Rg = gls2.ba.Rg();
  var f = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = "setsuna-1"
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.hi = A;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        this.hi = A;
        this.alpha = 1;
        this.eb = A;
        if(50 < gls2.ya.rand(0, 100) && 300 < this.frame || this.x - 76 < this.da.x && this.da.x < this.x + 76) {
          gls2.na.zh(this.x, this.y, this.aa, 8);
          this.hi = k;
          this.alpha = 0.3;
          this.eb = k;
          var c = gls2.ya.rand(48, 432), d = gls2.ya.rand(128, 192);
          this.tweener.move(c, d, 250, "easeInOutQuad").call(b)
        }else {
          c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144), this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(b)
        }
      }.bind(this);
      b()
    }.bind(b));
    b.on("enterframe", function() {
      if(!(this.Ra === A || 0 >= this.qa)) {
        if(1800 < this.frame && this.Ta === A && (this.Ta = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))), this.hi && 0 == this.frame % 5) {
          var b = tm.display.Sprite("tex4", 256, 128).setFrameIndex(2);
          b.alpha = 0.3;
          b.x = this.x;
          b.y = this.y;
          b.setScale(1.5);
          b.update = function() {
            this.alpha -= 0.01;
            0 > this.alpha && this.remove()
          };
          this.aa.vh.addChild(b)
        }
      }
    });
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Sg = f();
  gls2.ba.Bg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["love-1-1", "love-1-2", "love-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Bg = gls2.ba.Bg();
  gls2.ba.Cg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["love-2-1", "love-2-2", "love-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Cg = gls2.ba.Cg();
  gls2.ba.Dg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["love-3-1", "love-3-2"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        if("love-3-1" == [].concat(this.ia).pop()) {
          var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(24, 48);
          this.tweener.move(240 + Math.cos(c) * d, 128 + 0.2 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(b)
        }else {
          this.tweener.move(240, 128, 1E3, "easeInOutQuad").call(b)
        }
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Dg = gls2.ba.Dg();
  gls2.ba.Og = c(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.ba.Fg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.da.x, 48, 432) + 0.3 * c, 128 + 0.3 * c, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Fg = gls2.ba.Fg();
  gls2.ba.Gg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Gg = gls2.ba.Gg();
  gls2.ba.Hg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["mana-3-1"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.3 * Math.sin(c) * d, 1500, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Hg = gls2.ba.Hg();
  gls2.ba.xg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.on("enemyconsumed", function() {
      this.wa.$.Fe = A
    });
    b.Lj = tm.app.Tweener(b).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.wa.$.Fe = k
    }.bind(b)).setLoop(k);
    b.Mj = tm.app.Tweener(b).to({y:576}, 16E4, "easeInOutQuad").call(function() {
      tm.app.Tweener(this).to({y:448}, 2E4, "easeInOutQuad").to({y:576}, 2E4, "easeInOutQuad").setLoop(k)
    }.bind(b));
    b.tweener.wait(22E4).call(function() {
      this.wa.$.Fe = A;
      this.Lj.clear();
      this.Mj.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(b));
    b.Ra = A;
    b.on("enterframe", function() {
      this.eb = 3 < this.Ue.filter(function(b) {
        return!!b.parent
      }).length;
      this.$a = !this.eb;
      !this.Ra && !this.eb && (gls2.ba.ua(this, "kanade"), this.Ra = k)
    })
  }});
  gls2.ba.xg = gls2.ba.xg();
  gls2.ba.Vc = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "rery");
    b.on("enterframe", function() {
      this.position.y > this.aa.da.y ? gls2.ba.Ae(this) : gls2.ba.Sl(this)
    })
  }});
  gls2.ba.Rb = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "fary")
  }});
  gls2.ba.Wc = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "sory")
  }});
  gls2.ba.Ag = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "lary")
  }});
  gls2.ba.Tg = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "shiry")
  }});
  gls2.ba.Sc = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "dodory")
  }});
  gls2.ba.rg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = "hibiki-1-1a hibiki-1-2 hibiki-1-3a hibiki-1-1b hibiki-1-2 hibiki-1-3b".split(" ")
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.rg = gls2.ba.rg();
  gls2.ba.sg = tm.createClass({superClass:gls2.ba, ia:m, Ql:[262, 267, 320, 107, 407, 149, 306, 319, 301, 149, 248, 201, 378], Rl:[257, 167, 268, 209, 233, 113, 268, 231, 92, 235, 170, 122, 87], init:function() {
    this.superInit();
    this.ia = ["hibiki-2-1", "hibiki-2-2", "hibiki-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    var c = this.Ql, f = this.Rl, u = 0;
    b.tweener.clear().wait(10).call(function() {
      gls2.re();
      this.wa.Ma({hard:gls2.ea.Ge, soft:gls2.ba.Ge(this, "dory"), x:240, y:-192});
      this.wa.Ma({hard:gls2.ea.Je, soft:gls2.ba.Je(this, "miry"), x:240, y:-192});
      this.aa.ka.tweener.clear().to({speed:16}, 5E3)
    }.bind(b)).wait(120).call(function() {
      gls2.wb("bgmBoss", k)
    }).wait(680).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        this.tweener.move(c[u], f[u], 3E3, "easeInOutQuad").call(b);
        u = (u + 1) % c.length
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.sg = gls2.ba.sg();
  gls2.ba.tg = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["hibiki-3-1", "hibiki-3-2"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.tweener.clear().to({x:240, y:128}, 1E3, "easeOutQuad").call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    });
    b.on("destroy", function() {
      this.sh.parent && this.sh.remove();
      this.Jh.parent && this.Jh.remove();
      this.aa.ka.tweener.clear().to({speed:1}, 5E3)
    })
  }});
  gls2.ba.tg = gls2.ba.tg();
  gls2.ba.zf = tm.createClass({superClass:gls2.ba, Uf:m, qb:m, Zh:m, init:function(b, c) {
    this.superInit();
    this.Uf = b;
    this.qb = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, this.qb);
    var c = 0, f = this.Zh, u = this.Uf, H = function() {
      this.tweener.clear().to({x:f[c].x + u.x, y:f[c].y + u.y}, 5E3, "easeInOutSine").call(H);
      c = (c + 1) % f.length
    }.bind(b);
    H()
  }});
  gls2.ba.Ge = tm.createClass({superClass:gls2.ba.zf, init:function(b, c) {
    this.superInit(b, c);
    this.Zh = [{x:-140, y:-100}, {x:140, y:-100}, {x:140, y:120}, {x:-140, y:120}]
  }, setup:function(b) {
    gls2.ba.zf.prototype.setup.call(this, b);
    var c = this.Uf;
    c.sh = b;
    b.on("destroy", function() {
      0 < c.qa && this.wa.Ma({hard:gls2.ea.Ge, soft:gls2.ba.Ge(c, "dory"), x:240, y:-192})
    })
  }});
  gls2.ba.Je = tm.createClass({superClass:gls2.ba.zf, init:function(b, c) {
    this.superInit(b, c);
    this.Zh = [{x:140, y:120}, {x:-140, y:120}, {x:-140, y:-100}, {x:140, y:-100}]
  }, setup:function(b) {
    gls2.ba.zf.prototype.setup.call(this, b);
    var c = this.Uf;
    c.Jh = b;
    b.on("destroy", function() {
      0 < c.qa && this.wa.Ma({hard:gls2.ea.Je, soft:gls2.ba.Je(c, "miry"), x:240, y:-192})
    })
  }});
  gls2.ba.xk = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = "ayumi-1-1a ayumi-1-2a ayumi-1-3 ayumi-1-1b ayumi-1-2b ayumi-1-4".split(" ")
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().wait(1E3).move(240, 192, 1200, "easeOutQuad").call(function() {
      console.log("\u6b7b\u306c\u304c\u3088\u3044");
      this.aa.oe = A;
      this.aa.da.ke = k;
      this.aa.ka.direction = -0.5 * Math.PI;
      this.aa.ka.tweener.clear().to({speed:10}, 120)
    }.bind(b)).call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b)).call(function() {
      var b = function() {
        var c = gls2.ya.randf(0, 48), d = gls2.ya.randf(0, 2 * Math.PI);
        this.tweener.clear().move(240 + Math.cos(d) * c, 192 + 0.25 * Math.sin(d) * c, 2E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Uj = gls2.ba.xk();
  gls2.ba.yk = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["ayumi-2-1", "ayumi-2-2", "ayumi-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b)).call(function() {
      var b = function() {
        var c = gls2.ya.randf(0, 48), d = gls2.ya.randf(0, 2 * Math.PI);
        this.tweener.clear().move(240 + Math.cos(d) * c, 192 + 0.25 * Math.sin(d) * c, 2E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Vj = gls2.ba.yk();
  gls2.ba.zk = tm.createClass({superClass:gls2.ba, ia:m, init:function() {
    this.superInit();
    this.ia = ["ayumi-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ia = [].concat(this.ia);
    b.Ra = A;
    b.Ta = A;
    b.tweener.clear().wait(3E3).call(function() {
      this.Ra = k;
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b)).call(function() {
      var b = function() {
        var c = gls2.ya.randf(0, 48), d = gls2.ya.randf(0, 2 * Math.PI);
        this.tweener.clear().move(240 + Math.cos(d) * c, 192 + 0.25 * Math.sin(d) * c, 2E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Ta) {
        var b = this.ia.shift();
        gls2.ba.ua(this, b);
        this.ia.push(b)
      }
    })
  }});
  gls2.ba.Wj = gls2.ba.zk([])
})();
(function() {
  var c = gls2.ea, b = gls2.ba;
  gls2.pg = {"heri1-left":[{hard:c.Ea, soft:b.Uc, x:48, y:-100}, {hard:c.Ea, soft:b.Ab, x:96, y:-100}, {hard:c.Ea, soft:b.Uc, x:144, y:-100}, {hard:c.Ea, soft:b.Ab, x:192, y:-100}, {hard:c.Ea, soft:b.Uc, x:240, y:-100}], "heri1-center":[{hard:c.Ea, soft:b.Uc, x:144, y:-100}, {hard:c.Ea, soft:b.Ab, x:192, y:-100}, {hard:c.Ea, soft:b.Uc, x:240, y:-100}, {hard:c.Ea, soft:b.Ab, x:288, y:-100}, {hard:c.Ea, soft:b.Uc, x:336, y:-100}], "heri1-right":[{hard:c.Ea, soft:b.Uc, x:240, y:-100}, {hard:c.Ea, soft:b.Ab, 
  x:288, y:-100}, {hard:c.Ea, soft:b.Uc, x:336, y:-100}, {hard:c.Ea, soft:b.Ab, x:384, y:-100}, {hard:c.Ea, soft:b.Uc, x:432, y:-100}], "heri1-left2":[{hard:c.Ea, soft:b.Ab, x:48, y:-100}, {hard:c.Ea, soft:b.ee, x:96, y:-100}, {hard:c.Ea, soft:b.Ab, x:144, y:-100}, {hard:c.Ea, soft:b.ee, x:192, y:-100}, {hard:c.Ea, soft:b.Ab, x:240, y:-100}], "heri1-center2":[{hard:c.Ea, soft:b.Ab, x:144, y:-100}, {hard:c.Ea, soft:b.ee, x:192, y:-100}, {hard:c.Ea, soft:b.Ab, x:240, y:-100}, {hard:c.Ea, soft:b.ee, 
  x:288, y:-100}, {hard:c.Ea, soft:b.Ab, x:336, y:-100}], "heri1-right2":[{hard:c.Ea, soft:b.Ab, x:240, y:-100}, {hard:c.Ea, soft:b.ee, x:288, y:-100}, {hard:c.Ea, soft:b.Ab, x:336, y:-100}, {hard:c.Ea, soft:b.ee, x:384, y:-100}, {hard:c.Ea, soft:b.Ab, x:432, y:-100}], "heri2-left":[{hard:c.ja, soft:b.Bb, x:48, y:-100}, {hard:c.ja, soft:b.Bb, x:96, y:-100}, {hard:c.ja, soft:b.Bb, x:144, y:-100}, {hard:c.ja, soft:b.Bb, x:192, y:-100}, {hard:c.ja, soft:b.Bb, x:240, y:-100}], "heri2-center":[{hard:c.ja, 
  soft:b.Bb, x:144, y:-100}, {hard:c.ja, soft:b.Bb, x:192, y:-100}, {hard:c.ja, soft:b.Bb, x:240, y:-100}, {hard:c.ja, soft:b.Bb, x:288, y:-100}, {hard:c.ja, soft:b.Bb, x:336, y:-100}], "heri2-right":[{hard:c.ja, soft:b.Bb, x:240, y:-100}, {hard:c.ja, soft:b.Bb, x:288, y:-100}, {hard:c.ja, soft:b.Bb, x:336, y:-100}, {hard:c.ja, soft:b.Bb, x:384, y:-100}, {hard:c.ja, soft:b.Bb, x:432, y:-100}], "heri2-T-center":[{hard:c.ja, soft:b.Ie, x:144, y:-100}, {hard:c.ja, soft:b.Ie, x:192, y:-100}, {hard:c.ja, 
  soft:b.Ie, x:240, y:-100}, {hard:c.ja, soft:b.Ie, x:288, y:-100}, {hard:c.ja, soft:b.Ie, x:336, y:-100}], "heri2-5-left":[{hard:c.ja, soft:b.Ka(0), x:48, y:-100}, {hard:c.ja, soft:b.Ka(100), x:96, y:-100}, {hard:c.ja, soft:b.Ka(200), x:144, y:-100}, {hard:c.ja, soft:b.Ka(300), x:192, y:-100}, {hard:c.ja, soft:b.Ka(400), x:240, y:-100}, {hard:c.ja, soft:b.Ka(500), x:48, y:-100}, {hard:c.ja, soft:b.Ka(600), x:96, y:-100}, {hard:c.ja, soft:b.Ka(700), x:144, y:-100}, {hard:c.ja, soft:b.Ka(800), x:192, 
  y:-100}, {hard:c.ja, soft:b.Ka(900), x:240, y:-100}], "heri2-5-center":[{hard:c.ja, soft:b.Ka(0), x:144, y:-100}, {hard:c.ja, soft:b.Ka(100), x:192, y:-100}, {hard:c.ja, soft:b.Ka(200), x:240, y:-100}, {hard:c.ja, soft:b.Ka(300), x:288, y:-100}, {hard:c.ja, soft:b.Ka(400), x:336, y:-100}, {hard:c.ja, soft:b.Ka(500), x:144, y:-100}, {hard:c.ja, soft:b.Ka(600), x:192, y:-100}, {hard:c.ja, soft:b.Ka(700), x:240, y:-100}, {hard:c.ja, soft:b.Ka(800), x:288, y:-100}, {hard:c.ja, soft:b.Ka(900), x:336, 
  y:-100}], "heri2-5-right":[{hard:c.ja, soft:b.Ka(0), x:240, y:-100}, {hard:c.ja, soft:b.Ka(100), x:288, y:-100}, {hard:c.ja, soft:b.Ka(200), x:336, y:-100}, {hard:c.ja, soft:b.Ka(300), x:384, y:-100}, {hard:c.ja, soft:b.Ka(400), x:432, y:-100}, {hard:c.ja, soft:b.Ka(500), x:240, y:-100}, {hard:c.ja, soft:b.Ka(600), x:288, y:-100}, {hard:c.ja, soft:b.Ka(700), x:336, y:-100}, {hard:c.ja, soft:b.Ka(800), x:384, y:-100}, {hard:c.ja, soft:b.Ka(900), x:432, y:-100}], "heri1-4-left":[{hard:c.ja, soft:b.zb, 
  x:48, y:-100}, {hard:c.ja, soft:b.zb, x:96, y:-100}, {hard:c.ja, soft:b.zb, x:144, y:-100}, {hard:c.ja, soft:b.zb, x:192, y:-100}, {hard:c.ja, soft:b.zb, x:240, y:-100}], "heri1-4-center":[{hard:c.ja, soft:b.zb, x:144, y:-100}, {hard:c.ja, soft:b.zb, x:192, y:-100}, {hard:c.ja, soft:b.zb, x:240, y:-100}, {hard:c.ja, soft:b.zb, x:288, y:-100}, {hard:c.ja, soft:b.zb, x:336, y:-100}], "heri1-4-right":[{hard:c.ja, soft:b.zb, x:240, y:-100}, {hard:c.ja, soft:b.zb, x:288, y:-100}, {hard:c.ja, soft:b.zb, 
  x:336, y:-100}, {hard:c.ja, soft:b.zb, x:384, y:-100}, {hard:c.ja, soft:b.zb, x:432, y:-100}], "heri1-4-left2":[{hard:c.ja, soft:b.Tc, x:48, y:-100}, {hard:c.ja, soft:b.de, x:96, y:-100}, {hard:c.ja, soft:b.Tc, x:144, y:-100}, {hard:c.ja, soft:b.de, x:192, y:-100}, {hard:c.ja, soft:b.Tc, x:240, y:-100}], "heri1-4-center2":[{hard:c.ja, soft:b.Tc, x:144, y:-100}, {hard:c.ja, soft:b.de, x:192, y:-100}, {hard:c.ja, soft:b.Tc, x:240, y:-100}, {hard:c.ja, soft:b.de, x:288, y:-100}, {hard:c.ja, soft:b.Tc, 
  x:336, y:-100}], "heri1-4-right2":[{hard:c.ja, soft:b.Tc, x:240, y:-100}, {hard:c.ja, soft:b.de, x:288, y:-100}, {hard:c.ja, soft:b.Tc, x:336, y:-100}, {hard:c.ja, soft:b.de, x:384, y:-100}, {hard:c.ja, soft:b.Tc, x:432, y:-100}], "tankRD-left":[{hard:c.oa, soft:b.Gc, x:78, y:-50}, {hard:c.oa, soft:b.Gc, x:28, y:-100}, {hard:c.oa, soft:b.Gc, x:-22, y:-150}, {hard:c.oa, soft:b.Gc, x:-72, y:-200}, {hard:c.oa, soft:b.Gc, x:-122, y:-250}], "tankRD-center":[{hard:c.oa, soft:b.Gc, x:222, y:-50}, {hard:c.oa, 
  soft:b.Gc, x:172, y:-100}, {hard:c.oa, soft:b.Gc, x:122, y:-150}, {hard:c.oa, soft:b.Gc, x:72, y:-200}, {hard:c.oa, soft:b.Gc, x:22, y:-250}], "tankL-top":[{hard:c.oa, soft:b.Me, x:550, y:64}, {hard:c.oa, soft:b.Me, x:620, y:64}, {hard:c.oa, soft:b.Me, x:690, y:64}, {hard:c.oa, soft:b.Me, x:760, y:64}, {hard:c.oa, soft:b.Me, x:830, y:64}], "tank5-left":[{hard:c.oa, soft:b.za, x:48, y:-70}, {hard:c.oa, soft:b.za, x:48, y:-140}, {hard:c.oa, soft:b.za, x:48, y:-210}, {hard:c.oa, soft:b.za, x:48, y:-280}, 
  {hard:c.oa, soft:b.za, x:48, y:-350}], "tank5-center":[{hard:c.oa, soft:b.za, x:240, y:-70}, {hard:c.oa, soft:b.za, x:240, y:-140}, {hard:c.oa, soft:b.za, x:240, y:-210}, {hard:c.oa, soft:b.za, x:240, y:-280}, {hard:c.oa, soft:b.za, x:240, y:-350}], "tank15-top":[{hard:c.oa, soft:b.za, x:48, y:-70}, {hard:c.oa, soft:b.za, x:48, y:-140}, {hard:c.oa, soft:b.za, x:48, y:-210}, {hard:c.oa, soft:b.za, x:48, y:-280}, {hard:c.oa, soft:b.za, x:48, y:-350}, {hard:c.oa, soft:b.za, x:240, y:-70}, {hard:c.oa, 
  soft:b.za, x:240, y:-140}, {hard:c.oa, soft:b.za, x:240, y:-210}, {hard:c.oa, soft:b.za, x:240, y:-280}, {hard:c.oa, soft:b.za, x:240, y:-350}, {hard:c.oa, soft:b.za, x:432, y:-70}, {hard:c.oa, soft:b.za, x:432, y:-140}, {hard:c.oa, soft:b.za, x:432, y:-210}, {hard:c.oa, soft:b.za, x:432, y:-280}, {hard:c.oa, soft:b.za, x:432, y:-350}], "tank25-top":[{hard:c.oa, soft:b.za, x:48, y:-70}, {hard:c.oa, soft:b.za, x:48, y:-140}, {hard:c.oa, soft:b.za, x:48, y:-210}, {hard:c.oa, soft:b.za, x:48, y:-280}, 
  {hard:c.oa, soft:b.za, x:48, y:-350}, {hard:c.oa, soft:b.za, x:240, y:-70}, {hard:c.oa, soft:b.za, x:240, y:-140}, {hard:c.oa, soft:b.za, x:240, y:-210}, {hard:c.oa, soft:b.za, x:240, y:-280}, {hard:c.oa, soft:b.za, x:240, y:-350}, {hard:c.oa, soft:b.za, x:432, y:-70}, {hard:c.oa, soft:b.za, x:432, y:-140}, {hard:c.oa, soft:b.za, x:432, y:-210}, {hard:c.oa, soft:b.za, x:432, y:-280}, {hard:c.oa, soft:b.za, x:432, y:-350}, {hard:c.oa, soft:b.Hc, x:144, y:710}, {hard:c.oa, soft:b.Hc, x:144, y:780}, 
  {hard:c.oa, soft:b.Hc, x:144, y:850}, {hard:c.oa, soft:b.Hc, x:144, y:920}, {hard:c.oa, soft:b.Hc, x:144, y:990}, {hard:c.oa, soft:b.Hc, x:336, y:710}, {hard:c.oa, soft:b.Hc, x:336, y:780}, {hard:c.oa, soft:b.Hc, x:336, y:850}, {hard:c.oa, soft:b.Hc, x:336, y:920}, {hard:c.oa, soft:b.Hc, x:336, y:990}], "bukky-4-r":[{hard:c.tf, soft:b.ri, x:480, y:-50}], "bukky-4-l":[{hard:c.tf, soft:b.ri, x:0, y:-50}], "bukky-5-r":[{hard:c.tf, soft:b.si, x:480, y:-50}], "bukky-5-l":[{hard:c.tf, soft:b.si, x:0, 
  y:-50}], "cannon-0":[{hard:c.Ua, soft:b.bc, x:48, y:-100}], "cannon-1":[{hard:c.Ua, soft:b.bc, x:96, y:-100}], "cannon-2":[{hard:c.Ua, soft:b.bc, x:144, y:-100}], "cannon-3":[{hard:c.Ua, soft:b.bc, x:192, y:-100}], "cannon-4":[{hard:c.Ua, soft:b.bc, x:240, y:-100}], "cannon-5":[{hard:c.Ua, soft:b.bc, x:288, y:-100}], "cannon-6":[{hard:c.Ua, soft:b.bc, x:336, y:-100}], "cannon-7":[{hard:c.Ua, soft:b.bc, x:384, y:-100}], "cannon-8":[{hard:c.Ua, soft:b.bc, x:432, y:-100}], "cannon-R0":[{hard:c.Ua, 
  soft:b.bc, x:550, y:128}], "cannon-R1":[{hard:c.Ua, soft:b.bc, x:550, y:192}], "cannon-R2":[{hard:c.Ua, soft:b.bc, x:550, y:256}], "yayoi-0":[{hard:c.Ua, soft:b.cc, x:48, y:-100}], "yayoi-1":[{hard:c.Ua, soft:b.cc, x:96, y:-100}], "yayoi-2":[{hard:c.Ua, soft:b.cc, x:144, y:-100}], "yayoi-3":[{hard:c.Ua, soft:b.cc, x:192, y:-100}], "yayoi-4":[{hard:c.Ua, soft:b.cc, x:240, y:-100}], "yayoi-5":[{hard:c.Ua, soft:b.cc, x:288, y:-100}], "yayoi-6":[{hard:c.Ua, soft:b.cc, x:336, y:-100}], "yayoi-7":[{hard:c.Ua, 
  soft:b.cc, x:384, y:-100}], "yayoi-8":[{hard:c.Ua, soft:b.cc, x:432, y:-100}], "yayoi-R0":[{hard:c.Ua, soft:b.cc, x:550, y:128}], "yayoi-R1":[{hard:c.Ua, soft:b.cc, x:550, y:192}], "yayoi-R2":[{hard:c.Ua, soft:b.cc, x:550, y:256}], "tsubomi-0":[{hard:c.Df, soft:b.vf, x:96, y:-100}], "tsubomi-1":[{hard:c.Df, soft:b.vf, x:240, y:-100}], "tsubomi-2":[{hard:c.Df, soft:b.vf, x:384, y:-100}], "tsubomi-R0":[{hard:c.Df, soft:b.vf, x:580, y:128}], "itsuki-0":[{hard:c.wg, soft:b.og, x:96, y:-100}], "itsuki-1":[{hard:c.wg, 
  soft:b.og, x:240, y:-100}], "itsuki-2":[{hard:c.wg, soft:b.og, x:384, y:-100}], "makoto-0":[{hard:c.Cc, soft:b.Dc, x:48, y:-100}], "makoto-1":[{hard:c.Cc, soft:b.Dc, x:96, y:-100}], "makoto-2":[{hard:c.Cc, soft:b.Dc, x:144, y:-100}], "makoto-3":[{hard:c.Cc, soft:b.Dc, x:192, y:-100}], "makoto-4":[{hard:c.Cc, soft:b.Dc, x:240, y:-100}], "makoto-5":[{hard:c.Cc, soft:b.Dc, x:288, y:-100}], "makoto-6":[{hard:c.Cc, soft:b.Dc, x:336, y:-100}], "makoto-7":[{hard:c.Cc, soft:b.Dc, x:384, y:-100}], "makoto-8":[{hard:c.Cc, 
  soft:b.Dc, x:432, y:-100}], "makoto-R0":[{hard:c.Cc, soft:b.Dc, x:580, y:128}], "karen-3-2":[{hard:c.ng, soft:b.mg, x:96, y:-100}], "karen-3-5":[{hard:c.ng, soft:b.mg, x:240, y:-100}], "karen-3-8":[{hard:c.ng, soft:b.mg, x:384, y:-100}], "fighter-m-0":[{hard:c.jd, soft:b.Gd, x:96, y:-192}], "fighter-m-1":[{hard:c.jd, soft:b.Gd, x:144, y:-192}], "fighter-m-2":[{hard:c.jd, soft:b.Gd, x:192, y:-192}], "fighter-m-3":[{hard:c.jd, soft:b.Gd, x:240, y:-192}], "fighter-m-4":[{hard:c.jd, soft:b.Gd, x:288, 
  y:-192}], "fighter-m-5":[{hard:c.jd, soft:b.Gd, x:336, y:-192}], "fighter-m-6":[{hard:c.jd, soft:b.Gd, x:384, y:-192}], "fighter-m4-0":[{hard:c.jd, soft:b.kk, x:96, y:-192}], "tsukikage-r":[{hard:c.dc, soft:b.Hd(700), x:624, y:256}, {hard:c.dc, soft:b.Hd(600), x:720, y:256}, {hard:c.dc, soft:b.Hd(500), x:576, y:320}, {hard:c.dc, soft:b.Hd(400), x:672, y:320}, {hard:c.dc, soft:b.Hd(300), x:768, y:320}, {hard:c.dc, soft:b.Hd(200), x:624, y:384}, {hard:c.dc, soft:b.Hd(100), x:720, y:384}], "tsukikage-l":[{hard:c.dc, 
  soft:b.Ne(700), x:-144, y:384}, {hard:c.dc, soft:b.Ne(600), x:-240, y:384}, {hard:c.dc, soft:b.Ne(500), x:-96, y:320}, {hard:c.dc, soft:b.Ne(400), x:-192, y:320}, {hard:c.dc, soft:b.Ne(200), x:-144, y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{hard:c.Ec, soft:b.Fc(2E3), x:384, y:-256}, {hard:c.Ec, soft:b.Fc(1500), x:312, y:-224}, {hard:c.Ec, soft:b.Fc(1E3), x:240, y:-192}, {hard:c.Ec, soft:b.Fc(500), x:168, y:-160}, {hard:c.Ec, soft:b.Fc(0), x:96, y:-128}], "milk5-1":[{hard:c.Ec, soft:b.Fc(2E3), x:96, y:-256}, {hard:c.Ec, soft:b.Fc(1500), x:168, y:-224}, {hard:c.Ec, soft:b.Fc(1E3), x:240, y:-192}, {hard:c.Ec, soft:b.Fc(500), x:312, y:-160}, {hard:c.Ec, soft:b.Fc(0), x:384, y:-128}], "ako5-0":[{hard:c.xb, soft:b.yb(240, 
  128, 96, 256), x:240, y:-192}, {hard:c.xb, soft:b.yb(384, 256, 240, 128), x:384, y:-192}, {hard:c.xb, soft:b.yb(360, 512, 384, 256), x:360, y:-192}, {hard:c.xb, soft:b.yb(120, 512, 360, 512), x:120, y:-192}, {hard:c.xb, soft:b.yb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{hard:c.xb, soft:b.yb(240, 128, 384, 256), x:240, y:-192}, {hard:c.xb, soft:b.yb(384, 256, 360, 512), x:384, y:-192}, {hard:c.xb, soft:b.yb(360, 512, 120, 512), x:360, y:-192}, {hard:c.xb, soft:b.yb(120, 512, 96, 256), x:120, 
  y:-192}, {hard:c.xb, soft:b.yb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{hard:c.xb, soft:b.yb(240, 128, 120, 512), x:240, y:-192}, {hard:c.xb, soft:b.yb(384, 256, 96, 256), x:384, y:-192}, {hard:c.xb, soft:b.yb(360, 512, 240, 128), x:360, y:-192}, {hard:c.xb, soft:b.yb(120, 512, 384, 256), x:120, y:-192}, {hard:c.xb, soft:b.yb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{hard:c.ec, soft:b.yi, x:144, y:-192}], "komachi-1":[{hard:c.ec, soft:b.yi, x:336, y:-192}], "komachi2-0":[{hard:c.ec, 
  soft:b.zi, x:144, y:-192}], "komachi2-1":[{hard:c.ec, soft:b.zi, x:336, y:-192}], "komachi3-0":[{hard:c.ec, soft:b.Ai, x:144, y:-192}], "komachi3-1":[{hard:c.ec, soft:b.Ai, x:336, y:-192}], "komachi4-0":[{hard:c.ec, soft:b.zg, x:144, y:-192}], "komachi4-1":[{hard:c.ec, soft:b.zg, x:336, y:-192}], "komachi4-2":[{hard:c.ec, soft:b.zg, x:240, y:-192}], "komachi5-0":[{hard:c.ec, soft:b.yg, x:144, y:-192}], "komachi5-1":[{hard:c.ec, soft:b.yg, x:336, y:-192}], "komachi5-2":[{hard:c.ec, soft:b.yg, x:240, 
  y:-192}], "nozomi4-0":[{hard:c.ge, soft:b.Mg, x:144, y:-192}], "nozomi4-1":[{hard:c.ge, soft:b.Mg, x:240, y:-192}], "nozomi4-2":[{hard:c.ge, soft:b.Mg, x:336, y:-192}], "nozomi5-0":[{hard:c.ge, soft:b.Ng, x:144, y:-192}], "nozomi5-1":[{hard:c.ge, soft:b.Ng, x:240, y:-128}], "nozomi5-2":[{hard:c.ge, soft:b.Ng, x:336, y:-192}], "mktn5-0":[{hard:c.Ke, soft:b.Ke(0.6), x:624, y:128}], "mktn5-1":[{hard:c.Ke, soft:b.Ke(0.4), x:-144, y:64}], "akane-center":[{hard:c.Za, soft:b.Za, x:168, y:256}, {hard:c.Za, 
  soft:b.Za, x:192, y:128}, {hard:c.Za, soft:b.Za, x:288, y:128}, {hard:c.Za, soft:b.Za, x:312, y:256}], "akane-right":[{hard:c.Za, soft:b.Za, x:384, y:64}, {hard:c.Za, soft:b.Za, x:336, y:160}, {hard:c.Za, soft:b.Za, x:384, y:256}], "akane-left":[{hard:c.Za, soft:b.Za, x:96, y:64}, {hard:c.Za, soft:b.Za, x:144, y:160}, {hard:c.Za, soft:b.Za, x:96, y:256}], "nao1-left":[{hard:c.sa, soft:b.Gb, x:48, y:-100}, {hard:c.sa, soft:b.Gb, x:96, y:-100}, {hard:c.sa, soft:b.Gb, x:144, y:-100}, {hard:c.sa, soft:b.Gb, 
  x:192, y:-100}, {hard:c.sa, soft:b.Gb, x:240, y:-100}], "nao1-right":[{hard:c.sa, soft:b.Gb, x:240, y:-100}, {hard:c.sa, soft:b.Gb, x:288, y:-100}, {hard:c.sa, soft:b.Gb, x:336, y:-100}, {hard:c.sa, soft:b.Gb, x:384, y:-100}, {hard:c.sa, soft:b.Gb, x:432, y:-100}], "nao1-center":[{hard:c.sa, soft:b.Gb, x:144, y:-100}, {hard:c.sa, soft:b.Gb, x:192, y:-100}, {hard:c.sa, soft:b.Gb, x:240, y:-100}, {hard:c.sa, soft:b.Gb, x:288, y:-100}, {hard:c.sa, soft:b.Gb, x:336, y:-100}], "nao2-left":[{hard:c.sa, 
  soft:b.Hb, x:48, y:-100}, {hard:c.sa, soft:b.Hb, x:96, y:-100}, {hard:c.sa, soft:b.Hb, x:144, y:-100}, {hard:c.sa, soft:b.Hb, x:192, y:-100}, {hard:c.sa, soft:b.Hb, x:240, y:-100}], "nao2-right":[{hard:c.sa, soft:b.Hb, x:240, y:-100}, {hard:c.sa, soft:b.Hb, x:288, y:-100}, {hard:c.sa, soft:b.Hb, x:336, y:-100}, {hard:c.sa, soft:b.Hb, x:384, y:-100}, {hard:c.sa, soft:b.Hb, x:432, y:-100}], "nao2-center":[{hard:c.sa, soft:b.Hb, x:144, y:-100}, {hard:c.sa, soft:b.Hb, x:192, y:-100}, {hard:c.sa, soft:b.Hb, 
  x:240, y:-100}, {hard:c.sa, soft:b.Hb, x:288, y:-100}, {hard:c.sa, soft:b.Hb, x:336, y:-100}], "nao3-left":[{hard:c.sa, soft:b.Ib, x:48, y:-100}, {hard:c.sa, soft:b.Ib, x:96, y:-100}, {hard:c.sa, soft:b.Ib, x:144, y:-100}, {hard:c.sa, soft:b.Ib, x:192, y:-100}, {hard:c.sa, soft:b.Ib, x:240, y:-100}], "nao3-right":[{hard:c.sa, soft:b.Ib, x:240, y:-100}, {hard:c.sa, soft:b.Ib, x:288, y:-100}, {hard:c.sa, soft:b.Ib, x:336, y:-100}, {hard:c.sa, soft:b.Ib, x:384, y:-100}, {hard:c.sa, soft:b.Ib, x:432, 
  y:-100}], "nao3-center":[{hard:c.sa, soft:b.Ib, x:144, y:-100}, {hard:c.sa, soft:b.Ib, x:192, y:-100}, {hard:c.sa, soft:b.Ib, x:240, y:-100}, {hard:c.sa, soft:b.Ib, x:288, y:-100}, {hard:c.sa, soft:b.Ib, x:336, y:-100}], "reika1-left":[{hard:c.Kb, soft:b.nc, x:-48, y:-64}, {hard:c.Kb, soft:b.nc, x:-72, y:-128}, {hard:c.Kb, soft:b.nc, x:-96, y:-64}, {hard:c.Kb, soft:b.nc, x:-120, y:-128}, {hard:c.Kb, soft:b.nc, x:-144, y:-64}, {hard:c.Kb, soft:b.nc, x:-168, y:-128}], "reika1-right":[{hard:c.Kb, 
  soft:b.nc, x:528, y:-64}, {hard:c.Kb, soft:b.nc, x:552, y:-128}, {hard:c.Kb, soft:b.nc, x:576, y:-64}, {hard:c.Kb, soft:b.nc, x:600, y:-128}, {hard:c.Kb, soft:b.nc, x:624, y:-64}, {hard:c.Kb, soft:b.nc, x:648, y:-128}], "madoka-0":[{hard:c.Yc, soft:b.Yc, x:144, y:-128}], "madoka-1":[{hard:c.Yc, soft:b.Yc, x:336, y:-128}], "madoka-2":[{hard:c.Yc, soft:b.Yc, x:240, y:-128}], "miyuki-1":[{hard:c.Ud, soft:b.Ud, x:-256, y:140}], "miyuki-2":[{hard:c.Ud, soft:b.Ud, x:736, y:60}], alice:[{hard:c.kg, soft:b.kg, 
  x:240, y:-64}], erika:[{hard:c.He, soft:b.He, x:240, y:-100}], yukishiro:[{hard:c.ug, soft:b.ug, x:240, y:-100}], misumi:[{hard:c.Ig, soft:[b.lk, b.Jg, b.Kg], x:240, y:-100, boss:k}], mai:[{hard:c.Eg, soft:b.Eg, x:780, y:128}], hyuga:[{hard:c.mk, soft:[b.Pg, b.Qg, b.Rg], x:240, y:-100, boss:k}], higashi:[{hard:c.Sg, soft:b.Sg, x:240, y:-100}], momozono:[{hard:c.ik, soft:[b.Bg, b.Cg, b.Dg], x:240, y:-100, boss:k}], rikka:[{hard:c.Og, soft:b.Og, x:240, y:-100}], mana:[{hard:c.jk, soft:[b.Fg, b.Gg, 
  b.Hg], x:240, y:-100, boss:k}], kanade:[{hard:c.hk, soft:b.xg, x:432, y:-448}], hibiki:[{hard:c.gk, soft:[b.rg, b.sg, b.tg], x:240, y:-200, boss:k}], ayumi:[{hard:c.Tj, soft:[b.Uj, b.Vj, b.Wj], x:240, y:512, boss:k}]}
})();
(function() {
  function c(b, c, d, f) {
    return a.action([f(b), a.repeat(d + "-1", [f(a.speed(c, "sequence"))])])
  }
  function b(b, c, d, f, g, j, l) {
    return a.action([a.fire(a.direction(c, "absolute"), f, g || t, j, l), a.la("way", "Math.max(2, " + b + "-$bg*2+$ex*2)"), a.repeat("$way-1", [a.fire(a.direction("((" + d + ")-(" + c + "))/($way-1)", "sequence"), f, g || t, j, l)])])
  }
  function f(a, b, c, f, g) {
    return function(j) {
      return d(a, b, c, j, f, g, i, i)
    }
  }
  function d(b, c, d, f, g, j, l, n) {
    return a.action([a.fire(a.direction(c), f, g || t, j, l, n), a.la("way", "Math.max(3, " + b + "+$ex*2)"), a.repeat("$way-1", [a.fire(a.direction("((" + d + ")-(" + c + "))/($way-1)", "sequence"), f, g || t, j, l, n)])])
  }
  function j(b) {
    return a.fire(a.direction("-3+$rand*6"), b || p, C)
  }
  function n(b) {
    return a.fire(a.direction("-3+$rand*6"), b || p, t)
  }
  function u(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 2.60 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function H(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 2.30 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function D(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 2.00 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function F(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 1.70 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function p(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 1.40 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function q(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 1.10 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function r(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 0.80 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function l(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 0.50 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function P(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 0.20 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function g(b) {
    return a.wait(b + "*(1.1-$difficulty)*$hyperOff + $bg*5")
  }
  function S(b) {
    return a.Ha(b, {frame:1, gc:k, Xa:2, qa:10})
  }
  function R(b) {
    return a.Ha(b, {frame:3, Xb:k, Xa:0})
  }
  function Z(b) {
    return a.Ha(b, {frame:2, Xb:k, Xa:0})
  }
  function Q(b) {
    return a.Ha(b, {frame:0, gf:k, Xa:2})
  }
  function I(b) {
    return a.Ha(b, {frame:1, gf:k, Xa:2})
  }
  function L(b) {
    return a.Ha(b, {frame:7, gc:k, Xa:1})
  }
  function E(b) {
    return a.Ha(b, {frame:6, gc:k, Xa:1})
  }
  function s(b) {
    return a.Ha(b, {visible:A, Xa:1})
  }
  function J(b) {
    return a.Ha(b, {frame:4, gc:k, Xa:2})
  }
  function G(b) {
    return a.Ha(b, {frame:2, Xa:1})
  }
  function t(b) {
    return a.Ha(b, {frame:0, Xa:2})
  }
  function z(b) {
    return a.Ha(b, {frame:3, Xa:1})
  }
  function C(b) {
    return a.Ha(b, {frame:1, Xa:2})
  }
  function K(b) {
    return a.Ha(b, {frame:2, gc:k, Xa:1})
  }
  function w(b) {
    return a.Ha(b, {frame:0, gc:k, Xa:2})
  }
  function v(b) {
    return a.Ha(b, {frame:3, gc:k, Xa:1})
  }
  function B(b) {
    return a.Ha(b, {frame:1, gc:k, Xa:2})
  }
  gls2.fa = {};
  var a = N.La;
  gls2.fa.donothing = new N.ha({top:a.action([a.wait(5E3)])});
  gls2.fa["basic0-0"] = new N.ha({top:a.action([n])});
  gls2.fa["basic0-0Expert"] = new N.ha({top:a.action([n, a.repeat(4, [a.fire(a.direction(0, "sequence"), a.speed(0.1, "sequence"), t)])])});
  gls2.fa["basic0-1"] = new N.ha({top:a.action([c(p, -0.01, 8, f(3, -15, 15))])});
  gls2.fa["basic1-0"] = new N.ha({top:a.action([a.repeat(999, [g(40), n(q)])])});
  gls2.fa["basic1-0Expert"] = new N.ha({top:a.action([a.repeat(999, [g(40), n(q), a.repeat(4, [a.fire(a.direction(0, "sequence"), a.speed(0.1, "sequence"), t)])])])});
  gls2.fa["basic1-1"] = new N.ha({top:a.action([a.repeat(999, [g(20), n(q)])])});
  gls2.fa["basic1-1Expert"] = new N.ha({top:a.action([a.repeat(999, [g(20), n(q), a.repeat(4, [a.fire(a.direction(0, "sequence"), a.speed(0.1, "sequence"), t)])])])});
  gls2.fa["basic1-2"] = new N.ha({top:a.action([g("10+$rand*100"), d(3, -40, 40, q)])});
  gls2.fa["basic1-3"] = new N.ha({top:a.action([a.repeat(999, [g("20+$rand*80"), d(3, -40, 40, q)])])});
  gls2.fa["basic2-0"] = new N.ha({top:a.action([a.repeat(999, [g(50), n(q)])])});
  gls2.fa["basic2-0Expert"] = new N.ha({top:a.action([a.repeat(999, [g(50), n(q), a.repeat(4, [a.fire(a.direction(0, "sequence"), a.speed(0.1, "sequence"), t)])])])});
  gls2.fa["basic3-0"] = new N.ha({top:a.action([a.wait(20), a.repeat(999, [g(100), j(q), a.repeat(2, [a.fire(a.direction(0, "sequence"), a.speed(0.1, "sequence"), C)])])])});
  gls2.fa["basic3-0Expert"] = new N.ha({top:a.action([a.wait(5), a.repeat(999, [g(30), j(q), a.repeat(7, [a.wait(2), j(q)])])])});
  gls2.fa["basic3-1"] = new N.ha({top:a.action([a.wait(20), a.repeat(999, [g(40), j(q), a.repeat(2, [j(a.speed(0.1, "sequence"))])])])});
  gls2.fa["basic3-1Expert"] = new N.ha({top:a.action([a.wait(20), a.repeat(999, [g(40), j(q), a.repeat(7, [a.wait(2), j(a.speed(0.1, "sequence"))])])])});
  gls2.fa["bukky-4-0"] = new N.ha({top0:a.action([g(30), a.repeat(999, [a.fire(a.direction(-40), q, v), a.repeat(3, [a.fire(a.direction(20, "sequence"), q, v), a.fire(a.direction(20, "sequence"), q, v), a.fire(a.direction(20, "sequence"), q, v), a.fire(a.direction(20, "sequence"), q, v), a.fire(a.direction(-80, "sequence"), q, v), g(5)]), g(70)])]), top1:a.action([g(20), a.fire(a.direction(180, "absolute"), r, w), a.repeat(999, [a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), 
  r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(15, "sequence"), r, w), a.fire(a.direction(-90, "sequence"), r, w), g(5)])])});
  gls2.fa["bukky-5-0"] = new N.ha({top0:a.action([g(30), a.repeat(999, [a.fire(a.direction(-40), q, v), a.repeat(3, [a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(10, "sequence"), q, v), a.fire(a.direction(-80, "sequence"), q, 
  v), g(5)]), g(70)])]), top1:a.action([g(20), a.fire(a.direction(180, "absolute"), r, w), a.repeat(999, [a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), 
  a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(7.5, "sequence"), r, w), a.fire(a.direction(-90, "sequence"), r, w), g(5)])])});
  gls2.fa["cannon2-0"] = new N.ha({top0:a.action([a.repeat(999, [g(20), b(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), b(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), b(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), b(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), g(20), b(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", q), b(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", q), b(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", q), b(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", q)])]), top1:a.action([a.repeat(999, [a.fire(a.direction("  0+$loop.index*10", "absolute"), l, J), a.fire(a.direction(" 90+$loop.index*10", "absolute"), l, J), a.fire(a.direction("180+$loop.index*10", "absolute"), l, J), a.fire(a.direction("270+$loop.index*10", "absolute"), l, J), a.fire(a.direction("  0-$loop.index*10", "absolute"), l, J), a.fire(a.direction(" 90-$loop.index*10", "absolute"), l, J), a.fire(a.direction("180-$loop.index*10", 
  "absolute"), l, J), a.fire(a.direction("270-$loop.index*10", "absolute"), l, J), g(10)])]), top2:a.action([a.repeat(999, [g(43), d(30, 0, 348, q, C)])])});
  gls2.fa["cannon2-3"] = new N.ha({top0:a.action([a.repeat(999, [a.la("d", "$loop.index*-6"), a.repeat(9, [a.fire(a.direction(36, "sequence"), a.speed(1), s(a.ga("ivs0", "$d")))]), g(10), a.fire(a.direction(39, "sequence"), a.speed(1), s(a.ga("ivs0", "$d")))])]), top1:a.action([a.repeat(999, [a.la("d", "($loop.index)*+12"), a.repeat(12, [a.fire(a.direction(360 / 13, "sequence"), a.speed(1), s(a.ga("ivs1", "$d")))]), g(10), a.fire(a.direction(360 / 13 - 4, "sequence"), a.speed(1), s(a.ga("ivs1", "$d")))])]), 
  ivs0:a.action([a.wait(5), a.fire(a.direction("$1", "relative"), r, C), a.va()]), ivs1:a.action([a.wait(10), a.fire(a.direction("$1-5", "relative"), r, E), a.fire(a.direction("$1+5", "relative"), r, L), a.va()])});
  gls2.fa["cannon3-0"] = new N.ha({top0:a.action([a.repeat(999, [g(80), c(r, 0.01, 5, f(5, -30, 30, C, a.offsetX(-60))), c(r, 0.01, 5, f(5, -30, 30, C)), c(r, 0.01, 5, f(5, -30, 30, C, a.offsetX(60)))])])});
  gls2.fa["cannon4-0"] = new N.ha({top0:a.action([g(20), a.repeat(999, [a.fire(r, v), a.repeat(8, [g(10), a.la("way", "$loop.count+1"), a.fire(a.direction("-12/2 - 12*($way-2)", "sequence"), r, v), a.repeat("$way-1", [a.fire(a.direction(12, "sequence"), r, v)])]), g(120)])])});
  gls2.fa["cannon5-0"] = new N.ha({top0:a.action([a.repeat(999, [a.fire(a.direction(-60), D, s(a.ga("b"))), a.repeat(11, [g(5), a.fire(a.direction(10, "sequence"), D, s(a.ga("b")))]), g(60)])]), b:a.action([a.wait(5), a.pd(a.speed(0), 0), c(r, 0.1, 5, function(b) {
    return a.fire(a.direction(0, "relative"), b, t)
  }), a.va])});
  gls2.fa["yuri-4"] = new N.ha({top:a.action([g(60), a.repeat(7, [b(7, 120, 240, l, C), g(8)])])});
  gls2.fa["kurokawa-1"] = new N.ha({top0:a.action([a.repeat(999, [c(q, -0.01, 4, function(b) {
    return d(4, -45, 45, b, z, a.offsetX(-45), a.ra(k))
  }), c(q, -0.01, 4, function(b) {
    return d(4, -45, 45, b, z, a.offsetX(45), a.ra(k))
  }), g(90)])]), top1:a.action([a.repeat(999, [a.fire(a.direction(0), q, K, a.offsetX(-45), a.ra(k)), g(45), a.fire(a.direction(0), q, K, a.offsetX(45), a.ra(k)), g(45)])])});
  gls2.fa["milk-5"] = new N.ha({top0:a.action([a.repeat(999, [d(5, -90, 90, q, G, a.offsetX(-45)), a.wait(27), d(5, -90, 90, q, G, a.offsetX(45)), g(120)])]), top1:a.action([a.repeat(999, [g(30), d(6, -90, 90, p, v, a.offsetX(-45)), a.wait(21), d(6, -90, 90, p, v, a.offsetX(45)), g(90)])]), top2:a.action([a.repeat(999, [g(55), d(13, -90, 90, l, J, a.offsetX(-45)), a.wait(20), d(13, -90, 90, l, J, a.offsetX(45)), g(21)])])});
  gls2.fa["ako-5"] = new N.ha({top:a.action([a.repeat(8, [d(3, -20, 20, p, t), g(2)])])});
  gls2.fa["ako-5Expert"] = new N.ha({top:a.action([a.repeat(8, [d(3, -30, 30, p, t), g(2)])])});
  gls2.fa["kurokawa-4"] = new N.ha({top0:a.action([a.repeat(999, [c(q, -0.01, 4, function(b) {
    return d(4, -45, 45, b, z, a.offsetX(-45), a.ra(k))
  }), c(q, -0.01, 4, function(b) {
    return d(4, -45, 45, b, z, a.offsetX(45), a.ra(k))
  }), g(90)])]), top1:a.action([a.repeat(999, [a.fire(a.direction(0), q, K, a.offsetX(-45), a.ra(k)), g(45), a.fire(a.direction(0), q, K, a.offsetX(45), a.ra(k)), g(45)])])});
  gls2.fa["komachi-1"] = new N.ha({top0:a.action([a.repeat(20, [a.fire(a.direction(210, "absolute"), l(1), t, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(-40)), a.repeat(57, [g(8), a.fire(a.direction(-720 / 57, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(-40))])])]), top1:a.action([a.repeat(20, 
  [a.fire(a.direction(-210, "absolute"), l(1), t, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(40)), a.repeat(57, [g(8), a.fire(a.direction(720 / 57, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), t, a.offsetX(40))])])]), top2:a.action([a.repeat(70, [a.fire(a.direction(0), q(0), B, a.offsetX(-110), a.ra(k)), a.repeat(6, 
  [a.wait(1), a.fire(a.direction(0, "sequence"), q(0), B, a.offsetX(-110), a.ra(k))]), g(10), a.fire(a.direction(0), q(0), B, a.offsetX(110), a.ra(k)), a.repeat(6, [a.wait(1), a.fire(a.direction(0, "sequence"), q(0), B, a.offsetX(110), a.ra(k))]), g(10)])])});
  gls2.fa["komachi-1Expert"] = new N.ha({top0:a.action([a.repeat(20, [a.fire(a.direction(210, "absolute"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40)), a.repeat(57, [g(8), a.fire(a.direction(-720 / 57, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), 
  l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(-40))])])]), top1:a.action([a.repeat(20, [a.fire(a.direction(-210, "absolute"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, 
  "sequence"), l(1), t, a.offsetX(40)), a.repeat(57, [g(8), a.fire(a.direction(720 / 57, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40)), a.fire(a.direction(60, "sequence"), l(1), t, a.offsetX(40))])])]), top2:a.action([a.repeat(70, [a.fire(a.direction(0), q(0), B, a.offsetX(-110), a.ra(k)), a.repeat(6, [a.wait(1), a.fire(a.direction(0, 
  "sequence"), q(0), B, a.offsetX(-110), a.ra(k))]), g(10), a.fire(a.direction(0), q(0), B, a.offsetX(110), a.ra(k)), a.repeat(6, [a.wait(1), a.fire(a.direction(0, "sequence"), q(0), B, a.offsetX(110), a.ra(k))]), g(10)])])});
  gls2.fa["komachi-2"] = new N.ha({top0:a.action([a.repeat(999, [c(q, -0.01, 4, function(b) {
    return a.action([d(4, -45, 45, b, z, a.offsetX(-45), a.ra(k)), g(4)])
  }), c(q, -0.01, 4, function(b) {
    return a.action([g(4), d(4, -45, 45, b, z, a.offsetX(45), a.ra(k))])
  }), g(90)])]), top1:a.action([a.repeat(999, [g(45), c(r, 0.01, 22, function(b) {
    return a.action([a.repeat("1 + $rand*6", [a.fire(a.direction("-5+$rand*10"), b, w)]), g(1)])
  }), g(180)])])});
  gls2.fa["komachi-3"] = new N.ha({top0:a.action([a.repeat(999, [c(q, -0.01, 4, function(b) {
    return a.action([d(8, -60, 60, b, z, a.offsetX(-45), a.ra(k)), g(4)])
  }), c(q, -0.01, 4, function(b) {
    return a.action([g(4), d(8, -60, 60, b, z, a.offsetX(45), a.ra(k))])
  }), g(90)])]), top1:a.action([a.repeat(999, [g(45), c(r, 0.01, 22, function(b) {
    return a.action([a.repeat("1 + $rand*6", [a.fire(a.direction("-5+$rand*10"), b, w)]), g(1)])
  }), g(180)])])});
  gls2.fa["komachi-4"] = new N.ha({top0:a.action([a.repeat(999, [a.repeat(4, [a.fire(a.direction("220+-1+$rand*2", "absolute"), q, G, a.offsetX(-45)), a.fire(a.direction("180+-1+$rand*2", "absolute"), q, G, a.offsetX(-45)), a.fire(a.direction("180+-1+$rand*2", "absolute"), q, G, a.offsetX(45)), a.fire(a.direction("140+-1+$rand*2", "absolute"), q, G, a.offsetX(45)), g(4)]), g(60)])]), top1:a.action([a.repeat(70, [a.fire(a.direction(0), q(5), B, a.offsetX(-110), a.ra(k)), a.repeat(12, [a.wait(1), a.fire(a.direction(0, 
  "sequence"), q(5), B, a.offsetX(-110), a.ra(k))]), g(30), a.fire(a.direction(0), q(5), B, a.offsetX(110), a.ra(k)), a.repeat(12, [a.wait(1), a.fire(a.direction(0, "sequence"), q(5), B, a.offsetX(110), a.ra(k))]), g(30)])])});
  gls2.fa["komachi-5"] = new N.ha({top0:a.action([a.repeat(999, [a.fire(a.direction(210, "absolute"), l(1), G, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(-40)), a.repeat(50 / 3, [g(2), a.fire(a.direction(-7.2, "sequence"), l(1), G, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(-40))]), g(60)])]), top1:a.action([a.repeat(999, 
  [a.fire(a.direction(-210, "absolute"), l(1), G, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(40)), a.repeat(50 / 3, [g(2), a.fire(a.direction(7.2, "sequence"), l(1), G, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(40)), a.fire(a.direction(120, "sequence"), l(1), G, a.offsetX(40))]), g(60)])]), top2:a.action([a.repeat(999, [a.fire(a.direction(-10), p(0), B, a.offsetX(-110), a.ra(k)), 
  a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(-110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(-110), a.ra(k)), a.repeat(30, [a.wait(1), a.fire(a.direction(-20, "sequence"), p(0), B, a.offsetX(-110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(-110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(-110), a.ra(k))]), g(5), a.fire(a.direction(-10), p(0), B, a.offsetX(110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, 
  a.offsetX(110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(110), a.ra(k)), a.repeat(30, [a.wait(1), a.fire(a.direction(-20, "sequence"), p(0), B, a.offsetX(110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(110), a.ra(k)), a.fire(a.direction(10, "sequence"), p(0), B, a.offsetX(110), a.ra(k))]), g(5)])])});
  gls2.fa["nozomi-4"] = new N.ha({top0:a.action([a.wait(60), a.repeat(999, [a.repeat(12, [a.la("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", P("(560-$c*40)*0.03"), K, a.offsetY(-50))]), g(150)])]), top1:a.action([a.wait(20), a.repeat(999, [a.fire(a.direction(40), s(a.ga("noop"))), c(q, 0.03, 16, function(b) {
    return a.action([a.fire(a.direction(-5, "sequence"), b, C, a.offsetX(-50)), a.wait(3)])
  }), g(90), a.fire(a.direction(-40), s(a.ga("noop"))), c(q, 0.03, 16, function(b) {
    return a.action([a.fire(a.direction(5, "sequence"), b, C, a.offsetX(50)), a.wait(3)])
  }), g(90)])]), noop:a.action([a.wait(1), a.va])});
  gls2.fa["nozomi-5"] = new N.ha({top0:a.action([a.wait(60), a.repeat(999, [a.repeat(6, [a.la("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", P("(560-$c*40)*0.02"), K, a.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", P("(560-$c*40)*0.02"), K, a.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", P("(560-$c*40)*0.02"), K, a.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", P("(560-$c*40)*0.02"), K, a.offsetY(-50))]), g(150), a.repeat(6, [a.la("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", P("(560-$c*40)*0.02"), v, a.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", P("(560-$c*40)*0.02"), v, a.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", P("(560-$c*40)*0.02"), v, a.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", P("(560-$c*40)*0.02"), v, a.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", P("(560-$c*40)*0.02"), v, a.offsetY(-50))]), g(150)])]), top1:a.action([a.repeat(999, [a.wait(20), a.fire(a.direction(5), 
  s(a.ga("noop"))), c(r(1.5), 0.05, 15, function(b) {
    return a.action([a.fire(a.direction(-1, "sequence"), b, C, a.offsetX(-50)), g(3)])
  }), a.wait(20), a.fire(a.direction(-5), s(a.ga("noop"))), c(r(1.5), 0.05, 15, function(b) {
    return a.action([a.fire(a.direction(1, "sequence"), b, C, a.offsetX(50)), g(3)])
  })])]), noop:a.action([a.wait(1), a.va])});
  gls2.fa["mktn-5"] = new N.ha({top0:a.action([a.repeat(999, [a.fire(a.direction(0), l, s(a.ga("noop"))), a.repeat(20, [a.fire(a.direction(0.5, "sequence"), a.speed(0.08, "sequence"), z), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), z)]), g(6)]), a.fire(a.direction(0), l, s(a.ga("noop"))), a.repeat(20, [a.fire(a.direction(-0.5, "sequence"), a.speed(0.08, "sequence"), z), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), z)]), g(6)]), g(60)])]), 
  top1:a.action([a.repeat(999, [a.fire(a.direction(0, "absolute"), q, s(a.ga("noop"))), a.repeat(5, [a.fire(a.direction(-10, "sequence"), a.speed(0.05, "sequence"), J), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), J)]), g(5)]), a.fire(a.direction(0, "absolute"), q, s(a.ga("noop"))), a.repeat(5, [a.fire(a.direction(10, "sequence"), a.speed(0.05, "sequence"), J), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), J)]), g(5)]), g(40)])]), top2:a.action([a.repeat(999, 
  [a.la("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, q(7), I, a.offsetX("$gun"), a.offsetY(20)), a.la("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, q(7), I, a.offsetX("$gun"), a.offsetY(20)), g(21)])]), noop:a.action([a.wait(1), a.va])});
  gls2.fa.akane = new N.ha({top:a.action([a.wait("40"), a.repeat(999, [a.repeat(5, [g(6), d(1, 1, 1, l, z, a.offsetX(-16), a.offsetY(6), a.ra(k)), d(1, 1, 1, l, z, a.offsetX(16), a.offsetY(6), a.ra(k))]), g(120)])])});
  gls2.fa["nao-1"] = new N.ha({top:a.action([a.repeat(999, [g(30), a.fire(a.direction(0), D, t)])])});
  gls2.fa["nao-1Expert"] = new N.ha({top:a.action([a.repeat(999, [g(30), a.fire(a.direction(-30), D, t), a.fire(a.direction(0), D, t), a.fire(a.direction(30), D, t)])])});
  gls2.fa["nao-2"] = new N.ha({top:a.action([a.repeat(999, [g(30), d(2, -5, 5, p, t, a.offsetX(0), a.offsetY(0), a.ra(k))])])});
  gls2.fa["nao-3"] = new N.ha({top:a.action([a.repeat(999, [g(30), d(2, -1, 1, p, t, a.offsetX(0), a.offsetY(0), a.ra(k))])])});
  gls2.fa.reika = new N.ha({top:a.action([a.repeat(999, [g(60), a.fire(a.direction(-20), q, B), a.fire(a.direction(0), q, v), a.fire(a.direction(20), q, B)])])});
  gls2.fa.aguri = new N.ha({top0:a.action([a.repeat(999, [a.repeat(3, [c(q, 0.001, 4, function(b) {
    return a.action([d(3, -30, 30, b, v, a.offsetX(-32), a.offsetY(-20)), d(2, -30, 30, b, v, a.offsetX(-120), a.offsetY(10)), d(2, -30, 30, b, v, a.offsetX(-80), a.offsetY(12)), d(3, -30, 30, b, v, a.offsetX(32), a.offsetY(-20)), d(2, -30, 30, b, v, a.offsetX(120), a.offsetY(10)), d(2, -30, 30, b, v, a.offsetX(80), a.offsetY(12)), a.wait(1)])
  }), g(10)]), g(120)])]), top1:a.action([a.repeat(999, [a.repeat(3, [d(3, -15, 15, p, w, a.offsetX(0), a.offsetY(0)), d(3, -15, 15, p, w, a.offsetX(0), a.offsetY(30)), d(3, -15, 15, p, w, a.offsetX(-10), a.offsetY(-10)), d(3, -15, 15, p, w, a.offsetX(-20), a.offsetY(0)), d(3, -15, 15, p, w, a.offsetX(-20), a.offsetY(10)), d(3, -15, 15, p, w, a.offsetX(-10), a.offsetY(20)), d(3, -15, 15, p, w, a.offsetX(10), a.offsetY(-10)), d(3, -15, 15, p, w, a.offsetX(20), a.offsetY(0)), d(3, -15, 15, p, w, a.offsetX(20), 
  a.offsetY(10)), d(3, -15, 15, p, w, a.offsetX(10), a.offsetY(20)), g(40)]), g(180)])])});
  gls2.fa.aguriExpert = new N.ha({top0:a.action([a.repeat(999, [a.repeat(3, [c(q, 0.001, 4, function(b) {
    return a.action([d(3, -60, 60, b, v, a.offsetX(-32), a.offsetY(-20)), d(2, -60, 60, b, v, a.offsetX(-120), a.offsetY(10)), d(2, -60, 60, b, v, a.offsetX(-80), a.offsetY(12)), d(3, -60, 60, b, v, a.offsetX(32), a.offsetY(-20)), d(2, -60, 60, b, v, a.offsetX(120), a.offsetY(10)), d(2, -60, 60, b, v, a.offsetX(80), a.offsetY(12)), a.wait(1)])
  }), g(10)]), g(120)])]), top1:a.action([a.repeat(999, [a.repeat(3, [d(3, -30, 30, p, w, a.offsetX(0), a.offsetY(0)), d(3, -30, 30, p, w, a.offsetX(0), a.offsetY(30)), d(3, -30, 30, p, w, a.offsetX(-10), a.offsetY(-10)), d(3, -30, 30, p, w, a.offsetX(-20), a.offsetY(0)), d(3, -30, 30, p, w, a.offsetX(-20), a.offsetY(10)), d(3, -30, 30, p, w, a.offsetX(-10), a.offsetY(20)), d(3, -30, 30, p, w, a.offsetX(10), a.offsetY(-10)), d(3, -30, 30, p, w, a.offsetX(20), a.offsetY(0)), d(3, -30, 30, p, w, a.offsetX(20), 
  a.offsetY(10)), d(3, -30, 30, p, w, a.offsetX(10), a.offsetY(20)), g(40)]), g(180)])])});
  gls2.fa.miyuki = new N.ha({top0:a.action([a.wait(300), a.repeat(10, [a.fire(a.direction(210, "absolute"), q, R, a.offsetX(-64), a.offsetY(32)), g(2), a.fire(a.direction(200, "absolute"), q, R, a.offsetX(-64), a.offsetY(32)), g(2), a.fire(a.direction(190, "absolute"), q, R, a.offsetX(-32), a.offsetY(32)), g(2), a.fire(a.direction(180, "absolute"), q, R, a.offsetX(0), a.offsetY(32)), g(2), a.fire(a.direction(170, "absolute"), q, R, a.offsetX(32), a.offsetY(32)), g(2), a.fire(a.direction(160, "absolute"), 
  q, R, a.offsetX(64), a.offsetY(32)), g(2), a.fire(a.direction(150, "absolute"), q, R, a.offsetX(64), a.offsetY(32)), g(180)])]), top1:a.action([a.wait("40"), a.repeat(999, [g(30), d(3, -45, 45, l, L, a.offsetX(-64), a.offsetY(16)), d(3, -45, 45, l, L, a.offsetX(0), a.offsetY(16)), d(3, -45, 45, l, L, a.offsetX(16), a.offsetY(16)), d(3, -45, 45, l, L, a.offsetX(32), a.offsetY(16)), c(l, 0.001, 5, function(b) {
    return a.action([d(3, "-45", "+45", b, L, a.offsetX(0), a.offsetY(0))])
  })])])});
  gls2.fa.alice = new N.ha({top0:a.action([a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(999, [a.fire(a.direction(7, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), g(10)])]), top1:a.action([a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(999, [a.fire(a.direction(11, 
  "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), g(10)])]), top2:a.action([a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(999, [a.fire(a.direction(17, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), 
  a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), g(10)])]), top3:a.action([a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(999, [a.fire(a.direction(-11, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, L, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, 
  L, a.offsetX(0), a.offsetY(-16)), g(10)])]), top4:a.action([a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(999, [a.fire(a.direction(-9, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), g(10)])]), top4:a.action([a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), 
  a.repeat(999, [a.fire(a.direction(-5, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), l, E, a.offsetX(0), a.offsetY(-16)), g(10)])])});
  gls2.fa["aliceLeaf-1"] = new N.ha({top0:a.action([a.repeat(999, [a.repeat(1, [d(3, -10, 10, p, w, a.offsetX(0), a.offsetY(0)), d(3, -10, 10, p, B, a.offsetX(10), a.offsetY(-10)), d(3, -10, 10, p, B, a.offsetX(10), a.offsetY(-20)), d(3, -10, 10, p, B, a.offsetX(20), a.offsetY(-10)), d(3, -10, 10, p, B, a.offsetX(10), a.offsetY(10)), d(3, -10, 10, p, B, a.offsetX(10), a.offsetY(20)), d(3, -10, 10, p, B, a.offsetX(20), a.offsetY(10)), d(3, -10, 10, p, B, a.offsetX(-10), a.offsetY(-10)), d(3, -10, 
  10, p, B, a.offsetX(-10), a.offsetY(-20)), d(3, -10, 10, p, B, a.offsetX(-20), a.offsetY(-10)), d(3, -10, 10, p, B, a.offsetX(-10), a.offsetY(10)), d(3, -10, 10, p, B, a.offsetX(-10), a.offsetY(20)), d(3, -10, 10, p, B, a.offsetX(-20), a.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["aliceLeaf-1Expert"] = new N.ha({top0:a.action([a.repeat(999, [a.repeat(1, [d(3, -20, 20, p, w, a.offsetX(0), a.offsetY(0)), d(3, -20, 20, p, B, a.offsetX(10), a.offsetY(-10)), d(3, -20, 20, p, B, a.offsetX(10), a.offsetY(-20)), d(3, -20, 20, p, B, a.offsetX(20), a.offsetY(-10)), d(3, -20, 20, p, B, a.offsetX(10), a.offsetY(10)), d(3, -20, 20, p, B, a.offsetX(10), a.offsetY(20)), d(3, -20, 20, p, B, a.offsetX(20), a.offsetY(10)), d(3, -20, 20, p, B, a.offsetX(-10), a.offsetY(-10)), d(3, 
  -20, 20, p, B, a.offsetX(-10), a.offsetY(-20)), d(3, -20, 20, p, B, a.offsetX(-20), a.offsetY(-10)), d(3, -20, 20, p, B, a.offsetX(-10), a.offsetY(10)), d(3, -20, 20, p, B, a.offsetX(-10), a.offsetY(20)), d(3, -20, 20, p, B, a.offsetX(-20), a.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["aliceLeaf-2"] = new N.ha({top0:a.action([a.wait(30), a.repeat(999, [a.repeat(1, [d(3, -10, 10, p, B, a.offsetX(0), a.offsetY(0)), d(3, -10, 10, p, w, a.offsetX(10), a.offsetY(-10)), d(3, -10, 10, p, w, a.offsetX(10), a.offsetY(-20)), d(3, -10, 10, p, w, a.offsetX(20), a.offsetY(-10)), d(3, -10, 10, p, w, a.offsetX(10), a.offsetY(10)), d(3, -10, 10, p, w, a.offsetX(10), a.offsetY(20)), d(3, -10, 10, p, w, a.offsetX(20), a.offsetY(10)), d(3, -10, 10, p, w, a.offsetX(-10), a.offsetY(-10)), 
  d(3, -10, 10, p, w, a.offsetX(-10), a.offsetY(-20)), d(3, -10, 10, p, w, a.offsetX(-20), a.offsetY(-10)), d(3, -10, 10, p, w, a.offsetX(-10), a.offsetY(10)), d(3, -10, 10, p, w, a.offsetX(-10), a.offsetY(20)), d(3, -10, 10, p, w, a.offsetX(-20), a.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["aliceLeaf-2Expert"] = new N.ha({top0:a.action([a.wait(30), a.repeat(999, [a.repeat(1, [d(3, -15, 15, p, B, a.offsetX(0), a.offsetY(0)), d(3, -15, 15, p, w, a.offsetX(10), a.offsetY(-10)), d(3, -15, 15, p, w, a.offsetX(10), a.offsetY(-20)), d(3, -15, 15, p, w, a.offsetX(20), a.offsetY(-10)), d(3, -15, 15, p, w, a.offsetX(10), a.offsetY(10)), d(3, -15, 15, p, w, a.offsetX(10), a.offsetY(20)), d(3, -15, 15, p, w, a.offsetX(20), a.offsetY(10)), d(3, -15, 15, p, w, a.offsetX(-10), a.offsetY(-10)), 
  d(3, -15, 15, p, w, a.offsetX(-10), a.offsetY(-20)), d(3, -15, 15, p, w, a.offsetX(-20), a.offsetY(-10)), d(3, -15, 15, p, w, a.offsetX(-10), a.offsetY(10)), d(3, -15, 15, p, w, a.offsetX(-10), a.offsetY(20)), d(3, -15, 15, p, w, a.offsetX(-20), a.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["honoka-1"] = new N.ha({top0:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, J, a.offsetX(0), a.offsetY(30)), g(30), d(5, -40, 40, l, J, a.offsetX(0), a.offsetY(30)), g(30)])]), top1:a.action([a.wait(60), a.repeat(5, [d(2, -2, 2, r(0.6), t), d(3, -3, 3, r(1), t), d(4, -4, 4, r(1.4), t), d(5, -5, 5, r(1.8), t), g(110)])]), top2:a.action([a.repeat(20, [b(12, -10, -170, l, B, a.offsetX(-110), a.offsetY(-70)), g(30)])]), top3:a.action([a.repeat(20, [b(12, 10, 170, l, B, a.offsetX(110), 
  a.offsetY(-70)), g(30)])])});
  gls2.fa["honoka-1Expert"] = new N.ha({top0:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, J, a.offsetX(0), a.offsetY(30)), g(30), d(5, -40, 40, l, J, a.offsetX(0), a.offsetY(30)), g(30)])]), top1:a.action([a.wait(60), a.repeat(5, [d(2, -2, 2, r(0.6), t), d(3, -3, 3, r(1), t), d(4, -4, 4, r(1.4), t), d(5, -5, 5, r(1.8), t), d(2, -17, -13, r(0.6), t), d(3, -18, -12, r(1), t), d(4, -19, -11, r(1.4), t), d(5, -20, -10, r(1.8), t), d(2, 13, 17, r(0.6), t), d(3, 12, 18, r(1), t), d(4, 11, 19, r(1.4), 
  t), d(5, 10, 20, r(1.8), t), g(110)])]), top2:a.action([a.repeat(20, [b(12, -10, -170, l, B, a.offsetX(-110), a.offsetY(-70)), g(30)])]), top3:a.action([a.repeat(20, [b(12, 10, 170, l, B, a.offsetX(110), a.offsetY(-70)), g(30)])])});
  gls2.fa["nagisa-1-1"] = new N.ha({top0:a.action([g(90), a.repeat(3, [a.la("way", "5 + $loop.index*6"), c(q, 0.01, "3 + $loop.index*2", function(b) {
    return a.action([d("$way", -110, 110, b, t, a.offsetX(-190), a.offsetY(-20)), d("$way", -110, 110, b, t, a.offsetX(190), a.offsetY(-20)), a.wait(10)])
  }), g(60)]), g(60)])});
  gls2.fa["nagisa-1-2"] = new N.ha({top0:a.action([a.repeat(12, [d(15, -90, 90, l, t), g(40)])]), top1:a.action([a.repeat(3, [a.repeat(3, [d(5, -65, -55, r, B, a.offsetX(-190), a.offsetY(-20)), d(5, -35, -25, r, B, a.offsetX(-190), a.offsetY(-20)), d(5, -5, 5, r, B, a.offsetX(-190), a.offsetY(-20)), d(5, 25, 35, r, B, a.offsetX(-190), a.offsetY(-20)), d(5, 55, 65, r, B, a.offsetX(-190), a.offsetY(-20)), a.wait(2)]), g(60), a.repeat(3, [d(5, -65, -55, r, B, a.offsetX(190), a.offsetY(-20)), d(5, -35, 
  -25, r, B, a.offsetX(190), a.offsetY(-20)), d(5, -5, 5, r, B, a.offsetX(190), a.offsetY(-20)), d(5, 25, 35, r, B, a.offsetX(190), a.offsetY(-20)), d(5, 55, 65, r, B, a.offsetX(190), a.offsetY(-20)), a.wait(2)]), g(60)])])});
  gls2.fa["nagisa-1-3"] = new N.ha({top0:a.action([g(60), a.repeat(3, [a.fire(a.direction(-60), r, z, a.offsetX(-190), a.offsetY(-20)), a.repeat(20, [g(15), a.fire(a.direction(6, "sequence"), r, z, a.offsetX(-190), a.offsetY(-20))])])]), top1:a.action([g(80), a.repeat(3, [a.fire(a.direction(60), r, z, a.offsetX(190), a.offsetY(-20)), a.repeat(20, [g(15), a.fire(a.direction(-6, "sequence"), r, z, a.offsetX(190), a.offsetY(-20))])])]), top2:a.action([a.repeat(6, [a.repeat(3, [d(5, -60, -40, r, J, a.offsetX(-190), 
  a.offsetY(-20)), d(5, -20, -10, r, J, a.offsetX(-190), a.offsetY(-20)), d(5, 10, 20, r, J, a.offsetX(-190), a.offsetY(-20)), d(5, 40, 60, r, J, a.offsetX(-190), a.offsetY(-20)), a.wait(4)]), g(60), a.repeat(3, [d(5, -60, -40, r, J, a.offsetX(190), a.offsetY(-20)), d(5, -20, -10, r, J, a.offsetX(190), a.offsetY(-20)), d(5, 10, 20, r, J, a.offsetX(190), a.offsetY(-20)), d(5, 40, 60, r, J, a.offsetX(190), a.offsetY(-20)), a.wait(4)]), g(60)])])});
  gls2.fa["nagisa-2-1"] = new N.ha({top0:a.action([g(120), a.repeat(36, [b(6, "+$loop.index*10", "+$loop.index*10 + 360", l, C, a.offsetX(-190), a.offsetY(-20)), b(6, "-$loop.index*10", "-$loop.index*10 + 360", l, C, a.offsetX(190), a.offsetY(-20)), g(10)])]), top1:a.action([g(120), a.repeat(30, [b(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, K), b(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, K), g(12)])])});
  gls2.fa["nagisa-2-2"] = new N.ha({top0:a.action([g(120), a.repeat(30, [b(4, "+$loop.index*5", "+$loop.index*5 + 270", q, K), g(12)])]), top1:a.action([g(120), a.repeat(6, [b(9, 150, 130, l(0.8), t), b(9, 172, 188, l(0.8), t), b(9, 210, 230, l(0.8), t), g(50), b(9, 170, 150, l(0.8), t), b(9, 190, 210, l(0.8), t), g(50)])])});
  gls2.fa["nagisa-2-3"] = new N.ha({top:a.action([g(120), a.repeat(12, [b(23, 0, 360, l, J, a.offsetX(-190), a.offsetY(-20)), b(23, 0, 360, l, J), b(23, 0, 360, l, J, a.offsetX(190), a.offsetY(-20)), g(30)])])});
  gls2.fa["nagisa-3-1"] = new N.ha({top0:a.action([g(50), a.repeat(999, [c(q, 0.001, 5, function(b) {
    return a.action([d(41, "-180", "+180", b, v, a.offsetX(-190), a.offsetY(-20)), d(41, "-180", "+180", b, v, a.offsetX(190), a.offsetY(-20))])
  }), g(50)])]), top1:a.action([a.repeat(999, [d(2, -2, 0, p, t), g(10), d(2, 0, 2, p, t), g(150)])])});
  gls2.fa["mai-1"] = new N.ha({top0:a.action([g(50), a.repeat(50, [a.la("from", "+Math.cos($loop.index*0.15)*40-170"), b(3, "$from", "$from+60", D, s(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, C), a.va]))), a.la("from", "-Math.cos($loop.index*0.15)*40-10"), b(3, "$from", "$from-60", D, s(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, C), a.va]))), g(8)])]), top1:a.action([g(50), a.repeat(12, [b(5, -50, 50, D, s(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, 
  K), a.va]))), b(5, -230, -130, D, s(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, K), a.va]))), g(16), b(6, -50, 50, D, s(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, K), a.va]))), b(6, -230, -130, D, s(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, K), a.va]))), g(16)])])});
  gls2.fa["mai-2"] = new N.ha({top:a.action([g(50), a.repeat(15, [a.fire(a.direction(-10), v(a.ga("fireChild", "$loop.index*10"))), g(8)])]), fireChild:a.action([g("40+$1"), c(r, 0.1, 5, function(b) {
    return a.fire(a.direction(-90, "absolute"), b, z)
  }), a.va])});
  gls2.fa["saki-1-1"] = new N.ha({top:a.action([g(100), a.repeat(3, [a.ga("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:a.action([a.la("way", "$1"), a.repeat("10", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", q, C), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", q, C), g(12)]), a.repeat("$2", [d(9, -20, 20, p, G)])])});
  gls2.fa["saki-1-2"] = new N.ha({top:a.action([g(100), a.repeat(5, [a.la("way", "5+$loop.index*2"), a.repeat(6, [a.la("s", "$loop.index*0.6"), a.action(function() {
    for(var b = [], c = 0;5 > c;c++) {
      b.push(d("$way", -30, 30, q("$s"), K, a.offsetX(-120 + 60 * c)))
    }
    return b
  }())]), g(90)])])});
  gls2.fa["saki-1-3"] = new N.ha({top:a.action([a.la("dir", "$rand < 0.5 ? -1 : 1"), a.repeat(24, [a.fire(a.direction("120*$dir + $loop.index*10*-$dir"), a.speed(2), K(a.ga("seed"))), g(8)]), g(60)]), seed:a.action([a.wait(10), a.pd(a.speed(0), 50), a.wait(90), d(13, 0, 360 - 360 / 13, r, G), a.va])});
  gls2.fa["saki-2-1"] = new N.ha({top0:a.action([g(100), a.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, C, a.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, C, a.offsetX(40)), g(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, C, a.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, C, a.offsetX(40)), g(60)])]), top1:a.action([g(100), a.repeat(4, [a.repeat(7, [a.la("o", "$loop.index*20 - 60"), a.fire(a.direction("$o"), 
  F, G), a.repeat(4, [a.la("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", F("$w*-1.0"), G)])]), g(120)])])});
  gls2.fa["saki-2-2"] = new N.ha({top:a.action([g(60), a.la("dir", "$rand < 0.5 ? -1 : 1"), a.repeat(12, [a.fire(a.direction("120*$dir + $loop.index*10*-$dir"), a.speed(2), v(a.ga("seed"))), g(8), a.fire(a.direction("120*-$dir + $loop.index*10*$dir"), a.speed(2), v(a.ga("seed"))), g(8)]), g(60)]), seed:a.action([a.wait(10), a.pd(a.speed(0), "10 + $rand*15"), a.wait(65), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-48), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-36), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-24), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-12), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(0), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(12), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(24), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(36), b, z)])
  }), c(q, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(48), b, z)])
  }), g(2), a.va])});
  gls2.fa["saki-2-3"] = new N.ha({top:a.action([g(60), a.la("dir", "$rand < 0.5 ? -1 : 1"), a.repeat(24, [a.fire(a.direction("120*$dir + $loop.index*10*-$dir"), a.speed(2), K(a.ga("seed"))), g(8), a.fire(a.direction("120*-$dir + $loop.index*10*$dir"), a.speed(2), K(a.ga("seed"))), g(8)]), g(60)]), seed:a.action([a.wait(10), a.pd(a.speed(0), "10 + $rand*20"), a.wait(65), c(q, 0.18, 7, function(b) {
    return a.action([a.fire(a.direction(180, "absolute"), b, G)])
  }), g(2), a.va])});
  gls2.fa["saki-3-1"] = new N.ha({top:a.action([a.fire(a.direction(180, "absolute"), l, v(a.ga("seed0")), a.offsetX(-100)), a.fire(a.direction(180, "absolute"), l, v(a.ga("seed1")), a.offsetX(100)), g(120)]), seed0:a.action([a.fire(a.direction(20, "absolute"), l(0.1), C), a.repeat(999, [a.fire(a.direction(72, "sequence"), l(0.1), C), a.fire(a.direction(72, "sequence"), l(0.1), C), a.fire(a.direction(72, "sequence"), l(0.1), C), a.fire(a.direction(72, "sequence"), l(0.1), C), g(10), a.fire(a.direction(92, 
  "sequence"), l(0.1), C)])]), seed1:a.action([a.fire(a.direction(-20, "absolute"), l(0.1), C), a.repeat(999, [a.fire(a.direction(72, "sequence"), l(0.1), C), a.fire(a.direction(72, "sequence"), l(0.1), C), a.fire(a.direction(72, "sequence"), l(0.1), C), a.fire(a.direction(72, "sequence"), l(0.1), C), g(10), a.fire(a.direction(52, "sequence"), l(0.1), C)])])});
  gls2.fa["saki-3-2"] = new N.ha({top:a.action([a.fire(a.direction(180, "absolute"), l, K(a.ga("seed1")), a.offsetX(-120)), a.fire(a.direction(180, "absolute"), l, K(a.ga("seed0")), a.offsetX(120)), g(120)]), seed0:a.action([a.fire(a.direction(20, "absolute"), l(0.1), t), a.repeat(999, [a.fire(a.direction(72, "sequence"), l(0.1), t), a.fire(a.direction(72, "sequence"), l(0.1), t), a.fire(a.direction(72, "sequence"), l(0.1), t), a.fire(a.direction(72, "sequence"), l(0.1), t), g(10), a.fire(a.direction(92, 
  "sequence"), l(0.1), t)])]), seed1:a.action([a.fire(a.direction(-20, "absolute"), l(0.1), t), a.repeat(999, [a.fire(a.direction(72, "sequence"), l(0.1), t), a.fire(a.direction(72, "sequence"), l(0.1), t), a.fire(a.direction(72, "sequence"), l(0.1), t), a.fire(a.direction(72, "sequence"), l(0.1), t), g(10), a.fire(a.direction(52, "sequence"), l(0.1), t)])])});
  gls2.fa["rikka-1"] = new N.ha({top:a.action([a.repeat(5, [a.la("s", "$loop.index*1.5"), g(30), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, z, q("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, z, q("$s"), a.offsetX(90), a.offsetY(-20)), g(3), d(33, -180 + 180 / 33 / 2 - 1, 180 - 180 / 33 / 2 - 1, z, q("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -179, 180 - 180 / 33 / 2 + 1, z, q("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, -180 + 
  180 / 33 / 2 - 1, 180 - 180 / 33 / 2 - 1, z, q("$s"), a.offsetX(90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -179, 180 - 180 / 33 / 2 + 1, z, q("$s"), a.offsetX(90), a.offsetY(-20)), g(3), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, z, q("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, z, q("$s"), a.offsetX(90), a.offsetY(-20))])])});
  gls2.fa["rikka-2"] = new N.ha({top0:a.action([a.repeat(10, [a.fire(v(a.ga("snow")), a.offsetX(-90), a.offsetY(-20)), a.fire(v(a.ga("snow")), a.offsetX(90), a.offsetY(-20)), g(8)]), g(60)]), top1:a.action([a.repeat(35, [a.la("dir", "$loop.index*-20"), a.la("spd", "($loop.index+1)*0.2"), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(1), s(a.ga("ivs1", "$dir", "$spd")))]), g(5), a.fire(a.direction("360/6 + 30", "sequence"), a.speed(1), s(a.ga("ivs1", "$dir", "$spd")))]), a.repeat(35, [a.la("dir", 
  "$loop.index*+20"), a.la("spd", "($loop.index+1)*0.2"), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(1), s(a.ga("ivs1", "$dir", "$spd")))]), g(5), a.fire(a.direction("360/6 - 30", "sequence"), a.speed(1), s(a.ga("ivs1", "$dir", "$spd")))])]), snow:a.action([a.repeat("3+$ex*3", [a.la("s", "$loop.index+1"), a.fire(a.direction(0, "absolute"), a.speed("$s"), s(a.ga("snowArm"))), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed("$s"), s(a.ga("snowArm")))])]), a.va]), snowArm:a.action([a.wait(2), 
  a.fire(a.direction(0), p, v), a.va]), ivs1:a.action([a.wait(10), a.fire(a.direction("$1-1", "relative"), q("$2"), I), a.fire(a.direction("$1+1", "relative"), q("$2"), I), a.va()])});
  gls2.fa["rikka-3"] = new N.ha({top0:a.action([g(40), a.fire(a.direction(-10), s(a.ga("dummy")), a.offsetX(-90), a.offsetY(-20)), a.repeat(12, [a.fire(a.direction(10, "sequence"), P("$loop.index*0.5"), z, a.offsetX(-90), a.offsetY(-20)), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), z, a.offsetX(-90), a.offsetY(-20))]), g(5)]), g(120)]), top1:a.action([g(40), a.fire(a.direction(-10), s(a.ga("dummy")), a.offsetX(90), a.offsetY(-20)), a.repeat(12, [a.fire(a.direction(10, 
  "sequence"), P("$loop.index*0.5"), z, a.offsetX(90), a.offsetY(-20)), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), z, a.offsetX(90), a.offsetY(-20))]), g(5)]), g(120)]), dummy:a.action([a.wait(1), a.va])});
  gls2.fa["mana-1-1"] = new N.ha({top0:a.action([a.ga("winder", -1)]), top1:a.action([a.ga("winder", 1)]), winder:a.action([a.wait(60), a.repeat(8, [a.fire(a.direction("(-190+$loop.index*30)*$1"), q, Q, a.offsetX("-145*$1"), a.offsetY(-5))]), a.repeat(50, [g(20), a.la("a", "$loop.index*3"), a.repeat(8, [a.fire(a.direction("(-190+$a+$loop.index*30)*$1"), q, Q, a.offsetX("-145*$1"), a.offsetY(-5))])])]), top2:a.action([a.wait(60), g(300), a.repeat(7, [a.la("s", "$loop.index"), a.repeat(5, [a.la("ss", 
  "($s-$loop.index)*0.5"), d(25, -172.8, 172.8, p("$ss"), G, a.offsetX(-30), a.offsetY(-30))]), g(5), a.repeat(5, [a.la("ss", "($s-$loop.index)*0.5"), d(25, -172.8, 172.8, p("$ss"), G, a.offsetX(30), a.offsetY(-30))]), g(20), a.repeat(5, [a.la("ss", "($s-$loop.index)*0.5"), b(26, -180 + 360 / 26 / 2, 180 - 360 / 26 / 2, F("$ss"), z, a.offsetX(30), a.offsetY(-30))]), g(5), a.repeat(5, [a.la("ss", "($s-$loop.index)*0.5"), b(26, -180 + 360 / 26 / 2, 180 - 360 / 26 / 2, F("$ss"), z, a.offsetX(-30), a.offsetY(-30))]), 
  g(80)])])});
  gls2.fa["mana-1-2"] = new N.ha({top:a.action([a.repeat(5, [a.la("i", "$loop.index"), a.la("j", "1/($i+1) * 4"), a.la("k", "6+$i*3"), c(q("$k"), 0.02, "4+$loop.index*3", function(b) {
    return a.action([a.fire(a.direction("(12-$i)*(-3*$j)"), b, z, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-2*$j)"), b, z, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-1*$j)"), b, G, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*( 0*$j)"), b, z, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+1*$j)"), b, G, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+2*$j)"), b, z, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+3*$j)"), 
    b, z, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-3*$j)"), b, z, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-2*$j)"), b, z, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-1*$j)"), b, G, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*( 0*$j)"), b, z, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+1*$j)"), b, G, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+2*$j)"), b, z, a.offsetX(145), a.offsetY(-50)), 
    a.fire(a.direction("(12-$i)*(+3*$j)"), b, z, a.offsetX(145), a.offsetY(-50)), g(5)])
  }), g(30)])])});
  gls2.fa["mana-1-3"] = new N.ha({top0:a.action([g(20), a.ga("fire", -145)]), top1:a.action([g(40), a.ga("fire", 145)]), top2:a.action([a.repeat(8, [g(30), a.la("d", "-3*($rand*2-1)"), a.la("s", "$loop.index*2"), a.fire(a.direction("$d"), s(a.ga("dmy"))), a.fire(a.direction(0, "sequence"), F("$s"), Q), a.repeat(5, [a.wait(5), a.la("way", "$loop.index+2"), a.fire(a.direction("-$way*0.8*0.5", "sequence"), F("$s"), Q), a.repeat("$way", [a.fire(a.direction(0.8, "sequence"), F("$s"), Q)]), a.fire(a.direction("-$way*0.8*0.5", 
  "sequence"), s(a.ga("dmy")))])])]), fire:a.action([a.repeat(8, [d(36, -175, 175, r, z, a.offsetX("$1"), a.offsetY(-50)), g(50)])]), dmy:a.action([a.wait(1), a.va()])});
  gls2.fa["mana-2-1"] = new N.ha({top0:a.action([a.repeat(60, [a.la("d", "Math.sin($loop.index*0.3)*40"), a.la("s", "$loop.index*0.2"), d(7, "-90+$d", "+90+$d", q("$s"), K, a.offsetX(-145), a.offsetY(-50)), g(5)]), a.repeat(60, [a.la("d", "Math.sin($loop.index*0.3)*40"), a.la("s", "$loop.index*0.2"), d(7, "-90-$d", "+90-$d", q("$s"), K, a.offsetX(145), a.offsetY(-50)), g(5)])])});
  gls2.fa["mana-2-2"] = new N.ha({top0:a.action([a.repeat(5, [d(15, -90, 90, q(2), z, a.offsetX(-145), a.offsetY(-50)), g(20), d(15, -90, 90, q(2), G, a.offsetX(145), a.offsetY(-50)), g(20), d(14, -90, 90, q(6), z, a.offsetX(-145), a.offsetY(-50)), g(20), d(14, -90, 90, q(6), G, a.offsetX(145), a.offsetY(-50)), g(20)])]), top1:a.action([a.repeat(15, [g(13), d(15, -90, 90, p(3), J), g(10), d(16, -90, 90, p(1), J), g(11), d(10, -90, 90, p(2), J)])]), top2:a.action([a.fire(a.direction(20), D(3), Q, 
  a.offsetX(-145), a.offsetY(-50)), a.repeat(100, [a.fire(a.direction(0, "sequence"), D(3), Q, a.offsetX(-145), a.offsetY(-50)), g(5)])]), top3:a.action([a.fire(a.direction(-20), D(3), I, a.offsetX(145), a.offsetY(-50)), a.repeat(100, [a.fire(a.direction(0, "sequence"), D(3), I, a.offsetX(145), a.offsetY(-50)), g(5)])])});
  gls2.fa["mana-2-3"] = new N.ha({top0:a.action([a.repeat(30, [a.la("ptn", "[41, 35, 27, 15, 11][Math.floor($loop.index/5) % 5]"), a.fire(a.direction(180, "absolute"), a.speed(3), L(a.ga("child", "$ptn")), a.offsetX(-185), a.offsetY(-50)), a.fire(a.direction(180, "absolute"), a.speed(3), L(a.ga("child", "$ptn")), a.offsetX(185), a.offsetY(-50)), g(20)])]), child:a.action([a.repeat(999, [a.wait("$1"), a.repeat(8, [a.fire(a.direction("360*$loop.index/8", "absolute"), D, s(a.ga("ring"))), a.fire(a.direction("360*$loop.index/8", 
  "absolute"), D, s(a.ga("ring")))])])]), ring:a.action([a.wait(2), a.fire(a.direction(90, "absolute"), q, J), a.fire(a.direction(-90, "absolute"), q, J), a.va])});
  gls2.fa["mana-3-1"] = new N.ha({top0:a.action([a.repeat(999, [g(20), a.la("w", "5+$rand*15"), d("$w", -90, 90, l, J, a.offsetX(-145), a.offsetY(-50)), d("$w", -90, 90, l, J, a.offsetX(145), a.offsetY(-50))])]), top1:a.action([a.repeat(999, [a.repeat(3, [g(43), d(12, -25, -15, p, I), d(12, -5, 5, p, I), d(12, 15, 25, p, I)]), g(55)])])});
  gls2.fa.kanade = new N.ha({top0:a.action([a.repeat(999, [a.repeat(13, [a.fire(a.direction(360 / 14, "sequence"), a.speed(2), s(a.ga("ivs0", -110)), a.offsetY(-350))]), g(20), a.fire(a.direction(360 / 14 - 3, "sequence"), a.speed(2), s(a.ga("ivs0", -110)), a.offsetY(-350))])]), top1:a.action([a.repeat(999, [a.repeat(11, [a.fire(a.direction(30, "sequence"), a.speed(2), s(a.ga("ivs0", 110)), a.offsetY(-350))]), g(20), a.fire(a.direction(36, "sequence"), a.speed(2), s(a.ga("ivs0", 110)), a.offsetY(-350))])]), 
  ivs0:a.action([a.wait(5), a.fire(a.direction("$1", "relative"), l, E), a.va()]), top2:a.action([a.repeat(999, [d(3, -12, 12, l, z, a.offsetY(-350)), d(3, 78, 102, l, z, a.offsetY(-350)), d(3, 168, 192, l, z, a.offsetY(-350)), d(3, 258, 282, l, z, a.offsetY(-350)), g(114)])]), top3:a.action([a.repeat(999, [d(3, -3, 3, q, Q, a.offsetY(-350)), g(91)])])});
  gls2.fa.rery = new N.ha({top:a.action([g("$rand*120"), a.repeat(999, [g(180), a.repeat(10, [a.fire(a.direction(-90), a.speed(2), s(a.ga("fire", 90, "$loop.index"))), a.fire(a.direction(90), a.speed(2), s(a.ga("fire", -90, "$loop.index")))])])]), fire:a.action([a.wait(3), a.fire(a.direction("$1", "relative"), p("$2*0.25"), G), a.va()])});
  gls2.fa.fary = new N.ha({top:a.action([g("$rand*120"), a.repeat(999, [g(120), a.repeat(3, [d(3, -30, 30, q, t), g(15)])])])});
  gls2.fa.sory = new N.ha({top:a.action([a.la("d", "$rand<0.5 ? -5 : 5"), a.la("s", "1+$rand*0.5"), a.repeat(999, [a.fire(a.direction("360/8+$d*$s", "sequence"), a.speed(2), s(a.ga("fire"))), a.repeat(3, [a.fire(a.direction(90, "sequence"), a.speed(2), s(a.ga("fire")))]), g(60)])]), fire:a.action([a.wait(2), a.fire(a.direction(0, "relative"), l, J), a.va()])});
  gls2.fa.lary = new N.ha({top0:a.action([a.fire(a.direction(0, "absolute"), a.speed(1), s(a.ga("fire"))), a.repeat(999, [g(10), a.fire(a.direction(98, "sequence"), a.speed(1), s(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), s(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), s(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), s(a.ga("fire")))])]), top1:a.action([a.fire(a.direction(47, "absolute"), a.speed(1), s(a.ga("fire"))), a.repeat(999, [g(10), a.fire(a.direction(76, 
  "sequence"), a.speed(1), s(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), s(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), s(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), s(a.ga("fire")))])]), fire:a.action([a.wait(5), a.fire(a.direction(-1, "relative"), r, I), a.fire(a.direction(1, "relative"), r, I), a.va()])});
  gls2.fa.shiry = new N.ha({top0:a.action([a.repeat(999, [a.la("d", "$loop.index*-6"), a.repeat(23, [a.fire(a.direction(15, "sequence"), a.speed(1), s(a.ga("ivs0", "$d")))]), g(30), a.fire(a.direction(16, "sequence"), a.speed(1), s(a.ga("ivs0", "$d")))])]), ivs0:a.action([a.wait(5), a.fire(a.direction("$1", "relative"), r, K), a.va()])});
  gls2.fa.dodory = new N.ha({top:a.action([g("$rand*40"), a.repeat(999, [g(30), c(p, -0.1, 3, function(b) {
    return a.action([a.fire(b, C)])
  })])])});
  gls2.fa["hibiki-1-1a"] = new N.ha({top0:a.action([g(60), a.repeat(100, [a.la("d", "Math.sin($loop.index*0.3)*30"), a.fire(a.direction(2, "sequence"), P, s(a.ga("dummy"))), a.repeat(6, [a.fire(a.direction(30, "sequence"), a.speed(5), s(a.ga("ivsR", "$d")), a.offsetY(-25)), a.fire(a.direction(30, "sequence"), a.speed(5), s(a.ga("ivsB", "$d")), a.offsetY(-25))]), g(4)])]), dummy:a.action([a.wait(1), a.va()]), ivsR:a.action([a.wait(1), a.fire(a.direction("$1", "relative"), q, E), a.va()]), ivsB:a.action([a.wait(1), 
  a.fire(a.direction("$1", "relative"), q, L), a.va()]), top1:a.action([g(60), g(120), a.repeat(3, [d(3, -45, -35, l(0.8), I, a.offsetY(-25)), d(3, -25, -15, l(0.8), I, a.offsetY(-25)), d(3, -5, 5, l(0.8), I, a.offsetY(-25)), d(3, 15, 25, l(0.8), I, a.offsetY(-25)), d(3, 35, 45, l(0.8), I, a.offsetY(-25)), g(40), d(3, -55, -45, l(0.8), I, a.offsetY(-25)), d(3, -35, -25, l(0.8), I, a.offsetY(-25)), d(3, -15, -5, l(0.8), I, a.offsetY(-25)), d(3, 5, 15, l(0.8), I, a.offsetY(-25)), d(3, 25, 35, l(0.8), 
  I, a.offsetY(-25)), d(3, 45, 55, l(0.8), I, a.offsetY(-25)), g(40)])])});
  gls2.fa["hibiki-1-1b"] = new N.ha({top0:a.action([a.repeat(100, [a.la("d", "Math.sin($loop.index*0.3)*30"), a.fire(a.direction(2, "sequence"), P, s(a.ga("dummy"))), a.repeat(12, [a.fire(a.direction(15, "sequence"), a.speed(5), s(a.ga("ivsR", "$d")), a.offsetY(-25)), a.fire(a.direction(15, "sequence"), a.speed(5), s(a.ga("ivsB", "$d")), a.offsetY(-25))]), g(4)])]), dummy:a.action([a.wait(1), a.va()]), ivsR:a.action([a.wait(1), a.fire(a.direction("$1", "relative"), q, E), a.va()]), ivsB:a.action([a.wait(1), 
  a.fire(a.direction("$1", "relative"), q, L), a.va()]), top1:a.action([g(120), a.repeat(3, [d(5, -45, -35, l(0.8), I, a.offsetX(-110), a.offsetY(-70)), d(5, -25, -15, l(0.8), I, a.offsetX(-110), a.offsetY(-70)), d(5, -5, 5, l(0.8), I, a.offsetX(-110), a.offsetY(-70)), d(5, 15, 25, l(0.8), I, a.offsetX(-110), a.offsetY(-70)), d(5, 35, 45, l(0.8), I, a.offsetX(-110), a.offsetY(-70)), g(40), d(5, -45, -35, l(0.8), I, a.offsetX(110), a.offsetY(-70)), d(5, -25, -15, l(0.8), I, a.offsetX(110), a.offsetY(-70)), 
  d(5, -5, 5, l(0.8), I, a.offsetX(110), a.offsetY(-70)), d(5, 15, 25, l(0.8), I, a.offsetX(110), a.offsetY(-70)), d(5, 35, 45, l(0.8), I, a.offsetX(110), a.offsetY(-70)), g(40)])])});
  gls2.fa["hibiki-1-2"] = new N.ha({top0:a.action([g(30), a.fire(a.direction(-20), a.speed(5), s(a.ga("ivs")), a.offsetY(-25)), a.repeat(210, [a.la("rs", "Math.sin(Math.PI*2 * $loop.index/300 * 1.5)*16"), a.repeat(9, [a.fire(a.direction(36, "sequence"), a.speed(8), s(a.ga("ivs")), a.offsetY(-25))]), a.fire(a.direction("360/10+$rs", "sequence"), a.speed(8), s(a.ga("ivs")), a.offsetY(-25)), g(8)])]), ivs:a.action([a.wait(1), a.fire(a.direction(90, "relative"), p, K), a.va()]), top1:a.action([g(120), 
  a.repeat(24, [a.la("s", "$loop.index*0.5"), d(39, -150.74, 148.74, r("$s"), I, a.offsetX(-110), a.offsetY(-70)), d(39, -149.74, 149.74, r("$s"), I, a.offsetX(-110), a.offsetY(-70)), d(39, -148.74, 150.74, r("$s"), I, a.offsetX(-110), a.offsetY(-70)), d(39, -150.74, 148.74, r("$s"), I, a.offsetX(110), a.offsetY(-70)), d(39, -149.74, 149.74, r("$s"), I, a.offsetX(110), a.offsetY(-70)), d(39, -148.74, 150.74, r("$s"), I, a.offsetX(110), a.offsetY(-70)), g(60)])])});
  gls2.fa["hibiki-1-3a"] = new N.ha({top0:a.action([g(30), a.repeat(90, [a.la("d", "2+(1-$loop.index/90)*60"), a.la("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), g(6)])]), top1:a.action([g(41), a.repeat(80, [a.la("d", "2+(1-$loop.index/80)*60"), 
  a.la("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), p("$s"), t, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), p("$s"), t, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), p("$s"), t, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), p("$s"), t, a.offsetX(110), a.offsetY(-70)), g(6)])]), top2:a.action([g(53), a.repeat(70, [a.la("d", "2+(1-$loop.index/70)*60"), a.la("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), 
  a.fire(a.direction("-$d*1"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), p("$s"), t, a.offsetX(-110), a.offsetY(-70)), g(6)])]), top3:a.action([a.repeat(12, [g(23), a.la("r", "Math.floor($rand*5)"), c(q, 0.1, 7, function(b) {
    return a.action([a.fire(a.direction(0), b, z, a.offsetX("[-110, -60, 0, 60, -110][$r]"), a.offsetY("[-70, -20, 0, -20, -70][$r]")), g(2)])
  })])])});
  gls2.fa["hibiki-1-3b"] = new N.ha({top0:a.action([g(30), a.repeat(45, [a.la("d", "-30+$loop.index*2"), a.la("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), q("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), q("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), q("$s"), t, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), q("$s"), t, a.offsetX(-110), a.offsetY(-70)), g(12)])]), top1:a.action([g(41), a.repeat(40, [a.la("d", "-30+$loop.index*2"), 
  a.la("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), q("$s"), t, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), q("$s"), t, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), q("$s"), t, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), q("$s"), t, a.offsetX(110), a.offsetY(-70)), g(12)])]), top3:a.action([a.repeat(12, [g(23), a.la("r", "Math.floor($rand*5)"), c(q, 0.1, 7, function(b) {
    return a.action([a.fire(a.direction(0), b, z, a.offsetX("[-110, -60, 0, 60, -110][$r]"), a.offsetY("[-70, -20, 0, -20, -70][$r]")), g(2)])
  })])])});
  gls2.fa["hibiki-2-1"] = new N.ha({top0:a.action([g(90), a.repeat(7, [g(40), a.fire(r, s(a.ga("bit", "5+$loop.index", "$loop.index*2")), a.offsetX(-110), a.offsetY(-70)), g(40)])]), top1:a.action([g(90), a.repeat(7, [g(80), a.fire(r, s(a.ga("bit", "5+$loop.index", "$loop.index*2")), a.offsetX(110), a.offsetY(-70))])]), bit:a.action([a.wait(5), a.ga("way", "$1", "$2"), a.va()]), way:a.action([a.fire(a.direction(30), q("$2"), s(a.ga("dummy"))), a.repeat(30, [a.fire(a.direction(-60, "sequence"), q("$2"), 
  z), a.repeat("$1-1", [a.fire(a.direction("60/($1-1)", "sequence"), q("$2"), z)]), a.wait(1)])]), dummy:a.action([a.wait(1), a.va()])});
  gls2.fa["hibiki-2-2"] = new N.ha({top0:a.action([g(90), a.repeat(5, [a.repeat(8, [d(16, -110, 110, p, B), g(20)]), a.la("w", "30+$loop.index*10"), d(16, -110, 110, p, v(a.ga("bit", "$w"))), g(20)])]), bit:a.action([g("$1"), a.fire(q, G)])});
  gls2.fa["hibiki-2-3"] = new N.ha({top0:a.action([g(40), a.repeat(30, [a.la("d", "$loop.index+2"), a.la("s", "$loop.index*0.8"), d(19, "-180+180/19+$d", "+180-180/19+$d", q("$s"), v), g(17)])]), top1:a.action([g(40), a.repeat(30, [a.la("d", "$loop.index-2"), a.la("s", "$loop.index*0.8"), b(19, "-180+180/19+$d", "+180-180/19+$d", q("$s"), K), g(17)])])});
  gls2.fa["hibiki-3-1"] = new N.ha({top0:a.action([g(41), a.repeat(45, [a.la("s", "$loop.index"), a.repeat(6, [a.fire(a.direction("360/6*$loop.index"), a.speed(5), s(a.ga("ivsB", "360/6*$loop.index", "$s")), a.offsetY(-25))]), a.repeat(6, [a.fire(a.direction("360/6*$loop.index+180/6"), a.speed(5), s(a.ga("ivsR", "360/6*$loop.index+180/6", "$s")), a.offsetY(-25))]), a.wait(1)])]), ivsR:a.action([a.wait(1), a.fire(a.direction("-$1+$rand*10-5", "relative"), P("$2"), K), a.va()]), ivsB:a.action([a.wait(1), 
  a.fire(a.direction("-$1+$rand*10-5", "relative"), P("$2"), v), a.va()])});
  gls2.fa["hibiki-3-2"] = new N.ha({top0:a.action([g(90), a.repeat(3, [a.fire(a.direction(-10), F, v(a.ga("bit", "5")), a.offsetX(-110), a.offsetY(-70)), g(45), a.fire(a.direction(10), F, v(a.ga("bit", "7")), a.offsetX(110), a.offsetY(-70)), g(45), a.fire(a.direction(10), F, v(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), g(45), a.fire(a.direction(-10), F, v(a.ga("bit", "13")), a.offsetX(110), a.offsetY(-70)), g(45)]), g(45), a.fire(a.direction(-10), F, v(a.ga("bit", "17")), a.offsetX(-110), 
  a.offsetY(-70)), a.fire(a.direction(10), F, v(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(-10), F, v(a.ga("bit", "7")), a.offsetX(110), a.offsetY(-70)), a.fire(a.direction(10), F, v(a.ga("bit", "5")), a.offsetX(110), a.offsetY(-70)), g(45), a.fire(a.direction(-10), F, v(a.ga("bit", "17")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(10), F, v(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(-10), F, v(a.ga("bit", "7")), a.offsetX(110), 
  a.offsetY(-70)), a.fire(a.direction(10), F, v(a.ga("bit", "5")), a.offsetX(110), a.offsetY(-70)), g(45), a.fire(a.direction(-10), F, v(a.ga("bit", "17")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(10), F, v(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(-10), F, v(a.ga("bit", "7")), a.offsetX(110), a.offsetY(-70)), a.fire(a.direction(10), F, v(a.ga("bit", "5")), a.offsetX(110), a.offsetY(-70))]), bit:a.action([a.wait("$1"), a.repeat(999, [g(5), a.fire(a.direction(-90, 
  "relative"), q, C), a.fire(a.direction(90, "relative"), q, C)])])});
  gls2.fa.dory = new N.ha({top:a.action([a.repeat(999, [g(80), a.ga("attack0"), g(160), a.ga("attack1"), g(80)])]), attack0:a.action([a.fire(a.direction(0), a.speed(5), s(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), s(a.ga("ivs")))]), a.fire(a.direction(83, "sequence"), a.speed(5), s(a.ga("ivs")))])]), attack1:a.action([a.fire(a.direction(0), a.speed(5), s(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), 
  s(a.ga("ivs")))]), a.fire(a.direction(61, "sequence"), a.speed(5), s(a.ga("ivs")))])]), ivs:a.action([a.wait(1), a.fire(a.direction(0, "relative"), r, t), a.va()])});
  gls2.fa.miry = new N.ha({top:a.action([a.repeat(999, [g(160), a.ga("attack0"), g(160), a.ga("attack1")])]), attack0:a.action([a.fire(a.direction(0), a.speed(5), s(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), s(a.ga("ivs")))]), a.fire(a.direction(83, "sequence"), a.speed(5), s(a.ga("ivs")))])]), attack1:a.action([a.fire(a.direction(0), a.speed(5), s(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), s(a.ga("ivs")))]), 
  a.fire(a.direction(61, "sequence"), a.speed(5), s(a.ga("ivs")))])]), ivs:a.action([a.wait(1), a.fire(a.direction(0, "relative"), r, C), a.va()])});
  gls2.fa["setsuna-1"] = new N.ha({top0:a.action([a.wait(60), a.repeat(5, [d(3, -2, 2, r(1.8), C, a.offsetX(0), a.offsetX(0)), d(3, -4, 4, r(1.4), C, a.offsetX(0), a.offsetX(0)), d(3, -6, 6, r(1), C, a.offsetX(0), a.offsetX(0)), d(3, -8, 8, r(0.6), C, a.offsetX(0), a.offsetX(0)), g(110)])]), top1:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, q, K, a.offsetX(0), a.offsetY(30)), g(15), d(5, -40, 40, r, K, a.offsetX(0), a.offsetY(30)), g(15), d(6, -40, 40, l, K, a.offsetX(0), a.offsetY(30)), g(15)])])});
  gls2.fa["love-1-1"] = new N.ha({top0:a.action([g(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(17, "sequence"), l("$loop.index*0.1"), z, a.offsetX(-105), a.offsetY(0)), g(1)]), g(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-17, "sequence"), l("$loop.index*0.1"), G, a.offsetX(-105), a.offsetY(0)), g(1)]), g(120)]), top1:a.action([a.wait(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), 
  a.repeat(90, [a.fire(a.direction(11, "sequence"), l("$loop.index*0.1"), z, a.offsetX(-85), a.offsetY(0)), g(1)]), g(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-11, "sequence"), l("$loop.index*0.1"), G, a.offsetX(-85), a.offsetY(0)), g(1)])]), top2:a.action([a.wait(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-19, "sequence"), l("$loop.index*0.1"), z, a.offsetX(105), a.offsetY(0)), g(1)]), g(30), 
  a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(19, "sequence"), l("$loop.index*0.1"), G, a.offsetX(105), a.offsetY(0)), g(1)])]), top3:a.action([a.wait(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-23, "sequence"), l("$loop.index*0.1"), z, a.offsetX(85), a.offsetY(0)), g(1)]), g(30), a.fire(a.direction(-10), s, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(23, "sequence"), l("$loop.index*0.1"), 
  G, a.offsetX(85), a.offsetY(0)), g(1)])])});
  gls2.fa["love-1-2"] = new N.ha({top0:a.action([a.wait(30), a.repeat(4, [c(r, 0.01, 6, function(b) {
    return a.action([d(5, -80, 80, b, Q, a.offsetX(-85), a.offsetY(0)), d(5, -80, 80, b, Q, a.offsetX(85), a.offsetY(0)), a.wait(3)])
  }), g(90)])]), top1:a.action([a.wait(60), a.repeat(4, [c(r, 0.01, 6, function(b) {
    return a.action([d(6, -50, 50, b, I, a.offsetX(-170), a.offsetY(40)), d(6, -50, 50, b, I, a.offsetX(170), a.offsetY(40)), a.wait(3)])
  }), g(90)])]), top2:a.action([a.wait(60), a.repeat(10, [d(6, -40, 40, r, E, a.offsetX(-130), a.offsetY(30)), g(45), d(7, -40, 40, l, E, a.offsetX(-130), a.offsetY(30)), g(45)])]), top3:a.action([a.wait(60), a.repeat(10, [d(6, -40, 40, r, E, a.offsetX(130), a.offsetY(30)), g(45), d(7, -40, 40, l, E, a.offsetX(130), a.offsetY(30)), g(45)])])});
  gls2.fa["love-1-3"] = new N.ha({top0:a.action([a.wait(120), a.repeat(2, [a.repeat(5, [a.repeat(10, [a.la("c", "$loop.index*10"), d(2, "-30+$c", "30-$c", q(5), Z, a.offsetX(0), a.offsetY(0)), g(6)])]), g(120)])]), top1:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, E, a.offsetX(-130), a.offsetY(30)), g(30), d(5, -40, 40, l, E, a.offsetX(-130), a.offsetY(30)), g(30)])]), top2:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, E, a.offsetX(130), a.offsetY(30)), g(30), d(5, -40, 40, l, E, a.offsetX(130), 
  a.offsetY(30)), g(30)])])});
  gls2.fa["love-2-1"] = new N.ha({top0:a.action([a.wait(60), a.repeat(2, [a.repeat(5, [a.repeat(36, [a.fire(a.direction(" $loop.index*10"), r, v, a.offsetX(-130), a.offsetY(40)), a.fire(a.direction("-$loop.index*10"), r, v, a.offsetX(130), a.offsetY(40))]), g(12)]), g(120)])]), top1:a.action([a.wait(30), a.repeat(2, [a.repeat(5, [a.repeat(36, [a.fire(a.direction(" $loop.index*10"), l, K, a.offsetX(0), a.offsetY(-30))]), g(12)]), g(120)])])});
  gls2.fa["love-2-2"] = new N.ha({top0:a.action([a.wait(60), a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(60, [a.fire(a.direction(21, "sequence"), l, G, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), l, G, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), l, G, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), l, G, a.offsetX(-85), a.offsetY(0)), g(10)])]), top1:a.action([a.wait(60), a.fire(a.direction(0), l, C, a.offsetX(0), 
  a.ra(k)), a.repeat(60, [a.fire(a.direction(-21, "sequence"), l, G, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), l, G, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), l, G, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), l, G, a.offsetX(85), a.offsetY(0)), g(10)])]), top9:a.action([a.wait(200), a.repeat(5, [a.repeat(36, [a.fire(a.direction("$loop.index*10"), a.speed(1), s(a.ga("seed")))]), g(120)])]), seed:a.action([a.wait(10), a.pd(a.speed(0), 
  30), a.wait(30), d(5, -40, 40, r, Z), a.va])});
  gls2.fa["love-2-3"] = new N.ha({top8:a.action([a.wait(120), a.repeat(3, [a.repeat(5, [a.fire(a.direction("-$loop.index*30", "absolute"), l, v(a.ga("seed1")), a.offsetX(-130), a.offsetY(40)), g(6), a.fire(a.direction("-$loop.index*30+15", "absolute"), l, K(a.ga("seed2")), a.offsetX(-130), a.offsetY(40)), g(6)]), g(90)])]), top9:a.action([a.wait(120), a.repeat(3, [a.repeat(5, [a.fire(a.direction("$loop.index*30", "absolute"), l, v(a.ga("seed1")), a.offsetX(130), a.offsetY(40)), g(6), a.fire(a.direction("$loop.index*30+15", 
  "absolute"), l, K(a.ga("seed2")), a.offsetX(130), a.offsetY(40)), g(6)]), g(90)])]), seed1:a.action([a.wait(10), a.pd(a.speed(0), 90), a.wait(60), a.fire(a.direction(0), q, s), a.repeat(5, [a.fire(a.direction(-30, "sequence"), p, G), a.fire(a.direction(20, "sequence"), p, G), a.fire(a.direction(20, "sequence"), p, G), a.fire(a.direction(20, "sequence"), p, G), a.fire(a.direction(-30, "sequence"), p, s), g(4)]), a.va]), seed2:a.action([a.wait(10), a.pd(a.speed(0), 90), a.wait(120), a.fire(a.direction(0), 
  q, s), a.repeat(5, [a.fire(a.direction(-30, "sequence"), p, z), a.fire(a.direction(15, "sequence"), p, z), a.fire(a.direction(15, "sequence"), p, z), a.fire(a.direction(15, "sequence"), p, z), a.fire(a.direction(15, "sequence"), p, z), a.fire(a.direction(-30, "sequence"), p, s), g(4)]), a.va])});
  gls2.fa["love-3-1"] = new N.ha({top0:a.action([a.wait(60), a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(11, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), 
  a.fire(a.direction(45, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(-85), a.offsetY(0)), g(3)]), g(10)])]), top1:a.action([a.wait(60), a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(-11, "sequence"), l, L, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, 
  "sequence"), l, L, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, L, a.offsetX(85), a.offsetY(0)), g(3)])]), g(10)]), top2:a.action([a.wait(120), a.repeat(2, [c(p, 0.005, 10, function(b) {
    return a.action([d(20, -90, 90, b, t, a.offsetX(-85), a.offsetY(0)), d(20, -90, 90, b, t, a.offsetX(85), a.offsetY(0))])
  }), g(240)])])});
  gls2.fa["love-3-2"] = new N.ha({top0:a.action([a.wait(60), a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(-11, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), 
  a.fire(a.direction(45, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(-85), a.offsetY(0)), g(3)]), g(10)])]), top1:a.action([a.wait(60), a.fire(a.direction(0), l, C, a.offsetX(0), a.ra(k)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(11, "sequence"), l, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, 
  "sequence"), l, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), l, E, a.offsetX(85), a.offsetY(0)), g(3)])]), g(10)]), top2:a.action([a.wait(120), a.repeat(2, [c(p, 0.002, 10, function(b) {
    return a.action([d(21, -90, 90, b, C, a.offsetX(-85), a.offsetY(0)), d(21, -90, 90, b, C, a.offsetX(85), a.offsetY(0))])
  }), g(240)])])});
  gls2.fa["ayumi-1-1a"] = new N.ha({top0:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), u, s), a.repeat(80, [a.fire(a.direction("360/18 + $loop.index * 0.06", "sequence"), a.speed(0, "sequence"), I), a.repeat(17, [a.fire(a.direction("360/18", "sequence"), a.speed(0, "sequence"), I)]), g(6)]), g(90)]), top1:a.action([a.wait(33), a.fire(a.direction(0, "absolute"), u, s), a.repeat(80, [a.fire(a.direction("360/18 + $loop.index * -0.06", "sequence"), a.speed(0, "sequence"), Q), a.repeat(17, 
  [a.fire(a.direction("360/18", "sequence"), a.speed(0, "sequence"), Q)]), g(6)]), g(90)])});
  gls2.fa["ayumi-1-1b"] = new N.ha({top0:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), u, s), a.repeat(120, [a.fire(a.direction("360/18 + Math.sin($loop.index * 0.05) * 2", "sequence"), a.speed(0, "sequence"), I), a.repeat(17, [a.fire(a.direction("360/18", "sequence"), a.speed(0, "sequence"), I)]), g(6)]), g(90)]), top1:a.action([a.wait(33), a.fire(a.direction(0, "absolute"), u, s), a.repeat(120, [a.fire(a.direction("360/18 + Math.sin($loop.index * 0.05) * 1", "sequence"), a.speed(0, "sequence"), 
  Q), a.repeat(17, [a.fire(a.direction("360/18", "sequence"), a.speed(0, "sequence"), Q)]), g(6)]), g(90)])});
  gls2.fa["ayumi-1-2a"] = new N.ha({top0:a.action([a.wait(30), a.action([-47, -42, 12, 1, 31, 2, -81, 0, -78, -32, 2, -80, 40, -89, -55, 18, -46, 16, -89, 57].map(function(c) {
    return a.action([b(20, c - 30 + 0, c + 30 + 0, r, v), b(20, c - 30 + 90, c + 30 + 90, r, v), b(20, c - 30 + 180, c + 30 + 180, r, v), b(20, c - 30 + 270, c + 30 + 270, r, v), g(40)])
  })), g(90)]), top2:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), H, s), a.repeat(200, [a.fire(a.direction("360/9 - 5", "sequence"), a.speed(0, "sequence"), t), a.repeat(8, [a.fire(a.direction("360/9", "sequence"), a.speed(0, "sequence"), t)]), g(3)]), g(90)])});
  gls2.fa["ayumi-1-2b"] = new N.ha({top0:a.action([a.wait(30), a.action([-47, -42, 12, 1, 31, 2, -81, 0, -78, -32, 2, -80, 40, -89, -55, 18, -46, 16, -89, 57].map(function(c) {
    return a.action([b(20, c - 30 + 0, c + 30 + 0, r, v), b(20, c - 30 + 90, c + 30 + 90, r, v), b(20, c - 30 + 180, c + 30 + 180, r, v), b(20, c - 30 + 270, c + 30 + 270, r, v), g(40)])
  })), g(90)]), top1:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), H, s), a.repeat(200, [a.fire(a.direction("360/9 + $loop.index * 0.08", "sequence"), a.speed(0, "sequence"), t), a.repeat(8, [a.fire(a.direction("360/9", "sequence"), a.speed(0, "sequence"), t)]), g(3)]), g(90)])});
  gls2.fa["ayumi-1-3"] = new N.ha({top0:a.action([a.wait(30), a.action([107, 103, 99, 79, 88, 104, 98, 81].map(function(b, c) {
    return 0 === c % 2 ? a.action([a.fire(a.direction(-b, "absolute"), a.speed(4), v(a.ga("seed", "(2+$rand*10)", c + 5))), a.wait(60 - 2 * c)]) : a.action([a.fire(a.direction(+b, "absolute"), a.speed(4), v(a.ga("seed", "(2+$rand*10)", c + 5))), a.wait(60 - 2 * c)])
  })), a.wait(24), a.wait(90)]), seed:a.action([a.wait("$1"), a.pd(a.speed(0.4), 1), a.wait(20), a.fire(a.direction(-20), p, s), a.repeat("$2", [a.repeat(3, [a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), I), a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), Q)]), a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), I), a.fire(a.direction(-20), a.speed(0, "sequence"), s), g(3)])])});
  gls2.fa["ayumi-1-4"] = new N.ha({top0:a.action([a.wait(30), a.fire(a.direction(0), D, s), a.repeat(140, [a.repeat(6, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), v)]), a.fire(a.direction(-1, "sequence"), a.speed(0, "sequence"), s), g(4)]), a.wait(90)]), top1:a.action([a.wait(25), a.fire(a.direction(0), D, s), a.repeat(140, [a.repeat(5, [a.fire(a.direction(72, "sequence"), a.speed(0, "sequence"), K)]), a.fire(a.direction(1.3, "sequence"), a.speed(0, "sequence"), s), g(4)]), a.wait(90)]), 
  top2:a.action([a.wait(25), a.repeat(7, [a.wait(35), d(60, -180, 180, D, C), a.wait(13)]), a.wait(90)]), top3:a.action([a.wait(25), a.repeat(7, [a.wait(48), d(60, -180, 180, u(2), t)]), a.wait(90)])});
  gls2.fa["ayumi-2-1"] = new N.ha({top0:a.action([a.wait(30), a.repeat(20, [a.fire(a.direction(135, "absolute"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(40, [a.fire(a.direction(4, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(10, [a.fire(a.direction(0, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.wait(90)]), top1:a.action([a.wait(30), a.repeat(20, [a.fire(a.direction(-135, "absolute"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(40, [a.fire(a.direction(-4, 
  "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(10, [a.fire(a.direction(0, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.wait(90)]), top2:a.action([a.wait(30), a.repeat(20, [a.fire(a.direction(0, "absolute"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(40, [a.fire(a.direction(-1, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(10, [a.fire(a.direction(0, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.wait(90)]), top3:a.action([a.wait(30), 
  a.repeat(20, [a.fire(a.direction(0, "absolute"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(40, [a.fire(a.direction(1, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.repeat(10, [a.fire(a.direction(0, "sequence"), a.speed(2), E(a.ga("seed"))), a.wait(12)]), a.wait(90)]), seed:a.action([a.repeat(999, [a.wait(12), a.fire(a.direction(-100, "relative"), r, C), a.fire(a.direction(100, "relative"), r, t)])])});
  gls2.fa["ayumi-2-2"] = new N.ha({top0:a.action([a.repeat(3, [a.la("t", "$loop.index + 1"), a.wait(20), a.fire(a.direction(-45), l("$loop.index * 5"), s), a.repeat(30, [a.repeat(11, [a.fire(a.direction(360 / 11, "sequence"), a.speed(0, "sequence"), Q)]), a.fire(a.direction("+3 * $t", "sequence"), a.speed(0.1, "sequence"), s), a.wait(4)]), a.wait(20), a.fire(a.direction(-45), l("$loop.index * 5"), s), a.repeat(30, [a.repeat(11, [a.fire(a.direction(360 / 11, "sequence"), a.speed(0, "sequence"), I)]), 
  a.fire(a.direction("-3 * $t", "sequence"), a.speed(0.1, "sequence"), s), a.wait(4)])]), a.wait(20), d(80, -180, 180, u, C), a.wait(8), d(100, -180, 180, u(5), C), a.wait(8), d(120, -180, 180, u(10), C), a.wait(8), a.wait(20), d(81, -180, 180, u, C), a.wait(8), d(101, -180, 180, u(5), C), a.wait(8), d(121, -180, 180, u(10), C), a.wait(8)])});
  gls2.fa["ayumi-2-3"] = new N.ha({top0:a.action([a.wait(30), a.fire(a.direction(30, "absolute"), a.speed(3), s), a.repeat(60, [a.la("t", "5 + $loop.index * 0.1"), a.repeat(4.5, [a.fire(a.direction(40, "sequence"), a.speed(0, "sequence"), E(a.ga("bit1", "$t"))), a.fire(a.direction(40, "sequence"), a.speed(0, "sequence"), E(a.ga("bit2", "$t")))]), a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), s), a.wait(7)]), a.wait(90)]), top1:a.action([a.wait(30), a.fire(a.direction(30, "absolute"), 
  a.speed(2), s), a.repeat(15, [a.repeat(13, [a.fire(a.direction(360 / 13, "sequence"), a.speed(2), J), a.repeat(5, [a.fire(a.direction(0, "sequence"), a.speed(-0.05, "sequence"), J)])]), a.wait(28)]), a.wait(90)]), bit1:a.action([a.wait("$1"), a.fire(a.direction("-10 + $rand * 20"), r(0), K), a.va()]), bit2:a.action([a.wait("$1"), a.fire(a.direction("-10 + $rand * 20"), r(2), v), a.va()])});
  gls2.fa["ayumi-3"] = new N.ha({top0:a.action([a.fire(a.direction(30, "absolute"), a.speed(15), s), a.repeat(2E3, [a.la("t", "$loop.index * 2"), a.repeat(3, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), s(a.ga("bit0", "$t")))]), a.fire(a.direction(-2, "sequence"), a.speed(0, "sequence"), s), a.wait(2)])]), bit0:a.action([a.wait(1), a.fire(a.direction("120", "relative"), D, v), a.va()]), top1:a.action([a.fire(a.direction(30, "absolute"), a.speed(8), s), a.repeat(1E3, [a.la("t", "$loop.index * 2"), 
  a.repeat(3, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), s(a.ga("bit1", "$t")))]), a.fire(a.direction(2, "sequence"), a.speed(0, "sequence"), s), a.wait(4)])]), bit1:a.action([a.wait(1), a.fire(a.direction("$1*-1.5", "relative"), p, B), a.va()]), top2:a.action([a.fire(a.direction(30, "absolute"), a.speed(15), s), a.repeat(2E3, [a.la("t", "$loop.index * 2"), a.repeat(3, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), s(a.ga("bit2", "$t")))]), a.fire(a.direction(2, "sequence"), 
  a.speed(0, "sequence"), s), a.wait(2)])]), bit2:a.action([a.wait(1), a.fire(a.direction("$1*1.0", "relative"), D, K), a.va()])});
  gls2.fa.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      W.push(gls2.Ya())
    }
    a = gls2.fa.Mf = tm.Ob.Ed.Ye;
    a.Dh = function(a) {
      return!(a instanceof gls2.Ya) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Qi = function(a) {
      var b = W.shift(0);
      if(b) {
        return b.rotation = 0, b.qa = 5 * (a.qa || 1), T.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.gc ? (b.scaleX = 1 * (gls2.core.Db ? 1.5 : 1), b.scaleY = 1 * (gls2.core.Db ? 1.5 : 1), b.Bd = A) : (a.gf ? (b.scaleX = 0.4 * (gls2.core.Db ? 1.5 : 1), b.scaleY = 2.5 * (gls2.core.Db ? 1.5 : 1)) : a.Xb ? (b.scaleX = 1 * (gls2.core.Db ? 1.5 : 1), b.scaleY = 10 * (gls2.core.Db ? 1.5 : 1), b.blendMode = "lighter") : (b.scaleX = 0.8 * (gls2.core.Db ? 1.5 : 1), 
        b.scaleY = 2 * (gls2.core.Db ? 1.5 : 1)), b.Bd = k), b.visible = a.visible === A ? A : k, b.gc = !!a.gc, b.gf = !!a.gf, b.Xb = !!a.Xb, b.Xa = ~~a.Xa, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Yi = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.Zd = 3;
    N.Qa.ob.$rank = 0;
    N.Qa.ob.$hyperOff = 1;
    N.Qa.ob.$bg = 0;
    N.Qa.ob.$ex = 0
  };
  gls2.fa.erase = function(a, b, c) {
    for(var d = [].concat(T), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var j = gls2.Ji(!!b);
        j.setPosition(d[f].x, d[f].y);
        c && (j.Sd = k)
      }
      d[f].Ca()
    }
  };
  gls2.fa.Ve = function() {
    for(var a = [].concat(T), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.fa.hl = function(a) {
    var b = gls2.fa.fireback.Xe();
    a.on("enterframe", b)
  };
  gls2.fa.fireback = new N.ha({top:a.action([a.fire(a.direction(Math.randf(-2, 2)), a.speed(1.2), S), a.fire(a.direction(0, "sequence"), a.speed(1.17), S), a.fire(a.direction(0, "sequence"), a.speed(1.14), S), a.fire(a.direction(0, "sequence"), a.speed(1.11), S), a.fire(a.direction(0, "sequence"), a.speed(1.08), S)])});
  gls2.Ya = tm.createClass({superClass:tm.display.Sprite, qa:0, gc:A, gf:A, Xa:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 3;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      W.push(this);
      var a = T.indexOf(this);
      -1 !== a && T.splice(a, 1)
    })
  }, update:function() {
    this.gc && (this.rotation += 15)
  }, Ca:function() {
    var a = gls2.Ya.Vk().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove();
    return a
  }});
  gls2.Ya.Vk = function() {
    X === m && (X = gls2.Na(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.7, color:"rgba(255,100,180,1.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return X.clone()
  };
  var X = m, W = gls2.fa.jm = [], T = gls2.Ya.gb = []
})();
gls2.ma = {};
gls2.ma.clamp = function(c, b, f) {
  return c < b ? b : c > f ? f : c
};
gls2.ma.DEG_TO_RAD = Math.PI / 180;
gls2.ma.RAD_TO_DEG = 180 / Math.PI;
gls2.ma.degToRad = function(c) {
  return c * gls2.ma.DEG_TO_RAD
};
gls2.ma.radToDeg = function(c) {
  return c * gls2.ma.RAD_TO_DEG
};
gls2.ma.rand = function(c, b) {
  return window.Math.floor(window.Math.random() * (b - c + 1)) + c
};
gls2.ma.randf = function(c, b) {
  return window.Math.random() * (b - c) + c
};
gls2.ma.magnitude = function() {
  return Math.sqrt(gls2.ma.magnitudeSq.apply(m, arguments))
};
gls2.ma.magnitudeSq = function() {
  for(var c = 0, b = 0, f = arguments.length;b < f;++b) {
    c += arguments[b] * arguments[b]
  }
  return c
};
gls2.ma.inside = function(c, b, f) {
  return c >= b && c <= f
};

