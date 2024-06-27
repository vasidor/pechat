"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Skeleton, Link } from "@nextui-org/react";

interface Breadcrumb {
  breadcrumb: string;
  href: string;
}

const Breadcrumbs: React.FC<{ title?: string }> = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | null>(null);
  const router = useRouter();
  const asPath: string | null = usePathname();

  useEffect(() => {
    if (router && asPath) {
      const linkPath = asPath.split("/");
      linkPath.shift();
      const pathArray: Breadcrumb[] = linkPath.map((path, i) => {
        let breadcrumbTitle = path;
        switch (path) {
          case "products":
            breadcrumbTitle = "Продукция";
            break;
          default:
            break;
        }
        return {
          breadcrumb: breadcrumbTitle,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });
      setBreadcrumbs([{ breadcrumb: "Категории", href: "/category" }, ...pathArray]);
      setLoading(false);
    }
  }, [router, asPath]);

  return (
    <nav className="text-sm text-gray-500 my-4 px-2 py-2">
      <ol className="flex flex-wrap list-none rounded-small">
        {loading && (
          <li>
            <Skeleton
              isLoaded={!loading}
              className={`${loading && "w-48 h-4 mx-2 rounded"}`}
            />
          </li>
        )}
        {breadcrumbs?.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={index > 0 ? "before:content-['/'] before:mx-2" : ""}
          >
            <Link
              className={
                index === breadcrumbs.length - 1
                  ? "!text-gray-900 opacity-100"
                  : "text-default-500"
              }
              href={breadcrumb.href}
              isDisabled={index === breadcrumbs.length - 1}
            >
              {title && breadcrumbs[breadcrumbs.length - 1] === breadcrumb
                ? title
                : breadcrumb.breadcrumb}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
