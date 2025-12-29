import type { Route } from "./+types/home";
import AppLayout from "../layouts/app-layout";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Branding Tailwind with Shadcn" },
    { name: "description", content: "A branded app using Tailwind CSS and Shadcn UI" },
  ];
}

export default function Home() {
  return (
    <AppLayout>
      Home
    </AppLayout>
  );
}
