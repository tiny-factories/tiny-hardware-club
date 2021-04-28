import React from "react";
import { useSWRInfinite } from "swr";
import Link from "next/link";
import { useUser } from "@/hooks/index";
import fetcher from "@/lib/fetch";
import { defaultProfilePicture } from "@/lib/default";

function Product({ product }) {
  const user = useUser(product.creatorId);
  return (
    <>
      <style jsx>
        {`
          div {
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
            padding: 1.5rem;
            margin-bottom: 0.5rem;
            transition: box-shadow 0.2s ease 0s;
          }
          div:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }
          small {
            color: #777;
          }
        `}
      </style>
      <div>
      cat
        <p>{product.content}</p>
        <small>{new Date(product.createdAt).toLocaleString()}</small>
      </div>
    </>
  );
}

const PAGE_SIZE = 10;

export function useProductPages({ creatorId } = {}) {
  return useSWRInfinite(
    (index, previousPageData) => {
      // reached the end
      if (previousPageData && previousPageData.products.length === 0)
        return null;

      // first page, previousPageData is null
      if (index === 0) {
        return `/api/products?limit=${PAGE_SIZE}${
          creatorId ? `&by=${creatorId}` : ""
        }`;
      }

      // using oldest product createdAt date as cursor
      // We want to fetch products which has a date that is
      // before (hence the .getTime() - 1) the last product's createdAt
      const from = new Date(
        new Date(
          previousPageData.products[
            previousPageData.products.length - 1
          ].createdAt
        ).getTime() - 1
      ).toJSON();

      return `/api/products?from=${from}&limit=${PAGE_SIZE}${
        creatorId ? `&by=${creatorId}` : ""
      }`;
    },
    fetcher,
    {
      refreshInterval: 10000, // Refresh every 10 seconds
    }
  );
}

export default function Products({ creatorId }) {
  const { data, error, size, setSize } = useProductPages({ creatorId });

  const products = data
    ? data.reduce((acc, val) => [...acc, ...val.products], [])
    : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0].products?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.products.length < PAGE_SIZE);

  return (
    <div>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {!isReachingEnd && (
        <button
          type="button"
          style={{
            background: "transparent",
            color: "#000",
          }}
          onClick={() => setSize(size + 1)}
          disabled={isReachingEnd || isLoadingMore}
        >
          {isLoadingMore ? ". . ." : "load more"}
        </button>
      )}
    </div>
  );
}
