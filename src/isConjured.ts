import {ItemNames} from "./ItemNames";

const isConjured = (name: string): boolean => name.startsWith(ItemNames.CONJURED);

export default isConjured;