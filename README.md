# TypeScript REST API PROXY

<img src="./proxy-thumbnail.jpg" alt="CYBERPUNK PROXY" style="height: 418px; width:800px;"/>

This is a Proxy for the Content APIs. Gets API urls from `channels.json` and serves them under new endpoints named with urlPrefixs.

The entire application is contained within the `app.ts` file.


## **Install**

    npm install

## Run the app on prod

    npm run start-ts

## Run the app on prod

    npm run watch-ts

## Run the tests

    npm run test

# CONFIG

In `channels.json` you should define your APIs country, name, language, urlPrefix and internalUrl.


```json
{
  "france": {
    "name": "francais-channel",
    "language": "fre",
    "urlPrefix": "fr",
    "internalUrl": "https://api.publicapis.org/entries"
  },
  "arabia": {
    "name": "arabi-channel",
    "language": "ara",
    "urlPrefix": "sa",
    "internalUrl": "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  },
  "albania": {
    "name": "albanian-channel",
    "language": "alb",
    "urlPrefix": "al",
    "internalUrl": "http://universities.hipolabs.com/search?country=United+States"
  },
  "macedonia": {
    "name": "macedonian-channel",
    "language": "mac",
    "urlPrefix": "mk",
    "internalUrl": "https://nekos.best/api/v2/endpoints"
  },
  "russia": {
    "name": "russian-channel",
    "language": "rus",
    "urlPrefix": "ru",
    "internalUrl": "https://api.coindesk.com/v1/bpi/currentprice.json"
  },
  "germany": {
    "name": "deutsch-channel",
    "language": "ger",
    "urlPrefix": "de",
    "internalUrl": "https://www.boredapi.com/api/activity"
  }
}

```


# REST API

The REST API to the example app is described below.

## Get list of Contents by urlPrefix

### Request

`GET http://localhost:8888/ru`

    curl -i -H 'Accept: application/json' http://localhost:8888/ru/

### Response

```console
{
  "message": {
    "channelStatusCode": 200,
    "channelHeaders": {
      "date": "Sun, 19 Feb 2023 12:26:57 GMT",
      "content-type": "application/json; charset=utf-8",
      "content-length": "26834",
      "connection": "keep-alive",
      "server": "DEUSMUR",
      "x-node": "",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "expires": "-1",
      "access-control-allow-origin": "*",
      "access-control-allow-headers": ",Accept,Content-Type,Access-Control-Allow-Origin,Authorization",
      "access-control-allow-methods": ",DELETE,GET,HEAD,PATCH,POST,PUT",
      "etag": "",
      "x-cache": [
        "STALE",
        "BYPASS"
      ],
      "vary": "Accept-Encoding",
      "x-frame-options": "SAMEORIGIN",
      "x-content-type-options": "nosniff",
      "x-xss-protection": "1; mode=block"
    },
 "channelBody": {
      "metadata": {
        "favicon": "https://cdn.com/8036988.png",
        "socialMediaFacebook": "https://facebook.com/russiancontent",
        "metaTitle": "DEUSMUR НА РУССКОМ",
        "metaDescription": "DEUSMUR НА РУССКОМ - цифровая платформа для глобальных отчетов о политике, бизнесе и культуре."
    },
}
```

# Technologies

* [Express](https://www.npmjs.com/package/express)
* [Jest](https://www.npmjs.com/package/jest)
* [Supertest](https://www.npmjs.com/package/express)
* [Ts-jest](https://www.npmjs.com/package/ts-jest)
* [Undici](https://www.npmjs.com/package/undici)
* [Winston](https://www.npmjs.com/package/winston)
