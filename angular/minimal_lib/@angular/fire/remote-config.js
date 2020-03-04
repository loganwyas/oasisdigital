(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('firebase/app'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/remote-config', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', 'firebase/app', '@angular/common'], factory) :
    (global = global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire['remote-config'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.firebase, global.ng.common));
}(this, (function (exports, core, rxjs, operators, fire, app, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ConfigTemplate() { }
    ;
    /** @type {?} */
    var SETTINGS = new core.InjectionToken('angularfire2.remoteConfig.settings');
    /** @type {?} */
    var DEFAULTS = new core.InjectionToken('angularfire2.remoteConfig.defaultConfig');
    // WARNING: interface has both a type and a value, skipping emit
    ;
    // TODO export as implements Partial<...> so minor doesn't break us
    var   
    // TODO export as implements Partial<...> so minor doesn't break us
    Value = /** @class */ (function () {
        function Value(_source, _value) {
            this._source = _source;
            this._value = _value;
        }
        /**
         * @return {?}
         */
        Value.prototype.asBoolean = /**
         * @return {?}
         */
        function () { return ['1', 'true', 't', 'y', 'yes', 'on'].indexOf(this._value.toLowerCase()) > -1; };
        /**
         * @return {?}
         */
        Value.prototype.asString = /**
         * @return {?}
         */
        function () { return this._value; };
        /**
         * @return {?}
         */
        Value.prototype.asNumber = /**
         * @return {?}
         */
        function () { return Number(this._value) || 0; };
        /**
         * @return {?}
         */
        Value.prototype.getSource = /**
         * @return {?}
         */
        function () { return this._source; };
        return Value;
    }());
    if (false) {
        /** @type {?} */
        Value.prototype._source;
        /** @type {?} */
        Value.prototype._value;
    }
    // SEMVER use ConstructorParameters when we can support Typescript 3.6
    var   
    // SEMVER use ConstructorParameters when we can support Typescript 3.6
    Parameter = /** @class */ (function (_super) {
        __extends(Parameter, _super);
        function Parameter(key, fetchTimeMillis, source, value) {
            var _this = _super.call(this, source, value) || this;
            _this.key = key;
            _this.fetchTimeMillis = fetchTimeMillis;
            return _this;
        }
        return Parameter;
    }(Value));
    if (false) {
        /** @type {?} */
        Parameter.prototype.key;
        /** @type {?} */
        Parameter.prototype.fetchTimeMillis;
    }
    // If it's a Parameter array, test any, else test the individual Parameter
    /** @type {?} */
    var filterTest = (/**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { return operators.filter((/**
     * @param {?} it
     * @return {?}
     */
    function (it) { return Array.isArray(it) ? it.some(fn) : fn(it); })); })
    // Allow the user to bypass the default values and wait till they get something from the server, even if it's a cached copy;
    // if used in conjuntion with first() it will only fetch RC values from the server if they aren't cached locally
    ;
    var ɵ0 = filterTest;
    // Allow the user to bypass the default values and wait till they get something from the server, even if it's a cached copy;
    // if used in conjuntion with first() it will only fetch RC values from the server if they aren't cached locally
    /** @type {?} */
    var filterRemote = (/**
     * @return {?}
     */
    function () { return filterTest((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.getSource() === 'remote'; })); });
    // filterFresh allows the developer to effectively set up a maximum cache time
    /** @type {?} */
    var filterFresh = (/**
     * @param {?} howRecentInMillis
     * @return {?}
     */
    function (howRecentInMillis) { return filterTest((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.fetchTimeMillis + howRecentInMillis >= new Date().getTime(); })); });
    var AngularFireRemoteConfig = /** @class */ (function () {
        function AngularFireRemoteConfig(options, nameOrConfig, settings, defaultConfig, zone, platformId) {
            this.zone = zone;
            /** @type {?} */
            var schedulers = new fire["ɵAngularFireSchedulers"](zone);
            /** @type {?} */
            var remoteConfig$ = rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap((/**
             * @return {?}
             */
            function () { return common.isPlatformBrowser(platformId) ? import('firebase/remote-config') : rxjs.empty(); })), operators.map((/**
             * @return {?}
             */
            function () { return fire["ɵfirebaseAppFactory"](options, zone, nameOrConfig); })), operators.map((/**
             * @param {?} app
             * @return {?}
             */
            function (app) { return app.remoteConfig(); })), operators.tap((/**
             * @param {?} rc
             * @return {?}
             */
            function (rc) {
                if (settings) {
                    rc.settings = settings;
                }
                if (defaultConfig) {
                    rc.defaultConfig = defaultConfig;
                }
            })), operators.startWith(undefined), operators.shareReplay({ bufferSize: 1, refCount: false }));
            /** @type {?} */
            var loadedRemoteConfig$ = remoteConfig$.pipe(operators.filter((/**
             * @param {?} rc
             * @return {?}
             */
            function (rc) { return !!rc; })));
            /** @type {?} */
            var default$ = rxjs.of(Object.keys(defaultConfig || {}).reduce((/**
             * @param {?} c
             * @param {?} k
             * @return {?}
             */
            function (c, k) {
                var _a;
                return (__assign(__assign({}, c), (_a = {}, _a[k] = new Value("default", (/** @type {?} */ (defaultConfig))[k].toString()), _a)));
            }), {}));
            // we should filter out the defaults we provided to RC, since we have our own implementation
            // that gives us a -1 for fetchTimeMillis (so filterFresh can filter them out)
            /** @type {?} */
            var filterOutDefaults = operators.map((/**
             * @param {?} all
             * @return {?}
             */
            function (all) {
                return Object.keys(all)
                    .filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return all[key].getSource() != 'default'; }))
                    .reduce((/**
                 * @param {?} acc
                 * @param {?} key
                 * @return {?}
                 */
                function (acc, key) {
                    var _a;
                    return (__assign(__assign({}, acc), (_a = {}, _a[key] = all[key], _a)));
                }), {});
            }));
            /** @type {?} */
            var existing$ = loadedRemoteConfig$.pipe(operators.switchMap((/**
             * @param {?} rc
             * @return {?}
             */
            function (rc) {
                return rc.activate()
                    .then((/**
                 * @return {?}
                 */
                function () { return rc.ensureInitialized(); }))
                    .then((/**
                 * @return {?}
                 */
                function () { return rc.getAll(); }));
            })), filterOutDefaults);
            /** @type {?} */
            var fresh$ = loadedRemoteConfig$.pipe(operators.switchMap((/**
             * @param {?} rc
             * @return {?}
             */
            function (rc) { return zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return rc.fetchAndActivate()
                    .then((/**
                 * @return {?}
                 */
                function () { return rc.ensureInitialized(); }))
                    .then((/**
                 * @return {?}
                 */
                function () { return rc.getAll(); }));
            })); })), filterOutDefaults);
            this.parameters = rxjs.concat(default$, existing$, fresh$).pipe(scanToParametersArray(remoteConfig$), operators.shareReplay({ bufferSize: 1, refCount: true }));
            this.changes = this.parameters.pipe(operators.switchMap((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return rxjs.of.apply(void 0, __spread(params)); })), operators.groupBy((/**
             * @param {?} param
             * @return {?}
             */
            function (param) { return param.key; })), operators.mergeMap((/**
             * @param {?} group
             * @return {?}
             */
            function (group) { return group.pipe(operators.distinctUntilChanged()); })));
            this.strings = proxyAll(this.parameters, 'strings');
            this.booleans = proxyAll(this.parameters, 'booleans');
            this.numbers = proxyAll(this.parameters, 'numbers');
            return fire["ɵlazySDKProxy"](this, loadedRemoteConfig$, zone);
        }
        AngularFireRemoteConfig.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        AngularFireRemoteConfig.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [fire.FIREBASE_OPTIONS,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [fire.FIREBASE_APP_NAME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [SETTINGS,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [DEFAULTS,] }] },
            { type: core.NgZone },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        /** @nocollapse */ AngularFireRemoteConfig.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AngularFireRemoteConfig_Factory() { return new AngularFireRemoteConfig(core["ɵɵinject"](fire.FIREBASE_OPTIONS), core["ɵɵinject"](fire.FIREBASE_APP_NAME, 8), core["ɵɵinject"](SETTINGS, 8), core["ɵɵinject"](DEFAULTS, 8), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](core.PLATFORM_ID)); }, token: AngularFireRemoteConfig, providedIn: "any" });
        return AngularFireRemoteConfig;
    }());
    if (false) {
        /** @type {?} */
        AngularFireRemoteConfig.prototype.changes;
        /** @type {?} */
        AngularFireRemoteConfig.prototype.parameters;
        /** @type {?} */
        AngularFireRemoteConfig.prototype.numbers;
        /** @type {?} */
        AngularFireRemoteConfig.prototype.booleans;
        /** @type {?} */
        AngularFireRemoteConfig.prototype.strings;
        /**
         * @type {?}
         * @private
         */
        AngularFireRemoteConfig.prototype.zone;
    }
    // I ditched loading the defaults into RC and a simple map for scan since we already have our own defaults implementation.
    // The idea here being that if they have a default that never loads from the server, they will be able to tell via fetchTimeMillis on the Parameter.
    // Also if it doesn't come from the server it won't emit again in .changes, due to the distinctUntilChanged, which we can simplify to === rather than deep comparison
    /** @type {?} */
    var scanToParametersArray = (/**
     * @param {?} remoteConfig
     * @return {?}
     */
    function (remoteConfig) { return rxjs.pipe(operators.withLatestFrom(remoteConfig), operators.scan((/**
     * @param {?} existing
     * @param {?} __1
     * @return {?}
     */
    function (existing, _a) {
        var _b = __read(_a, 2), all = _b[0], rc = _b[1];
        // SEMVER use "new Set" to unique once we're only targeting es6
        // at the scale we expect remote config to be at, we probably won't see a performance hit from this unoptimized uniqueness implementation
        // const allKeys = [...new Set([...existing.map(p => p.key), ...Object.keys(all)])];
        /** @type {?} */
        var allKeys = __spread(existing.map((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.key; })), Object.keys(all)).filter((/**
         * @param {?} v
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        function (v, i, a) { return a.indexOf(v) === i; }));
        return allKeys.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var updatedValue = all[key];
            return updatedValue ? new Parameter(key, rc ? rc.fetchTimeMillis : -1, updatedValue.getSource(), updatedValue.asString())
                : (/** @type {?} */ (existing.find((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.key === key; }))));
        }));
    }), (/** @type {?} */ ([])))); });
    var ɵ1 = scanToParametersArray;
    /** @type {?} */
    var AS_TO_FN = { 'strings': 'asString', 'numbers': 'asNumber', 'booleans': 'asBoolean' };
    /** @type {?} */
    var STATIC_VALUES = { 'numbers': 0, 'booleans': false, 'strings': undefined };
    /** @type {?} */
    var budget = (/**
     * @template T
     * @param {?} interval
     * @return {?}
     */
    function (interval) { return (/**
     * @param {?} source
     * @return {?}
     */
    function (source) { return new rxjs.Observable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        /** @type {?} */
        var timedOut = false;
        // TODO use scheduler task rather than settimeout
        /** @type {?} */
        var timeout = setTimeout((/**
         * @return {?}
         */
        function () {
            observer.complete();
            timedOut = true;
        }), interval);
        return source.subscribe({
            next: /**
             * @param {?} val
             * @return {?}
             */
            function (val) { if (!timedOut) {
                observer.next(val);
            } },
            error: /**
             * @param {?} err
             * @return {?}
             */
            function (err) { if (!timedOut) {
                clearTimeout(timeout);
                observer.error(err);
            } },
            complete: /**
             * @return {?}
             */
            function () { if (!timedOut) {
                clearTimeout(timeout);
                observer.complete();
            } }
        });
    })); }); });
    /** @type {?} */
    var typedMethod = (/**
     * @param {?} it
     * @return {?}
     */
    function (it) {
        switch (typeof it) {
            case 'string': return 'asString';
            case 'boolean': return 'asBoolean';
            case 'number': return 'asNumber';
            default: return 'asString';
        }
    });
    var ɵ2 = typedMethod;
    /**
     * @template T
     * @param {?=} to
     * @return {?}
     */
    function scanToObject(to) {
        if (to === void 0) { to = 'strings'; }
        return rxjs.pipe(
        // TODO cleanup
        operators.scan((/**
         * @param {?} c
         * @param {?} p
         * @return {?}
         */
        function (c, p) {
            var _a;
            return (__assign(__assign({}, c), (_a = {}, _a[p.key] = typeof to === 'object' ?
                p[typedMethod(to[p.key])]() :
                p[AS_TO_FN[to]](), _a)));
        }), typeof to === 'object' ?
            (/** @type {?} */ (to)) :
            (/** @type {?} */ ({}))), operators.debounceTime(1), budget(10), operators.distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return JSON.stringify(a) === JSON.stringify(b); })));
    }
    ;
    /**
     * @template T
     * @param {?=} to
     * @return {?}
     */
    function mapToObject(to) {
        if (to === void 0) { to = 'strings'; }
        return rxjs.pipe(
        // TODO this is getting a little long, cleanup
        operators.map((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return params.reduce((/**
         * @param {?} c
         * @param {?} p
         * @return {?}
         */
        function (c, p) {
            var _a;
            return (__assign(__assign({}, c), (_a = {}, _a[p.key] = typeof to === 'object' ?
                p[typedMethod(to[p.key])]() :
                p[AS_TO_FN[to]](), _a)));
        }), typeof to === 'object' ?
            (/** @type {?} */ (to)) :
            (/** @type {?} */ ({}))); })), operators.distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return JSON.stringify(a) === JSON.stringify(b); })));
    }
    ;
    // TODO look into the types here, I don't like the anys
    /** @type {?} */
    var proxyAll = (/**
     * @param {?} observable
     * @param {?} as
     * @return {?}
     */
    function (observable, as) { return (/** @type {?} */ (new Proxy(observable.pipe(mapToObject((/** @type {?} */ (as)))), {
        get: (/**
         * @param {?} self
         * @param {?} name
         * @return {?}
         */
        function (self, name) { return self[name] || observable.pipe(operators.map((/**
         * @param {?} all
         * @return {?}
         */
        function (all) { return all.find((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.key === name; })); })), operators.map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) { return param ? param[AS_TO_FN[as]]() : STATIC_VALUES[as]; })), operators.distinctUntilChanged()); })
    }))); });
    var ɵ3 = proxyAll;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireRemoteConfigModule = /** @class */ (function () {
        function AngularFireRemoteConfigModule() {
        }
        AngularFireRemoteConfigModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [AngularFireRemoteConfig]
                    },] }
        ];
        return AngularFireRemoteConfigModule;
    }());

    exports.AngularFireRemoteConfig = AngularFireRemoteConfig;
    exports.AngularFireRemoteConfigModule = AngularFireRemoteConfigModule;
    exports.DEFAULTS = DEFAULTS;
    exports.Parameter = Parameter;
    exports.SETTINGS = SETTINGS;
    exports.Value = Value;
    exports.budget = budget;
    exports.filterFresh = filterFresh;
    exports.filterRemote = filterRemote;
    exports.mapToObject = mapToObject;
    exports.scanToObject = scanToObject;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided