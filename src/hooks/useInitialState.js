import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then(Response => Response.json())
      .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
