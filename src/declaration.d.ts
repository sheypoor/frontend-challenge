declare module '*.scss';
// TypeScript does not know that there are files other than .ts or .tsx so it will throw an error if an import has an unknown file suffix.
// you have to tell the TypeScript compiler that these files exist. To do so add a declaration file in which you declare modules with fitting names.