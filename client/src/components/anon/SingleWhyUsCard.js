import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// Define a mapping for allowed colors
const colorVariants = {
    red: {
        from: "hover:from-red-600",
        to: "hover:to-red-300",
        bg: "bg-red-200",
        hoverBg: "group-hover:bg-red-400",
        text: "text-red-900",
    },
    blue: {
        from: "hover:from-blue-600",
        to: "hover:to-blue-300",
        bg: "bg-blue-200",
        hoverBg: "group-hover:bg-blue-400",
        text: "text-blue-900",
    },
    green: {
        from: "hover:from-green-600",
        to: "hover:to-green-300",
        bg: "bg-green-200",
        hoverBg: "group-hover:bg-green-400",
        text: "text-green-900",
    },
    orange: {
        from: "hover:from-orange-600",
        to: "hover:to-orange-300",
        bg: "bg-orange-200",
        hoverBg: "group-hover:bg-orange-400",
        text: "text-orange-900",
    },
    purple: {
        from: "hover:from-purple-600",
        to: "hover:to-purple-300",
        bg: "bg-purple-200",
        hoverBg: "group-hover:bg-purple-400",
        text: "text-purple-900",
    },
    yellow: {
        from: "hover:from-yellow-500",
        to: "hover:to-yellow-200",
        bg: "bg-yellow-100",
        hoverBg: "group-hover:bg-yellow-400",
        text: "text-yellow-900",
    },

};

export default function SingleWhyUsCard({
    title = "Resource Efficiency",
    desc = "Reduce water usage by 40% and fertilizer costs by 30% with precision agriculture techniques.",
    color = "blue", // Default color
    Icon
}) {
    const colors = colorVariants[color] || colorVariants.blue; // Fallback to blue if invalid color is passed

    return (
        <Card
            className={`group relative grid transition-all duration-600 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br ${colors.from} ${colors.to}`}
        >
            <CardHeader className="grid gap-5 mt-2">
                <div className={`h-15 w-15 rounded-md flex justify-center items-center ${colors.bg} ${colors.hoverBg} transition-opacity duration-300`}>
                    {Icon && <Icon stroke={1.5} className={`h-10 w-10 ${colors.text} group-hover:text-white`} />}
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="grid">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 space-y-1 max-w-[360px]">
                        <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                            {desc}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
