# Node.js WebSocket Instruction Monitor

## Description
A real-time instruction monitoring system for production environments. Admins can select a product model and instantly broadcast step-by-step instructions to multiple screens (roles: cable, soldering, assembly, testing, packaging) using WebSocket technology. Each monitor displays relevant instructions and images for its assigned role.

## Açıklama
Gerçek zamanlı üretim talimatı izleme sistemi. Admin panelinden bir ürün modeli seçildiğinde, WebSocket teknolojisi ile birden fazla ekrana (roller: kablo, lehimleme, montaj, test, paketleme) adım adım talimatlar anında iletilir. Her monitör, kendi rolüne uygun talimat ve görselleri gösterir.

## Features / Özellikler
- Real-time instruction updates via WebSocket
- Multi-screen and role-based display
- Admin panel for model selection
- Image and step management per role
- Node.js + Express + Socket.io backend

- WebSocket ile gerçek zamanlı talimat güncelleme
- Çoklu ekran ve rol tabanlı gösterim
- Admin panelinden model seçimi
- Her role özel görsel ve adım yönetimi
- Node.js + Express + Socket.io altyapısı

## Installation / Kurulum
```bash
npm install
node server.js
```

## Usage / Kullanım
1. Start the server: `node server.js`
2. Open the admin panel: `http://<your-ip>:3000/admin.html`
3. Open monitor screens: `http://<your-ip>:3000/monitor.html?monitorId=1&role=cable` (change role for each screen)

1. Sunucuyu başlatın: `node server.js`
2. Admin panelini açın: `http://<ip-adresiniz>:3000/admin.html`
3. Monitör ekranlarını açın: `http://<ip-adresiniz>:3000/monitor.html?monitorId=1&role=cable` (her ekran için rolü değiştirin)

## Example Roles / Örnek Roller
- cable
- soldering
- assembly
- testing
- packaging

## License
MIT

---

**Contact / İletişim:**
Your Name / Adınız
GitHub: [github.com/yourusername](https://github.com/yourusername)
