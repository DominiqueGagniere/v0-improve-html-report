"use client"

import { CheckCircle2, XCircle, AlertCircle, ListChecks, ChevronRight } from "lucide-react"

interface ExecutionStepsCardProps {
  steps: Array<{
    label: string
    status: string
  }>
}

function getStatusInfo(status: string) {
  const normalizedStatus = status.toLowerCase()
  
  if (normalizedStatus.includes("success") || normalizedStatus.includes("ok") || normalizedStatus.includes("done") || normalizedStatus.includes("terminé")) {
    return {
      icon: CheckCircle2,
      className: "bg-success/10 text-success ring-success/20",
      dotClass: "bg-success",
    }
  }
  
  if (normalizedStatus.includes("fail") || normalizedStatus.includes("error") || normalizedStatus.includes("échoué")) {
    return {
      icon: XCircle,
      className: "bg-destructive/10 text-destructive ring-destructive/20",
      dotClass: "bg-destructive",
    }
  }
  
  return {
    icon: AlertCircle,
    className: "bg-warning/10 text-warning ring-warning/20",
    dotClass: "bg-warning",
  }
}

export function ExecutionStepsCard({ steps }: ExecutionStepsCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <ListChecks className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Étapes d&apos;exécution</h2>
        </div>
        <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
          {steps.length} étapes
        </span>
      </div>
      
      {/* Steps list */}
      <div className="divide-y divide-border">
        {steps.map((step, index) => {
          const statusInfo = getStatusInfo(step.status)
          const StatusIcon = statusInfo.icon
          
          return (
            <div
              key={index}
              className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex min-w-0 flex-1 items-center gap-4">
                {/* Step number */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                {/* Step label */}
                <span className="truncate text-foreground">{step.label}</span>
              </div>
              
              {/* Status badge */}
              <div className="flex shrink-0 items-center gap-3">
                <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ring-1 ${statusInfo.className}`}>
                  <StatusIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">{step.status}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
