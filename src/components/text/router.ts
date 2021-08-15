import { jwt } from "@middlewares/auth";
import { Router } from "express";
import * as controller from "./controller";
import * as validation from "./validation";

export const textRouter = Router();

/**
 * @apiDefine AuthorizationHeader
 * @apiHeader {String} Authorization Bearer <code> accessToken </code>
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
 * @apiError (415 Unsupported Media Type) APIError The payload is in a format not supported,
 * make sure the Content-Type header is <code> plain/text </code>
 */

/**
 * @apiDefine UnsupportedMediaTypeExample
 * @apiErrorExample {json} Unsupported Media Type Payload:
 *  {
 *    "status": 415,
 *    "message": "Unsupported Media Type",
 *  }
 */

/**
 * @apiDefine PaymentRequired
 * @apiError (402 Payment Required) APIError 80,000 words per sliding day for free
 */

/**
 * @apiDefine PaymentRequiredExample
 * @apiErrorExample {json} Payment Required Payload:
 *  {
 *    "status": 402,
 *    "message": "Payment Required",
 *  }
 */

textRouter.use(jwt.authenticate);

/**
 * @api {post} /api/justify
 * @apiVersion 0.1.0
 * @apiName Justify
 * @apiGroup Text
 *
 * @apiDescription Justifies the body of a request, the length of the lines is 80 characters.
 *
 * @apiUse AuthorizationHeader
 * @apiHeader {String} Content-Type <code> plain/text </code>
 *
 * @apiParamExample {String} Request Body:
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum neque posuere finibus malesuada. Nulla et ullamcorper ante. Praesent pretium luctus dapibus. Sed neque massa, mollis at venenatis et, lobortis vitae erat.
 *
 * @apiSuccessExample {text/plain} Response Body:
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
 *
 * @apiUse PaymentRequired
 * @apiUse PaymentRequiredExample
 */

textRouter.post("/justify", validation.justify, controller.justify);
