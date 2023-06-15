export const serverApi = "https://metsenatclub.xn--h28h.uz/api/v1";

export const LOGIN = `${serverApi}/auth/login/`;

// GET apies
export const GET_SPONSORS = `${serverApi}/sponsor-list/`;
export const GET_DASHBOARD = `${serverApi}/dashboard`;
export const GET_TRAFFIC_LIST = `${serverApi}/tariff-list`;
export const GET_SPONSOR_INFO = `${serverApi}/sponsor-detail/`;
export const GET_PAYMENT_TYPE = `${serverApi}/payment-type-list`;
export const GET_STUDENTS = `${serverApi}/student-list/`;
export const GET_STUDENT_INFO = `${serverApi}/student-detail/`;
export const GET_INSTITUTE_LIST = `${serverApi}/institute-list/`;
export const GET_SPONSOR_OF_STUDENT = `${serverApi}/student-sponsor/`;
export const GET_SPONSOR_SUMMA = `${serverApi}/sponsor-summa-list/`;

// UPDATE apies
export const PUT_SPONSOR = `${serverApi}/sponsor-update/`;
export const PUT_STUDENT = `${serverApi}/student-update/`;
export const PUT_SPONSOR_SUMMA = `${serverApi}/sponsor-summa-update/`;

// POST apies
export const POST_STUDENT = `${serverApi}/student-create/`;
export const POST_SPONSOR_SUMMA = `${serverApi}/sponsor-summa-create/`;

// DELETE apies
export const DELETE_SPONSOR_SUMMA = `${serverApi}/sponsor-summa-delete/`;
