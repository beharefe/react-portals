import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouteMatch, Link } from "react-router-dom";

interface BreadcrumbProps {
  breadcrumbOutletId?: string;
  link?: string;
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  breadcrumbOutletId = "default-breadcrumb",
  link,
  children,
}) => {
  const [breadcrumbOutlet, setBreadcrumbOutlet] = useState<HTMLOListElement>();
  const match = useRouteMatch();

  useEffect(() => {
    const outletElement = document.getElementById(
      breadcrumbOutletId
    ) as HTMLOListElement;
    if (outletElement) {
      setBreadcrumbOutlet(outletElement);
    }
  }, [breadcrumbOutletId]);

  if (!breadcrumbOutlet) {
    return null;
  }

  return createPortal(
    <li>
      <Link to={link || match.url}>{children}</Link>
    </li>,
    breadcrumbOutlet
  );
};

export default Breadcrumb;
