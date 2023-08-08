/*
*
*
* @author:Usman Sultan 
*All apis and backend work of the app is in this file
*
*
*/

import { baseUrl } from './Config';
import axios from 'axios';

const GetAllServices = async () => {
    try {
        return await axios.get(`${baseUrl}/services`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}


const SaveService = async (data) => {
    try {
        return await axios.post(`${baseUrl}/services`, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}

const GetAllUsers = async () => {
    try {
        return await axios.get(`${baseUrl}/customer`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}
const GetAllBarbers = async () => {
    try {
        return await axios.get(`${baseUrl}/admin/barber-detail`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}

const GetAllApointments = async (limit, offset, filter) => {
    console.log("filter", filter)
    try {
        return await axios.get(`${baseUrl}/admin/appointments-detail?paginationLimit=${limit}&paginationOffset=${offset}&searchAppointmentStatus=${filter}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}

const BlockUsers = async (data) => {
    console.log("data", data)
    try {
        return await axios.put(`${baseUrl}/admin/block-user/${data}`, {
            "is_active": "false"
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
        return e;
    }
}

const DeleteBarber = async (id) => {
    try {
        return await axios.delete(`${baseUrl}/user/${id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}

const UpdateService = async (id, data) => {
    try {
        return await axios.put(`${baseUrl}/services/${id}`, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
    } catch (e) {
        console.log(e);
        return e;
    }
}


const BarbersWithMostAppoitmentsCompleted = async () => {
    try {
        return await axios.get(`${baseUrl}/admin/appointments/progress`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}


const AppointmentStats = async () => {

    try {
        return await axios.get(`${baseUrl}/admin/appointments/stats`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}

const SendNotification = async (data, type) => {
    let notification = "sendNotification/all";
    let body = {}
    if (type === "all") {
        body = {
            "message": data.message,
            "title": data.title,
        }
    } else {
        body = {
            "message": data.message,
            "title": data.title,
            "role_name": data.type,
        }
    }
    console.log(notification);
    try {
        return await axios.post(`${baseUrl}/${notification}`, body, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}


const GetUsersPerMonthRegisters = async () => {
    try {
        return await axios.get(`${baseUrl}/admin/users/monthlyRegistration`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (e) {
        console.log(e);
    }
}

export {
    GetAllServices,
    SaveService,
    GetAllUsers,
    GetAllBarbers,
    GetAllApointments,
    BlockUsers,
    UpdateService,
    DeleteBarber,
    AppointmentStats,
    BarbersWithMostAppoitmentsCompleted,
    SendNotification,
    GetUsersPerMonthRegisters
}