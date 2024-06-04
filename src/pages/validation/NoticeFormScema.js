import * as Yup from 'yup';

import React from 'react'

export const NoticeFormScema = Yup.object({ 
    college_name:Yup.string().required("Select college name"),
    course_type:Yup.string().required("Select course type"),
    notice_type:Yup.string().required("Select notice type"),
    notice_date:Yup.string().required("Select notice date"),
    notice_title:Yup.string().min(3).max(200).required("Enter notice title"),
    full_url_link:Yup.string()
    .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    )
    .required('Please enter full URL link'),    
    active_status:Yup.string().required("Select active status"),
    new_tag:Yup.string().required("Select new tag")
    
});