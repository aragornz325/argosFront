import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Email inválido')
        .required('Requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe ser de 6 caracteres')
        .required('Requerido'),
})

