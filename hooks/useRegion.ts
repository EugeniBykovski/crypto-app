import { CommentsProps } from "@/components/comments/types";
import { useEffect, useState } from "react";

export const useRegion = () => {
  const [region, setRegion] = useState<CommentsProps["region"]>("eu");

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await fetch("/api/region");
        const data = await response.json();

        setRegion(data.region);
      } catch (error) {
        console.error("Failed to fetch region:", error);
        setRegion("eu");
      }
    };

    fetchRegion();
  }, []);

  return region;
};
