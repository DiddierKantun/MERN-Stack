"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** Models that are used. */
var User = require('../models/User');

var userController = {
  /** Get user information. */
  getUsers: function () {
    var _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var users;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return User.find();

            case 3:
              users = _context.sent;
              res.json(users);
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function getUsers(_x, _x2, _x3) {
      return _getUsers.apply(this, arguments);
    }

    return getUsers;
  }(),

  /** Get one specific user information by ID. */
  getUserById: function () {
    var _getUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return User.findById(req.params.id);

            case 3:
              user = _context2.sent;
              res.json(user);
              _context2.next = 9;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    function getUserById(_x4, _x5, _x6) {
      return _getUserById.apply(this, arguments);
    }

    return getUserById;
  }(),

  /** Create a new user in DB. */
  createUser: function () {
    var _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
      var _req$body, name, lastName, email, password, newUser;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$body = req.body, name = _req$body.name, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password;
              newUser = new User({
                name: name,
                lastName: lastName,
                email: email,
                password: password
              });
              _context3.next = 5;
              return newUser.save();

            case 5:
              res.json({
                message: "User created"
              });
              _context3.next = 10;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    function createUser(_x7, _x8, _x9) {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }(),

  /** Update user information. */
  updateUserById: function () {
    var _updateUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return User.findOneAndUpdate(req.params.id, req.body);

            case 3:
              res.json({
                message: "User updated"
              });
              _context4.next = 8;
              break;

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 6]]);
    }));

    function updateUserById(_x10, _x11, _x12) {
      return _updateUserById.apply(this, arguments);
    }

    return updateUserById;
  }(),

  /** Delete user from DB. */
  deleteUserById: function () {
    var _deleteUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return User.findByIdAndDelete(req.params.id);

            case 3:
              res.json({
                message: "User deleted"
              });
              _context5.next = 8;
              break;

            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 6]]);
    }));

    function deleteUserById(_x13, _x14, _x15) {
      return _deleteUserById.apply(this, arguments);
    }

    return deleteUserById;
  }()
};
module.exports = userController;