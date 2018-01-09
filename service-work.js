var cacheName = 'gotop-06'

var cacheList = [
  "/",
  "index.html",
  "dist/app.js",
]

// Service Worker 注册完成事件，写入缓存
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheList))
      .then(() => self.skipWaiting())
  )
})

// Service Worker 启动事件，处理更新缓存
self.addEventListener('activate', function (e) {
  e.waitUntil(
    Promise.all(
      caches.keys().then(keyList => {
        return keyList.map(key => {
          // 遍历已有缓存，保留与当前一样的缓存，即更新
          if (key !== cacheName) {
            return caches.delete(key)
          }
        })
      })
    ).then(() => {
      return self.clients.claim()
    })
  )
})

// 请求接口事件，处理相关逻辑
self.addEventListener('fetch', function (e) {
  e.respondWith(
    // 如果缓存内容存在，则提供缓存内容，否则继续 fetch
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request.url)
    })
  )
})