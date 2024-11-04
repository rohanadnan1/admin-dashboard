import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Box } from "@mui/material";

interface Dropdown {
  name: string;
  items: {
    item1: string;
    item2: string;
    item3: string;
  };
}

const dropdown = [
  {
    name: "Sales",
    items: {
      item1: "Revenue",
      item2: "Orders",
      item3: "Products",
    },
  },
  {
    name: "Customers",
    items: {
      item1: "Customer List",
      item2: "Customer Profile",
      item3: "Customer Segmentation",
    },
  },
  {
    name: "Marketing",
    items: {
      item1: "Campaigns",
      item2: "Ads",
      item3: "Emails",
    },
  },
  {
    name: "Support",
    items: {
      item1: "Tickets",
      item2: "Chat",
      item3: "Knowledge Base",
    },
  },
  {
    name: "Settings",
    items: {
      item1: "Profile",
      item2: "Billing",
      item3: "Users",
    },
  },
  {
    name: "Updates",
    items: {
      item1: "Version 1.0",
      item2: "Version 2.0",
      item3: "Version 3.0",
    },
  },
  {
    name: "Company",
    items: {
      item1: "About",
      item2: "Contact",
      item3: "Careers",
    },
  },
];

export default function MenuPopupState() {
  const [dropdownItems] =
    React.useState<Dropdown[]>(dropdown);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column",
        mt: "50px",
        gap: "10px",
      }}
    >
      {dropdownItems.map((item: Dropdown) => (
        <PopupState
          key={item.name}
          variant="popover"
          popupId={`popup-${item.name}`}
        >
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                sx={{
                  width: "230px",
                  padding: "10px 10px",
                  backgroundColor: "#454A45",
                  mt: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "10px",
                  "&:focus": {
                    outline: "none",
                  },
                  "&:hover": {
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  },
                }}
                {...bindTrigger(popupState)}
              >
                {item.name}
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem sx={{ width: "200px" }} onClick={popupState.close}>
                  {item.items.item1}
                </MenuItem>
                <MenuItem sx={{ width: "200px" }} onClick={popupState.close}>
                  {item.items.item2}
                </MenuItem>
                <MenuItem sx={{ width: "200px" }} onClick={popupState.close}>
                  {item.items.item3}
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      ))}
    </Box>
  );
}
