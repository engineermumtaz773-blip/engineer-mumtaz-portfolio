import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Engineer Mumtaz Ali Portfolio", short_name: "Mumtaz Ali", description: "Software engineering and web development portfolio.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#0f172a", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
