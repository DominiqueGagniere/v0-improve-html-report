"use client"

import { Monitor, FileText } from "lucide-react"

interface ReportHeaderProps {
  computerName: string
}

export function ReportHeader({ computerName }: ReportHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      <div className="relative flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* Logo and title section */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-balance text-xl font-semibold text-foreground md:text-2xl">
              Rapport d&apos;exécution du script
            </h1>
            <div className="mt-1 flex items-center gap-2 text-muted-foreground">
              <Monitor className="h-4 w-4" />
              <span className="text-sm font-medium">{computerName}</span>
            </div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 ring-1 ring-success/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          <span className="text-sm font-medium text-success">Rapport généré</span>
        </div>
      </div>
    </div>
  )
}
