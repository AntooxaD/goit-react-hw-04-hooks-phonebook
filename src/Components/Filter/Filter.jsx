import PropTypes from 'prop-types';
import { TitleFilter, InputFilter } from '../Styled/Styled';

const Filter = ({ value, onChange }) => (
    <label>
        <TitleFilter> Find contact by name</TitleFilter>
        <InputFilter type="text" value={value} onChange={onChange} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
