define('./workbox-61158661.js', ['exports'], function (t) { 'use strict'; try { self['workbox:core:6.0.2'] && _() } catch (t) {} const e = (t, ...e) => { let s = t; return e.length > 0 && (s += ` :: ${JSON.stringify(e)}`), s }; class s extends Error {constructor (t, s) { super(e(t, s)), this.name = t, this.details = s }} try { self['workbox:routing:6.0.2'] && _() } catch (t) {} const n = t => t && typeof t === 'object' ? t : { handle: t }; class r {constructor (t, e, s = 'GET') { this.handler = n(e), this.match = t, this.method = s }} class i extends r {constructor (t, e, s) { super(({ url: e }) => { const s = t.exec(e.href); if (s && (e.origin === location.origin || s.index === 0)) return s.slice(1) }, e, s) }} class o {constructor () { this.t = new Map(), this.i = new Map() } get routes () { return this.t }addFetchListener () { self.addEventListener('fetch', t => { const { request: e } = t; const s = this.handleRequest({ request: e, event: t }); s && t.respondWith(s) }) }addCacheListener () { self.addEventListener('message', t => { if (t.data && t.data.type === 'CACHE_URLS') { const { payload: e } = t.data; const s = Promise.all(e.urlsToCache.map(e => { typeof e === 'string' && (e = [e]); const s = new Request(...e); return this.handleRequest({ request: s, event: t }) })); t.waitUntil(s), t.ports && t.ports[0] && s.then(() => t.ports[0].postMessage(!0)) } }) }handleRequest ({ request: t, event: e }) { const s = new URL(t.url, location.href); if (!s.protocol.startsWith('http')) return; const n = s.origin === location.origin; const { params: r, route: i } = this.findMatchingRoute({ event: e, request: t, sameOrigin: n, url: s }); let o = i && i.handler; const a = t.method; if (!o && this.i.has(a) && (o = this.i.get(a)), !o) return; let c; try { c = o.handle({ url: s, request: t, event: e, params: r }) } catch (t) { c = Promise.reject(t) } return c instanceof Promise && this.o && (c = c.catch(n => this.o.handle({ url: s, request: t, event: e }))), c }findMatchingRoute ({ url: t, sameOrigin: e, request: s, event: n }) { const r = this.t.get(s.method) || []; for (const i of r) { let r; const o = i.match({ url: t, sameOrigin: e, request: s, event: n }); if (o) return r = o, (Array.isArray(o) && o.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o === 'boolean') && (r = void 0), { route: i, params: r } } return {} }setDefaultHandler (t, e = 'GET') { this.i.set(e, n(t)) }setCatchHandler (t) { this.o = n(t) }registerRoute (t) { this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t) }unregisterRoute (t) { if (!this.t.has(t.method)) throw new s('unregister-route-but-not-found-with-method', { method: t.method }); const e = this.t.get(t.method).indexOf(t); if (!(e > -1)) throw new s('unregister-route-route-not-registered'); this.t.get(t.method).splice(e, 1) }} let a; const c = () => (a || (a = new o(), a.addFetchListener(), a.addCacheListener()), a); function h (t, e, n) { let o; if (typeof t === 'string') { const s = new URL(t, location.href); o = new r(({ url: t }) => t.href === s.href, e, n) } else if (t instanceof RegExp)o = new i(t, e, n); else if (typeof t === 'function')o = new r(t, e, n); else { if (!(t instanceof r)) throw new s('unsupported-route-type', { moduleName: 'workbox-routing', funcName: 'registerRoute', paramName: 'capture' }); o = t } return c().registerRoute(o), o } const u = { googleAnalytics: 'googleAnalytics', precache: 'precache-v2', prefix: 'workbox', runtime: 'runtime', suffix: typeof registration !== 'undefined' ? registration.scope : '' }; const l = t => [u.prefix, t, u.suffix].filter(t => t && t.length > 0).join('-'); const f = t => t || l(u.precache); const w = t => t || l(u.runtime); function d () { return (d = Object.assign || function (t) { for (let e = 1; e < arguments.length; e++) { const s = arguments[e]; for (const n in s)Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]) } return t }).apply(this, arguments) } function p (t, e) { const s = new URL(t); for (const t of e)s.searchParams.delete(t); return s.href } class y {constructor () { this.promise = new Promise((t, e) => { this.resolve = t, this.reject = e }) }} const g = new Set(); try { self['workbox:strategies:6.0.2'] && _() } catch (t) {} function m (t) { return typeof t === 'string' ? new Request(t) : t } class R {constructor (t, e) { this.h = {}, Object.assign(this, e), this.event = e.event, this.u = t, this.l = new y(), this.p = [], this.g = [...t.plugins], this.m = new Map(); for (const t of this.g) this.m.set(t, {}); this.event.waitUntil(this.l.promise) }fetch (t) { return this.waitUntil((async () => { const { event: e } = this; let n = m(t); if (n.mode === 'navigate' && e instanceof FetchEvent && e.preloadResponse) { const t = await e.preloadResponse; if (t) return t } const r = this.hasCallback('fetchDidFail') ? n.clone() : null; try { for (const t of this.iterateCallbacks('requestWillFetch'))n = await t({ request: n.clone(), event: e }) } catch (t) { throw new s('plugin-error-request-will-fetch', { thrownError: t }) } const i = n.clone(); try { let t; t = await fetch(n, n.mode === 'navigate' ? void 0 : this.u.fetchOptions); for (const s of this.iterateCallbacks('fetchDidSucceed'))t = await s({ event: e, request: i, response: t }); return t } catch (t) { throw r && await this.runCallbacks('fetchDidFail', { error: t, event: e, originalRequest: r.clone(), request: i.clone() }), t } })()) } async fetchAndCachePut (t) { const e = await this.fetch(t); const s = e.clone(); return this.waitUntil(this.cachePut(t, s)), e }cacheMatch (t) { return this.waitUntil((async () => { const e = m(t); let s; const { cacheName: n, matchOptions: r } = this.u; const i = await this.getCacheKey(e, 'read'); const o = d({}, r, { cacheName: n }); s = await caches.match(i, o); for (const t of this.iterateCallbacks('cachedResponseWillBeUsed'))s = await t({ cacheName: n, matchOptions: r, cachedResponse: s, request: i, event: this.event }) || void 0; return s })()) } async cachePut (t, e) { const n = m(t); let r; await (r = 0, new Promise(t => setTimeout(t, r))); const i = await this.getCacheKey(n, 'write'); if (!e) throw new s('cache-put-with-no-response', { url: (o = i.url, new URL(String(o), location.href).href.replace(new RegExp(`^${location.origin}`), '')) }); let o; const a = await this.R(e); if (!a) return; const { cacheName: c, matchOptions: h } = this.u; const u = await self.caches.open(c); const l = this.hasCallback('cacheDidUpdate'); const f = l ? await (async function (t, e, s, n) { const r = p(e.url, s); if (e.url === r) return t.match(e, n); const i = d({}, n, { ignoreSearch: !0 }); const o = await t.keys(e, i); for (const e of o) if (r === p(e.url, s)) return t.match(e, n) }(u, i.clone(), ['__WB_REVISION__'], h)) : null; try { await u.put(i, l ? a.clone() : a) } catch (t) { throw t.name === 'QuotaExceededError' && await (async function () { for (const t of g) await t() }()), t } for (const t of this.iterateCallbacks('cacheDidUpdate')) await t({ cacheName: c, oldResponse: f, newResponse: a.clone(), request: i, event: this.event }) } async getCacheKey (t, e) { if (!this.h[e]) { let s = t; for (const t of this.iterateCallbacks('cacheKeyWillBeUsed'))s = m(await t({ mode: e, request: s, event: this.event, params: this.params })); this.h[e] = s } return this.h[e] }hasCallback (t) { for (const e of this.u.plugins) if (t in e) return !0; return !1 } async runCallbacks (t, e) { for (const s of this.iterateCallbacks(t)) await s(e) }* iterateCallbacks (t) { for (const e of this.u.plugins) if (typeof e[t] === 'function') { const s = this.m.get(e); const n = n => { const r = d({}, n, { state: s }); return e[t](r) }; yield n } }waitUntil (t) { return this.p.push(t), t } async doneWaiting () { let t; for (;t = this.p.shift();) await t }destroy () { this.l.resolve() } async R (t) { let e = t; let s = !1; for (const t of this.iterateCallbacks('cacheWillUpdate')) if (e = await t({ request: this.request, response: e, event: this.event }) || void 0, s = !0, !e) break; return s || e && e.status !== 200 && (e = void 0), e }} class v {constructor (t = {}) { this.cacheName = w(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions }handle (t) { const [e] = this.handleAll(t); return e }handleAll (t) { t instanceof FetchEvent && (t = { event: t, request: t.request }); const e = t.event; const s = typeof t.request === 'string' ? new Request(t.request) : t.request; const n = 'params' in t ? t.params : void 0; const r = new R(this, { event: e, request: s, params: n }); const i = this.v(r, s, e); return [i, this.q(i, r, s, e)] } async v (t, e, n) { let r; await t.runCallbacks('handlerWillStart', { event: n, request: e }); try { if (r = await this.U(e, t), !r || r.type === 'error') throw new s('no-response', { url: e.url }) } catch (s) { for (const i of t.iterateCallbacks('handlerDidError')) if (r = await i({ error: s, event: n, request: e }), r) break; if (!r) throw s } for (const s of t.iterateCallbacks('handlerWillRespond'))r = await s({ event: n, request: e, response: r }); return r } async q (t, e, s, n) { let r, i; try { r = await t } catch (i) {} try { await e.runCallbacks('handlerDidRespond', { event: n, request: s, response: r }), await e.doneWaiting() } catch (t) { i = t } if (await e.runCallbacks('handlerDidComplete', { event: n, request: s, response: r, error: i }), e.destroy(), i) throw i }} const q = { cacheWillUpdate: async ({ response: t }) => t.status === 200 || t.status === 0 ? t : null }; function U (t, e) { const s = e(); return t.waitUntil(s), s } try { self['workbox:precaching:6.0.2'] && _() } catch (t) {} function L (t) { if (!t) throw new s('add-to-cache-list-unexpected-type', { entry: t }); if (typeof t === 'string') { const e = new URL(t, location.href); return { cacheKey: e.href, url: e.href } } const { revision: e, url: n } = t; if (!n) throw new s('add-to-cache-list-unexpected-type', { entry: t }); if (!e) { const t = new URL(n, location.href); return { cacheKey: t.href, url: t.href } } const r = new URL(n, location.href); const i = new URL(n, location.href); return r.searchParams.set('__WB_REVISION__', e), { cacheKey: r.href, url: i.href } } class b {constructor () { this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: t, state: e }) => { e && (e.originalRequest = t) }, this.cachedResponseWillBeUsed = async ({ event: t, state: e, cachedResponse: s }) => { if (t.type === 'install') { const t = e.originalRequest.url; s ? this.notUpdatedURLs.push(t) : this.updatedURLs.push(t) } return s } }} class x {constructor ({ precacheController: t }) { this.cacheKeyWillBeUsed = async ({ request: t, params: e }) => { const s = e && e.cacheKey || this.L.getCacheKeyForURL(t.url); return s ? new Request(s) : t }, this.L = t }} let C; async function N (t, e) { let n = null; if (t.url) { n = new URL(t.url).origin } if (n !== self.location.origin) throw new s('cross-origin-copy-response', { origin: n }); const r = t.clone(); const i = { headers: new Headers(r.headers), status: r.status, statusText: r.statusText }; const o = e ? e(i) : i; const a = (function () { if (void 0 === C) { const t = new Response(''); if ('body' in t) try { new Response(t.body), C = !0 } catch (t) { C = !1 }C = !1 } return C }()) ? r.body : await r.blob(); return new Response(a, o) } const E = { cacheWillUpdate: async ({ response: t }) => t.redirected ? await N(t) : t }; class O extends v {constructor (t = {}) { t.cacheName = f(t.cacheName), super(t), this._ = !1 !== t.fallbackToNetwork, this.plugins.push(E) } async U (t, e) { const s = await e.cacheMatch(t); return s || (e.event && e.event.type === 'install' ? await this.C(t, e) : await this.N(t, e)) } async N (t, e) { let n; if (!this._) throw new s('missing-precache-entry', { cacheName: this.cacheName, url: t.url }); return n = await e.fetch(t), n } async C (t, e) { const n = await e.fetchAndCachePut(t); let r = Boolean(n); if (n && n.status >= 400 && !this.O() && (r = !1), !r) throw new s('bad-precaching-response', { url: t.url, status: n.status }); return n }O () { return this.plugins.some(t => t.cacheWillUpdate && t !== E) }} class T {constructor ({ cacheName: t, plugins: e = [], fallbackToNetwork: s = !0 } = {}) { this.T = new Map(), this.k = new Map(), this.P = new Map(), this.u = new O({ cacheName: f(t), plugins: [...e, new x({ precacheController: this })], fallbackToNetwork: s }), this.install = this.install.bind(this), this.activate = this.activate.bind(this) } get strategy () { return this.u }precache (t) { this.addToCacheList(t), this.W || (self.addEventListener('install', this.install), self.addEventListener('activate', this.activate), this.W = !0) }addToCacheList (t) { const e = []; for (const n of t) { typeof n === 'string' ? e.push(n) : n && void 0 === n.revision && e.push(n.url); const { cacheKey: t, url: r } = L(n); const i = typeof n !== 'string' && n.revision ? 'reload' : 'default'; if (this.T.has(r) && this.T.get(r) !== t) throw new s('add-to-cache-list-conflicting-entries', { firstEntry: this.T.get(r), secondEntry: t }); if (typeof n !== 'string' && n.integrity) { if (this.P.has(t) && this.P.get(t) !== n.integrity) throw new s('add-to-cache-list-conflicting-integrities', { url: r }); this.P.set(t, n.integrity) } if (this.T.set(r, t), this.k.set(r, i), e.length > 0) { const t = `Workbox is precaching URLs without revision info: ${e.join(', ')}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`; console.warn(t) } } }install (t) { return U(t, async () => { const e = new b(); this.strategy.plugins.push(e); for (const [e, s] of this.T) { const n = this.P.get(s); const r = this.k.get(e); const i = new Request(e, { integrity: n, cache: r, credentials: 'same-origin' }); await Promise.all(this.strategy.handleAll({ params: { cacheKey: s }, request: i, event: t })) } const { updatedURLs: s, notUpdatedURLs: n } = e; return { updatedURLs: s, notUpdatedURLs: n } }) }activate (t) { return U(t, async () => { const t = await self.caches.open(this.strategy.cacheName); const e = await t.keys(); const s = new Set(this.T.values()); const n = []; for (const r of e)s.has(r.url) || (await t.delete(r), n.push(r.url)); return { deletedURLs: n } }) }getURLsToCacheKeys () { return this.T }getCachedURLs () { return [...this.T.keys()] }getCacheKeyForURL (t) { const e = new URL(t, location.href); return this.T.get(e.href) } async matchPrecache (t) { const e = t instanceof Request ? t.url : t; const s = this.getCacheKeyForURL(e); if (s) { return (await self.caches.open(this.strategy.cacheName)).match(s) } }createHandlerBoundToURL (t) { const e = this.getCacheKeyForURL(t); if (!e) throw new s('non-precached-url', { url: t }); return s => (s.request = new Request(t), s.params = d({ cacheKey: e }, s.params), this.strategy.handle(s)) }} let k; const P = () => (k || (k = new T()), k); class W extends r {constructor (t, e) { super(({ request: s }) => { const n = t.getURLsToCacheKeys(); for (const t of (function * (t, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: s = 'index.html', cleanURLs: n = !0, urlManipulation: r } = {}) { const i = new URL(t, location.href); i.hash = '', yield i.href; const o = (function (t, e = []) { for (const s of [...t.searchParams.keys()])e.some(t => t.test(s)) && t.searchParams.delete(s); return t }(i, e)); if (yield o.href, s && o.pathname.endsWith('/')) { const t = new URL(o.href); t.pathname += s, yield t.href } if (n) { const t = new URL(o.href); t.pathname += '.html', yield t.href } if (r) { const t = r({ url: i }); for (const e of t) yield e.href } }(s.url, e))) { const e = n.get(t); if (e) return { cacheKey: e } } }, t.strategy) }}t.CacheFirst = class extends v {async U (t, e) { let n; let r = await e.cacheMatch(t); if (!r) try { r = await e.fetchAndCachePut(t) } catch (t) { n = t } if (!r) throw new s('no-response', { url: t.url, error: n }); return r }}, t.NetworkFirst = class extends v {constructor (t = {}) { super(t), this.plugins.some(t => 'cacheWillUpdate' in t) || this.plugins.unshift(q), this.K = t.networkTimeoutSeconds || 0 } async U (t, e) { const n = []; const r = []; let i; if (this.K) { const { id: s, promise: o } = this.S({ request: t, logs: n, handler: e }); i = s, r.push(o) } const o = this.M({ timeoutId: i, request: t, logs: n, handler: e }); r.push(o); for (const t of r)e.waitUntil(t); let a = await Promise.race(r); if (a || (a = await o), !a) throw new s('no-response', { url: t.url }); return a }S ({ request: t, logs: e, handler: s }) { let n; return { promise: new Promise(e => { n = setTimeout(async () => { e(await s.cacheMatch(t)) }, 1e3 * this.K) }), id: n } } async M ({ timeoutId: t, request: e, logs: s, handler: n }) { let r, i; try { i = await n.fetchAndCachePut(e) } catch (t) { r = t } return t && clearTimeout(t), !r && i || (i = await n.cacheMatch(e)), i }}, t.clientsClaim = function () { self.addEventListener('activate', () => self.clients.claim()) }, t.precacheAndRoute = function (t, e) { !(function (t) { P().precache(t) }(t)), (function (t) { const e = P(); h(new W(e, t)) }(e)) }, t.registerRoute = h })
