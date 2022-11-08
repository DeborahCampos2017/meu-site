import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useStyles from "./styles";

const Sobre = () => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3" sx={styles.bold}>
          QUEM SOMOS
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={styles.foto}>
        <Typography variant="h3" sx={styles.bold}>
          Foto
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={styles.text}>
          Somos uma empresa especializada em manutenção de Geradores de energia
          e motores Estacionários de todas aplicações, maquinas para construção
          civil, manutenção de equipamentos de jardinagem, agrícolas e
          industriais, manutenção predial, automação e elétrica, comandos
          elétricos e painéis. Também temos nossa divisão náutica em que somos
          especializados em motores de popa ate 150 HP.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Sobre;
