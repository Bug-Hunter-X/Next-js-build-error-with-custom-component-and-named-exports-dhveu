# Next.js Build Error with Custom Component and Named Exports

This repository demonstrates a bug in Next.js where a build error occurs when using a custom component that imports another module with a named export.  The issue is likely related to the way Next.js handles module resolution and dynamic imports during the build process.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the build error.  

## Solution

The provided solution demonstrates how to work around this issue using techniques such as default exports or restructuring the project to avoid the named export conflict.
