
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inport){
    return twMerge(clsx(inport))
}   