# UnsureBool

Symbols for TRUE, FALSE, UNKNOWN and NO_CHANGE

## Important

Make sure to only use ***exactly one version*** of this lib and only the
_**major versions**_ (1.0.0, 2.0.0; not 1.0.1, 1.2.5), minor versions are docs
updates

```typescript
// don't do this ...
import { TRUE as TRUE1 } from "https://deno.land/x/unsure_bool@1.0.0/mod.ts";
import { TRUE as TRUE2 } from "https://deno.land/x/unsure_bool@1.0.1/mod.ts";

// ... because
console.log(TRUE1 !== TRUE2); // prints true
```

> Using multiple versions results in multiple mod.ts instances with different
> symbol instances.

## License

LMGU-Technik UnsureBool

Copyright (C) 2023 Hans Schallmoser

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details. You
should have received a copy of the GNU General Public License along with this
program. If not, see <https://www.gnu.org/licenses/>.
