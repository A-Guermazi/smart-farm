"use client";

import * as React from "react";

import { NavDocuments } from "@/components/sidebar/nav-documents";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export default function AppSidebar({ data, ...props }) {
  console.log(data);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* header */}

      <SidebarHeader>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
        <div className=" flex items-center">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Picture of the author"
          ></Image>
          <h1 className="text-base font-bold">Smart Farm</h1>
        </div>
      </SidebarHeader>

      {/* content */}

      <SidebarContent>
        <NavMain />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary className="mt-auto" />
      </SidebarContent>

      {/* footer */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
