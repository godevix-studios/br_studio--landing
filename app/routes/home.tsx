import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bigote Rojo" },
    {
      name: "description",
      content: "Barbería Premium en Durango, Dgo. México",
    },
    { property: "og:title", content: "Bigote Rojo" },
    {
      property: "og:description",
      content: "Barbería Premium en Durango, Dgo. México",
    },
    {
      property: "og:image",
      content:
        "https://lh3.googleusercontent.com/4MIX2__o-hY1CTJY7UvU1Dq1sr6f8Ifvq1nOq4h2jWnadaEAlayebuMZ5bp08eeYNMDDxXoQGWYWH1GCZAlPwJ1nKGFH4lwe=s576",
    },
    { property: "og:url", content: "https://bigoterojobarberia.com" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Bigote Rojo" },
  ];
}

export default function Home() {
  return <Welcome />;
}
