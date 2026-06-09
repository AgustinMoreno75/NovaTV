import { chromium } from "@playwright/test";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const outputPath = resolve("public/og-image.png");
const logoBase64 = readFileSync(resolve("src/assets/novatv-logo.jpeg")).toString("base64");
const logoUrl = `data:image/jpeg;base64,${logoBase64}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

await page.setContent(`
  <!doctype html>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <style>
        * { box-sizing: border-box; }
        body {
          width: 1200px;
          height: 630px;
          margin: 0;
          overflow: hidden;
          font-family: Inter, Arial, sans-serif;
          color: #fff;
          background:
            radial-gradient(circle at 18% 12%, rgba(29, 161, 255, 0.42), transparent 31%),
            radial-gradient(circle at 80% 70%, rgba(11, 95, 255, 0.35), transparent 36%),
            linear-gradient(135deg, #030b1a 0%, #06142d 52%, #020814 100%);
        }
        .frame {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 72px;
        }
        .grid {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .logo {
          display: block;
          width: 380px;
          height: auto;
          object-fit: contain;
        }
        .badge {
          display: inline-flex;
          margin-top: 24px;
          padding: 14px 18px;
          border: 1px solid rgba(29, 161, 255, 0.42);
          border-radius: 12px;
          color: #1da1ff;
          background: rgba(29, 161, 255, 0.12);
          font-size: 25px;
          font-weight: 800;
        }
        h1 {
          width: 690px;
          margin: 28px 0 0;
          font-size: 72px;
          line-height: 0.96;
          letter-spacing: 0;
          font-weight: 900;
        }
        p {
          width: 720px;
          margin: 26px 0 0;
          color: #b8c2d3;
          font-size: 30px;
          line-height: 1.35;
          font-weight: 600;
        }
        .card {
          position: absolute;
          right: 76px;
          bottom: 70px;
          width: 330px;
          padding: 26px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 18px;
          background: rgba(8,18,35,0.72);
          box-shadow: 0 0 56px rgba(29, 161, 255, 0.28);
        }
        .price {
          color: #fff;
          font-size: 48px;
          line-height: 1;
          font-weight: 900;
        }
        .trial {
          margin-top: 14px;
          color: #1da1ff;
          font-size: 28px;
          font-weight: 900;
        }
        .screen {
          position: absolute;
          top: 88px;
          right: 78px;
          width: 340px;
          height: 198px;
          border: 10px solid rgba(255,255,255,0.12);
          border-radius: 22px;
          background:
            linear-gradient(135deg, rgba(29,161,255,0.2), rgba(8,18,35,0.9)),
            linear-gradient(180deg, rgba(255,255,255,0.12), transparent);
          box-shadow: 0 24px 78px rgba(0,0,0,0.42);
        }
        .tiles {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding: 26px;
        }
        .tile {
          height: 54px;
          border-radius: 10px;
          background: rgba(255,255,255,0.12);
        }
        .tile:nth-child(2),
        .tile:nth-child(5) {
          background: rgba(29,161,255,0.34);
        }
      </style>
    </head>
    <body>
      <div class="grid"></div>
      <main class="frame">
        <img class="logo" src="${logoUrl}" alt="NovaTV" />
        <div class="badge">Más de 1000 canales en vivo</div>
        <h1>Probá NovaTV gratis por 48 horas</h1>
        <p>Deportes, noticias, Formula 1 y entretenimiento desde cualquier dispositivo.</p>
        <div class="screen">
          <div class="tiles">
            <span class="tile"></span><span class="tile"></span><span class="tile"></span>
            <span class="tile"></span><span class="tile"></span><span class="tile"></span>
          </div>
        </div>
        <section class="card">
          <div class="price">$30.000 ARS</div>
          <div class="trial">Plan trimestral</div>
        </section>
      </main>
    </body>
  </html>
`);

await page.screenshot({ path: outputPath, type: "png" });
await browser.close();

console.log(`Generated ${outputPath}`);
