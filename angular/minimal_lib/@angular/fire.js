(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('firebase/app')) :
    typeof define === 'function' && define.amd ? define('@angular/fire', ['exports', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/core', 'firebase/app'], factory) :
    (global = global || self, factory((global.angular = global.angular || {}, global.angular.fire = {}), global.ng, global.rxjs, global.rxjs.operators, global.ng, global.firebase));
}(this, (function (exports, common, rxjs, operators, core, app) { 'use strict';

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
     * @return {?}
     */
    function noop() { }
    /**
     * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
     */
    var   /**
     * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
     */
    ɵZoneScheduler = /** @class */ (function () {
        function ɵZoneScheduler(zone, delegate) {
            if (delegate === void 0) { delegate = rxjs.queueScheduler; }
            this.zone = zone;
            this.delegate = delegate;
        }
        /**
         * @return {?}
         */
        ɵZoneScheduler.prototype.now = /**
         * @return {?}
         */
        function () {
            return this.delegate.now();
        };
        /**
         * @param {?} work
         * @param {?=} delay
         * @param {?=} state
         * @return {?}
         */
        ɵZoneScheduler.prototype.schedule = /**
         * @param {?} work
         * @param {?=} delay
         * @param {?=} state
         * @return {?}
         */
        function (work, delay, state) {
            /** @type {?} */
            var targetZone = this.zone;
            // Wrap the specified work function to make sure that if nested scheduling takes place the
            // work is executed in the correct zone
            /** @type {?} */
            var workInZone = (/**
             * @this {?}
             * @param {?} state
             * @return {?}
             */
            function (state) {
                var _this = this;
                targetZone.runGuarded((/**
                 * @return {?}
                 */
                function () {
                    work.apply(_this, [state]);
                }));
            })
            // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
            // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
            // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.
            ;
            // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
            // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
            // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.
            return this.delegate.schedule(workInZone, delay, state);
        };
        return ɵZoneScheduler;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ɵZoneScheduler.prototype.zone;
        /**
         * @type {?}
         * @private
         */
        ɵZoneScheduler.prototype.delegate;
    }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    ɵBlockUntilFirstOperator = /** @class */ (function () {
        function ɵBlockUntilFirstOperator(zone) {
            this.zone = zone;
            this.task = null;
        }
        /**
         * @param {?} subscriber
         * @param {?} source
         * @return {?}
         */
        ɵBlockUntilFirstOperator.prototype.call = /**
         * @param {?} subscriber
         * @param {?} source
         * @return {?}
         */
        function (subscriber, source) {
            /** @type {?} */
            var unscheduleTask = this.unscheduleTask.bind(this);
            this.task = this.zone.run((/**
             * @return {?}
             */
            function () { return Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop); }));
            return source.pipe(operators.tap(unscheduleTask, unscheduleTask, unscheduleTask)).subscribe(subscriber).add(unscheduleTask);
        };
        /**
         * @private
         * @return {?}
         */
        ɵBlockUntilFirstOperator.prototype.unscheduleTask = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.task != null && this.task.state === 'scheduled') {
                this.task.invoke();
                this.task = null;
            }
        };
        return ɵBlockUntilFirstOperator;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ɵBlockUntilFirstOperator.prototype.task;
        /**
         * @type {?}
         * @private
         */
        ɵBlockUntilFirstOperator.prototype.zone;
    }
    var ɵAngularFireSchedulers = /** @class */ (function () {
        function ɵAngularFireSchedulers(ngZone) {
            this.ngZone = ngZone;
            this.outsideAngular = ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return new ɵZoneScheduler(Zone.current); }));
            this.insideAngular = ngZone.run((/**
             * @return {?}
             */
            function () { return new ɵZoneScheduler(Zone.current, rxjs.asyncScheduler); }));
        }
        return ɵAngularFireSchedulers;
    }());
    if (false) {
        /** @type {?} */
        ɵAngularFireSchedulers.prototype.outsideAngular;
        /** @type {?} */
        ɵAngularFireSchedulers.prototype.insideAngular;
        /** @type {?} */
        ɵAngularFireSchedulers.prototype.ngZone;
    }
    /**
     * Operator to block the zone until the first value has been emitted or the observable
     * has completed/errored. This is used to make sure that universal waits until the first
     * value from firebase but doesn't block the zone forever since the firebase subscription
     * is still alive.
     * @param {?} schedulers
     * @param {?} platformId
     * @return {?}
     */
    function ɵkeepUnstableUntilFirstFactory(schedulers, platformId) {
        return (/**
         * @template T
         * @param {?} obs$
         * @return {?}
         */
        function keepUnstableUntilFirst(obs$) {
            if (common.isPlatformServer(platformId)) {
                obs$ = obs$.lift(new ɵBlockUntilFirstOperator(schedulers.ngZone));
            }
            return obs$.pipe(
            // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
            operators.subscribeOn(schedulers.outsideAngular), 
            // Run operators inside the angular zone (e.g. side effects via tap())
            operators.observeOn(schedulers.insideAngular), operators.share());
        });
    }
    // DEBUG quick debugger function for inline logging that typescript doesn't complain about
    //       wrote it for debugging the ɵlazySDKProxy, commenting out for now; should consider exposing a
    //       verbose mode for AngularFire in a future release that uses something like this in multiple places
    //       usage: () => log('something') || returnValue
    // const log = (...args: any[]): false => { console.log(...args); return false }
    // The problem here are things like ngOnDestroy are missing, then triggering the service
    // rather than dig too far; I'm capturing these as I go.
    /** @type {?} */
    var noopFunctions = ['ngOnDestroy'];
    // INVESTIGATE should we make the Proxy revokable and do some cleanup?
    //             right now it's fairly simple but I'm sure this will grow in complexity
    /** @type {?} */
    var ɵlazySDKProxy = (/**
     * @param {?} klass
     * @param {?} observable
     * @param {?} zone
     * @return {?}
     */
    function (klass, observable, zone) {
        return new Proxy(klass, {
            get: (/**
             * @param {?} _
             * @param {?} name
             * @return {?}
             */
            function (_, name) { return zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                if (klass[name]) {
                    return klass[name];
                }
                if (noopFunctions.includes(name)) {
                    return (/**
                     * @return {?}
                     */
                    function () { });
                }
                /** @type {?} */
                var promise = observable.toPromise().then((/**
                 * @param {?} mod
                 * @return {?}
                 */
                function (mod) {
                    /** @type {?} */
                    var ret = mod && mod[name];
                    // TODO move to proper type guards
                    if (typeof ret == 'function') {
                        return ret.bind(mod);
                    }
                    else if (ret && ret.then) {
                        return ret.then((/**
                         * @param {?} res
                         * @return {?}
                         */
                        function (res) { return zone.run((/**
                         * @return {?}
                         */
                        function () { return res; })); }));
                    }
                    else {
                        return zone.run((/**
                         * @return {?}
                         */
                        function () { return ret; }));
                    }
                }));
                // recurse the proxy
                return new Proxy((/**
                 * @return {?}
                 */
                function () { return undefined; }), {
                    get: (/**
                     * @param {?} _
                     * @param {?} name
                     * @return {?}
                     */
                    function (_, name) { return promise[name]; }),
                    // TODO handle callbacks as transparently as I can 
                    apply: (/**
                     * @param {?} self
                     * @param {?} _
                     * @param {?} args
                     * @return {?}
                     */
                    function (self, _, args) { return promise.then((/**
                     * @param {?} it
                     * @return {?}
                     */
                    function (it) { return it && it.apply(void 0, __spread(args)); })); })
                });
            })); })
        });
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function FirebaseOptions() { }
    ;
    /**
     * @record
     */
    function FirebaseAppConfig() { }
    ;
    /** @type {?} */
    var FIREBASE_OPTIONS = new core.InjectionToken('angularfire2.app.options');
    /** @type {?} */
    var FIREBASE_APP_NAME = new core.InjectionToken('angularfire2.app.nameOrConfig');
    // Have to implement as we need to return a class from the provider, we should consider exporting
    // this in the firebase/app types as this is our highest risk of breaks
    var   
    // Have to implement as we need to return a class from the provider, we should consider exporting
    // this in the firebase/app types as this is our highest risk of breaks
    FirebaseApp = /** @class */ (function () {
        function FirebaseApp() {
        }
        return FirebaseApp;
    }());
    if (false) {
        /** @type {?} */
        FirebaseApp.prototype.name;
        /** @type {?} */
        FirebaseApp.prototype.options;
        /** @type {?} */
        FirebaseApp.prototype.analytics;
        /** @type {?} */
        FirebaseApp.prototype.auth;
        /** @type {?} */
        FirebaseApp.prototype.database;
        /** @type {?} */
        FirebaseApp.prototype.messaging;
        /** @type {?} */
        FirebaseApp.prototype.performance;
        /** @type {?} */
        FirebaseApp.prototype.storage;
        /** @type {?} */
        FirebaseApp.prototype.delete;
        /** @type {?} */
        FirebaseApp.prototype.firestore;
        /** @type {?} */
        FirebaseApp.prototype.functions;
        /** @type {?} */
        FirebaseApp.prototype.remoteConfig;
    }
    /** @type {?} */
    var VERSION = new core.Version('6.0.0-rc.0');
    /**
     * @param {?} options
     * @param {?} zone
     * @param {?=} nameOrConfig
     * @return {?}
     */
    function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
        /** @type {?} */
        var name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
        /** @type {?} */
        var config = typeof nameOrConfig === 'object' && nameOrConfig || {};
        config.name = config.name || name;
        // Added any due to some inconsistency between @firebase/app and firebase types
        /** @type {?} */
        var existingApp = (/** @type {?} */ (app.apps.filter((/**
         * @param {?} app
         * @return {?}
         */
        function (app) { return app && app.name === config.name; }))[0]));
        // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
        // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206
        return (/** @type {?} */ ((existingApp || zone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return app.initializeApp(options, (/** @type {?} */ (config))); })))));
    }
    /** @type {?} */
    var FirebaseAppProvider = {
        provide: FirebaseApp,
        useFactory: ɵfirebaseAppFactory,
        deps: [
            FIREBASE_OPTIONS,
            core.NgZone,
            [new core.Optional(), FIREBASE_APP_NAME]
        ]
    };
    var AngularFireModule = /** @class */ (function () {
        function AngularFireModule(platformId) {
            app.registerVersion('angularfire', VERSION.full, platformId.toString());
            app.registerVersion('angular', core.VERSION.full);
        }
        /**
         * @param {?} options
         * @param {?=} nameOrConfig
         * @return {?}
         */
        AngularFireModule.initializeApp = /**
         * @param {?} options
         * @param {?=} nameOrConfig
         * @return {?}
         */
        function (options, nameOrConfig) {
            return {
                ngModule: AngularFireModule,
                providers: [
                    { provide: FIREBASE_OPTIONS, useValue: options },
                    { provide: FIREBASE_APP_NAME, useValue: nameOrConfig }
                ]
            };
        };
        AngularFireModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [FirebaseAppProvider],
                    },] }
        ];
        /** @nocollapse */
        AngularFireModule.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        return AngularFireModule;
    }());

    exports.AngularFireModule = AngularFireModule;
    exports.FIREBASE_APP_NAME = FIREBASE_APP_NAME;
    exports.FIREBASE_OPTIONS = FIREBASE_OPTIONS;
    exports.FirebaseApp = FirebaseApp;
    exports.VERSION = VERSION;
    exports.ɵAngularFireSchedulers = ɵAngularFireSchedulers;
    exports.ɵBlockUntilFirstOperator = ɵBlockUntilFirstOperator;
    exports.ɵZoneScheduler = ɵZoneScheduler;
    exports.ɵfirebaseAppFactory = ɵfirebaseAppFactory;
    exports.ɵkeepUnstableUntilFirstFactory = ɵkeepUnstableUntilFirstFactory;
    exports.ɵlazySDKProxy = ɵlazySDKProxy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided