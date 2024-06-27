import { Divider } from "@nextui-org/react";
import clsx from "clsx";

const Heading = ({
  title,
  description,
  anchor = "center",
}: {
  title: string;
  description?: string;
  anchor?: "left" | "center" | "right";
}) => {
  return (
    <div className={clsx("my-6 max-w-7xl mx-auto", `text-${anchor}`)}>
      <h1 className="text-2xl text-gray-900 text-balance">{title}</h1>
      <Divider className="mt-1 mb-2 w-24 mx-auto bg-primary" />
      <p className="text-lg text-gray-500 leading-6 text-balance">
        {description}
      </p>
    </div>
  );
};

export default Heading;
