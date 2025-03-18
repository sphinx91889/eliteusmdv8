export interface PageMetaData {
  url: string;
  bundleEntryPoint: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const pages: PageMetaData[] = [
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "EliteUSMD - Medical Director Services for Healthcare & Aesthetic Practices",
    description: "Expert medical director services ensuring compliance, safety, and quality care for healthcare and aesthetic practices. Connect with qualified medical directors today.",
    keywords: "medical director, healthcare compliance, aesthetic practice, medical oversight, physician collaboration",
    ogImage: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
  },
  {
    url: "services/medical-director.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Services | EliteUSMD",
    description: "Comprehensive medical director services for healthcare practices. Expert oversight, compliance management, and quality assurance.",
    keywords: "medical director services, healthcare compliance, medical oversight",
  },
  {
    url: "services/chart-review.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Chart Review Services | EliteUSMD",
    description: "Professional chart review and patient assessment services ensuring quality care and compliance.",
    keywords: "chart review, patient assessment, medical documentation",
  },
  {
    url: "contact.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Contact EliteUSMD | Medical Director Services",
    description: "Get in touch with EliteUSMD for expert medical director services and healthcare compliance solutions.",
    keywords: "contact, medical director services, healthcare consultation",
  }
]
