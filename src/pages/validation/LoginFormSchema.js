import * as Yup from 'yup';

import React from 'react'

export const LoginFormSchema = Yup.object({
    email:Yup.string().min(3).max(25).email().required("enter email address"),
    password:Yup.string().min(6).required("enter password")
});