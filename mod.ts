/* 
* LMGU-Technik UnsureBool

* Copyright (C) 2023 Hans Schallmoser

* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.

* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.

* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export const TRUE = Symbol("TRUE");
export type TRUE = typeof TRUE;
export const FALSE = Symbol("FALSE");
export type FALSE = typeof FALSE;
export const UNKNOWN = Symbol("UNKNOWN");
export type UNKNOWN = typeof UNKNOWN;
export type UnsureBool = TRUE | FALSE | UNKNOWN;

export const NO_CHANGE = Symbol("NO_CHANGE");
export type NO_CHANGE = typeof NO_CHANGE;
