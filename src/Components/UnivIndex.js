import React, { useState } from "react";
import { connect } from "react-redux";
import { CSSReset, ThemeProvider, theme, Box, Button } from "@chakra-ui/react";
import UnivTableIndex from "./UnivTableIndex";
import UnivCardIndex from "./UnivCardIndex";

export const UnivIndex = () => {
  const [tab, setTabs] = useState({
    card: false,
    table: true
  });
  const handleClick = name => {
    if (name === "table") {
      setTabs({
        table: true,
        card: false
      });
    }
    if (name === "card") {
      setTabs({
        table: false,
        card: true
      });
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <React.Fragment>
          <Box mx="5" mb="5">
            <Button
              colorScheme="teal"
              variant={tab.card ? "outline" : "solid"}
              size="md"
              mr="3"
              onClick={() => handleClick("table")}
            >
              Table
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              variant={tab.table ? "outline" : "solid"}
              onClick={() => handleClick("card")}
            >
              Card
            </Button>
          </Box>
          {tab.table && <UnivTableIndex />}
          {tab.card && <UnivCardIndex />}
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(UnivIndex);
