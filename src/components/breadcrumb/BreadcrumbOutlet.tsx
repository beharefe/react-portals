import React from "react";
import './Breadcrumb.css';

export interface BreadcrumbOutletProps {
  id?: string;
}

const BreadcrumbOutlet: React.FunctionComponent<BreadcrumbOutletProps> = ({
  id = "default-breadcrumb",
}) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol id={id} />
    </nav>
  );
};

export default BreadcrumbOutlet;
