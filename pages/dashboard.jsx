import React from "react";
import { useCurrentUser } from "@/hooks/index";
import PostEditor from "@/components/post/editor";
import CardHardware from "@/components/post/cardhardware";

const DashboardPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>
      <div className="cf ph2-ns">
        <div className="fl w-100 ph3">
          <h2>Dashbaord</h2>
        </div>

        <p>metrics</p>
        <p>Orders - Catalog - members - stripe data</p>
        <p>create</p>
        <p>new peocu or catalog</p>
      </div>
    </>
  );
};

export default DashboardPage;
