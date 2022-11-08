import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

const Home = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={1} sx={styles.container}>
      <Grid item xs={12} md={12}>
        <Typography variant="h2" sx={styles.bold}>
          Capanema Servicetech Assistência Técnica
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="h5" sx={styles.text}>
          Somos assistência técnica localizada em Guarulhos/SP, autorizada em:
          Geradores diesel e gasolina, roçadeiras à combustão e elétricas,
          motosserras, compactadores de solo, sopradores, perfurador de solo,
          pulverizador, moto cultivador, marteletes, motobombas, motovibradores,
          cortadores de grama, etc...
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="h5" sx={styles.text}>
          Com experiência de mais de 20 anos em manutenção de motores de Popa
          todos os fabricantes, e montagem de embarcações
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography variant="h5" sx={styles.textUltimo}>
          Conheça também nossos serviços na área de instalação elétrica ,
          automação e ar condicionado.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
