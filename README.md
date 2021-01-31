## Use an interval that you can pause

An interval with pause can replace most use cases for more complex
packages like react-countdown.

### Pros
You can use any time and date library you want (date-fns, day.js, moment.js).
Extremely small bundle size.

### Cons

You must perform all date calculations and formatting.
It ends up offering little more than an implementation of many `useEffect()`
tutorials. Why add a dependency for so little code?
