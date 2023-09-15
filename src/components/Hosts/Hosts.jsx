import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";

import getHosts from "../../services/hosts_services";

const Hosts = () => {
  // variables de estado hosts
  const [hosts, setHost] = useState([]);

  useEffect(() => {
    const fetchHosts = async () => {
      const data = await getHosts();
      setHost(data.results);
    };
    fetchHosts();
  }, []);
  // console.log(hosts);
  return (
    <Container title={"Host"}>
      <Grid columns={3} rows={"auto"} gap={"15px"}>
        {hosts.map((host) => (
          <Card key={host.name}>
            <h2>{host.name}</h2>
            <div className="featured-group">
              <div className="featured-item">
                Bird Year
                <p>{host.birth_year}</p>
              </div>
              <div className="featured-item">
                Gender
                <p>{host.gender}</p>
              </div>
              <div className="featured-item">
                Heigth
                <p>{host.height}</p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Hosts;
