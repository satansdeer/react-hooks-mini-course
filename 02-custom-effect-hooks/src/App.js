import React from "react";
import logo from "./logo.svg";
import "./App.css";

const useFetch = (config) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { url, skip, take } = config;
    const resource = `${url}?$skip=${skip}&take=${take}`;
    axios({ url: resource }).then(response => setData(response.data));
  }, [config.url, config.skip, config.take]);

  return data;
};

const App = () => {
  const data = useFetch({ url: "/users", take: 10, skip: 0 });
  return (
    <div>
      {data.map(d => (
        <div>{d}</div>
      ))}
    </div>
  );
};