/**
 * @license Angular v9.0.1
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/core/testing')) :
    typeof define === 'function' && define.amd ? define('@angular/upgrade/static/testing', ['exports', '@angular/core', '@angular/core/testing'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.upgrade = global.ng.upgrade || {}, global.ng.upgrade.static = global.ng.upgrade.static || {}, global.ng.upgrade.static.testing = {}), global.ng.core, global.ng.core.testing));
}(this, (function (exports, core, testing) { 'use strict';

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
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function noNg() {
        throw new Error('AngularJS v1.x is not loaded!');
    }
    var noNgElement = (function () { return noNg(); });
    noNgElement.cleanData = noNg;
    var angular = {
        bootstrap: noNg,
        module: noNg,
        element: noNgElement,
        injector: noNg,
        version: undefined,
        resumeBootstrap: noNg,
        getTestability: noNg
    };
    try {
        if (window.hasOwnProperty('angular')) {
            angular = window.angular;
        }
    }
    catch (_a) {
        // ignore in CJS mode.
    }
    /**
     * @deprecated Use `setAngularJSGlobal` instead.
     *
     * @publicApi
     */
    function setAngularLib(ng) {
        setAngularJSGlobal(ng);
    }
    /**
     * @deprecated Use `getAngularJSGlobal` instead.
     *
     * @publicApi
     */
    function getAngularLib() {
        return getAngularJSGlobal();
    }
    /**
     * Resets the AngularJS global.
     *
     * Used when AngularJS is loaded lazily, and not available on `window`.
     *
     * @publicApi
     */
    function setAngularJSGlobal(ng) {
        angular = ng;
    }
    /**
     * Returns the current AngularJS global.
     *
     * @publicApi
     */
    function getAngularJSGlobal() {
        return angular;
    }
    var bootstrap = function (e, modules, config) {
        return angular.bootstrap(e, modules, config);
    };
    // Do not declare as `module` to avoid webpack bug
    // (see https://github.com/angular/angular/issues/30050).
    var module_ = function (prefix, dependencies) {
        return angular.module(prefix, dependencies);
    };
    var element = (function (e) { return angular.element(e); });
    element.cleanData = function (nodes) { return angular.element.cleanData(nodes); };
    var injector = function (modules, strictDi) { return angular.injector(modules, strictDi); };
    var resumeBootstrap = function () { return angular.resumeBootstrap(); };
    var getTestability = function (e) { return angular.getTestability(e); };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var $COMPILE = '$compile';
    var $CONTROLLER = '$controller';
    var $DELEGATE = '$delegate';
    var $EXCEPTION_HANDLER = '$exceptionHandler';
    var $HTTP_BACKEND = '$httpBackend';
    var $INJECTOR = '$injector';
    var $INTERVAL = '$interval';
    var $PARSE = '$parse';
    var $PROVIDE = '$provide';
    var $ROOT_SCOPE = '$rootScope';
    var $SCOPE = '$scope';
    var $TEMPLATE_CACHE = '$templateCache';
    var $TEMPLATE_REQUEST = '$templateRequest';
    var $$TESTABILITY = '$$testability';
    var COMPILER_KEY = '$$angularCompiler';
    var DOWNGRADED_MODULE_COUNT_KEY = '$$angularDowngradedModuleCount';
    var GROUP_PROJECTABLE_NODES_KEY = '$$angularGroupProjectableNodes';
    var INJECTOR_KEY = '$$angularInjector';
    var LAZY_MODULE_REF = '$$angularLazyModuleRef';
    var NG_ZONE_KEY = '$$angularNgZone';
    var UPGRADE_APP_TYPE_KEY = '$$angularUpgradeAppType';
    var REQUIRE_INJECTOR = '?^^' + INJECTOR_KEY;
    var REQUIRE_NG_MODEL = '?ngModel';
    var UPGRADE_MODULE_NAME = '$$UpgradeModule';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var $injector = null;
    var injector$1;
    function $injectorFactory() {
        return $injector;
    }
    var AngularTestingModule = /** @class */ (function () {
        function AngularTestingModule(i) {
            injector$1 = i;
        }
        AngularTestingModule = __decorate([
            core.NgModule({ providers: [{ provide: $INJECTOR, useFactory: $injectorFactory }] }),
            __metadata("design:paramtypes", [core.Injector])
        ], AngularTestingModule);
        return AngularTestingModule;
    }());
    /**
     * A helper function to use when unit testing Angular services that depend upon upgraded AngularJS
     * services.
     *
     * This function returns an `NgModule` decorated class that is configured to wire up the Angular
     * and AngularJS injectors without the need to actually bootstrap a hybrid application.
     * This makes it simpler and faster to unit test services.
     *
     * Use the returned class as an "import" when configuring the `TestBed`.
     *
     * In the following code snippet, we are configuring the TestBed with two imports.
     * The `Ng2AppModule` is the Angular part of our hybrid application and the `ng1AppModule` is the
     * AngularJS part.
     *
     * <code-example path="upgrade/static/ts/full/module.spec.ts" region="angular-setup"></code-example>
     *
     * Once this is done we can get hold of services via the Angular `Injector` as normal.
     * Services that are (or have dependencies on) an upgraded AngularJS service, will be instantiated
     * as needed by the AngularJS `$injector`.
     *
     * In the following code snippet, `HeroesService` is an Angular service that depends upon an
     * AngularJS service, `titleCase`.
     *
     * <code-example path="upgrade/static/ts/full/module.spec.ts" region="angular-spec"></code-example>
     *
     * <div class="alert is-important">
     *
     * This helper is for testing services not Components.
     * For Component testing you must still bootstrap a hybrid app. See `UpgradeModule` or
     * `downgradeModule` for more information.
     *
     * </div>
     *
     * <div class="alert is-important">
     *
     * The resulting configuration does not wire up AngularJS digests to Zone hooks. It is the
     * responsibility of the test writer to call `$rootScope.$apply`, as necessary, to trigger
     * AngularJS handlers of async events from Angular.
     *
     * </div>
     *
     * <div class="alert is-important">
     *
     * The helper sets up global variables to hold the shared Angular and AngularJS injectors.
     *
     * * Only call this helper once per spec.
     * * Do not use `createAngularTestingModule` in the same spec as `createAngularJSTestingModule`.
     *
     * </div>
     *
     * Here is the example application and its unit tests that use `createAngularTestingModule`
     * and `createAngularJSTestingModule`.
     *
     * <code-tabs>
     *  <code-pane header="module.spec.ts" path="upgrade/static/ts/full/module.spec.ts"></code-pane>
     *  <code-pane header="module.ts" path="upgrade/static/ts/full/module.ts"></code-pane>
     * </code-tabs>
     *
     *
     * @param angularJSModules a collection of the names of AngularJS modules to include in the
     * configuration.
     * @param [strictDi] whether the AngularJS injector should have `strictDI` enabled.
     *
     * @publicApi
     */
    function createAngularTestingModule(angularJSModules, strictDi) {
        module_('$$angularJSTestingModule', angularJSModules)
            .constant(UPGRADE_APP_TYPE_KEY, 2 /* Static */)
            .factory(INJECTOR_KEY, function () { return injector$1; });
        $injector = injector(['ng', '$$angularJSTestingModule'], strictDi);
        return AngularTestingModule;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A helper function to use when unit testing AngularJS services that depend upon downgraded Angular
     * services.
     *
     * This function returns an AngularJS module that is configured to wire up the AngularJS and Angular
     * injectors without the need to actually bootstrap a hybrid application.
     * This makes it simpler and faster to unit test services.
     *
     * Use the returned AngularJS module in a call to
     * [`angular.mocks.module`](https://docs.angularjs.org/api/ngMock/function/angular.mock.module) to
     * include this module in the unit test injector.
     *
     * In the following code snippet, we are configuring the `$injector` with two modules:
     * The AngularJS `ng1AppModule`, which is the AngularJS part of our hybrid application and the
     * `Ng2AppModule`, which is the Angular part.
     *
     * <code-example path="upgrade/static/ts/full/module.spec.ts"
     * region="angularjs-setup"></code-example>
     *
     * Once this is done we can get hold of services via the AngularJS `$injector` as normal.
     * Services that are (or have dependencies on) a downgraded Angular service, will be instantiated as
     * needed by the Angular root `Injector`.
     *
     * In the following code snippet, `heroesService` is a downgraded Angular service that we are
     * accessing from AngularJS.
     *
     * <code-example path="upgrade/static/ts/full/module.spec.ts"
     * region="angularjs-spec"></code-example>
     *
     * <div class="alert is-important">
     *
     * This helper is for testing services not components.
     * For Component testing you must still bootstrap a hybrid app. See `UpgradeModule` or
     * `downgradeModule` for more information.
     *
     * </div>
     *
     * <div class="alert is-important">
     *
     * The resulting configuration does not wire up AngularJS digests to Zone hooks. It is the
     * responsibility of the test writer to call `$rootScope.$apply`, as necessary, to trigger
     * AngularJS handlers of async events from Angular.
     *
     * </div>
     *
     * <div class="alert is-important">
     *
     * The helper sets up global variables to hold the shared Angular and AngularJS injectors.
     *
     * * Only call this helper once per spec.
     * * Do not use `createAngularJSTestingModule` in the same spec as `createAngularTestingModule`.
     *
     * </div>
     *
     * Here is the example application and its unit tests that use `createAngularTestingModule`
     * and `createAngularJSTestingModule`.
     *
     * <code-tabs>
     *  <code-pane header="module.spec.ts" path="upgrade/static/ts/full/module.spec.ts"></code-pane>
     *  <code-pane header="module.ts" path="upgrade/static/ts/full/module.ts"></code-pane>
     * </code-tabs>
     *
     *
     * @param angularModules a collection of Angular modules to include in the configuration.
     *
     * @publicApi
     */
    function createAngularJSTestingModule(angularModules) {
        return module_('$$angularJSTestingModule', [])
            .constant(UPGRADE_APP_TYPE_KEY, 2 /* Static */)
            .factory(INJECTOR_KEY, [
            $INJECTOR,
            function ($injector) {
                testing.TestBed.configureTestingModule({
                    imports: angularModules,
                    providers: [{ provide: $INJECTOR, useValue: $injector }]
                });
                return testing.TestBed.inject(core.Injector);
            }
        ])
            .name;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.createAngularJSTestingModule = createAngularJSTestingModule;
    exports.createAngularTestingModule = createAngularTestingModule;
    exports.ɵangular_packages_upgrade_static_testing_testing_a = module_;
    exports.ɵangular_packages_upgrade_static_testing_testing_b = UPGRADE_APP_TYPE_KEY;
    exports.ɵangular_packages_upgrade_static_testing_testing_d = INJECTOR_KEY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided