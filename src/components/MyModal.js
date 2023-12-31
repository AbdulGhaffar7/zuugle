import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import Modal from "@mui/material/Modal";
import { hideModal } from "../actions/modalActions";
import Box from "@mui/material/Box";
import { Divider, IconButton, Typography } from "@mui/material";
import Close from "../icons/Close";
// import ChevronLeft from "../icons/ChevronLeft";
// import TextWithIcon from "./TextWithIcon";
// import GoIcon from "../icons/GoIcon";
// import { useSearchParams } from "react-router-dom";

// import Grid from "@mui/material/Grid";
// import { loadFavouriteTours, loadTours } from "../actions/tourActions";
// import { loadRegions } from "../actions/regionActions";
// import {
//   // isResponsive,
//   parseIfNeccessary,
//   setOrRemoveSearchParam,
// } from "../utils/globals";

const MyModal = ({ title, size, srhBoxScrollH, page, content, hideModal, onBack, sourceCall}) => {
  console.log("L25 : sourceCall", sourceCall);
  const { t } = useTranslation();
  // const [placeholder, setPlaceholder] = useState(t("start.suche"));
  // const [cityInput, setCityInput] = useState("");
  // const [searchPhrase, setSearchPhrase] = useState("");
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  // const [activeFilter, setActiveFilter] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  let suggestion; //variable that stores the text of the selected option
  let autoSearchPhrase; //variable that stores the typed text, in case you don't use any suggestion

  const style = {
    overflowY: "scroll",
    overflowX: "hidden",
    display: "block",
    position: "absolute",
    // top: { xs: "auto", sm: "50%" },
    top: { xs: "auto", sm: !title ? (srhBoxScrollH-80) : "50%" },
    bottom: { xs: "0", sm: "auto" },
    left: "50%",
    transform: {
      // xs: "translate(-50%, 0)", sm: "translate(-50%, -5%)"
      xs: "translate(-50%, 0)", sm: title ? "translate(-50%, -50%)" : "translate(-50%, 0)"
    },
    width: "100%",
    maxWidth: "618px",
    minHeight: "484px",
    // maxHeight: { xs: "560px", sm: "800px" },
    bgcolor: "#fff",
    boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.15)",
    border: "0",
    outline: "none",
    borderRadius: "18px",
    padding: "20px 25px",
    boxSizing: "border-box",
  };


 

  return (
    <Modal open={true} onClose={hideModal}>
      <Box sx={style} className={"my-modal"}>
        <Box
          sx={{
            mb: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {!!title ? (
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  lineHeight: "40px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
            </Box>
          ) :
            (<Typography
              sx={{
                textAlign: "center",
                lineHeight: "40px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {sourceCall == "city" ?
                t("start.heimatbahnhof")
              :
                t("start.suche")
              }
            </Typography>)
          }


          {!!onBack ? (
            <Box onClick={onBack}>
              <Typography sx={{
                textDecoration: "underline", cursor: "pointer", fontFamily: "Open Sans",
                fontSize: "13px",
                fontWeight: "600",
                lineHeight: "18px",
              }}>
                {t("search.abbrechen")}
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                position: "absolute",
                right: "20px",
                top: "20px",
                width: "40px",
                height: "40px",
                backgroundColor: "#EAEAEA",
                borderRadius: "12px",
              }}
            >
              <Box sx={{ padding: "8px" }} onClick={hideModal}>
                <Close style={{ stroke: "#000000", strokeWidth: 1 }} />
              </Box>
            </Box>
          )}

        </Box>
        {!!title && (<Divider />)}
        <Box>
          <Box>{content}</Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default connect(null, { hideModal })(MyModal);
