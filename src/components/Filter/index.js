import React, { useState, useCallback } from "react";
import { Select, Actual, Options, Option } from "./styles";
import { FaChevronDown } from "react-icons/fa";
import { filterCountriesByRegion } from "../../actions/countries";
import { connect } from "react-redux";
const Filter = ({ filterCountriesByRegion }) => {
  const [current, setCurrent] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const handleChangeSelect = () => {
    setOpen(!isOpen);
  };

  const handleChangeOption = (region) => {
    setCurrent(region);
    filterCountriesByRegion(region);
  };

  return (
    <Select onClick={handleChangeSelect}>
      <Actual>
        {!current ? "Filter by Region " : current} <FaChevronDown />
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

export default connect(null, mapDispatchToProps)(Filter);
