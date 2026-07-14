import { ImageResponse } from "next/og";

export const alt = "Engineer Mumtaz Ali - Software Engineer and Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 72, color: "white", background: "linear-gradient(135deg, #0f172a 0%, #172554 58%, #164e63 100%)", fontFamily: "sans-serif" }}><div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, fontWeight: 700 }}><div style={{ width: 64, height: 64, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#2563eb,#06b6d4)" }}>MA</div>Engineer Mumtaz Ali</div><div style={{ marginTop: 54, maxWidth: 980, fontSize: 72, lineHeight: 1.03, fontWeight: 800, letterSpacing: "-4px" }}>Engineering clear, fast, dependable digital products.</div><div style={{ marginTop: 30, fontSize: 28, color: "#cbd5e1" }}>Software Engineer · Full Stack Developer · WordPress & WooCommerce</div></div>, size);
}
