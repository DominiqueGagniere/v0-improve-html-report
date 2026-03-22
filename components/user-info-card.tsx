"use client"

import { User, Calendar, Laptop, Hash, AtSign } from "lucide-react"

interface UserInfoCardProps {
  data: {
    inDate: string
    firstName: string
    lastName: string
    username: string
    computerName: string
    computerModel: string
    computerSN: string
  }
}

export function UserInfoCard({ data }: UserInfoCardProps) {
  const infoItems = [
    { icon: Calendar, label: "Date IN", value: data.inDate },
    { icon: User, label: "Prénom", value: data.firstName },
    { icon: User, label: "Nom", value: data.lastName },
    { icon: AtSign, label: "Nom d'utilisateur", value: data.username },
    { icon: Laptop, label: "Nom du poste", value: data.computerName },
    { icon: Laptop, label: "Modèle de PC", value: data.computerModel },
    { icon: Hash, label: "Numéro de série", value: data.computerSN },
  ]

  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Card header */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <User className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">Informations utilisateur</h2>
      </div>
      
      {/* Info grid */}
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {infoItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex flex-col gap-1 bg-card p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
                <span className="text-xs font-medium uppercase tracking-wide">{item.label}</span>
              </div>
              <span className="truncate font-medium text-foreground">{item.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
