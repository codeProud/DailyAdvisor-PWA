import React from 'react';
import { Form, withFormik, Field } from 'formik';
import * as yup from 'yup';
import { omit as _omit } from 'lodash';

import Button from 'components/Button';

const InnerForm = ({ values, errors, touched, handleSubmit }) => (
    <Form>
        <div>
            name:
            <Field type="text" name="name" />
            {touched.name && errors.name && errors.name}
        </div>
        <div>
            lastname:
            <Field type="text" name="lastName" />
            {touched.lastName && errors.lastName && errors.lastName}
        </div>
        <div>
            email:
            <Field type="email" name="email" />
            {touched.email && errors.email && errors.email}
        </div>
        <div>
            city:
            <Field type="text" name="city" />
            {touched.city && errors.city && errors.city}
        </div>
        <div>
            password:
            <Field type="password" name="password" />
            {touched.password && errors.password && errors.password}
        </div>
        <div>
            repeat password:
            <Field type="password" name="repeatPassword" value={values.repeatPassword} />
            {touched.repeatPassword && errors.repeatPassword && errors.repeatPassword}
        </div>
        <div>
            type:
            <Field type="text" name="userType" value={values.userType} />
            {touched.userType && errors.userType && errors.userType}
        </div>
        <Button type="submit" value="Zarejestruj" />
        <br />
        <Button value="Wróć do logowania" url={`/`} />
    </Form>
);

const schema = yup.object().shape({
    name: yup
        .string()
        .required('required')
        .min(2)
        .max(100),
    lastName: yup
        .string()
        .required('required')
        .min(2)
        .max(100),
    city: yup
        .string()
        .required('required')
        .min(4)
        .max(100),
    email: yup
        .string()
        .email('Invalid email address')
        .required('required'),
    password: yup
        .string()
        .required('required')
        .min(8),
    repeatPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must be the same')
        .required('required'),
    userType: yup.string().required(),
});

export const RegisterForm = withFormik({
    mapPropsToValues: () => ({
        name: '',
        lastName: '',
        city: '',
        email: '',
        password: '',
        repeatPassword: '',
        userType: '',
    }),
    validationSchema: schema,
    handleSubmit: (values, { props }) => {
        props.onSubmit(_omit(values, 'repeatPassword'));
    },
})(InnerForm);
