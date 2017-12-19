toggler.js
===

Use for toggling elements based on checkboxes, radios, and select elements.

## data-toggler="onoff" (radio/checkbox)

Add `data-toggler="onoff"` to a checkbox/radio input to initialize the toggler behavior. Add `data-toggle-on` and/or `data-toggle-off` to specify what elements get toggled. Both of these attributes accept css/jquery selectors.

For radio elements, when a radio is changed, every element with data-toggle-group == to the data-toggle-off-group will be hidden, and then elements that match `data-toggle-on` selector for that radio element will be toggled on.

### Example code (checkbox):

```html
<label><input type="checkbox" data-toggler="onoff" data-toggle-on=".showwhenchecked" data-toggle-off=".showwhennotchecked,.showwhennotchecked2"> Check Me!</label>

<div class="showwhenchecked">This is visible when the above is checked, hidden otherwise</div>

<div class="showwhennotchecked">This is visible when not checked, hidden otherwise</div>
<div class="showwhennotchecked2">This is also visible when not checked, hidden otherwise</div>
```

### Example code (radio):

```html
<label><input type="radio" name="radiogroup" value="1" data-toggler="onoff" data-toggle-on=".showwhenchecked" data-toggle-off-group="examplegroup"> Radio 1</label>
<label><input type="radio" name="radiogroup" value="2" data-toggler="onoff" data-toggle-off-group="examplegroup"> Radio 2</label>

<div class="showwhenchecked" data-toggle-group="examplegroup">This is visible when Radio 1 is checked, hidden otherwise</div>
```

## data-toggler="enable" (radio/checkbox)

`data-toggler="enable"` is exactly the same as `onoff` above, except that instead of hiding elements, it finds any controls inside the elements sets `disabled=true` and adds the class `disabled` to each one.

### Example code (checkbox):

```html
<label><input type="checkbox" data-toggler="enable" data-toggle-enable=".showwhenchecked" data-toggle-disable=".showwhennotchecked,.showwhennotchecked2"> Check Me!</label>

<div class="showwhenchecked">
<input>
This is input is enabled when the above is checked, disabled otherwise. But visible either way.
</div>
```

## data-toggler="option" (select element)

Add data-toggler="option" to a select element to initialize the toggler behavior. Add data-toggle-off-group to the select element and data-toggle-on to individual option elements. Add data-toggle-group and data-toggle-id to target togglable elements. When the select is changed, every element with data-toggle-group == to the data-toggle-off-group will be hidden, and then elements with data-toggle-id == data-toggle-on will be shown. It is not required to have data-toggle-on on every option element.

Note: data-toggle-off-group, data-toggle-on, data-toggle-group, and data-toggle-id are not css selectors, they are simple identifying strings.

### Example code:

```html
<select data-toggler="option" data-toggle-off-group="examplegroup">
<option data-toggle-on=".show1">Show 1</option>
<option data-toggle-on=".show2">Show 2</option>
<option>Show None</option>
</select>

<div data-toggle-group="examplegroup" class="show1">
This will be shown when "Show 1" is selected, hidden otherwise.
</div>
<div data-toggle-group="examplegroup" class="show2">
This will be shown when "Show 2" is selected, hidden otherwise.
</div>
```

Note in the above example, when "Show None" is selected, all of the "examplegroup" divs will be hidden.

## data-toggler="button"

Add `data-toggler="button"` to a button element to toggle elements via button. You can toggle on and/or off via this button.

### Example code:
```html
<button type="button" data-toggler="button" data-toggle-on=".show1" data-toggle-off=".hide1">Toggle Divs</button>

<div class="show1 hidden">This will appear when clicking the button</div>
<div class="hide1">This will hide when clicking the button</div>
```