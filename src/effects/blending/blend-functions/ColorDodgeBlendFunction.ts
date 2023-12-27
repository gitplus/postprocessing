import { BlendFunction } from "../BlendFunction.js";

import shader from "./shaders/color-dodge.frag";

/**
 * Color dodge.
 *
 * @group Blending
 */

export class ColorDodgeBlendFunction extends BlendFunction {

	/**
	 * Constructs a new color dodge blend function.
	 */

	constructor() {

		super(shader);

	}

}