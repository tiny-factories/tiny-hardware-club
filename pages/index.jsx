import React from "react";
import { useCurrentUser } from "@/hooks/index";

const IndexPage = () => {
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
          <h2>Store</h2>
        </div>
        <div className="fl w-100 pa3">
          <p>
            Our store will add new projects each quarter and you can always
            recommend open hardware projects you would like us to source. Just
            send us an <span>email</span>.
          </p>
        </div>
      </div>
      <div>
        <h3>
          All posts from the Web{" "}
          <span role="img" aria-label="Earth">
            🌎
          </span>
        </h3>
      </div>
    </>
  );
};

export default IndexPage;
