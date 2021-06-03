import React from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Box,
  Text,
  Grid,
  GridItem,
  Heading,
  Center,
  Spinner
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

export const UnivCardIndex = props => {
  const { dataSource, loading } = props;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box borderRadius="md" m="5" py="1">
          <Heading fontWeight="bold" fontStyle="italic" fontSize="20px" pb="5">
            <Center>List University</Center>
          </Heading>
          {props && props.dataSource && !loading ? (
            <React.Fragment>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} px={0}>
                {props &&
                dataSource &&
                Array.isArray(dataSource) &&
                dataSource.length > 0 ? (
                  dataSource.map((li, index) => {
                    return (
                      <GridItem key={index}>
                        <Box
                          border
                          borderRadius="lg"
                          p={5}
                          rounded="lg"
                          boxShadow="lg"
                          bg="white"
                          height="200px"
                        >
                          <Text textAlign="center">{li.name || "-"}</Text>
                          <Text textAlign="center">
                            <ReactCountryFlag
                              svg
                              countryCode={li.alpha_two_code}
                              style={{
                                fontSize: "2em",
                                lineHeight: "2em"
                              }}
                              aria-label={li.coumtry}
                            />
                          </Text>
                          <Text textAlign="center">
                            {li.alpha_two_code || "-"}
                          </Text>
                          <Text textAlign="center">{li.country || "-"}</Text>

                          <Text textAlign="center">
                            {li["state-province"] || "-"}
                          </Text>
                        </Box>
                      </GridItem>
                    );
                  })
                ) : (
                  <React.Fragment>
                    <GridItem colSpan="5">
                      <Text textAlign="center" fontWeight="bold">
                        Not Found
                      </Text>
                    </GridItem>
                  </React.Fragment>
                )}
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box m="auto" p="auto">
                <Center>
                  <Spinner
                    thickness="8px"
                    speed="0.65s"
                    emptyColor="gray.100"
                    color="teal.600"
                    size="xl"
                  />
                </Center>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataSource: state.searchs.dataSource,
  filters: state.searchs.filters,
  loading: state.searchs.loading
});
export default connect(mapStateToProps)(UnivCardIndex);
