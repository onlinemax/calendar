import {BeakerIcon, Cog6ToothIcon} from "@heroicons/react/24/solid"

type IconsName = "beacker" | "setting";

const iconMap: Record<IconsName, typeof BeakerIcon> = {
    "beacker": BeakerIcon,
    "setting": Cog6ToothIcon,
}

export default function AppIcon(prop : { type: IconsName, className?: string}) {
    const Icon = iconMap[prop.type];
    return <Icon className={prop.className}/>;
}   