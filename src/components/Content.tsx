import {
  ArrowBigDownDashIcon,
  ArrowDown,
  BellIcon,
  CalendarIcon,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReportData } from "./data";

const invoices = ReportData;

const Content = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <div className="flex flex-col text-white mx-6 my-5 px-4 py-2 w-full h-screen">
      <div className="flex gap-4 w-full justify-between items-center">
        <h1 className="text-2xl font-mono ">Reports</h1>

        <div className="flex gap-4 items-center">
          <BellIcon></BellIcon>
          <div className="mr-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <div className="flex flex-row gap-3 items-center px-2 py-1 rounded-xl outline-none">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="w-full h-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="text-base font-semibold flex flex-row gap-2">
                    Username{" "}
                    <span>
                      <ChevronDown className="text-sm"></ChevronDown>
                    </span>
                  </p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="mr-8 mt-7">
        <hr className="border-slate-500" />
        <div className="flex justify-between items-center mr-3">
          <div className="flex flex-row gap-4 mt-1 items-center">
            <div className="border-r">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="flex flex-row gap-20">
                    <p className="">Reports</p>
                    <ChevronDown className="text-sm mr-6"></ChevronDown>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[175px] bg-[#1D1D26] border-none text-white mt-2">
                  <DropdownMenuItem className="cursor-pointer">
                    Total Miles Driven
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Energy Consumption
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Cost Analysis
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="border-r">
              <div className="h-full">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <div className="flex flex-row gap-20">
                      <p className="">Frequency</p>
                      <ChevronDown className="text-sm mr-6"></ChevronDown>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[175px] bg-[#1D1D26] border-none text-white mt-2">
                    <DropdownMenuItem className="cursor-pointer">
                      Daily
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Weekly
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Monthly
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Yearly
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="border-r">
              <div className={cn("grid gap-2", className)}>
                <Popover>
                  <PopoverTrigger asChild className="border-none">
                    <Button
                      id="date"
                      className={cn(
                        "w-[220px] text-left font-normal flex justify-between"
                      )}
                    >
                      <p className="text-base font-mono">Time Frame</p>
                      <ChevronDown className="text-sm"></ChevronDown>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-[#1D1D26] text-whit mt-3"
                    align="start"
                  >
                    <Calendar
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                      className="bg-[#1D1D26] text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="rounded-2xl border my-1" variant="ghost">
              {" "}
              Download CSV
            </Button>
            <Button className="bg-blue-700 text-white rounded-2xl my-1">
              {" "}
              Generate PDF
            </Button>
          </div>
        </div>

        <hr className="border-slate-500 mt-1" />
      </div>

      <div className="mr-8">
        <Table className="mt-10">
          <TableHeader>
            <TableRow>
              <TableHead>License Plate</TableHead>
              <TableHead>Make</TableHead>
              <TableHead>VIN</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Miles Driven</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.LicensePlate}>
                <TableCell className="font-medium">
                  {invoice.LicensePlate}
                </TableCell>
                <TableCell className="font-medium">{invoice.Make}</TableCell>
                <TableCell>{invoice.VIN}</TableCell>
                <TableCell>{invoice.Model}</TableCell>
                <TableCell>{invoice.Type}</TableCell>
                <TableCell>{invoice.Date}</TableCell>
                <TableCell>{invoice.MilesDriven}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Content;
