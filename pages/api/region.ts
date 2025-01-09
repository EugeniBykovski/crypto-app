import { CommentsProps } from "@/components/comments/types";
import { GEO_API } from "@/constants/constants";
import { NextApiRequest, NextApiResponse } from "next";

const generateGEOPositionHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const response = await fetch(GEO_API);
    const data = await response.json();

    let region: CommentsProps["region"];
    if (data.continent_code === "EU") {
      region = "eu";
    } else if (data.country_code === "MX") {
      region = "mex";
    } else if (data.continent_code === "AS") {
      region = "asia";
    } else {
      region = "eu";
    }

    res.status(200).json({ region });
  } catch (error) {
    console.error("Error fetching region:", error);
    res.status(500).json({ error: "Failed to fetch region" });
  }
};

export default generateGEOPositionHandler;
