toggler.js
===

Use for toggling elements based on checkboxes, radios, and select elements.

## data-toggler="onoff" (radio/checkbox)

Add data-toggler="onoff" to a checkbox/radio input to initialize the toggler behavior. Add data-toggle-on and/or data-toggle-off to specify what elements get toggled. Both of these attributes accept css/jquery selectors.

### Example code:

```html
<label><input type="checkbox" data-toggler="onoff" data-toggle-on=".showwhenchecked" data-toggle-off=".showwhennotchecked,.showwhennotchecked2"> Check Me!</label>
 
<div class="showwhenchecked">This is visible when the above is checked, hidden otherwise</div>
 
<div class="showwhennotchecked">This is visible when not checked, hidden otherwise</div>
<div class="showwhennotchecked2">This is also visible when not checked, hidden otherwise</div>
```

## data-toggler="option" (select element)

Add data-toggler="option" to a select element to initialize the toggler behavior. Add data-toggle-off-group to the select element and data-toggle-on to individual option elements. Add data-toggle-group and data-toggle-id to target togglable elements. When the select is changed, every element with data-toggle-group == to the data-toggle-off-group will be hidden, and then elements with data-toggle-id == data-toggle-on will be shown. It is not required to have data-toggle-on on every option element.

Note: data-toggle-off-group, data-toggle-on, data-toggle-group, and data-toggle-id are not css selectors, they are simple identifying strings.

###Example code:

```html
<select data-toggler="option" data-toggle-off-group="examplegroup">
<option data-toggle-on="show1">Show 1</option>
<option data-toggle-on="show2">Show 2</option>
<option>Show None</option>
</select>
 
<div data-toggle-group="examplegroup" data-toggle-id="show1">
This will be shown when "Show 1" is selected, hidden otherwise.
</div>
<div data-toggle-group="examplegroup" data-toggle-id="show2">
This will be shown when "Show 2" is selected, hidden otherwise.
</div>
```

Note in the above example, when "Show None" is selected, all of the "examplegroup" divs will be hidden.
