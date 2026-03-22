import { ReportHeader } from "@/components/report-header"
import { UserInfoCard } from "@/components/user-info-card"
import { ExecutionStepsCard } from "@/components/execution-steps-card"

export default function ReportPage() {
  // These would be replaced with actual data from props/API
  const reportData = {
    computerName: "{{ComputerName}}",
    inDate: "{{InDate}}",
    firstName: "{{FirstnameUser}}",
    lastName: "{{SecondnameUser}}",
    username: "{{Username}}",
    computerModel: "{{ComputerModel}}",
    computerSN: "{{ComputerSN}}",
  }

  const executionSteps = [
    { label: "Suppression des logiciels inutiles", status: "{{debloatResult}}" },
    { label: "Désinstallation des packages Office étranger", status: "{{rofficeResult}}" },
    { label: "Installation des logiciels nécessaires", status: "{{installResult}}" },
    { label: "Mise à jour du mot de passe du compte \"Administrateur\"", status: "{{updateAdminCred}}" },
    { label: "Mise à jour du nom de l'ordinateur", status: "{{updateComputerName}}" },
    { label: "Activation du bureau à distance pour {{Username}}", status: "{{activeRDP}}" },
    { label: "Installation des mise à jour Windows", status: "{{updateWindows}}" },
    { label: "Mise à jour du nom de compte Administrateur", status: "{{updateAdminName}} - {{AdminName}}" },
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <ReportHeader computerName={reportData.computerName} />
        <UserInfoCard data={reportData} />
        <ExecutionStepsCard steps={executionSteps} />
      </div>
    </div>
  )
}
