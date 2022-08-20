import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCountriesFail,
  getCountriesREQ,
  getCountriesSucc,
} from "../Redux/action";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countries);
  const getData = () => {
    dispatch(getCountriesREQ());
    axios
      .get("")
      .then((res) => dispatch(getCountriesSucc(res.data)))
      .catch((err) => dispatch(getCountriesFail));
  };
  
  useEffect(()=>{
    getData();
  },[])
  console.log(data);
  return (
    <Box>
      
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      
      <TableContainer>
      
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {data.map((e)=>{
            return ( <Tr key={e.id}>
             <Th>{e.country}</Th>
             <Th>{e.city}</Th>
             <Th>{e.population}</Th>
             <Th>Edit</Th>
             <Th>Delete</Th>
           </Tr>)
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
