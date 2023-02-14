globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/assets/assets-001.png": {
    "type": "image/png",
    "etag": "\"245b4b-jGG2qRltPai84JKoJYhvAIez7r8\"",
    "mtime": "2023-02-11T21:57:02.329Z",
    "size": 2382667,
    "path": "../public/assets/assets-001.png"
  },
  "/assets/assets-002.png": {
    "type": "image/png",
    "etag": "\"23d9da-IYA8a42sE8tqVsXUW7B18OKyQH0\"",
    "mtime": "2023-02-11T21:58:27.266Z",
    "size": 2349530,
    "path": "../public/assets/assets-002.png"
  },
  "/assets/assets-003.png": {
    "type": "image/png",
    "etag": "\"23a25b-/in7PsSaYET4WvicIY6FhExzTjU\"",
    "mtime": "2023-02-13T21:14:16.689Z",
    "size": 2335323,
    "path": "../public/assets/assets-003.png"
  },
  "/assets/assets-004.png": {
    "type": "image/png",
    "etag": "\"1f4da3-9P7chUxfhwTlInX+pFCd/yNeHPs\"",
    "mtime": "2023-02-13T21:14:30.668Z",
    "size": 2051491,
    "path": "../public/assets/assets-004.png"
  },
  "/assets/assets-005.png": {
    "type": "image/png",
    "etag": "\"282da4-dlSg9F/vYI9981FmMcslLn+plmQ\"",
    "mtime": "2023-02-13T21:14:14.746Z",
    "size": 2633124,
    "path": "../public/assets/assets-005.png"
  },
  "/gees/gees-001.png": {
    "type": "image/png",
    "etag": "\"3f0da-ULUa+hAqARDfORbILBM4sPuyzeM\"",
    "mtime": "2023-02-06T02:11:56.000Z",
    "size": 258266,
    "path": "../public/gees/gees-001.png"
  },
  "/gees/gees-002.png": {
    "type": "image/png",
    "etag": "\"43c2a-ruQAXhUVUDX9D66+1QrpB3duQIc\"",
    "mtime": "2023-02-06T02:11:12.000Z",
    "size": 277546,
    "path": "../public/gees/gees-002.png"
  },
  "/gees/gees-003.png": {
    "type": "image/png",
    "etag": "\"2b4c81-5P0u4xTJg/kULSZpcDzT4BOJ64A\"",
    "mtime": "2023-02-06T02:13:08.000Z",
    "size": 2837633,
    "path": "../public/gees/gees-003.png"
  },
  "/gees/gees-004.png": {
    "type": "image/png",
    "etag": "\"21625f-82AX7vGSHnSRDQ55EF70aeGufJc\"",
    "mtime": "2023-02-06T02:12:52.000Z",
    "size": 2187871,
    "path": "../public/gees/gees-004.png"
  },
  "/gees/gees-005.png": {
    "type": "image/png",
    "etag": "\"43efc-O64TG62A3/LJBXuG8l12Ca1qY14\"",
    "mtime": "2023-02-06T02:11:40.000Z",
    "size": 278268,
    "path": "../public/gees/gees-005.png"
  },
  "/gees/gees-006.png": {
    "type": "image/png",
    "etag": "\"2b7cce-Pts+ODc3XL1RLCFhfITRMibhoEQ\"",
    "mtime": "2023-02-06T02:13:58.000Z",
    "size": 2849998,
    "path": "../public/gees/gees-006.png"
  },
  "/gees/gees-007.png": {
    "type": "image/png",
    "etag": "\"232b19-/73N4V676ohuSwyMc+q447Jy2GU\"",
    "mtime": "2023-02-06T02:14:12.000Z",
    "size": 2304793,
    "path": "../public/gees/gees-007.png"
  },
  "/gees/gees-008.png": {
    "type": "image/png",
    "etag": "\"43cf8-x3fJQC3KhJgejmbYWDsxY9oHzSM\"",
    "mtime": "2023-02-06T02:11:32.000Z",
    "size": 277752,
    "path": "../public/gees/gees-008.png"
  },
  "/gees/gees-009.png": {
    "type": "image/png",
    "etag": "\"2b56e1-3cSkaxq9dD5ep+ivf4Gh2sOdoHY\"",
    "mtime": "2023-02-06T02:15:00.000Z",
    "size": 2840289,
    "path": "../public/gees/gees-009.png"
  },
  "/gees/gees-010.png": {
    "type": "image/png",
    "etag": "\"2a7638-eAvTK5JmbQqqL0bho1mZmcznT/A\"",
    "mtime": "2023-02-06T02:14:46.000Z",
    "size": 2782776,
    "path": "../public/gees/gees-010.png"
  },
  "/gees/gees-011.png": {
    "type": "image/png",
    "etag": "\"431d9-dYH8dYgWSTFctHgRd/lPGcHkY4Q\"",
    "mtime": "2023-02-06T02:12:10.000Z",
    "size": 274905,
    "path": "../public/gees/gees-011.png"
  },
  "/gees/gees-012.png": {
    "type": "image/png",
    "etag": "\"43c98-JteZXtV+QwDljodZyakBFSxZfwk\"",
    "mtime": "2023-02-06T02:11:26.000Z",
    "size": 277656,
    "path": "../public/gees/gees-012.png"
  },
  "/gees/gees-013.png": {
    "type": "image/png",
    "etag": "\"2b7bda-QbBUtI+lR6iiNuBqJlkmf6Q4D5U\"",
    "mtime": "2023-02-06T02:13:26.000Z",
    "size": 2849754,
    "path": "../public/gees/gees-013.png"
  },
  "/gees/gees-014.png": {
    "type": "image/png",
    "etag": "\"2cb7d6-V/4Na4PR8AEucGqInZpJC6yyNdE\"",
    "mtime": "2023-02-06T02:14:34.000Z",
    "size": 2930646,
    "path": "../public/gees/gees-014.png"
  },
  "/gems/full-001.png": {
    "type": "image/png",
    "etag": "\"67ff4-BbEPU7RgkQAOxd4potPc4sBdfLs\"",
    "mtime": "2023-02-12T15:15:45.240Z",
    "size": 425972,
    "path": "../public/gems/full-001.png"
  },
  "/gems/full-002.png": {
    "type": "image/png",
    "etag": "\"5954f-QSCPCJSs4Foaq3mWpjyhgRCuOUw\"",
    "mtime": "2023-02-12T15:17:23.504Z",
    "size": 365903,
    "path": "../public/gems/full-002.png"
  },
  "/gems/full-003.png": {
    "type": "image/png",
    "etag": "\"5797c-HX7oDljVzP5owUebWh5H70AVMOw\"",
    "mtime": "2023-02-12T15:17:05.648Z",
    "size": 358780,
    "path": "../public/gems/full-003.png"
  },
  "/gems/full-004.png": {
    "type": "image/png",
    "etag": "\"510f9-cQJnfm/B4Ik26yi4M5zzixvUcbE\"",
    "mtime": "2023-02-12T15:17:41.828Z",
    "size": 332025,
    "path": "../public/gems/full-004.png"
  },
  "/gems/Gems.svg": {
    "type": "image/svg+xml",
    "etag": "\"8bd6-lVtOLodD/iKHSVxNe5hJwFhP5wM\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 35798,
    "path": "../public/gems/Gems.svg"
  },
  "/gems/globe-001.png": {
    "type": "image/png",
    "etag": "\"69fbe-7oJXd14jMrcqawfoCxZcJR9lt8c\"",
    "mtime": "2023-02-12T23:23:05.381Z",
    "size": 434110,
    "path": "../public/gems/globe-001.png"
  },
  "/gems/globe-002.png": {
    "type": "image/png",
    "etag": "\"76231-UC9jmXr50HUx1jHFsGrXzOZ9VGg\"",
    "mtime": "2023-02-13T00:12:03.007Z",
    "size": 483889,
    "path": "../public/gems/globe-002.png"
  },
  "/gems/globe-003.png": {
    "type": "image/png",
    "etag": "\"7d0fd-RPI2XXgptz8Y3blfqO6RDaXE5pg\"",
    "mtime": "2023-02-13T00:12:54.586Z",
    "size": 512253,
    "path": "../public/gems/globe-003.png"
  },
  "/gems/globe-004.png": {
    "type": "image/png",
    "etag": "\"7d22a-AV2I92S+W0akbgI0facmaiD1kkM\"",
    "mtime": "2023-02-13T00:13:27.435Z",
    "size": 512554,
    "path": "../public/gems/globe-004.png"
  },
  "/gems/globe-005.png": {
    "type": "image/png",
    "etag": "\"69153-5lZZzh58s64K/X9N51SsG+jW/j0\"",
    "mtime": "2023-02-13T00:14:23.999Z",
    "size": 430419,
    "path": "../public/gems/globe-005.png"
  },
  "/gems/globe-007.png": {
    "type": "image/png",
    "etag": "\"694b4-aba2baivrcPDbovxdtLxLijpNiU\"",
    "mtime": "2023-02-13T00:14:39.796Z",
    "size": 431284,
    "path": "../public/gems/globe-007.png"
  },
  "/gems/globe-008.png": {
    "type": "image/png",
    "etag": "\"69608-Tz0rp1Xzcx/7gO8FY8qxQuJoeiQ\"",
    "mtime": "2023-02-13T00:14:53.228Z",
    "size": 431624,
    "path": "../public/gems/globe-008.png"
  },
  "/gems/globe.svg": {
    "type": "image/svg+xml",
    "etag": "\"1536-EInIfb41Mkz61nEjLDWA9Pb+VEs\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 5430,
    "path": "../public/gems/globe.svg"
  },
  "/gems/globe.xcf": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"53caba-HKZZ3sQ6Otg6fSeATxjtfY1NIN4\"",
    "mtime": "2023-02-12T23:22:20.985Z",
    "size": 5491386,
    "path": "../public/gems/globe.xcf"
  },
  "/gems/tube-001.svg": {
    "type": "image/svg+xml",
    "etag": "\"36ba-1KUItSMSF5vbQ9tPTe37+3chgLQ\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 14010,
    "path": "../public/gems/tube-001.svg"
  },
  "/gems/tube-002.svg": {
    "type": "image/svg+xml",
    "etag": "\"3943-i0q8gdwAfnNVGlaXJdKsQZc3vLw\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 14659,
    "path": "../public/gems/tube-002.svg"
  },
  "/gems/tube-003.svg": {
    "type": "image/svg+xml",
    "etag": "\"36ba-uw4wOyeLg0SONwba8qjzY9b50qI\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 14010,
    "path": "../public/gems/tube-003.svg"
  },
  "/gems/tube-004.svg": {
    "type": "image/svg+xml",
    "etag": "\"36ba-eA41S+7G6h/QGK+ULWEgSU8sVaQ\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 14010,
    "path": "../public/gems/tube-004.svg"
  },
  "/gems/tube.svg": {
    "type": "image/svg+xml",
    "etag": "\"36ba-1KUItSMSF5vbQ9tPTe37+3chgLQ\"",
    "mtime": "2023-02-12T13:54:22.013Z",
    "size": 14010,
    "path": "../public/gems/tube.svg"
  },
  "/icons/icons-001.png": {
    "type": "image/png",
    "etag": "\"1b34e-K2xvouDD+2QyaXsVajiveAV1jis\"",
    "mtime": "2023-02-07T00:15:18.000Z",
    "size": 111438,
    "path": "../public/icons/icons-001.png"
  },
  "/icons/icons-002.png": {
    "type": "image/png",
    "etag": "\"26feb-HyaY10Qt5pNnpDBoimjnwmVrx2E\"",
    "mtime": "2023-02-07T00:08:40.000Z",
    "size": 159723,
    "path": "../public/icons/icons-002.png"
  },
  "/icons/icons-003.png": {
    "type": "image/png",
    "etag": "\"2704f-0BnNSuCel2yq+AVNlSFbC7LZpuM\"",
    "mtime": "2023-02-07T00:13:46.000Z",
    "size": 159823,
    "path": "../public/icons/icons-003.png"
  },
  "/icons/icons-004.png": {
    "type": "image/png",
    "etag": "\"2fc34-kHNZWYwKuHlbUwIMubbmKMZj/OM\"",
    "mtime": "2023-02-06T03:58:42.000Z",
    "size": 195636,
    "path": "../public/icons/icons-004.png"
  },
  "/icons/icons-005.png": {
    "type": "image/png",
    "etag": "\"4a27d-jYBJ4o82KtmV8f1TX8vR1kPzudc\"",
    "mtime": "2023-02-06T21:31:38.000Z",
    "size": 303741,
    "path": "../public/icons/icons-005.png"
  },
  "/icons/icons-006.png": {
    "type": "image/png",
    "etag": "\"2d408-gAzeDqFP+NuGBFgCtvvcdqjCf7g\"",
    "mtime": "2023-02-06T23:34:12.000Z",
    "size": 185352,
    "path": "../public/icons/icons-006.png"
  },
  "/icons/icons-007.png": {
    "type": "image/png",
    "etag": "\"2b9b2-onrGrhXQ1fbwpSirhajE4JSTE5w\"",
    "mtime": "2023-02-07T00:41:04.000Z",
    "size": 178610,
    "path": "../public/icons/icons-007.png"
  },
  "/icons/icons-008.png": {
    "type": "image/png",
    "etag": "\"5f457-0qN4uSkBkAQxl/rTkRzqo5jo+J4\"",
    "mtime": "2023-02-06T21:14:06.000Z",
    "size": 390231,
    "path": "../public/icons/icons-008.png"
  },
  "/icons/icons-009.png": {
    "type": "image/png",
    "etag": "\"23b65-QXL4vPSnaSwiYBKRMh1QDfF/whA\"",
    "mtime": "2023-02-06T20:59:04.000Z",
    "size": 146277,
    "path": "../public/icons/icons-009.png"
  },
  "/icons/icons-010.png": {
    "type": "image/png",
    "etag": "\"29092-bdC25FhLu688ZFnobH3rKw0nQ2U\"",
    "mtime": "2023-02-06T04:43:28.000Z",
    "size": 168082,
    "path": "../public/icons/icons-010.png"
  },
  "/icons/icons-011.png": {
    "type": "image/png",
    "etag": "\"34b6d-W/rvSAs70l7O4LfG/i4aKhc7pfQ\"",
    "mtime": "2023-02-06T04:33:54.000Z",
    "size": 215917,
    "path": "../public/icons/icons-011.png"
  },
  "/icons/icons-012.png": {
    "type": "image/png",
    "etag": "\"326b0-+QuVytfxOWSvqOjALQEf4f+ON/4\"",
    "mtime": "2023-02-06T04:27:58.000Z",
    "size": 206512,
    "path": "../public/icons/icons-012.png"
  },
  "/icons/icons-013.png": {
    "type": "image/png",
    "etag": "\"326a5-kXR7j5JQEaGriXvcmLZ4//aUEDw\"",
    "mtime": "2023-02-06T04:12:26.000Z",
    "size": 206501,
    "path": "../public/icons/icons-013.png"
  },
  "/icons/icons-014.png": {
    "type": "image/png",
    "etag": "\"2c915-kt5TE8Crp/mb+G+DN6a1i50vqKs\"",
    "mtime": "2023-02-06T03:47:46.000Z",
    "size": 182549,
    "path": "../public/icons/icons-014.png"
  },
  "/icons/icons-015.png": {
    "type": "image/png",
    "etag": "\"35836-jTEYpr/twwxOBzE0TmyjBoedt1I\"",
    "mtime": "2023-02-06T03:07:48.000Z",
    "size": 219190,
    "path": "../public/icons/icons-015.png"
  },
  "/icons/icons-016.png": {
    "type": "image/png",
    "etag": "\"18ffa-V41E1aDBGxlEK64Z/m17EVpjQlA\"",
    "mtime": "2023-02-07T01:03:56.000Z",
    "size": 102394,
    "path": "../public/icons/icons-016.png"
  },
  "/icons/icons-017.png": {
    "type": "image/png",
    "etag": "\"23b2b-oYN9is002s4XsfSJCfT06Kpus8o\"",
    "mtime": "2023-02-07T00:12:26.000Z",
    "size": 146219,
    "path": "../public/icons/icons-017.png"
  },
  "/items/bold-handbags-001.png": {
    "type": "image/png",
    "etag": "\"e00de-H7Yj4aZ+QTf9UxXFGazR+v8iKs4\"",
    "mtime": "2023-02-13T23:37:58.226Z",
    "size": 917726,
    "path": "../public/items/bold-handbags-001.png"
  },
  "/items/bold-handbags-002.png": {
    "type": "image/png",
    "etag": "\"f3e15-liARMaHPIVDAHWSMXZZAf6lDENo\"",
    "mtime": "2023-02-13T23:37:59.454Z",
    "size": 998933,
    "path": "../public/items/bold-handbags-002.png"
  },
  "/items/bold-handbags-003.png": {
    "type": "image/png",
    "etag": "\"e03ab-SSTcE9g1K/RUVnHD3AtqmOfWQMU\"",
    "mtime": "2023-02-13T23:37:55.307Z",
    "size": 918443,
    "path": "../public/items/bold-handbags-003.png"
  },
  "/items/bold-handbags-004.png": {
    "type": "image/png",
    "etag": "\"bd620-tzp00rkW0rLn4r40/C6tusKM+hk\"",
    "mtime": "2023-02-13T23:37:58.000Z",
    "size": 775712,
    "path": "../public/items/bold-handbags-004.png"
  },
  "/items/bold-hoodie-001.png": {
    "type": "image/png",
    "etag": "\"d4cf3-IUOXedHOU67qJr5IbIq7VHCFi9Q\"",
    "mtime": "2023-02-14T00:11:04.926Z",
    "size": 871667,
    "path": "../public/items/bold-hoodie-001.png"
  },
  "/items/bold-hoodie-002.png": {
    "type": "image/png",
    "etag": "\"ca58f-HQjtTnaYRrtrFZ/IiNOnlaltFy8\"",
    "mtime": "2023-02-14T00:11:04.684Z",
    "size": 828815,
    "path": "../public/items/bold-hoodie-002.png"
  },
  "/items/bold-hoodie-003.png": {
    "type": "image/png",
    "etag": "\"bed40-bkp0jaVl7EZs4LevldWwk9Z7A/A\"",
    "mtime": "2023-02-14T00:11:05.171Z",
    "size": 781632,
    "path": "../public/items/bold-hoodie-003.png"
  },
  "/items/bold-hoodie-004.png": {
    "type": "image/png",
    "etag": "\"e3ecc-A+jFCmYCGDNm+46wijF+pG2PkoA\"",
    "mtime": "2023-02-14T00:11:05.902Z",
    "size": 933580,
    "path": "../public/items/bold-hoodie-004.png"
  },
  "/items/bold-hoodie-005.png": {
    "type": "image/png",
    "etag": "\"cfbd7-NcKSAOtM7uYPh5j5+e4jRKy2T2g\"",
    "mtime": "2023-02-14T00:11:05.582Z",
    "size": 850903,
    "path": "../public/items/bold-hoodie-005.png"
  },
  "/items/bold-hoodie-006.png": {
    "type": "image/png",
    "etag": "\"b0382-00DijxJ13KlXloAUi6ofVCC0s3s\"",
    "mtime": "2023-02-14T00:11:05.671Z",
    "size": 721794,
    "path": "../public/items/bold-hoodie-006.png"
  },
  "/items/bold-hoodie-007.png": {
    "type": "image/png",
    "etag": "\"746f7-x8hoXw6feYZ36Lwd9usaYtbyxGs\"",
    "mtime": "2023-02-14T00:11:04.575Z",
    "size": 476919,
    "path": "../public/items/bold-hoodie-007.png"
  },
  "/items/bold-hoodie-008.png": {
    "type": "image/png",
    "etag": "\"7f23e-qjZhTZ/bGF/DjOY7YLnQC9GsYDs\"",
    "mtime": "2023-02-14T00:11:04.499Z",
    "size": 520766,
    "path": "../public/items/bold-hoodie-008.png"
  },
  "/items/bold-hoodie-009.png": {
    "type": "image/png",
    "etag": "\"c4aa6-fKrLy8OMbfPfZqjb6bQTqMJeqd8\"",
    "mtime": "2023-02-14T00:11:05.420Z",
    "size": 805542,
    "path": "../public/items/bold-hoodie-009.png"
  },
  "/items/bold-sneaker-001.png": {
    "type": "image/png",
    "etag": "\"53a04-7eeOXwYipYOApZ1qh9yBMmUPy+o\"",
    "mtime": "2023-02-13T23:37:25.919Z",
    "size": 342532,
    "path": "../public/items/bold-sneaker-001.png"
  },
  "/items/bold-sneaker-002.png": {
    "type": "image/png",
    "etag": "\"58db4-DwlNzIAvZ+7Tqge/Xni+wD6fQHg\"",
    "mtime": "2023-02-13T23:37:14.346Z",
    "size": 363956,
    "path": "../public/items/bold-sneaker-002.png"
  },
  "/items/bold-sneaker-003.png": {
    "type": "image/png",
    "etag": "\"51bab-taB8KLMkd9DNx+MfPZpllCSdBoY\"",
    "mtime": "2023-02-13T23:37:11.239Z",
    "size": 334763,
    "path": "../public/items/bold-sneaker-003.png"
  },
  "/items/bold-sneaker-004.png": {
    "type": "image/png",
    "etag": "\"4faa7-yRwnrEZk0yTgBkmfwgF32LmZtSY\"",
    "mtime": "2023-02-13T23:37:18.431Z",
    "size": 326311,
    "path": "../public/items/bold-sneaker-004.png"
  },
  "/items/bold-sneaker-005.png": {
    "type": "image/png",
    "etag": "\"4c944-+VUI1WmKJg+nC9jP22uM0B12B94\"",
    "mtime": "2023-02-13T23:37:21.964Z",
    "size": 313668,
    "path": "../public/items/bold-sneaker-005.png"
  },
  "/items/bold-watch-001.png": {
    "type": "image/png",
    "etag": "\"916f9-G8ExuTpPaseM+7/LQUzRSBfBlvI\"",
    "mtime": "2023-02-13T23:39:04.585Z",
    "size": 595705,
    "path": "../public/items/bold-watch-001.png"
  },
  "/items/bold-watch-002.png": {
    "type": "image/png",
    "etag": "\"9b727-ogHG6ANp3ohPlVcMkVGkLRlbG88\"",
    "mtime": "2023-02-13T23:39:00.844Z",
    "size": 636711,
    "path": "../public/items/bold-watch-002.png"
  },
  "/items/bold-watch-003.png": {
    "type": "image/png",
    "etag": "\"8ea5c-Ty/RKbKPJHojkgu81NIzLygEo84\"",
    "mtime": "2023-02-13T23:38:58.474Z",
    "size": 584284,
    "path": "../public/items/bold-watch-003.png"
  },
  "/items/bold-watch-004.png": {
    "type": "image/png",
    "etag": "\"9a8ee-D2CbOX79RpZz5e9skNxDOGBudEg\"",
    "mtime": "2023-02-13T23:38:43.007Z",
    "size": 633070,
    "path": "../public/items/bold-watch-004.png"
  },
  "/items/bold-watch-005.png": {
    "type": "image/png",
    "etag": "\"97c16-KpagRL1TXTrMZaDfVcooTlr9wAo\"",
    "mtime": "2023-02-13T23:38:44.509Z",
    "size": 621590,
    "path": "../public/items/bold-watch-005.png"
  },
  "/items/bold-watch-006.png": {
    "type": "image/png",
    "etag": "\"83338-ZEa3i66sr5NubkjuVn/vRAP+v2E\"",
    "mtime": "2023-02-13T23:38:55.149Z",
    "size": 537400,
    "path": "../public/items/bold-watch-006.png"
  },
  "/items/watch-hands-001.png": {
    "type": "image/png",
    "etag": "\"a260a-C46697oFFZza1wVIIDCbJvmeCGA\"",
    "mtime": "2023-02-13T23:59:24.207Z",
    "size": 665098,
    "path": "../public/items/watch-hands-001.png"
  },
  "/items/watch-hands-002.png": {
    "type": "image/png",
    "etag": "\"a1a20-jDO2LaEU+Hh4NbjM1GVuht3oxy0\"",
    "mtime": "2023-02-13T23:59:27.287Z",
    "size": 662048,
    "path": "../public/items/watch-hands-002.png"
  },
  "/items/watch-hands-003.png": {
    "type": "image/png",
    "etag": "\"a0b1c-0oApeJ4NzKEkzdS7+3HrxOW2EYs\"",
    "mtime": "2023-02-13T23:59:16.841Z",
    "size": 658204,
    "path": "../public/items/watch-hands-003.png"
  },
  "/items/watch-hands-004.png": {
    "type": "image/png",
    "etag": "\"a26be-zrvoel7Ckhvbp4HGfmZjonMgz2M\"",
    "mtime": "2023-02-13T23:59:15.613Z",
    "size": 665278,
    "path": "../public/items/watch-hands-004.png"
  },
  "/items/watch-hands-005.png": {
    "type": "image/png",
    "etag": "\"a1d1f-HwyHJH3vtZEIhGGDha8d+6eMZCI\"",
    "mtime": "2023-02-13T23:59:20.519Z",
    "size": 662815,
    "path": "../public/items/watch-hands-005.png"
  },
  "/videos/GG_Infinity_Final.mp4": {
    "type": "video/mp4",
    "etag": "\"2747f0-kE4mP7Ge2Z4V0j+xje08OARRMvk\"",
    "mtime": "2023-02-06T12:40:00.275Z",
    "size": 2574320,
    "path": "../public/videos/GG_Infinity_Final.mp4"
  },
  "/videos/GG_Infinity_WithTitles.mp4": {
    "type": "video/mp4",
    "etag": "\"41a17b-AvYY/r7imgvkY/XB/WO3MeD81SI\"",
    "mtime": "2023-02-07T21:39:49.553Z",
    "size": 4301179,
    "path": "../public/videos/GG_Infinity_WithTitles.mp4"
  },
  "/old/01andblack.png": {
    "type": "image/png",
    "etag": "\"a78a-wg+4kLPMAkdruHQvvw6qb7LhI7A\"",
    "mtime": "2022-09-14T02:43:40.000Z",
    "size": 42890,
    "path": "../public/old/01andblack.png"
  },
  "/old/01andGradient01.png": {
    "type": "image/png",
    "etag": "\"ec55-h4S7AkMVguz0a56kpelkT1/SMdQ\"",
    "mtime": "2022-09-14T02:46:02.000Z",
    "size": 60501,
    "path": "../public/old/01andGradient01.png"
  },
  "/old/01andGradient02.png": {
    "type": "image/png",
    "etag": "\"ec6e-CC7locYVWp0QyFL2peAivNNtq7U\"",
    "mtime": "2022-09-14T02:45:44.000Z",
    "size": 60526,
    "path": "../public/old/01andGradient02.png"
  },
  "/old/01andWhite.png": {
    "type": "image/png",
    "etag": "\"a785-+zU1kloGbG4G5Xj5Th9Q38zwT3Y\"",
    "mtime": "2022-09-14T02:46:28.000Z",
    "size": 42885,
    "path": "../public/old/01andWhite.png"
  },
  "/old/02andBlack.png": {
    "type": "image/png",
    "etag": "\"a391-IZU0miACrZxGnoN5N5DQXUY2HHU\"",
    "mtime": "2022-09-14T02:43:24.000Z",
    "size": 41873,
    "path": "../public/old/02andBlack.png"
  },
  "/old/02andGradient01.png": {
    "type": "image/png",
    "etag": "\"e8c2-otqVA0xin0kw99HhmjVGDVresF4\"",
    "mtime": "2022-09-14T02:47:34.000Z",
    "size": 59586,
    "path": "../public/old/02andGradient01.png"
  },
  "/old/02andGradient02.png": {
    "type": "image/png",
    "etag": "\"e84b-+qUM9xwgUr2TAi4qE/QzlBht4OE\"",
    "mtime": "2022-09-14T02:47:46.000Z",
    "size": 59467,
    "path": "../public/old/02andGradient02.png"
  },
  "/old/02andWhite.png": {
    "type": "image/png",
    "etag": "\"a389-FU/wRUtVKTmz6YVqwnxw5PTeg6Q\"",
    "mtime": "2022-09-14T02:47:16.000Z",
    "size": 41865,
    "path": "../public/old/02andWhite.png"
  },
  "/old/asset-25.svg": {
    "type": "image/svg+xml",
    "etag": "\"eea-V+OluFopU01KY1yW9TofRb3MQig\"",
    "mtime": "2023-02-03T14:24:34.000Z",
    "size": 3818,
    "path": "../public/old/asset-25.svg"
  },
  "/old/Black.png": {
    "type": "image/png",
    "etag": "\"1806-FeQ/TdGzYa14Hm3DcvUu8RpPzgk\"",
    "mtime": "2022-09-14T02:43:02.000Z",
    "size": 6150,
    "path": "../public/old/Black.png"
  },
  "/old/galaxy.png": {
    "type": "image/png",
    "etag": "\"e32ee-NjCUaWNOUyrJ1cfeNlxUAmJzP+M\"",
    "mtime": "2021-12-03T19:57:00.000Z",
    "size": 930542,
    "path": "../public/old/galaxy.png"
  },
  "/old/galaxy.svg": {
    "type": "image/svg+xml",
    "etag": "\"67fc-Z4hXRvtjYJqu4VkDsRhx2PguhTg\"",
    "mtime": "2023-02-03T15:41:54.000Z",
    "size": 26620,
    "path": "../public/old/galaxy.svg"
  },
  "/old/Gradient01.png": {
    "type": "image/png",
    "etag": "\"632c-vyvC/DMDa3U/sWAsGKhwBCjw9rs\"",
    "mtime": "2022-09-14T02:44:36.000Z",
    "size": 25388,
    "path": "../public/old/Gradient01.png"
  },
  "/old/Gradient02.png": {
    "type": "image/png",
    "etag": "\"62a6-3NXGycnbXWP9mBcHtIacT3Oh0e0\"",
    "mtime": "2022-09-14T02:45:14.000Z",
    "size": 25254,
    "path": "../public/old/Gradient02.png"
  },
  "/old/icon.png": {
    "type": "image/png",
    "etag": "\"145c3e-iQ2FvPhczaCF/oN2hm6BGJjGvFc\"",
    "mtime": "2022-09-14T02:38:08.000Z",
    "size": 1334334,
    "path": "../public/old/icon.png"
  },
  "/old/icon_black.png": {
    "type": "image/png",
    "etag": "\"da55-IkuJXxhwiQfCCLK4VhL12nJLaMw\"",
    "mtime": "2022-09-14T02:39:30.000Z",
    "size": 55893,
    "path": "../public/old/icon_black.png"
  },
  "/old/icon_white.png": {
    "type": "image/png",
    "etag": "\"da37-572sVLajn8czfX5/eeyKBWHnKDo\"",
    "mtime": "2022-09-14T02:39:14.000Z",
    "size": 55863,
    "path": "../public/old/icon_white.png"
  },
  "/old/infinite.png": {
    "type": "image/png",
    "etag": "\"14af42-0z1+i+7TTrU4aKgWVGbfDrqyOG0\"",
    "mtime": "2021-12-03T19:57:00.000Z",
    "size": 1355586,
    "path": "../public/old/infinite.png"
  },
  "/old/infinite.svg": {
    "type": "image/svg+xml",
    "etag": "\"1524d-59fE3noLZ5gZTDdhhoFlRR5b3DY\"",
    "mtime": "2023-02-05T20:43:19.445Z",
    "size": 86605,
    "path": "../public/old/infinite.svg"
  },
  "/old/logo.png": {
    "type": "image/png",
    "etag": "\"17ff-e17NFBRgqiqxRDPWyaUaysQhxsE\"",
    "mtime": "2022-09-14T02:48:50.000Z",
    "size": 6143,
    "path": "../public/old/logo.png"
  },
  "/old/logo_dark.png": {
    "type": "image/png",
    "etag": "\"17ea-aX7tfMXGt9QZCWSGjVkykmTOo0A\"",
    "mtime": "2022-09-14T02:43:56.000Z",
    "size": 6122,
    "path": "../public/old/logo_dark.png"
  },
  "/old/logo_primary.png": {
    "type": "image/png",
    "etag": "\"14389c-GGgT770lMaSjsxhiyIBvSFTBoYg\"",
    "mtime": "2022-09-14T02:38:26.000Z",
    "size": 1325212,
    "path": "../public/old/logo_primary.png"
  },
  "/old/logo_white.png": {
    "type": "image/png",
    "etag": "\"17ff-e17NFBRgqiqxRDPWyaUaysQhxsE\"",
    "mtime": "2022-09-14T02:48:50.000Z",
    "size": 6143,
    "path": "../public/old/logo_white.png"
  },
  "/old/logo_white01.png": {
    "type": "image/png",
    "etag": "\"6373-xiB8/NcYwWokyE8VG1naHpepSNM\"",
    "mtime": "2022-09-14T02:48:38.000Z",
    "size": 25459,
    "path": "../public/old/logo_white01.png"
  },
  "/old/logo_white02.png": {
    "type": "image/png",
    "etag": "\"62ea-EJQwqy62AqBTOV1p7bzgo1S7kJI\"",
    "mtime": "2022-09-14T02:48:20.000Z",
    "size": 25322,
    "path": "../public/old/logo_white02.png"
  },
  "/old/planet.png": {
    "type": "image/png",
    "etag": "\"11eec2-HHnKFKLUw0EZD4gSB/2sx75sfI0\"",
    "mtime": "2021-12-03T19:56:58.000Z",
    "size": 1175234,
    "path": "../public/old/planet.png"
  },
  "/old/planet.svg": {
    "type": "image/svg+xml",
    "etag": "\"1588-BPJhRssth40cruNXsqX7EFPFv48\"",
    "mtime": "2023-02-03T15:45:26.000Z",
    "size": 5512,
    "path": "../public/old/planet.svg"
  },
  "/old/space-01.svg": {
    "type": "image/svg+xml",
    "etag": "\"9c71-Rwd5rtFpR083AchL2xvnyM+qSsw\"",
    "mtime": "2023-02-03T15:53:44.000Z",
    "size": 40049,
    "path": "../public/old/space-01.svg"
  },
  "/old/space-02.png": {
    "type": "image/png",
    "etag": "\"a029b-zJAjgQgz8AGZZVn36c1FEdvhl9s\"",
    "mtime": "2021-11-25T23:04:22.000Z",
    "size": 656027,
    "path": "../public/old/space-02.png"
  },
  "/old/space-02.svg": {
    "type": "image/svg+xml",
    "etag": "\"d28b-UTR3eT0AGmK9ARAWsavBigZx5+g\"",
    "mtime": "2023-02-03T15:53:16.000Z",
    "size": 53899,
    "path": "../public/old/space-02.svg"
  },
  "/old/space-03.png": {
    "type": "image/png",
    "etag": "\"c5d50-RtEiImYIoQG6NNMJN6MkQ+JouX8\"",
    "mtime": "2021-11-25T23:04:22.000Z",
    "size": 810320,
    "path": "../public/old/space-03.png"
  },
  "/old/space-03.svg": {
    "type": "image/svg+xml",
    "etag": "\"d019-ybxNpDQ3fXLJ7VR5cplixEWFvUo\"",
    "mtime": "2023-02-03T15:53:44.000Z",
    "size": 53273,
    "path": "../public/old/space-03.svg"
  },
  "/old/space-04.png": {
    "type": "image/png",
    "etag": "\"b45ff-0swxr1I0fIR6FdgTI7CTb6490ec\"",
    "mtime": "2021-11-25T23:04:22.000Z",
    "size": 738815,
    "path": "../public/old/space-04.png"
  },
  "/old/space-04.svg": {
    "type": "image/svg+xml",
    "etag": "\"b362-Sdq6Jv07ebjV9ZUgxI38WwOiwVA\"",
    "mtime": "2023-02-03T15:52:52.000Z",
    "size": 45922,
    "path": "../public/old/space-04.svg"
  },
  "/old/space-05.png": {
    "type": "image/png",
    "etag": "\"17ad-lJ7ARdGhRpOS68z/Qe88J6qtpvk\"",
    "mtime": "2021-11-25T23:04:22.000Z",
    "size": 6061,
    "path": "../public/old/space-05.png"
  },
  "/old/space-05.svg": {
    "type": "image/svg+xml",
    "etag": "\"719-p+HqBMxmAqDVUl/QbXjuLQ30MdU\"",
    "mtime": "2023-02-03T15:59:10.000Z",
    "size": 1817,
    "path": "../public/old/space-05.svg"
  },
  "/old/space-06.png": {
    "type": "image/png",
    "etag": "\"9a7af-EBr8bi1FVIjyFQYXgMEw2w6sVcQ\"",
    "mtime": "2021-11-25T23:04:22.000Z",
    "size": 632751,
    "path": "../public/old/space-06.png"
  },
  "/old/space-06.svg": {
    "type": "image/svg+xml",
    "etag": "\"5eba-kL9JV7+yzBDYf+L2MnJ68ht5Tr4\"",
    "mtime": "2023-02-03T16:04:36.000Z",
    "size": 24250,
    "path": "../public/old/space-06.svg"
  },
  "/old/space-38.png": {
    "type": "image/png",
    "etag": "\"9a7af-EBr8bi1FVIjyFQYXgMEw2w6sVcQ\"",
    "mtime": "2021-11-25T23:04:22.000Z",
    "size": 632751,
    "path": "../public/old/space-38.png"
  },
  "/old/space.png": {
    "type": "image/png",
    "etag": "\"753e1-sHaf/ciW+RglEtUVHXsSgWttyHA\"",
    "mtime": "2021-12-01T22:41:30.000Z",
    "size": 480225,
    "path": "../public/old/space.png"
  },
  "/old/space.svg": {
    "type": "image/svg+xml",
    "etag": "\"2098d-Q8FRwlnIZ2OhayexflbbVZfkoBc\"",
    "mtime": "2023-02-03T15:57:50.000Z",
    "size": 133517,
    "path": "../public/old/space.svg"
  },
  "/old/White.png": {
    "type": "image/png",
    "etag": "\"178b-iPTk1O89b6752l6GGbt6ENxsMEg\"",
    "mtime": "2022-09-14T02:44:24.000Z",
    "size": 6027,
    "path": "../public/old/White.png"
  },
  "/team/00051.png": {
    "type": "image/png",
    "etag": "\"2dc45e-LhDAqfObJTsKjW3hUPfIKyJXtVw\"",
    "mtime": "2023-02-11T22:23:04.513Z",
    "size": 2999390,
    "path": "../public/team/00051.png"
  },
  "/team/00446.png": {
    "type": "image/png",
    "etag": "\"31f3d3-e2AXxcFKPjo+TZ8HyyoOhjYaFZM\"",
    "mtime": "2023-02-11T22:20:50.240Z",
    "size": 3273683,
    "path": "../public/team/00446.png"
  },
  "/team/00934.png": {
    "type": "image/png",
    "etag": "\"39d807-/sLNOvlKTVxKxMyoa9bV4P4moVA\"",
    "mtime": "2023-02-11T22:21:30.258Z",
    "size": 3790855,
    "path": "../public/team/00934.png"
  },
  "/team/01007-pixel.png": {
    "type": "image/png",
    "etag": "\"8b5b-y0BdSlWJoWUAFUwM/uhUY4gDKkI\"",
    "mtime": "2023-02-11T22:23:50.954Z",
    "size": 35675,
    "path": "../public/team/01007-pixel.png"
  },
  "/team/01007.png": {
    "type": "image/png",
    "etag": "\"2ce9b7-0ZqFDr4HlF/VE4ma4NLh3vGeuds\"",
    "mtime": "2023-02-11T22:24:01.537Z",
    "size": 2943415,
    "path": "../public/team/01007.png"
  },
  "/team/teams-001.png": {
    "type": "image/png",
    "etag": "\"2e42ed-XDRFBJKZTy8zMbL8/h8vIWgM+DI\"",
    "mtime": "2023-02-11T22:00:53.147Z",
    "size": 3031789,
    "path": "../public/team/teams-001.png"
  },
  "/team/teams-002.png": {
    "type": "image/png",
    "etag": "\"295a41-d3Z+XieytgLgv1vnnRpPGlvTs74\"",
    "mtime": "2023-02-11T22:00:53.801Z",
    "size": 2710081,
    "path": "../public/team/teams-002.png"
  },
  "/logos/icon-001.png": {
    "type": "image/png",
    "etag": "\"6e28-hc4+MdUiUrgXeTdYbHkcaEJgeU0\"",
    "mtime": "2022-09-11T03:14:48.000Z",
    "size": 28200,
    "path": "../public/logos/icon-001.png"
  },
  "/logos/icon-002.png": {
    "type": "image/png",
    "etag": "\"142c57-dDAFH7yVWI3zqs7mtWY740OfbMk\"",
    "mtime": "2022-09-12T03:12:44.000Z",
    "size": 1322071,
    "path": "../public/logos/icon-002.png"
  },
  "/logos/icon-003.png": {
    "type": "image/png",
    "etag": "\"140cd1-AEi/BqVKmrDOHZkdvcebReAxEMA\"",
    "mtime": "2022-09-12T03:12:58.000Z",
    "size": 1314001,
    "path": "../public/logos/icon-003.png"
  },
  "/logos/icon-004.png": {
    "type": "image/png",
    "etag": "\"6d52-sH8PAXWAhBhJDqzB5xWVnxfCxaQ\"",
    "mtime": "2022-09-11T03:15:04.000Z",
    "size": 27986,
    "path": "../public/logos/icon-004.png"
  },
  "/logos/icon-text-001.png": {
    "type": "image/png",
    "etag": "\"1ef0-y3wsySo63JIM3H96JNKOW8eTFzc\"",
    "mtime": "2022-09-12T03:57:18.000Z",
    "size": 7920,
    "path": "../public/logos/icon-text-001.png"
  },
  "/logos/icon-text-002.png": {
    "type": "image/png",
    "etag": "\"596d-LrtCwb3767ANAw2wcapSjrmpJ2w\"",
    "mtime": "2022-09-12T03:56:48.000Z",
    "size": 22893,
    "path": "../public/logos/icon-text-002.png"
  },
  "/logos/icon-text-003.png": {
    "type": "image/png",
    "etag": "\"5985-9SlrYoCrcp3JifoR3a7UwICreDM\"",
    "mtime": "2022-09-12T03:57:04.000Z",
    "size": 22917,
    "path": "../public/logos/icon-text-003.png"
  },
  "/logos/icon-text-004.png": {
    "type": "image/png",
    "etag": "\"1e8d-ykSU9q3j+bc59mhOkkVnWwj3VC8\"",
    "mtime": "2022-09-12T03:58:12.000Z",
    "size": 7821,
    "path": "../public/logos/icon-text-004.png"
  },
  "/logos/icon-text-005.png": {
    "type": "image/png",
    "etag": "\"b0d7-1+OUvJylSDGquHYeI167K+9sYG4\"",
    "mtime": "2022-09-12T04:09:30.000Z",
    "size": 45271,
    "path": "../public/logos/icon-text-005.png"
  },
  "/logos/icon-text-006.png": {
    "type": "image/png",
    "etag": "\"e4d7-mC6rAGeuN5zz8nv1AKLaEvLiX1Y\"",
    "mtime": "2022-09-12T04:10:10.000Z",
    "size": 58583,
    "path": "../public/logos/icon-text-006.png"
  },
  "/logos/icon-text-007.png": {
    "type": "image/png",
    "etag": "\"e519-Fl7WH242A7WuMN0MstkoHCz76JQ\"",
    "mtime": "2022-09-12T04:10:24.000Z",
    "size": 58649,
    "path": "../public/logos/icon-text-007.png"
  },
  "/logos/icon-text-008.png": {
    "type": "image/png",
    "etag": "\"b0c0-VzUKiCjHZbH9Mo15g5WeWNPCfxI\"",
    "mtime": "2022-09-12T04:10:40.000Z",
    "size": 45248,
    "path": "../public/logos/icon-text-008.png"
  },
  "/logos/icon-text-009.png": {
    "type": "image/png",
    "etag": "\"acf6-SlpuRhX+IjVGDsdHn1Gybrmyfbg\"",
    "mtime": "2022-09-12T04:12:12.000Z",
    "size": 44278,
    "path": "../public/logos/icon-text-009.png"
  },
  "/logos/icon-text-010.png": {
    "type": "image/png",
    "etag": "\"e096-aN5fPbWiIUk9gFu/kZ8M+r3Bfr4\"",
    "mtime": "2022-09-12T04:11:34.000Z",
    "size": 57494,
    "path": "../public/logos/icon-text-010.png"
  },
  "/logos/icon-text-011.png": {
    "type": "image/png",
    "etag": "\"e08c-ogr+DtTtg81HT+KJeYafsIBspMk\"",
    "mtime": "2022-09-12T04:11:54.000Z",
    "size": 57484,
    "path": "../public/logos/icon-text-011.png"
  },
  "/logos/icon-text-012.png": {
    "type": "image/png",
    "etag": "\"acdf-y2XxLLQfhm+bp46KAt9aY/FP674\"",
    "mtime": "2022-09-12T04:12:30.000Z",
    "size": 44255,
    "path": "../public/logos/icon-text-012.png"
  },
  "/logos/icon-text-013.png": {
    "type": "image/png",
    "etag": "\"1f2f-tYuSgwQNDDf2ca6WdOUFXP2P5ts\"",
    "mtime": "2022-09-12T04:05:30.000Z",
    "size": 7983,
    "path": "../public/logos/icon-text-013.png"
  },
  "/logos/icon-text-014.png": {
    "type": "image/png",
    "etag": "\"59c0-WNvNCRMwPl1F4+THRT5k7LeOVqo\"",
    "mtime": "2022-09-12T04:06:50.000Z",
    "size": 22976,
    "path": "../public/logos/icon-text-014.png"
  },
  "/logos/icon-text-015.png": {
    "type": "image/png",
    "etag": "\"59da-to9l4f67D+8fFWiMlp5W/T7vLZ8\"",
    "mtime": "2022-09-12T04:07:10.000Z",
    "size": 23002,
    "path": "../public/logos/icon-text-015.png"
  },
  "/logos/icon-text-016.png": {
    "type": "image/png",
    "etag": "\"1f15-jx0Z4WhuqjeTnwyiIG4hJzz67L8\"",
    "mtime": "2022-09-12T04:05:14.000Z",
    "size": 7957,
    "path": "../public/logos/icon-text-016.png"
  },
  "/_nuxt/about-us.487cb6e5.js": {
    "type": "application/javascript",
    "etag": "\"1939-Aaw1x1MEgJRe9HW59jKS9+eaFNU\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 6457,
    "path": "../public/_nuxt/about-us.487cb6e5.js"
  },
  "/_nuxt/careers.d3931c7b.js": {
    "type": "application/javascript",
    "etag": "\"1324-dy5xOAwtytCoHw31B87djr8zBgQ\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 4900,
    "path": "../public/_nuxt/careers.d3931c7b.js"
  },
  "/_nuxt/composables.f28e8b5a.js": {
    "type": "application/javascript",
    "etag": "\"5c-ZrbXPZFx5brPdwHgpFf8OYxGIHU\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 92,
    "path": "../public/_nuxt/composables.f28e8b5a.js"
  },
  "/_nuxt/default.c631765e.js": {
    "type": "application/javascript",
    "etag": "\"fe4-qczJHiwnQqlCK1TW80uu9/k1Nlc\"",
    "mtime": "2023-02-14T19:29:47.853Z",
    "size": 4068,
    "path": "../public/_nuxt/default.c631765e.js"
  },
  "/_nuxt/entry.01e5a011.js": {
    "type": "application/javascript",
    "etag": "\"661fe-HJ19XNYzWXRnotuCyg8q37G95BY\"",
    "mtime": "2023-02-14T19:29:47.868Z",
    "size": 418302,
    "path": "../public/_nuxt/entry.01e5a011.js"
  },
  "/_nuxt/entry.9688b80f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b7874-0vxZFJDFJQwEArsX9yPrm4bhaP8\"",
    "mtime": "2023-02-14T19:29:47.853Z",
    "size": 751732,
    "path": "../public/_nuxt/entry.9688b80f.css"
  },
  "/_nuxt/error-404.239a8841.js": {
    "type": "application/javascript",
    "etag": "\"8d4-cp/m6O6qHCoRgHXdygLqvm8BvCc\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 2260,
    "path": "../public/_nuxt/error-404.239a8841.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.5260d9a1.js": {
    "type": "application/javascript",
    "etag": "\"77d-FzlZg2rQL9oE4O5D5aRY/EB4ToQ\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 1917,
    "path": "../public/_nuxt/error-500.5260d9a1.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.8e4f9f93.js": {
    "type": "application/javascript",
    "etag": "\"49e-2ETApN11yFqrJneb32/fa82yqmY\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 1182,
    "path": "../public/_nuxt/error-component.8e4f9f93.js"
  },
  "/_nuxt/index.44f1c32c.js": {
    "type": "application/javascript",
    "etag": "\"2e97-mzzbKZhX15ZZWDGpof1owFLkFmE\"",
    "mtime": "2023-02-14T19:29:47.868Z",
    "size": 11927,
    "path": "../public/_nuxt/index.44f1c32c.js"
  },
  "/_nuxt/index.bf156d05.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"598-QJSofHg09pC+zdrpcHWC3RUnS6c\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 1432,
    "path": "../public/_nuxt/index.bf156d05.css"
  },
  "/_nuxt/materialdesignicons-webfont.6d5e4be4.woff": {
    "type": "font/woff",
    "etag": "\"8ad48-8fBPxn8AuTHR6aNqnpd7/YZOYX8\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 568648,
    "path": "../public/_nuxt/materialdesignicons-webfont.6d5e4be4.woff"
  },
  "/_nuxt/materialdesignicons-webfont.739dc70d.woff2": {
    "type": "font/woff2",
    "etag": "\"5fa08-x2c2gG9GszeWFK/zkIHWweCMXSI\"",
    "mtime": "2023-02-14T19:29:47.846Z",
    "size": 391688,
    "path": "../public/_nuxt/materialdesignicons-webfont.739dc70d.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.c02d41ce.ttf": {
    "type": "font/ttf",
    "etag": "\"1340e0-0j+vWGoLzkw+W0jSd4RXTdcjOAI\"",
    "mtime": "2023-02-14T19:29:47.854Z",
    "size": 1261792,
    "path": "../public/_nuxt/materialdesignicons-webfont.c02d41ce.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.f5966bae.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1341bc-IPFqEZIUYBdgxGkgWDK5VXZOlmw\"",
    "mtime": "2023-02-14T19:29:47.861Z",
    "size": 1262012,
    "path": "../public/_nuxt/materialdesignicons-webfont.f5966bae.eot"
  },
  "/_nuxt/services.a4aa7e13.js": {
    "type": "application/javascript",
    "etag": "\"1f0-YuBvksqHzdEm4nkHx+HACMy7hrc\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 496,
    "path": "../public/_nuxt/services.a4aa7e13.js"
  },
  "/_nuxt/Services.a86e0e29.js": {
    "type": "application/javascript",
    "etag": "\"3aeb-rodvJAYUazHzOSD88wY9ePIrTpg\"",
    "mtime": "2023-02-14T19:29:47.864Z",
    "size": 15083,
    "path": "../public/_nuxt/Services.a86e0e29.js"
  },
  "/_nuxt/temp.bbb12027.js": {
    "type": "application/javascript",
    "etag": "\"642-mIKwzWI9/63GacI7dyGvPdYVNqU\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 1602,
    "path": "../public/_nuxt/temp.bbb12027.js"
  },
  "/_nuxt/useDirectusItems.472d04a4.js": {
    "type": "application/javascript",
    "etag": "\"4b8-2xVjrOKEGPUmcpksSzCSstfBdbw\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 1208,
    "path": "../public/_nuxt/useDirectusItems.472d04a4.js"
  },
  "/_nuxt/Values.995a8811.js": {
    "type": "application/javascript",
    "etag": "\"ac8-WvVhI6uqQhjIjYlKOhqDZhIgAK0\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 2760,
    "path": "../public/_nuxt/Values.995a8811.js"
  },
  "/_nuxt/_...id_.beaf2159.js": {
    "type": "application/javascript",
    "etag": "\"332-bPLkVigN0gVXmfSUZUB7EpkcExo\"",
    "mtime": "2023-02-14T19:29:47.852Z",
    "size": 818,
    "path": "../public/_nuxt/_...id_.beaf2159.js"
  },
  "/cast/bold-and-famous/Stack.png": {
    "type": "image/png",
    "etag": "\"16325f-Xp/laNNn2GZcin2/UyNXrx83Jk8\"",
    "mtime": "2022-11-27T19:32:34.902Z",
    "size": 1454687,
    "path": "../public/cast/bold-and-famous/Stack.png"
  },
  "/cast/bold-and-famous/Stripe.png": {
    "type": "image/png",
    "etag": "\"16325f-Xp/laNNn2GZcin2/UyNXrx83Jk8\"",
    "mtime": "2022-11-27T19:32:34.902Z",
    "size": 1454687,
    "path": "../public/cast/bold-and-famous/Stripe.png"
  },
  "/cast/bold-and-famous/Welcome.png": {
    "type": "image/png",
    "etag": "\"297179-P4M+ZtBDzWDoHRMid+oxVNB6IS4\"",
    "mtime": "2022-11-25T23:41:15.389Z",
    "size": 2716025,
    "path": "../public/cast/bold-and-famous/Welcome.png"
  },
  "/cast/bold-girls/Portrait.png": {
    "type": "image/png",
    "etag": "\"f1b12-xSyGmyZDwGs7jbmAVOFb5fCeEIs\"",
    "mtime": "2022-11-23T23:28:36.575Z",
    "size": 989970,
    "path": "../public/cast/bold-girls/Portrait.png"
  },
  "/cast/bold-girls/Stack.png": {
    "type": "image/png",
    "etag": "\"1eb037-BVdbLZwyU4i2aCAxlCdvfwN4MwI\"",
    "mtime": "2022-11-27T19:24:29.581Z",
    "size": 2011191,
    "path": "../public/cast/bold-girls/Stack.png"
  },
  "/cast/bold-girls/Stripe.png": {
    "type": "image/png",
    "etag": "\"4cd357-95ziX/C0s8+vdpRMRAQslL+9GmE\"",
    "mtime": "2022-11-23T23:04:02.768Z",
    "size": 5034839,
    "path": "../public/cast/bold-girls/Stripe.png"
  },
  "/cast/bold-girls/Welcome.png": {
    "type": "image/png",
    "etag": "\"4630c1-T6FTf4BXYwvKk42ZRVFNcBDjUK8\"",
    "mtime": "2022-11-23T19:29:31.471Z",
    "size": 4600001,
    "path": "../public/cast/bold-girls/Welcome.png"
  },
  "/cast/bold-look/Landscape.png": {
    "type": "image/png",
    "etag": "\"2070c8-ohGISR7B/v8ZPiz8u2rQ3h98EEo\"",
    "mtime": "2022-11-23T22:04:51.346Z",
    "size": 2126024,
    "path": "../public/cast/bold-look/Landscape.png"
  },
  "/cast/bold-look/Portrait.png": {
    "type": "image/png",
    "etag": "\"84fda-MxJe1m2TTBLN90ijmbg1+KZS++Q\"",
    "mtime": "2022-11-23T23:41:14.438Z",
    "size": 544730,
    "path": "../public/cast/bold-look/Portrait.png"
  },
  "/cast/bold-look/Stack.png": {
    "type": "image/png",
    "etag": "\"12d799-iSntMEW2R5Fh15wQiBDE87oyP54\"",
    "mtime": "2022-11-24T07:35:35.135Z",
    "size": 1234841,
    "path": "../public/cast/bold-look/Stack.png"
  },
  "/cast/bold-look/Stripe.png": {
    "type": "image/png",
    "etag": "\"2d2147-cHU1VQkU0hGvhXpGRWZu1S41yJA\"",
    "mtime": "2022-11-23T23:40:22.350Z",
    "size": 2957639,
    "path": "../public/cast/bold-look/Stripe.png"
  },
  "/cast/bold-look/Welcome.png": {
    "type": "image/png",
    "etag": "\"24fe78-XmNFPhssLDYnxK5fiTJcNjfy2Io\"",
    "mtime": "2022-11-15T00:52:24.000Z",
    "size": 2424440,
    "path": "../public/cast/bold-look/Welcome.png"
  },
  "/cast/bold-man/Portrait.png": {
    "type": "image/png",
    "etag": "\"7bbe5-QKXSVopdnB+qA/va22xvQCrQ7UM\"",
    "mtime": "2022-11-23T23:34:12.344Z",
    "size": 506853,
    "path": "../public/cast/bold-man/Portrait.png"
  },
  "/cast/bold-man/Stack.png": {
    "type": "image/png",
    "etag": "\"11e1c8-/4rokKp/0hOgOFQlI/UzqJNUccw\"",
    "mtime": "2022-11-27T19:11:59.414Z",
    "size": 1171912,
    "path": "../public/cast/bold-man/Stack.png"
  },
  "/cast/bold-man/Stripe.png": {
    "type": "image/png",
    "etag": "\"28da74-ZlnOftnFCrHE4XH5SjOZnX2Iym0\"",
    "mtime": "2022-11-23T23:33:27.085Z",
    "size": 2677364,
    "path": "../public/cast/bold-man/Stripe.png"
  },
  "/cast/bold-man/Welcome.png": {
    "type": "image/png",
    "etag": "\"1fa169-w3mIvXQ/g3rArydR0Jvzay7n6FQ\"",
    "mtime": "2022-11-27T19:08:05.642Z",
    "size": 2072937,
    "path": "../public/cast/bold-man/Welcome.png"
  },
  "/cast/royal-bride/Accent.png": {
    "type": "image/png",
    "etag": "\"24a897-YO1Xagl5vPNXWnxL4VktBiO57vQ\"",
    "mtime": "2022-11-16T00:45:16.000Z",
    "size": 2402455,
    "path": "../public/cast/royal-bride/Accent.png"
  },
  "/cast/royal-bride/Portrait.png": {
    "type": "image/png",
    "etag": "\"90361-MoGlzB/phhfjelFf8HsDQAnpxro\"",
    "mtime": "2022-11-23T23:30:59.794Z",
    "size": 590689,
    "path": "../public/cast/royal-bride/Portrait.png"
  },
  "/cast/royal-bride/Stack.png": {
    "type": "image/png",
    "etag": "\"12c380-2QDCc0cttfRGx47fUqoRp/MUZlY\"",
    "mtime": "2022-11-27T19:37:52.590Z",
    "size": 1229696,
    "path": "../public/cast/royal-bride/Stack.png"
  },
  "/cast/royal-bride/Stripe.png": {
    "type": "image/png",
    "etag": "\"261167-F+hNFRq82a+jex+8/8xOB8xbv6Q\"",
    "mtime": "2022-11-23T23:09:22.013Z",
    "size": 2494823,
    "path": "../public/cast/royal-bride/Stripe.png"
  },
  "/cast/royal-bride/Welcome.png": {
    "type": "image/png",
    "etag": "\"24a303-EF2nsLb0mfdFhnEWoFDOnKow3IA\"",
    "mtime": "2022-11-23T19:29:52.832Z",
    "size": 2401027,
    "path": "../public/cast/royal-bride/Welcome.png"
  },
  "/cast/tribal-combat/Potrait.png": {
    "type": "image/png",
    "etag": "\"8a50c-pe8pI9pnTpDW+uv2fFgFYxautF0\"",
    "mtime": "2022-11-23T23:26:17.216Z",
    "size": 566540,
    "path": "../public/cast/tribal-combat/Potrait.png"
  },
  "/cast/tribal-combat/Stack.png": {
    "type": "image/png",
    "etag": "\"134743-44glbuiToCejuFSIy5yD5sWWDGU\"",
    "mtime": "2022-11-27T19:28:39.137Z",
    "size": 1263427,
    "path": "../public/cast/tribal-combat/Stack.png"
  },
  "/cast/tribal-combat/Stripe.png": {
    "type": "image/png",
    "etag": "\"2af272-N/xYS1QOmKbD0elKAiWU249lMaM\"",
    "mtime": "2022-11-23T23:25:33.112Z",
    "size": 2814578,
    "path": "../public/cast/tribal-combat/Stripe.png"
  },
  "/cast/tribal-combat/Welcome.png": {
    "type": "image/png",
    "etag": "\"2462a5-PqoVrxbUQwseJJAscc/ADYb6I/Y\"",
    "mtime": "2022-11-23T19:29:03.961Z",
    "size": 2384549,
    "path": "../public/cast/tribal-combat/Welcome.png"
  },
  "/fonts/graphigem/Samson_Bold.ttf": {
    "type": "font/ttf",
    "etag": "\"4ad4-mibHKuCqeMvDo11t0dapYbn0Hkc\"",
    "mtime": "2022-06-12T07:28:57.000Z",
    "size": 19156,
    "path": "../public/fonts/graphigem/Samson_Bold.ttf"
  },
  "/fonts/graphigem/Samson_Light.ttf": {
    "type": "font/ttf",
    "etag": "\"4fd4-yrey6Jb5geGEcKXtTy3bWvvFiDY\"",
    "mtime": "2022-06-12T07:31:16.000Z",
    "size": 20436,
    "path": "../public/fonts/graphigem/Samson_Light.ttf"
  },
  "/fonts/graphigem/Samson_Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"4a94-JllFofySSV5aftEVhxEiVQt2C/A\"",
    "mtime": "2022-06-12T07:28:57.000Z",
    "size": 19092,
    "path": "../public/fonts/graphigem/Samson_Regular.ttf"
  },
  "/fonts/graphigem/Samson_Thin.ttf": {
    "type": "font/ttf",
    "etag": "\"4fd4-yrey6Jb5geGEcKXtTy3bWvvFiDY\"",
    "mtime": "2022-06-12T07:31:16.000Z",
    "size": 20436,
    "path": "../public/fonts/graphigem/Samson_Thin.ttf"
  },
  "/fonts/graphigem/Wilco_v3-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"eac-GH2YIUKlx7TvvNYVMRBfywZUxgY\"",
    "mtime": "2022-03-14T07:24:43.000Z",
    "size": 3756,
    "path": "../public/fonts/graphigem/Wilco_v3-Regular.ttf"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _eDOEHh = lazyEventHandler(() => {
  const ipxOptions = {
    ...useRuntimeConfig().ipx || {},
    dir: fileURLToPath(new URL("../public", globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.req, event.res);
  });
});

const _lazy_S2cbL6 = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_S2cbL6, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _eDOEHh, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_S2cbL6, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
