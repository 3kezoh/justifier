import { Router } from "express";
import * as controller from "./controller";
import * as validation from "./validation";

export const textRouter = Router();

/**
 * @api {post} /api/justify
 * @apiVersion 0.1.0
 * @apiName Justify
 * @apiGroup Text
 * @apiPermission user
 *
 * @apiHeader {String} Content-Type <code> plain/text </code>
 *
 * @apiParam {String} text The text to justify
 * @apiParamExample {String} Request Body:
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum neque posuere finibus malesuada. Nulla et ullamcorper ante. Praesent pretium luctus dapibus. Sed neque massa, mollis at venenatis et, lobortis vitae erat.
 *
 * @apiSuccess (200 OK) justifiedText The justified text
 * @apiSuccessExample {text/plain} Response Body:
 * HTTP/1.1 200 OK
 * Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Cras vestibulum  neque
 * posuere finibus  malesuada.  Nulla et ullamcorper ante. Praesent pretium  luctus
 * dapibus. Sed neque massa, mollis  at venenatis et, lobortis  vitae  erat.
 *
 * @apiError (415 Unsupported Media Type) APIError The payload is in a format not supported.
 */

textRouter.post("/justify", validation.justify, controller.justify);
