import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useStyles from "./styles";

const Servicos = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} sx={styles.container}>
        <Carousel width="65%" infiniteLoop>
          <div style={styles.imagem}>
            <p className="legend">Serviço 1</p>
          </div>
          <div style={styles.imagem}>
            <p className="legend">Serviço 2</p>
          </div>
          <div style={styles.imagem}>
            <p className="legend">Serviço 3</p>
          </div>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Servicos;
