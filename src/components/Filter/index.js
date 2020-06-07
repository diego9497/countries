import React, { useState, useCallback, useEffect } from "react";
import { Select, Actual, Options, Option } from "./styles";
import { FaChevronDown } from "react-icons/fa";
import { filterCountriesByRegion } from "../../features/countries/countriesSlice";
import { connect } from "react-redux";
const Filter = ({ filterCountriesByRegion, region }) => {
  // const [current, setCurrent] = useState(null);
  console.log(region);
  const [isOpen, setOpen] = useState(false);

  const handleChangeSelect = () => {
    setOpen(!isOpen);
  };

  const handleChangeOption = (region) => {
    // setCurrent(region);
    filterCountriesByRegion(region);
  };

  useEffect(() => {
    console.log(region);
  });

  return (
    <Select onClick={handleChangeSelect}>
      <Actual>
        {!region ? "Filter by Region " : region} <FaChevronDown />
      </Actual>
      <Options isOpen={isOpen}>
        <Option
          onClick={() => {
            handleChangeOption(null);
          }}
        >
          All
        </Option>
        <Option
          onClick={() => {
            handleChangeOption("Africa");
          }}
        >
          Africa
        </Option>
        <Option
          onClick={() => {
            handleChangeOption("Americas");
          }}
        >
          Americas
        </Option>
        <Option
          onClick={() => {
            handleChangeOption("Europe");
          }}
        >
          Europa
        </Option>
        <Option
          onClick={() => {
            handleChangeOption("Asia");
          }}
        >
          Asia
        </Option>
      </Options>
    </Select>
  );
};

const mapDispatchToProps = {
  filterCountriesByRegion,
};

const mapStateToProps = (state) => ({
  region: state.countries.region,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
