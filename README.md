# Use Case

## APIs often return JSON data where dates are represented as ISO 8601 strings. 

## While these strings are standard, they require explicit conversion to JavaScript Date objects to perform operations like formatting or calculations. 

## Manually processing nested data structures to identify and convert dates can be tedious and error-prone.

## The toJavascriptDate function automates this process, ensuring all ISO date strings in your data are converted to Date objects efficiently and reliably.

# Key Features

## Recursive Traversal: Automatically handles deeply nested objects and arrays without altering their structure.

## ISO Date Detection: Uses a regular expression to identify and validate ISO 8601 date strings.

## Conversion to Date Objects: Replaces valid ISO date strings with JavaScript Date objects for seamless manipulation.

## Type Safety: Leaves non-ISO strings, numbers, booleans, and null values untouched.

## Array Support: Processes arrays, converting ISO date strings while preserving other elements.


