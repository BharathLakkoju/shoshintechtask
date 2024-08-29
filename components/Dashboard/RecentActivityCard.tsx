// components/RecentActivityCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RecentActivityCard() {
  return (
    <Card className="bg-[#161E54] text-white max-w-[427px] min-h-[300px]">
      <CardHeader>
        <CardTitle>Recently Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">10.40 AM, Fri 10 Sept 2021</p>
        <h3 className="text-xl font-bold mb-2">You Posted a New Job</h3>
        <p className="text-sm mb-4">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm">Today you makes 12 Activity</p>
          <Button variant="secondary" size="sm">
            See All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
