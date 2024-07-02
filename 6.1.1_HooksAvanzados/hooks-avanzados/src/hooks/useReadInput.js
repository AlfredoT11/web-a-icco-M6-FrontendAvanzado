import { useState } from "react";

const useReadInput = (initialValue, inputType='text', maxLength=25) => {
    const [value, setValue] = useState(initialValue);
    const handleValueTextChange = (event) => { setValue(event.target.value) }

    const props = {
        value: value,
        type: inputType,
        maxLength: maxLength,
        onChange: handleValueTextChange
    }

    return props;

}

export default useReadInput;