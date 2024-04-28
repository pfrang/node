"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/perfect-cursors";
exports.ids = ["vendor-chunks/perfect-cursors"];
exports.modules = {

/***/ "(ssr)/./node_modules/perfect-cursors/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/perfect-cursors/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PerfectCursor: () => (/* binding */ PerfectCursor)\n/* harmony export */ });\n// ../node_modules/@tldraw/vec/dist/esm/index.js\nvar _Vec = class {\n  static clamp(n, min, max) {\n    return Math.max(min, typeof max !== \"undefined\" ? Math.min(n, max) : n);\n  }\n  static clampV(A, min, max) {\n    return A.map((n) => max ? _Vec.clamp(n, min, max) : _Vec.clamp(n, min));\n  }\n  static cross(x, y, z) {\n    return (y[0] - x[0]) * (z[1] - x[1]) - (z[0] - x[0]) * (y[1] - x[1]);\n  }\n  static snap(a, step = 1) {\n    return [Math.round(a[0] / step) * step, Math.round(a[1] / step) * step];\n  }\n};\nvar Vec = _Vec;\nVec.neg = (A) => {\n  return [-A[0], -A[1]];\n};\nVec.add = (A, B) => {\n  return [A[0] + B[0], A[1] + B[1]];\n};\nVec.addScalar = (A, n) => {\n  return [A[0] + n, A[1] + n];\n};\nVec.sub = (A, B) => {\n  return [A[0] - B[0], A[1] - B[1]];\n};\nVec.subScalar = (A, n) => {\n  return [A[0] - n, A[1] - n];\n};\nVec.vec = (A, B) => {\n  return [B[0] - A[0], B[1] - A[1]];\n};\nVec.mul = (A, n) => {\n  return [A[0] * n, A[1] * n];\n};\nVec.mulV = (A, B) => {\n  return [A[0] * B[0], A[1] * B[1]];\n};\nVec.div = (A, n) => {\n  return [A[0] / n, A[1] / n];\n};\nVec.divV = (A, B) => {\n  return [A[0] / B[0], A[1] / B[1]];\n};\nVec.per = (A) => {\n  return [A[1], -A[0]];\n};\nVec.dpr = (A, B) => {\n  return A[0] * B[0] + A[1] * B[1];\n};\nVec.cpr = (A, B) => {\n  return A[0] * B[1] - B[0] * A[1];\n};\nVec.len2 = (A) => {\n  return A[0] * A[0] + A[1] * A[1];\n};\nVec.len = (A) => {\n  return Math.hypot(A[0], A[1]);\n};\nVec.pry = (A, B) => {\n  return _Vec.dpr(A, B) / _Vec.len(B);\n};\nVec.uni = (A) => {\n  return _Vec.div(A, _Vec.len(A));\n};\nVec.normalize = (A) => {\n  return _Vec.uni(A);\n};\nVec.tangent = (A, B) => {\n  return _Vec.uni(_Vec.sub(A, B));\n};\nVec.dist2 = (A, B) => {\n  return _Vec.len2(_Vec.sub(A, B));\n};\nVec.dist = (A, B) => {\n  return Math.hypot(A[1] - B[1], A[0] - B[0]);\n};\nVec.fastDist = (A, B) => {\n  const V = [B[0] - A[0], B[1] - A[1]];\n  const aV = [Math.abs(V[0]), Math.abs(V[1])];\n  let r = 1 / Math.max(aV[0], aV[1]);\n  r = r * (1.29289 - (aV[0] + aV[1]) * r * 0.29289);\n  return [V[0] * r, V[1] * r];\n};\nVec.ang = (A, B) => {\n  return Math.atan2(_Vec.cpr(A, B), _Vec.dpr(A, B));\n};\nVec.angle = (A, B) => {\n  return Math.atan2(B[1] - A[1], B[0] - A[0]);\n};\nVec.med = (A, B) => {\n  return _Vec.mul(_Vec.add(A, B), 0.5);\n};\nVec.rot = (A, r = 0) => {\n  return [A[0] * Math.cos(r) - A[1] * Math.sin(r), A[0] * Math.sin(r) + A[1] * Math.cos(r)];\n};\nVec.rotWith = (A, C, r = 0) => {\n  if (r === 0)\n    return A;\n  const s = Math.sin(r);\n  const c = Math.cos(r);\n  const px = A[0] - C[0];\n  const py = A[1] - C[1];\n  const nx = px * c - py * s;\n  const ny = px * s + py * c;\n  return [nx + C[0], ny + C[1]];\n};\nVec.isEqual = (A, B) => {\n  return A[0] === B[0] && A[1] === B[1];\n};\nVec.lrp = (A, B, t) => {\n  return _Vec.add(A, _Vec.mul(_Vec.sub(B, A), t));\n};\nVec.int = (A, B, from, to, s = 1) => {\n  const t = (_Vec.clamp(from, to) - from) / (to - from);\n  return _Vec.add(_Vec.mul(A, 1 - t), _Vec.mul(B, s));\n};\nVec.ang3 = (p1, pc, p2) => {\n  const v1 = _Vec.vec(pc, p1);\n  const v2 = _Vec.vec(pc, p2);\n  return _Vec.ang(v1, v2);\n};\nVec.abs = (A) => {\n  return [Math.abs(A[0]), Math.abs(A[1])];\n};\nVec.rescale = (a, n) => {\n  const l = _Vec.len(a);\n  return [n * a[0] / l, n * a[1] / l];\n};\nVec.isLeft = (p1, pc, p2) => {\n  return (pc[0] - p1[0]) * (p2[1] - p1[1]) - (p2[0] - p1[0]) * (pc[1] - p1[1]);\n};\nVec.clockwise = (p1, pc, p2) => {\n  return _Vec.isLeft(p1, pc, p2) > 0;\n};\nVec.toFixed = (a, d = 2) => {\n  return a.map((v) => +v.toFixed(d));\n};\nVec.nearestPointOnLineThroughPoint = (A, u, P) => {\n  return _Vec.add(A, _Vec.mul(u, _Vec.pry(_Vec.sub(P, A), u)));\n};\nVec.distanceToLineThroughPoint = (A, u, P) => {\n  return _Vec.dist(P, _Vec.nearestPointOnLineThroughPoint(A, u, P));\n};\nVec.nearestPointOnLineSegment = (A, B, P, clamp = true) => {\n  const u = _Vec.uni(_Vec.sub(B, A));\n  const C = _Vec.add(A, _Vec.mul(u, _Vec.pry(_Vec.sub(P, A), u)));\n  if (clamp) {\n    if (C[0] < Math.min(A[0], B[0]))\n      return A[0] < B[0] ? A : B;\n    if (C[0] > Math.max(A[0], B[0]))\n      return A[0] > B[0] ? A : B;\n    if (C[1] < Math.min(A[1], B[1]))\n      return A[1] < B[1] ? A : B;\n    if (C[1] > Math.max(A[1], B[1]))\n      return A[1] > B[1] ? A : B;\n  }\n  return C;\n};\nVec.distanceToLineSegment = (A, B, P, clamp = true) => {\n  return _Vec.dist(P, _Vec.nearestPointOnLineSegment(A, B, P, clamp));\n};\nVec.nudge = (A, B, d) => {\n  if (_Vec.isEqual(A, B))\n    return A;\n  return _Vec.add(A, _Vec.mul(_Vec.uni(_Vec.sub(B, A)), d));\n};\nVec.nudgeAtAngle = (A, a, d) => {\n  return [Math.cos(a) * d + A[0], Math.sin(a) * d + A[1]];\n};\nVec.toPrecision = (a, n = 4) => {\n  return [+a[0].toPrecision(n), +a[1].toPrecision(n)];\n};\nVec.pointsBetween = (A, B, steps = 6) => {\n  return Array.from(Array(steps)).map((_, i) => {\n    const t = i / (steps - 1);\n    const k = Math.min(1, 0.5 + Math.abs(0.5 - t));\n    return [..._Vec.lrp(A, B, t), k];\n  });\n};\nVec.slope = (A, B) => {\n  if (A[0] === B[0])\n    return NaN;\n  return (A[1] - B[1]) / (A[0] - B[0]);\n};\nVec.max = (...v) => {\n  return [Math.max(...v.map((a) => a[0])), Math.max(...v.map((a) => a[1]))];\n};\nVec.min = (...v) => {\n  return [Math.max(...v.map((a) => a[0])), Math.max(...v.map((a) => a[1]))];\n};\n\n// src/spline.ts\nvar Spline = class {\n  constructor(points = []) {\n    this.points = [];\n    this.lengths = [];\n    this.totalLength = 0;\n    this.addPoint = (point) => {\n      if (this.prev) {\n        const length = Vec.dist(this.prev, point);\n        this.lengths.push(length);\n        this.totalLength += length;\n        this.points.push(point);\n      }\n      this.prev = point;\n    };\n    this.clear = () => {\n      this.points = this.prev ? [this.prev] : [];\n      this.totalLength = 0;\n    };\n    this.getSplinePoint = (rt) => {\n      const { points } = this;\n      const l = points.length - 1, d = Math.trunc(rt), p1 = Math.min(d + 1, l), p2 = Math.min(p1 + 1, l), p3 = Math.min(p2 + 1, l), p0 = p1 - 1, t = rt - d;\n      const tt = t * t, ttt = tt * t, q1 = -ttt + 2 * tt - t, q2 = 3 * ttt - 5 * tt + 2, q3 = -3 * ttt + 4 * tt + t, q4 = ttt - tt;\n      return [\n        (points[p0][0] * q1 + points[p1][0] * q2 + points[p2][0] * q3 + points[p3][0] * q4) / 2,\n        (points[p0][1] * q1 + points[p1][1] * q2 + points[p2][1] * q3 + points[p3][1] * q4) / 2\n      ];\n    };\n    this.points = points;\n    this.lengths = points.map((point, i, arr) => i === 0 ? 0 : Vec.dist(point, arr[i - 1]));\n    this.totalLength = this.lengths.reduce((acc, cur) => acc + cur, 0);\n  }\n};\n\n// src/perfect-cursor.ts\nvar _PerfectCursor = class {\n  constructor(cb) {\n    this.state = \"idle\";\n    this.queue = [];\n    this.timestamp = performance.now();\n    this.lastRequestId = 0;\n    this.timeoutId = 0;\n    this.spline = new Spline();\n    this.addPoint = (point) => {\n      clearTimeout(this.timeoutId);\n      const now = performance.now();\n      const duration = Math.min(now - this.timestamp, _PerfectCursor.MAX_INTERVAL);\n      if (!this.prevPoint) {\n        this.spline.clear();\n        this.prevPoint = point;\n        this.spline.addPoint(point);\n        this.cb(point);\n        this.state = \"stopped\";\n        return;\n      }\n      if (this.state === \"stopped\") {\n        if (Vec.dist(this.prevPoint, point) < 4) {\n          this.cb(point);\n          return;\n        }\n        this.spline.clear();\n        this.spline.addPoint(this.prevPoint);\n        this.spline.addPoint(this.prevPoint);\n        this.spline.addPoint(point);\n        this.state = \"idle\";\n      } else {\n        this.spline.addPoint(point);\n      }\n      if (duration < 16) {\n        this.prevPoint = point;\n        this.timestamp = now;\n        this.cb(point);\n        return;\n      }\n      const animation = {\n        start: this.spline.points.length - 3,\n        from: this.prevPoint,\n        to: point,\n        duration\n      };\n      this.prevPoint = point;\n      this.timestamp = now;\n      switch (this.state) {\n        case \"idle\": {\n          this.state = \"animating\";\n          this.animateNext(animation);\n          break;\n        }\n        case \"animating\": {\n          this.queue.push(animation);\n          break;\n        }\n      }\n    };\n    this.animateNext = (animation) => {\n      const start = performance.now();\n      const loop = () => {\n        const t = (performance.now() - start) / animation.duration;\n        if (t <= 1 && this.spline.points.length > 0) {\n          try {\n            this.cb(this.spline.getSplinePoint(t + animation.start));\n          } catch (e) {\n            console.warn(e);\n          }\n          this.lastRequestId = requestAnimationFrame(loop);\n          return;\n        }\n        const next = this.queue.shift();\n        if (next) {\n          this.state = \"animating\";\n          this.animateNext(next);\n        } else {\n          this.state = \"idle\";\n          this.timeoutId = setTimeout(() => {\n            this.state = \"stopped\";\n          }, _PerfectCursor.MAX_INTERVAL);\n        }\n      };\n      loop();\n    };\n    this.dispose = () => {\n      clearTimeout(this.timeoutId);\n    };\n    this.cb = cb;\n  }\n};\nvar PerfectCursor = _PerfectCursor;\nPerfectCursor.MAX_INTERVAL = 300;\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1jdXJzb3JzL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3QtY3Vyc29ycy9kaXN0L2VzbS9pbmRleC5qcz84MjEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4uL25vZGVfbW9kdWxlcy9AdGxkcmF3L3ZlYy9kaXN0L2VzbS9pbmRleC5qc1xudmFyIF9WZWMgPSBjbGFzcyB7XG4gIHN0YXRpYyBjbGFtcChuLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIHR5cGVvZiBtYXggIT09IFwidW5kZWZpbmVkXCIgPyBNYXRoLm1pbihuLCBtYXgpIDogbik7XG4gIH1cbiAgc3RhdGljIGNsYW1wVihBLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBBLm1hcCgobikgPT4gbWF4ID8gX1ZlYy5jbGFtcChuLCBtaW4sIG1heCkgOiBfVmVjLmNsYW1wKG4sIG1pbikpO1xuICB9XG4gIHN0YXRpYyBjcm9zcyh4LCB5LCB6KSB7XG4gICAgcmV0dXJuICh5WzBdIC0geFswXSkgKiAoelsxXSAtIHhbMV0pIC0gKHpbMF0gLSB4WzBdKSAqICh5WzFdIC0geFsxXSk7XG4gIH1cbiAgc3RhdGljIHNuYXAoYSwgc3RlcCA9IDEpIHtcbiAgICByZXR1cm4gW01hdGgucm91bmQoYVswXSAvIHN0ZXApICogc3RlcCwgTWF0aC5yb3VuZChhWzFdIC8gc3RlcCkgKiBzdGVwXTtcbiAgfVxufTtcbnZhciBWZWMgPSBfVmVjO1xuVmVjLm5lZyA9IChBKSA9PiB7XG4gIHJldHVybiBbLUFbMF0sIC1BWzFdXTtcbn07XG5WZWMuYWRkID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIFtBWzBdICsgQlswXSwgQVsxXSArIEJbMV1dO1xufTtcblZlYy5hZGRTY2FsYXIgPSAoQSwgbikgPT4ge1xuICByZXR1cm4gW0FbMF0gKyBuLCBBWzFdICsgbl07XG59O1xuVmVjLnN1YiA9IChBLCBCKSA9PiB7XG4gIHJldHVybiBbQVswXSAtIEJbMF0sIEFbMV0gLSBCWzFdXTtcbn07XG5WZWMuc3ViU2NhbGFyID0gKEEsIG4pID0+IHtcbiAgcmV0dXJuIFtBWzBdIC0gbiwgQVsxXSAtIG5dO1xufTtcblZlYy52ZWMgPSAoQSwgQikgPT4ge1xuICByZXR1cm4gW0JbMF0gLSBBWzBdLCBCWzFdIC0gQVsxXV07XG59O1xuVmVjLm11bCA9IChBLCBuKSA9PiB7XG4gIHJldHVybiBbQVswXSAqIG4sIEFbMV0gKiBuXTtcbn07XG5WZWMubXVsViA9IChBLCBCKSA9PiB7XG4gIHJldHVybiBbQVswXSAqIEJbMF0sIEFbMV0gKiBCWzFdXTtcbn07XG5WZWMuZGl2ID0gKEEsIG4pID0+IHtcbiAgcmV0dXJuIFtBWzBdIC8gbiwgQVsxXSAvIG5dO1xufTtcblZlYy5kaXZWID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIFtBWzBdIC8gQlswXSwgQVsxXSAvIEJbMV1dO1xufTtcblZlYy5wZXIgPSAoQSkgPT4ge1xuICByZXR1cm4gW0FbMV0sIC1BWzBdXTtcbn07XG5WZWMuZHByID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIEFbMF0gKiBCWzBdICsgQVsxXSAqIEJbMV07XG59O1xuVmVjLmNwciA9IChBLCBCKSA9PiB7XG4gIHJldHVybiBBWzBdICogQlsxXSAtIEJbMF0gKiBBWzFdO1xufTtcblZlYy5sZW4yID0gKEEpID0+IHtcbiAgcmV0dXJuIEFbMF0gKiBBWzBdICsgQVsxXSAqIEFbMV07XG59O1xuVmVjLmxlbiA9IChBKSA9PiB7XG4gIHJldHVybiBNYXRoLmh5cG90KEFbMF0sIEFbMV0pO1xufTtcblZlYy5wcnkgPSAoQSwgQikgPT4ge1xuICByZXR1cm4gX1ZlYy5kcHIoQSwgQikgLyBfVmVjLmxlbihCKTtcbn07XG5WZWMudW5pID0gKEEpID0+IHtcbiAgcmV0dXJuIF9WZWMuZGl2KEEsIF9WZWMubGVuKEEpKTtcbn07XG5WZWMubm9ybWFsaXplID0gKEEpID0+IHtcbiAgcmV0dXJuIF9WZWMudW5pKEEpO1xufTtcblZlYy50YW5nZW50ID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIF9WZWMudW5pKF9WZWMuc3ViKEEsIEIpKTtcbn07XG5WZWMuZGlzdDIgPSAoQSwgQikgPT4ge1xuICByZXR1cm4gX1ZlYy5sZW4yKF9WZWMuc3ViKEEsIEIpKTtcbn07XG5WZWMuZGlzdCA9IChBLCBCKSA9PiB7XG4gIHJldHVybiBNYXRoLmh5cG90KEFbMV0gLSBCWzFdLCBBWzBdIC0gQlswXSk7XG59O1xuVmVjLmZhc3REaXN0ID0gKEEsIEIpID0+IHtcbiAgY29uc3QgViA9IFtCWzBdIC0gQVswXSwgQlsxXSAtIEFbMV1dO1xuICBjb25zdCBhViA9IFtNYXRoLmFicyhWWzBdKSwgTWF0aC5hYnMoVlsxXSldO1xuICBsZXQgciA9IDEgLyBNYXRoLm1heChhVlswXSwgYVZbMV0pO1xuICByID0gciAqICgxLjI5Mjg5IC0gKGFWWzBdICsgYVZbMV0pICogciAqIDAuMjkyODkpO1xuICByZXR1cm4gW1ZbMF0gKiByLCBWWzFdICogcl07XG59O1xuVmVjLmFuZyA9IChBLCBCKSA9PiB7XG4gIHJldHVybiBNYXRoLmF0YW4yKF9WZWMuY3ByKEEsIEIpLCBfVmVjLmRwcihBLCBCKSk7XG59O1xuVmVjLmFuZ2xlID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoQlsxXSAtIEFbMV0sIEJbMF0gLSBBWzBdKTtcbn07XG5WZWMubWVkID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIF9WZWMubXVsKF9WZWMuYWRkKEEsIEIpLCAwLjUpO1xufTtcblZlYy5yb3QgPSAoQSwgciA9IDApID0+IHtcbiAgcmV0dXJuIFtBWzBdICogTWF0aC5jb3MocikgLSBBWzFdICogTWF0aC5zaW4ociksIEFbMF0gKiBNYXRoLnNpbihyKSArIEFbMV0gKiBNYXRoLmNvcyhyKV07XG59O1xuVmVjLnJvdFdpdGggPSAoQSwgQywgciA9IDApID0+IHtcbiAgaWYgKHIgPT09IDApXG4gICAgcmV0dXJuIEE7XG4gIGNvbnN0IHMgPSBNYXRoLnNpbihyKTtcbiAgY29uc3QgYyA9IE1hdGguY29zKHIpO1xuICBjb25zdCBweCA9IEFbMF0gLSBDWzBdO1xuICBjb25zdCBweSA9IEFbMV0gLSBDWzFdO1xuICBjb25zdCBueCA9IHB4ICogYyAtIHB5ICogcztcbiAgY29uc3QgbnkgPSBweCAqIHMgKyBweSAqIGM7XG4gIHJldHVybiBbbnggKyBDWzBdLCBueSArIENbMV1dO1xufTtcblZlYy5pc0VxdWFsID0gKEEsIEIpID0+IHtcbiAgcmV0dXJuIEFbMF0gPT09IEJbMF0gJiYgQVsxXSA9PT0gQlsxXTtcbn07XG5WZWMubHJwID0gKEEsIEIsIHQpID0+IHtcbiAgcmV0dXJuIF9WZWMuYWRkKEEsIF9WZWMubXVsKF9WZWMuc3ViKEIsIEEpLCB0KSk7XG59O1xuVmVjLmludCA9IChBLCBCLCBmcm9tLCB0bywgcyA9IDEpID0+IHtcbiAgY29uc3QgdCA9IChfVmVjLmNsYW1wKGZyb20sIHRvKSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG4gIHJldHVybiBfVmVjLmFkZChfVmVjLm11bChBLCAxIC0gdCksIF9WZWMubXVsKEIsIHMpKTtcbn07XG5WZWMuYW5nMyA9IChwMSwgcGMsIHAyKSA9PiB7XG4gIGNvbnN0IHYxID0gX1ZlYy52ZWMocGMsIHAxKTtcbiAgY29uc3QgdjIgPSBfVmVjLnZlYyhwYywgcDIpO1xuICByZXR1cm4gX1ZlYy5hbmcodjEsIHYyKTtcbn07XG5WZWMuYWJzID0gKEEpID0+IHtcbiAgcmV0dXJuIFtNYXRoLmFicyhBWzBdKSwgTWF0aC5hYnMoQVsxXSldO1xufTtcblZlYy5yZXNjYWxlID0gKGEsIG4pID0+IHtcbiAgY29uc3QgbCA9IF9WZWMubGVuKGEpO1xuICByZXR1cm4gW24gKiBhWzBdIC8gbCwgbiAqIGFbMV0gLyBsXTtcbn07XG5WZWMuaXNMZWZ0ID0gKHAxLCBwYywgcDIpID0+IHtcbiAgcmV0dXJuIChwY1swXSAtIHAxWzBdKSAqIChwMlsxXSAtIHAxWzFdKSAtIChwMlswXSAtIHAxWzBdKSAqIChwY1sxXSAtIHAxWzFdKTtcbn07XG5WZWMuY2xvY2t3aXNlID0gKHAxLCBwYywgcDIpID0+IHtcbiAgcmV0dXJuIF9WZWMuaXNMZWZ0KHAxLCBwYywgcDIpID4gMDtcbn07XG5WZWMudG9GaXhlZCA9IChhLCBkID0gMikgPT4ge1xuICByZXR1cm4gYS5tYXAoKHYpID0+ICt2LnRvRml4ZWQoZCkpO1xufTtcblZlYy5uZWFyZXN0UG9pbnRPbkxpbmVUaHJvdWdoUG9pbnQgPSAoQSwgdSwgUCkgPT4ge1xuICByZXR1cm4gX1ZlYy5hZGQoQSwgX1ZlYy5tdWwodSwgX1ZlYy5wcnkoX1ZlYy5zdWIoUCwgQSksIHUpKSk7XG59O1xuVmVjLmRpc3RhbmNlVG9MaW5lVGhyb3VnaFBvaW50ID0gKEEsIHUsIFApID0+IHtcbiAgcmV0dXJuIF9WZWMuZGlzdChQLCBfVmVjLm5lYXJlc3RQb2ludE9uTGluZVRocm91Z2hQb2ludChBLCB1LCBQKSk7XG59O1xuVmVjLm5lYXJlc3RQb2ludE9uTGluZVNlZ21lbnQgPSAoQSwgQiwgUCwgY2xhbXAgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IHUgPSBfVmVjLnVuaShfVmVjLnN1YihCLCBBKSk7XG4gIGNvbnN0IEMgPSBfVmVjLmFkZChBLCBfVmVjLm11bCh1LCBfVmVjLnByeShfVmVjLnN1YihQLCBBKSwgdSkpKTtcbiAgaWYgKGNsYW1wKSB7XG4gICAgaWYgKENbMF0gPCBNYXRoLm1pbihBWzBdLCBCWzBdKSlcbiAgICAgIHJldHVybiBBWzBdIDwgQlswXSA/IEEgOiBCO1xuICAgIGlmIChDWzBdID4gTWF0aC5tYXgoQVswXSwgQlswXSkpXG4gICAgICByZXR1cm4gQVswXSA+IEJbMF0gPyBBIDogQjtcbiAgICBpZiAoQ1sxXSA8IE1hdGgubWluKEFbMV0sIEJbMV0pKVxuICAgICAgcmV0dXJuIEFbMV0gPCBCWzFdID8gQSA6IEI7XG4gICAgaWYgKENbMV0gPiBNYXRoLm1heChBWzFdLCBCWzFdKSlcbiAgICAgIHJldHVybiBBWzFdID4gQlsxXSA/IEEgOiBCO1xuICB9XG4gIHJldHVybiBDO1xufTtcblZlYy5kaXN0YW5jZVRvTGluZVNlZ21lbnQgPSAoQSwgQiwgUCwgY2xhbXAgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBfVmVjLmRpc3QoUCwgX1ZlYy5uZWFyZXN0UG9pbnRPbkxpbmVTZWdtZW50KEEsIEIsIFAsIGNsYW1wKSk7XG59O1xuVmVjLm51ZGdlID0gKEEsIEIsIGQpID0+IHtcbiAgaWYgKF9WZWMuaXNFcXVhbChBLCBCKSlcbiAgICByZXR1cm4gQTtcbiAgcmV0dXJuIF9WZWMuYWRkKEEsIF9WZWMubXVsKF9WZWMudW5pKF9WZWMuc3ViKEIsIEEpKSwgZCkpO1xufTtcblZlYy5udWRnZUF0QW5nbGUgPSAoQSwgYSwgZCkgPT4ge1xuICByZXR1cm4gW01hdGguY29zKGEpICogZCArIEFbMF0sIE1hdGguc2luKGEpICogZCArIEFbMV1dO1xufTtcblZlYy50b1ByZWNpc2lvbiA9IChhLCBuID0gNCkgPT4ge1xuICByZXR1cm4gWythWzBdLnRvUHJlY2lzaW9uKG4pLCArYVsxXS50b1ByZWNpc2lvbihuKV07XG59O1xuVmVjLnBvaW50c0JldHdlZW4gPSAoQSwgQiwgc3RlcHMgPSA2KSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHN0ZXBzKSkubWFwKChfLCBpKSA9PiB7XG4gICAgY29uc3QgdCA9IGkgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCBrID0gTWF0aC5taW4oMSwgMC41ICsgTWF0aC5hYnMoMC41IC0gdCkpO1xuICAgIHJldHVybiBbLi4uX1ZlYy5scnAoQSwgQiwgdCksIGtdO1xuICB9KTtcbn07XG5WZWMuc2xvcGUgPSAoQSwgQikgPT4ge1xuICBpZiAoQVswXSA9PT0gQlswXSlcbiAgICByZXR1cm4gTmFOO1xuICByZXR1cm4gKEFbMV0gLSBCWzFdKSAvIChBWzBdIC0gQlswXSk7XG59O1xuVmVjLm1heCA9ICguLi52KSA9PiB7XG4gIHJldHVybiBbTWF0aC5tYXgoLi4udi5tYXAoKGEpID0+IGFbMF0pKSwgTWF0aC5tYXgoLi4udi5tYXAoKGEpID0+IGFbMV0pKV07XG59O1xuVmVjLm1pbiA9ICguLi52KSA9PiB7XG4gIHJldHVybiBbTWF0aC5tYXgoLi4udi5tYXAoKGEpID0+IGFbMF0pKSwgTWF0aC5tYXgoLi4udi5tYXAoKGEpID0+IGFbMV0pKV07XG59O1xuXG4vLyBzcmMvc3BsaW5lLnRzXG52YXIgU3BsaW5lID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihwb2ludHMgPSBbXSkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5sZW5ndGhzID0gW107XG4gICAgdGhpcy50b3RhbExlbmd0aCA9IDA7XG4gICAgdGhpcy5hZGRQb2ludCA9IChwb2ludCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJldikge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBWZWMuZGlzdCh0aGlzLnByZXYsIHBvaW50KTtcbiAgICAgICAgdGhpcy5sZW5ndGhzLnB1c2gobGVuZ3RoKTtcbiAgICAgICAgdGhpcy50b3RhbExlbmd0aCArPSBsZW5ndGg7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmV2ID0gcG9pbnQ7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gKCkgPT4ge1xuICAgICAgdGhpcy5wb2ludHMgPSB0aGlzLnByZXYgPyBbdGhpcy5wcmV2XSA6IFtdO1xuICAgICAgdGhpcy50b3RhbExlbmd0aCA9IDA7XG4gICAgfTtcbiAgICB0aGlzLmdldFNwbGluZVBvaW50ID0gKHJ0KSA9PiB7XG4gICAgICBjb25zdCB7IHBvaW50cyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGwgPSBwb2ludHMubGVuZ3RoIC0gMSwgZCA9IE1hdGgudHJ1bmMocnQpLCBwMSA9IE1hdGgubWluKGQgKyAxLCBsKSwgcDIgPSBNYXRoLm1pbihwMSArIDEsIGwpLCBwMyA9IE1hdGgubWluKHAyICsgMSwgbCksIHAwID0gcDEgLSAxLCB0ID0gcnQgLSBkO1xuICAgICAgY29uc3QgdHQgPSB0ICogdCwgdHR0ID0gdHQgKiB0LCBxMSA9IC10dHQgKyAyICogdHQgLSB0LCBxMiA9IDMgKiB0dHQgLSA1ICogdHQgKyAyLCBxMyA9IC0zICogdHR0ICsgNCAqIHR0ICsgdCwgcTQgPSB0dHQgLSB0dDtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIChwb2ludHNbcDBdWzBdICogcTEgKyBwb2ludHNbcDFdWzBdICogcTIgKyBwb2ludHNbcDJdWzBdICogcTMgKyBwb2ludHNbcDNdWzBdICogcTQpIC8gMixcbiAgICAgICAgKHBvaW50c1twMF1bMV0gKiBxMSArIHBvaW50c1twMV1bMV0gKiBxMiArIHBvaW50c1twMl1bMV0gKiBxMyArIHBvaW50c1twM11bMV0gKiBxNCkgLyAyXG4gICAgICBdO1xuICAgIH07XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgdGhpcy5sZW5ndGhzID0gcG9pbnRzLm1hcCgocG9pbnQsIGksIGFycikgPT4gaSA9PT0gMCA/IDAgOiBWZWMuZGlzdChwb2ludCwgYXJyW2kgLSAxXSkpO1xuICAgIHRoaXMudG90YWxMZW5ndGggPSB0aGlzLmxlbmd0aHMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLCAwKTtcbiAgfVxufTtcblxuLy8gc3JjL3BlcmZlY3QtY3Vyc29yLnRzXG52YXIgX1BlcmZlY3RDdXJzb3IgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGNiKSB7XG4gICAgdGhpcy5zdGF0ZSA9IFwiaWRsZVwiO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMubGFzdFJlcXVlc3RJZCA9IDA7XG4gICAgdGhpcy50aW1lb3V0SWQgPSAwO1xuICAgIHRoaXMuc3BsaW5lID0gbmV3IFNwbGluZSgpO1xuICAgIHRoaXMuYWRkUG9pbnQgPSAocG9pbnQpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5taW4obm93IC0gdGhpcy50aW1lc3RhbXAsIF9QZXJmZWN0Q3Vyc29yLk1BWF9JTlRFUlZBTCk7XG4gICAgICBpZiAoIXRoaXMucHJldlBvaW50KSB7XG4gICAgICAgIHRoaXMuc3BsaW5lLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJldlBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuc3BsaW5lLmFkZFBvaW50KHBvaW50KTtcbiAgICAgICAgdGhpcy5jYihwb2ludCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBcInN0b3BwZWRcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwic3RvcHBlZFwiKSB7XG4gICAgICAgIGlmIChWZWMuZGlzdCh0aGlzLnByZXZQb2ludCwgcG9pbnQpIDwgNCkge1xuICAgICAgICAgIHRoaXMuY2IocG9pbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwbGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLnNwbGluZS5hZGRQb2ludCh0aGlzLnByZXZQb2ludCk7XG4gICAgICAgIHRoaXMuc3BsaW5lLmFkZFBvaW50KHRoaXMucHJldlBvaW50KTtcbiAgICAgICAgdGhpcy5zcGxpbmUuYWRkUG9pbnQocG9pbnQpO1xuICAgICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNwbGluZS5hZGRQb2ludChwb2ludCk7XG4gICAgICB9XG4gICAgICBpZiAoZHVyYXRpb24gPCAxNikge1xuICAgICAgICB0aGlzLnByZXZQb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgdGhpcy5jYihwb2ludCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc3BsaW5lLnBvaW50cy5sZW5ndGggLSAzLFxuICAgICAgICBmcm9tOiB0aGlzLnByZXZQb2ludCxcbiAgICAgICAgdG86IHBvaW50LFxuICAgICAgICBkdXJhdGlvblxuICAgICAgfTtcbiAgICAgIHRoaXMucHJldlBvaW50ID0gcG9pbnQ7XG4gICAgICB0aGlzLnRpbWVzdGFtcCA9IG5vdztcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIFwiaWRsZVwiOiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYW5pbWF0aW5nXCI7XG4gICAgICAgICAgdGhpcy5hbmltYXRlTmV4dChhbmltYXRpb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJhbmltYXRpbmdcIjoge1xuICAgICAgICAgIHRoaXMucXVldWUucHVzaChhbmltYXRpb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFuaW1hdGVOZXh0ID0gKGFuaW1hdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSAocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCkgLyBhbmltYXRpb24uZHVyYXRpb247XG4gICAgICAgIGlmICh0IDw9IDEgJiYgdGhpcy5zcGxpbmUucG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jYih0aGlzLnNwbGluZS5nZXRTcGxpbmVQb2ludCh0ICsgYW5pbWF0aW9uLnN0YXJ0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxhc3RSZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYW5pbWF0aW5nXCI7XG4gICAgICAgICAgdGhpcy5hbmltYXRlTmV4dChuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gXCJpZGxlXCI7XG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcInN0b3BwZWRcIjtcbiAgICAgICAgICB9LCBfUGVyZmVjdEN1cnNvci5NQVhfSU5URVJWQUwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbG9vcCgpO1xuICAgIH07XG4gICAgdGhpcy5kaXNwb3NlID0gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICB9O1xuICAgIHRoaXMuY2IgPSBjYjtcbiAgfVxufTtcbnZhciBQZXJmZWN0Q3Vyc29yID0gX1BlcmZlY3RDdXJzb3I7XG5QZXJmZWN0Q3Vyc29yLk1BWF9JTlRFUlZBTCA9IDMwMDtcbmV4cG9ydCB7XG4gIFBlcmZlY3RDdXJzb3Jcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/perfect-cursors/dist/esm/index.js\n");

/***/ })

};
;