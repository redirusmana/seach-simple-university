import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Box,
  Input,
  Button
} from "@chakra-ui/react";
import { FETCH_INDEX, FETCH_SEARCH } from "../Actions/Types";
import { apiUnivGet } from "../Tools/action";

export const UnivFilter = props => {
  const [formValue, setFormValue] = useState({ name: "", country: "" });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = () => {
    props.setFilter({
      name: formValue.name ? formValue.name : null,
      country: formValue.country ? formValue.country : null
    });
  };

  const getUnivIndex = async () => {
    try {
      const response = await apiUnivGet(props.filters);
      const { data } = response;
      props.fetchDataSource(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUnivIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filters]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box
          border
          borderRadius="lg"
          m="5"
          spacing="8"
          p="1"
          rounded="lg"
          boxShadow="lg"
          bg="white"
        >
          <Heading size="lg" fontSize="20px" mt="4" ml="4">
            Filter Univ
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={4} px={0} m="5">
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  bg="white"
                  name="name"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  value={formValue.name}
                />
              </FormControl>
            </GridItem>
            <GridItem pr="10px">
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input
                  type="text"
                  bg="white"
                  name="country"
                  onChange={handleChange}
                  size="sm"
                  borderRadius="5px"
                  borderWidth="1"
                  borderColor="gray.400"
                  value={formValue.country}
                />
              </FormControl>
            </GridItem>
            <GridItem pr="10px">
              <FormControl pt="7">
                <Button type="button" colorScheme="teal" onClick={handleSubmit}>
                  Search
                </Button>
              </FormControl>
            </GridItem>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  dataSource: state.searchs.dataSource,
  filters: state.searchs.filters
});

const mapDispatchToProps = dispatch => ({
  fetchDataSource: payload =>
    dispatch({
      type: FETCH_INDEX,
      payload
    }),
  setFilter: payload =>
    dispatch({
      type: FETCH_SEARCH,
      payload
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(UnivFilter);
