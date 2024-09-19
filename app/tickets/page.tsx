import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: "default" })}
      >
        Insert Ticket
      </Link>
      <DataTable tickets={tickets} />
      <Pagination itemCount={23} pageSize={10} currentPage={2} />
    </div>
  );
};

export default Tickets;
