"use client";

import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeActions() {
  return <div className="no-print flex flex-wrap gap-3"><Button asChild><a href="/resume/Engineer-Mumtaz-Ali-Resume.pdf" download><Download className="h-4 w-4" /> Download resume</a></Button><Button type="button" variant="secondary" onClick={() => window.print()}><Printer className="h-4 w-4" /> Print this page</Button></div>;
}
