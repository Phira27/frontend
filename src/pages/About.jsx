import React from "react";
import { Logobar, Navbar, Sidebar } from "../components";
import { Container, Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';

import webIcon from "../assets/web.png";
import targetIcon from "../assets/target.png";
import squareIcon from "../assets/square.png";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const About = () => {
  return (
    <div className="grid grid-cols-5 min-h-screen">
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
                mb: 4,
              }}
            >
              <Typography variant="h3" gutterBottom fontFamily="Poppins">
                Pemantauan Kualitas Udara
              </Typography>
              <Typography variant="h4" paragraph fontFamily="Poppins">
                Untuk Hunian Sehat dan Nyaman di Lumajang
              </Typography>
            </Box>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div className="my-4" style={{ display: "flex", flexDirection: "column" }}>
                <img src={webIcon} alt="Icon 1" width={30} className="float-right mb-2" />
                <div
                  style={{
                    textAlign: "justify",
                    width: "100%",
                    background: "white",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      margin: 0,
                    }}
                  >
                    Website ini dirancang oleh mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang. Website ini dirancang oleh
                    mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang. Website ini dirancang oleh mahasiswa tingkat akhir
                    PSDKU Polinema Kabupaten Lumajang. Website ini dirancang oleh mahasiswa tingkat akhir PSDKU Polinema Kabupaten
                    Lumajang. Website ini dirancang oleh mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang. Website ini
                    dirancang oleh mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang. Website ini dirancang oleh mahasiswa
                    tingkat akhir PSDKU Polinema Kabupaten Lumajang. Website ini dirancang oleh mahasiswa tingkat akhir PSDKU
                    Polinema Kabupaten Lumajang.
                  </p>
                </div>
              </div>
              <div className="my-4" style={{ display: "flex", flexDirection: "column" }}>
                <img src={targetIcon} alt="Icon 2" width={30} className="float-right mb-2" />
                <div
                  style={{
                    textAlign: "justify",
                    width: "100%",
                    background: "white",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      margin: 0,
                    }}
                  >
                    Perancangan Website ini bertujuan untuk memantau kualitas udara, sehingga bisa mengetahui seberapa baik kualitas udara
                    di Lumajang dan mengetahui daerah mana saja yang kualitasnya baik. Perancangan Website ini bertujuan untuk memantau
                    kualitas udara, sehingga bisa mengetahui seberapa baik kualitas udara di Lumajang dan mengetahui daerah mana saja yang
                    kualitasnya baik. Perancangan Website ini bertujuan untuk memantau kualitas udara, sehingga bisa mengetahui seberapa baik
                    kualitas udara di Lumajang dan mengetahui daerah mana saja yang kualitasnya baik. Perancangan Website ini bertujuan
                    untuk memantau kualitas udara, sehingga bisa mengetahui seberapa baik kualitas udara di Lumajang dan mengetahui
                    daerah mana saja yang kualitasnya baik.
                  </p>
                </div>
              </div>
              <div className="my-4" style={{ display: "flex", flexDirection: "column" }}>
                <img src={squareIcon} alt="Icon 3" width={30} className="float-right mb-2" />
                <div
                  style={{
                    textAlign: "justify",
                    width: "100%",
                    background: "white",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      margin: 0,
                    }}
                  >
                    Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi
                    Jatiroto. Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang yaitu lokasi Lumajang, Lokasi Dawuhan, dan
                    lokasi Jatiroto. Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang yaitu lokasi Lumajang, Lokasi Dawuhan,
                    dan lokasi Jatiroto. Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang yaitu lokasi Lumajang, Lokasi
                    Dawuhan, dan lokasi Jatiroto. Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang yaitu lokasi Lumajang,
                    Lokasi Dawuhan, dan lokasi Jatiroto. Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang yaitu lokasi
                    Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
                  </p>
                </div>
              </div>
            </div>
            <Box
              sx={{
                bgcolor: "#2D1B6B",
                color: "white",
                p: 4,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 3,
                mt: 4,
              }}
            >
              <Typography variant="h5" gutterBottom fontFamily="Poppins" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <SchoolIcon sx={{ mr: 1 }} />
                Program Studi D3 Teknologi Informasi - PSDKU Polinema Kabupaten Lumajang
              </Typography>
              <Typography variant="h6" fontFamily="Poppins" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PhoneIcon sx={{ mr: 1 }} />
                085225865086
              </Typography>
              <Typography variant="h6" fontFamily="Poppins" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PhoneIcon sx={{ mr: 1 }} />
                085225865086
              </Typography>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
