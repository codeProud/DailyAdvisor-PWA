import * as React from 'react';

import * as S from './styled';

const Input = ({ field, form: { touched, errors }, ...props }) => (
    <div>
        <S.Input type="text" {...field} {...props} />
        {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
);

export default Input;
