import Div from "../styled/Div";
import logo from "../Images/Logo.png";
import divider from "../Images/Divider.png";
import Aa from "../Images/AA.png";
import { Typography } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  return (
    <Div
      sx={{
        display: "flex",
        minHeight: "64px",
        backgroundColor: "#002C77",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Div
        sx={{
          ml: "30px",
          display: "flex",
          minWidth: "659px",
          minHeight: "36px",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <img src={logo} alt="logo" width="136px" height="20px" />

        <img src={divider} alt="|" width="1px" height="32px" />

        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Task Library
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          View Timeline
        </Typography>
        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          Assessor Dashboard
        </Typography>
      </Div>
      <Div
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          mr: "20px",
        }}
      >
        <TranslateIcon
          sx={{
            width: "20px",
            height: "20px",
            color: "#ffffff",
          }}
        />
        <NotificationsIcon
          sx={{
            width: "20px",
            height: "20px",
            color: "#ffffff",
          }}
        />
        <HelpOutlineIcon
          sx={{
            width: "20px",
            height: "20px",
            color: "#ffffff",
          }}
        />
        <img src={Aa} />
        <img src={divider} alt="|" width="1px" height="32px" />
        <Div sx={{
               display: "flex",
               alignItems:"center",
               gap:"8px"
        }}>
          <Div
            sx={{
              backgroundColor: "#8246AF",
              height: "32px",
              width: "32px",
              borderRadius: "20px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
           
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16.34 px",
                color: "#ffffff",
              }}
            >
              {" "}
              A B
            </Typography>
          </Div>
          <ArrowDropDown
            sx={{
              width: "20px",
              height: "20px",
              color: "#ffffff",
            }}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default Navbar;
