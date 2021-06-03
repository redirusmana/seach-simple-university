import React from "react";
import { connect } from "react-redux";
import {
  CSSReset,
  ThemeProvider,
  theme,
  Heading,
  Box,
  Center,
  Text,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ListItem,
  UnorderedList,
  Spinner
} from "@chakra-ui/react";

export const UnivTableIndex = props => {
  const { dataSource, loading } = props;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box borderRadius="md" mx="5" py="1">
          {props && props.dataSource && !loading ? (
            <React.Fragment>
              <Flex>
                <Box
                  width="100%"
                  bg="white"
                  padding="5"
                  border
                  boxShadow="lg"
                  borderRadius="md"
                  fontSize="24"
                >
                  <Heading
                    fontWeight="bold"
                    fontStyle="italic"
                    fontSize="20px"
                    pb="5"
                  >
                    <Center>List University</Center>
                  </Heading>
                  <Box overflowX="auto">
                    <Table variant="striped" size="sm" borderWidth="1">
                      <Thead>
                        <Tr>
                          <Th>No</Th>
                          <Th>Name</Th>
                          <Th>Country ID</Th>
                          <Th>Country</Th>
                          <Th>Domain</Th>
                          <Th>Web Page</Th>
                          <Th>State Province</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {props &&
                        dataSource &&
                        Array.isArray(dataSource) &&
                        dataSource.length > 0 ? (
                          dataSource.map((li, index) => {
                            return (
                              <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{li.name || "-"}</Td>
                                <Td>{li.alpha_two_code || "-"}</Td>
                                <Td>{li.country || "-"}</Td>
                                <Td>
                                  <UnorderedList>
                                    {li.domains &&
                                    Array.isArray(li.domains) &&
                                    li.domains.length > 0
                                      ? li.domains.map(dm => {
                                          return (
                                            <React.Fragment key={dm}>
                                              <ListItem>{dm}</ListItem>
                                            </React.Fragment>
                                          );
                                        })
                                      : []}
                                  </UnorderedList>
                                </Td>
                                <Td>
                                  <UnorderedList>
                                    {li.web_pages &&
                                    Array.isArray(li.web_pages) &&
                                    li.web_pages.length > 0
                                      ? li.web_pages.map(dm => {
                                          return (
                                            <React.Fragment key={dm}>
                                              <ListItem>{dm}</ListItem>
                                            </React.Fragment>
                                          );
                                        })
                                      : []}
                                  </UnorderedList>
                                </Td>
                                <Td>{li["state-province"] || "-"}</Td>
                              </Tr>
                            );
                          })
                        ) : (
                          <Td colSpan="7" textAlign="center">
                            <Text textAlign="center" fontWeight="bold">
                              Not Found
                            </Text>
                          </Td>
                        )}
                      </Tbody>
                    </Table>
                  </Box>
                </Box>
              </Flex>
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
export default connect(mapStateToProps)(UnivTableIndex);
