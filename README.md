# Justifier

Justifier is a REST API that justifies text. Check out the
[documentation](https://justifier-3kezoh.herokuapp.com/docs) for more information.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation

1. Clone the repo.

```sh
git clone https://github.com/3kezoh/justifier.git justifier
```

2. Change directory.

```sh
cd justifier
```

3. Install NPM packages.

```sh
npm install
```

4. Add environment variables in a .env file.

```sh
JWT_SECRET=
JWT_EXPIRATION=
MONGODB_URI=
MONGODB_URI_LOCAL=
MONGODB_URI_TEST=
NODE_ENV=
PORT=
```

5. Compile Typescript.

```sh
npm run build
# or
npm run build:watch
```

6. Start the development server.

```sh
npm run dev
```

## Usage

You may want to use [Postman](https://www.postman.com) or the [curl CLI](https://curl.se) to consume the api.

> **NOTE** There is a rate limit of 80.000 words per/day

## Example

You can send HTTP request at the live demo deployed on [heroku](https://www.heroku.com).

<https://ekezoh-justifier.herokuapp.com>

1. Get an access token at /auth/token with an email.

```sh
curl --request POST https://justifier-3kezoh.herokuapp.com/auth/token \
--header "Content-Type: application/json" \
--data '{ "email": "user@gmail.com" }'
```

2. Justify some text at /api/justify

```sh
curl --request POST https://justifier-3kezoh.herokuapp.com/api/justify \
--header "Authorization: Bearer <accessToken>" \
--header "Content-Type: text/plain" \
--data "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in libero sed sem pulvinar aliquam vitae et quam. Sed in lorem sed neque viverra rutrum. Aenean vitae ultrices diam. Nullam suscipit tincidunt urna. Vestibulum eget fermentum mauris. Duis vel velit volutpat, sodales purus tempor, sodales mi."
```
