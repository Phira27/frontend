import React from "react";
import { Container } from "@mui/material";

import webIcon from "../assets/web.png";
import targetIcon from "../assets/target.png";
import squareIcon from "../assets/square.png";
import Quotes from "../components/Quotes/Quotes";
import pain from "../assets/pain.mp3";

const About = () => {
  const subtitles = [
    { start: 1, end: 3, text: "Itami O Kanjiro\n(Rasakanlah Kepedihan)" },
    { start: 4, end: 6, text: "Itami O Kangaero\n(Pikirkanlah Kepedihan)" },
    { start: 10, end: 12, text: "Itami O Uketore\n(Terimalah Kepedihan)" },
    { start: 12, end: 14, text: "Itami O Shire\n(ketahuilah Kepedihan)" },
    { start: 16, end: 18, text: "Itami O Shiranu Momo Ni\n(Orang Yang Tidak Tahu Kepedihan)" },
    { start: 18, end: 20, text: "Honto No Heiwa Wa Wakaran\n(Tidak Akan Mengerti Kedamaian Yang Sebernanya)" },
    { start: 25, end: 27, text: "Sekai Ni Itami O\n(Dunia Harus Menerima Kepedihan)" },
    { start: 29, end: 31, text: "SHINRA TENSEI!" },
  ];
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
          <div
            className="my-4"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "justify",
              width: "100%",
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={webIcon}
              alt="Icon 1"
              width={30}
              className="float-right mb-2"
            />
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  margin: 0,
                }}
              >
                Website ini dirancang oleh mahasiswa tingkat akhir PSDKU
                Polinema Kabupaten Lumajang. Website ini dirancang oleh
                mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang.
                Website ini dirancang oleh mahasiswa tingkat akhir PSDKU
                Polinema Kabupaten Lumajang. Website ini dirancang oleh
                mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang.
                Website ini dirancang oleh mahasiswa tingkat akhir PSDKU
                Polinema Kabupaten Lumajang. Website ini dirancang oleh
                mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang.
                Website ini dirancang oleh mahasiswa tingkat akhir PSDKU
                Polinema Kabupaten Lumajang. Website ini dirancang oleh
                mahasiswa tingkat akhir PSDKU Polinema Kabupaten Lumajang.
              </p>
            </div>
          </div>
          <div
            className="my-4"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "justify",
              width: "100%",
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={targetIcon}
              alt="Icon 2"
              width={30}
              className="float-right mb-2"
            />
            <div style={{}}>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  margin: 0,
                }}
              >
                Perancangan Website ini bertujuan untuk memantau kualitas udara,
                sehingga bisa mengetahui seberapa baik kualitas udara di
                Lumajang dan mengetahui daerah mana saja yang kualitasnya baik.
                Perancangan Website ini bertujuan untuk memantau kualitas udara,
                sehingga bisa mengetahui seberapa baik kualitas udara di
                Lumajang dan mengetahui daerah mana saja yang kualitasnya baik.
                Perancangan Website ini bertujuan untuk memantau kualitas udara,
                sehingga bisa mengetahui seberapa baik kualitas udara di
                Lumajang dan mengetahui daerah mana saja yang kualitasnya baik.
                Perancangan Website ini bertujuan untuk memantau kualitas udara,
                sehingga bisa mengetahui seberapa baik kualitas udara di
                Lumajang dan mengetahui daerah mana saja yang kualitasnya baik.
              </p>
            </div>
          </div>
        </div>
        <div
          className="my-4"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={squareIcon}
            alt="Icon 3"
            width={30}
            className="float-right mb-2"
          />
          <div>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                lineHeight: "1.5",
                wordWrap: "break-word",
                margin: 0,
              }}
            >
              Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang
              yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
              Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang
              yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
              Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang
              yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
              Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang
              yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
              Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang
              yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
              Pemantauan Kualitas Udara dilaksanakan di titik lokasi di Lumajang
              yaitu lokasi Lumajang, Lokasi Dawuhan, dan lokasi Jatiroto.
            </p>
          </div>
        </div>
        <div className="quotes-container">
          <div>
            <h2
              style={{
                fontFamily: "Poppins",
                fontSize: "40px",
                color: "#c95bf5",
                lineHeight: "1.5",
                wordWrap: "break-word",
                margin: 0,
                textAlign: "center",
              }}
            >
              Quotes
            </h2>
          </div>
            <Quotes src={pain} subtitles={subtitles}/>
        </div>
      </Container>
    </div>
  );
};

export default About;
