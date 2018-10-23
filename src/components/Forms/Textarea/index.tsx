import * as React from 'react';

import * as S from './styled';

const Textarea = ({ field, form: { touched, errors }, ...props }) => (
    <div>
        <S.Textarea type="textarea" {...field} {...props} />
        {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
);

export default Textarea;
