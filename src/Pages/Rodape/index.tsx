import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

const Rodape = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} sx={styles.container} alignItems="center">
      <Grid item xs={12} md={4}>
        <Typography sx={styles.text}>Contato</Typography>
        <Typography sx={styles.text}>Telefone: (11) 95196-6775</Typography>
        <Typography sx={styles.text}>E-mail: teste@teste.com.br</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography sx={styles.text}>Endereço</Typography>
        <Typography sx={styles.text}>
          Rua José Gouvêia, 33 - Jardim Divinolandia
        </Typography>
        <Typography sx={styles.text}>Guarulhos - SP 07133-140</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography sx={styles.text}>Horário de Funcionamento</Typography>
        <Typography sx={styles.text}>
          Segunda à Sexta das 08:00 às 18:30
        </Typography>
        <Typography sx={styles.text}>Sábado das 08:00 às 15:00</Typography>
      </Grid>
    </Grid>
  );
};

export default Rodape;
