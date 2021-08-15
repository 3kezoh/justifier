import { jwt } from "@middlewares/auth";
import { Router } from "express";
import * as controller from "./controller";
import * as validation from "./validation";

export const textRouter = Router();

/**
 * @apiDefine AuthorizationHeader
 * @apiHeader {String} Authorization <code> Bearer <accessToken> </code>
 */

/**
 * @apiDefine Unauthorized
 * @apiError (401 Unauthorized) APIError Only authenticated users can access this route
 */

/**
 * @apiDefine UnauthorizedExample
 * @apiErrorExample {json} Unauthorized Payload:
 *  {
 *    "status": 401,
 *    "message": "Unauthorized",
 *  }
 */

/**
 * @apiDefine UnsupportedMediaType
 * @apiError (415 Unsupported Media Type) APIError The payload is in a format not supported.
 */

/**
 * @apiDefine UnsupportedMediaTypeExample
 * @apiErrorExample {json} Unsupported Media Type Payload:
 *  {
 *    "status": 415,
 *    "message": "Unsupported Media Type",
 *  }
 */

textRouter.use(jwt.authenticate);

/**
 * @api {post} /api/justify
 * @apiVersion 0.1.0
 * @apiName Justify
 * @apiGroup Text
 *
 * @apiUse AuthorizationHeader
 * @apiHeader {String} Content-Type <code> plain/text </code>
 *
 * @apiParam {String} text The text to justify
 * @apiParamExample {String} Request Body:
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum neque posuere finibus malesuada. Nulla et ullamcorper ante. Praesent pretium luctus dapibus. Sed neque massa, mollis at venenatis et, lobortis vitae erat.
 *
 * @apiSuccess (200 OK) justifiedText The justified text
 * @apiSuccessExample {text/plain} Success Response Body:
 * HTTP/1.1 200 OK
 * Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Cras vestibulum  neque
 * posuere finibus  malesuada.  Nulla et ullamcorper ante. Praesent pretium  luctus
 * dapibus. Sed neque massa, mollis  at venenatis et, lobortis  vitae  erat.
 *
 * @apiUse Unauthorized
 * @apiUse UnauthorizedExample
 *
 * @apiUse UnsupportedMediaType
 * @apiUse UnsupportedMediaTypeExample
 */

textRouter.post("/justify", validation.justify, controller.justify);
