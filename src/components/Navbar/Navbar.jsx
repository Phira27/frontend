import React, { useState } from "react";
import PropTypes from "prop-types";
import { KeyboardDoubleArrowLeft, LocationOn, Photo } from "@mui/icons-material";
import { Tooltip, Menu, MenuItem, Modal, Box, ImageList, ImageListItem } from "@mui/material";

// Fungsi untuk membuka Google Maps dengan koordinat yang diberikan
const openLocationInMaps = (latitude, longitude) => {
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  window.open(url, '_blank');
};

const photos = [
  { img: 'https://via.placeholder.com/150', title: 'Photo 1' },
  { img: 'https://via.placeholder.com/150', title: 'Photo 2' },
  { img: 'https://via.placeholder.com/150', title: 'Photo 3' },
  { img: 'https://via.placeholder.com/150', title: 'Photo 4' },
  { img: 'https://via.placeholder.com/150', title: 'Photo 5' },
  { img: 'https://via.placeholder.com/150', title: 'Photo 6' },
  // Tambahkan lebih banyak foto sesuai kebutuhan
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenGallery = () => {
    setOpen(true);
  };

  const handleCloseGallery = () => {
    setOpen(false);
  };

  return (
    <div className="shadow-md flex flex-col justify-center h-full w-full top-0 bg-white">
      <div className="h-full grid grid-cols-2 items-center px-4 lg:mb-0">
        <div>
          <button>
            <KeyboardDoubleArrowLeft />
          </button>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Tooltip title="galeri" placement="bottom">
            <button onClick={handleOpenGallery}><Photo /></button>
          </Tooltip>
          <Tooltip title="lokasi" placement="bottom">
            <button 
              className="text-red-400 hover:text-red-500"
              onClick={handleClick}
            >
              <LocationOn />
            </button>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => { openLocationInMaps(-8.02219, 112.92254); handleClose(); }}>Lokasi Senduro</MenuItem>
            <MenuItem onClick={() => { openLocationInMaps(-8.13248, 113.22307); handleClose(); }}>Lokasi Lumajang</MenuItem>
            <MenuItem onClick={() => { openLocationInMaps(-8.11091, 113.26795); handleClose(); }}>Lokasi Dawuhan</MenuItem>
          </Menu>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleCloseGallery}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '60%', 
            transform: 'translate(-50%, -50%)', 
            width: 1000, 
            bgcolor: 'background.paper', 
            border: '2px solid #000', 
            boxShadow: 24, 
            px: 6,
            py: 4 
          }}
        >
          <h3 id="modal-modal-title" className="text-4xl text-center py-7">Galeri Foto</h3>
          <ImageList sx={{ width: 900, height: 600 }} cols={3} rowHeight={164}>
            {photos.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Modal>
    </div>
  );
};

Navbar.propTypes = {
  adminPageId: PropTypes.number,
  handleChangeAdminPageId: PropTypes.func,
};

export default Navbar;
