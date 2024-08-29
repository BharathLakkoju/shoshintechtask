"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoreHorizontal } from "lucide-react";

interface ScheduleProps {
  title: string;
  time: string;
  type: string;
}

export default function ScheduleCard({
  schedules,
}: {
  schedules: ScheduleProps[];
}) {
  return (
    <Card className="xl:max-w-[427px] md:min-h-[300px] md:max-w-[400px] max-w-[calc(100%-2rem)]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-[#161E54]">
          Upcoming Schedule
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="shadow-[0px_0px_1px] text-gray-500 text-[0.5rem] px-2 py-1 flex gap-2 rounded-sm"
        >
          <span>Today, 13 Sep 2021</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 flex flex-col overflow-y-auto min-h-[150px] max-h-[220px]">
          <span className="text-muted-foreground text-xs">Priority</span>
          {schedules
            .filter((item) => item.type === "priority")
            .map((item, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-100 p-2 rounded-md items-center"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-[12px]">{item.title}</span>
                  <span className="text-[10px] text-gray-500">{item.time}</span>
                </div>
                <Button variant={"ghost"} className="px-3 py-2">
                  <MoreHorizontal className="text-gray-500 size-5" />
                </Button>
              </li>
            ))}
          <span className="text-muted-foreground text-xs">Other</span>
          {schedules
            .filter((item) => item.type === "other")
            .map((item, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-100 p-2 rounded-md items-center"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-[12px]">{item.title}</span>
                  <span className="text-[10px] text-gray-500">{item.time}</span>
                </div>
                <Button variant={"ghost"} className="px-3 py-2">
                  <MoreHorizontal className="text-gray-500 size-5" />
                </Button>
              </li>
            ))}
        </ul>
        <Button className="w-full mt-4 bg-white text-[#FF5151] shadow-[0px_0px_2px] hover:bg-gray-100">
          Create a New Schedule
        </Button>
      </CardContent>
    </Card>
  );
}
