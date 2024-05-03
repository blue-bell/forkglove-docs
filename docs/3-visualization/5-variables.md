---
title: Variables
description: Variables are values that can be set globally for a Foxglove layout.
---

Variables are values that can be set globally for a Foxglove layout and quickly update multiple panels at once. They can be set to a string, number, or boolean value. They can also be set to an array containing any of those primitive values (e.g. `["x", 2, false]`), or a map of strings to any of those primitive values (e.g. `{"x": 2, "y": false}`).

Open the sidebar's "Variables" tab to view, add, and update variables.

![variables tab](/img/docs/visualization/variables.webp)

## Using variables

Reference variables in Foxglove using a `$` prefix, for example `$my_global_var`.

### In message paths

Panels that support [message path syntax](/docs/visualization/message-path-syntax) – like [Raw Messages](/docs/visualization/panels/raw-messages), [Plot](/docs/visualization/panels/plot), and [State Transitions](/docs/visualization/panels/state-transitions) – can reference variables to [slice](/docs/visualization/message-path-syntax#using-variables-to-slice) or [filter](/docs/visualization/message-path-syntax#using-variables-to-filter) data and dynamically decide what to visualize.

You can leverage variables to quickly switch between subsets of your data – for example:

- Create a `$my_ID` variable in the _Variables_ tab, and set its value to `101`
- Type `/my_objects.objects[:]{id==$my_ID}` in a [Raw Messages panel](/docs/visualization/panels/raw-messages) to inspect the object whose `id` field equals `101`
- Add `/my_objects.objects[:]{id==$my_ID}.velocity` as a y-axis value in a [Plot panel](/docs/visualization/panels/plot) to plot that same object's `velocity`

### In User Scripts

Variables can be [referenced](/docs/visualization/panels/user-scripts#using-global-variables), but not modified, in User Scripts. The user script receives all variables as an object every time it is called.

### In Foxglove Extensions

Variables can be referenced in custom [extension panels](/docs/visualization/extensions/introduction) via the [extension API](/docs/visualization/extensions/api/extension-context) [`RenderState`](https://docs.foxglove.dev/extension-api/types/RenderState).

## Updating variables

Variables can be updated directly or via user interactions in the [3D](/docs/visualization/panels/3d) panel or [Variable Slider](/docs/visualization/panels/variable-slider) panel.

Foxglove extensions can also create or update variables via the [extension API](/docs/visualization/extensions/api/extension-context) [`PanelExtensionContext`](https://docs.foxglove.dev/extension-api/types/PanelExtensionContext).

## Shortcuts

- Type `]` to quickly open and close the right sidebar
- Click input + `↑` – Increment numeric variable values
- Click input + `↓` – Decrement numeric variable values
