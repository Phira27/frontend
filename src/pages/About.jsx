import React from "react";
import { Container } from "@mui/material";

import webIcon from "../assets/web.png";
import targetIcon from "../assets/target.png";
import squareIcon from "../assets/square.png";


const About = () => {
  return (
        <div className="row-span-11 p-4 overflow-y-auto mt-32">
          <Container>
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
          </Container>
        </div>
  );
};

export default About;
