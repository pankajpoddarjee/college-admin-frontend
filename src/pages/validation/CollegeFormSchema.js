
import * as Yup from 'yup';
import React from 'react'
export const CollegeFormSchema = Yup.object({
    college_name:Yup.string().min(3).max(60).required("Enter college name"),
    short_name:Yup.string().min(2).max(10),
    college_code:Yup.string().min(2).max(10),
    other_name:Yup.string().min(3).max(60),
    eshtablish:Yup.number().positive().integer(),
    college_type:Yup.string().min(3).max(10),
    undertaking:Yup.string(),
    affiliation:Yup.string().required("Enter affiliation"),
    accreditation:Yup.string().min(2).max(10),
    principle_name:Yup.string().min(3).max(60),
    address:Yup.string().min(3).max(60).required("Enter address"),
    landmark:Yup.string().min(3).max(50),
    city:Yup.string().min(3).max(20).required("Select city name"),
    district:Yup.string().min(3).max(20).required("Select district name"),
    state:Yup.string().min(3).max(20).required("Select state name"),
    country:Yup.string().min(3).max(20).required("Select country name"),
    email:Yup.string().min(3).max(35).email().required("enter email address"),
    email2:Yup.string().min(3).max(35).email(),
    phone:Yup.string().min(10).max(10),
    website_url:Yup.string().url().nullable(),
    website_display:Yup.string().url().nullable(),
    course_type:Yup.string().min(3).max(50),


});