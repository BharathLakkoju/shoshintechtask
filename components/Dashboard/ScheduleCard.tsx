// components/ScheduleCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const schedules = [
  { title: "Review candidate applications", time: "Today - 11.30 AM" },
  { title: "Interview with candidates", time: "Today - 10.30 AM" },
  {
    title: "Short meeting with product designer from IT Department",
    time: "Today - 09.15 AM",
  },
];

export default function ScheduleCard() {
  return (
    <Card className="max-w-[400px] min-h-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">Upcoming Schedule</CardTitle>
        <Button variant="ghost" size="sm">
          Today, 13 Sep 2021
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {schedules.map((item, index) => (
            <li key={index}>
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-4">Create a New Schedule</Button>
      </CardContent>
    </Card>
  );
}
