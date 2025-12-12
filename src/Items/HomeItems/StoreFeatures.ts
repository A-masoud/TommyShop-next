import { IFeatureItem } from "@/types/Home/featureStor";
import { Truck, RefreshCw, CreditCard, ShieldCheck} from "lucide-react";
export const features: IFeatureItem[] = [
    { id: 1, title: "ارسال سریع", desc: "تحویل فوری در کمترین زمان ممکن", icon: Truck },
    { id: 2, title: "گارانتی تعویض", desc: "7 روز ضمانت تعویض کالا", icon: RefreshCw },
    { id: 3, title: "پرداخت در محل", desc: "امکان پرداخت هنگام تحویل", icon: CreditCard },
    { id: 4, title: "تضمین کیفیت", desc: "محصولات اصل و باکیفیت", icon: ShieldCheck },
  ];