"use client"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionCards({ data }) {

  return (
    <div
      //*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card
      //that are other class names i can add to add gradient to the card
      className=" grid grid-cols-1 gap-4 
      px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs
       lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4"
    >
      {data.map((card) => (
        <div key={card.id}>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>{card.title}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {card.value}
              </CardTitle>
              {/* <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction> */}
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="text-muted-foreground">{card.description}</div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
