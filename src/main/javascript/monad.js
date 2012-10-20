/* Option Monad */

(function(window) {

var Option = window.Option = {}

var Some = Option.Some = Option.some = function(val) {
    return new Some.fn.init(val)
}

Some.fn = Some.prototype = {
    init: function(val) {
        if (val == null) {
            throw "Illegal state exception"
        }
        this.val = val
    },

    map: function (fn) {
            return new Some(fn(this.val))
    },
    isSome: function () {
        return true
    },
    isNone : function () {
        return false
    },
    bind : function (bindFn) {
        return bindFn(this.val)
    },
    some : function() {
        return this.val
    },
    orSome: function(otherValue) {
        return this.val
    }


}

Some.fn.init.prototype = Some.fn

var None = Option.None = Option.none = function() {
    return new None.fn.init()
}

None.fn = None.prototype = {
    init: function(val) {
    },

    map: function () {
        return this
    },
    isSome: function () {
      return false
    },
    isNone: function () {
        return true
    },
    bind: function (bindFn) {
        return this
    },
    some: function() {
        throw "Illegal state exception"
    },
    orSome: function(otherValue) {
        return otherValue
    }
}

None.fn.init.prototype = None.fn

var Validation = window.Validation = {}

var Success = Validation.Success = Validation.success = function(val) {
    return new Success.fn.init(val)
}

Success.fn = Success.prototype = {
    init: function(val) {
        this.val = val
    },
    map: function (fn) {
        return new Success(fn(this.val))
    },
    success: function() {
        return this.val;
    }
}

Success.fn.init.prototype = Success.fn

return this
}(window || this));
