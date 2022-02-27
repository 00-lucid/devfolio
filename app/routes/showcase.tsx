import { Project } from "@prisma/client";
import { Link } from "react-router-dom";
import ProjectCard from "~/components/ProjectCard";
import { Outlet } from "remix";

export default function ShowcaseRoute() {
  return (
    <>
      <Outlet />
    </>
  );
}
