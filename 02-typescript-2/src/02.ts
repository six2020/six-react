// any 和 unknown


// let value: any;

// value = true;               // ok
// value = 1;                  // ok
// value = 'abc';              // ok
// value = Symbol("hello");    // ok
// value = {};                 // ok
// value = [];                 // ok

// value.foo.bar;              // ok
// value();                    // ok
// new value();                // ok
// value[0][1];                // ok


// unknown

let value: unknown;

value = true;               // ok
value = 1;                  // ok
value = 'abc';              // ok
value = Symbol("hello")     // ok
value = {};                 // ok
value = [];                 // ok

// value.foo.bar;              // err
// value();                    // err
// new value();                // err
// value[0][1];                // err