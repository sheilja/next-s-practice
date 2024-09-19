import TicketPriority from "@/components/TicketPriority";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Title</TableHead>
              <div className="flex justify-senter">
                <TableHead> Status</TableHead>
              </div>
              <div className="flex justify-senter">
                <TableHead> Priority</TableHead>
              </div>
              <TableHead> Create at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => {
                  return (
                    <TableRow key={ticket.id} data-href="/">
                      <TableCell>
                        <Link href={`/tickets/${ticket.id}`}>
                          {ticket.title}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-senter">
                          <TicketStatusBadge status={ticket.status} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-senter">
                          <TicketPriority priority={ticket.priority} />
                        </div>
                      </TableCell>
                      <TableCell>
                        {ticket.createAT.toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
