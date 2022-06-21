import axios from "axios";
import { useEffect, useState } from "react";

interface CollectionStats {
  count: string;
  num_owners: string;
  floor_price: string | null;
  total_volume: string;
}

const useFetchCollectionStats = () => {
  const [collectionStats, setCollectionStats] = useState<CollectionStats>({
    count: "0",
    num_owners: "N/A",
    floor_price: "N/A",
    total_volume: "N/A",
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://testnets-api.opensea.io/api/v1/collection/worldsnft/stats"
      );

      const { count, num_owners, floor_price, total_volume } =
        response.data.stats;
      setCollectionStats({ count, num_owners, floor_price, total_volume });
    })();
  }, []);

  return collectionStats;
};

export default useFetchCollectionStats;
