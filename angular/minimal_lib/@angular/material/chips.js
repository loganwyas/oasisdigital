(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/core'), require('@angular/material/core'), require('tslib'), require('@angular/cdk/coercion'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser/animations'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/collections'), require('@angular/forms'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/material/chips', ['exports', '@angular/cdk/keycodes', '@angular/core', '@angular/material/core', 'tslib', '@angular/cdk/coercion', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', '@angular/platform-browser/animations', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/collections', '@angular/forms', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.chips = {}), global.ng.cdk.keycodes, global.ng.core, global.ng.material.core, global.tslib, global.ng.cdk.coercion, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global.ng.platformBrowser.animations, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.collections, global.ng.forms, global.ng.material.formField));
}(this, (function (exports, keycodes, core, core$1, tslib, coercion, platform, rxjs, operators, animations, a11y, bidi, collections, forms, formField) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Event object emitted by MatChip when selected or deselected. */
    var MatChipSelectionChange = /** @class */ (function () {
        function MatChipSelectionChange(
        /** Reference to the chip that emitted the event. */
        source, 
        /** Whether the chip that emitted the event is selected. */
        selected, 
        /** Whether the selection change was a result of a user interaction. */
        isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.source = source;
            this.selected = selected;
            this.isUserInput = isUserInput;
        }
        return MatChipSelectionChange;
    }());
    // Boilerplate for applying mixins to MatChip.
    /** @docs-private */
    var MatChipBase = /** @class */ (function () {
        function MatChipBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MatChipBase;
    }());
    var _MatChipMixinBase = core$1.mixinColor(core$1.mixinDisableRipple(core$1.mixinDisabled(MatChipBase)), 'primary');
    /**
     * Dummy directive to add CSS class to chip avatar.
     * @docs-private
     */
    var MatChipAvatar = /** @class */ (function () {
        function MatChipAvatar() {
        }
        MatChipAvatar.decorators = [
            { type: core.Directive, args: [{
                        selector: 'mat-chip-avatar, [matChipAvatar]',
                        host: { 'class': 'mat-chip-avatar' }
                    },] }
        ];
        return MatChipAvatar;
    }());
    /**
     * Dummy directive to add CSS class to chip trailing icon.
     * @docs-private
     */
    var MatChipTrailingIcon = /** @class */ (function () {
        function MatChipTrailingIcon() {
        }
        MatChipTrailingIcon.decorators = [
            { type: core.Directive, args: [{
                        selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                        host: { 'class': 'mat-chip-trailing-icon' }
                    },] }
        ];
        return MatChipTrailingIcon;
    }());
    /**
     * Material design styled Chip component. Used inside the MatChipList component.
     */
    var MatChip = /** @class */ (function (_super) {
        tslib.__extends(MatChip, _super);
        function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, 
        // @breaking-change 8.0.0 `animationMode` parameter to become required.
        animationMode, 
        // @breaking-change 9.0.0 `_changeDetectorRef` parameter to become required.
        _changeDetectorRef) {
            var _this = _super.call(this, _elementRef) || this;
            _this._elementRef = _elementRef;
            _this._ngZone = _ngZone;
            _this._changeDetectorRef = _changeDetectorRef;
            /** Whether the chip has focus. */
            _this._hasFocus = false;
            /** Whether the chip list is selectable */
            _this.chipListSelectable = true;
            /** Whether the chip list is in multi-selection mode. */
            _this._chipListMultiple = false;
            _this._selected = false;
            _this._selectable = true;
            _this._removable = true;
            /** Emits when the chip is focused. */
            _this._onFocus = new rxjs.Subject();
            /** Emits when the chip is blured. */
            _this._onBlur = new rxjs.Subject();
            /** Emitted when the chip is selected or deselected. */
            _this.selectionChange = new core.EventEmitter();
            /** Emitted when the chip is destroyed. */
            _this.destroyed = new core.EventEmitter();
            /** Emitted when a chip is to be removed. */
            _this.removed = new core.EventEmitter();
            _this._addHostClassName();
            _this._chipRipple = new core$1.RippleRenderer(_this, _ngZone, _elementRef, platform);
            _this._chipRipple.setupTriggerEvents(_elementRef);
            _this.rippleConfig = globalRippleOptions || {};
            _this._animationsDisabled = animationMode === 'NoopAnimations';
            return _this;
        }
        Object.defineProperty(MatChip.prototype, "rippleDisabled", {
            /**
             * Whether ripples are disabled on interaction
             * @docs-private
             */
            get: function () {
                return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChip.prototype, "selected", {
            /** Whether the chip is selected. */
            get: function () { return this._selected; },
            set: function (value) {
                var coercedValue = coercion.coerceBooleanProperty(value);
                if (coercedValue !== this._selected) {
                    this._selected = coercedValue;
                    this._dispatchSelectionChange();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChip.prototype, "value", {
            /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
            get: function () {
                return this._value !== undefined
                    ? this._value
                    : this._elementRef.nativeElement.textContent;
            },
            set: function (value) { this._value = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChip.prototype, "selectable", {
            /**
             * Whether or not the chip is selectable. When a chip is not selectable,
             * changes to its selected state are always ignored. By default a chip is
             * selectable, and it becomes non-selectable if its parent chip list is
             * not selectable.
             */
            get: function () { return this._selectable && this.chipListSelectable; },
            set: function (value) {
                this._selectable = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChip.prototype, "removable", {
            /**
             * Determines whether or not the chip displays the remove styling and emits (removed) events.
             */
            get: function () { return this._removable; },
            set: function (value) {
                this._removable = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChip.prototype, "ariaSelected", {
            /** The ARIA selected applied to the chip. */
            get: function () {
                // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
                // it adds noise to NVDA users where "not selected" will be read out for each chip.
                return this.selectable && (this._chipListMultiple || this.selected) ?
                    this.selected.toString() : null;
            },
            enumerable: true,
            configurable: true
        });
        MatChip.prototype._addHostClassName = function () {
            var basicChipAttrName = 'mat-basic-chip';
            var element = this._elementRef.nativeElement;
            if (element.hasAttribute(basicChipAttrName) ||
                element.tagName.toLowerCase() === basicChipAttrName) {
                element.classList.add(basicChipAttrName);
                return;
            }
            else {
                element.classList.add('mat-standard-chip');
            }
        };
        MatChip.prototype.ngOnDestroy = function () {
            this.destroyed.emit({ chip: this });
            this._chipRipple._removeTriggerEvents();
        };
        /** Selects the chip. */
        MatChip.prototype.select = function () {
            if (!this._selected) {
                this._selected = true;
                this._dispatchSelectionChange();
                this._markForCheck();
            }
        };
        /** Deselects the chip. */
        MatChip.prototype.deselect = function () {
            if (this._selected) {
                this._selected = false;
                this._dispatchSelectionChange();
                this._markForCheck();
            }
        };
        /** Select this chip and emit selected event */
        MatChip.prototype.selectViaInteraction = function () {
            if (!this._selected) {
                this._selected = true;
                this._dispatchSelectionChange(true);
                this._markForCheck();
            }
        };
        /** Toggles the current selected state of this chip. */
        MatChip.prototype.toggleSelected = function (isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this._selected = !this.selected;
            this._dispatchSelectionChange(isUserInput);
            this._markForCheck();
            return this.selected;
        };
        /** Allows for programmatic focusing of the chip. */
        MatChip.prototype.focus = function () {
            if (!this._hasFocus) {
                this._elementRef.nativeElement.focus();
                this._onFocus.next({ chip: this });
            }
            this._hasFocus = true;
        };
        /**
         * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
         * BACKSPACE keys are pressed.
         *
         * Informs any listeners of the removal request. Does not remove the chip from the DOM.
         */
        MatChip.prototype.remove = function () {
            if (this.removable) {
                this.removed.emit({ chip: this });
            }
        };
        /** Handles click events on the chip. */
        MatChip.prototype._handleClick = function (event) {
            if (this.disabled) {
                event.preventDefault();
            }
            else {
                event.stopPropagation();
            }
        };
        /** Handle custom key presses. */
        MatChip.prototype._handleKeydown = function (event) {
            if (this.disabled) {
                return;
            }
            switch (event.keyCode) {
                case keycodes.DELETE:
                case keycodes.BACKSPACE:
                    // If we are removable, remove the focused chip
                    this.remove();
                    // Always prevent so page navigation does not occur
                    event.preventDefault();
                    break;
                case keycodes.SPACE:
                    // If we are selectable, toggle the focused chip
                    if (this.selectable) {
                        this.toggleSelected(true);
                    }
                    // Always prevent space from scrolling the page since the list has focus
                    event.preventDefault();
                    break;
            }
        };
        MatChip.prototype._blur = function () {
            var _this = this;
            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable
                .asObservable()
                .pipe(operators.take(1))
                .subscribe(function () {
                _this._ngZone.run(function () {
                    _this._hasFocus = false;
                    _this._onBlur.next({ chip: _this });
                });
            });
        };
        MatChip.prototype._dispatchSelectionChange = function (isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.selectionChange.emit({
                source: this,
                isUserInput: isUserInput,
                selected: this._selected
            });
        };
        MatChip.prototype._markForCheck = function () {
            // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
            if (this._changeDetectorRef) {
                this._changeDetectorRef.markForCheck();
            }
        };
        MatChip.decorators = [
            { type: core.Directive, args: [{
                        selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
                        inputs: ['color', 'disabled', 'disableRipple'],
                        exportAs: 'matChip',
                        host: {
                            'class': 'mat-chip',
                            '[attr.tabindex]': 'disabled ? null : -1',
                            'role': 'option',
                            '[class.mat-chip-selected]': 'selected',
                            '[class.mat-chip-with-avatar]': 'avatar',
                            '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                            '[class.mat-chip-disabled]': 'disabled',
                            '[class._mat-animation-noopable]': '_animationsDisabled',
                            '[attr.disabled]': 'disabled || null',
                            '[attr.aria-disabled]': 'disabled.toString()',
                            '[attr.aria-selected]': 'ariaSelected',
                            '(click)': '_handleClick($event)',
                            '(keydown)': '_handleKeydown($event)',
                            '(focus)': 'focus()',
                            '(blur)': '_blur()',
                        },
                    },] }
        ];
        /** @nocollapse */
        MatChip.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] },
            { type: core.ChangeDetectorRef }
        ]; };
        MatChip.propDecorators = {
            avatar: [{ type: core.ContentChild, args: [MatChipAvatar,] }],
            trailingIcon: [{ type: core.ContentChild, args: [MatChipTrailingIcon,] }],
            removeIcon: [{ type: core.ContentChild, args: [core.forwardRef(function () { return MatChipRemove; }),] }],
            selected: [{ type: core.Input }],
            value: [{ type: core.Input }],
            selectable: [{ type: core.Input }],
            removable: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }],
            destroyed: [{ type: core.Output }],
            removed: [{ type: core.Output }]
        };
        return MatChip;
    }(_MatChipMixinBase));
    /**
     * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
     * available at https://material.io/icons/#ic_cancel.
     *
     * Example:
     *
     *     `<mat-chip>
     *       <mat-icon matChipRemove>cancel</mat-icon>
     *     </mat-chip>`
     *
     * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
     * styles to properly center the icon within the chip.
     */
    var MatChipRemove = /** @class */ (function () {
        function MatChipRemove(_parentChip) {
            this._parentChip = _parentChip;
        }
        /** Calls the parent chip's public `remove()` method if applicable. */
        MatChipRemove.prototype._handleClick = function (event) {
            var parentChip = this._parentChip;
            if (parentChip.removable && !parentChip.disabled) {
                parentChip.remove();
            }
            // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.
            event.stopPropagation();
        };
        MatChipRemove.decorators = [
            { type: core.Directive, args: [{
                        selector: '[matChipRemove]',
                        host: {
                            'class': 'mat-chip-remove mat-chip-trailing-icon',
                            '(click)': '_handleClick($event)',
                            // Prevent accidental form submissions.
                            'type': 'button',
                        }
                    },] }
        ];
        /** @nocollapse */
        MatChipRemove.ctorParameters = function () { return [
            { type: MatChip }
        ]; };
        return MatChipRemove;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Injection token to be used to override the default options for the chips module. */
    var MAT_CHIPS_DEFAULT_OPTIONS = new core.InjectionToken('mat-chips-default-options');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Boilerplate for applying mixins to MatChipList.
    /** @docs-private */
    var MatChipListBase = /** @class */ (function () {
        function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
        /** @docs-private */
        ngControl) {
            this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
            this._parentForm = _parentForm;
            this._parentFormGroup = _parentFormGroup;
            this.ngControl = ngControl;
        }
        return MatChipListBase;
    }());
    var _MatChipListMixinBase = core$1.mixinErrorState(MatChipListBase);
    // Increasing integer for generating unique ids for chip-list components.
    var nextUniqueId = 0;
    /** Change event object that is emitted when the chip list value has changed. */
    var MatChipListChange = /** @class */ (function () {
        function MatChipListChange(
        /** Chip list that emitted the event. */
        source, 
        /** Value of the chip list when the event was emitted. */
        value) {
            this.source = source;
            this.value = value;
        }
        return MatChipListChange;
    }());
    /**
     * A material design chips component (named ChipList for its similarity to the List component).
     */
    var MatChipList = /** @class */ (function (_super) {
        tslib.__extends(MatChipList, _super);
        function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, 
        /** @docs-private */
        ngControl) {
            var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
            _this._elementRef = _elementRef;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._dir = _dir;
            _this.ngControl = ngControl;
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            _this.controlType = 'mat-chip-list';
            /**
             * When a chip is destroyed, we store the index of the destroyed chip until the chips
             * query list notifies about the update. This is necessary because we cannot determine an
             * appropriate chip that should receive focus until the array of chips updated completely.
             */
            _this._lastDestroyedChipIndex = null;
            /** Subject that emits when the component has been destroyed. */
            _this._destroyed = new rxjs.Subject();
            /** Uid of the chip list */
            _this._uid = "mat-chip-list-" + nextUniqueId++;
            /** Tab index for the chip list. */
            _this._tabIndex = 0;
            /**
             * User defined tab index.
             * When it is not null, use user defined tab index. Otherwise use _tabIndex
             */
            _this._userTabIndex = null;
            /** Function when touched */
            _this._onTouched = function () { };
            /** Function when changed */
            _this._onChange = function () { };
            _this._multiple = false;
            _this._compareWith = function (o1, o2) { return o1 === o2; };
            _this._required = false;
            _this._disabled = false;
            /** Orientation of the chip list. */
            _this.ariaOrientation = 'horizontal';
            _this._selectable = true;
            /** Event emitted when the selected chip list value has been changed by the user. */
            _this.change = new core.EventEmitter();
            /**
             * Event that emits whenever the raw value of the chip-list changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             * @docs-private
             */
            _this.valueChange = new core.EventEmitter();
            if (_this.ngControl) {
                _this.ngControl.valueAccessor = _this;
            }
            return _this;
        }
        Object.defineProperty(MatChipList.prototype, "selected", {
            /** The array of selected chips inside chip list. */
            get: function () {
                return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "role", {
            /** The ARIA role applied to the chip list. */
            get: function () { return this.empty ? null : 'listbox'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "multiple", {
            /** Whether the user should be allowed to select multiple chips. */
            get: function () { return this._multiple; },
            set: function (value) {
                this._multiple = coercion.coerceBooleanProperty(value);
                this._syncChipsState();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "compareWith", {
            /**
             * A function to compare the option values with the selected values. The first argument
             * is a value from an option. The second is a value from the selection. A boolean
             * should be returned.
             */
            get: function () { return this._compareWith; },
            set: function (fn) {
                this._compareWith = fn;
                if (this._selectionModel) {
                    // A different comparator means the selection could change.
                    this._initializeSelection();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "value", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () { return this._value; },
            set: function (value) {
                this.writeValue(value);
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "id", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () {
                return this._chipInput ? this._chipInput.id : this._uid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "required", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () { return this._required; },
            set: function (value) {
                this._required = coercion.coerceBooleanProperty(value);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "placeholder", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () {
                return this._chipInput ? this._chipInput.placeholder : this._placeholder;
            },
            set: function (value) {
                this._placeholder = value;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "focused", {
            /** Whether any chips or the matChipInput inside of this chip-list has focus. */
            get: function () {
                return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "empty", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () {
                return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "shouldLabelFloat", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () { return !this.empty || this.focused; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "disabled", {
            /**
             * Implemented as part of MatFormFieldControl.
             * @docs-private
             */
            get: function () { return this.ngControl ? !!this.ngControl.disabled : this._disabled; },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
                this._syncChipsState();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "selectable", {
            /**
             * Whether or not this chip list is selectable. When a chip list is not selectable,
             * the selected states for all the chips inside the chip list are always ignored.
             */
            get: function () { return this._selectable; },
            set: function (value) {
                var _this = this;
                this._selectable = coercion.coerceBooleanProperty(value);
                if (this.chips) {
                    this.chips.forEach(function (chip) { return chip.chipListSelectable = _this._selectable; });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "tabIndex", {
            set: function (value) {
                this._userTabIndex = value;
                this._tabIndex = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "chipSelectionChanges", {
            /** Combined stream of all of the child chips' selection change events. */
            get: function () {
                return rxjs.merge.apply(void 0, tslib.__spread(this.chips.map(function (chip) { return chip.selectionChange; })));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "chipFocusChanges", {
            /** Combined stream of all of the child chips' focus change events. */
            get: function () {
                return rxjs.merge.apply(void 0, tslib.__spread(this.chips.map(function (chip) { return chip._onFocus; })));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "chipBlurChanges", {
            /** Combined stream of all of the child chips' blur change events. */
            get: function () {
                return rxjs.merge.apply(void 0, tslib.__spread(this.chips.map(function (chip) { return chip._onBlur; })));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipList.prototype, "chipRemoveChanges", {
            /** Combined stream of all of the child chips' remove change events. */
            get: function () {
                return rxjs.merge.apply(void 0, tslib.__spread(this.chips.map(function (chip) { return chip.destroyed; })));
            },
            enumerable: true,
            configurable: true
        });
        MatChipList.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._keyManager = new a11y.FocusKeyManager(this.chips)
                .withWrap()
                .withVerticalOrientation()
                .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
            if (this._dir) {
                this._dir.change
                    .pipe(operators.takeUntil(this._destroyed))
                    .subscribe(function (dir) { return _this._keyManager.withHorizontalOrientation(dir); });
            }
            this._keyManager.tabOut.pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                _this._allowFocusEscape();
            });
            // When the list changes, re-subscribe
            this.chips.changes.pipe(operators.startWith(null), operators.takeUntil(this._destroyed)).subscribe(function () {
                if (_this.disabled) {
                    // Since this happens after the content has been
                    // checked, we need to defer it to the next tick.
                    Promise.resolve().then(function () {
                        _this._syncChipsState();
                    });
                }
                _this._resetChips();
                // Reset chips selected/deselected status
                _this._initializeSelection();
                // Check to see if we need to update our tab index
                _this._updateTabIndex();
                // Check to see if we have a destroyed chip and need to refocus
                _this._updateFocusForDestroyedChips();
                _this.stateChanges.next();
            });
        };
        MatChipList.prototype.ngOnInit = function () {
            this._selectionModel = new collections.SelectionModel(this.multiple, undefined, false);
            this.stateChanges.next();
        };
        MatChipList.prototype.ngDoCheck = function () {
            if (this.ngControl) {
                // We need to re-evaluate this on every change detection cycle, because there are some
                // error triggers that we can't subscribe to (e.g. parent form submissions). This means
                // that whatever logic is in here has to be super lean or we risk destroying the performance.
                this.updateErrorState();
            }
        };
        MatChipList.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
            this.stateChanges.complete();
            this._dropSubscriptions();
        };
        /** Associates an HTML input element with this chip list. */
        MatChipList.prototype.registerInput = function (inputElement) {
            this._chipInput = inputElement;
        };
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        MatChipList.prototype.setDescribedByIds = function (ids) { this._ariaDescribedby = ids.join(' '); };
        // Implemented as part of ControlValueAccessor.
        MatChipList.prototype.writeValue = function (value) {
            if (this.chips) {
                this._setSelectionByValue(value, false);
            }
        };
        // Implemented as part of ControlValueAccessor.
        MatChipList.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MatChipList.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MatChipList.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
        };
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        MatChipList.prototype.onContainerClick = function (event) {
            if (!this._originatesFromChip(event)) {
                this.focus();
            }
        };
        /**
         * Focuses the first non-disabled chip in this chip list, or the associated input when there
         * are no eligible chips.
         */
        MatChipList.prototype.focus = function (options) {
            if (this.disabled) {
                return;
            }
            // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list
            if (this._chipInput && this._chipInput.focused) {
                // do nothing
            }
            else if (this.chips.length > 0) {
                this._keyManager.setFirstItemActive();
                this.stateChanges.next();
            }
            else {
                this._focusInput(options);
                this.stateChanges.next();
            }
        };
        /** Attempt to focus an input if we have one. */
        MatChipList.prototype._focusInput = function (options) {
            if (this._chipInput) {
                this._chipInput.focus(options);
            }
        };
        /**
         * Pass events to the keyboard manager. Available here for tests.
         */
        MatChipList.prototype._keydown = function (event) {
            var target = event.target;
            // If they are on an empty input and hit backspace, focus the last chip
            if (event.keyCode === keycodes.BACKSPACE && this._isInputEmpty(target)) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else if (target && target.classList.contains('mat-chip')) {
                if (event.keyCode === keycodes.HOME) {
                    this._keyManager.setFirstItemActive();
                    event.preventDefault();
                }
                else if (event.keyCode === keycodes.END) {
                    this._keyManager.setLastItemActive();
                    event.preventDefault();
                }
                else {
                    this._keyManager.onKeydown(event);
                }
                this.stateChanges.next();
            }
        };
        /**
         * Check the tab index as you should not be allowed to focus an empty list.
         */
        MatChipList.prototype._updateTabIndex = function () {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
        };
        /**
         * If the amount of chips changed, we need to update the
         * key manager state and focus the next closest chip.
         */
        MatChipList.prototype._updateFocusForDestroyedChips = function () {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
                if (this.chips.length) {
                    var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                    this._keyManager.setActiveItem(newChipIndex);
                }
                else {
                    this.focus();
                }
            }
            this._lastDestroyedChipIndex = null;
        };
        /**
         * Utility to ensure all indexes are valid.
         *
         * @param index The index to be checked.
         * @returns True if the index is valid for our list of chips.
         */
        MatChipList.prototype._isValidIndex = function (index) {
            return index >= 0 && index < this.chips.length;
        };
        MatChipList.prototype._isInputEmpty = function (element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
                var input = element;
                return !input.value;
            }
            return false;
        };
        MatChipList.prototype._setSelectionByValue = function (value, isUserInput) {
            var _this = this;
            if (isUserInput === void 0) { isUserInput = true; }
            this._clearSelection();
            this.chips.forEach(function (chip) { return chip.deselect(); });
            if (Array.isArray(value)) {
                value.forEach(function (currentValue) { return _this._selectValue(currentValue, isUserInput); });
                this._sortValues();
            }
            else {
                var correspondingChip = this._selectValue(value, isUserInput);
                // Shift focus to the active item. Note that we shouldn't do this in multiple
                // mode, because we don't know what chip the user interacted with last.
                if (correspondingChip) {
                    if (isUserInput) {
                        this._keyManager.setActiveItem(correspondingChip);
                    }
                }
            }
        };
        /**
         * Finds and selects the chip based on its value.
         * @returns Chip that has the corresponding value.
         */
        MatChipList.prototype._selectValue = function (value, isUserInput) {
            var _this = this;
            if (isUserInput === void 0) { isUserInput = true; }
            var correspondingChip = this.chips.find(function (chip) {
                return chip.value != null && _this._compareWith(chip.value, value);
            });
            if (correspondingChip) {
                isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
                this._selectionModel.select(correspondingChip);
            }
            return correspondingChip;
        };
        MatChipList.prototype._initializeSelection = function () {
            var _this = this;
            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
                if (_this.ngControl || _this._value) {
                    _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value, false);
                    _this.stateChanges.next();
                }
            });
        };
        /**
         * Deselects every chip in the list.
         * @param skip Chip that should not be deselected.
         */
        MatChipList.prototype._clearSelection = function (skip) {
            this._selectionModel.clear();
            this.chips.forEach(function (chip) {
                if (chip !== skip) {
                    chip.deselect();
                }
            });
            this.stateChanges.next();
        };
        /**
         * Sorts the model values, ensuring that they keep the same
         * order that they have in the panel.
         */
        MatChipList.prototype._sortValues = function () {
            var _this = this;
            if (this._multiple) {
                this._selectionModel.clear();
                this.chips.forEach(function (chip) {
                    if (chip.selected) {
                        _this._selectionModel.select(chip);
                    }
                });
                this.stateChanges.next();
            }
        };
        /** Emits change event to set the model value. */
        MatChipList.prototype._propagateChanges = function (fallbackValue) {
            var valueToEmit = null;
            if (Array.isArray(this.selected)) {
                valueToEmit = this.selected.map(function (chip) { return chip.value; });
            }
            else {
                valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }
            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);
            this._onChange(valueToEmit);
            this._changeDetectorRef.markForCheck();
        };
        /** When blurred, mark the field as touched when focus moved outside the chip list. */
        MatChipList.prototype._blur = function () {
            var _this = this;
            if (!this._hasFocusedChip()) {
                this._keyManager.setActiveItem(-1);
            }
            if (!this.disabled) {
                if (this._chipInput) {
                    // If there's a chip input, we should check whether the focus moved to chip input.
                    // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                    // to chip input, do nothing.
                    // Timeout is needed to wait for the focus() event trigger on chip input.
                    setTimeout(function () {
                        if (!_this.focused) {
                            _this._markAsTouched();
                        }
                    });
                }
                else {
                    // If there's no chip input, then mark the field as touched.
                    this._markAsTouched();
                }
            }
        };
        /** Mark the field as touched */
        MatChipList.prototype._markAsTouched = function () {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        };
        /**
         * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
         * user to tab out of it. This prevents the list from capturing focus and redirecting
         * it back to the first chip, creating a focus trap, if it user tries to tab away.
         */
        MatChipList.prototype._allowFocusEscape = function () {
            var _this = this;
            if (this._tabIndex !== -1) {
                this._tabIndex = -1;
                setTimeout(function () {
                    _this._tabIndex = _this._userTabIndex || 0;
                    _this._changeDetectorRef.markForCheck();
                });
            }
        };
        MatChipList.prototype._resetChips = function () {
            this._dropSubscriptions();
            this._listenToChipsFocus();
            this._listenToChipsSelection();
            this._listenToChipsRemoved();
        };
        MatChipList.prototype._dropSubscriptions = function () {
            if (this._chipFocusSubscription) {
                this._chipFocusSubscription.unsubscribe();
                this._chipFocusSubscription = null;
            }
            if (this._chipBlurSubscription) {
                this._chipBlurSubscription.unsubscribe();
                this._chipBlurSubscription = null;
            }
            if (this._chipSelectionSubscription) {
                this._chipSelectionSubscription.unsubscribe();
                this._chipSelectionSubscription = null;
            }
            if (this._chipRemoveSubscription) {
                this._chipRemoveSubscription.unsubscribe();
                this._chipRemoveSubscription = null;
            }
        };
        /** Listens to user-generated selection events on each chip. */
        MatChipList.prototype._listenToChipsSelection = function () {
            var _this = this;
            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
                event.source.selected
                    ? _this._selectionModel.select(event.source)
                    : _this._selectionModel.deselect(event.source);
                // For single selection chip list, make sure the deselected value is unselected.
                if (!_this.multiple) {
                    _this.chips.forEach(function (chip) {
                        if (!_this._selectionModel.isSelected(chip) && chip.selected) {
                            chip.deselect();
                        }
                    });
                }
                if (event.isUserInput) {
                    _this._propagateChanges();
                }
            });
        };
        /** Listens to user-generated selection events on each chip. */
        MatChipList.prototype._listenToChipsFocus = function () {
            var _this = this;
            this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
                var chipIndex = _this.chips.toArray().indexOf(event.chip);
                if (_this._isValidIndex(chipIndex)) {
                    _this._keyManager.updateActiveItem(chipIndex);
                }
                _this.stateChanges.next();
            });
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
                _this._blur();
                _this.stateChanges.next();
            });
        };
        MatChipList.prototype._listenToChipsRemoved = function () {
            var _this = this;
            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
                var chip = event.chip;
                var chipIndex = _this.chips.toArray().indexOf(event.chip);
                // In case the chip that will be removed is currently focused, we temporarily store
                // the index in order to be able to determine an appropriate sibling chip that will
                // receive focus.
                if (_this._isValidIndex(chipIndex) && chip._hasFocus) {
                    _this._lastDestroyedChipIndex = chipIndex;
                }
            });
        };
        /** Checks whether an event comes from inside a chip element. */
        MatChipList.prototype._originatesFromChip = function (event) {
            var currentElement = event.target;
            while (currentElement && currentElement !== this._elementRef.nativeElement) {
                if (currentElement.classList.contains('mat-chip')) {
                    return true;
                }
                currentElement = currentElement.parentElement;
            }
            return false;
        };
        /** Checks whether any of the chips is focused. */
        MatChipList.prototype._hasFocusedChip = function () {
            return this.chips.some(function (chip) { return chip._hasFocus; });
        };
        /** Syncs the list's state with the individual chips. */
        MatChipList.prototype._syncChipsState = function () {
            var _this = this;
            if (this.chips) {
                this.chips.forEach(function (chip) {
                    chip.disabled = _this._disabled;
                    chip._chipListMultiple = _this.multiple;
                });
            }
        };
        MatChipList.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-chip-list',
                        template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
                        exportAs: 'matChipList',
                        host: {
                            '[attr.tabindex]': 'disabled ? null : _tabIndex',
                            '[attr.aria-describedby]': '_ariaDescribedby || null',
                            '[attr.aria-required]': 'role ? required : null',
                            '[attr.aria-disabled]': 'disabled.toString()',
                            '[attr.aria-invalid]': 'errorState',
                            '[attr.aria-multiselectable]': 'multiple',
                            '[attr.role]': 'role',
                            '[class.mat-chip-list-disabled]': 'disabled',
                            '[class.mat-chip-list-invalid]': 'errorState',
                            '[class.mat-chip-list-required]': 'required',
                            '[attr.aria-orientation]': 'ariaOrientation',
                            'class': 'mat-chip-list',
                            '(focus)': 'focus()',
                            '(blur)': '_blur()',
                            '(keydown)': '_keydown($event)',
                            '[id]': '_uid',
                        },
                        providers: [{ provide: formField.MatFormFieldControl, useExisting: MatChipList }],
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
                    }] }
        ];
        /** @nocollapse */
        MatChipList.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: forms.NgForm, decorators: [{ type: core.Optional }] },
            { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] },
            { type: core$1.ErrorStateMatcher },
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] }
        ]; };
        MatChipList.propDecorators = {
            errorStateMatcher: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            compareWith: [{ type: core.Input }],
            value: [{ type: core.Input }],
            required: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            ariaOrientation: [{ type: core.Input, args: ['aria-orientation',] }],
            selectable: [{ type: core.Input }],
            tabIndex: [{ type: core.Input }],
            change: [{ type: core.Output }],
            valueChange: [{ type: core.Output }],
            chips: [{ type: core.ContentChildren, args: [MatChip, {
                            // We need to use `descendants: true`, because Ivy will no longer match
                            // indirect descendants if it's left as false.
                            descendants: true
                        },] }]
        };
        return MatChipList;
    }(_MatChipListMixinBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Increasing integer for generating unique ids.
    var nextUniqueId$1 = 0;
    /**
     * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
     * May be placed inside or outside of an `<mat-chip-list>`.
     */
    var MatChipInput = /** @class */ (function () {
        function MatChipInput(_elementRef, _defaultOptions) {
            this._elementRef = _elementRef;
            this._defaultOptions = _defaultOptions;
            /** Whether the control is focused. */
            this.focused = false;
            this._addOnBlur = false;
            /**
             * The list of key codes that will trigger a chipEnd event.
             *
             * Defaults to `[ENTER]`.
             */
            this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
            /** Emitted when a chip is to be added. */
            this.chipEnd = new core.EventEmitter();
            /** The input's placeholder text. */
            this.placeholder = '';
            /** Unique id for the input. */
            this.id = "mat-chip-list-input-" + nextUniqueId$1++;
            this._disabled = false;
            this._inputElement = this._elementRef.nativeElement;
        }
        Object.defineProperty(MatChipInput.prototype, "chipList", {
            /** Register input for chip list */
            set: function (value) {
                if (value) {
                    this._chipList = value;
                    this._chipList.registerInput(this);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipInput.prototype, "addOnBlur", {
            /**
             * Whether or not the chipEnd event will be emitted when the input is blurred.
             */
            get: function () { return this._addOnBlur; },
            set: function (value) { this._addOnBlur = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipInput.prototype, "disabled", {
            /** Whether the input is disabled. */
            get: function () { return this._disabled || (this._chipList && this._chipList.disabled); },
            set: function (value) { this._disabled = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatChipInput.prototype, "empty", {
            /** Whether the input is empty. */
            get: function () { return !this._inputElement.value; },
            enumerable: true,
            configurable: true
        });
        MatChipInput.prototype.ngOnChanges = function () {
            this._chipList.stateChanges.next();
        };
        /** Utility method to make host definition/tests more clear. */
        MatChipInput.prototype._keydown = function (event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === keycodes.TAB && !keycodes.hasModifierKey(event, 'shiftKey')) {
                this._chipList._allowFocusEscape();
            }
            this._emitChipEnd(event);
        };
        /** Checks to see if the blur should emit the (chipEnd) event. */
        MatChipInput.prototype._blur = function () {
            if (this.addOnBlur) {
                this._emitChipEnd();
            }
            this.focused = false;
            // Blur the chip list if it is not focused
            if (!this._chipList.focused) {
                this._chipList._blur();
            }
            this._chipList.stateChanges.next();
        };
        MatChipInput.prototype._focus = function () {
            this.focused = true;
            this._chipList.stateChanges.next();
        };
        /** Checks to see if the (chipEnd) event needs to be emitted. */
        MatChipInput.prototype._emitChipEnd = function (event) {
            if (!this._inputElement.value && !!event) {
                this._chipList._keydown(event);
            }
            if (!event || this._isSeparatorKey(event)) {
                this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
                if (event) {
                    event.preventDefault();
                }
            }
        };
        MatChipInput.prototype._onInput = function () {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
        };
        /** Focuses the input. */
        MatChipInput.prototype.focus = function (options) {
            this._inputElement.focus(options);
        };
        /** Checks whether a keycode is one of the configured separators. */
        MatChipInput.prototype._isSeparatorKey = function (event) {
            if (keycodes.hasModifierKey(event)) {
                return false;
            }
            var separators = this.separatorKeyCodes;
            var keyCode = event.keyCode;
            return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
        };
        MatChipInput.decorators = [
            { type: core.Directive, args: [{
                        selector: 'input[matChipInputFor]',
                        exportAs: 'matChipInput, matChipInputFor',
                        host: {
                            'class': 'mat-chip-input mat-input-element',
                            '(keydown)': '_keydown($event)',
                            '(blur)': '_blur()',
                            '(focus)': '_focus()',
                            '(input)': '_onInput()',
                            '[id]': 'id',
                            '[attr.disabled]': 'disabled || null',
                            '[attr.placeholder]': 'placeholder || null',
                            '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                            '[attr.aria-required]': '_chipList && _chipList.required || null',
                        }
                    },] }
        ];
        /** @nocollapse */
        MatChipInput.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
        ]; };
        MatChipInput.propDecorators = {
            chipList: [{ type: core.Input, args: ['matChipInputFor',] }],
            addOnBlur: [{ type: core.Input, args: ['matChipInputAddOnBlur',] }],
            separatorKeyCodes: [{ type: core.Input, args: ['matChipInputSeparatorKeyCodes',] }],
            chipEnd: [{ type: core.Output, args: ['matChipInputTokenEnd',] }],
            placeholder: [{ type: core.Input }],
            id: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return MatChipInput;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CHIP_DECLARATIONS = [
        MatChipList,
        MatChip,
        MatChipInput,
        MatChipRemove,
        MatChipAvatar,
        MatChipTrailingIcon,
    ];
    var ɵ0 = {
        separatorKeyCodes: [keycodes.ENTER]
    };
    var MatChipsModule = /** @class */ (function () {
        function MatChipsModule() {
        }
        MatChipsModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: CHIP_DECLARATIONS,
                        declarations: CHIP_DECLARATIONS,
                        providers: [
                            core$1.ErrorStateMatcher,
                            {
                                provide: MAT_CHIPS_DEFAULT_OPTIONS,
                                useValue: ɵ0
                            }
                        ]
                    },] }
        ];
        return MatChipsModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MAT_CHIPS_DEFAULT_OPTIONS = MAT_CHIPS_DEFAULT_OPTIONS;
    exports.MatChip = MatChip;
    exports.MatChipAvatar = MatChipAvatar;
    exports.MatChipInput = MatChipInput;
    exports.MatChipList = MatChipList;
    exports.MatChipListChange = MatChipListChange;
    exports.MatChipRemove = MatChipRemove;
    exports.MatChipSelectionChange = MatChipSelectionChange;
    exports.MatChipTrailingIcon = MatChipTrailingIcon;
    exports.MatChipsModule = MatChipsModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
// source map elided