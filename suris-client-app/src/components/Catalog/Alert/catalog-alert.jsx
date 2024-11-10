import { Alert ,AlertTitle,AlertDescription} from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"


export const CatalogAlert = ({title,message, variant}) => 
{
    return (
        <Alert variant={`${variant}`}>
        <AlertCircle className="h-3 w-2" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    )
    
}