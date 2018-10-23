import { Field, Form, withFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import Button from 'components/Button';
import TagLine from 'components/TagLine';

// Form components
import TextField from 'components/Forms/Input';
import Textarea from 'components/Forms/Textarea';

import * as S from './styled';

class Add extends React.Component {
    public render(): JSX.Element {
        return (
            <S.Container>
                <TagLine first="add" second="advertisement" invertColor={true} />
                <Form>
                    <Field name="textfield1" component={TextField} placeholder="Name 1..." />
                    <Field name="textfield2" component={TextField} placeholder="Name 1..." />
                    <Field name="textfield3" component={TextField} placeholder="Name 1..." />
                    <Field name="textfield4" component={TextField} placeholder="Name 1..." />
                    <Field name="textarea1" component={Textarea} cols="30" rows="10" />
                    {/* <Field
                        type="text"
                        name="textfield2"
                        component={TextField}
                        placeholder="Name 2..."
                    />
                    <Field
                        type="text"
                        name="textfield3"
                        component={TextField}
                        placeholder="Name 3..."
                    /> */}
                    {/* <S.Input type="text" placeholder="Name..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." />
                    <S.Input type="text" placeholder="Something more..." /> */}
                    {/* <S.Textarea
                        name="long_description"
                        id="long_description"
                        cols="30"
                        rows="10"
                        value="Long description"
                    /> */}
                    <Button accent={'primary'} value="Save" url={`/register`} />
                    <Button accent={'secondary'} value="Cancel" url={`/register`} />
                </Form>
            </S.Container>
        );
    }
}

const schema = yup.object().shape({
    textfield1: yup.string().required(),
    textfield2: yup.string().required(),
    textfield3: yup.string().required(),
    textfield4: yup.string().required(),
    textarea1: yup
        .string()
        .min(20)
        .required(),
});

export default withFormik<any, any>({
    mapPropsToValues: () => ({
        textfield1: '',
        textfield2: '',
        textfield3: '',
        textfield4: '',
        textarea1: 'Long description',
    }),
    validationSchema: schema,
    handleSubmit: (values, { props }: any) => {
        console.log('submit: ');
        console.log(values);
        // props.onSubmit(values);
    },
})(Add);

// const InnerForm = ({ touched, errors }) => (
//     <Form>
//         <div>
//             <Field type="text" name="username" />
//             {touched.username && errors.username && errors.username}
//         </div>

//         <div>
//             <Field type="password" name="password" />
//             {touched.password && errors.password && errors.password}
//         </div>
//         <Button type="submit" value="Zaloguj" />
//     </Form>
// );

// const schema = yup.object().shape({
//     username: yup
//         .string()
//         .email()
//         .required(),
//     password: yup.string().required(),
// });

// export const LoginForm = withFormik<any, any>({
//     mapPropsToValues: () => ({
//         username: '',
//         password: '',
//     }),
//     validationSchema: schema,
//     handleSubmit: (values, { props }: any) => {
//         props.onSubmit(values);
//     },
// })(InnerForm);
