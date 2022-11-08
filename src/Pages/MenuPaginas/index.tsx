import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import useStyles from "./styles";

const MenuPaginas = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleOpenHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleOpenQuemSomos = useCallback(() => {
    navigate("sobre-mim");
  }, [navigate]);

  const handleOpenServicos = useCallback(() => {
    navigate("servicos");
  }, [navigate]);

  const handleOpenContato = useCallback(() => {
    navigate("contato");
  }, [navigate]);

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12} md={5}>
        <Button onClick={handleOpenHome}>
          <Typography variant="h4" sx={styles.bold}>
            Capanema Servicetech
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12} md={2}>
        <Button sx={styles.boldTitle} onClick={handleOpenQuemSomos}>
          Quem Somos
        </Button>
      </Grid>
      <Grid item xs={12} md={2}>
        <Button sx={styles.boldTitle} onClick={handleOpenServicos}>
          Nossos Serviços
        </Button>
      </Grid>
      <Grid item xs={12} md={2}>
        <Button sx={styles.boldTitle} onClick={handleOpenContato}>
          Entre em Contato
        </Button>
      </Grid>
    </Grid>
  );
};

export default MenuPaginas;
