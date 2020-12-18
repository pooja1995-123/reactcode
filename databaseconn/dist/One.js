"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])(); // const mongodb=require("mongodb");

var mongoclient = _mongodb["default"].MongoClient;
var local_url = "mongodb://127.0.0.1:27017/";
var res;
app.get("/", function (req, res) {
  res.send(res[0]);
});
mongoclient.connect(local_url, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, db) {
    var db_conn, col_conn, respose;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.db("demodb");

          case 2:
            db_conn = _context.sent;
            col_conn = db_conn.collection("biodata");
            respose = col_conn.find().toArray();
            console.log(respose[0]);
            res = respose;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(7000, function (err) {
  console.log("server is running");
});