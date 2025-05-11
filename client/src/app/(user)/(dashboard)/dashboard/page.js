import SiteHeader from "@/components/site-header";
import GreenHouseCom from "@/components/GreenHouseComp";
import WeatherComponent from "@/components/WeatherComponent";
import ChartAreaInteractive from "@/components/chart-area-interactive";
import AnalyzeWeather from "@/components/analyzeWeather";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Page() {
    return (
        <>
            <SiteHeader current="Dashboard" />
            <div className="p-6">
                <Accordion type="multiple" className="w-full space-y-2">
                    <AccordionItem value="greenhouse">
                        <AccordionTrigger>🌱 Greenhouse Data</AccordionTrigger>
                        <AccordionContent>
                            <GreenHouseCom />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="weather">
                        <AccordionTrigger>☁️ Live Weather</AccordionTrigger>
                        <AccordionContent>
                            <WeatherComponent />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="chart">
                        <AccordionTrigger>📊 Weather Chart</AccordionTrigger>
                        <AccordionContent>
                            <ChartAreaInteractive />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="analysis">
                        <AccordionTrigger>🧠 Weather Analysis</AccordionTrigger>
                        <AccordionContent>
                            <AnalyzeWeather />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}

export default Page;
