(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/firestore', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common'], factory) :
    (global = global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.firestore = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common));
}(this, (function (exports, core, rxjs, operators, fire, common) { 'use strict';

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
     * @template T, R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function _fromRef(ref, scheduler) {
        if (scheduler === void 0) { scheduler = rxjs.asyncScheduler; }
        return new rxjs.Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            /** @type {?} */
            var unsubscribe;
            if (scheduler != null) {
                scheduler.schedule((/**
                 * @return {?}
                 */
                function () {
                    unsubscribe = ref.onSnapshot(subscriber);
                }));
            }
            else {
                unsubscribe = ref.onSnapshot(subscriber);
            }
            return (/**
             * @return {?}
             */
            function () {
                if (unsubscribe != null) {
                    unsubscribe();
                }
            });
        }));
    }
    /**
     * @template R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function fromRef(ref, scheduler) {
        return _fromRef(ref, scheduler);
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function fromDocRef(ref, scheduler) {
        return fromRef(ref, scheduler)
            .pipe(operators.map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return ({ payload: payload, type: 'value' }); })));
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function fromCollectionRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(operators.map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return ({ payload: payload, type: 'query' }); })));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Return a stream of document changes on a query. These results are not in sort order but in
     * order of occurence.
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */
    function docChanges(query, scheduler) {
        return fromCollectionRef(query, scheduler)
            .pipe(operators.map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload.docChanges()
                .map((/**
             * @param {?} change
             * @return {?}
             */
            function (change) { return ((/** @type {?} */ ({ type: change.type, payload: change }))); }));
        })));
    }
    /**
     * Return a stream of document changes on a query. These results are in sort order.
     * @template T
     * @param {?} query
     * @param {?} events
     * @param {?=} scheduler
     * @return {?}
     */
    function sortedChanges(query, events, scheduler) {
        return fromCollectionRef(query, scheduler)
            .pipe(operators.map((/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) { return changes.payload.docChanges(); })), operators.scan((/**
         * @param {?} current
         * @param {?} changes
         * @return {?}
         */
        function (current, changes) { return combineChanges(current, changes, events); }), []), operators.map((/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) { return changes.map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return ((/** @type {?} */ ({ type: c.type, payload: c }))); })); })));
    }
    /**
     * Combines the total result set from the current set of changes from an incoming set
     * of changes.
     * @template T
     * @param {?} current
     * @param {?} changes
     * @param {?} events
     * @return {?}
     */
    function combineChanges(current, changes, events) {
        changes.forEach((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            // skip unwanted change types
            if (events.indexOf(change.type) > -1) {
                current = combineChange(current, change);
            }
        }));
        return current;
    }
    /**
     * Creates a new sorted array from a new change.
     * @template T
     * @param {?} combined
     * @param {?} change
     * @return {?}
     */
    function combineChange(combined, change) {
        switch (change.type) {
            case 'added':
                if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                    // Not sure why the duplicates are getting fired
                }
                else {
                    combined.splice(change.newIndex, 0, change);
                }
                break;
            case 'modified':
                if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                    // When an item changes position we first remove it
                    // and then add it's new position
                    if (change.oldIndex !== change.newIndex) {
                        combined.splice(change.oldIndex, 1);
                        combined.splice(change.newIndex, 0, change);
                    }
                    else {
                        combined.splice(change.newIndex, 1, change);
                    }
                }
                break;
            case 'removed':
                if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                    combined.splice(change.oldIndex, 1);
                }
                break;
        }
        return combined;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?=} events
     * @return {?}
     */
    function validateEventsArray(events) {
        if (!events || (/** @type {?} */ (events)).length === 0) {
            events = ['added', 'removed', 'modified'];
        }
        return events;
    }
    /**
     * AngularFirestoreCollection service
     *
     * This class creates a reference to a Firestore Collection. A reference and a query are provided in
     * in the constructor. The query can be the unqueried reference if no query is desired.The class
     * is generic which gives you type safety for data update methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionRef = firebase.firestore.collection('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
     *
     * // NOTE!: the updates are performed on the reference not the query
     * await fakeStock.add({ name: 'FAKE', price: 0.01 });
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */
    var   /**
     * AngularFirestoreCollection service
     *
     * This class creates a reference to a Firestore Collection. A reference and a query are provided in
     * in the constructor. The query can be the unqueried reference if no query is desired.The class
     * is generic which gives you type safety for data update methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionRef = firebase.firestore.collection('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
     *
     * // NOTE!: the updates are performed on the reference not the query
     * await fakeStock.add({ name: 'FAKE', price: 0.01 });
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */
    AngularFirestoreCollection = /** @class */ (function () {
        /**
         * The constructor takes in a CollectionReference and Query to provide wrapper methods
         * for data operations and data streaming.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query. See the AssociatedRefence type for details
         * on this implication.
         * @param ref
         */
        function AngularFirestoreCollection(ref, query, afs) {
            this.ref = ref;
            this.query = query;
            this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param events
         */
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollection.prototype.stateChanges = /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */
        function (events) {
            if (!events || events.length === 0) {
                return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst, operators.map((/**
             * @param {?} actions
             * @return {?}
             */
            function (actions) { return actions.filter((/**
             * @param {?} change
             * @return {?}
             */
            function (change) { return events.indexOf(change.type) > -1; })); })), operators.filter((/**
             * @param {?} changes
             * @return {?}
             */
            function (changes) { return changes.length > 0; })));
        };
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param events
         */
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollection.prototype.auditTrail = /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */
        function (events) {
            return this.stateChanges(events).pipe(operators.scan((/**
             * @param {?} current
             * @param {?} action
             * @return {?}
             */
            function (current, action) { return __spread(current, action); }), []));
        };
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param events
         */
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollection.prototype.snapshotChanges = /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */
        function (events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */
            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        };
        /**
         * @template K
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreCollection.prototype.valueChanges = /**
         * @template K
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = {}; }
            return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
                .pipe(this.afs.keepUnstableUntilFirst, operators.map((/**
             * @param {?} actions
             * @return {?}
             */
            function (actions) { return actions.payload.docs.map((/**
             * @param {?} a
             * @return {?}
             */
            function (a) {
                var _a;
                if (options.idField) {
                    return (/** @type {?} */ (__assign(__assign({}, (/** @type {?} */ (a.data()))), (_a = {}, _a[options.idField] = a.id, _a))));
                }
                else {
                    return a.data();
                }
            })); })));
        };
        /**
         * Retrieve the results of the query once.
         * @param options
         */
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreCollection.prototype.get = /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            return rxjs.from(this.query.get(options)).pipe(operators.observeOn(this.afs.schedulers.insideAngular));
        };
        /**
         * Add data to a collection reference.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query.
         */
        /**
         * Add data to a collection reference.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query.
         * @param {?} data
         * @return {?}
         */
        AngularFirestoreCollection.prototype.add = /**
         * Add data to a collection reference.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return this.ref.add(data);
        };
        /**
         * Create a reference to a single document in a collection.
         * @param path
         */
        /**
         * Create a reference to a single document in a collection.
         * @template T
         * @param {?=} path
         * @return {?}
         */
        AngularFirestoreCollection.prototype.doc = /**
         * Create a reference to a single document in a collection.
         * @template T
         * @param {?=} path
         * @return {?}
         */
        function (path) {
            return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
        };
        return AngularFirestoreCollection;
    }());
    if (false) {
        /** @type {?} */
        AngularFirestoreCollection.prototype.ref;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollection.prototype.query;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollection.prototype.afs;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * AngularFirestoreDocument service
     *
     * This class creates a reference to a Firestore Document. A reference is provided in
     * in the constructor. The class is generic which gives you type safety for data update
     * methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
     * await fakeStock.set({ name: 'FAKE', price: 0.01 });
     * fakeStock.valueChanges().map(snap => {
     *   if(snap.exists) return snap.data();
     *   return null;
     * }).subscribe(value => console.log(value));
     * // OR! Transform using Observable.from() and the data is unwrapped for you
     * Observable.from(fakeStock).subscribe(value => console.log(value));
     * @template T
     */
    var   /**
     * AngularFirestoreDocument service
     *
     * This class creates a reference to a Firestore Document. A reference is provided in
     * in the constructor. The class is generic which gives you type safety for data update
     * methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
     * await fakeStock.set({ name: 'FAKE', price: 0.01 });
     * fakeStock.valueChanges().map(snap => {
     *   if(snap.exists) return snap.data();
     *   return null;
     * }).subscribe(value => console.log(value));
     * // OR! Transform using Observable.from() and the data is unwrapped for you
     * Observable.from(fakeStock).subscribe(value => console.log(value));
     * @template T
     */
    AngularFirestoreDocument = /** @class */ (function () {
        /**
         * The contstuctor takes in a DocumentReference to provide wrapper methods
         * for data operations, data streaming, and Symbol.observable.
         * @param ref
         */
        function AngularFirestoreDocument(ref, afs) {
            this.ref = ref;
            this.afs = afs;
        }
        /**
         * Create or overwrite a single document.
         * @param data
         * @param options
         */
        /**
         * Create or overwrite a single document.
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreDocument.prototype.set = /**
         * Create or overwrite a single document.
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (data, options) {
            return this.ref.set(data, options);
        };
        /**
         * Update some fields of a document without overwriting the entire document.
         * @param data
         */
        /**
         * Update some fields of a document without overwriting the entire document.
         * @param {?} data
         * @return {?}
         */
        AngularFirestoreDocument.prototype.update = /**
         * Update some fields of a document without overwriting the entire document.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return this.ref.update(data);
        };
        /**
         * Delete a document.
         */
        /**
         * Delete a document.
         * @return {?}
         */
        AngularFirestoreDocument.prototype.delete = /**
         * Delete a document.
         * @return {?}
         */
        function () {
            return this.ref.delete();
        };
        /**
         * Create a reference to a sub-collection given a path and an optional query
         * function.
         * @param path
         * @param queryFn
         */
        /**
         * Create a reference to a sub-collection given a path and an optional query
         * function.
         * @template R
         * @param {?} path
         * @param {?=} queryFn
         * @return {?}
         */
        AngularFirestoreDocument.prototype.collection = /**
         * Create a reference to a sub-collection given a path and an optional query
         * function.
         * @template R
         * @param {?} path
         * @param {?=} queryFn
         * @return {?}
         */
        function (path, queryFn) {
            /** @type {?} */
            var collectionRef = this.ref.collection(path);
            var _a = associateQuery(collectionRef, queryFn), ref = _a.ref, query = _a.query;
            return new AngularFirestoreCollection(ref, query, this.afs);
        };
        /**
         * Listen to snapshot updates from the document.
         */
        /**
         * Listen to snapshot updates from the document.
         * @return {?}
         */
        AngularFirestoreDocument.prototype.snapshotChanges = /**
         * Listen to snapshot updates from the document.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
            return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
        };
        /**
         * Listen to unwrapped snapshot updates from the document.
         */
        /**
         * Listen to unwrapped snapshot updates from the document.
         * @return {?}
         */
        AngularFirestoreDocument.prototype.valueChanges = /**
         * Listen to unwrapped snapshot updates from the document.
         * @return {?}
         */
        function () {
            return this.snapshotChanges().pipe(operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                return action.payload.data();
            })));
        };
        /**
         * Retrieve the document once.
         * @param options
         */
        /**
         * Retrieve the document once.
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreDocument.prototype.get = /**
         * Retrieve the document once.
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            return rxjs.from(this.ref.get(options)).pipe(operators.observeOn(this.afs.schedulers.insideAngular));
        };
        return AngularFirestoreDocument;
    }());
    if (false) {
        /** @type {?} */
        AngularFirestoreDocument.prototype.ref;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreDocument.prototype.afs;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * AngularFirestoreCollectionGroup service
     *
     * This class holds a reference to a Firestore Collection Group Query.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionGroup = firebase.firestore.collectionGroup('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */
    var   /**
     * AngularFirestoreCollectionGroup service
     *
     * This class holds a reference to a Firestore Collection Group Query.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionGroup = firebase.firestore.collectionGroup('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */
    AngularFirestoreCollectionGroup = /** @class */ (function () {
        /**
         * The constructor takes in a CollectionGroupQuery to provide wrapper methods
         * for data operations and data streaming.
         * @param query
         * @param afs
         */
        function AngularFirestoreCollectionGroup(query, afs) {
            this.query = query;
            this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param events
         */
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.stateChanges = /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */
        function (events) {
            if (!events || events.length === 0) {
                return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }
            return docChanges(this.query, this.afs.schedulers.outsideAngular)
                .pipe(this.afs.keepUnstableUntilFirst, operators.map((/**
             * @param {?} actions
             * @return {?}
             */
            function (actions) { return actions.filter((/**
             * @param {?} change
             * @return {?}
             */
            function (change) { return events.indexOf(change.type) > -1; })); })), operators.filter((/**
             * @param {?} changes
             * @return {?}
             */
            function (changes) { return changes.length > 0; })));
        };
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param events
         */
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.auditTrail = /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */
        function (events) {
            return this.stateChanges(events).pipe(operators.scan((/**
             * @param {?} current
             * @param {?} action
             * @return {?}
             */
            function (current, action) { return __spread(current, action); }), []));
        };
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param events
         */
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.snapshotChanges = /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */
        function (events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */
            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        };
        /**
         * Listen to all documents in the collection and its possible query as an Observable.
         */
        /**
         * Listen to all documents in the collection and its possible query as an Observable.
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.valueChanges = /**
         * Listen to all documents in the collection and its possible query as an Observable.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
            return fromCollectionRefScheduled$
                .pipe(this.afs.keepUnstableUntilFirst, operators.map((/**
             * @param {?} actions
             * @return {?}
             */
            function (actions) { return actions.payload.docs.map((/**
             * @param {?} a
             * @return {?}
             */
            function (a) { return a.data(); })); })));
        };
        /**
         * Retrieve the results of the query once.
         * @param options
         */
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.get = /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            return rxjs.from(this.query.get(options)).pipe(operators.observeOn(this.afs.schedulers.insideAngular));
        };
        return AngularFirestoreCollectionGroup;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollectionGroup.prototype.query;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollectionGroup.prototype.afs;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The value of this token determines whether or not the firestore will have persistance enabled
     * @type {?}
     */
    var ENABLE_PERSISTENCE = new core.InjectionToken('angularfire2.enableFirestorePersistence');
    /** @type {?} */
    var PERSISTENCE_SETTINGS = new core.InjectionToken('angularfire2.firestore.persistenceSettings');
    /** @type {?} */
    var SETTINGS = new core.InjectionToken('angularfire2.firestore.settings');
    /**
     * A utility methods for associating a collection reference with
     * a query.
     *
     * @param {?} collectionRef - A collection reference to query
     * @param {?=} queryFn - The callback to create a query
     *
     * Example:
     * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
     *  return ref.where('age', '<', 200);
     * });
     * @return {?}
     */
    function associateQuery(collectionRef, queryFn) {
        if (queryFn === void 0) { queryFn = (/**
         * @param {?} ref
         * @return {?}
         */
        function (ref) { return ref; }); }
        /** @type {?} */
        var query = queryFn(collectionRef);
        /** @type {?} */
        var ref = collectionRef;
        return { query: query, ref: ref };
    }
    /**
     * AngularFirestore Service
     *
     * This service is the main entry point for this feature module. It provides
     * an API for creating Collection and Reference services. These services can
     * then be used to do data updates and observable streams of the data.
     *
     * Example:
     *
     * import { Component } from '\@angular/core';
     * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
     * import { Observable } from 'rxjs/Observable';
     * import { from } from 'rxjs/observable';
     *
     * \@Component({
     *   selector: 'app-my-component',
     *   template: `
     *    <h2>Items for {{ (profile | async)?.name }}
     *    <ul>
     *       <li *ngFor="let item of items | async">{{ item.name }}</li>
     *    </ul>
     *    <div class="control-input">
     *       <input type="text" #itemname />
     *       <button (click)="addItem(itemname.value)">Add Item</button>
     *    </div>
     *   `
     * })
     * export class MyComponent implements OnInit {
     *
     *   // services for data operations and data streaming
     *   private readonly itemsRef: AngularFirestoreCollection<Item>;
     *   private readonly profileRef: AngularFirestoreDocument<Profile>;
     *
     *   // observables for template
     *   items: Observable<Item[]>;
     *   profile: Observable<Profile>;
     *
     *   // inject main service
     *   constructor(private readonly afs: AngularFirestore) {}
     *
     *   ngOnInit() {
     *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
     *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
     *     // this.items = from(this.itemsRef); // you can also do this with no mapping
     *
     *     this.profileRef = afs.doc('users/davideast');
     *     this.profile = this.profileRef.valueChanges();
     *   }
     *
     *   addItem(name: string) {
     *     const user = 'davideast';
     *     this.itemsRef.add({ name, user });
     *   }
     * }
     */
    var AngularFirestore = /** @class */ (function () {
        /**
         * Each Feature of AngularFire has a FirebaseApp injected. This way we
         * don't rely on the main Firebase App instance and we can create named
         * apps and use multiple apps.
         * @param app
         */
        function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, platformId, zone, persistenceSettings) {
            var _this = this;
            this.schedulers = new fire["ɵAngularFireSchedulers"](zone);
            this.keepUnstableUntilFirst = fire["ɵkeepUnstableUntilFirstFactory"](this.schedulers, platformId);
            this.firestore = zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var app = fire["ɵfirebaseAppFactory"](options, zone, nameOrConfig);
                if (!app.firestore) {
                    throw "You must import 'firebase/firestore' before using AngularFirestore";
                }
                /** @type {?} */
                var firestore = app.firestore();
                if (settings) {
                    firestore.settings(settings);
                }
                return firestore;
            }));
            if (shouldEnablePersistence && !common.isPlatformServer(platformId)) {
                // We need to try/catch here because not all enablePersistence() failures are caught
                // https://github.com/firebase/firebase-js-sdk/issues/608
                /** @type {?} */
                var enablePersistence = (/**
                 * @return {?}
                 */
                function () {
                    try {
                        return rxjs.from(_this.firestore.enablePersistence(persistenceSettings || undefined).then((/**
                         * @return {?}
                         */
                        function () { return true; }), (/**
                         * @return {?}
                         */
                        function () { return false; })));
                    }
                    catch (e) {
                        return rxjs.of(false);
                    }
                });
                this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
            }
            else {
                this.persistenceEnabled$ = rxjs.of(false);
            }
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */
        AngularFirestore.prototype.collection = /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */
        function (pathOrRef, queryFn) {
            /** @type {?} */
            var collectionRef;
            if (typeof pathOrRef === 'string') {
                collectionRef = this.firestore.collection(pathOrRef);
            }
            else {
                collectionRef = pathOrRef;
            }
            var _a = associateQuery(collectionRef, queryFn), ref = _a.ref, query = _a.query;
            return new AngularFirestoreCollection(ref, query, this);
        };
        /**
         * Create a reference to a Firestore Collection Group based on a collectionId
         * and an optional query function to narrow the result
         * set.
         * @param collectionId
         * @param queryGroupFn
         */
        /**
         * Create a reference to a Firestore Collection Group based on a collectionId
         * and an optional query function to narrow the result
         * set.
         * @template T
         * @param {?} collectionId
         * @param {?=} queryGroupFn
         * @return {?}
         */
        AngularFirestore.prototype.collectionGroup = /**
         * Create a reference to a Firestore Collection Group based on a collectionId
         * and an optional query function to narrow the result
         * set.
         * @template T
         * @param {?} collectionId
         * @param {?=} queryGroupFn
         * @return {?}
         */
        function (collectionId, queryGroupFn) {
            /** @type {?} */
            var queryFn = queryGroupFn || ((/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) { return ref; }));
            /** @type {?} */
            var collectionGroup = this.firestore.collectionGroup(collectionId);
            return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
        };
        /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */
        AngularFirestore.prototype.doc = /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */
        function (pathOrRef) {
            /** @type {?} */
            var ref;
            if (typeof pathOrRef === 'string') {
                ref = this.firestore.doc(pathOrRef);
            }
            else {
                ref = pathOrRef;
            }
            return new AngularFirestoreDocument(ref, this);
        };
        /**
         * Returns a generated Firestore Document Id.
         */
        /**
         * Returns a generated Firestore Document Id.
         * @return {?}
         */
        AngularFirestore.prototype.createId = /**
         * Returns a generated Firestore Document Id.
         * @return {?}
         */
        function () {
            return this.firestore.collection('_').doc().id;
        };
        AngularFirestore.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'any'
                    },] }
        ];
        /** @nocollapse */
        AngularFirestore.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [fire.FIREBASE_OPTIONS,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [fire.FIREBASE_APP_NAME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [ENABLE_PERSISTENCE,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [SETTINGS,] }] },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: core.NgZone },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [PERSISTENCE_SETTINGS,] }] }
        ]; };
        /** @nocollapse */ AngularFirestore.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AngularFirestore_Factory() { return new AngularFirestore(core["ɵɵinject"](fire.FIREBASE_OPTIONS), core["ɵɵinject"](fire.FIREBASE_APP_NAME, 8), core["ɵɵinject"](ENABLE_PERSISTENCE, 8), core["ɵɵinject"](SETTINGS, 8), core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](PERSISTENCE_SETTINGS, 8)); }, token: AngularFirestore, providedIn: "any" });
        return AngularFirestore;
    }());
    if (false) {
        /** @type {?} */
        AngularFirestore.prototype.firestore;
        /** @type {?} */
        AngularFirestore.prototype.persistenceEnabled$;
        /** @type {?} */
        AngularFirestore.prototype.schedulers;
        /** @type {?} */
        AngularFirestore.prototype.keepUnstableUntilFirst;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFirestoreModule = /** @class */ (function () {
        function AngularFirestoreModule() {
        }
        /**
         * Attempt to enable persistent storage, if possible
         */
        /**
         * Attempt to enable persistent storage, if possible
         * @param {?=} persistenceSettings
         * @return {?}
         */
        AngularFirestoreModule.enablePersistence = /**
         * Attempt to enable persistent storage, if possible
         * @param {?=} persistenceSettings
         * @return {?}
         */
        function (persistenceSettings) {
            return {
                ngModule: AngularFirestoreModule,
                providers: [
                    { provide: ENABLE_PERSISTENCE, useValue: true },
                    { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
                ]
            };
        };
        AngularFirestoreModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [AngularFirestore]
                    },] }
        ];
        return AngularFirestoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DocumentSnapshotExists() { }
    if (false) {
        /** @type {?} */
        DocumentSnapshotExists.prototype.exists;
        /**
         * @param {?=} options
         * @return {?}
         */
        DocumentSnapshotExists.prototype.data = function (options) { };
    }
    /**
     * @record
     */
    function DocumentSnapshotDoesNotExist() { }
    if (false) {
        /** @type {?} */
        DocumentSnapshotDoesNotExist.prototype.exists;
        /**
         * @param {?=} options
         * @return {?}
         */
        DocumentSnapshotDoesNotExist.prototype.data = function (options) { };
        /**
         * @param {?} fieldPath
         * @param {?=} options
         * @return {?}
         */
        DocumentSnapshotDoesNotExist.prototype.get = function (fieldPath, options) { };
    }
    /**
     * @record
     * @template T
     */
    function QueryDocumentSnapshot() { }
    if (false) {
        /**
         * @param {?=} options
         * @return {?}
         */
        QueryDocumentSnapshot.prototype.data = function (options) { };
    }
    /**
     * @record
     * @template T
     */
    function QuerySnapshot() { }
    if (false) {
        /** @type {?} */
        QuerySnapshot.prototype.docs;
    }
    /**
     * @record
     * @template T
     */
    function DocumentChange() { }
    if (false) {
        /** @type {?} */
        DocumentChange.prototype.doc;
    }
    /**
     * @record
     * @template T
     */
    function DocumentChangeAction() { }
    if (false) {
        /** @type {?} */
        DocumentChangeAction.prototype.type;
        /** @type {?} */
        DocumentChangeAction.prototype.payload;
    }
    /**
     * @record
     * @template T
     */
    function Action() { }
    if (false) {
        /** @type {?} */
        Action.prototype.type;
        /** @type {?} */
        Action.prototype.payload;
    }
    ;
    /**
     * @record
     * @template T
     */
    function Reference() { }
    if (false) {
        /** @type {?} */
        Reference.prototype.onSnapshot;
    }
    /**
     * A structure that provides an association between a reference
     * and a query on that reference. Note: Performing operations
     * on the reference can lead to confusing results with complicated
     * queries.
     *
     * Example:
     *
     * const query = ref.where('type', '==', 'Book').
     *                  .where('price', '>' 18.00)
     *                  .where('price', '<' 100.00)
     *                  .where('category', '==', 'Fiction')
     *                  .where('publisher', '==', 'BigPublisher')
     *
     * // This addition would not be a result of the query above
     * ref.add({
     *  type: 'Magazine',
     *  price: 4.99,
     *  category: 'Sports',
     *  publisher: 'SportsPublisher'
     * });
     * @record
     */
    function AssociatedReference() { }
    if (false) {
        /** @type {?} */
        AssociatedReference.prototype.ref;
        /** @type {?} */
        AssociatedReference.prototype.query;
    }

    exports.AngularFirestore = AngularFirestore;
    exports.AngularFirestoreCollection = AngularFirestoreCollection;
    exports.AngularFirestoreCollectionGroup = AngularFirestoreCollectionGroup;
    exports.AngularFirestoreDocument = AngularFirestoreDocument;
    exports.AngularFirestoreModule = AngularFirestoreModule;
    exports.ENABLE_PERSISTENCE = ENABLE_PERSISTENCE;
    exports.PERSISTENCE_SETTINGS = PERSISTENCE_SETTINGS;
    exports.SETTINGS = SETTINGS;
    exports.associateQuery = associateQuery;
    exports.combineChange = combineChange;
    exports.combineChanges = combineChanges;
    exports.docChanges = docChanges;
    exports.fromCollectionRef = fromCollectionRef;
    exports.fromDocRef = fromDocRef;
    exports.fromRef = fromRef;
    exports.sortedChanges = sortedChanges;
    exports.validateEventsArray = validateEventsArray;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided