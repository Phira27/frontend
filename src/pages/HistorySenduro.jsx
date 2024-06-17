import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Logobar, Navbar, Sidebar } from "../components";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HistorySenduro = () => {
  const events = [
    {
      title: "Event 1",
      description: "Deskripsi singkat mengenai event 1 di Jatiroto.",
      image: "https://cdn.pixabay.com/photo/2023/08/20/16/46/flower-8202753_1280.jpg",
    },
    {
      title: "Event 2",
      description: "Deskripsi singkat mengenai event 2 di Jatiroto.",
      image: "https://cdn.pixabay.com/photo/2023/08/20/16/46/flower-8202753_1280.jpg",
    },
    {
      title: "Event 3",
      description: "Deskripsi singkat mengenai event 3 di Jatiroto.",
      image: "https://cdn.pixabay.com/photo/2023/08/20/16/46/flower-8202753_1280.jpg",
    },
  ];

  const airQualityData = [
    { date: "2023-05-01", pm10: 20, pm2_5: 15, o3: 30, no2: 10, so2: 5, co: 0.5 },
    { date: "2023-05-02", pm10: 22, pm2_5: 16, o3: 32, no2: 11, so2: 5.5, co: 0.6 },
    // ... (Tambahkan data hingga 30 hari)
  ];

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Logobar />
        </div>
        <div className="row-span-11">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-4 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Navbar />
        </div>
        <div className="row-span-11 p-4 overflow-y-auto">
          <Container>
            <Box
              sx={{
                bgcolor: "#2D1B6B",
                color: "white",
                p: 4,
                textAlign: "center",
                animation: `${fadeIn} 2s ease-in-out`,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h3" gutterBottom fontFamily="Poppins">
                History Senduro
              </Typography>
              <Typography variant="body1" paragraph fontFamily="Poppins">
                Penjelasan singkat mengenai sejarah Senduro.
              </Typography>
            </Box>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {events.map((event, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      animation: `${fadeIn} 1.5s ease-in-out ${index * 0.5}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                      borderRadius: 2,
                      boxShadow: 3,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={event.image}
                      alt={event.title}
                    />
                    <CardContent sx={{ bgcolor: "#f5f5f5" }}>
                      <Typography variant="h6" component="div" fontFamily="Poppins">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
                Kualitas Udara (30 Hari Terakhir)
              </Typography>
              <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tanggal</TableCell>
                      <TableCell align="right">PM10</TableCell>
                      <TableCell align="right">PM2.5</TableCell>
                      <TableCell align="right">O3</TableCell>
                      <TableCell align="right">NO2</TableCell>
                      <TableCell align="right">SO2</TableCell>
                      <TableCell align="right">CO</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {airQualityData.map((row) => (
                      <TableRow
                        key={row.date}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.date}
                        </TableCell>
                        <TableCell align="right">{row.pm10}</TableCell>
                        <TableCell align="right">{row.pm2_5}</TableCell>
                        <TableCell align="right">{row.o3}</TableCell>
                        <TableCell align="right">{row.no2}</TableCell>
                        <TableCell align="right">{row.so2}</TableCell>
                        <TableCell align="right">{row.co}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
                Lokasi Senduro
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=-8.11091,113.26795&z=15&output=embed"
                  width="1200"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HistorySenduro;
