import SidebarNavClient from "@/components/layout/SidebarNavClient";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "contributions", label: "Contributions" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "blogs", label: "Blogs" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

export default function SidebarNav() {
  return <SidebarNavClient items={NAV_ITEMS} />;
}